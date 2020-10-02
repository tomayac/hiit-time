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

    if (options.data) {
      const data = dataStore.get();
      data[this.name] = options.data;
      dataStore.set(data);
    }

    this.shared = options.shared || {};

    this.eventHandlers = options.eventHandlers || {};

    const innerHTML = document.body.innerHTML
      .replace('&gt;', '>')
      .replace('&lt;', '<');
    this.template = (data, eventHandlers) => eval('html`' + innerHTML + '`');

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
    render(this.template(this.getData(), this.eventHandlers), document.body);
  }

  /**
   *
   *
   * @param {*} newData
   * @memberof Page
   */
  setData(newData) {
    const data = dataStore.get();
    if (newData) {
      data[this.name] = {
        ...data[this.name],
        ...newData,
      };
      dataStore.set(data);
    }
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
   * @param {boolean} [key=false]
   * @return {object}
   * @memberof Page
   */
  async getGlobalData(key = false) {
    if (key) {
      const page = window.top.document.querySelector(`#pages iframe[name="${key}"]`);
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
    const data = dataStore.get();
    return data;
  }
}

export default Page;
