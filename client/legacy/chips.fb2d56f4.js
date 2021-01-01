import { X as styleInject, Y as _inherits, Z as _getPrototypeOf, $ as _possibleConstructorReturn, a0 as _classCallCheck, i as init, s as safe_not_equal, a1 as _assertThisInitialized, e as dispatch_dev, a2 as _createClass, S as SvelteComponentDev, aJ as _toConsumableArray, a3 as exclude, L as binding_callbacks, M as bind, w as validate_slots, a5 as forwardEventsBuilder, a6 as get_current_component, G as validate_store, H as component_subscribe, ai as setContext, am as getContext, a7 as onMount, a4 as assign, a9 as exclude_internal_props, aj as writable, az as Div, ak as set_store_value, x as create_component, O as empty, y as claim_component, z as mount_component, r as insert_dev, ac as _slicedToArray, ad as get_spread_update, aw as get_spread_object, N as add_flush_callback, P as group_outros, D as transition_out, E as destroy_component, Q as check_outros, C as transition_in, h as detach_dev, ah as create_slot, g as element, k as claim_element, l as children, o as attr_dev, p as add_location, f as space, j as claim_space, al as update_slot, a8 as onDestroy, V as validate_each_argument, aD as validate_each_keys, aV as afterUpdate, aa as useActions, ab as set_attributes, A as action_destroyer, aq as listen_dev, aE as update_keyed_each, ae as is_function, af as run_all, aF as outro_and_destroy_block, ap as svg_element, u as append_dev, v as noop, _ as _inherits$1, a as _getPrototypeOf$1, b as _possibleConstructorReturn$1, c as _classCallCheck$1, d as _assertThisInitialized$1, ag as Button_1, aA as Label, t as text, q as query_selector_all, m as claim_text, B as _slicedToArray$1, U as set_data_dev } from './client.7aab66ca.js';

var css_248z = ".mdc-chip__icon--leading,.mdc-chip__icon--trailing{color:rgba(0,0,0,.54)}.mdc-chip__icon--trailing:hover{color:rgba(0,0,0,.62)}.mdc-chip__icon--trailing:focus{color:rgba(0,0,0,.87)}.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}.mdc-chip__icon--trailing[dir=rtl],[dir=rtl] .mdc-chip__icon--trailing{margin-left:-4px;margin-right:4px}.mdc-touch-target-wrapper{display:inline}.mdc-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87);font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;height:32px;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:none;cursor:pointer;-webkit-appearance:none}.mdc-chip,.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip:hover{color:rgba(0,0,0,.87)}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:-4px;margin-right:4px}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl],[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:4px;margin-right:-4px}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip:hover{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-chip--exit{transition:opacity 75ms cubic-bezier(.4,0,.2,1),width .15s cubic-bezier(0,0,.2,1),padding .1s linear,margin .1s linear;opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:none;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset .15s cubic-bezier(.4,0,.6,1) 50ms;stroke-width:2px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-chip__text:focus{outline:none}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading{color:rgba(255,62,0,.54)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover{color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path{stroke:#ff3e00;stroke:var(--mdc-theme-primary,#ff3e00)}.mdc-chip-set--choice .mdc-chip--selected{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width .15s cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0ms}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-chip{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-chip .mdc-chip__ripple:after,.mdc-chip .mdc-chip__ripple:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-chip .mdc-chip__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-chip.mdc-ripple-upgraded--unbounded .mdc-chip__ripple:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-chip.mdc-ripple-upgraded--foreground-activation .mdc-chip__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-chip.mdc-ripple-upgraded--foreground-deactivation .mdc-chip__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-chip .mdc-chip__ripple:after,.mdc-chip .mdc-chip__ripple:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-chip .mdc-chip__ripple:after,.mdc-chip .mdc-chip__ripple:before{background-color:rgba(0,0,0,.87)}.mdc-chip:hover .mdc-chip__ripple:before{opacity:.04}.mdc-chip.mdc-ripple-upgraded--background-focused .mdc-chip__ripple:before,.mdc-chip.mdc-ripple-upgraded:focus-within .mdc-chip__ripple:before,.mdc-chip:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple:before,.mdc-chip:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple:before{transition-duration:75ms;opacity:.12}.mdc-chip:not(.mdc-ripple-upgraded) .mdc-chip__ripple:after{transition:opacity .15s linear}.mdc-chip:not(.mdc-ripple-upgraded):active .mdc-chip__ripple:after{transition-duration:75ms;opacity:.12}.mdc-chip.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-chip .mdc-chip__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before{opacity:.08}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:after,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:after,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover .mdc-chip__ripple:before{opacity:.12}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded:focus-within .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple:before{transition-duration:75ms;opacity:.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded) .mdc-chip__ripple:after{transition:opacity .15s linear}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active .mdc-chip__ripple:after{transition-duration:75ms;opacity:.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.2}@keyframes mdc-chip-entry{0%{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}";
styleInject(css_248z);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, __spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new MDCFoundation({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */

function applyPassive(globalObj, forceRefresh) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported_1 = false;

    try {
      globalObj.document.addEventListener('test', function () {
        return undefined;
      }, {
        get passive() {
          isSupported_1 = true;
          return isSupported_1;
        }

      });
    } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


    supportsPassive_ = isSupported_1;
  }

  return supportsPassive_ ? {
    passive: true
  } : false;
}

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;

function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug'; // Append to head instead of body because this script might be invoked in the
  // head, in which case the body doesn't exist yet. The probe works either way.

  document.head.appendChild(node); // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';

  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  return hasPseudoVarBug;
}

function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVars = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  __extends(MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        browserSupportsCssVars: function browserSupportsCssVars() {
          return true;
        },
        computeBoundingRect: function computeBoundingRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function containsEventTarget() {
          return true;
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function isSurfaceActive() {
          return true;
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return true;
        },
        isUnbounded: function isUnbounded() {
          return true;
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        updateCssVariable: function updateCssVariable() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.addClass(ROOT_1);

        if (_this.adapter_.isUnbounded()) {
          _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.removeClass(ROOT_2);

        _this.adapter_.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter_.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter_.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter_.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = _assign({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function getBoundedRadius() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE); // Unbounded ripple size should always be even number to equally center align.

    if (this.adapter_.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize_ = initialSize - 1;
    } else {
      this.initialSize_ = initialSize;
    }

    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCRipple =
/** @class */
function (_super) {
  __extends(MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return supportsCssVariables(window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches(instance.root_, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return Boolean(instance.disabled);
      },
      isUnbounded: function isUnbounded() {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, applyPassive());
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, applyPassive());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function get() {
      return Boolean(this.unbounded_);
    },
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new MDCRippleFoundation(MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(MDCComponent);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Direction;

(function (Direction) {
  Direction[Direction["RIGHT"] = 0] = "RIGHT";
  Direction[Direction["LEFT"] = 1] = "LEFT";
})(Direction || (Direction = {}));

var EventSource;

(function (EventSource) {
  EventSource[EventSource["PRIMARY"] = 0] = "PRIMARY";
  EventSource[EventSource["TRAILING"] = 1] = "TRAILING";
  EventSource[EventSource["NONE"] = 2] = "NONE";
})(EventSource || (EventSource = {}));

var strings$1 = {
  ARIA_CHECKED: 'aria-checked',
  ARROW_DOWN_KEY: 'ArrowDown',
  ARROW_LEFT_KEY: 'ArrowLeft',
  ARROW_RIGHT_KEY: 'ArrowRight',
  ARROW_UP_KEY: 'ArrowUp',
  BACKSPACE_KEY: 'Backspace',
  CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
  DELETE_KEY: 'Delete',
  END_KEY: 'End',
  ENTER_KEY: 'Enter',
  ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
  HOME_KEY: 'Home',
  INTERACTION_EVENT: 'MDCChip:interaction',
  LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
  NAVIGATION_EVENT: 'MDCChip:navigation',
  PRIMARY_ACTION_SELECTOR: '.mdc-chip__primary-action',
  REMOVAL_EVENT: 'MDCChip:removal',
  SELECTION_EVENT: 'MDCChip:selection',
  SPACEBAR_KEY: ' ',
  TAB_INDEX: 'tabindex',
  TRAILING_ACTION_SELECTOR: '.mdc-chip__trailing-action',
  TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
  TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing'
};
var cssClasses$1 = {
  CHECKMARK: 'mdc-chip__checkmark',
  CHIP_EXIT: 'mdc-chip--exit',
  DELETABLE: 'mdc-chip--deletable',
  HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
  LEADING_ICON: 'mdc-chip__icon--leading',
  PRIMARY_ACTION: 'mdc-chip__primary-action',
  SELECTED: 'mdc-chip--selected',
  TEXT: 'mdc-chip__text',
  TRAILING_ACTION: 'mdc-chip__trailing-action',
  TRAILING_ICON: 'mdc-chip__icon--trailing'
};
var navigationKeys = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this by hand

navigationKeys.add(strings$1.ARROW_LEFT_KEY);
navigationKeys.add(strings$1.ARROW_RIGHT_KEY);
navigationKeys.add(strings$1.ARROW_DOWN_KEY);
navigationKeys.add(strings$1.ARROW_UP_KEY);
navigationKeys.add(strings$1.END_KEY);
navigationKeys.add(strings$1.HOME_KEY);
var jumpChipKeys = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this by hand

jumpChipKeys.add(strings$1.ARROW_UP_KEY);
jumpChipKeys.add(strings$1.ARROW_DOWN_KEY);
jumpChipKeys.add(strings$1.HOME_KEY);
jumpChipKeys.add(strings$1.END_KEY);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var emptyClientRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
};

var MDCChipFoundation =
/** @class */
function (_super) {
  __extends(MDCChipFoundation, _super);

  function MDCChipFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCChipFoundation.defaultAdapter, adapter)) || this;
    /**
     * Whether a trailing icon click should immediately trigger exit/removal of the chip.
     */


    _this.shouldRemoveOnTrailingIconClick_ = true;
    return _this;
  }

  Object.defineProperty(MDCChipFoundation, "strings", {
    get: function get() {
      return strings$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        addClassToLeadingIcon: function addClassToLeadingIcon() {
          return undefined;
        },
        eventTargetHasClass: function eventTargetHasClass() {
          return false;
        },
        focusPrimaryAction: function focusPrimaryAction() {
          return undefined;
        },
        focusTrailingAction: function focusTrailingAction() {
          return undefined;
        },
        getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
          return emptyClientRect;
        },
        getComputedStyleValue: function getComputedStyleValue() {
          return '';
        },
        getRootBoundingClientRect: function getRootBoundingClientRect() {
          return emptyClientRect;
        },
        hasClass: function hasClass() {
          return false;
        },
        hasLeadingIcon: function hasLeadingIcon() {
          return false;
        },
        hasTrailingAction: function hasTrailingAction() {
          return false;
        },
        isRTL: function isRTL() {
          return false;
        },
        notifyInteraction: function notifyInteraction() {
          return undefined;
        },
        notifyNavigation: function notifyNavigation() {
          return undefined;
        },
        notifyRemoval: function notifyRemoval() {
          return undefined;
        },
        notifySelection: function notifySelection() {
          return undefined;
        },
        notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        removeClassFromLeadingIcon: function removeClassFromLeadingIcon() {
          return undefined;
        },
        setPrimaryActionAttr: function setPrimaryActionAttr() {
          return undefined;
        },
        setStyleProperty: function setStyleProperty() {
          return undefined;
        },
        setTrailingActionAttr: function setTrailingActionAttr() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCChipFoundation.prototype.isSelected = function () {
    return this.adapter_.hasClass(cssClasses$1.SELECTED);
  };

  MDCChipFoundation.prototype.setSelected = function (selected) {
    this.setSelected_(selected);
    this.notifySelection_(selected);
  };

  MDCChipFoundation.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
    this.setSelected_(selected);

    if (shouldNotifyClients) {
      this.notifyIgnoredSelection_(selected);
    }
  };

  MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
    return this.shouldRemoveOnTrailingIconClick_;
  };

  MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
    this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
  };

  MDCChipFoundation.prototype.getDimensions = function () {
    var _this = this;

    var getRootRect = function getRootRect() {
      return _this.adapter_.getRootBoundingClientRect();
    };

    var getCheckmarkRect = function getCheckmarkRect() {
      return _this.adapter_.getCheckmarkBoundingClientRect();
    }; // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
    // size of the checkmark.


    if (!this.adapter_.hasLeadingIcon()) {
      var checkmarkRect = getCheckmarkRect();

      if (checkmarkRect) {
        var rootRect = getRootRect(); // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
        // However, the checkbox is initially hidden by setting the width to 0.
        // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
        // when adding it to the root client rect's width.

        return {
          bottom: rootRect.bottom,
          height: rootRect.height,
          left: rootRect.left,
          right: rootRect.right,
          top: rootRect.top,
          width: rootRect.width + checkmarkRect.height
        };
      }
    }

    return getRootRect();
  };
  /**
   * Begins the exit animation which leads to removal of the chip.
   */


  MDCChipFoundation.prototype.beginExit = function () {
    this.adapter_.addClass(cssClasses$1.CHIP_EXIT);
  };
  /**
   * Handles an interaction event on the root element.
   */


  MDCChipFoundation.prototype.handleInteraction = function (evt) {
    if (this.shouldHandleInteraction_(evt)) {
      this.adapter_.notifyInteraction();
      this.focusPrimaryAction_();
    }
  };
  /**
   * Handles a transition end event on the root element.
   */


  MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
    var _this = this; // Handle transition end event on the chip when it is about to be removed.


    var shouldHandle = this.adapter_.eventTargetHasClass(evt.target, cssClasses$1.CHIP_EXIT);
    var widthIsAnimating = evt.propertyName === 'width';
    var opacityIsAnimating = evt.propertyName === 'opacity';

    if (shouldHandle && opacityIsAnimating) {
      // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
      var chipWidth_1 = this.adapter_.getComputedStyleValue('width'); // On the next frame (once we get the computed width), explicitly set the chip's width
      // to its current pixel width, so we aren't transitioning out of 'auto'.

      requestAnimationFrame(function () {
        _this.adapter_.setStyleProperty('width', chipWidth_1); // To mitigate jitter, start transitioning padding and margin before width.


        _this.adapter_.setStyleProperty('padding', '0');

        _this.adapter_.setStyleProperty('margin', '0'); // On the next frame (once width is explicitly set), transition width to 0.


        requestAnimationFrame(function () {
          _this.adapter_.setStyleProperty('width', '0');
        });
      });
      return;
    }

    if (shouldHandle && widthIsAnimating) {
      this.removeFocus_();
      this.adapter_.notifyRemoval();
    } // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.


    if (!opacityIsAnimating) {
      return;
    }

    var shouldHideLeadingIcon = this.adapter_.eventTargetHasClass(evt.target, cssClasses$1.LEADING_ICON) && this.adapter_.hasClass(cssClasses$1.SELECTED);
    var shouldShowLeadingIcon = this.adapter_.eventTargetHasClass(evt.target, cssClasses$1.CHECKMARK) && !this.adapter_.hasClass(cssClasses$1.SELECTED);

    if (shouldHideLeadingIcon) {
      return this.adapter_.addClassToLeadingIcon(cssClasses$1.HIDDEN_LEADING_ICON);
    }

    if (shouldShowLeadingIcon) {
      return this.adapter_.removeClassFromLeadingIcon(cssClasses$1.HIDDEN_LEADING_ICON);
    }
  };
  /**
   * Handles an interaction event on the trailing icon element. This is used to
   * prevent the ripple from activating on interaction with the trailing icon.
   */


  MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
    if (this.shouldHandleInteraction_(evt)) {
      this.adapter_.notifyTrailingIconInteraction();
      this.removeChip_(evt);
    }
  };
  /**
   * Handles a keydown event from the root element.
   */


  MDCChipFoundation.prototype.handleKeydown = function (evt) {
    if (this.shouldRemoveChip_(evt)) {
      return this.removeChip_(evt);
    }

    var key = evt.key; // Early exit if the key is not usable

    if (!navigationKeys.has(key)) {
      return;
    } // Prevent default behavior for movement keys which could include scrolling


    evt.preventDefault();
    this.focusNextAction_(evt);
  };

  MDCChipFoundation.prototype.removeFocus = function () {
    this.adapter_.setPrimaryActionAttr(strings$1.TAB_INDEX, '-1');
    this.adapter_.setTrailingActionAttr(strings$1.TAB_INDEX, '-1');
  };

  MDCChipFoundation.prototype.focusPrimaryAction = function () {
    this.focusPrimaryAction_();
  };

  MDCChipFoundation.prototype.focusTrailingAction = function () {
    if (!this.adapter_.hasTrailingAction()) {
      return this.focusPrimaryAction_();
    }

    this.focusTrailingAction_();
  };

  MDCChipFoundation.prototype.focusNextAction_ = function (evt) {
    var key = evt.key;
    var hasTrailingAction = this.adapter_.hasTrailingAction();
    var dir = this.getDirection_(key);
    var source = this.getEvtSource_(evt); // Early exit if the key should jump keys or the chip only has one action (i.e. no trailing action)

    if (jumpChipKeys.has(key) || !hasTrailingAction) {
      this.adapter_.notifyNavigation(key, source);
      return;
    }

    if (source === EventSource.PRIMARY && dir === Direction.RIGHT) {
      return this.focusTrailingAction_();
    }

    if (source === EventSource.TRAILING && dir === Direction.LEFT) {
      return this.focusPrimaryAction_();
    }

    this.adapter_.notifyNavigation(key, EventSource.NONE);
  };

  MDCChipFoundation.prototype.getEvtSource_ = function (evt) {
    if (this.adapter_.eventTargetHasClass(evt.target, cssClasses$1.PRIMARY_ACTION)) {
      return EventSource.PRIMARY;
    }

    if (this.adapter_.eventTargetHasClass(evt.target, cssClasses$1.TRAILING_ACTION)) {
      return EventSource.TRAILING;
    }

    return EventSource.NONE;
  };

  MDCChipFoundation.prototype.getDirection_ = function (key) {
    var isRTL = this.adapter_.isRTL();

    if (key === strings$1.ARROW_LEFT_KEY && !isRTL || key === strings$1.ARROW_RIGHT_KEY && isRTL) {
      return Direction.LEFT;
    }

    return Direction.RIGHT;
  };

  MDCChipFoundation.prototype.focusPrimaryAction_ = function () {
    this.adapter_.setPrimaryActionAttr(strings$1.TAB_INDEX, '0');
    this.adapter_.focusPrimaryAction();
    this.adapter_.setTrailingActionAttr(strings$1.TAB_INDEX, '-1');
  };

  MDCChipFoundation.prototype.focusTrailingAction_ = function () {
    this.adapter_.setTrailingActionAttr(strings$1.TAB_INDEX, '0');
    this.adapter_.focusTrailingAction();
    this.adapter_.setPrimaryActionAttr(strings$1.TAB_INDEX, '-1');
  };

  MDCChipFoundation.prototype.removeFocus_ = function () {
    this.adapter_.setTrailingActionAttr(strings$1.TAB_INDEX, '-1');
    this.adapter_.setPrimaryActionAttr(strings$1.TAB_INDEX, '-1');
  };

  MDCChipFoundation.prototype.removeChip_ = function (evt) {
    evt.stopPropagation();

    if (this.shouldRemoveOnTrailingIconClick_) {
      this.beginExit();
    }
  };

  MDCChipFoundation.prototype.shouldHandleInteraction_ = function (evt) {
    if (evt.type === 'click') {
      return true;
    }

    var keyEvt = evt;
    return keyEvt.key === strings$1.ENTER_KEY || keyEvt.key === strings$1.SPACEBAR_KEY;
  };

  MDCChipFoundation.prototype.shouldRemoveChip_ = function (evt) {
    var isDeletable = this.adapter_.hasClass(cssClasses$1.DELETABLE);
    return isDeletable && (evt.key === strings$1.BACKSPACE_KEY || evt.key === strings$1.DELETE_KEY);
  };

  MDCChipFoundation.prototype.setSelected_ = function (selected) {
    if (selected) {
      this.adapter_.addClass(cssClasses$1.SELECTED);
      this.adapter_.setPrimaryActionAttr(strings$1.ARIA_CHECKED, 'true');
    } else {
      this.adapter_.removeClass(cssClasses$1.SELECTED);
      this.adapter_.setPrimaryActionAttr(strings$1.ARIA_CHECKED, 'false');
    }
  };

  MDCChipFoundation.prototype.notifySelection_ = function (selected) {
    this.adapter_.notifySelection(selected, false);
  };

  MDCChipFoundation.prototype.notifyIgnoredSelection_ = function (selected) {
    this.adapter_.notifySelection(selected, true);
  };

  return MDCChipFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCChip =
/** @class */
function (_super) {
  __extends(MDCChip, _super);

  function MDCChip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCChip.prototype, "selected", {
    /**
     * @return Whether the chip is selected.
     */
    get: function get() {
      return this.foundation_.isSelected();
    },

    /**
     * Sets selected state on the chip.
     */
    set: function set(selected) {
      this.foundation_.setSelected(selected);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
    /**
     * @return Whether a trailing icon click should trigger exit/removal of the chip.
     */
    get: function get() {
      return this.foundation_.getShouldRemoveOnTrailingIconClick();
    },

    /**
     * Sets whether a trailing icon click should trigger exit/removal of the chip.
     */
    set: function set(shouldRemove) {
      this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "id", {
    get: function get() {
      return this.root_.id;
    },
    enumerable: true,
    configurable: true
  });

  MDCChip.attachTo = function (root) {
    return new MDCChip(root);
  };

  MDCChip.prototype.initialize = function (rippleFactory) {
    var _this = this;

    if (rippleFactory === void 0) {
      rippleFactory = function rippleFactory(el, foundation) {
        return new MDCRipple(el, foundation);
      };
    }

    this.leadingIcon_ = this.root_.querySelector(strings$1.LEADING_ICON_SELECTOR);
    this.trailingIcon_ = this.root_.querySelector(strings$1.TRAILING_ICON_SELECTOR);
    this.checkmark_ = this.root_.querySelector(strings$1.CHECKMARK_SELECTOR);
    this.primaryAction_ = this.root_.querySelector(strings$1.PRIMARY_ACTION_SELECTOR);
    this.trailingAction_ = this.root_.querySelector(strings$1.TRAILING_ACTION_SELECTOR); // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.

    var rippleAdapter = _assign({}, MDCRipple.createAdapter(this), {
      computeBoundingRect: function computeBoundingRect() {
        return _this.foundation_.getDimensions();
      }
    });

    this.ripple_ = rippleFactory(this.root_, new MDCRippleFoundation(rippleAdapter));
  };

  MDCChip.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleInteraction_ = function (evt) {
      return _this.foundation_.handleInteraction(evt);
    };

    this.handleTransitionEnd_ = function (evt) {
      return _this.foundation_.handleTransitionEnd(evt);
    };

    this.handleTrailingIconInteraction_ = function (evt) {
      return _this.foundation_.handleTrailingIconInteraction(evt);
    };

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.listen(evtType, _this.handleInteraction_);
    });
    this.listen('transitionend', this.handleTransitionEnd_);
    this.listen('keydown', this.handleKeydown_);

    if (this.trailingIcon_) {
      INTERACTION_EVENTS.forEach(function (evtType) {
        _this.trailingIcon_.addEventListener(evtType, _this.handleTrailingIconInteraction_);
      });
    }
  };

  MDCChip.prototype.destroy = function () {
    var _this = this;

    this.ripple_.destroy();
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.unlisten(evtType, _this.handleInteraction_);
    });
    this.unlisten('transitionend', this.handleTransitionEnd_);
    this.unlisten('keydown', this.handleKeydown_);

    if (this.trailingIcon_) {
      INTERACTION_EVENTS.forEach(function (evtType) {
        _this.trailingIcon_.removeEventListener(evtType, _this.handleTrailingIconInteraction_);
      });
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Begins the exit animation which leads to removal of the chip.
   */


  MDCChip.prototype.beginExit = function () {
    this.foundation_.beginExit();
  };

  MDCChip.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      addClassToLeadingIcon: function addClassToLeadingIcon(className) {
        if (_this.leadingIcon_) {
          _this.leadingIcon_.classList.add(className);
        }
      },
      eventTargetHasClass: function eventTargetHasClass(target, className) {
        return target ? target.classList.contains(className) : false;
      },
      focusPrimaryAction: function focusPrimaryAction() {
        if (_this.primaryAction_) {
          _this.primaryAction_.focus();
        }
      },
      focusTrailingAction: function focusTrailingAction() {
        if (_this.trailingAction_) {
          _this.trailingAction_.focus();
        }
      },
      getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
        return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null;
      },
      getComputedStyleValue: function getComputedStyleValue(propertyName) {
        return window.getComputedStyle(_this.root_).getPropertyValue(propertyName);
      },
      getRootBoundingClientRect: function getRootBoundingClientRect() {
        return _this.root_.getBoundingClientRect();
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      hasLeadingIcon: function hasLeadingIcon() {
        return !!_this.leadingIcon_;
      },
      hasTrailingAction: function hasTrailingAction() {
        return !!_this.trailingAction_;
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      notifyInteraction: function notifyInteraction() {
        return _this.emit(strings$1.INTERACTION_EVENT, {
          chipId: _this.id
        }, true
        /* shouldBubble */
        );
      },
      notifyNavigation: function notifyNavigation(key, source) {
        return _this.emit(strings$1.NAVIGATION_EVENT, {
          chipId: _this.id,
          key: key,
          source: source
        }, true
        /* shouldBubble */
        );
      },
      notifyRemoval: function notifyRemoval() {
        _this.emit(strings$1.REMOVAL_EVENT, {
          chipId: _this.id,
          root: _this.root_
        }, true
        /* shouldBubble */
        );
      },
      notifySelection: function notifySelection(selected, shouldIgnore) {
        return _this.emit(strings$1.SELECTION_EVENT, {
          chipId: _this.id,
          selected: selected,
          shouldIgnore: shouldIgnore
        }, true
        /* shouldBubble */
        );
      },
      notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
        return _this.emit(strings$1.TRAILING_ICON_INTERACTION_EVENT, {
          chipId: _this.id
        }, true
        /* shouldBubble */
        );
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
        if (_this.leadingIcon_) {
          _this.leadingIcon_.classList.remove(className);
        }
      },
      setPrimaryActionAttr: function setPrimaryActionAttr(attr, value) {
        if (_this.primaryAction_) {
          _this.primaryAction_.setAttribute(attr, value);
        }
      },
      setStyleProperty: function setStyleProperty(propertyName, value) {
        return _this.root_.style.setProperty(propertyName, value);
      },
      setTrailingActionAttr: function setTrailingActionAttr(attr, value) {
        if (_this.trailingAction_) {
          _this.trailingAction_.setAttribute(attr, value);
        }
      }
    };
    return new MDCChipFoundation(adapter);
  };

  MDCChip.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
    this.foundation_.setSelectedFromChipSet(selected, shouldNotifyClients);
  };

  MDCChip.prototype.focusPrimaryAction = function () {
    this.foundation_.focusPrimaryAction();
  };

  MDCChip.prototype.focusTrailingAction = function () {
    this.foundation_.focusTrailingAction();
  };

  MDCChip.prototype.removeFocus = function () {
    this.foundation_.removeFocus();
  };

  MDCChip.prototype.remove = function () {
    var parent = this.root_.parentNode;

    if (parent !== null) {
      parent.removeChild(this.root_);
    }
  };

  return MDCChip;
}(MDCComponent);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings$2 = {
  CHIP_SELECTOR: '.mdc-chip'
};
var cssClasses$2 = {
  CHOICE: 'mdc-chip-set--choice',
  FILTER: 'mdc-chip-set--filter'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCChipSetFoundation =
/** @class */
function (_super) {
  __extends(MDCChipSetFoundation, _super);

  function MDCChipSetFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCChipSetFoundation.defaultAdapter, adapter)) || this;
    /**
     * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
     */


    _this.selectedChipIds_ = [];
    return _this;
  }

  Object.defineProperty(MDCChipSetFoundation, "strings", {
    get: function get() {
      return strings$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
    get: function get() {
      return {
        focusChipPrimaryActionAtIndex: function focusChipPrimaryActionAtIndex() {
          return undefined;
        },
        focusChipTrailingActionAtIndex: function focusChipTrailingActionAtIndex() {
          return undefined;
        },
        getChipListCount: function getChipListCount() {
          return -1;
        },
        getIndexOfChipById: function getIndexOfChipById() {
          return -1;
        },
        hasClass: function hasClass() {
          return false;
        },
        isRTL: function isRTL() {
          return false;
        },
        removeChipAtIndex: function removeChipAtIndex() {
          return undefined;
        },
        removeFocusFromChipAtIndex: function removeFocusFromChipAtIndex() {
          return undefined;
        },
        selectChipAtIndex: function selectChipAtIndex() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns an array of the IDs of all selected chips.
   */

  MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
    return this.selectedChipIds_.slice();
  };
  /**
   * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
   * Does not notify clients of the updated selection state.
   */


  MDCChipSetFoundation.prototype.select = function (chipId) {
    this.select_(chipId, false);
  };
  /**
   * Handles a chip interaction event
   */


  MDCChipSetFoundation.prototype.handleChipInteraction = function (chipId) {
    var index = this.adapter_.getIndexOfChipById(chipId);
    this.removeFocusFromChipsExcept_(index);

    if (this.adapter_.hasClass(cssClasses$2.CHOICE) || this.adapter_.hasClass(cssClasses$2.FILTER)) {
      this.toggleSelect_(chipId);
    }
  };
  /**
   * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
   */


  MDCChipSetFoundation.prototype.handleChipSelection = function (chipId, selected, shouldIgnore) {
    // Early exit if we should ignore the event
    if (shouldIgnore) {
      return;
    }

    var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;

    if (selected && !chipIsSelected) {
      this.select(chipId);
    } else if (!selected && chipIsSelected) {
      this.deselect_(chipId);
    }
  };
  /**
   * Handles the event when a chip is removed.
   */


  MDCChipSetFoundation.prototype.handleChipRemoval = function (chipId) {
    var index = this.adapter_.getIndexOfChipById(chipId);
    this.deselectAndNotifyClients_(chipId);
    this.adapter_.removeChipAtIndex(index);
    var maxIndex = this.adapter_.getChipListCount() - 1;
    var nextIndex = Math.min(index, maxIndex);
    this.removeFocusFromChipsExcept_(nextIndex); // After removing a chip, we should focus the trailing action for the next chip.

    this.adapter_.focusChipTrailingActionAtIndex(nextIndex);
  };
  /**
   * Handles a chip navigation event.
   */


  MDCChipSetFoundation.prototype.handleChipNavigation = function (chipId, key, source) {
    var maxIndex = this.adapter_.getChipListCount() - 1;
    var index = this.adapter_.getIndexOfChipById(chipId); // Early exit if the index is out of range or the key is unusable

    if (index === -1 || !navigationKeys.has(key)) {
      return;
    }

    var isRTL = this.adapter_.isRTL();
    var shouldIncrement = key === strings$1.ARROW_RIGHT_KEY && !isRTL || key === strings$1.ARROW_LEFT_KEY && isRTL || key === strings$1.ARROW_DOWN_KEY;
    var isHome = key === strings$1.HOME_KEY;
    var isEnd = key === strings$1.END_KEY;

    if (shouldIncrement) {
      index++;
    } else if (isHome) {
      index = 0;
    } else if (isEnd) {
      index = maxIndex;
    } else {
      index--;
    } // Early exit if the index is out of bounds


    if (index < 0 || index > maxIndex) {
      return;
    }

    this.removeFocusFromChipsExcept_(index);
    this.focusChipAction_(index, key, source);
  };

  MDCChipSetFoundation.prototype.focusChipAction_ = function (index, key, source) {
    var shouldJumpChips = jumpChipKeys.has(key);

    if (shouldJumpChips && source === EventSource.PRIMARY) {
      return this.adapter_.focusChipPrimaryActionAtIndex(index);
    }

    if (shouldJumpChips && source === EventSource.TRAILING) {
      return this.adapter_.focusChipTrailingActionAtIndex(index);
    }

    var dir = this.getDirection_(key);

    if (dir === Direction.LEFT) {
      return this.adapter_.focusChipTrailingActionAtIndex(index);
    }

    if (dir === Direction.RIGHT) {
      return this.adapter_.focusChipPrimaryActionAtIndex(index);
    }
  };

  MDCChipSetFoundation.prototype.getDirection_ = function (key) {
    var isRTL = this.adapter_.isRTL();

    if (key === strings$1.ARROW_LEFT_KEY && !isRTL || key === strings$1.ARROW_RIGHT_KEY && isRTL) {
      return Direction.LEFT;
    }

    return Direction.RIGHT;
  };
  /**
   * Deselects the chip with the given id and optionally notifies clients.
   */


  MDCChipSetFoundation.prototype.deselect_ = function (chipId, shouldNotifyClients) {
    if (shouldNotifyClients === void 0) {
      shouldNotifyClients = false;
    }

    var index = this.selectedChipIds_.indexOf(chipId);

    if (index >= 0) {
      this.selectedChipIds_.splice(index, 1);
      var chipIndex = this.adapter_.getIndexOfChipById(chipId);
      this.adapter_.selectChipAtIndex(chipIndex,
      /** isSelected */
      false, shouldNotifyClients);
    }
  };
  /**
   * Deselects the chip with the given id and notifies clients.
   */


  MDCChipSetFoundation.prototype.deselectAndNotifyClients_ = function (chipId) {
    this.deselect_(chipId, true);
  };
  /**
   * Toggles selection of the chip with the given id.
   */


  MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      this.deselectAndNotifyClients_(chipId);
    } else {
      this.selectAndNotifyClients_(chipId);
    }
  };

  MDCChipSetFoundation.prototype.removeFocusFromChipsExcept_ = function (index) {
    var chipCount = this.adapter_.getChipListCount();

    for (var i = 0; i < chipCount; i++) {
      if (i !== index) {
        this.adapter_.removeFocusFromChipAtIndex(i);
      }
    }
  };

  MDCChipSetFoundation.prototype.selectAndNotifyClients_ = function (chipId) {
    this.select_(chipId, true);
  };

  MDCChipSetFoundation.prototype.select_ = function (chipId, shouldNotifyClients) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      return;
    }

    if (this.adapter_.hasClass(cssClasses$2.CHOICE) && this.selectedChipIds_.length > 0) {
      var previouslySelectedChip = this.selectedChipIds_[0];
      var previouslySelectedIndex = this.adapter_.getIndexOfChipById(previouslySelectedChip);
      this.selectedChipIds_ = [];
      this.adapter_.selectChipAtIndex(previouslySelectedIndex,
      /** isSelected */
      false, shouldNotifyClients);
    }

    this.selectedChipIds_.push(chipId);
    var index = this.adapter_.getIndexOfChipById(chipId);
    this.adapter_.selectChipAtIndex(index,
    /** isSelected */
    true, shouldNotifyClients);
  };

  return MDCChipSetFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _a = MDCChipFoundation.strings,
    INTERACTION_EVENT = _a.INTERACTION_EVENT,
    SELECTION_EVENT = _a.SELECTION_EVENT,
    REMOVAL_EVENT = _a.REMOVAL_EVENT,
    NAVIGATION_EVENT = _a.NAVIGATION_EVENT;
var CHIP_SELECTOR = MDCChipSetFoundation.strings.CHIP_SELECTOR;
var idCounter = 0;

var MDCChipSet =
/** @class */
function (_super) {
  __extends(MDCChipSet, _super);

  function MDCChipSet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCChipSet.attachTo = function (root) {
    return new MDCChipSet(root);
  };

  Object.defineProperty(MDCChipSet.prototype, "chips", {
    get: function get() {
      return this.chips_.slice();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSet.prototype, "selectedChipIds", {
    /**
     * @return An array of the IDs of all selected chips.
     */
    get: function get() {
      return this.foundation_.getSelectedChipIds();
    },
    enumerable: true,
    configurable: true
  });
  /**
   * @param chipFactory A function which creates a new MDCChip.
   */

  MDCChipSet.prototype.initialize = function (chipFactory) {
    if (chipFactory === void 0) {
      chipFactory = function chipFactory(el) {
        return new MDCChip(el);
      };
    }

    this.chipFactory_ = chipFactory;
    this.chips_ = this.instantiateChips_(this.chipFactory_);
  };

  MDCChipSet.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.chips_.forEach(function (chip) {
      if (chip.id && chip.selected) {
        _this.foundation_.select(chip.id);
      }
    });

    this.handleChipInteraction_ = function (evt) {
      return _this.foundation_.handleChipInteraction(evt.detail.chipId);
    };

    this.handleChipSelection_ = function (evt) {
      _this.foundation_.handleChipSelection(evt.detail.chipId, evt.detail.selected, evt.detail.shouldIgnore);
    };

    this.handleChipRemoval_ = function (evt) {
      return _this.foundation_.handleChipRemoval(evt.detail.chipId);
    };

    this.handleChipNavigation_ = function (evt) {
      return _this.foundation_.handleChipNavigation(evt.detail.chipId, evt.detail.key, evt.detail.source);
    };

    this.listen(INTERACTION_EVENT, this.handleChipInteraction_);
    this.listen(SELECTION_EVENT, this.handleChipSelection_);
    this.listen(REMOVAL_EVENT, this.handleChipRemoval_);
    this.listen(NAVIGATION_EVENT, this.handleChipNavigation_);
  };

  MDCChipSet.prototype.destroy = function () {
    this.chips_.forEach(function (chip) {
      chip.destroy();
    });
    this.unlisten(INTERACTION_EVENT, this.handleChipInteraction_);
    this.unlisten(SELECTION_EVENT, this.handleChipSelection_);
    this.unlisten(REMOVAL_EVENT, this.handleChipRemoval_);
    this.unlisten(NAVIGATION_EVENT, this.handleChipNavigation_);

    _super.prototype.destroy.call(this);
  };
  /**
   * Adds a new chip object to the chip set from the given chip element.
   */


  MDCChipSet.prototype.addChip = function (chipEl) {
    chipEl.id = chipEl.id || "mdc-chip-" + ++idCounter;
    this.chips_.push(this.chipFactory_(chipEl));
  };

  MDCChipSet.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      focusChipPrimaryActionAtIndex: function focusChipPrimaryActionAtIndex(index) {
        _this.chips_[index].focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: function focusChipTrailingActionAtIndex(index) {
        _this.chips_[index].focusTrailingAction();
      },
      getChipListCount: function getChipListCount() {
        return _this.chips_.length;
      },
      getIndexOfChipById: function getIndexOfChipById(chipId) {
        return _this.findChipIndex_(chipId);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      removeChipAtIndex: function removeChipAtIndex(index) {
        if (index >= 0 && index < _this.chips_.length) {
          _this.chips_[index].destroy();

          _this.chips_[index].remove();

          _this.chips_.splice(index, 1);
        }
      },
      removeFocusFromChipAtIndex: function removeFocusFromChipAtIndex(index) {
        _this.chips_[index].removeFocus();
      },
      selectChipAtIndex: function selectChipAtIndex(index, selected, shouldNotifyClients) {
        if (index >= 0 && index < _this.chips_.length) {
          _this.chips_[index].setSelectedFromChipSet(selected, shouldNotifyClients);
        }
      }
    };
    return new MDCChipSetFoundation(adapter);
  };
  /**
   * Instantiates chip components on all of the chip set's child chip elements.
   */


  MDCChipSet.prototype.instantiateChips_ = function (chipFactory) {
    var chipElements = [].slice.call(this.root_.querySelectorAll(CHIP_SELECTOR));
    return chipElements.map(function (el) {
      el.id = el.id || "mdc-chip-" + ++idCounter;
      return chipFactory(el);
    });
  };
  /**
   * Returns the index of the chip with the given id, or -1 if the chip does not exist.
   */


  MDCChipSet.prototype.findChipIndex_ = function (chipId) {
    for (var i = 0; i < this.chips_.length; i++) {
      if (this.chips_[i].id === chipId) {
        return i;
      }
    }

    return -1;
  };

  return MDCChipSet;
}(MDCComponent);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "../packages/chips/Chip.svelte"; // (16:2) {#if ripple}

function create_if_block_1(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mdc-chip__ripple");
      add_location(div, file, 16, 4, 447);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(16:2) {#if ripple}",
    ctx: ctx
  });
  return block;
} // (20:2) {#if touch}


function create_if_block(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mdc-chip__touch");
      add_location(div, file, 20, 4, 526);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(20:2) {#if touch}",
    ctx: ctx
  });
  return block;
} // (1:0) <svelte:component   this={component}   bind:element={element}   use={[forwardEvents, ...use]}   forwardEvents={forwardedEvents}   class="     mdc-chip     {className}     {selected ? 'mdc-chip--selected' : ''}     {touch ? 'mdc-chip--touch' : ''}   "   role="row"   on:MDCChip:selection={handleSelection}   {...exclude($$props, ['use', 'class', 'component', 'ripple', 'touch', 'selected', 'shouldRemoveOnTrailingIconClick'])} >


function create_default_slot(ctx) {
  var t0;
  var t1;
  var if_block1_anchor;
  var current;
  var if_block0 =
  /*ripple*/
  ctx[4] && create_if_block_1(ctx);
  var default_slot_template =
  /*#slots*/
  ctx[18].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[20], null);
  var if_block1 =
  /*touch*/
  ctx[5] && create_if_block(ctx);
  var block = {
    c: function create() {
      if (if_block0) if_block0.c();
      t0 = space();
      if (default_slot) default_slot.c();
      t1 = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0) if_block0.l(nodes);
      t0 = claim_space(nodes);
      if (default_slot) default_slot.l(nodes);
      t1 = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t0, anchor);

      if (default_slot) {
        default_slot.m(target, anchor);
      }

      insert_dev(target, t1, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*ripple*/
      ctx[4]) {
        if (if_block0) ; else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1048576) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[20], dirty, null, null);
        }
      }

      if (
      /*touch*/
      ctx[5]) {
        if (if_block1) ; else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach_dev(t0);
      if (default_slot) default_slot.d(detaching);
      if (detaching) detach_dev(t1);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(1:0) <svelte:component   this={component}   bind:element={element}   use={[forwardEvents, ...use]}   forwardEvents={forwardedEvents}   class=\\\"     mdc-chip     {className}     {selected ? 'mdc-chip--selected' : ''}     {touch ? 'mdc-chip--touch' : ''}   \\\"   role=\\\"row\\\"   on:MDCChip:selection={handleSelection}   {...exclude($$props, ['use', 'class', 'component', 'ripple', 'touch', 'selected', 'shouldRemoveOnTrailingIconClick'])} >",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var switch_instance;
  var updating_element;
  var switch_instance_anchor;
  var current;
  var switch_instance_spread_levels = [{
    use: [
    /*forwardEvents*/
    ctx[8]].concat(_toConsumableArray(
    /*use*/
    ctx[1]))
  }, {
    forwardEvents:
    /*forwardedEvents*/
    ctx[7]
  }, {
    class: "\n    mdc-chip\n    " +
    /*className*/
    ctx[2] + "\n    " + (
    /*selected*/
    ctx[0] ? "mdc-chip--selected" : "") + "\n    " + (
    /*touch*/
    ctx[5] ? "mdc-chip--touch" : "") + "\n  "
  }, {
    role: "row"
  }, exclude(
  /*$$props*/
  ctx[13], ["use", "class", "component", "ripple", "touch", "selected", "shouldRemoveOnTrailingIconClick"])];

  function switch_instance_element_binding(value) {
    /*switch_instance_element_binding*/
    ctx[19].call(null, value);
  }

  var switch_value =
  /*component*/
  ctx[3];

  function switch_props(ctx) {
    var switch_instance_props = {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    };

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    if (
    /*element*/
    ctx[6] !== void 0) {
      switch_instance_props.element =
      /*element*/
      ctx[6];
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    binding_callbacks.push(function () {
      return bind(switch_instance, "element", switch_instance_element_binding);
    });
    switch_instance.$on("MDCChip:selection",
    /*handleSelection*/
    ctx[12]);
  }

  var block = {
    c: function create() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var switch_instance_changes = dirty &
      /*forwardEvents, use, forwardedEvents, className, selected, touch, exclude, $$props*/
      8615 ? get_spread_update(switch_instance_spread_levels, [dirty &
      /*forwardEvents, use*/
      258 && {
        use: [
        /*forwardEvents*/
        ctx[8]].concat(_toConsumableArray(
        /*use*/
        ctx[1]))
      }, dirty &
      /*forwardedEvents*/
      128 && {
        forwardEvents:
        /*forwardedEvents*/
        ctx[7]
      }, dirty &
      /*className, selected, touch*/
      37 && {
        class: "\n    mdc-chip\n    " +
        /*className*/
        ctx[2] + "\n    " + (
        /*selected*/
        ctx[0] ? "mdc-chip--selected" : "") + "\n    " + (
        /*touch*/
        ctx[5] ? "mdc-chip--touch" : "") + "\n  "
      }, switch_instance_spread_levels[3], dirty &
      /*exclude, $$props*/
      8192 && get_spread_object(exclude(
      /*$$props*/
      ctx[13], ["use", "class", "component", "ripple", "touch", "selected", "shouldRemoveOnTrailingIconClick"]))]) : {};

      if (dirty &
      /*$$scope, touch, ripple*/
      1048624) {
        switch_instance_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_element && dirty &
      /*element*/
      64) {
        updating_element = true;
        switch_instance_changes.element =
        /*element*/
        ctx[6];
        add_flush_callback(function () {
          return updating_element = false;
        });
      }

      if (switch_value !== (switch_value =
      /*component*/
      ctx[3])) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, function () {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          binding_callbacks.push(function () {
            return bind(switch_instance, "element", switch_instance_element_binding);
          });
          switch_instance.$on("MDCChip:selection",
          /*handleSelection*/
          ctx[12]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var $shouldRemoveOnTrailingIconClickStore;
  var $isSelectedStore;
  var $selectedStore;
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Chip", slots, ['default']);
  var forwardedEvents = ["MDCChip:interaction", "MDCChip:selection", "MDCChip:removal", "MDCChip:trailingIconInteraction", "MDCChip:navigation"];
  var forwardEvents = forwardEventsBuilder(get_current_component(), forwardedEvents);
  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;
  var _$$props4 = $$props,
      _$$props4$component = _$$props4.component,
      component = _$$props4$component === void 0 ? Div : _$$props4$component;
  var _$$props5 = $$props,
      _$$props5$ripple = _$$props5.ripple,
      ripple = _$$props5$ripple === void 0 ? true : _$$props5$ripple;
  var _$$props6 = $$props,
      _$$props6$touch = _$$props6.touch,
      touch = _$$props6$touch === void 0 ? false : _$$props6$touch;
  var _$$props7 = $$props,
      _$$props7$selected = _$$props7.selected,
      selected = _$$props7$selected === void 0 ? false : _$$props7$selected;
  var _$$props8 = $$props,
      _$$props8$shouldRemov = _$$props8.shouldRemoveOnTrailingIconClick,
      shouldRemoveOnTrailingIconClick = _$$props8$shouldRemov === void 0 ? true : _$$props8$shouldRemov;
  var shouldRemoveOnTrailingIconClickStore = writable(shouldRemoveOnTrailingIconClick);
  validate_store(shouldRemoveOnTrailingIconClickStore, "shouldRemoveOnTrailingIconClickStore");
  component_subscribe($$self, shouldRemoveOnTrailingIconClickStore, function (value) {
    return $$invalidate(21, $shouldRemoveOnTrailingIconClickStore = value);
  });
  setContext("SMUI:chip:shouldRemoveOnTrailingIconClick", shouldRemoveOnTrailingIconClickStore);
  var isSelectedStore = writable(selected);
  validate_store(isSelectedStore, "isSelectedStore");
  component_subscribe($$self, isSelectedStore, function (value) {
    return $$invalidate(22, $isSelectedStore = value);
  });
  setContext("SMUI:chip:isSelected", isSelectedStore);
  var element;
  var chip;
  var selectedStore = getContext("SMUI:chip:selected");
  validate_store(selectedStore, "selectedStore");
  component_subscribe($$self, selectedStore, function (value) {
    return $$invalidate(17, $selectedStore = value);
  });
  var previousSelected = selected;
  onMount(function () {
    $$invalidate(6, element.setChip = setChip, element);
  });

  function setChip(component) {
    $$invalidate(15, chip = component);

    if (!ripple) {
      chip.ripple && chip.ripple.destroy();
    }

    $$invalidate(0, selected = chip.selected);
  }

  function handleSelection(e) {
    $$invalidate(0, selected = e.detail.selected);
  }

  function switch_instance_element_binding(value) {
    element = value;
    $$invalidate(6, element);
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(13, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
    if ("component" in $$new_props) $$invalidate(3, component = $$new_props.component);
    if ("ripple" in $$new_props) $$invalidate(4, ripple = $$new_props.ripple);
    if ("touch" in $$new_props) $$invalidate(5, touch = $$new_props.touch);
    if ("selected" in $$new_props) $$invalidate(0, selected = $$new_props.selected);
    if ("shouldRemoveOnTrailingIconClick" in $$new_props) $$invalidate(14, shouldRemoveOnTrailingIconClick = $$new_props.shouldRemoveOnTrailingIconClick);
    if ("$$scope" in $$new_props) $$invalidate(20, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      MDCChip: MDCChip,
      onMount: onMount,
      setContext: setContext,
      getContext: getContext,
      writable: writable,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      Div: Div,
      forwardedEvents: forwardedEvents,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      component: component,
      ripple: ripple,
      touch: touch,
      selected: selected,
      shouldRemoveOnTrailingIconClick: shouldRemoveOnTrailingIconClick,
      shouldRemoveOnTrailingIconClickStore: shouldRemoveOnTrailingIconClickStore,
      isSelectedStore: isSelectedStore,
      element: element,
      chip: chip,
      selectedStore: selectedStore,
      previousSelected: previousSelected,
      setChip: setChip,
      handleSelection: handleSelection,
      $shouldRemoveOnTrailingIconClickStore: $shouldRemoveOnTrailingIconClickStore,
      $isSelectedStore: $isSelectedStore,
      $selectedStore: $selectedStore
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(13, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
    if ("component" in $$props) $$invalidate(3, component = $$new_props.component);
    if ("ripple" in $$props) $$invalidate(4, ripple = $$new_props.ripple);
    if ("touch" in $$props) $$invalidate(5, touch = $$new_props.touch);
    if ("selected" in $$props) $$invalidate(0, selected = $$new_props.selected);
    if ("shouldRemoveOnTrailingIconClick" in $$props) $$invalidate(14, shouldRemoveOnTrailingIconClick = $$new_props.shouldRemoveOnTrailingIconClick);
    if ("element" in $$props) $$invalidate(6, element = $$new_props.element);
    if ("chip" in $$props) $$invalidate(15, chip = $$new_props.chip);
    if ("previousSelected" in $$props) $$invalidate(16, previousSelected = $$new_props.previousSelected);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*shouldRemoveOnTrailingIconClick*/
    16384) {
       set_store_value(shouldRemoveOnTrailingIconClickStore, $shouldRemoveOnTrailingIconClickStore = shouldRemoveOnTrailingIconClick, $shouldRemoveOnTrailingIconClickStore);
    }

    if ($$self.$$.dirty &
    /*chip, $selectedStore, previousSelected, selected*/
    229377) {
       if (chip && ($selectedStore || previousSelected !== selected)) {
        if (selected !== chip.selected) {
          if (previousSelected !== selected) {
            // Update MDC on Svelte selected change.
            $$invalidate(15, chip.selected = selected, chip);
          } else {
            // Update selected on MDC selection change.
            $$invalidate(0, selected = chip.selected);
          }
        }

        $$invalidate(16, previousSelected = selected);
      }
    }

    if ($$self.$$.dirty &
    /*selected*/
    1) {
       set_store_value(isSelectedStore, $isSelectedStore = selected, $isSelectedStore);
    }

    if ($$self.$$.dirty &
    /*chip, shouldRemoveOnTrailingIconClick*/
    49152) {
       if (chip && chip.shouldRemoveOnTrailingIconClick !== shouldRemoveOnTrailingIconClick) {
        $$invalidate(15, chip.shouldRemoveOnTrailingIconClick = shouldRemoveOnTrailingIconClick, chip);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [selected, use, className, component, ripple, touch, element, forwardedEvents, forwardEvents, shouldRemoveOnTrailingIconClickStore, isSelectedStore, selectedStore, handleSelection, $$props, shouldRemoveOnTrailingIconClick, chip, previousSelected, $selectedStore, slots, switch_instance_element_binding, $$scope];
}

var Chip = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Chip, _SvelteComponentDev);

  var _super = _createSuper(Chip);

  function Chip(options) {
    var _this;

    _classCallCheck(this, Chip);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 1,
      class: 2,
      component: 3,
      ripple: 4,
      touch: 5,
      selected: 0,
      shouldRemoveOnTrailingIconClick: 14
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Chip",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Chip, [{
    key: "use",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "component",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "touch",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selected",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "shouldRemoveOnTrailingIconClick",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Chip;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$1(ctx) {
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[4].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[3], null);
  var block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    l: function claim(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        8) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var $storeValue;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("ContextFragment", slots, ['default']);
  var key = $$props.key;
  var value = $$props.value;
  var storeValue = writable(value);
  validate_store(storeValue, "storeValue");
  component_subscribe($$self, storeValue, function (value) {
    return $$invalidate(5, $storeValue = value);
  });
  setContext(key, storeValue);
  onDestroy(function () {
    storeValue.set(undefined);
  });
  var writable_props = ["key", "value"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ContextFragment> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("key" in $$props) $$invalidate(1, key = $$props.key);
    if ("value" in $$props) $$invalidate(2, value = $$props.value);
    if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      onDestroy: onDestroy,
      setContext: setContext,
      writable: writable,
      key: key,
      value: value,
      storeValue: storeValue,
      $storeValue: $storeValue
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("key" in $$props) $$invalidate(1, key = $$props.key);
    if ("value" in $$props) $$invalidate(2, value = $$props.value);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*value*/
    4) {
       set_store_value(storeValue, $storeValue = value, $storeValue);
    }
  };

  return [storeValue, key, value, $$scope, slots];
}

var ContextFragment = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ContextFragment, _SvelteComponentDev);

  var _super = _createSuper$1(ContextFragment);

  function ContextFragment(options) {
    var _this;

    _classCallCheck(this, ContextFragment);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      key: 1,
      value: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ContextFragment",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*key*/
    ctx[1] === undefined && !("key" in props)) {
      console.warn("<ContextFragment> was created without expected prop 'key'");
    }

    if (
    /*value*/
    ctx[2] === undefined && !("value" in props)) {
      console.warn("<ContextFragment> was created without expected prop 'value'");
    }

    return _this;
  }

  _createClass(ContextFragment, [{
    key: "key",
    get: function get() {
      throw new Error("<ContextFragment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ContextFragment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<ContextFragment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ContextFragment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ContextFragment;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "../packages/chips/Set.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[26] = list[i];
  child_ctx[28] = i;
  return child_ctx;
}

var get_default_slot_changes = function get_default_slot_changes(dirty) {
  return {
    chip: dirty &
    /*chips*/
    1
  };
};

var get_default_slot_context = function get_default_slot_context(ctx) {
  return {
    chip:
    /*chip*/
    ctx[26]
  };
}; // (18:4) <ContextFragment key="SMUI:chip:initialTabindex" value={i === 0 ? 0 : -1}>


function create_default_slot$1(ctx) {
  var t;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[17].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[19], get_default_slot_context);
  var block = {
    c: function create() {
      if (default_slot) default_slot.c();
      t = space();
    },
    l: function claim(nodes) {
      if (default_slot) default_slot.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope, chips*/
        524289) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[19], dirty, get_default_slot_changes, get_default_slot_context);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot) default_slot.d(detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(18:4) <ContextFragment key=\\\"SMUI:chip:initialTabindex\\\" value={i === 0 ? 0 : -1}>",
    ctx: ctx
  });
  return block;
} // (17:2) {#each chips as chip, i (key(chip))}


function create_each_block(key_2, ctx) {
  var first;
  var contextfragment;
  var current;
  contextfragment = new ContextFragment({
    props: {
      key: "SMUI:chip:initialTabindex",
      value:
      /*i*/
      ctx[28] === 0 ? 0 : -1,
      $$slots: {
        default: [create_default_slot$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    key: key_2,
    first: null,
    c: function create() {
      first = empty();
      create_component(contextfragment.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      first = empty();
      claim_component(contextfragment.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      this.first = first;
    },
    m: function mount(target, anchor) {
      insert_dev(target, first, anchor);
      mount_component(contextfragment, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var contextfragment_changes = {};
      if (dirty &
      /*chips*/
      1) contextfragment_changes.value =
      /*i*/
      ctx[28] === 0 ? 0 : -1;

      if (dirty &
      /*$$scope, chips*/
      524289) {
        contextfragment_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      contextfragment.$set(contextfragment_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(contextfragment.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(contextfragment.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(first);
      destroy_component(contextfragment, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(17:2) {#each chips as chip, i (key(chip))}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var div;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var div_class_value;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var mounted;
  var dispose;
  var each_value =
  /*chips*/
  ctx[0];
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return (
      /*key*/
      ctx[3](
      /*chip*/
      ctx[26])
    );
  };

  validate_each_keys(ctx, each_value, get_each_context, get_key);

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var div_levels = [{
    class: div_class_value = "\n    mdc-chip-set\n    " +
    /*className*/
    ctx[2] + "\n    " + (
    /*choice*/
    ctx[4] ? "mdc-chip-set--choice" : "") + "\n    " + (
    /*filter*/
    ctx[5] ? "mdc-chip-set--filter" : "") + "\n    " + (
    /*input*/
    ctx[6] ? "mdc-chip-set--input" : "") + "\n  "
  }, {
    role: "grid"
  }, exclude(
  /*$$props*/
  ctx[14], ["use", "class", "chips", "key", "selected", "choice", "filter", "input"])];
  var div_data = {};

  for (var _i = 0; _i < div_levels.length; _i += 1) {
    div_data = assign(div_data, div_levels[_i]);
  }

  var block = {
    c: function create() {
      div = element("div");

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        role: true
      });
      var div_nodes = children(div);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].l(div_nodes);
      }

      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].m(div, null);
      }
      /*div_binding*/


      ctx[18](div);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, div,
        /*use*/
        ctx[1])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[8].call(null, div)), listen_dev(div, "MDCChip:removal",
        /*handleRemoval*/
        ctx[13], false, false, false), listen_dev(div, "MDCChip:selection",
        /*handleSelection*/
        ctx[12], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*chips, $$scope, key*/
      524297) {
        var _each_value =
        /*chips*/
        ctx[0];
        validate_each_argument(_each_value);
        group_outros();
        validate_each_keys(ctx, _each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, _each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
        check_outros();
      }

      set_attributes(div, div_data = get_spread_update(div_levels, [(!current || dirty &
      /*className, choice, filter, input*/
      116 && div_class_value !== (div_class_value = "\n    mdc-chip-set\n    " +
      /*className*/
      ctx[2] + "\n    " + (
      /*choice*/
      ctx[4] ? "mdc-chip-set--choice" : "") + "\n    " + (
      /*filter*/
      ctx[5] ? "mdc-chip-set--filter" : "") + "\n    " + (
      /*input*/
      ctx[6] ? "mdc-chip-set--input" : "") + "\n  ")) && {
        class: div_class_value
      }, {
        role: "grid"
      }, dirty &
      /*$$props*/
      16384 && exclude(
      /*$$props*/
      ctx[14], ["use", "class", "chips", "key", "selected", "choice", "filter", "input"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      2) useActions_action.update.call(null,
      /*use*/
      ctx[1]);
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].d();
      }
      /*div_binding*/


      ctx[18](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var $choiceStore;
  var $filterStore;
  var $selectedStore;
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Set", slots, ['default']);
  var forwardEvents = forwardEventsBuilder(get_current_component());
  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;
  var _$$props4 = $$props,
      _$$props4$chips = _$$props4.chips,
      chips = _$$props4$chips === void 0 ? [] : _$$props4$chips;
  var _$$props5 = $$props,
      _$$props5$key = _$$props5.key,
      key = _$$props5$key === void 0 ? function (chip) {
    return chip;
  } : _$$props5$key;
  var _$$props6 = $$props,
      _$$props6$selected = _$$props6.selected,
      selected = _$$props6$selected === void 0 ? null : _$$props6$selected;
  var _$$props7 = $$props,
      _$$props7$choice = _$$props7.choice,
      choice = _$$props7$choice === void 0 ? false : _$$props7$choice;
  var _$$props8 = $$props,
      _$$props8$filter = _$$props8.filter,
      filter = _$$props8$filter === void 0 ? false : _$$props8$filter;
  var _$$props9 = $$props,
      _$$props9$input = _$$props9.input,
      input = _$$props9$input === void 0 ? false : _$$props9$input;
  var element;
  var chipSet;
  var choiceStore = writable(choice);
  validate_store(choiceStore, "choiceStore");
  component_subscribe($$self, choiceStore, function (value) {
    return $$invalidate(22, $choiceStore = value);
  });
  setContext("SMUI:chip:choice", choiceStore);
  var filterStore = writable(filter);
  validate_store(filterStore, "filterStore");
  component_subscribe($$self, filterStore, function (value) {
    return $$invalidate(23, $filterStore = value);
  });
  setContext("SMUI:chip:filter", filterStore);
  var selectedStore = writable(selected);
  validate_store(selectedStore, "selectedStore");
  component_subscribe($$self, selectedStore, function (value) {
    return $$invalidate(24, $selectedStore = value);
  });
  setContext("SMUI:chip:selected", selectedStore);
  onMount(function () {
    $$invalidate(16, chipSet = new MDCChipSet(element)); // Super shady workaround for MDC removing the element before Svelte can.
    // https://github.com/material-components/material-components-web/blob/v4.0.0/packages/mdc-chips/chip-set/component.ts#L125

    $$invalidate(16, chipSet.foundation_.adapter_.removeChipAtIndex = function (index) {
      if (index >= 0 && index < chipSet.chips_.length) {
        chipSet.chips_[index].destroy(); // This is the part that's causing problems.
        // chipSet.chips_[index].remove();

        chipSet.chips_.splice(index, 1);
      }
    }, chipSet);

    for (var i = 0; i < element.children.length; i++) {
      element.children[i].setChip(chipSet.chips[i]);
    }
  });
  onDestroy(function () {
    chipSet && chipSet.destroy();
  });
  var previousChipsLength = chips.length;
  afterUpdate(function () {
    if (previousChipsLength !== chips.length) {
      while (previousChipsLength < chips.length) {
        chipSet.addChip(element.children[previousChipsLength]);
        element.children[previousChipsLength].setChip(chipSet.chips[previousChipsLength]);
        previousChipsLength++;
      }

      previousChipsLength = chips.length;
    }
  });
  var selectedRaf;

  function handleSelection(e) {
    if (selectedRaf) {
      window.cancelAnimationFrame(selectedRaf);
    }

    selectedRaf = window.requestAnimationFrame(updateSelected);
  }

  function updateSelected() {
    if (!chipSet) {
      return;
    }

    if (choice) {
      if (!chipSet.selectedChipIds.length) {
        $$invalidate(15, selected = null);
        return;
      }

      for (var i = 0; i < chipSet.chips.length; i++) {
        if (chipSet.chips[i].id === chipSet.selectedChipIds[0]) {
          $$invalidate(15, selected = chips[i]);
          return;
        }
      }

      $$invalidate(15, selected = null);
    } else {
      if (!Array.isArray(selected)) {
        $$invalidate(15, selected = []);
      }

      selected.splice(0, selected.length);

      for (var _i8 = 0; _i8 < chipSet.chips.length; _i8++) {
        if (chipSet.selectedChipIds.indexOf(chipSet.chips[_i8].id) !== -1) {
          selected.push(chips[_i8]);
        }
      }

      $$invalidate(15, selected);
    }
  }

  function handleRemoval(e) {
    var index = chipSet.foundation_.adapter_.getIndexOfChipById(e.detail.chipId);
    chips.splice(index, 1);
    $$invalidate(0, chips);
  }

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(7, element);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
    if ("chips" in $$new_props) $$invalidate(0, chips = $$new_props.chips);
    if ("key" in $$new_props) $$invalidate(3, key = $$new_props.key);
    if ("selected" in $$new_props) $$invalidate(15, selected = $$new_props.selected);
    if ("choice" in $$new_props) $$invalidate(4, choice = $$new_props.choice);
    if ("filter" in $$new_props) $$invalidate(5, filter = $$new_props.filter);
    if ("input" in $$new_props) $$invalidate(6, input = $$new_props.input);
    if ("$$scope" in $$new_props) $$invalidate(19, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      MDCChipSet: MDCChipSet,
      onMount: onMount,
      onDestroy: onDestroy,
      afterUpdate: afterUpdate,
      setContext: setContext,
      writable: writable,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      ContextFragment: ContextFragment,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      chips: chips,
      key: key,
      selected: selected,
      choice: choice,
      filter: filter,
      input: input,
      element: element,
      chipSet: chipSet,
      choiceStore: choiceStore,
      filterStore: filterStore,
      selectedStore: selectedStore,
      previousChipsLength: previousChipsLength,
      selectedRaf: selectedRaf,
      handleSelection: handleSelection,
      updateSelected: updateSelected,
      handleRemoval: handleRemoval,
      $choiceStore: $choiceStore,
      $filterStore: $filterStore,
      $selectedStore: $selectedStore
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(14, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
    if ("chips" in $$props) $$invalidate(0, chips = $$new_props.chips);
    if ("key" in $$props) $$invalidate(3, key = $$new_props.key);
    if ("selected" in $$props) $$invalidate(15, selected = $$new_props.selected);
    if ("choice" in $$props) $$invalidate(4, choice = $$new_props.choice);
    if ("filter" in $$props) $$invalidate(5, filter = $$new_props.filter);
    if ("input" in $$props) $$invalidate(6, input = $$new_props.input);
    if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
    if ("chipSet" in $$props) $$invalidate(16, chipSet = $$new_props.chipSet);
    if ("previousChipsLength" in $$props) previousChipsLength = $$new_props.previousChipsLength;
    if ("selectedRaf" in $$props) selectedRaf = $$new_props.selectedRaf;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*choice*/
    16) {
       set_store_value(choiceStore, $choiceStore = choice, $choiceStore);
    }

    if ($$self.$$.dirty &
    /*filter*/
    32) {
       set_store_value(filterStore, $filterStore = filter, $filterStore);
    }

    if ($$self.$$.dirty &
    /*selected*/
    32768) {
       set_store_value(selectedStore, $selectedStore = selected, $selectedStore);
    }

    if ($$self.$$.dirty &
    /*chipSet, choice, selected, chips*/
    98321) {
      // Update the MDCChip when the selection changes.
       if (chipSet) {
        if (choice) {
          if (selected !== null) {
            // Find the selected item.
            var i;

            for (i = 0; i < chips.length; i++) {
              if (selected === chips[i]) {
                break;
              }
            }

            for (var j = 0; j < chipSet.chips.length; j++) {
              if (chipSet.chips[j].selected !== (j === i)) {
                $$invalidate(16, chipSet.chips[j].selected = j === i, chipSet);
              }
            }
          } else {
            for (var _i9 = 0; _i9 < chipSet.chips.length; _i9++) {
              if (chipSet.chips[_i9].selected) {
                $$invalidate(16, chipSet.chips[_i9].selected = false, chipSet);
              }
            }
          }
        } else if (Array.isArray(selected)) {
          for (var _i10 = 0; _i10 < chipSet.chips.length; _i10++) {
            var sel = selected.indexOf(chips[_i10]) !== -1;

            if (chipSet.chips[_i10].selected !== sel) {
              $$invalidate(16, chipSet.chips[_i10].selected = sel, chipSet);
            }
          }
        }
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [chips, use, className, key, choice, filter, input, element, forwardEvents, choiceStore, filterStore, selectedStore, handleSelection, handleRemoval, $$props, selected, chipSet, slots, div_binding, $$scope];
}

var Set$1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Set, _SvelteComponentDev);

  var _super = _createSuper$2(Set);

  function Set(options) {
    var _this;

    _classCallCheck(this, Set);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      use: 1,
      class: 2,
      chips: 0,
      key: 3,
      selected: 15,
      choice: 4,
      filter: 5,
      input: 6
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Set",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Set, [{
    key: "use",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "chips",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "key",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selected",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "choice",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "filter",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "input",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Set;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "../packages/chips/Checkmark.svelte";

function create_fragment$3(ctx) {
  var span;
  var svg;
  var path;
  var span_class_value;
  var useActions_action;
  var mounted;
  var dispose;
  var span_levels = [{
    class: span_class_value = "mdc-chip__checkmark " +
    /*className*/
    ctx[1]
  }, exclude(
  /*$$props*/
  ctx[2], ["use", "class"])];
  var span_data = {};

  for (var i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }

  var block = {
    c: function create() {
      span = element("span");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      svg = claim_element(span_nodes, "svg", {
        class: true,
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        class: true,
        fill: true,
        stroke: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "class", "mdc-chip__checkmark-path");
      attr_dev(path, "fill", "none");
      attr_dev(path, "stroke", "black");
      attr_dev(path, "d", "M1.73,12.91 8.1,19.28 22.79,4.59");
      add_location(path, file$2, 6, 4, 181);
      attr_dev(svg, "class", "mdc-chip__checkmark-svg");
      attr_dev(svg, "viewBox", "-2 -3 30 30");
      add_location(svg, file$2, 5, 2, 117);
      set_attributes(span, span_data);
      add_location(span, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, svg);
      append_dev(svg, path);

      if (!mounted) {
        dispose = action_destroyer(useActions_action = useActions.call(null, span,
        /*use*/
        ctx[0]));
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      set_attributes(span, span_data = get_spread_update(span_levels, [dirty &
      /*className*/
      2 && span_class_value !== (span_class_value = "mdc-chip__checkmark " +
      /*className*/
      ctx[1]) && {
        class: span_class_value
      }, dirty &
      /*$$props*/
      4 && exclude(
      /*$$props*/
      ctx[2], ["use", "class"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Checkmark", slots, []);
  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;

  $$self.$$set = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  };

  $$self.$capture_state = function () {
    return {
      exclude: exclude,
      useActions: useActions,
      use: use,
      className: className
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, $$props];
}

var Checkmark = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Checkmark, _SvelteComponentDev);

  var _super = _createSuper$3(Checkmark);

  function Checkmark(options) {
    var _this;

    _classCallCheck(this, Checkmark);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      use: 0,
      class: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Checkmark",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(Checkmark, [{
    key: "use",
    get: function get() {
      throw new Error("<Checkmark>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Checkmark>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Checkmark>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Checkmark>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Checkmark;
}(SvelteComponentDev);

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "../packages/chips/Text.svelte"; // (2:0) {#if $filter}

function create_if_block$1(ctx) {
  var checkmark;
  var current;
  checkmark = new Checkmark({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(checkmark.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(checkmark.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkmark, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkmark.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkmark.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkmark, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(2:0) {#if $filter}",
    ctx: ctx
  });
  return block;
}

function create_fragment$4(ctx) {
  var t;
  var span1;
  var span0;
  var span0_class_value;
  var span0_role_value;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var mounted;
  var dispose;
  var if_block =
  /*$filter*/
  ctx[3] && create_if_block$1(ctx);
  var default_slot_template =
  /*#slots*/
  ctx[14].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[13], null);
  var span0_levels = [{
    class: span0_class_value = "\n      " +
    /*className*/
    ctx[1] + "\n      mdc-chip__text\n      mdc-chip__primary-action\n    "
  }, {
    role: span0_role_value =
    /*$filter*/
    ctx[3] ? "checkbox" :
    /*$choice*/
    ctx[4] ? "radio" : "button"
  },
  /*$filter*/
  ctx[3] ||
  /*$choice*/
  ctx[4] ? {
    "aria-selected":
    /*$isSelected*/
    ctx[5] ? "true" : "false"
  } : {}, exclude(
  /*$$props*/
  ctx[11], ["use", "class", "tabindex"])];
  var span0_data = {};

  for (var i = 0; i < span0_levels.length; i += 1) {
    span0_data = assign(span0_data, span0_levels[i]);
  }

  var block = {
    c: function create() {
      if (if_block) if_block.c();
      t = space();
      span1 = element("span");
      span0 = element("span");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      t = claim_space(nodes);
      span1 = claim_element(nodes, "SPAN", {
        role: true
      });
      var span1_nodes = children(span1);
      span0 = claim_element(span1_nodes, "SPAN", {
        class: true,
        role: true
      });
      var span0_nodes = children(span0);
      if (default_slot) default_slot.l(span0_nodes);
      span0_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(span0, span0_data);
      add_location(span0, file$3, 9, 2, 108);
      attr_dev(span1, "role", "gridcell");
      add_location(span1, file$3, 4, 0, 37);
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, t, anchor);
      insert_dev(target, span1, anchor);
      append_dev(span1, span0);

      if (default_slot) {
        default_slot.m(span0, null);
      }
      /*span0_binding*/


      ctx[15](span0);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, span1,
        /*use*/
        ctx[0])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[6].call(null, span1))];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*$filter*/
      ctx[3]) {
        if (if_block) {
          if (dirty &
          /*$filter*/
          8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        8192) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[13], dirty, null, null);
        }
      }

      set_attributes(span0, span0_data = get_spread_update(span0_levels, [(!current || dirty &
      /*className*/
      2 && span0_class_value !== (span0_class_value = "\n      " +
      /*className*/
      ctx[1] + "\n      mdc-chip__text\n      mdc-chip__primary-action\n    ")) && {
        class: span0_class_value
      }, (!current || dirty &
      /*$filter, $choice*/
      24 && span0_role_value !== (span0_role_value =
      /*$filter*/
      ctx[3] ? "checkbox" :
      /*$choice*/
      ctx[4] ? "radio" : "button")) && {
        role: span0_role_value
      }, dirty &
      /*$filter, $choice, $isSelected*/
      56 && (
      /*$filter*/
      ctx[3] ||
      /*$choice*/
      ctx[4] ? {
        "aria-selected":
        /*$isSelected*/
        ctx[5] ? "true" : "false"
      } : {}), dirty &
      /*$$props*/
      2048 && exclude(
      /*$$props*/
      ctx[11], ["use", "class", "tabindex"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(span1);
      if (default_slot) default_slot.d(detaching);
      /*span0_binding*/

      ctx[15](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$4($$self, $$props, $$invalidate) {
  var $initialTabindex;
  var $filter;
  var $choice;
  var $isSelected;
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Text", slots, ['default']);
  var forwardEvents = forwardEventsBuilder(get_current_component());
  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;
  var _$$props4 = $$props,
      _$$props4$tabindex = _$$props4.tabindex,
      tabindex = _$$props4$tabindex === void 0 ? null : _$$props4$tabindex;
  var initialTabindex = getContext("SMUI:chip:initialTabindex");
  validate_store(initialTabindex, "initialTabindex");
  component_subscribe($$self, initialTabindex, function (value) {
    return $$invalidate(16, $initialTabindex = value);
  });
  var choice = getContext("SMUI:chip:choice");
  validate_store(choice, "choice");
  component_subscribe($$self, choice, function (value) {
    return $$invalidate(4, $choice = value);
  });
  var filter = getContext("SMUI:chip:filter");
  validate_store(filter, "filter");
  component_subscribe($$self, filter, function (value) {
    return $$invalidate(3, $filter = value);
  });
  var isSelected = getContext("SMUI:chip:isSelected");
  validate_store(isSelected, "isSelected");
  component_subscribe($$self, isSelected, function (value) {
    return $$invalidate(5, $isSelected = value);
  });
  var text;
  onMount(function () {
    text.setAttribute("tabindex", tabindex == null ? $initialTabindex : tabindex);
  });

  function span0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      text = $$value;
      $$invalidate(2, text);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("tabindex" in $$new_props) $$invalidate(12, tabindex = $$new_props.tabindex);
    if ("$$scope" in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      getContext: getContext,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      Checkmark: Checkmark,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      tabindex: tabindex,
      initialTabindex: initialTabindex,
      choice: choice,
      filter: filter,
      isSelected: isSelected,
      text: text,
      $initialTabindex: $initialTabindex,
      $filter: $filter,
      $choice: $choice,
      $isSelected: $isSelected
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(11, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("tabindex" in $$props) $$invalidate(12, tabindex = $$new_props.tabindex);
    if ("text" in $$props) $$invalidate(2, text = $$new_props.text);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, text, $filter, $choice, $isSelected, forwardEvents, initialTabindex, choice, filter, isSelected, $$props, tabindex, $$scope, slots, span0_binding];
}

var Text = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Text, _SvelteComponentDev);

  var _super = _createSuper$4(Text);

  function Text(options) {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
      use: 0,
      class: 1,
      tabindex: 12
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Text",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  _createClass(Text, [{
    key: "use",
    get: function get() {
      throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tabindex",
    get: function get() {
      throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Text;
}(SvelteComponentDev);

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$4 = "../packages/chips/Icon.svelte"; // (14:0) {:else}

function create_else_block(ctx) {
  var span;
  var i;
  var i_class_value;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[13].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], null);
  var i_levels = [{
    class: i_class_value = "\n        mdc-chip__icon\n        mdc-chip__icon--trailing\n        " +
    /*className*/
    ctx[1] + "\n        " + (
    /*$shouldRemoveOnTrailingIconClick*/
    ctx[4] ? "mdc-chip__trailing-action" : "") + "\n      "
  },
  /*$shouldRemoveOnTrailingIconClick*/
  ctx[4] ? {
    role: "button"
  } : {}, exclude(
  /*$$props*/
  ctx[11], ["use", "class", "leading", "leadingHidden"])];
  var i_data = {};

  for (var _i = 0; _i < i_levels.length; _i += 1) {
    i_data = assign(i_data, i_levels[_i]);
  }

  var block = {
    c: function create() {
      span = element("span");
      i = element("i");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        role: true
      });
      var span_nodes = children(span);
      i = claim_element(span_nodes, "I", {
        class: true
      });
      var i_nodes = children(i);
      if (default_slot) default_slot.l(i_nodes);
      i_nodes.forEach(detach_dev);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(i, i_data);
      add_location(i, file$4, 19, 4, 429);
      attr_dev(span, "role", "gridcell");
      add_location(span, file$4, 14, 2, 348);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, i);

      if (default_slot) {
        default_slot.m(i, null);
      }
      /*i_binding_1*/


      ctx[15](i);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, span,
        /*use*/
        ctx[0])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[7].call(null, span))];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        4096) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[12], dirty, null, null);
        }
      }

      set_attributes(i, i_data = get_spread_update(i_levels, [(!current || dirty &
      /*className, $shouldRemoveOnTrailingIconClick*/
      18 && i_class_value !== (i_class_value = "\n        mdc-chip__icon\n        mdc-chip__icon--trailing\n        " +
      /*className*/
      ctx[1] + "\n        " + (
      /*$shouldRemoveOnTrailingIconClick*/
      ctx[4] ? "mdc-chip__trailing-action" : "") + "\n      ")) && {
        class: i_class_value
      }, dirty &
      /*$shouldRemoveOnTrailingIconClick*/
      16 && (
      /*$shouldRemoveOnTrailingIconClick*/
      ctx[4] ? {
        role: "button"
      } : {}), dirty &
      /*$$props*/
      2048 && exclude(
      /*$$props*/
      ctx[11], ["use", "class", "leading", "leadingHidden"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      if (default_slot) default_slot.d(detaching);
      /*i_binding_1*/

      ctx[15](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(14:0) {:else}",
    ctx: ctx
  });
  return block;
} // (1:0) {#if leading}


function create_if_block$2(ctx) {
  var i;
  var i_class_value;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[13].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], null);
  var i_levels = [{
    class: i_class_value = "\n      mdc-chip__icon\n      mdc-chip__icon--leading\n      " +
    /*className*/
    ctx[1] + "\n      " + (
    /*$filter*/
    ctx[5] &&
    /*$isSelected*/
    ctx[6] ? "mdc-chip__icon--leading-hidden" : "") + "\n    "
  }, exclude(
  /*$$props*/
  ctx[11], ["use", "class", "leading", "leadingHidden"])];
  var i_data = {};

  for (var _i2 = 0; _i2 < i_levels.length; _i2 += 1) {
    i_data = assign(i_data, i_levels[_i2]);
  }

  var block = {
    c: function create() {
      i = element("i");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      i = claim_element(nodes, "I", {
        class: true
      });
      var i_nodes = children(i);
      if (default_slot) default_slot.l(i_nodes);
      i_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(i, i_data);
      add_location(i, file$4, 1, 2, 16);
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);

      if (default_slot) {
        default_slot.m(i, null);
      }
      /*i_binding*/


      ctx[14](i);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, i,
        /*use*/
        ctx[0])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[7].call(null, i))];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        4096) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[12], dirty, null, null);
        }
      }

      set_attributes(i, i_data = get_spread_update(i_levels, [(!current || dirty &
      /*className, $filter, $isSelected*/
      98 && i_class_value !== (i_class_value = "\n      mdc-chip__icon\n      mdc-chip__icon--leading\n      " +
      /*className*/
      ctx[1] + "\n      " + (
      /*$filter*/
      ctx[5] &&
      /*$isSelected*/
      ctx[6] ? "mdc-chip__icon--leading-hidden" : "") + "\n    ")) && {
        class: i_class_value
      }, dirty &
      /*$$props*/
      2048 && exclude(
      /*$$props*/
      ctx[11], ["use", "class", "leading", "leadingHidden"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(i);
      if (default_slot) default_slot.d(detaching);
      /*i_binding*/

      ctx[14](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$2.name,
    type: "if",
    source: "(1:0) {#if leading}",
    ctx: ctx
  });
  return block;
}

function create_fragment$5(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block$2, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*leading*/
    ctx[2]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$5($$self, $$props, $$invalidate) {
  var $shouldRemoveOnTrailingIconClick;
  var $filter;
  var $isSelected;
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Icon", slots, ['default']);
  var forwardEvents = forwardEventsBuilder(get_current_component());
  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;
  var _$$props4 = $$props,
      _$$props4$leading = _$$props4.leading,
      leading = _$$props4$leading === void 0 ? false : _$$props4$leading;
  var shouldRemoveOnTrailingIconClick = getContext("SMUI:chip:shouldRemoveOnTrailingIconClick");
  validate_store(shouldRemoveOnTrailingIconClick, "shouldRemoveOnTrailingIconClick");
  component_subscribe($$self, shouldRemoveOnTrailingIconClick, function (value) {
    return $$invalidate(4, $shouldRemoveOnTrailingIconClick = value);
  });
  var filter = getContext("SMUI:chip:filter");
  validate_store(filter, "filter");
  component_subscribe($$self, filter, function (value) {
    return $$invalidate(5, $filter = value);
  });
  var isSelected = getContext("SMUI:chip:isSelected");
  validate_store(isSelected, "isSelected");
  component_subscribe($$self, isSelected, function (value) {
    return $$invalidate(6, $isSelected = value);
  });
  var icon;
  onMount(function () {
    if (!leading && $shouldRemoveOnTrailingIconClick) {
      icon.setAttribute("tabindex", "-1");
    }
  });

  function i_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      icon = $$value;
      $$invalidate(3, icon);
    });
  }

  function i_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      icon = $$value;
      $$invalidate(3, icon);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("leading" in $$new_props) $$invalidate(2, leading = $$new_props.leading);
    if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      getContext: getContext,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      leading: leading,
      shouldRemoveOnTrailingIconClick: shouldRemoveOnTrailingIconClick,
      filter: filter,
      isSelected: isSelected,
      icon: icon,
      $shouldRemoveOnTrailingIconClick: $shouldRemoveOnTrailingIconClick,
      $filter: $filter,
      $isSelected: $isSelected
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(11, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("leading" in $$props) $$invalidate(2, leading = $$new_props.leading);
    if ("icon" in $$props) $$invalidate(3, icon = $$new_props.icon);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, leading, icon, $shouldRemoveOnTrailingIconClick, $filter, $isSelected, forwardEvents, shouldRemoveOnTrailingIconClick, filter, isSelected, $$props, $$scope, slots, i_binding, i_binding_1];
}

var Icon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Icon, _SvelteComponentDev);

  var _super = _createSuper$5(Icon);

  function Icon(options) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
      use: 0,
      class: 1,
      leading: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon",
      options: options,
      id: create_fragment$5.name
    });
    return _this;
  }

  _createClass(Icon, [{
    key: "use",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "leading",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Icon;
}(SvelteComponentDev);

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$5 = "src/routes/demo/chips.svelte"; // (11:8) {#if chip === 'four'}

function create_if_block_1$1(ctx) {
  var icon;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      leading: true,
      $$slots: {
        default: [create_default_slot_34]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(11:8) {#if chip === 'four'}",
    ctx: ctx
  });
  return block;
} // (12:10) <Icon class="material-icons" leading>


function create_default_slot_34(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("book");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "book");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_34.name,
    type: "slot",
    source: "(12:10) <Icon class=\\\"material-icons\\\" leading>",
    ctx: ctx
  });
  return block;
} // (14:8) <Text tabindex="-1">


function create_default_slot_33(ctx) {
  var t_value =
  /*chip*/
  ctx[13] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*chip*/
      8192 && t_value !== (t_value =
      /*chip*/
      ctx[13] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(14:8) <Text tabindex=\\\"-1\\\">",
    ctx: ctx
  });
  return block;
} // (15:8) {#if chip === 'five'}


function create_if_block$3(ctx) {
  var icon;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_32]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$3.name,
    type: "if",
    source: "(15:8) {#if chip === 'five'}",
    ctx: ctx
  });
  return block;
} // (16:10) <Icon class="material-icons">


function create_default_slot_32(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("commute");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "commute");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_32.name,
    type: "slot",
    source: "(16:10) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (10:6) <Chip shouldRemoveOnTrailingIconClick={false}>


function create_default_slot_31(ctx) {
  var t0;
  var text_1;
  var t1;
  var if_block1_anchor;
  var current;
  var if_block0 =
  /*chip*/
  ctx[13] === "four" && create_if_block_1$1(ctx);
  text_1 = new Text({
    props: {
      tabindex: "-1",
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var if_block1 =
  /*chip*/
  ctx[13] === "five" && create_if_block$3(ctx);
  var block = {
    c: function create() {
      if (if_block0) if_block0.c();
      t0 = space();
      create_component(text_1.$$.fragment);
      t1 = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0) if_block0.l(nodes);
      t0 = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(text_1, target, anchor);
      insert_dev(target, t1, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*chip*/
      ctx[13] === "four") {
        if (if_block0) {
          if (dirty &
          /*chip*/
          8192) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      var text_1_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);

      if (
      /*chip*/
      ctx[13] === "five") {
        if (if_block1) {
          if (dirty &
          /*chip*/
          8192) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$3(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(text_1.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(text_1.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach_dev(t0);
      destroy_component(text_1, detaching);
      if (detaching) detach_dev(t1);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(10:6) <Chip shouldRemoveOnTrailingIconClick={false}>",
    ctx: ctx
  });
  return block;
} // (9:4) <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>


function create_default_slot_30(ctx) {
  var chip;
  var current;
  chip = new Chip({
    props: {
      shouldRemoveOnTrailingIconClick: false,
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_30.name,
    type: "slot",
    source: "(9:4) <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>",
    ctx: ctx
  });
  return block;
} // (25:12) <Text>


function create_default_slot_29(ctx) {
  var t_value =
  /*chip*/
  ctx[13] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*chip*/
      8192 && t_value !== (t_value =
      /*chip*/
      ctx[13] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_29.name,
    type: "slot",
    source: "(25:12) <Text>",
    ctx: ctx
  });
  return block;
} // (25:6) <Chip>


function create_default_slot_28(ctx) {
  var text_1;
  var current;
  text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_29]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_28.name,
    type: "slot",
    source: "(25:6) <Chip>",
    ctx: ctx
  });
  return block;
} // (24:4) <Set chips={['Morning', 'Afternoon', 'Evening', 'Night']} let:chip choice bind:selected={choice}>


function create_default_slot_27(ctx) {
  var chip;
  var current;
  chip = new Chip({
    props: {
      $$slots: {
        default: [create_default_slot_28]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(24:4) <Set chips={['Morning', 'Afternoon', 'Evening', 'Night']} let:chip choice bind:selected={choice}>",
    ctx: ctx
  });
  return block;
} // (31:48) <Label>


function create_default_slot_26(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Morning");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Morning");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_26.name,
    type: "slot",
    source: "(31:48) <Label>",
    ctx: ctx
  });
  return block;
} // (31:4) <Button on:click={() => choice = 'Morning'}>


function create_default_slot_25(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_25.name,
    type: "slot",
    source: "(31:4) <Button on:click={() => choice = 'Morning'}>",
    ctx: ctx
  });
  return block;
} // (32:50) <Label>


function create_default_slot_24(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Afternoon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Afternoon");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(32:50) <Label>",
    ctx: ctx
  });
  return block;
} // (32:4) <Button on:click={() => choice = 'Afternoon'}>


function create_default_slot_23(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(32:4) <Button on:click={() => choice = 'Afternoon'}>",
    ctx: ctx
  });
  return block;
} // (33:48) <Label>


function create_default_slot_22(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Evening");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Evening");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(33:48) <Label>",
    ctx: ctx
  });
  return block;
} // (33:4) <Button on:click={() => choice = 'Evening'}>


function create_default_slot_21(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(33:4) <Button on:click={() => choice = 'Evening'}>",
    ctx: ctx
  });
  return block;
} // (34:46) <Label>


function create_default_slot_20(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Night");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Night");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(34:46) <Label>",
    ctx: ctx
  });
  return block;
} // (34:4) <Button on:click={() => choice = 'Night'}>


function create_default_slot_19(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(34:4) <Button on:click={() => choice = 'Night'}>",
    ctx: ctx
  });
  return block;
} // (43:8) <Text>


function create_default_slot_18(ctx) {
  var t_value =
  /*chip*/
  ctx[13] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*chip*/
      8192 && t_value !== (t_value =
      /*chip*/
      ctx[13] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(43:8) <Text>",
    ctx: ctx
  });
  return block;
} // (42:6) <Chip touch>


function create_default_slot_17(ctx) {
  var text_1;
  var current;
  text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(42:6) <Chip touch>",
    ctx: ctx
  });
  return block;
} // (41:4) <Set chips={['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats']} let:chip filter bind:selected={filter}>


function create_default_slot_16(ctx) {
  var chip;
  var current;
  chip = new Chip({
    props: {
      touch: true,
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(41:4) <Set chips={['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats']} let:chip filter bind:selected={filter}>",
    ctx: ctx
  });
  return block;
} // (52:8) <Icon class="material-icons" leading>


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("checkroom");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "checkroom");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(52:8) <Icon class=\\\"material-icons\\\" leading>",
    ctx: ctx
  });
  return block;
} // (53:8) <Text>


function create_default_slot_14(ctx) {
  var t_value =
  /*chip*/
  ctx[13] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*chip*/
      8192 && t_value !== (t_value =
      /*chip*/
      ctx[13] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(53:8) <Text>",
    ctx: ctx
  });
  return block;
} // (51:6) <Chip touch>


function create_default_slot_13(ctx) {
  var icon;
  var t;
  var text_1;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      leading: true,
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
      t = space();
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var text_1_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      if (detaching) detach_dev(t);
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(51:6) <Chip touch>",
    ctx: ctx
  });
  return block;
} // (50:4) <Set chips={['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats']} let:chip filter bind:selected={filter}>


function create_default_slot_12(ctx) {
  var chip;
  var current;
  chip = new Chip({
    props: {
      touch: true,
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(50:4) <Set chips={['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats']} let:chip filter bind:selected={filter}>",
    ctx: ctx
  });
  return block;
} // (64:8) <Text>


function create_default_slot_11(ctx) {
  var t_value =
  /*chip*/
  ctx[13] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*chip*/
      8192 && t_value !== (t_value =
      /*chip*/
      ctx[13] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(64:8) <Text>",
    ctx: ctx
  });
  return block;
} // (65:8) <Icon class="material-icons">


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("cancel");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "cancel");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(65:8) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (63:6) <Chip>


function create_default_slot_9(ctx) {
  var text_1;
  var t;
  var icon;
  var current;
  text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
      t = space();
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
      var icon_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
      if (detaching) detach_dev(t);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(63:6) <Chip>",
    ctx: ctx
  });
  return block;
} // (62:4) <Set chips={input} let:chip input>


function create_default_slot_8(ctx) {
  var chip;
  var current;
  chip = new Chip({
    props: {
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(62:4) <Set chips={input} let:chip input>",
    ctx: ctx
  });
  return block;
} // (68:36) <Label>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Add");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Add");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(68:36) <Label>",
    ctx: ctx
  });
  return block;
} // (68:4) <Button on:click={addInputChip}>


function create_default_slot_6(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(68:4) <Button on:click={addInputChip}>",
    ctx: ctx
  });
  return block;
} // (75:8) <Text>


function create_default_slot_5(ctx) {
  var t_value =
  /*chip*/
  ctx[13].v + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*chip*/
      8192 && t_value !== (t_value =
      /*chip*/
      ctx[13].v + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(75:8) <Text>",
    ctx: ctx
  });
  return block;
} // (76:8) <Icon class="material-icons">


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("cancel");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "cancel");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(76:8) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (74:6) <Chip>


function create_default_slot_3(ctx) {
  var text_1;
  var t;
  var icon;
  var current;
  text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
      t = space();
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
      var icon_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
      if (detaching) detach_dev(t);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(74:6) <Chip>",
    ctx: ctx
  });
  return block;
} // (73:4) <Set chips={keyed} let:chip key={chip => chip.k} input>


function create_default_slot_2(ctx) {
  var chip;
  var current;
  chip = new Chip({
    props: {
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(73:4) <Set chips={keyed} let:chip key={chip => chip.k} input>",
    ctx: ctx
  });
  return block;
} // (79:36) <Label>


function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Add");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Add");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(79:36) <Label>",
    ctx: ctx
  });
  return block;
} // (79:4) <Button on:click={addKeyedChip}>


function create_default_slot$2(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$2.name,
    type: "slot",
    source: "(79:4) <Button on:click={addKeyedChip}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$6(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var set0;
  var t3;
  var div1;
  var t4;
  var set1;
  var updating_selected;
  var t5;
  var div2;
  var t6;
  var button0;
  var t7;
  var button1;
  var t8;
  var button2;
  var t9;
  var button3;
  var t10;
  var pre0;
  var t11;
  var t12;
  var t13;
  var div3;
  var t14;
  var set2;
  var updating_selected_1;
  var t15;
  var div4;
  var t16;
  var set3;
  var updating_selected_2;
  var t17;
  var pre1;
  var t18;
  var t19_value =
  /*filter*/
  ctx[1].join(", ") + "";
  var t19;
  var t20;
  var div5;
  var t21;
  var set4;
  var t22;
  var button4;
  var t23;
  var div6;
  var t24;
  var set5;
  var t25;
  var button5;
  var current;
  set0 = new Set$1({
    props: {
      chips: ["one", "two", "three", "four", "five"],
      $$slots: {
        default: [create_default_slot_30, function (_ref) {
          var chip = _ref.chip;
          return {
            13: chip
          };
        }, function (_ref2) {
          var chip = _ref2.chip;
          return chip ? 8192 : 0;
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function set1_selected_binding(value) {
    /*set1_selected_binding*/
    ctx[6].call(null, value);
  }

  var set1_props = {
    chips: ["Morning", "Afternoon", "Evening", "Night"],
    choice: true,
    $$slots: {
      default: [create_default_slot_27, function (_ref3) {
        var chip = _ref3.chip;
        return {
          13: chip
        };
      }, function (_ref4) {
        var chip = _ref4.chip;
        return chip ? 8192 : 0;
      }]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*choice*/
  ctx[0] !== void 0) {
    set1_props.selected =
    /*choice*/
    ctx[0];
  }

  set1 = new Set$1({
    props: set1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(set1, "selected", set1_selected_binding);
  });
  button0 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_25]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler*/
  ctx[7]);
  button1 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_23]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_1*/
  ctx[8]);
  button2 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_2*/
  ctx[9]);
  button3 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button3.$on("click",
  /*click_handler_3*/
  ctx[10]);

  function set2_selected_binding(value) {
    /*set2_selected_binding*/
    ctx[11].call(null, value);
  }

  var set2_props = {
    chips: ["Shoes", "Pants", "Shirts", "Hats", "Coats"],
    filter: true,
    $$slots: {
      default: [create_default_slot_16, function (_ref5) {
        var chip = _ref5.chip;
        return {
          13: chip
        };
      }, function (_ref6) {
        var chip = _ref6.chip;
        return chip ? 8192 : 0;
      }]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*filter*/
  ctx[1] !== void 0) {
    set2_props.selected =
    /*filter*/
    ctx[1];
  }

  set2 = new Set$1({
    props: set2_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(set2, "selected", set2_selected_binding);
  });

  function set3_selected_binding(value) {
    /*set3_selected_binding*/
    ctx[12].call(null, value);
  }

  var set3_props = {
    chips: ["Shoes", "Pants", "Shirts", "Hats", "Coats"],
    filter: true,
    $$slots: {
      default: [create_default_slot_12, function (_ref7) {
        var chip = _ref7.chip;
        return {
          13: chip
        };
      }, function (_ref8) {
        var chip = _ref8.chip;
        return chip ? 8192 : 0;
      }]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*filter*/
  ctx[1] !== void 0) {
    set3_props.selected =
    /*filter*/
    ctx[1];
  }

  set3 = new Set$1({
    props: set3_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(set3, "selected", set3_selected_binding);
  });
  set4 = new Set$1({
    props: {
      chips:
      /*input*/
      ctx[2],
      input: true,
      $$slots: {
        default: [create_default_slot_8, function (_ref9) {
          var chip = _ref9.chip;
          return {
            13: chip
          };
        }, function (_ref10) {
          var chip = _ref10.chip;
          return chip ? 8192 : 0;
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button4 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button4.$on("click",
  /*addInputChip*/
  ctx[4]);
  set5 = new Set$1({
    props: {
      chips:
      /*keyed*/
      ctx[3],
      key: func,
      input: true,
      $$slots: {
        default: [create_default_slot_2, function (_ref11) {
          var chip = _ref11.chip;
          return {
            13: chip
          };
        }, function (_ref12) {
          var chip = _ref12.chip;
          return chip ? 8192 : 0;
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button5 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot$2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button5.$on("click",
  /*addKeyedChip*/
  ctx[5]);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Chips");
      t2 = space();
      div0 = element("div");
      create_component(set0.$$.fragment);
      t3 = space();
      div1 = element("div");
      t4 = text("Choice chips:\n    ");
      create_component(set1.$$.fragment);
      t5 = space();
      div2 = element("div");
      t6 = text("Programmatically select:\n    ");
      create_component(button0.$$.fragment);
      t7 = space();
      create_component(button1.$$.fragment);
      t8 = space();
      create_component(button2.$$.fragment);
      t9 = space();
      create_component(button3.$$.fragment);
      t10 = space();
      pre0 = element("pre");
      t11 = text("Selected: ");
      t12 = text(
      /*choice*/
      ctx[0]);
      t13 = space();
      div3 = element("div");
      t14 = text("Filter chips with increased touch target:\n    ");
      create_component(set2.$$.fragment);
      t15 = space();
      div4 = element("div");
      t16 = text("The same, but with leading icons:\n    ");
      create_component(set3.$$.fragment);
      t17 = space();
      pre1 = element("pre");
      t18 = text("Selected: ");
      t19 = text(t19_value);
      t20 = space();
      div5 = element("div");
      t21 = text("Input chips:\n    ");
      create_component(set4.$$.fragment);
      t22 = space();
      create_component(button4.$$.fragment);
      t23 = space();
      div6 = element("div");
      t24 = text("Keyed chips:\n    ");
      create_component(set5.$$.fragment);
      t25 = space();
      create_component(button5.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-e9pg83\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Chips");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(set0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "Choice chips:\n    ");
      claim_component(set1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t6 = claim_text(div2_nodes, "Programmatically select:\n    ");
      claim_component(button0.$$.fragment, div2_nodes);
      t7 = claim_space(div2_nodes);
      claim_component(button1.$$.fragment, div2_nodes);
      t8 = claim_space(div2_nodes);
      claim_component(button2.$$.fragment, div2_nodes);
      t9 = claim_space(div2_nodes);
      claim_component(button3.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t11 = claim_text(pre0_nodes, "Selected: ");
      t12 = claim_text(pre0_nodes,
      /*choice*/
      ctx[0]);
      pre0_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t14 = claim_text(div3_nodes, "Filter chips with increased touch target:\n    ");
      claim_component(set2.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t15 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {});
      var div4_nodes = children(div4);
      t16 = claim_text(div4_nodes, "The same, but with leading icons:\n    ");
      claim_component(set3.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t17 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t18 = claim_text(pre1_nodes, "Selected: ");
      t19 = claim_text(pre1_nodes, t19_value);
      pre1_nodes.forEach(detach_dev);
      t20 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {});
      var div5_nodes = children(div5);
      t21 = claim_text(div5_nodes, "Input chips:\n    ");
      claim_component(set4.$$.fragment, div5_nodes);
      t22 = claim_space(div5_nodes);
      claim_component(button4.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      t23 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {});
      var div6_nodes = children(div6);
      t24 = claim_text(div6_nodes, "Keyed chips:\n    ");
      claim_component(set5.$$.fragment, div6_nodes);
      t25 = claim_space(div6_nodes);
      claim_component(button5.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Chips - SMUI";
      add_location(h2, file$5, 5, 2, 72);
      add_location(div0, file$5, 7, 2, 90);
      add_location(div1, file$5, 21, 2, 496);
      add_location(div2, file$5, 28, 2, 684);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file$5, 36, 2, 1051);
      add_location(div3, file$5, 38, 2, 1099);
      add_location(div4, file$5, 47, 2, 1338);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file$5, 57, 2, 1631);
      add_location(div5, file$5, 59, 2, 1690);
      add_location(div6, file$5, 70, 2, 1945);
      add_location(section, file$5, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(set0, div0, null);
      append_dev(section, t3);
      append_dev(section, div1);
      append_dev(div1, t4);
      mount_component(set1, div1, null);
      append_dev(section, t5);
      append_dev(section, div2);
      append_dev(div2, t6);
      mount_component(button0, div2, null);
      append_dev(div2, t7);
      mount_component(button1, div2, null);
      append_dev(div2, t8);
      mount_component(button2, div2, null);
      append_dev(div2, t9);
      mount_component(button3, div2, null);
      append_dev(section, t10);
      append_dev(section, pre0);
      append_dev(pre0, t11);
      append_dev(pre0, t12);
      append_dev(section, t13);
      append_dev(section, div3);
      append_dev(div3, t14);
      mount_component(set2, div3, null);
      append_dev(section, t15);
      append_dev(section, div4);
      append_dev(div4, t16);
      mount_component(set3, div4, null);
      append_dev(section, t17);
      append_dev(section, pre1);
      append_dev(pre1, t18);
      append_dev(pre1, t19);
      append_dev(section, t20);
      append_dev(section, div5);
      append_dev(div5, t21);
      mount_component(set4, div5, null);
      append_dev(div5, t22);
      mount_component(button4, div5, null);
      append_dev(section, t23);
      append_dev(section, div6);
      append_dev(div6, t24);
      mount_component(set5, div6, null);
      append_dev(div6, t25);
      mount_component(button5, div6, null);
      current = true;
    },
    p: function update(ctx, _ref13) {
      var _ref14 = _slicedToArray$1(_ref13, 1),
          dirty = _ref14[0];

      var set0_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        set0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      set0.$set(set0_changes);
      var set1_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        set1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_selected && dirty &
      /*choice*/
      1) {
        updating_selected = true;
        set1_changes.selected =
        /*choice*/
        ctx[0];
        add_flush_callback(function () {
          return updating_selected = false;
        });
      }

      set1.$set(set1_changes);
      var button0_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
      var button3_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        button3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button3.$set(button3_changes);
      if (!current || dirty &
      /*choice*/
      1) set_data_dev(t12,
      /*choice*/
      ctx[0]);
      var set2_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        set2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_selected_1 && dirty &
      /*filter*/
      2) {
        updating_selected_1 = true;
        set2_changes.selected =
        /*filter*/
        ctx[1];
        add_flush_callback(function () {
          return updating_selected_1 = false;
        });
      }

      set2.$set(set2_changes);
      var set3_changes = {};

      if (dirty &
      /*$$scope, chip*/
      24576) {
        set3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_selected_2 && dirty &
      /*filter*/
      2) {
        updating_selected_2 = true;
        set3_changes.selected =
        /*filter*/
        ctx[1];
        add_flush_callback(function () {
          return updating_selected_2 = false;
        });
      }

      set3.$set(set3_changes);
      if ((!current || dirty &
      /*filter*/
      2) && t19_value !== (t19_value =
      /*filter*/
      ctx[1].join(", ") + "")) set_data_dev(t19, t19_value);
      var set4_changes = {};
      if (dirty &
      /*input*/
      4) set4_changes.chips =
      /*input*/
      ctx[2];

      if (dirty &
      /*$$scope, chip*/
      24576) {
        set4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      set4.$set(set4_changes);
      var button4_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        button4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button4.$set(button4_changes);
      var set5_changes = {};
      if (dirty &
      /*keyed*/
      8) set5_changes.chips =
      /*keyed*/
      ctx[3];

      if (dirty &
      /*$$scope, chip*/
      24576) {
        set5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      set5.$set(set5_changes);
      var button5_changes = {};

      if (dirty &
      /*$$scope*/
      16384) {
        button5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button5.$set(button5_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(set0.$$.fragment, local);
      transition_in(set1.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(set2.$$.fragment, local);
      transition_in(set3.$$.fragment, local);
      transition_in(set4.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      transition_in(set5.$$.fragment, local);
      transition_in(button5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(set0.$$.fragment, local);
      transition_out(set1.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(set2.$$.fragment, local);
      transition_out(set3.$$.fragment, local);
      transition_out(set4.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      transition_out(set5.$$.fragment, local);
      transition_out(button5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(set0);
      destroy_component(set1);
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(set2);
      destroy_component(set3);
      destroy_component(set4);
      destroy_component(button4);
      destroy_component(set5);
      destroy_component(button5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var func = function func(chip) {
  return chip.k;
};

function instance$6($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Chips", slots, []);
  var choice = "Morning";
  var filter = ["Shoes", "Shirts", "Coats"];
  var input = [1, 2, 3, 4];
  var keyed = [{
    k: 1,
    v: "Apple"
  }, {
    k: 2,
    v: "Apple"
  }, {
    k: 3,
    v: "Apple"
  }, {
    k: 4,
    v: "Apple"
  }];

  function addInputChip() {
    if (input.length) {
      input.push(input[input.length - 1] + 1);
      $$invalidate(2, input);
    } else {
      input.push(1);
      $$invalidate(2, input);
    }
  }

  function addKeyedChip() {
    if (keyed.length) {
      keyed.push({
        k: keyed[keyed.length - 1].k + 1,
        v: "Apple"
      });
      $$invalidate(3, keyed);
    } else {
      keyed.push({
        k: 1,
        v: "Apple"
      });
      $$invalidate(3, keyed);
    }
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Chips> was created with unknown prop '".concat(key, "'"));
  });

  function set1_selected_binding(value) {
    choice = value;
    $$invalidate(0, choice);
  }

  var click_handler = function click_handler() {
    return $$invalidate(0, choice = "Morning");
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(0, choice = "Afternoon");
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate(0, choice = "Evening");
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(0, choice = "Night");
  };

  function set2_selected_binding(value) {
    filter = value;
    $$invalidate(1, filter);
  }

  function set3_selected_binding(value) {
    filter = value;
    $$invalidate(1, filter);
  }

  $$self.$capture_state = function () {
    return {
      Chip: Chip,
      Set: Set$1,
      Icon: Icon,
      Text: Text,
      Button: Button_1,
      Label: Label,
      choice: choice,
      filter: filter,
      input: input,
      keyed: keyed,
      addInputChip: addInputChip,
      addKeyedChip: addKeyedChip
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("choice" in $$props) $$invalidate(0, choice = $$props.choice);
    if ("filter" in $$props) $$invalidate(1, filter = $$props.filter);
    if ("input" in $$props) $$invalidate(2, input = $$props.input);
    if ("keyed" in $$props) $$invalidate(3, keyed = $$props.keyed);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [choice, filter, input, keyed, addInputChip, addKeyedChip, set1_selected_binding, click_handler, click_handler_1, click_handler_2, click_handler_3, set2_selected_binding, set3_selected_binding];
}

var Chips = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Chips, _SvelteComponentDev);

  var _super = _createSuper$6(Chips);

  function Chips(options) {
    var _this;

    _classCallCheck$1(this, Chips);

    _this = _super.call(this, options);
    init(_assertThisInitialized$1(_this), options, instance$6, create_fragment$6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Chips",
      options: options,
      id: create_fragment$6.name
    });
    return _this;
  }

  return Chips;
}(SvelteComponentDev);

export default Chips;
