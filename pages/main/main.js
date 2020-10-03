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
      rounds: 0,
      active: 0,
      resting: 0,
    },
  },

  shared: {
    interval: null,
    wasReset: false,
  },

  eventHandlers: {
    async start() {
      page.shared.paused = false;
      page.setData({ timers: await page.getGlobalData('sessions').timers });
      await page.eventHandlers.reset();
      page.shared.wasReset = false;

      const countDown = (duration, elem) => {
        return new Promise((resolve) => {
          let passed = 0;
          page.shared.interval = setInterval(() => {
            if (page.shared.paused) {
              return;
            }
            passed += 1;
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
      for (let i = 0; i < activeTimer.rounds; i++) {
        page.setData({ rounds: activeTimer.rounds - i });
        await countDown(activeTimer.active, 'active');
        await countDown(activeTimer.resting, 'resting');
      }
    },

    pause() {
      page.shared.paused = page.shared.paused ? false : true;
    },

    async reset() {
      const timers = page.getData('timers')
        ? page.getData('timers')
        : (await page.getGlobalData('sessions')).timers;
      page.setData({ timers: timers });
      const activeTimer = timers[0];
      // Shortcut to reset `active`, `resting`, and `rounds`.
      page.setData(activeTimer);
      page.setData({ activeTimer: activeTimer });
      page.shared.wasReset = true;
      if (page.shared.interval) {
        clearInterval(page.shared.interval);
        page.shared.interval = null;
      }
    },
  },

  async onLoad() {
    await page.eventHandlers.reset();
  },

  onShow() {},
});
