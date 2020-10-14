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

const topWindowDocument = window.top.document;
const originalTitle = topWindowDocument.title;
const navbar = topWindowDocument.querySelector('iframe[name="navbar"]');
const title = navbar.contentDocument.querySelector('#title');
const anchors = document.querySelectorAll('a');
const pages = Array.from(topWindowDocument.querySelectorAll('#pages iframe'));
const pageNames = pages.map((page) => page.name);

const showView = (target) => {
  // Hide all other pages.
  pages
    .filter((page) => page.name !== target)
    .forEach((page) => {
      if (page.style.display === 'block') {
        const event = new CustomEvent('apppagehide', { detail: page.name });
        page.contentWindow.dispatchEvent(event);
      }
      page.style.display = 'none';
    });

  // Show the desired page.
  const targetPage = pages.find((page) => page.name === target);
  const event = new CustomEvent('apppageshow', { detail: target });
  targetPage.contentWindow.dispatchEvent(event);
  targetPage.style.display = 'block';

  // Update title and hash
  title.textContent = target;
  topWindowDocument.title = `${originalTitle} — ${target}`;
  parent.location.hash = target;
};

// Hook up tab bar links.
const onAnchorClick = (e) => {
  e.preventDefault();
  const clickedAnchor = e.target;
  anchors.forEach((anchor) => {
    if (clickedAnchor === anchor) {
      return anchor.classList.add('highlight');
    }
    anchor.classList.remove('highlight');
  });
  showView(clickedAnchor.target);
};
anchors.forEach((anchor) => {
  anchor.addEventListener('click', onAnchorClick);
});

const navigateToHash = () => {
  const hash = topWindowDocument.location.hash.substr(1);
  if (hash && pageNames.includes(hash)) {
    showView(hash);
  } else {
    showView('workout');
  }
  anchors.forEach((anchor) => {
    if (anchor.target === hash) {
      return anchor.classList.add('highlight');
    }
    anchor.classList.remove('highlight');
  });
};

// Restore state on load, or load default state.
Promise.all(
  pages.map((page) => {
    return new Promise((resolve) => {
      if (page.contentDocument.readyState === 'complete') {
        return resolve();
      }
      page.addEventListener('load', () => {
        resolve();
      });
    });
  })
).then(() => {
  navigateToHash();
});

window.top.addEventListener('popstate', navigateToHash);
