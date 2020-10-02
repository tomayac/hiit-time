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

let interval = null;
let wasReset = false;

const start = async () => {
  reset();
  const timer = page.getGlobalData('sessions').timers[0];
  wasReset = false;

  const countDown = (duration, elem) => {
    return new Promise((resolve) => {
      let passed = 0;
      interval = setInterval(() => {
        passed += 1;
        if (passed === duration || wasReset) {
          page.setData({
            [elem]: 0,
          });
          clearInterval(interval);
          return resolve();
        }
        page.setData({
          [elem]: duration - passed,
        });
      }, 1000);
    });
  };

  for (let i = 0; i < timer.rounds; i++) {
    page.setData({ rounds: timer.rounds - i });
    await countDown(timer.active, 'active');
    await countDown(timer.resting, 'resting');
  }
};

const reset = () => {
  const timer = page.getGlobalData('sessions').timers[0];
  page.setData(timer);
  wasReset = true;
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

const page = new Page({
  data: {
    start: start,
    reset: reset,
  },

  onLoad: () => {

  },

  onShow: () => {

  },
});
