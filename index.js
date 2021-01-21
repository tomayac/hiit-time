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

import Page from './page.js';

const INDEX = 'index';

document.documentElement.style.setProperty(
  '--100vh',
  `${window.innerHeight}px`
);

let resizeTimer = null;
window.addEventListener('resize', () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    document.documentElement.style.setProperty(
      '--100vh',
      `${window.innerHeight}px`
    );
  }, 100);
});

window.name = INDEX;

// eslint-disable-next-line no-unused-vars
const page = new Page({
  async onLoad() {
    page.setGlobalData({ theme: 'hsla(208, 79%, 51%, 1)' });
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.register('./serviceworker.js');
    }
    if (
      /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent) &&
      !matchMedia('(display-mode: standalone)').matches
    ) {
      import('https://unpkg.com/pwacompat');
    }
  },
});
