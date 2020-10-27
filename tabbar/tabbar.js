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

import Page from '../page.js';
import strings from '../strings.js';

const topWindowDocument = window.top.document;
const navbar = topWindowDocument.querySelector('iframe[name="navbar"]');
const tabbar = topWindowDocument.querySelector('iframe[name="tabbar"]');

// Dynamically populate the tabbar based on the pages in `index.html`.
const populateTabbar = () => {
  const main = document.querySelector('main');
  topWindowDocument
    .querySelectorAll('#pages iframe:not([name="new-page"])')
    .forEach((iframe) => {
      const anchor = document.createElement('a');
      anchor.href = `/#${iframe.name}`;
      anchor.setAttribute(
        'class',
        "${window.top.location.hash==='#" + iframe.name + "'?'highlight':''}"
      );
      anchor.textContent = '${strings.' + iframe.name.toUpperCase() + '}';
      main.append(anchor);
    });
};
populateTabbar();

const showView = (target) => {
  // Hide all other pages.
  const iframes = Array.from(
    topWindowDocument.querySelectorAll('#pages iframe')
  );
  iframes
    .filter((iframe) => iframe.name !== target)
    .forEach((iframe) => {
      // Send the `apppagehide` event.
      if (iframe.style.display === 'block') {
        const event = new CustomEvent('apppagehide', { detail: iframe.name });
        iframe.contentWindow.dispatchEvent(event);
      }
      iframe.style.display = 'none';
      // This is for hiding the new page placeholder.
      // Showing it is handled in `page.js`.
      if (iframe.id === 'new-page') {
        // Reset the new page placeholder's URL.
        iframe.src = 'about:blank';
        // Show the tabbar again.
        tabbar.style.display = 'block';
      }
    });

  // Show the desired page.
  const targetIframe = iframes.find((iframe) => iframe.name === target);
  if (targetIframe) {
    const sendAppPageShowEvents = () => {
      // Inform the tabbar and the navbar of the shown page.
      [targetIframe, tabbar, navbar].forEach((iframe) => {
        const event = new CustomEvent('apppageshow', { detail: iframe.name });
        iframe.contentWindow.dispatchEvent(event);
      });
      targetIframe.style.display = 'block';
      // Update the main window's title.
      const localeStrings = strings[page.getGlobalData().locale];
      topWindowDocument.title = `${localeStrings.TITLE} — ${
        localeStrings[target.toUpperCase()]
      }`;
    };
    if (targetIframe.contentDocument.readyState === 'complete') {
      sendAppPageShowEvents();
    } else {
      targetIframe.addEventListener('load', () => {
        sendAppPageShowEvents();
      });
    }
  }
};

const navigateToHash = () => {
  const hash = topWindowDocument.location.hash.substr(1);
  const iframeNames = Array.from(
    topWindowDocument.querySelectorAll('#pages iframe')
  ).map((iframe) => iframe.name);
  if (hash && iframeNames.includes(hash)) {
    showView(hash);
  } else {
    // Fall back to the first page.
    showView(iframeNames[0]);
  }
};

// Restore state on load, or load default state.
Promise.all(
  Array.from(topWindowDocument.querySelectorAll('#pages iframe')).map(
    (iframe) => {
      return new Promise((resolve) => {
        if (iframe.contentDocument.readyState === 'complete') {
          return resolve();
        }
        iframe.addEventListener('load', () => {
          resolve();
        });
      });
    }
  )
).then(() => {
  navigateToHash();
});

window.top.addEventListener('popstate', navigateToHash);

// eslint-disable-next-line no-unused-vars
const page = new Page({});
