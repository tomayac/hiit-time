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
      this.data = options.data;
    } else {
      this.data = {};
    }
    const innerHTML = document.body.innerHTML.replace('&gt;', '>').replace('&lt;', '<');
    this.template = (data) => eval('html`' + innerHTML + '`');

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
    const data = this.getData();
    render(this.template(data), document.body);
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
        ...newData
      };
      dataStore.set(data);
    }
    this.data = data;
    this.renderPage();
  }

  /**
   *
   *
   * @return {object}
   * @memberof Page
   */
  getData() {
    const data = dataStore.get();
    this.data = data[this.name];
    return this.data;
  }

  /**
   *
   *
   * @param {boolean} [key=false]
   * @return {object}
   * @memberof Page
   */
  getGlobalData(key = false) {
    const data = dataStore.get();
    this.data = data[this.name];
    return key ? data[key] : data;
  }
}

export default Page;
