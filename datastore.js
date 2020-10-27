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

import strings from './strings.js';

window.top._store = window.top._store || {
  global: {
    languages: Object.keys(strings),
    locale: 'en-US',
  },
};

/**
 *
 *
 * @class DataStore
 */
class DataStore {
  /**
   *Creates an instance of DataStore.
   * @param {*} props
   * @memberof DataStore
   */
  constructor(props) {
    if (props) {
      window.top._store = props;
    }
  }

  /**
   *
   *
   * @return {Object}
   * @memberof DataStore
   */
  get() {
    return window.top._store;
  }

  /**
   *
   *
   * @param {*} props
   * @memberof DataStore
   */
  set(props) {
    if (props) {
      window.top._store = props;
    }
  }
}

export default DataStore;
