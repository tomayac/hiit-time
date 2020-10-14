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
    async start() {
      page.shared.paused = false;
      page.setData({ timers: await page.getGlobalData('sessions').timers });
      await page.eventHandlers.reset();
      page.shared.wasReset = false;

      if ('wakeLock' in navigator) {
        const requestWakeLock = async () => {
          try {
            page.shared.wakeLock = await navigator.wakeLock.request('screen');
            page.shared.wakeLock.addEventListener('release', () => {
              console.log('Screen Wake Lock released:', page.shared.wakeLock.released);
            });
            console.log('Screen Wake Lock released:', page.shared.wakeLock.released);
          } catch (err) {
            console.error(`${err.name}, ${err.message}`);
          }
        };

        // Request a screen wake lock…
        await requestWakeLock();
        document.addEventListener('visibilitychange', async () => {
          if (page.shared.wakeLock !== null && document.visibilityState === 'visible') {
            await requestWakeLock();
          }
        });
      }

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

      const countDown = (duration, elem) => {
        return new Promise((resolve) => {
          let passed = 0;
          page.shared.interval = setInterval(() => {
            if (page.shared.paused) {
              return;
            }
            passed += 1;

            if (passed === duration) {
              beep(500, 440);
            } else if (passed >= duration - 3) {
              beep(250, 523.25);
            }
            if (passed === duration || page.shared.wasReset) {
              page.setData({
                [elem]: 0,
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
        await countDown(activeTimer.active, 'active');
        await countDown(activeTimer.resting, 'resting');
      }
    },

    pause() {
      page.shared.paused = page.shared.paused ? false : true;
      if (page.shared.wakeLock) {
        page.shared.wakeLock.release();
      }
    },

    async reset() {
      const timers = page.getData('timers')
        ? page.getData('timers')
        : (await page.getGlobalData('sessions')).timers;
      page.setData({ timers: timers });
      const activeTimer = timers[0];
      // Shortcut to reset `active`, `resting`, and `sets`.
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
