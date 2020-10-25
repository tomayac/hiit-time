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

import DataStore from '/datastore.js';
// eslint-disable-next-line no-unused-vars
import { html, render } from '/node_modules/lit-html/lit-html.js';
import strings from '/strings.js';

const dataStore = new DataStore();

/**
 *
 *
 * @class Page
 */
class Page {
  /**
   *Creates an instance of Page.
   * @param {*} options
   * @memberof Page
   */
  constructor(options) {
    this.name = window.name;

    this.strings = strings[this.getGlobalData().locale];

    this.shared = options.shared || {};

    this.eventHandlers = options.eventHandlers || {};

    const innerHTML = document.body.innerHTML
      .replace('&gt;', '>')
      .replace('&lt;', '<');
    this.template = (data, global, eventHandlers, strings) =>
      eval('html`' + innerHTML + '`');

    if (options.data) {
      const data = dataStore.get();
      data[this.name] = options.data;
      dataStore.set(data);
    } else {
      this.renderPage();
    }

    this.onLoad = options.onLoad || (() => {});
    this.onUnload = options.onUnload || (() => {});
    this.onShow = options.onShow || (() => {});
    this.onHide = options.onHide || (() => {});

    window.addEventListener('load', (e) => {
      console.log('apppageload', this.name);
      this.onLoad();
    });

    window.addEventListener('unload', (e) => {
      console.log('apppageunload', this.name);
      this.onUnload();
    });

    window.addEventListener('apppageshow', (e) => {
      this.strings = strings[this.getGlobalData().locale];
      console.log('apppageshow', this.name);
      this.onShow();
      this.renderPage();
    });

    window.addEventListener('apppagehide', (e) => {
      console.log('apppagehide', this.name);
      this.onHide();
    });
  }

  /**
   *
   *
   * @memberof Page
   */
  renderPage() {
    render(
      this.template(
        this.getData(),
        this.getGlobalData(),
        this.eventHandlers,
        this.strings
      ),
      document.body
    );
  }

  /**
   *
   *
   * @param {*} src
   * @param {*} data
   * @memberof Page
   */
  newPage({ src, target, data }) {
    const newPage = window.top.document.querySelector('#new-page');
    newPage.name = target;
    newPage.contentWindow.name = target;
    newPage.addEventListener(
      'load',
      () => {
        this.setPageData(target, data);
        parent.location.hash = target;
      },
      { once: true }
    );
    newPage.src = src;
  }

  /**
   *
   *
   * @param {*} newData
   * @memberof Page
   */
  setData(newData) {
    const data = dataStore.get();
    if (newData === null) {
      delete data[this.name];
      dataStore.set(data);
      return;
    }
    data[this.name] = {
      ...data[this.name],
      ...newData,
    };
    dataStore.set(data);
    this.renderPage();
  }

  /**
   *
   *
   * @param {boolean} [key=false]
   * @return {object}
   * @memberof Page
   */
  getData(key = false) {
    const data = dataStore.get();
    return key ? data[this.name][key] : data[this.name];
  }

  /**
   *
   *
   * @return {object}
   * @memberof Page
   */
  getGlobalData() {
    const data = dataStore.get();
    return data.global;
  }

  /**
   *
   *
   * @param {boolean} [key=false]
   * @return {object}
   * @memberof Page
   */
  async getPageData(key = false) {
    if (!key) {
      return;
    }
    const page = window.top.document.querySelector(
      `#pages iframe[name="${key}"]`
    );
    return new Promise((resolve) => {
      if (page.contentDocument.readyState === 'complete') {
        const data = dataStore.get();
        return resolve(data[key]);
      }
      page.addEventListener('load', () => {
        const data = dataStore.get();
        resolve(data[key]);
      });
    });
  }

  /**
   *
   *
   * @param {*} key
   * @param {*} newData
   * @memberof Page
   */
  setPageData(key, newData) {
    if (!key) {
      return;
    }
    const data = dataStore.get();
    if (newData === null) {
      delete data[key];
      dataStore.set(data);
      return;
    }
    data[key] = {
      ...data[key],
      ...newData,
    };
    dataStore.set(data);
    this.renderPage();
  }

  /**
   *
   *
   * @param {*} newData
   * @memberof Page
   */
  setGlobalData(newData) {
    const data = dataStore.get();
    if (newData === null) {
      delete data['global'];
      dataStore.set(data);
      return;
    }
    data['global'] = {
      ...data['global'],
      ...newData,
    };
    dataStore.set(data);
    if (newData.locale) {
      this.strings = strings[newData.locale];
      window.top.document
        .querySelectorAll('iframe[name=tabbar],iframe[name=navbar]')
        .forEach((iframe) => {
          const event = new CustomEvent('apppageshow', { detail: iframe.name });
          iframe.contentWindow.dispatchEvent(event);
        });
    }
    this.renderPage();
  }
}

export default Page;
