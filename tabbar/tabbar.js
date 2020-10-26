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
import strings from '/strings.js';

const topWindowDocument = window.top.document;
let originalTitle = null;
const navbar = topWindowDocument.querySelector('iframe[name="navbar"]');
const navbarTitle = navbar.contentDocument.querySelector('#title');
const tabbar = topWindowDocument.querySelector('iframe[name="tabbar"]');

const showView = (target) => {
  // Hide all other pages.
  const pages = Array.from(topWindowDocument.querySelectorAll('#pages iframe'));
  pages
    .filter((page) => page.name !== target)
    .forEach((page) => {
      if (page.style.display === 'block') {
        const event = new CustomEvent('apppagehide', { detail: page.name });
        page.contentWindow.dispatchEvent(event);
      }
      page.style.display = 'none';
      if (page.id === 'new-page') {
        page.src = 'about:blank';
        tabbar.style.display = 'block';
      }
    });

  // Show the desired page.
  const targetPage = pages.find((page) => page.name === target);
  if (targetPage) {
    const sendAppPageShow = () => {
      const event1 = new CustomEvent('apppageshow', { detail: target });
      targetPage.contentWindow.dispatchEvent(event1);
      const event2 = new CustomEvent('apppageshow', { detail: 'navbar' });
      tabbar.contentWindow.dispatchEvent(event2);
    };
    if (targetPage.contentDocument.readyState === 'complete') {
      sendAppPageShow();
      targetPage.style.display = 'block';
    } else {
      targetPage.addEventListener('load', () => {
        sendAppPageShow();
        targetPage.style.display = 'block';
      });
    }
  }
};

const navigateToHash = () => {
  const hash = topWindowDocument.location.hash.substr(1);
  const pageNames = Array.from(
    topWindowDocument.querySelectorAll('#pages iframe')
  ).map((page) => page.name);
  if (hash && pageNames.includes(hash)) {
    showView(hash);
  } else {
    showView('workout');
  }
  const event = new CustomEvent('apppageshow', { detail: 'navbar' });
  navbar.contentWindow.dispatchEvent(event);
};

// Restore state on load, or load default state.
Promise.all(
  Array.from(topWindowDocument.querySelectorAll('#pages iframe')).map(
    (page) => {
      return new Promise((resolve) => {
        if (page.contentDocument.readyState === 'complete') {
          return resolve();
        }
        page.addEventListener('load', () => {
          resolve();
        });
      });
    }
  )
).then(() => {
  navigateToHash();
});

window.top.addEventListener('popstate', navigateToHash);

const page = new Page({
  onLoad() {
    originalTitle = strings[page.getGlobalData().locale].TITLE;
  },
});
