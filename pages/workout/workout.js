/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

import Page from '/page.js';
import '/node_modules/@shoelace-style/shoelace/dist/shoelace/shoelace.esm.js';
import '/components/human-duration/human-duration.js';

const STRINGS = {
  ACTIVE: 'Active.',
  REST: 'Rest.',
  WORKOUT_FINISHED: 'Workout finished.',
  3: 'Three.',
  2: 'Two.',
  1: 'One',
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const say = (words) => {
  const utterance = new SpeechSynthesisUtterance(words);
  speechSynthesis.speak(utterance);
};

/**
 *
 *
 * @param {integer} duration Duration of the tone in milliseconds. Default is 500
 * @param {double} frequency Frequency of the tone in hertz. default is 440
 * @param {integer} volume Volume of the tone. Default is 1, off is 0.
 * @param {string} type Type of tone. Possible values are sine, square, sawtooth, triangle, and custom. Default is sine.
 * @param {function} callback Callback to use on end of tone
 */
const beep = (duration, frequency, volume, type, callback) => {
  const audioCtx = new (window.AudioContext ||
    window.webkitAudioContext ||
    window.audioContext)();

  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  if (volume) {
    gainNode.gain.value = volume;
  }
  if (frequency) {
    oscillator.frequency.value = frequency;
  }
  if (type) {
    oscillator.type = type;
  }
  if (callback) {
    oscillator.onended = callback;
  }

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + (duration || 500) / 1000);
};

const page = new Page({
  data: {
    activeTimer: {
      sets: 0,
      active: 0,
      resting: 0,
    },
  },

  shared: {
    interval: null,
    wasReset: false,
    wakeLock: null,
  },

  eventHandlers: {
    async selectTimer(e) {
      const selectedOption = e.target.options[e.target.options.selectedIndex];
      const { sets, active, resting } = selectedOption.dataset;
      const timers = page.getData('timers');
      const activeTimer = timers.find(
        (timer) =>
          timer.sets === parseInt(sets, 10) &&
          timer.active === parseInt(active, 10) &&
          timer.resting === parseInt(resting, 10)
      );
      page.setData({ activeTimer: activeTimer });
      // Shortcut to set `active`, `resting`, and `sets` individually.
      page.setData(activeTimer);
      await page.eventHandlers.reset();
    },

    async start() {
      page.shared.paused = false;
      page.setData({ timers: (await page.getGlobalData('timers')).timers });
      const { sound, speak } = await page.getGlobalData('preferences');
      await page.eventHandlers.reset();
      page.shared.wasReset = false;

      if ('wakeLock' in navigator) {
        const requestWakeLock = async () => {
          try {
            page.shared.wakeLock = await navigator.wakeLock.request('screen');
            page.shared.wakeLock.addEventListener('release', () => {
              // Nothing.
            });
          } catch (err) {
            console.error(`${err.name}, ${err.message}`);
          }
        };
        // Request a screen wake lock…
        await requestWakeLock();
        // …and re-request it when the page becomes visible.
        document.addEventListener('visibilitychange', async () => {
          if (
            page.shared.wakeLock !== null &&
            document.visibilityState === 'visible'
          ) {
            await requestWakeLock();
          }
        });
      }

      const countDown = (duration, elem, lastSet = false) => {
        return new Promise((resolve) => {
          let passed = 0;
          page.shared.interval = setInterval(() => {
            if (page.shared.paused) {
              return;
            }
            passed += 1;

            if (sound) {
              if (passed === duration) {
                if (speak && !lastSet) {
                  say(elem === 'active' ? STRINGS.REST : STRINGS.ACTIVE);
                }
                beep(500, 440);
              } else if (passed >= duration - 3) {
                if (speak) {
                  say(STRINGS[duration - passed]);
                }
                beep(250, 523.25);
              }
            }
            if (passed === duration || page.shared.wasReset) {
              page.setData({
                [elem]: page.getData().activeTimer[elem],
              });
              clearInterval(page.shared.interval);
              return resolve();
            }
            page.setData({
              [elem]: duration - passed,
            });
          }, 1000);
        });
      };

      const activeTimer = page.getData('activeTimer');
      for (let i = 0; i < activeTimer.sets; i++) {
        page.setData({ sets: activeTimer.sets - i });
        await countDown(
          activeTimer.active,
          'active',
          i === activeTimer.sets - 1
        );
        // The last set ends with the active period.
        if (i < activeTimer.sets - 1) {
          await countDown(activeTimer.resting, 'resting');
        }
      }
      if (speak) {
        say(STRINGS.WORKOUT_FINISHED);
      }
      await sleep(1000);
      beep(500, 440);
      await sleep(1000);
      beep(1000, 440);
      page.eventHandlers.reset();
    },

    pause() {
      page.shared.paused = page.shared.paused ? false : true;
      if (page.shared.wakeLock) {
        page.shared.wakeLock.release();
      }
    },

    async reset() {
      const timers =
        page.getData('timers') || (await page.getGlobalData('timers')).timers;
      page.setData({ timers: timers });
      const activeTimer =
        page.getData('activeTimer').sets !== 0
          ? page.getData('activeTimer')
          : timers[0];
      // Shortcut to set `active`, `resting`, and `sets` individually.
      page.setData(activeTimer);
      page.setData({ activeTimer: activeTimer });
      page.shared.wasReset = true;
      if (page.shared.interval) {
        clearInterval(page.shared.interval);
        page.shared.interval = null;
      }
      if (page.shared.wakeLock) {
        page.shared.wakeLock.release();
      }
    },
  },

  async onLoad() {
    await page.eventHandlers.reset();
  },

  onShow() {},
});
