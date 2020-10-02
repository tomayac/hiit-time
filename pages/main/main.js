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

const page = new Page({
  data: {},

  shared: {
    interval: null,
    wasReset: false,
  },

  eventHandlers: {
    start: async () => {
      page.setData({ timers: page.getGlobalData('sessions').timers });
      page.eventHandlers.reset();
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

      const activeTimer = page.getData('timers')[0];
      for (let i = 0; i < activeTimer.rounds; i++) {
        page.setData({ rounds: activeTimer.rounds - i });
        await countDown(activeTimer.active, 'active');
        await countDown(activeTimer.resting, 'resting');
      }
    },

    pause: () => {
      page.shared.paused = page.shared.paused ? false : true;
    },

    reset: () => {
      const activeTimer = page.getData('timers')
        ? page.getData('timers')[0]
        : page.getGlobalData('sessions').timers[0];
      page.setData(activeTimer);
      page.shared.wasReset = true;
      if (page.shared.interval) {
        clearInterval(page.shared.interval);
        page.shared.interval = null;
      }
    },
  },

  onLoad: () => {},

  onShow: () => {},
});
