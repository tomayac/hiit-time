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

// See https://html.spec.whatwg.org/multipage/common-dom-interfaces.html ↵
// #reflecting-content-attributes-in-idl-attributes.

const installStringReflection = (obj, attrName, propName = attrName) => {
  Object.defineProperty(obj, propName, {
    enumerable: true,
    get() {
      const value = this.getAttribute(attrName);
      return value === null ? '' : value;
    },
    set(v) {
      this.setAttribute(attrName, v);
    },
  });
};

const VALUE = 'value';
const UNIT = 'unit';

const template = document.createElement('template');
// eslint-disable max-len
template.innerHTML = `
  <style>
    div {
      display: inline-block;
    }
  </style>
  <div></div>
`;

/**
 *
 *
 * @export
 * @class HumanDuration
 * @extends {HTMLElement}
 */
export class HumanDuration extends HTMLElement {
  /**
   *
   *
   * @readonly
   * @static
   * @memberof HumanDuration
   */
  static get observedAttributes() {
    return [UNIT, VALUE];
  }

  /**
   *Creates an instance of HumanDuration.
   * @memberof HumanDuration
   */
  constructor() {
    super();

    installStringReflection(this, VALUE);
    installStringReflection(this, UNIT);

    this._initializeDOM();
  }

  /**
   *
   *
   * @memberof HumanDuration
   */
  _initializeDOM() {
    this._shadowRoot = this.attachShadow({ mode: 'closed' });
    this._shadowRoot.append(template.content.cloneNode(true));
    this._container = this._shadowRoot.querySelector('div');
    if (this.unit && this.value) {
      this._getDuration();
    }
  }

  /**
   *
   *
   * @memberof HumanDuration
   */
  _getDuration() {
    this._container.textContent = `${Math.ceil(this.value / 60)}min`;
  }

  /**
   *
   *
   * @param {*} name
   * @param {*} oldValue
   * @param {*} newValue
   * @memberof HumanDuration
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === VALUE || name === UNIT) {
      this._getDuration();
    }
  }
}

window.customElements.define('human-duration', HumanDuration);
