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

import Page from '../../page.js';

const topWindowDocument = top.window.document;

// eslint-disable-next-line no-unused-vars
const page = new Page({
  data: {
    sound: true,
    speak: true,
    themes: [
      'hsla(208, 79%, 51%, 1)',
      'hsla(96, 62%, 30%, 1)',
      'hsla(7, 79%, 51%, 1)',
    ],
  },

  eventHandlers: {
    toggleSound(e) {
      page.setData({ sound: e.target.checked });
    },

    toggleSpeak(e) {
      page.setData({ speak: e.target.checked });
    },

    selectLanguage(e) {
      const selectedOption = e.target.options[e.target.options.selectedIndex];
      page.setGlobalData({ locale: selectedOption.value });
    },

    selectTheme(e) {
      console.log(e);
      const selectedOption = e.target.options[e.target.options.selectedIndex];
      page.shared.updateTheme(selectedOption.value);
    },
  },

  shared: {
    updateTheme(value) {
      page.setGlobalData({ theme: value });
      topWindowDocument.documentElement.style.setProperty(
        '--theme-color',
        value
      );
      topWindowDocument.head.querySelector(
        'meta[name="theme-color"]'
      ).content = value;
      const iframes = Array.from(topWindowDocument.querySelectorAll('iframe'));
      iframes.forEach((iframe) => {
        iframe.contentWindow.document.documentElement.style.setProperty(
          '--theme-color',
          value
        );
      });
    },
  },

  onLoad() {
    const theme = page.getGlobalData().theme;
    page.shared.updateTheme(theme);
  },
});
