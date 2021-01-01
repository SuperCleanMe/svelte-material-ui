import { X as styleInject, Y as _inherits, Z as _getPrototypeOf, $ as _possibleConstructorReturn, a0 as _classCallCheck, i as init, s as safe_not_equal, a1 as _assertThisInitialized, e as dispatch_dev, a2 as _createClass, S as SvelteComponentDev, ah as create_slot, a3 as exclude, a4 as assign, L as binding_callbacks, M as bind, w as validate_slots, a5 as forwardEventsBuilder, a6 as get_current_component, am as getContext, ai as setContext, G as validate_store, H as component_subscribe, a7 as onMount, an as _asyncToGenerator, ao as regenerator, a8 as onDestroy, a9 as exclude_internal_props, aj as writable, aa as useActions, as as List, ak as set_store_value, x as create_component, y as claim_component, z as mount_component, ad as get_spread_update, aw as get_spread_object, C as transition_in, D as transition_out, E as destroy_component, f as space, O as empty, j as claim_space, r as insert_dev, P as group_outros, Q as check_outros, h as detach_dev, g as element, t as text, k as claim_element, l as children, m as claim_text, o as attr_dev, p as add_location, ab as set_attributes, u as append_dev, A as action_destroyer, aq as listen_dev, al as update_slot, U as set_data_dev, ae as is_function, N as add_flush_callback, af as run_all, aJ as _toConsumableArray, at as Item, ac as _slicedToArray, _ as _inherits$1, a as _getPrototypeOf$1, b as _possibleConstructorReturn$1, c as _classCallCheck$1, d as _assertThisInitialized$1, q as query_selector_all, n as set_style, V as validate_each_argument, W as destroy_each, v as noop } from './client.7aab66ca.js';
import { p as prefixFilter } from './prefixFilter.1941fe02.js';
import { A as Anchor } from './Anchor.044ba703.js';
import './MenuSurface.7cb1c1c1.js';
import { F as FloatingLabel, L as LineRipple, N as NotchedOutline } from './NotchedOutline.ab40c279.js';
import { M as Menu } from './Menu.ed8f12c9.js';

var css_248z = "@keyframes mdc-select-float-native-control{0%{transform:translateY(8px);opacity:0}to{transform:translateY(0);opacity:1}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform .18s cubic-bezier(.4,0,.2,1),opacity .18s cubic-bezier(.4,0,.2,1);opacity:0;z-index:2}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}.mdc-notched-outline[dir=rtl],[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}.mdc-notched-outline__leading[dir=rtl],.mdc-notched-outline__trailing,[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 24px)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.33333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl],[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}.mdc-floating-label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;position:absolute;left:0;transform-origin:left top;transition:transform .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}.mdc-floating-label[dir=rtl],[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard .25s 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(0) translateY(-106%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(4%) translateY(-106%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-4%) translateY(-106%) scale(.75)}to{transform:translateX(0) translateY(-106%) scale(.75)}}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;position:absolute;bottom:16px;box-sizing:border-box;width:24px;height:24px;border:none;background-color:transparent;fill:currentColor;opacity:.54;text-decoration:none;cursor:pointer;user-select:none}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.mdc-select-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;display:block;line-height:normal;margin:0;transition:opacity .18s cubic-bezier(.4,0,.2,1);opacity:0;will-change:opacity}.mdc-select-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-select-helper-text--persistent{transition:none;opacity:1;will-change:auto}.mdc-select{position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0,0,0,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{border-bottom-color:rgba(0,0,0,.42)}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor+.mdc-select-helper-text{color:rgba(0,0,0,.6)}.mdc-select .mdc-select__anchor{border-radius:4px 4px 0 0}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple{background-color:#ff3e00;background-color:var(--mdc-theme-primary,#ff3e00)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(255,62,0,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text:hover{border-bottom-color:rgba(0,0,0,.87)}.mdc-select .mdc-floating-label{left:16px;right:auto;top:21px;pointer-events:none}.mdc-select .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-select .mdc-floating-label{left:auto;right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:auto}.mdc-select.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-floating-label{left:auto;right:48px}.mdc-select.mdc-select--outlined .mdc-floating-label{left:4px;right:auto;top:17px}.mdc-select.mdc-select--outlined .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-select.mdc-select--outlined .mdc-floating-label{left:auto;right:4px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:auto}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:auto;right:36px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{left:36px;right:auto}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{left:auto;right:36px}.mdc-select__dropdown-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' opacity='.54' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\") no-repeat 50%;left:auto;right:8px;position:absolute;bottom:16px;width:24px;height:24px;transition:transform .15s cubic-bezier(.4,0,.2,1);pointer-events:none}.mdc-select__dropdown-icon[dir=rtl],[dir=rtl] .mdc-select__dropdown-icon{left:8px;right:auto}.mdc-select--focused .mdc-select__dropdown-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ff3e00' fill-rule='evenodd' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\") no-repeat 50%}.mdc-select--activated .mdc-select__dropdown-icon{transform:rotate(180deg) translateY(-5px);transition:transform .15s cubic-bezier(.4,0,.2,1)}.mdc-select__anchor{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-flex;position:relative;box-sizing:border-box;height:56px;overflow:hidden;will-change:opacity,transform,color}.mdc-select__anchor:after,.mdc-select__anchor:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-select__anchor:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-select__anchor.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-select__anchor.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-select__anchor:after,.mdc-select__anchor:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-select__anchor:after,.mdc-select__anchor:before{background-color:rgba(0,0,0,.87)}.mdc-select__anchor:hover:before{opacity:.04}.mdc-select__anchor.mdc-ripple-upgraded--background-focused:before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-70%) scale(.75)}.mdc-select__anchor.mdc-select--focused .mdc-line-ripple:after{transform:scaleY(2);opacity:1}.mdc-select__anchor+.mdc-select-helper-text{margin-right:12px;margin-left:12px}.mdc-select--outlined .mdc-select__anchor+.mdc-select-helper-text{margin-right:16px;margin-left:16px}.mdc-select--focused .mdc-select__anchor+.mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){opacity:1}.mdc-select__selected-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;box-sizing:border-box;width:100%;min-width:200px;height:56px;padding:20px 52px 4px 16px;border:none;border-bottom:1px solid;outline:none;background-color:transparent;color:inherit;white-space:nowrap;cursor:pointer;appearance:none}.mdc-select__selected-text[dir=rtl],[dir=rtl] .mdc-select__selected-text{padding-left:52px;padding-right:16px}.mdc-select__selected-text::-ms-expand{display:none}.mdc-select__selected-text::-ms-value{background-color:transparent;color:inherit}@-moz-document url-prefix(\"\"){.mdc-select__selected-text{text-indent:-2px}}.mdc-select--outlined{border:none}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px;border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00)}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl],.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:0 4px 4px 0}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:4px 0 0 4px}.mdc-select--outlined .mdc-select__selected-text{border-radius:4px}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined .mdc-select__anchor{overflow:visible}.mdc-select--outlined .mdc-select__anchor:after,.mdc-select--outlined .mdc-select__anchor:before{content:none}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined .25s 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-144%) scale(1);font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(.75);font-size:1rem}.mdc-select--outlined .mdc-select__selected-text{display:flex;padding:14px 52px 12px 16px;border:none;background-color:transparent;z-index:1}.mdc-select--outlined .mdc-select__selected-text[dir=rtl],[dir=rtl] .mdc-select--outlined .mdc-select__selected-text{padding-left:52px;padding-right:16px}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;pointer-events:auto}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b71c1c;color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__selected-text{border-bottom-color:#b71c1c;border-bottom-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple{background-color:#b71c1c;background-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b71c1c}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid .mdc-select__anchor+.mdc-select-helper-text--validation-msg{color:#b71c1c;color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__selected-text:hover{border-bottom-color:#b71c1c;border-bottom-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b71c1c;border-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px;border-color:#b71c1c;border-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid .mdc-select__dropdown-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23b71c1c' fill-rule='evenodd' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\") no-repeat 50%}.mdc-select--invalid+.mdc-select-helper-text--validation-msg{opacity:1}.mdc-select--required .mdc-floating-label:after{content:\"*\"}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--disabled .mdc-floating-label{color:rgba(0,0,0,.37)}.mdc-select--disabled .mdc-select__dropdown-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' opacity='.37' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\") no-repeat 50%}.mdc-select--disabled .mdc-line-ripple{display:none}.mdc-select--disabled .mdc-select__icon{color:rgba(0,0,0,.37)}.mdc-select--disabled .mdc-select__selected-text{color:rgba(0,0,0,.37);border-bottom-style:dotted;pointer-events:none}.mdc-select--disabled.mdc-select--outlined .mdc-select__anchor{background-color:transparent}.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__leading,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__notch,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.16)}.mdc-select--disabled.mdc-select--outlined .mdc-select__selected-text{border-bottom-style:none}.mdc-select--no-label:not(.mdc-select--outlined) .mdc-select__anchor .mdc-select__selected-text{padding-top:14px}.mdc-select--with-leading-icon .mdc-select__icon{left:16px;right:auto}.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon{left:auto;right:16px}.mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:48px;padding-right:32px}.mdc-select--with-leading-icon .mdc-select__selected-text[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:32px;padding-right:48px}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{transform:translateY(-144%) translateX(-32px) scale(1)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{transform:translateY(-144%) translateX(32px) scale(1)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) translateX(-32px) scale(.75)}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) translateX(32px) scale(.75)}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon .25s 1}.mdc-select--with-leading-icon.mdc-select--outlined[dir=rtl] .mdc-floating-label--shake,[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl .25s 1}.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text,.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text{padding-left:32px;padding-right:32px}.mdc-select__menu .mdc-list .mdc-list-item--selected{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-select__menu .mdc-list .mdc-list-item--selected:after,.mdc-select__menu .mdc-list .mdc-list-item--selected:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-select__menu .mdc-list .mdc-list-item--selected:after,.mdc-select__menu .mdc-list .mdc-list-item--selected:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover:before{opacity:.04}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused:before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon{0%{transform:translateX(-32px) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(calc(4% - 32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(calc(-4% - 32px)) translateY(-130%) scale(.75)}to{transform:translateX(-32px) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl{0%{transform:translateX(32px) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(calc(4% + 32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(calc(-4% + 32px)) translateY(-130%) scale(.75)}to{transform:translateX(32px) translateY(-130%) scale(.75)}}.mdc-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list-item__secondary-text{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.mdc-list-item__graphic{background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))}.mdc-list-item__meta{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))}.mdc-list-group__subheader{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.mdc-list-item--disabled .mdc-list-item__text{opacity:.38;color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 16px;overflow:hidden}.mdc-list-item:focus{outline:none}.mdc-list-item--activated,.mdc-list-item--activated .mdc-list-item__graphic,.mdc-list-item--selected,.mdc-list-item--selected .mdc-list-item__graphic{color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-list-item__graphic{margin-left:0;margin-right:32px;width:24px;height:24px;flex-shrink:0;align-items:center;justify-content:center;fill:currentColor}.mdc-list-item[dir=rtl] .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list-item__graphic{margin-left:32px;margin-right:0}.mdc-list .mdc-list-item__graphic{display:inline-flex}.mdc-list-item__meta{margin-left:auto;margin-right:0}.mdc-list-item__meta:not(.material-icons){font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit}.mdc-list-item[dir=rtl] .mdc-list-item__meta,[dir=rtl] .mdc-list-item .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list--dense .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense .mdc-list-item__primary-text:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-list--dense .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{display:block;margin-top:0;line-height:normal;font-size:inherit}.mdc-list--dense .mdc-list-item__secondary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list--dense .mdc-list-item{height:40px}.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:36px;width:20px;height:20px}.mdc-list-item[dir=rtl] .mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--dense .mdc-list-item__graphic{margin-left:36px;margin-right:0}.mdc-list--avatar-list .mdc-list-item{height:56px}.mdc-list--avatar-list .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%}.mdc-list-item[dir=rtl] .mdc-list--avatar-list .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__graphic{margin-left:16px;margin-right:0}.mdc-list--two-line .mdc-list-item__text{align-self:flex-start}.mdc-list--two-line .mdc-list-item{height:72px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item,.mdc-list--two-line.mdc-list--dense .mdc-list-item{height:60px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:20px;width:36px;height:36px}.mdc-list-item[dir=rtl] .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:20px;margin-right:0}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item{cursor:pointer}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-divider{height:0;margin:0;border:none;border-bottom:1px solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list-divider--padded{margin:0 16px}.mdc-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}.mdc-list-group[dir=rtl] .mdc-list-divider--inset,[dir=rtl] .mdc-list-group .mdc-list-divider--inset{margin-left:0;margin-right:72px}.mdc-list-divider--inset.mdc-list-divider--padded{width:calc(100% - 88px)}.mdc-list-group .mdc-list{padding:0}.mdc-list-group__subheader{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;margin:.75rem 16px}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{background-color:#000}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:hover:before{opacity:.04}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused:before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:before{opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:before{background-color:var(--mdc-theme-primary,#ff3e00)}}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:hover:before{opacity:.16}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused:before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:before{opacity:.08}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:before{background-color:var(--mdc-theme-primary,#ff3e00)}}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:hover:before{opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused:before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.2}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:after,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:after,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:after,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{background-color:#000}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--background-focused:before,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-list--three-line .mdc-list-item__text{align-self:flex-start}.smui-list--three-line .mdc-list-item{height:88px}.smui-list--three-line.mdc-list--dense .mdc-list-item{height:76px}.mdc-menu{min-width:112px}.mdc-menu .mdc-list,.mdc-menu .mdc-list-item__graphic,.mdc-menu .mdc-list-item__meta{color:rgba(0,0,0,.87)}.mdc-menu .mdc-list-divider{margin:8px 0}.mdc-menu .mdc-list-item{user-select:none}.mdc-menu .mdc-list-item--disabled{cursor:auto}.mdc-menu a.mdc-list-item .mdc-list-item__graphic,.mdc-menu a.mdc-list-item .mdc-list-item__text{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-list-item{padding-left:56px;padding-right:16px}.mdc-menu__selection-group .mdc-list-item[dir=rtl],[dir=rtl] .mdc-menu__selection-group .mdc-list-item{padding-left:16px;padding-right:56px}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:16px;right:auto;display:none;position:absolute;top:50%;transform:translateY(-50%)}.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl],[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon{left:auto;right:16px}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:#000;color:var(--mdc-theme-on-surface,#000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 75ms linear}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.smui-menu-surface--static{position:static;z-index:0;display:inline-block;transform:scale(1);opacity:1}.mdc-select--activated{z-index:8}.smui-select--standard:after,.smui-select--standard:before{content:none}.smui-select--standard.mdc-select--disabled .mdc-select__anchor,.smui-select--standard .mdc-select__anchor:after,.smui-select--standard .mdc-select__anchor:before,.smui-select--standard:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.smui-select--standard .mdc-select__selected-text{padding-left:0;padding-right:36px}.smui-select--standard .mdc-select__selected-text[dir=rtl],[dir=rtl] .smui-select--standard .mdc-select__selected-text{padding-left:36px;padding-right:0}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:32px;padding-right:36px}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__selected-text[dir=rtl],[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:36px;padding-right:32px}.smui-select--standard .mdc-select__dropdown-icon{left:auto;right:0}.smui-select--standard .mdc-floating-label,.smui-select--standard .mdc-select__dropdown-icon[dir=rtl],[dir=rtl] .smui-select--standard .mdc-select__dropdown-icon{left:0;right:auto}.smui-select--standard .mdc-floating-label[dir=rtl],[dir=rtl] .smui-select--standard .mdc-floating-label{left:auto;right:0}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label{left:32px;right:auto}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label{left:auto;right:32px}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon{left:0;right:auto}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl],[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon{left:auto;right:0}.smui-select--standard+.mdc-select-helper-line{padding-left:0;padding-right:0}";
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
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
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
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake',
  ROOT: 'mdc-floating-label'
};

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

var MDCFloatingLabelFoundation =
/** @class */
function (_super) {
  __extends(MDCFloatingLabelFoundation, _super);

  function MDCFloatingLabelFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };

    return _this;
  }

  Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
    /**
     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        getWidth: function getWidth() {
          return 0;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCFloatingLabelFoundation.prototype.init = function () {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  MDCFloatingLabelFoundation.prototype.destroy = function () {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };
  /**
   * Returns the width of the label element.
   */


  MDCFloatingLabelFoundation.prototype.getWidth = function () {
    return this.adapter_.getWidth();
  };
  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
   */


  MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
   */


  MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
    var _a = MDCFloatingLabelFoundation.cssClasses,
        LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
        LABEL_SHAKE = _a.LABEL_SHAKE;

    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    this.adapter_.removeClass(LABEL_SHAKE);
  };

  return MDCFloatingLabelFoundation;
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

var MDCFloatingLabel =
/** @class */
function (_super) {
  __extends(MDCFloatingLabel, _super);

  function MDCFloatingLabel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFloatingLabel.attachTo = function (root) {
    return new MDCFloatingLabel(root);
  };
  /**
   * Styles the label to produce the label shake for errors.
   * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
   */


  MDCFloatingLabel.prototype.shake = function (shouldShake) {
    this.foundation_.shake(shouldShake);
  };
  /**
   * Styles the label to float/dock.
   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
   */


  MDCFloatingLabel.prototype.float = function (shouldFloat) {
    this.foundation_.float(shouldFloat);
  };

  MDCFloatingLabel.prototype.getWidth = function () {
    return this.foundation_.getWidth();
  };

  MDCFloatingLabel.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      getWidth: function getWidth() {
        return _this.root_.scrollWidth;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCFloatingLabelFoundation(adapter);
  };

  return MDCFloatingLabel;
}(MDCComponent);

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
var cssClasses$1 = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};

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

var MDCLineRippleFoundation =
/** @class */
function (_super) {
  __extends(MDCLineRippleFoundation, _super);

  function MDCLineRippleFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
    /**
     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setStyle: function setStyle() {
          return undefined;
        },
        registerEventHandler: function registerEventHandler() {
          return undefined;
        },
        deregisterEventHandler: function deregisterEventHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCLineRippleFoundation.prototype.init = function () {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.destroy = function () {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.activate = function () {
    this.adapter_.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
  };

  MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
    this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
  };

  MDCLineRippleFoundation.prototype.deactivate = function () {
    this.adapter_.addClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
  };

  MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter_.hasClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };

  return MDCLineRippleFoundation;
}(MDCFoundation);

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

var MDCLineRipple =
/** @class */
function (_super) {
  __extends(MDCLineRipple, _super);

  function MDCLineRipple() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLineRipple.attachTo = function (root) {
    return new MDCLineRipple(root);
  };
  /**
   * Activates the line ripple
   */


  MDCLineRipple.prototype.activate = function () {
    this.foundation_.activate();
  };
  /**
   * Deactivates the line ripple
   */


  MDCLineRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };
  /**
   * Sets the transform origin given a user's click location.
   * The `rippleCenter` is the x-coordinate of the middle of the ripple.
   */


  MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  };

  MDCLineRipple.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setStyle: function setStyle(propertyName, value) {
        return _this.root_.style.setProperty(propertyName, value);
      },
      registerEventHandler: function registerEventHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCLineRippleFoundation(adapter);
  };

  return MDCLineRipple;
}(MDCComponent);

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
var cssClasses$2 = {
  ANCHOR: 'mdc-menu-surface--anchor',
  ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
  ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
  FIXED: 'mdc-menu-surface--fixed',
  OPEN: 'mdc-menu-surface--open',
  ROOT: 'mdc-menu-surface'
}; // tslint:disable:object-literal-sort-keys

var strings = {
  CLOSED_EVENT: 'MDCMenuSurface:closed',
  OPENED_EVENT: 'MDCMenuSurface:opened',
  FOCUSABLE_ELEMENTS: ['button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)', 'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(', ')
}; // tslint:enable:object-literal-sort-keys

var numbers = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,

  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,

  /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
  MARGIN_TO_EDGE: 32,

  /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */

var CornerBit;

(function (CornerBit) {
  CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
  CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
  CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
  CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */


var Corner;

(function (Corner) {
  Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
  Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
  Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
  Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
  Corner[Corner["TOP_START"] = 8] = "TOP_START";
  Corner[Corner["TOP_END"] = 12] = "TOP_END";
  Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
  Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

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

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
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
var cssClasses$3 = {
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  ROOT: 'mdc-list'
};
var strings$1 = {
  ACTION_EVENT: 'MDCList:action',
  ARIA_CHECKED: 'aria-checked',
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: 'aria-current',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: 'aria-selected',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$3.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$3.LIST_ITEM_CLASS + " a\n  ",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$3.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$3.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$3.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$3.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
  RADIO_SELECTOR: 'input[type="radio"]'
};
var numbers$1 = {
  UNSET_INDEX: -1
};

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
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

function isNumberArray(selectedIndex) {
  return selectedIndex instanceof Array;
}

var MDCListFoundation =
/** @class */
function (_super) {
  __extends(MDCListFoundation, _super);

  function MDCListFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;

    _this.wrapFocus_ = false;
    _this.isVertical_ = true;
    _this.isSingleSelectionList_ = false;
    _this.selectedIndex_ = numbers$1.UNSET_INDEX;
    _this.focusedItemIndex_ = numbers$1.UNSET_INDEX;
    _this.useActivatedClass_ = false;
    _this.ariaCurrentAttrValue_ = null;
    _this.isCheckboxList_ = false;
    _this.isRadioList_ = false;
    return _this;
  }

  Object.defineProperty(MDCListFoundation, "strings", {
    get: function get() {
      return strings$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "numbers", {
    get: function get() {
      return numbers$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClassForElementIndex: function addClassForElementIndex() {
          return undefined;
        },
        focusItemAtIndex: function focusItemAtIndex() {
          return undefined;
        },
        getAttributeForElementIndex: function getAttributeForElementIndex() {
          return null;
        },
        getFocusedElementIndex: function getFocusedElementIndex() {
          return 0;
        },
        getListItemCount: function getListItemCount() {
          return 0;
        },
        hasCheckboxAtIndex: function hasCheckboxAtIndex() {
          return false;
        },
        hasRadioAtIndex: function hasRadioAtIndex() {
          return false;
        },
        isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {
          return false;
        },
        isFocusInsideList: function isFocusInsideList() {
          return false;
        },
        isRootFocused: function isRootFocused() {
          return false;
        },
        listItemAtIndexHasClass: function listItemAtIndexHasClass() {
          return false;
        },
        notifyAction: function notifyAction() {
          return undefined;
        },
        removeClassForElementIndex: function removeClassForElementIndex() {
          return undefined;
        },
        setAttributeForElementIndex: function setAttributeForElementIndex() {
          return undefined;
        },
        setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {
          return undefined;
        },
        setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCListFoundation.prototype.layout = function () {
    if (this.adapter_.getListItemCount() === 0) {
      return;
    }

    if (this.adapter_.hasCheckboxAtIndex(0)) {
      this.isCheckboxList_ = true;
    } else if (this.adapter_.hasRadioAtIndex(0)) {
      this.isRadioList_ = true;
    }
  };
  /**
   * Sets the private wrapFocus_ variable.
   */


  MDCListFoundation.prototype.setWrapFocus = function (value) {
    this.wrapFocus_ = value;
  };
  /**
   * Sets the isVertical_ private variable.
   */


  MDCListFoundation.prototype.setVerticalOrientation = function (value) {
    this.isVertical_ = value;
  };
  /**
   * Sets the isSingleSelectionList_ private variable.
   */


  MDCListFoundation.prototype.setSingleSelection = function (value) {
    this.isSingleSelectionList_ = value;
  };
  /**
   * Sets the useActivatedClass_ private variable.
   */


  MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
    this.useActivatedClass_ = useActivated;
  };

  MDCListFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex_;
  };

  MDCListFoundation.prototype.setSelectedIndex = function (index) {
    if (!this.isIndexValid_(index)) {
      return;
    }

    if (this.isCheckboxList_) {
      this.setCheckboxAtIndex_(index);
    } else if (this.isRadioList_) {
      this.setRadioAtIndex_(index);
    } else {
      this.setSingleSelectionAtIndex_(index);
    }
  };
  /**
   * Focus in handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
    }
  };
  /**
   * Focus out handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
    var _this = this;

    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
    }
    /**
     * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
     * is moved to next element.
     */


    setTimeout(function () {
      if (!_this.adapter_.isFocusInsideList()) {
        _this.setTabindexToFirstSelectedItem_();
      }
    }, 0);
  };
  /**
   * Key handler for the list.
   */


  MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
    var isArrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
    var isArrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
    var isArrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
    var isArrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
    var isHome = evt.key === 'Home' || evt.keyCode === 36;
    var isEnd = evt.key === 'End' || evt.keyCode === 35;
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
    var isSpace = evt.key === 'Space' || evt.keyCode === 32;

    if (this.adapter_.isRootFocused()) {
      if (isArrowUp || isEnd) {
        evt.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        evt.preventDefault();
        this.focusFirstElement();
      }

      return;
    }

    var currentIndex = this.adapter_.getFocusedElementIndex();

    if (currentIndex === -1) {
      currentIndex = listItemIndex;

      if (currentIndex < 0) {
        // If this event doesn't have a mdc-list-item ancestor from the
        // current list (not from a sublist), return early.
        return;
      }
    }

    var nextIndex;

    if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusNextElement(currentIndex);
    } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusPrevElement(currentIndex);
    } else if (isHome) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusFirstElement();
    } else if (isEnd) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusLastElement();
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
        var target = evt.target;

        if (target && target.tagName === 'A' && isEnter) {
          return;
        }

        this.preventDefaultEvent_(evt);

        if (this.isSelectableList_()) {
          this.setSelectedIndexOnAction_(currentIndex);
        }

        this.adapter_.notifyAction(currentIndex);
      }
    }

    this.focusedItemIndex_ = currentIndex;

    if (nextIndex !== undefined) {
      this.setTabindexAtIndex_(nextIndex);
      this.focusedItemIndex_ = nextIndex;
    }
  };
  /**
   * Click handler for the list.
   */


  MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
    if (index === numbers$1.UNSET_INDEX) {
      return;
    }

    if (this.isSelectableList_()) {
      this.setSelectedIndexOnAction_(index, toggleCheckbox);
    }

    this.adapter_.notifyAction(index);
    this.setTabindexAtIndex_(index);
    this.focusedItemIndex_ = index;
  };
  /**
   * Focuses the next element on the list.
   */


  MDCListFoundation.prototype.focusNextElement = function (index) {
    var count = this.adapter_.getListItemCount();
    var nextIndex = index + 1;

    if (nextIndex >= count) {
      if (this.wrapFocus_) {
        nextIndex = 0;
      } else {
        // Return early because last item is already focused.
        return index;
      }
    }

    this.adapter_.focusItemAtIndex(nextIndex);
    return nextIndex;
  };
  /**
   * Focuses the previous element on the list.
   */


  MDCListFoundation.prototype.focusPrevElement = function (index) {
    var prevIndex = index - 1;

    if (prevIndex < 0) {
      if (this.wrapFocus_) {
        prevIndex = this.adapter_.getListItemCount() - 1;
      } else {
        // Return early because first item is already focused.
        return index;
      }
    }

    this.adapter_.focusItemAtIndex(prevIndex);
    return prevIndex;
  };

  MDCListFoundation.prototype.focusFirstElement = function () {
    this.adapter_.focusItemAtIndex(0);
    return 0;
  };

  MDCListFoundation.prototype.focusLastElement = function () {
    var lastIndex = this.adapter_.getListItemCount() - 1;
    this.adapter_.focusItemAtIndex(lastIndex);
    return lastIndex;
  };
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
    if (!this.isIndexValid_(itemIndex)) {
      return;
    }

    if (isEnabled) {
      this.adapter_.removeClassForElementIndex(itemIndex, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.setAttributeForElementIndex(itemIndex, strings$1.ARIA_DISABLED, 'false');
    } else {
      this.adapter_.addClassForElementIndex(itemIndex, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.setAttributeForElementIndex(itemIndex, strings$1.ARIA_DISABLED, 'true');
    }
  };
  /**
   * Ensures that preventDefault is only called if the containing element doesn't
   * consume the event, and it will cause an unintended scroll.
   */


  MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
    var target = evt.target;
    var tagName = ("" + target.tagName).toLowerCase();

    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  };

  MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
    if (this.selectedIndex_ === index) {
      return;
    }

    var selectedClassName = cssClasses$3.LIST_ITEM_SELECTED_CLASS;

    if (this.useActivatedClass_) {
      selectedClassName = cssClasses$3.LIST_ITEM_ACTIVATED_CLASS;
    }

    if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
      this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
    }

    this.adapter_.addClassForElementIndex(index, selectedClassName);
    this.setAriaForSingleSelectionAtIndex_(index);
    this.selectedIndex_ = index;
  };
  /**
   * Sets aria attribute for single selection at given index.
   */


  MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
    // Detect the presence of aria-current and get the value only during list initialization when it is in unset state.
    if (this.selectedIndex_ === numbers$1.UNSET_INDEX) {
      this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(index, strings$1.ARIA_CURRENT);
    }

    var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
    var ariaAttribute = isAriaCurrent ? strings$1.ARIA_CURRENT : strings$1.ARIA_SELECTED;

    if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
    }

    var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
    this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
  };
  /**
   * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
   */


  MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
    this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);

    if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$1.ARIA_CHECKED, 'false');
    }

    this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, 'true');
    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
    for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
      var isChecked = false;

      if (index.indexOf(i) >= 0) {
        isChecked = true;
      }

      this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
      this.adapter_.setAttributeForElementIndex(i, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false');
    }

    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
    if (this.focusedItemIndex_ === numbers$1.UNSET_INDEX && index !== 0) {
      // If no list item was selected set first list item's tabindex to -1.
      // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
      this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
    } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
      this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
    }

    this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
  };
  /**
   * @return Return true if it is single selectin list, checkbox list or radio list.
   */


  MDCListFoundation.prototype.isSelectableList_ = function () {
    return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
  };

  MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
    var targetIndex = 0;

    if (this.isSelectableList_()) {
      if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
        targetIndex = this.selectedIndex_;
      } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
        targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
          return Math.min(currentIndex, minIndex);
        });
      }
    }

    this.setTabindexAtIndex_(targetIndex);
  };

  MDCListFoundation.prototype.isIndexValid_ = function (index) {
    var _this = this;

    if (index instanceof Array) {
      if (!this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
      }

      if (index.length === 0) {
        return true;
      } else {
        return index.some(function (i) {
          return _this.isIndexInRange_(i);
        });
      }
    } else if (typeof index === 'number') {
      if (this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
      }

      return this.isIndexInRange_(index);
    } else {
      return false;
    }
  };

  MDCListFoundation.prototype.isIndexInRange_ = function (index) {
    var listSize = this.adapter_.getListItemCount();
    return index >= 0 && index < listSize;
  };
  /**
   * Sets selected index on user action, toggles checkbox / radio based on toggleCheckbox value.
   * User interaction should not toggle list item(s) when disabled.
   */


  MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
    if (toggleCheckbox === void 0) {
      toggleCheckbox = true;
    }

    if (this.adapter_.listItemAtIndexHasClass(index, cssClasses$3.LIST_ITEM_DISABLED_CLASS)) {
      return;
    }

    if (this.isCheckboxList_) {
      this.toggleCheckboxAtIndex_(index, toggleCheckbox);
    } else {
      this.setSelectedIndex(index);
    }
  };

  MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
    var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);

    if (toggleCheckbox) {
      isChecked = !isChecked;
      this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
    }

    this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

    var selectedIndexes = this.selectedIndex_ === numbers$1.UNSET_INDEX ? [] : this.selectedIndex_.slice();

    if (isChecked) {
      selectedIndexes.push(index);
    } else {
      selectedIndexes = selectedIndexes.filter(function (i) {
        return i !== index;
      });
    }

    this.selectedIndex_ = selectedIndexes;
  };

  return MDCListFoundation;
}(MDCFoundation);

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

var MDCList =
/** @class */
function (_super) {
  __extends(MDCList, _super);

  function MDCList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCList.prototype, "vertical", {
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "listElements", {
    get: function get() {
      return [].slice.call(this.root_.querySelectorAll("." + cssClasses$3.LIST_ITEM_CLASS));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "wrapFocus", {
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "singleSelection", {
    set: function set(isSingleSelectionList) {
      this.foundation_.setSingleSelection(isSingleSelectionList);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "selectedIndex", {
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    },
    enumerable: true,
    configurable: true
  });

  MDCList.attachTo = function (root) {
    return new MDCList(root);
  };

  MDCList.prototype.initialSyncWithDOM = function () {
    this.handleClick_ = this.handleClickEvent_.bind(this);
    this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
    this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
    this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
    this.listen('keydown', this.handleKeydown_);
    this.listen('click', this.handleClick_);
    this.listen('focusin', this.focusInEventListener_);
    this.listen('focusout', this.focusOutEventListener_);
    this.layout();
    this.initializeListType();
  };

  MDCList.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('click', this.handleClick_);
    this.unlisten('focusin', this.focusInEventListener_);
    this.unlisten('focusout', this.focusOutEventListener_);
  };

  MDCList.prototype.layout = function () {
    var direction = this.root_.getAttribute(strings$1.ARIA_ORIENTATION);
    this.vertical = direction !== strings$1.ARIA_ORIENTATION_HORIZONTAL; // List items need to have at least tabindex=-1 to be focusable.

    [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (el) {
      el.setAttribute('tabindex', '-1');
    }); // Child button/a elements are not tabbable until the list item is focused.

    [].slice.call(this.root_.querySelectorAll(strings$1.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (el) {
      return el.setAttribute('tabindex', '-1');
    });
    this.foundation_.layout();
  };
  /**
   * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
   */


  MDCList.prototype.initializeListType = function () {
    var _this = this;

    var checkboxListItems = this.root_.querySelectorAll(strings$1.ARIA_ROLE_CHECKBOX_SELECTOR);
    var singleSelectedListItem = this.root_.querySelector("\n      ." + cssClasses$3.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + cssClasses$3.LIST_ITEM_SELECTED_CLASS + "\n    ");
    var radioSelectedListItem = this.root_.querySelector(strings$1.ARIA_CHECKED_RADIO_SELECTOR);

    if (checkboxListItems.length) {
      var preselectedItems = this.root_.querySelectorAll(strings$1.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
        return _this.listElements.indexOf(listItem);
      });
    } else if (singleSelectedListItem) {
      if (singleSelectedListItem.classList.contains(cssClasses$3.LIST_ITEM_ACTIVATED_CLASS)) {
        this.foundation_.setUseActivatedClass(true);
      }

      this.singleSelection = true;
      this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  };
  /**
   * Updates the list item at itemIndex to the desired isEnabled state.
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
    this.foundation_.setEnabled(itemIndex, isEnabled);
  };

  MDCList.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClassForElementIndex: function addClassForElementIndex(index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        var element = _this.listElements[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
        return _this.listElements[index].getAttribute(attr);
      },
      getFocusedElementIndex: function getFocusedElementIndex() {
        return _this.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function getListItemCount() {
        return _this.listElements.length;
      },
      hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function hasRadioAtIndex(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(strings$1.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function isFocusInsideList() {
        return _this.root_.contains(document.activeElement);
      },
      isRootFocused: function isRootFocused() {
        return document.activeElement === _this.root_;
      },
      listItemAtIndexHasClass: function listItemAtIndexHasClass(index, className) {
        return _this.listElements[index].classList.contains(className);
      },
      notifyAction: function notifyAction(index) {
        _this.emit(strings$1.ACTION_EVENT, {
          index: index
        },
        /** shouldBubble */
        true);
      },
      removeClassForElementIndex: function removeClassForElementIndex(index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.remove(className);
        }
      },
      setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
        var element = _this.listElements[index];

        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(strings$1.CHECKBOX_RADIO_SELECTOR);
        toggleEl.checked = isChecked;
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
        var element = _this.listElements[listItemIndex];
        var listItemChildren = [].slice.call(element.querySelectorAll(strings$1.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach(function (el) {
          return el.setAttribute('tabindex', tabIndexValue);
        });
      }
    };
    return new MDCListFoundation(adapter);
  };
  /**
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   */


  MDCList.prototype.getListItemIndex_ = function (evt) {
    var eventTarget = evt.target;
    var nearestParent = closest(eventTarget, "." + cssClasses$3.LIST_ITEM_CLASS + ", ." + cssClasses$3.ROOT); // Get the index of the element if it is a list item.

    if (nearestParent && matches(nearestParent, "." + cssClasses$3.LIST_ITEM_CLASS)) {
      return this.listElements.indexOf(nearestParent);
    }

    return -1;
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusInEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusIn(evt, index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusOutEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusOut(evt, index);
  };
  /**
   * Used to figure out which element was focused when keydown event occurred before sending the event to the
   * foundation.
   */


  MDCList.prototype.handleKeydownEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target;
    this.foundation_.handleKeydown(evt, target.classList.contains(cssClasses$3.LIST_ITEM_CLASS), index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleClickEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

    var toggleCheckbox = !matches(target, strings$1.CHECKBOX_RADIO_SELECTOR);
    this.foundation_.handleClick(index, toggleCheckbox);
  };

  return MDCList;
}(MDCComponent);

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

var MDCMenuSurfaceFoundation =
/** @class */
function (_super) {
  __extends(MDCMenuSurfaceFoundation, _super);

  function MDCMenuSurfaceFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.isQuickOpen_ = false;
    _this.isHoistedElement_ = false;
    _this.isFixedPosition_ = false;
    _this.openAnimationEndTimerId_ = 0;
    _this.closeAnimationEndTimerId_ = 0;
    _this.animationRequestId_ = 0;
    _this.anchorCorner_ = Corner.TOP_START;
    _this.anchorMargin_ = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    _this.position_ = {
      x: 0,
      y: 0
    };
    return _this;
  }

  Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
    get: function get() {
      return Corner;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
    /**
     * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        hasAnchor: function hasAnchor() {
          return false;
        },
        isElementInContainer: function isElementInContainer() {
          return false;
        },
        isFocused: function isFocused() {
          return false;
        },
        isRtl: function isRtl() {
          return false;
        },
        getInnerDimensions: function getInnerDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return null;
        },
        getWindowDimensions: function getWindowDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getBodyDimensions: function getBodyDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getWindowScroll: function getWindowScroll() {
          return {
            x: 0,
            y: 0
          };
        },
        setPosition: function setPosition() {
          return undefined;
        },
        setMaxHeight: function setMaxHeight() {
          return undefined;
        },
        setTransformOrigin: function setTransformOrigin() {
          return undefined;
        },
        saveFocus: function saveFocus() {
          return undefined;
        },
        restoreFocus: function restoreFocus() {
          return undefined;
        },
        notifyClose: function notifyClose() {
          return undefined;
        },
        notifyOpen: function notifyOpen() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCMenuSurfaceFoundation.prototype.init = function () {
    var _a = MDCMenuSurfaceFoundation.cssClasses,
        ROOT = _a.ROOT,
        OPEN = _a.OPEN;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(ROOT + " class required in root element.");
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    }
  };

  MDCMenuSurfaceFoundation.prototype.destroy = function () {
    clearTimeout(this.openAnimationEndTimerId_);
    clearTimeout(this.closeAnimationEndTimerId_); // Cancel any currently running animations.

    cancelAnimationFrame(this.animationRequestId_);
  };
  /**
   * @param corner Default anchor corner alignment of top-left menu surface corner.
   */


  MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
    this.anchorCorner_ = corner;
  };
  /**
   * @param margin Set of margin values from anchor.
   */


  MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
    this.anchorMargin_.top = margin.top || 0;
    this.anchorMargin_.right = margin.right || 0;
    this.anchorMargin_.bottom = margin.bottom || 0;
    this.anchorMargin_.left = margin.left || 0;
  };
  /** Used to indicate if the menu-surface is hoisted to the body. */


  MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
    this.isHoistedElement_ = isHoisted;
  };
  /** Used to set the menu-surface calculations based on a fixed position menu. */


  MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
    this.isFixedPosition_ = isFixedPosition;
  };
  /** Sets the menu-surface position on the page. */


  MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
    this.position_.x = this.isFinite_(x) ? x : 0;
    this.position_.y = this.isFinite_(y) ? y : 0;
  };

  MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
    this.isQuickOpen_ = quickOpen;
  };

  MDCMenuSurfaceFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };
  /**
   * Open the menu surface.
   */


  MDCMenuSurfaceFoundation.prototype.open = function () {
    var _this = this;

    this.adapter_.saveFocus();

    if (!this.isQuickOpen_) {
      this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
    }

    this.animationRequestId_ = requestAnimationFrame(function () {
      _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

      _this.dimensions_ = _this.adapter_.getInnerDimensions();

      _this.autoPosition_();

      if (_this.isQuickOpen_) {
        _this.adapter_.notifyOpen();
      } else {
        _this.openAnimationEndTimerId_ = setTimeout(function () {
          _this.openAnimationEndTimerId_ = 0;

          _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);

          _this.adapter_.notifyOpen();
        }, numbers.TRANSITION_OPEN_DURATION);
      }
    });
    this.isOpen_ = true;
  };
  /**
   * Closes the menu surface.
   */


  MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
    var _this = this;

    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }

    if (!this.isQuickOpen_) {
      this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
    }

    requestAnimationFrame(function () {
      _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

      if (_this.isQuickOpen_) {
        _this.adapter_.notifyClose();
      } else {
        _this.closeAnimationEndTimerId_ = setTimeout(function () {
          _this.closeAnimationEndTimerId_ = 0;

          _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);

          _this.adapter_.notifyClose();
        }, numbers.TRANSITION_CLOSE_DURATION);
      }
    });
    this.isOpen_ = false;

    if (!skipRestoreFocus) {
      this.maybeRestoreFocus_();
    }
  };
  /** Handle clicks and close if not within menu-surface element. */


  MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
    var el = evt.target;

    if (this.adapter_.isElementInContainer(el)) {
      return;
    }

    this.close();
  };
  /** Handle keys that close the surface. */


  MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
    var keyCode = evt.keyCode,
        key = evt.key;
    var isEscape = key === 'Escape' || keyCode === 27;

    if (isEscape) {
      this.close();
    }
  };

  MDCMenuSurfaceFoundation.prototype.autoPosition_ = function () {
    var _a; // Compute measurements for autoposition methods reuse.


    this.measurements_ = this.getAutoLayoutMeasurements_();
    var corner = this.getOriginCorner_();
    var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
    var verticalAlignment = this.hasBit_(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
    var horizontalAlignment = this.hasBit_(corner, CornerBit.RIGHT) ? 'right' : 'left';
    var horizontalOffset = this.getHorizontalOriginOffset_(corner);
    var verticalOffset = this.getVerticalOriginOffset_(corner);
    var _b = this.measurements_,
        anchorSize = _b.anchorSize,
        surfaceSize = _b.surfaceSize;
    var position = (_a = {}, _a[horizontalAlignment] = horizontalOffset, _a[verticalAlignment] = verticalOffset, _a); // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.

    if (anchorSize.width / surfaceSize.width > numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
      horizontalAlignment = 'center';
    } // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element


    if (this.isHoistedElement_ || this.isFixedPosition_) {
      this.adjustPositionForHoistedElement_(position);
    }

    this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
    this.adapter_.setPosition(position);
    this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
  };
  /**
   * @return Measurements used to position menu surface popup.
   */


  MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function () {
    var anchorRect = this.adapter_.getAnchorDimensions();
    var bodySize = this.adapter_.getBodyDimensions();
    var viewportSize = this.adapter_.getWindowDimensions();
    var windowScroll = this.adapter_.getWindowScroll();

    if (!anchorRect) {
      // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
      anchorRect = {
        top: this.position_.y,
        right: this.position_.x,
        bottom: this.position_.y,
        left: this.position_.x,
        width: 0,
        height: 0
      }; // tslint:enable:object-literal-sort-keys
    }

    return {
      anchorSize: anchorRect,
      bodySize: bodySize,
      surfaceSize: this.dimensions_,
      viewportDistance: {
        // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
        top: anchorRect.top,
        right: viewportSize.width - anchorRect.right,
        bottom: viewportSize.height - anchorRect.bottom,
        left: anchorRect.left
      },
      viewportSize: viewportSize,
      windowScroll: windowScroll
    };
  };
  /**
   * Computes the corner of the anchor from which to animate and position the menu surface.
   */


  MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function () {
    // Defaults: open from the top left.
    var corner = Corner.TOP_LEFT;
    var _a = this.measurements_,
        viewportDistance = _a.viewportDistance,
        anchorSize = _a.anchorSize,
        surfaceSize = _a.surfaceSize;
    var isBottomAligned = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
    var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
    var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
    var topOverflow = surfaceSize.height - availableTop;
    var bottomOverflow = surfaceSize.height - availableBottom;

    if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
      corner = this.setBit_(corner, CornerBit.BOTTOM);
    }

    var isRtl = this.adapter_.isRtl();
    var isFlipRtl = this.hasBit_(this.anchorCorner_, CornerBit.FLIP_RTL);
    var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);
    var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
    var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
    var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
    var leftOverflow = surfaceSize.width - availableLeft;
    var rightOverflow = surfaceSize.width - availableRight;

    if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
      corner = this.setBit_(corner, CornerBit.RIGHT);
    }

    return corner;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
   */


  MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function (corner) {
    var viewportDistance = this.measurements_.viewportDistance;
    var maxHeight = 0;
    var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
    var isBottomAnchored = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE; // When maximum height is not specified, it is handled from CSS.

    if (isBottomAligned) {
      maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;

      if (!isBottomAnchored) {
        maxHeight += this.measurements_.anchorSize.height;
      }
    } else {
      maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;

      if (isBottomAnchored) {
        maxHeight -= this.measurements_.anchorSize.height;
      }
    }

    return maxHeight;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
   */


  MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function (corner) {
    var anchorSize = this.measurements_.anchorSize; // isRightAligned corresponds to using the 'right' property on the surface.

    var isRightAligned = this.hasBit_(corner, CornerBit.RIGHT);
    var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);

    if (isRightAligned) {
      var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right; // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
      // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
      // the right property is correct.

      if (this.isHoistedElement_ || this.isFixedPosition_) {
        return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
      }

      return rightOffset;
    }

    return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
   */


  MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function (corner) {
    var anchorSize = this.measurements_.anchorSize;
    var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
    var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
    var y = 0;

    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
    } else {
      y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin_.bottom : this.anchorMargin_.top;
    }

    return y;
  };
  /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */


  MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function (position) {
    var e_1, _a;

    var _b = this.measurements_,
        windowScroll = _b.windowScroll,
        viewportDistance = _b.viewportDistance;
    var props = Object.keys(position);

    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        var value = position[prop] || 0; // Hoisted surfaces need to have the anchor elements location on the page added to the
        // position properties for proper alignment on the body.

        value += viewportDistance[prop]; // Surfaces that are absolutely positioned need to have additional calculations for scroll
        // and bottom positioning.

        if (!this.isFixedPosition_) {
          if (prop === 'top') {
            value += windowScroll.y;
          } else if (prop === 'bottom') {
            value -= windowScroll.y;
          } else if (prop === 'left') {
            value += windowScroll.x;
          } else {
            // prop === 'right'
            value -= windowScroll.x;
          }
        }

        position[prop] = value;
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };
  /**
   * The last focused element when the menu surface was opened should regain focus, if the user is
   * focused on or within the menu surface when it is closed.
   */


  MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function () {
    var isRootFocused = this.adapter_.isFocused();
    var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);

    if (isRootFocused || childHasFocus) {
      this.adapter_.restoreFocus();
    }
  };

  MDCMenuSurfaceFoundation.prototype.hasBit_ = function (corner, bit) {
    return Boolean(corner & bit); // tslint:disable-line:no-bitwise
  };

  MDCMenuSurfaceFoundation.prototype.setBit_ = function (corner, bit) {
    return corner | bit; // tslint:disable-line:no-bitwise
  };
  /**
   * isFinite that doesn't force conversion to number type.
   * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
   */


  MDCMenuSurfaceFoundation.prototype.isFinite_ = function (num) {
    return typeof num === 'number' && isFinite(num);
  };

  return MDCMenuSurfaceFoundation;
}(MDCFoundation);

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
var cachedCssTransformPropertyName_;
/**
 * Returns the name of the correct transform property to use on the current browser.
 */

function getTransformPropertyName(globalObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
  }

  return cachedCssTransformPropertyName_;
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

var MDCMenuSurface =
/** @class */
function (_super) {
  __extends(MDCMenuSurface, _super);

  function MDCMenuSurface() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCMenuSurface.attachTo = function (root) {
    return new MDCMenuSurface(root);
  };

  MDCMenuSurface.prototype.initialSyncWithDOM = function () {
    var _this = this;

    var parentEl = this.root_.parentElement;
    this.anchorElement = parentEl && parentEl.classList.contains(cssClasses$2.ANCHOR) ? parentEl : null;

    if (this.root_.classList.contains(cssClasses$2.FIXED)) {
      this.setFixedPosition(true);
    }

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleBodyClick_ = function (evt) {
      return _this.foundation_.handleBodyClick(evt);
    };

    this.registerBodyClickListener_ = function () {
      return document.body.addEventListener('click', _this.handleBodyClick_);
    };

    this.deregisterBodyClickListener_ = function () {
      return document.body.removeEventListener('click', _this.handleBodyClick_);
    };

    this.listen('keydown', this.handleKeydown_);
    this.listen(strings.OPENED_EVENT, this.registerBodyClickListener_);
    this.listen(strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
  };

  MDCMenuSurface.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(strings.OPENED_EVENT, this.registerBodyClickListener_);
    this.unlisten(strings.CLOSED_EVENT, this.deregisterBodyClickListener_);

    _super.prototype.destroy.call(this);
  };

  MDCMenuSurface.prototype.isOpen = function () {
    return this.foundation_.isOpen();
  };

  MDCMenuSurface.prototype.open = function () {
    this.foundation_.open();
  };

  MDCMenuSurface.prototype.close = function (skipRestoreFocus) {
    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }

    this.foundation_.close(skipRestoreFocus);
  };

  Object.defineProperty(MDCMenuSurface.prototype, "quickOpen", {
    set: function set(quickOpen) {
      this.foundation_.setQuickOpen(quickOpen);
    },
    enumerable: true,
    configurable: true
  });
  /** Sets the foundation to use page offsets for an positioning when the menu is hoisted to the body. */

  MDCMenuSurface.prototype.setIsHoisted = function (isHoisted) {
    this.foundation_.setIsHoisted(isHoisted);
  };
  /** Sets the element that the menu-surface is anchored to. */


  MDCMenuSurface.prototype.setMenuSurfaceAnchorElement = function (element) {
    this.anchorElement = element;
  };
  /** Sets the menu-surface to position: fixed. */


  MDCMenuSurface.prototype.setFixedPosition = function (isFixed) {
    if (isFixed) {
      this.root_.classList.add(cssClasses$2.FIXED);
    } else {
      this.root_.classList.remove(cssClasses$2.FIXED);
    }

    this.foundation_.setFixedPosition(isFixed);
  };
  /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */


  MDCMenuSurface.prototype.setAbsolutePosition = function (x, y) {
    this.foundation_.setAbsolutePosition(x, y);
    this.setIsHoisted(true);
  };
  /**
   * @param corner Default anchor corner alignment of top-left surface corner.
   */


  MDCMenuSurface.prototype.setAnchorCorner = function (corner) {
    this.foundation_.setAnchorCorner(corner);
  };

  MDCMenuSurface.prototype.setAnchorMargin = function (margin) {
    this.foundation_.setAnchorMargin(margin);
  };

  MDCMenuSurface.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      hasAnchor: function hasAnchor() {
        return !!_this.anchorElement;
      },
      notifyClose: function notifyClose() {
        return _this.emit(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
      },
      notifyOpen: function notifyOpen() {
        return _this.emit(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
      },
      isElementInContainer: function isElementInContainer(el) {
        return _this.root_.contains(el);
      },
      isRtl: function isRtl() {
        return getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      setTransformOrigin: function setTransformOrigin(origin) {
        var propertyName = getTransformPropertyName(window) + "-origin";

        _this.root_.style.setProperty(propertyName, origin);
      },
      isFocused: function isFocused() {
        return document.activeElement === _this.root_;
      },
      saveFocus: function saveFocus() {
        _this.previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        if (_this.root_.contains(document.activeElement)) {
          if (_this.previousFocus_ && _this.previousFocus_.focus) {
            _this.previousFocus_.focus();
          }
        }
      },
      getInnerDimensions: function getInnerDimensions() {
        return {
          width: _this.root_.offsetWidth,
          height: _this.root_.offsetHeight
        };
      },
      getAnchorDimensions: function getAnchorDimensions() {
        return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null;
      },
      getWindowDimensions: function getWindowDimensions() {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      getBodyDimensions: function getBodyDimensions() {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
      },
      getWindowScroll: function getWindowScroll() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      setPosition: function setPosition(position) {
        _this.root_.style.left = 'left' in position ? position.left + "px" : '';
        _this.root_.style.right = 'right' in position ? position.right + "px" : '';
        _this.root_.style.top = 'top' in position ? position.top + "px" : '';
        _this.root_.style.bottom = 'bottom' in position ? position.bottom + "px" : '';
      },
      setMaxHeight: function setMaxHeight(height) {
        _this.root_.style.maxHeight = height;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCMenuSurfaceFoundation(adapter);
  };

  return MDCMenuSurface;
}(MDCComponent);

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
var cssClasses$4 = {
  MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
  MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
  ROOT: 'mdc-menu'
};
var strings$2 = {
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_DISABLED_ATTR: 'aria-disabled',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: '.mdc-list',
  SELECTED_EVENT: 'MDCMenu:selected'
};
var numbers$2 = {
  FOCUS_ROOT_INDEX: -1
};
var DefaultFocusState;

(function (DefaultFocusState) {
  DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
  DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
  DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
  DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));

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

var MDCMenuFoundation =
/** @class */
function (_super) {
  __extends(MDCMenuFoundation, _super);

  function MDCMenuFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;

    _this.closeAnimationEndTimerId_ = 0;
    _this.defaultFocusState_ = DefaultFocusState.LIST_ROOT;
    return _this;
  }

  Object.defineProperty(MDCMenuFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "strings", {
    get: function get() {
      return strings$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "numbers", {
    get: function get() {
      return numbers$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
    /**
     * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClassToElementAtIndex: function addClassToElementAtIndex() {
          return undefined;
        },
        removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {
          return undefined;
        },
        addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {
          return undefined;
        },
        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {
          return undefined;
        },
        elementContainsClass: function elementContainsClass() {
          return false;
        },
        closeSurface: function closeSurface() {
          return undefined;
        },
        getElementIndex: function getElementIndex() {
          return -1;
        },
        notifySelected: function notifySelected() {
          return undefined;
        },
        getMenuItemCount: function getMenuItemCount() {
          return 0;
        },
        focusItemAtIndex: function focusItemAtIndex() {
          return undefined;
        },
        focusListRoot: function focusListRoot() {
          return undefined;
        },
        getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex() {
          return -1;
        },
        isSelectableItemAtIndex: function isSelectableItemAtIndex() {
          return false;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCMenuFoundation.prototype.destroy = function () {
    if (this.closeAnimationEndTimerId_) {
      clearTimeout(this.closeAnimationEndTimerId_);
    }

    this.adapter_.closeSurface();
  };

  MDCMenuFoundation.prototype.handleKeydown = function (evt) {
    var key = evt.key,
        keyCode = evt.keyCode;
    var isTab = key === 'Tab' || keyCode === 9;

    if (isTab) {
      this.adapter_.closeSurface(
      /** skipRestoreFocus */
      true);
    }
  };

  MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
    var _this = this;

    var index = this.adapter_.getElementIndex(listItem);

    if (index < 0) {
      return;
    }

    this.adapter_.notifySelected({
      index: index
    });
    this.adapter_.closeSurface(); // Wait for the menu to close before adding/removing classes that affect styles.

    this.closeAnimationEndTimerId_ = setTimeout(function () {
      // Recompute the index in case the menu contents have changed.
      var recomputedIndex = _this.adapter_.getElementIndex(listItem);

      if (_this.adapter_.isSelectableItemAtIndex(recomputedIndex)) {
        _this.setSelectedIndex(recomputedIndex);
      }
    }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
  };

  MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
    switch (this.defaultFocusState_) {
      case DefaultFocusState.FIRST_ITEM:
        this.adapter_.focusItemAtIndex(0);
        break;

      case DefaultFocusState.LAST_ITEM:
        this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
        break;

      case DefaultFocusState.NONE:
        // Do nothing.
        break;

      default:
        this.adapter_.focusListRoot();
        break;
    }
  };
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   */


  MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
    this.defaultFocusState_ = focusState;
  };
  /**
   * Selects the list item at `index` within the menu.
   * @param index Index of list item within the menu.
   */


  MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
    this.validatedIndex_(index);

    if (!this.adapter_.isSelectableItemAtIndex(index)) {
      throw new Error('MDCMenuFoundation: No selection group at specified index.');
    }

    var prevSelectedIndex = this.adapter_.getSelectedSiblingOfItemAtIndex(index);

    if (prevSelectedIndex >= 0) {
      this.adapter_.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$2.ARIA_CHECKED_ATTR);
      this.adapter_.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$4.MENU_SELECTED_LIST_ITEM);
    }

    this.adapter_.addClassToElementAtIndex(index, cssClasses$4.MENU_SELECTED_LIST_ITEM);
    this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_CHECKED_ATTR, 'true');
  };
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */


  MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
    this.validatedIndex_(index);

    if (isEnabled) {
      this.adapter_.removeClassFromElementAtIndex(index, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_DISABLED_ATTR, 'false');
    } else {
      this.adapter_.addClassToElementAtIndex(index, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_DISABLED_ATTR, 'true');
    }
  };

  MDCMenuFoundation.prototype.validatedIndex_ = function (index) {
    var menuSize = this.adapter_.getMenuItemCount();
    var isIndexInRange = index >= 0 && index < menuSize;

    if (!isIndexInRange) {
      throw new Error('MDCMenuFoundation: No list item at specified index.');
    }
  };

  return MDCMenuFoundation;
}(MDCFoundation);

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

var MDCMenu =
/** @class */
function (_super) {
  __extends(MDCMenu, _super);

  function MDCMenu() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCMenu.attachTo = function (root) {
    return new MDCMenu(root);
  };

  MDCMenu.prototype.initialize = function (menuSurfaceFactory, listFactory) {
    if (menuSurfaceFactory === void 0) {
      menuSurfaceFactory = function menuSurfaceFactory(el) {
        return new MDCMenuSurface(el);
      };
    }

    if (listFactory === void 0) {
      listFactory = function listFactory(el) {
        return new MDCList(el);
      };
    }

    this.menuSurfaceFactory_ = menuSurfaceFactory;
    this.listFactory_ = listFactory;
  };

  MDCMenu.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.menuSurface_ = this.menuSurfaceFactory_(this.root_);
    var list = this.root_.querySelector(strings$2.LIST_SELECTOR);

    if (list) {
      this.list_ = this.listFactory_(list);
      this.list_.wrapFocus = true;
    } else {
      this.list_ = null;
    }

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleItemAction_ = function (evt) {
      return _this.foundation_.handleItemAction(_this.items[evt.detail.index]);
    };

    this.handleMenuSurfaceOpened_ = function () {
      return _this.foundation_.handleMenuSurfaceOpened();
    };

    this.menuSurface_.listen(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
    this.listen('keydown', this.handleKeydown_);
    this.listen(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
  };

  MDCMenu.prototype.destroy = function () {
    if (this.list_) {
      this.list_.destroy();
    }

    this.menuSurface_.destroy();
    this.menuSurface_.unlisten(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);

    _super.prototype.destroy.call(this);
  };

  Object.defineProperty(MDCMenu.prototype, "open", {
    get: function get() {
      return this.menuSurface_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.menuSurface_.open();
      } else {
        this.menuSurface_.close();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "wrapFocus", {
    get: function get() {
      return this.list_ ? this.list_.wrapFocus : false;
    },
    set: function set(value) {
      if (this.list_) {
        this.list_.wrapFocus = value;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "items", {
    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     */
    get: function get() {
      return this.list_ ? this.list_.listElements : [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "quickOpen", {
    set: function set(quickOpen) {
      this.menuSurface_.quickOpen = quickOpen;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   * @param focusState Default focus state.
   */

  MDCMenu.prototype.setDefaultFocusState = function (focusState) {
    this.foundation_.setDefaultFocusState(focusState);
  };
  /**
   * @param corner Default anchor corner alignment of top-left menu corner.
   */


  MDCMenu.prototype.setAnchorCorner = function (corner) {
    this.menuSurface_.setAnchorCorner(corner);
  };

  MDCMenu.prototype.setAnchorMargin = function (margin) {
    this.menuSurface_.setAnchorMargin(margin);
  };
  /**
   * Sets the list item as the selected row at the specified index.
   * @param index Index of list item within menu.
   */


  MDCMenu.prototype.setSelectedIndex = function (index) {
    this.foundation_.setSelectedIndex(index);
  };
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */


  MDCMenu.prototype.setEnabled = function (index, isEnabled) {
    this.foundation_.setEnabled(index, isEnabled);
  };
  /**
   * @return The item within the menu at the index specified.
   */


  MDCMenu.prototype.getOptionByIndex = function (index) {
    var items = this.items;

    if (index < items.length) {
      return this.items[index];
    } else {
      return null;
    }
  };

  MDCMenu.prototype.setFixedPosition = function (isFixed) {
    this.menuSurface_.setFixedPosition(isFixed);
  };

  MDCMenu.prototype.setIsHoisted = function (isHoisted) {
    this.menuSurface_.setIsHoisted(isHoisted);
  };

  MDCMenu.prototype.setAbsolutePosition = function (x, y) {
    this.menuSurface_.setAbsolutePosition(x, y);
  };
  /**
   * Sets the element that the menu-surface is anchored to.
   */


  MDCMenu.prototype.setAnchorElement = function (element) {
    this.menuSurface_.anchorElement = element;
  };

  MDCMenu.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
        var list = _this.items;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
        var list = _this.items;
        list[index].removeAttribute(attr);
      },
      elementContainsClass: function elementContainsClass(element, className) {
        return element.classList.contains(className);
      },
      closeSurface: function closeSurface(skipRestoreFocus) {
        return _this.menuSurface_.close(skipRestoreFocus);
      },
      getElementIndex: function getElementIndex(element) {
        return _this.items.indexOf(element);
      },
      notifySelected: function notifySelected(evtData) {
        return _this.emit(strings$2.SELECTED_EVENT, {
          index: evtData.index,
          item: _this.items[evtData.index]
        });
      },
      getMenuItemCount: function getMenuItemCount() {
        return _this.items.length;
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        return _this.items[index].focus();
      },
      focusListRoot: function focusListRoot() {
        return _this.root_.querySelector(strings$2.LIST_SELECTOR).focus();
      },
      isSelectableItemAtIndex: function isSelectableItemAtIndex(index) {
        return !!closest(_this.items[index], "." + cssClasses$4.MENU_SELECTION_GROUP);
      },
      getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex(index) {
        var selectionGroupEl = closest(_this.items[index], "." + cssClasses$4.MENU_SELECTION_GROUP);
        var selectedItemEl = selectionGroupEl.querySelector("." + cssClasses$4.MENU_SELECTED_LIST_ITEM);
        return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCMenuFoundation(adapter);
  };

  return MDCMenu;
}(MDCComponent);

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
var strings$3 = {
  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
var numbers$3 = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
var cssClasses$5 = {
  NO_LABEL: 'mdc-notched-outline--no-label',
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
  OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
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

var MDCNotchedOutlineFoundation =
/** @class */
function (_super) {
  __extends(MDCNotchedOutlineFoundation, _super);

  function MDCNotchedOutlineFoundation(adapter) {
    return _super.call(this, _assign({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
    get: function get() {
      return strings$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
    get: function get() {
      return numbers$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
    /**
     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        setNotchWidthProperty: function setNotchWidthProperty() {
          return undefined;
        },
        removeNotchWidthProperty: function removeNotchWidthProperty() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
   */

  MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    if (notchWidth > 0) {
      notchWidth += numbers$3.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
    }

    this.adapter_.setNotchWidthProperty(notchWidth);
    this.adapter_.addClass(OUTLINE_NOTCHED);
  };
  /**
   * Removes notched outline selector to close the notch in the outline.
   */


  MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
    this.adapter_.removeClass(OUTLINE_NOTCHED);
    this.adapter_.removeNotchWidthProperty();
  };

  return MDCNotchedOutlineFoundation;
}(MDCFoundation);

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

var MDCNotchedOutline =
/** @class */
function (_super) {
  __extends(MDCNotchedOutline, _super);

  function MDCNotchedOutline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCNotchedOutline.attachTo = function (root) {
    return new MDCNotchedOutline(root);
  };

  MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
    this.notchElement_ = this.root_.querySelector(strings$3.NOTCH_ELEMENT_SELECTOR);
    var label = this.root_.querySelector('.' + MDCFloatingLabelFoundation.cssClasses.ROOT);

    if (label) {
      label.style.transitionDuration = '0s';
      this.root_.classList.add(cssClasses$5.OUTLINE_UPGRADED);
      requestAnimationFrame(function () {
        label.style.transitionDuration = '';
      });
    } else {
      this.root_.classList.add(cssClasses$5.NO_LABEL);
    }
  };
  /**
   * Updates classes and styles to open the notch to the specified width.
   * @param notchWidth The notch width in the outline.
   */


  MDCNotchedOutline.prototype.notch = function (notchWidth) {
    this.foundation_.notch(notchWidth);
  };
  /**
   * Updates classes and styles to close the notch.
   */


  MDCNotchedOutline.prototype.closeNotch = function () {
    this.foundation_.closeNotch();
  };

  MDCNotchedOutline.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setNotchWidthProperty: function setNotchWidthProperty(width) {
        return _this.notchElement_.style.setProperty('width', width + 'px');
      },
      removeNotchWidthProperty: function removeNotchWidthProperty() {
        return _this.notchElement_.style.removeProperty('width');
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCNotchedOutlineFoundation(adapter);
  };

  return MDCNotchedOutline;
}(MDCComponent);

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
var cssClasses$6 = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings$4 = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers$4 = {
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
      return cssClasses$6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function get() {
      return strings$4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function get() {
      return numbers$4;
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
      }, numbers$4.FG_DEACTIVATION_MS);
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
var cssClasses$7 = {
  ACTIVATED: 'mdc-select--activated',
  DISABLED: 'mdc-select--disabled',
  FOCUSED: 'mdc-select--focused',
  INVALID: 'mdc-select--invalid',
  OUTLINED: 'mdc-select--outlined',
  REQUIRED: 'mdc-select--required',
  ROOT: 'mdc-select',
  SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
  WITH_LEADING_ICON: 'mdc-select--with-leading-icon'
};
var strings$5 = {
  ARIA_CONTROLS: 'aria-controls',
  ARIA_SELECTED_ATTR: 'aria-selected',
  CHANGE_EVENT: 'MDCSelect:change',
  LABEL_SELECTOR: '.mdc-floating-label',
  LEADING_ICON_SELECTOR: '.mdc-select__icon',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  MENU_SELECTOR: '.mdc-select__menu',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  SELECTED_ITEM_SELECTOR: "." + cssClasses$7.SELECTED_ITEM_CLASS,
  SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
  SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
  VALUE_ATTR: 'data-value'
};
var numbers$5 = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1
};

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

var MDCSelectFoundation =
/** @class */
function (_super) {
  __extends(MDCSelectFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */

  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */


  function MDCSelectFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }

    var _this = _super.call(this, _assign({}, MDCSelectFoundation.defaultAdapter, adapter)) || this; // Index of the currently selected menu item.


    _this.selectedIndex_ = numbers$5.UNSET_INDEX; // Disabled state

    _this.disabled_ = false; // isMenuOpen_ is used to track the state of the menu by listening to the MDCMenuSurface:closed event
    // For reference, menu.open will return false if the menu is still closing, but isMenuOpen_ returns false only after
    // the menu has closed

    _this.isMenuOpen_ = false;
    _this.leadingIcon_ = foundationMap.leadingIcon;
    _this.helperText_ = foundationMap.helperText;
    _this.menuItemValues_ = _this.adapter_.getMenuItemValues();
    return _this;
  }

  Object.defineProperty(MDCSelectFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$7;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "numbers", {
    get: function get() {
      return numbers$5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "strings", {
    get: function get() {
      return strings$5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        activateBottomLine: function activateBottomLine() {
          return undefined;
        },
        deactivateBottomLine: function deactivateBottomLine() {
          return undefined;
        },
        getSelectedMenuItem: function getSelectedMenuItem() {
          return null;
        },
        hasLabel: function hasLabel() {
          return false;
        },
        floatLabel: function floatLabel() {
          return undefined;
        },
        getLabelWidth: function getLabelWidth() {
          return 0;
        },
        hasOutline: function hasOutline() {
          return false;
        },
        notchOutline: function notchOutline() {
          return undefined;
        },
        closeOutline: function closeOutline() {
          return undefined;
        },
        setRippleCenter: function setRippleCenter() {
          return undefined;
        },
        notifyChange: function notifyChange() {
          return undefined;
        },
        setSelectedText: function setSelectedText() {
          return undefined;
        },
        isSelectedTextFocused: function isSelectedTextFocused() {
          return false;
        },
        getSelectedTextAttr: function getSelectedTextAttr() {
          return '';
        },
        setSelectedTextAttr: function setSelectedTextAttr() {
          return undefined;
        },
        openMenu: function openMenu() {
          return undefined;
        },
        closeMenu: function closeMenu() {
          return undefined;
        },
        getAnchorElement: function getAnchorElement() {
          return null;
        },
        setMenuAnchorElement: function setMenuAnchorElement() {
          return undefined;
        },
        setMenuAnchorCorner: function setMenuAnchorCorner() {
          return undefined;
        },
        setMenuWrapFocus: function setMenuWrapFocus() {
          return undefined;
        },
        setAttributeAtIndex: function setAttributeAtIndex() {
          return undefined;
        },
        removeAttributeAtIndex: function removeAttributeAtIndex() {
          return undefined;
        },
        focusMenuItemAtIndex: function focusMenuItemAtIndex() {
          return undefined;
        },
        getMenuItemCount: function getMenuItemCount() {
          return 0;
        },
        getMenuItemValues: function getMenuItemValues() {
          return [];
        },
        getMenuItemTextAtIndex: function getMenuItemTextAtIndex() {
          return '';
        },
        getMenuItemAttr: function getMenuItemAttr() {
          return '';
        },
        addClassAtIndex: function addClassAtIndex() {
          return undefined;
        },
        removeClassAtIndex: function removeClassAtIndex() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /** Returns the index of the currently selected menu item, or -1 if none. */

  MDCSelectFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex_;
  };

  MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu) {
    if (closeMenu === void 0) {
      closeMenu = false;
    }

    if (index >= this.adapter_.getMenuItemCount()) {
      return;
    }

    var previouslySelectedIndex = this.selectedIndex_;
    this.selectedIndex_ = index;

    if (this.selectedIndex_ === numbers$5.UNSET_INDEX) {
      this.adapter_.setSelectedText('');
    } else {
      this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).trim());
    }

    if (previouslySelectedIndex !== numbers$5.UNSET_INDEX) {
      this.adapter_.removeClassAtIndex(previouslySelectedIndex, cssClasses$7.SELECTED_ITEM_CLASS);
      this.adapter_.removeAttributeAtIndex(previouslySelectedIndex, strings$5.ARIA_SELECTED_ATTR);
    }

    if (this.selectedIndex_ !== numbers$5.UNSET_INDEX) {
      this.adapter_.addClassAtIndex(this.selectedIndex_, cssClasses$7.SELECTED_ITEM_CLASS);
      this.adapter_.setAttributeAtIndex(this.selectedIndex_, strings$5.ARIA_SELECTED_ATTR, 'true');
    }

    this.layout();

    if (closeMenu) {
      this.adapter_.closeMenu();
    }

    this.handleChange();
  };

  MDCSelectFoundation.prototype.setValue = function (value) {
    var index = this.menuItemValues_.indexOf(value);
    this.setSelectedIndex(index);
    this.handleChange();
  };

  MDCSelectFoundation.prototype.getValue = function () {
    var listItem = this.adapter_.getSelectedMenuItem();

    if (listItem) {
      return this.adapter_.getMenuItemAttr(listItem, strings$5.VALUE_ATTR) || '';
    }

    return '';
  };

  MDCSelectFoundation.prototype.getDisabled = function () {
    return this.disabled_;
  };

  MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
    this.disabled_ = isDisabled;

    if (this.disabled_) {
      this.adapter_.addClass(cssClasses$7.DISABLED);
      this.adapter_.closeMenu();
    } else {
      this.adapter_.removeClass(cssClasses$7.DISABLED);
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.setDisabled(this.disabled_);
    }

    this.adapter_.setSelectedTextAttr('tabindex', this.disabled_ ? '-1' : '0');
    this.adapter_.setSelectedTextAttr('aria-disabled', this.disabled_.toString());
  };
  /**
   * @param content Sets the content of the helper text.
   */


  MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };

  MDCSelectFoundation.prototype.layout = function () {
    if (this.adapter_.hasLabel()) {
      var openNotch = this.getValue().length > 0;
      this.notchOutline(openNotch);
    }
  };

  MDCSelectFoundation.prototype.handleMenuOpened = function () {
    if (this.adapter_.getMenuItemValues().length === 0) {
      return;
    }

    this.adapter_.addClass(cssClasses$7.ACTIVATED); // Menu should open to the last selected element, should open to first menu item otherwise.

    var focusItemIndex = this.selectedIndex_ >= 0 ? this.selectedIndex_ : 0;
    this.adapter_.focusMenuItemAtIndex(focusItemIndex);
  };

  MDCSelectFoundation.prototype.handleMenuClosed = function () {
    this.adapter_.removeClass(cssClasses$7.ACTIVATED);
    this.isMenuOpen_ = false;
    this.adapter_.setSelectedTextAttr('aria-expanded', 'false'); // Unfocus the select if menu is closed without a selection

    if (!this.adapter_.isSelectedTextFocused()) {
      this.blur_();
    }
  };
  /**
   * Handles value changes, via change event or programmatic updates.
   */


  MDCSelectFoundation.prototype.handleChange = function () {
    this.updateLabel_();
    this.adapter_.notifyChange(this.getValue());
    var isRequired = this.adapter_.hasClass(cssClasses$7.REQUIRED);

    if (isRequired) {
      this.setValid(this.isValid());

      if (this.helperText_) {
        this.helperText_.setValidity(this.isValid());
      }
    }
  };

  MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
    this.setSelectedIndex(index,
    /** closeMenu */
    true);
  };
  /**
   * Handles focus events from select element.
   */


  MDCSelectFoundation.prototype.handleFocus = function () {
    this.adapter_.addClass(cssClasses$7.FOCUSED);

    if (this.adapter_.hasLabel()) {
      this.adapter_.floatLabel(true);
      this.notchOutline(true);
    }

    this.adapter_.activateBottomLine();

    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };
  /**
   * Handles blur events from select element.
   */


  MDCSelectFoundation.prototype.handleBlur = function () {
    if (this.isMenuOpen_) {
      return;
    }

    this.blur_();
  };

  MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
    if (this.isMenuOpen_) {
      return;
    }

    this.adapter_.setRippleCenter(normalizedX);
    this.adapter_.openMenu();
    this.isMenuOpen_ = true;
    this.adapter_.setSelectedTextAttr('aria-expanded', 'true');
  };

  MDCSelectFoundation.prototype.handleKeydown = function (event) {
    if (this.isMenuOpen_) {
      return;
    }

    var isEnter = event.key === 'Enter' || event.keyCode === 13;
    var isSpace = event.key === 'Space' || event.keyCode === 32;
    var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
    var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;

    if (this.adapter_.hasClass(cssClasses$7.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
      this.adapter_.openMenu();
      this.isMenuOpen_ = true;
      this.adapter_.setSelectedTextAttr('aria-expanded', 'true');
      event.preventDefault();
    }
  };
  /**
   * Opens/closes the notched outline.
   */


  MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    var isFocused = this.adapter_.hasClass(cssClasses$7.FOCUSED);

    if (openNotch) {
      var labelScale = numbers$5.LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      this.adapter_.notchOutline(labelWidth);
    } else if (!isFocused) {
      this.adapter_.closeOutline();
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */


  MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */


  MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setContent(content);
    }
  };

  MDCSelectFoundation.prototype.setValid = function (isValid) {
    this.adapter_.setSelectedTextAttr('aria-invalid', (!isValid).toString());

    if (isValid) {
      this.adapter_.removeClass(cssClasses$7.INVALID);
    } else {
      this.adapter_.addClass(cssClasses$7.INVALID);
    }
  };

  MDCSelectFoundation.prototype.isValid = function () {
    if (this.adapter_.hasClass(cssClasses$7.REQUIRED) && !this.adapter_.hasClass(cssClasses$7.DISABLED)) {
      // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
      // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
      return this.selectedIndex_ !== numbers$5.UNSET_INDEX && (this.selectedIndex_ !== 0 || Boolean(this.getValue()));
    }

    return true;
  };

  MDCSelectFoundation.prototype.setRequired = function (isRequired) {
    if (isRequired) {
      this.adapter_.addClass(cssClasses$7.REQUIRED);
    } else {
      this.adapter_.removeClass(cssClasses$7.REQUIRED);
    }

    this.adapter_.setSelectedTextAttr('aria-required', isRequired.toString());
  };

  MDCSelectFoundation.prototype.getRequired = function () {
    return this.adapter_.getSelectedTextAttr('aria-required') === 'true';
  };

  MDCSelectFoundation.prototype.init = function () {
    var anchorEl = this.adapter_.getAnchorElement();

    if (anchorEl) {
      this.adapter_.setMenuAnchorElement(anchorEl);
      this.adapter_.setMenuAnchorCorner(Corner.BOTTOM_START);
    }

    this.adapter_.setMenuWrapFocus(false);
    var value = this.getValue();

    if (value) {
      this.setValue(value);
    } // Initially sync floating label


    this.updateLabel_();
  };
  /**
   * Notches the outline and floats the label when appropriate.
   */


  MDCSelectFoundation.prototype.updateLabel_ = function () {
    var value = this.getValue();
    var optionHasValue = value.length > 0;

    if (this.adapter_.hasLabel()) {
      this.notchOutline(optionHasValue);

      if (!this.adapter_.hasClass(cssClasses$7.FOCUSED)) {
        this.adapter_.floatLabel(optionHasValue);
      }
    }
  };
  /**
   * Unfocuses the select component.
   */


  MDCSelectFoundation.prototype.blur_ = function () {
    this.adapter_.removeClass(cssClasses$7.FOCUSED);
    this.updateLabel_();
    this.adapter_.deactivateBottomLine();
    var isRequired = this.adapter_.hasClass(cssClasses$7.REQUIRED);

    if (isRequired) {
      this.setValid(this.isValid());

      if (this.helperText_) {
        this.helperText_.setValidity(this.isValid());
      }
    }
  };

  return MDCSelectFoundation;
}(MDCFoundation);

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
var strings$6 = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};
var cssClasses$8 = {
  HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg'
};

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

var MDCSelectHelperTextFoundation =
/** @class */
function (_super) {
  __extends(MDCSelectHelperTextFoundation, _super);

  function MDCSelectHelperTextFoundation(adapter) {
    return _super.call(this, _assign({}, MDCSelectHelperTextFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$8;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
    get: function get() {
      return strings$6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets the content of the helper text field.
   */

  MDCSelectHelperTextFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };
  /**
   *  Sets the persistency of the helper text.
   */


  MDCSelectHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(cssClasses$8.HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(cssClasses$8.HELPER_TEXT_PERSISTENT);
    }
  };
  /**
   * @param isValidation True to make the helper text act as an error validation message.
   */


  MDCSelectHelperTextFoundation.prototype.setValidation = function (isValidation) {
    if (isValidation) {
      this.adapter_.addClass(cssClasses$8.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(cssClasses$8.HELPER_TEXT_VALIDATION_MSG);
    }
  };
  /**
   * Makes the helper text visible to screen readers.
   */


  MDCSelectHelperTextFoundation.prototype.showToScreenReader = function () {
    this.adapter_.removeAttr(strings$6.ARIA_HIDDEN);
  };
  /**
   * Sets the validity of the helper text based on the select validity.
   */


  MDCSelectHelperTextFoundation.prototype.setValidity = function (selectIsValid) {
    var helperTextIsPersistent = this.adapter_.hasClass(cssClasses$8.HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses$8.HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(strings$6.ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(strings$6.ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };
  /**
   * Hides the help text from screen readers.
   */


  MDCSelectHelperTextFoundation.prototype.hide_ = function () {
    this.adapter_.setAttr(strings$6.ARIA_HIDDEN, 'true');
  };

  return MDCSelectHelperTextFoundation;
}(MDCFoundation);

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

var MDCSelectHelperText =
/** @class */
function (_super) {
  __extends(MDCSelectHelperText, _super);

  function MDCSelectHelperText() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelectHelperText.attachTo = function (root) {
    return new MDCSelectHelperText(root);
  };

  Object.defineProperty(MDCSelectHelperText.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectHelperText.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCSelectHelperTextFoundation(adapter);
  };

  return MDCSelectHelperText;
}(MDCComponent);

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
var strings$7 = {
  ICON_EVENT: 'MDCSelect:icon',
  ICON_ROLE: 'button'
};

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
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCSelectIconFoundation =
/** @class */
function (_super) {
  __extends(MDCSelectIconFoundation, _super);

  function MDCSelectIconFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCSelectIconFoundation.defaultAdapter, adapter)) || this;

    _this.savedTabIndex_ = null;

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCSelectIconFoundation, "strings", {
    get: function get() {
      return strings$7;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        getAttr: function getAttr() {
          return null;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        notifyIconAction: function notifyIconAction() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectIconFoundation.prototype.init = function () {
    var _this = this;

    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCSelectIconFoundation.prototype.destroy = function () {
    var _this = this;

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', strings$7.ICON_ROLE);
    }
  };

  MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
    this.adapter_.setAttr('aria-label', label);
  };

  MDCSelectIconFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };

  MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;

    if (evt.type === 'click' || isEnterKey) {
      this.adapter_.notifyIconAction();
    }
  };

  return MDCSelectIconFoundation;
}(MDCFoundation);

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

var MDCSelectIcon =
/** @class */
function (_super) {
  __extends(MDCSelectIcon, _super);

  function MDCSelectIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelectIcon.attachTo = function (root) {
    return new MDCSelectIcon(root);
  };

  Object.defineProperty(MDCSelectIcon.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectIcon.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      getAttr: function getAttr(attr) {
        return _this.root_.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        return _this.emit(MDCSelectIconFoundation.strings.ICON_EVENT, {}
        /* evtData */
        , true
        /* shouldBubble */
        );
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCSelectIconFoundation(adapter);
  };

  return MDCSelectIcon;
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

var MDCSelect =
/** @class */
function (_super) {
  __extends(MDCSelect, _super);

  function MDCSelect() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelect.attachTo = function (root) {
    return new MDCSelect(root);
  };

  MDCSelect.prototype.initialize = function (labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
    if (labelFactory === void 0) {
      labelFactory = function labelFactory(el) {
        return new MDCFloatingLabel(el);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function lineRippleFactory(el) {
        return new MDCLineRipple(el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function outlineFactory(el) {
        return new MDCNotchedOutline(el);
      };
    }

    if (menuFactory === void 0) {
      menuFactory = function menuFactory(el) {
        return new MDCMenu(el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function iconFactory(el) {
        return new MDCSelectIcon(el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function helperTextFactory(el) {
        return new MDCSelectHelperText(el);
      };
    }

    this.selectAnchor_ = this.root_.querySelector(strings$5.SELECT_ANCHOR_SELECTOR);
    this.selectedText_ = this.root_.querySelector(strings$5.SELECTED_TEXT_SELECTOR);

    if (!this.selectedText_) {
      throw new Error('MDCSelect: Missing required element: The following selector must be present: ' + ("'" + strings$5.SELECTED_TEXT_SELECTOR + "'"));
    }

    if (this.selectedText_.hasAttribute(strings$5.ARIA_CONTROLS)) {
      var helperTextElement = document.getElementById(this.selectedText_.getAttribute(strings$5.ARIA_CONTROLS));

      if (helperTextElement) {
        this.helperText_ = helperTextFactory(helperTextElement);
      }
    }

    this.menuSetup_(menuFactory);
    var labelElement = this.root_.querySelector(strings$5.LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root_.querySelector(strings$5.LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root_.querySelector(strings$5.OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
    var leadingIcon = this.root_.querySelector(strings$5.LEADING_ICON_SELECTOR);

    if (leadingIcon) {
      this.leadingIcon_ = iconFactory(leadingIcon);
    }

    if (!this.root_.classList.contains(cssClasses$7.OUTLINED)) {
      this.ripple_ = this.createRipple_();
    }
  };
  /**
   * Initializes the select's event listeners and internal state based
   * on the environment's state.
   */


  MDCSelect.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleChange_ = function () {
      return _this.foundation_.handleChange();
    };

    this.handleFocus_ = function () {
      return _this.foundation_.handleFocus();
    };

    this.handleBlur_ = function () {
      return _this.foundation_.handleBlur();
    };

    this.handleClick_ = function (evt) {
      _this.selectedText_.focus();

      _this.foundation_.handleClick(_this.getNormalizedXCoordinate_(evt));
    };

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleMenuItemAction_ = function (evt) {
      return _this.foundation_.handleMenuItemAction(evt.detail.index);
    };

    this.handleMenuOpened_ = function () {
      return _this.foundation_.handleMenuOpened();
    };

    this.handleMenuClosed_ = function () {
      return _this.foundation_.handleMenuClosed();
    };

    this.selectedText_.addEventListener('focus', this.handleFocus_);
    this.selectedText_.addEventListener('blur', this.handleBlur_);
    this.selectedText_.addEventListener('click', this.handleClick_);
    this.selectedText_.addEventListener('keydown', this.handleKeydown_);
    this.menu_.listen(strings.CLOSED_EVENT, this.handleMenuClosed_);
    this.menu_.listen(strings.OPENED_EVENT, this.handleMenuOpened_);
    this.menu_.listen(strings$2.SELECTED_EVENT, this.handleMenuItemAction_);
    this.foundation_.init(); // Sets disabled state in foundation

    this.disabled = this.root_.classList.contains(cssClasses$7.DISABLED);
  };

  MDCSelect.prototype.destroy = function () {
    this.selectedText_.removeEventListener('change', this.handleChange_);
    this.selectedText_.removeEventListener('focus', this.handleFocus_);
    this.selectedText_.removeEventListener('blur', this.handleBlur_);
    this.selectedText_.removeEventListener('keydown', this.handleKeydown_);
    this.selectedText_.removeEventListener('click', this.handleClick_);
    this.menu_.unlisten(strings.CLOSED_EVENT, this.handleMenuClosed_);
    this.menu_.unlisten(strings.OPENED_EVENT, this.handleMenuOpened_);
    this.menu_.unlisten(strings$2.SELECTED_EVENT, this.handleMenuItemAction_);
    this.menu_.destroy();

    if (this.ripple_) {
      this.ripple_.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    _super.prototype.destroy.call(this);
  };

  Object.defineProperty(MDCSelect.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex,
      /** closeMenu */
      true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "disabled", {
    get: function get() {
      return this.foundation_.getDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
    set: function set(label) {
      this.foundation_.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function set(content) {
      this.foundation_.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
    /**
     * Sets the text content of the helper text.
     */
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "valid", {
    /**
     * Checks if the select is in a valid state.
     */
    get: function get() {
      return this.foundation_.isValid();
    },

    /**
     * Sets the current invalid state of the select.
     */
    set: function set(isValid) {
      this.foundation_.setValid(isValid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "required", {
    /**
     * Returns whether the select is required.
     */
    get: function get() {
      return this.foundation_.getRequired();
    },

    /**
     * Sets the control to the required state.
     */
    set: function set(isRequired) {
      this.foundation_.setRequired(isRequired);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Recomputes the outline SVG path for the outline element.
   */

  MDCSelect.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCSelect.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    var adapter = _assign({}, this.getSelectAdapterMethods_(), this.getCommonAdapterMethods_(), this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_());

    return new MDCSelectFoundation(adapter, this.getFoundationMap_());
  };
  /**
   * Handles setup for the menu.
   */


  MDCSelect.prototype.menuSetup_ = function (menuFactory) {
    this.menuElement_ = this.root_.querySelector(strings$5.MENU_SELECTOR);
    this.menu_ = menuFactory(this.menuElement_);
  };

  MDCSelect.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = _assign({}, MDCRipple.createAdapter({
      root_: this.selectAnchor_
    }), {
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.selectedText_.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.selectedText_.removeEventListener(evtType, handler);
      }
    }); // tslint:enable:object-literal-sort-keys


    return new MDCRipple(this.selectAnchor_, new MDCRippleFoundation(adapter));
  };

  MDCSelect.prototype.getSelectAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getSelectedMenuItem: function getSelectedMenuItem() {
        return _this.menuElement_.querySelector(strings$5.SELECTED_ITEM_SELECTOR);
      },
      getMenuItemAttr: function getMenuItemAttr(menuItem, attr) {
        return menuItem.getAttribute(attr);
      },
      setSelectedText: function setSelectedText(text) {
        return _this.selectedText_.textContent = text;
      },
      isSelectedTextFocused: function isSelectedTextFocused() {
        return document.activeElement === _this.selectedText_;
      },
      getSelectedTextAttr: function getSelectedTextAttr(attr) {
        return _this.selectedText_.getAttribute(attr);
      },
      setSelectedTextAttr: function setSelectedTextAttr(attr, value) {
        return _this.selectedText_.setAttribute(attr, value);
      },
      openMenu: function openMenu() {
        return _this.menu_.open = true;
      },
      closeMenu: function closeMenu() {
        return _this.menu_.open = false;
      },
      getAnchorElement: function getAnchorElement() {
        return _this.root_.querySelector(strings$5.SELECT_ANCHOR_SELECTOR);
      },
      setMenuAnchorElement: function setMenuAnchorElement(anchorEl) {
        return _this.menu_.setAnchorElement(anchorEl);
      },
      setMenuAnchorCorner: function setMenuAnchorCorner(anchorCorner) {
        return _this.menu_.setAnchorCorner(anchorCorner);
      },
      setMenuWrapFocus: function setMenuWrapFocus(wrapFocus) {
        return _this.menu_.wrapFocus = wrapFocus;
      },
      setAttributeAtIndex: function setAttributeAtIndex(index, attributeName, attributeValue) {
        return _this.menu_.items[index].setAttribute(attributeName, attributeValue);
      },
      removeAttributeAtIndex: function removeAttributeAtIndex(index, attributeName) {
        return _this.menu_.items[index].removeAttribute(attributeName);
      },
      focusMenuItemAtIndex: function focusMenuItemAtIndex(index) {
        return _this.menu_.items[index].focus();
      },
      getMenuItemCount: function getMenuItemCount() {
        return _this.menu_.items.length;
      },
      getMenuItemValues: function getMenuItemValues() {
        return _this.menu_.items.map(function (el) {
          return el.getAttribute(strings$5.VALUE_ATTR) || '';
        });
      },
      getMenuItemTextAtIndex: function getMenuItemTextAtIndex(index) {
        return _this.menu_.items[index].textContent;
      },
      addClassAtIndex: function addClassAtIndex(index, className) {
        return _this.menu_.items[index].classList.add(className);
      },
      removeClassAtIndex: function removeClassAtIndex(index, className) {
        return _this.menu_.items[index].classList.remove(className);
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getCommonAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setRippleCenter: function setRippleCenter(normalizedX) {
        return _this.lineRipple_ && _this.lineRipple_.setRippleCenter(normalizedX);
      },
      activateBottomLine: function activateBottomLine() {
        return _this.lineRipple_ && _this.lineRipple_.activate();
      },
      deactivateBottomLine: function deactivateBottomLine() {
        return _this.lineRipple_ && _this.lineRipple_.deactivate();
      },
      notifyChange: function notifyChange(value) {
        var index = _this.selectedIndex;

        _this.emit(strings$5.CHANGE_EVENT, {
          value: value,
          index: index
        }, true
        /* shouldBubble  */
        );
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      hasOutline: function hasOutline() {
        return Boolean(_this.outline_);
      },
      notchOutline: function notchOutline(labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      },
      closeOutline: function closeOutline() {
        return _this.outline_ && _this.outline_.closeNotch();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getLabelAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      hasLabel: function hasLabel() {
        return !!_this.label_;
      },
      floatLabel: function floatLabel(shouldFloat) {
        return _this.label_ && _this.label_.float(shouldFloat);
      },
      getLabelWidth: function getLabelWidth() {
        return _this.label_ ? _this.label_.getWidth() : 0;
      }
    }; // tslint:enable:object-literal-sort-keys
  };
  /**
   * Calculates where the line ripple should start based on the x coordinate within the component.
   */


  MDCSelect.prototype.getNormalizedXCoordinate_ = function (evt) {
    var targetClientRect = evt.target.getBoundingClientRect();
    var xCoordinate = this.isTouchEvent_(evt) ? evt.touches[0].clientX : evt.clientX;
    return xCoordinate - targetClientRect.left;
  };

  MDCSelect.prototype.isTouchEvent_ = function (evt) {
    return Boolean(evt.touches);
  };
  /**
   * Returns a map of all subcomponents to subfoundations.
   */


  MDCSelect.prototype.getFoundationMap_ = function () {
    return {
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined
    };
  };

  return MDCSelect;
}(MDCComponent);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "../packages/select/Select.svelte";

var get_label_slot_changes_1 = function get_label_slot_changes_1(dirty) {
  return {};
};

var get_label_slot_context_1 = function get_label_slot_context_1(ctx) {
  return {};
};

var get_icon_slot_changes = function get_icon_slot_changes(dirty) {
  return {};
};

var get_icon_slot_context = function get_icon_slot_context(ctx) {
  return {};
};

var get_label_slot_changes = function get_label_slot_changes(dirty) {
  return {};
};

var get_label_slot_context = function get_label_slot_context(ctx) {
  return {};
}; // (27:4) {#if variant === 'outlined'}


function create_if_block_3(ctx) {
  var notchedoutline;
  var current;
  var notchedoutline_spread_levels = [{
    noLabel:
    /*noLabel*/
    ctx[8] ||
    /*label*/
    ctx[9] == null
  }, prefixFilter(
  /*$$props*/
  ctx[27], "outline$")];
  var notchedoutline_props = {
    $$slots: {
      default: [create_default_slot_3]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < notchedoutline_spread_levels.length; i += 1) {
    notchedoutline_props = assign(notchedoutline_props, notchedoutline_spread_levels[i]);
  }

  notchedoutline = new NotchedOutline({
    props: notchedoutline_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(notchedoutline.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(notchedoutline.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(notchedoutline, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var notchedoutline_changes = dirty[0] &
      /*noLabel, label, $$props*/
      134218496 ? get_spread_update(notchedoutline_spread_levels, [dirty[0] &
      /*noLabel, label*/
      768 && {
        noLabel:
        /*noLabel*/
        ctx[8] ||
        /*label*/
        ctx[9] == null
      }, dirty[0] &
      /*$$props*/
      134217728 && get_spread_object(prefixFilter(
      /*$$props*/
      ctx[27], "outline$"))]) : {};

      if (dirty[0] &
      /*inputId, value, label$class, $$props, label, noLabel*/
      134286081 | dirty[1] &
      /*$$scope*/
      256) {
        notchedoutline_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      notchedoutline.$set(notchedoutline_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(notchedoutline.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(notchedoutline.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(notchedoutline, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(27:4) {#if variant === 'outlined'}",
    ctx: ctx
  });
  return block;
} // (29:8) {#if !noLabel && label != null}


function create_if_block_4(ctx) {
  var floatinglabel;
  var current;
  var floatinglabel_spread_levels = [{
    id:
    /*inputId*/
    ctx[11] + "-smui-label"
  }, {
    floatAbove:
    /*value*/
    ctx[0] !== ""
  }, {
    class:
    /*label$class*/
    ctx[16]
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[27], "label$"), ["class"])];
  var floatinglabel_props = {
    $$slots: {
      default: [create_default_slot_4]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }

  floatinglabel = new FloatingLabel({
    props: floatinglabel_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(floatinglabel.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(floatinglabel.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var floatinglabel_changes = dirty[0] &
      /*inputId, value, label$class, $$props*/
      134285313 ? get_spread_update(floatinglabel_spread_levels, [dirty[0] &
      /*inputId*/
      2048 && {
        id:
        /*inputId*/
        ctx[11] + "-smui-label"
      }, dirty[0] &
      /*value*/
      1 && {
        floatAbove:
        /*value*/
        ctx[0] !== ""
      }, dirty[0] &
      /*label$class*/
      65536 && {
        class:
        /*label$class*/
        ctx[16]
      }, dirty[0] &
      /*$$props*/
      134217728 && get_spread_object(exclude(prefixFilter(
      /*$$props*/
      ctx[27], "label$"), ["class"]))]) : {};

      if (dirty[0] &
      /*label*/
      512 | dirty[1] &
      /*$$scope*/
      256) {
        floatinglabel_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      floatinglabel.$set(floatinglabel_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(floatinglabel, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_4.name,
    type: "if",
    source: "(29:8) {#if !noLabel && label != null}",
    ctx: ctx
  });
  return block;
} // (30:10) <FloatingLabel             id={inputId+'-smui-label'}             floatAbove={value !== ''}             class="{label$class}"             {...exclude(prefixFilter($$props, 'label$'), ['class'])}           >


function create_default_slot_4(ctx) {
  var t;
  var current;
  var label_slot_template =
  /*#slots*/
  ctx[34].label;
  var label_slot = create_slot(label_slot_template, ctx,
  /*$$scope*/
  ctx[39], get_label_slot_context);
  var block = {
    c: function create() {
      t = text(
      /*label*/
      ctx[9]);
      if (label_slot) label_slot.c();
    },
    l: function claim(nodes) {
      t = claim_text(nodes,
      /*label*/
      ctx[9]);
      if (label_slot) label_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);

      if (label_slot) {
        label_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (!current || dirty[0] &
      /*label*/
      512) set_data_dev(t,
      /*label*/
      ctx[9]);

      if (label_slot) {
        if (label_slot.p && dirty[1] &
        /*$$scope*/
        256) {
          update_slot(label_slot, label_slot_template, ctx,
          /*$$scope*/
          ctx[39], dirty, get_label_slot_changes, get_label_slot_context);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if (label_slot) label_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(30:10) <FloatingLabel             id={inputId+'-smui-label'}             floatAbove={value !== ''}             class=\\\"{label$class}\\\"             {...exclude(prefixFilter($$props, 'label$'), ['class'])}           >",
    ctx: ctx
  });
  return block;
} // (28:6) <NotchedOutline noLabel={noLabel || label == null} {...prefixFilter($$props, 'outline$')}>


function create_default_slot_3(ctx) {
  var if_block_anchor;
  var current;
  var if_block = !
  /*noLabel*/
  ctx[8] &&
  /*label*/
  ctx[9] != null && create_if_block_4(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (!
      /*noLabel*/
      ctx[8] &&
      /*label*/
      ctx[9] != null) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty[0] &
          /*noLabel, label*/
          768) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_4(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
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
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(28:6) <NotchedOutline noLabel={noLabel || label == null} {...prefixFilter($$props, 'outline$')}>",
    ctx: ctx
  });
  return block;
} // (53:4) {#if variant !== 'outlined'}


function create_if_block(ctx) {
  var t;
  var if_block1_anchor;
  var current;
  var if_block0 = !
  /*noLabel*/
  ctx[8] &&
  /*label*/
  ctx[9] != null && create_if_block_2(ctx);
  var if_block1 =
  /*ripple*/
  ctx[4] && create_if_block_1(ctx);
  var block = {
    c: function create() {
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0) if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (!
      /*noLabel*/
      ctx[8] &&
      /*label*/
      ctx[9] != null) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty[0] &
          /*noLabel, label*/
          768) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*ripple*/
      ctx[4]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty[0] &
          /*ripple*/
          16) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx);
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
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach_dev(t);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(53:4) {#if variant !== 'outlined'}",
    ctx: ctx
  });
  return block;
} // (54:6) {#if !noLabel && label != null}


function create_if_block_2(ctx) {
  var floatinglabel;
  var current;
  var floatinglabel_spread_levels = [{
    id:
    /*inputId*/
    ctx[11] + "-smui-label"
  }, {
    floatAbove:
    /*value*/
    ctx[0] !== ""
  }, {
    class:
    /*label$class*/
    ctx[16]
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[27], "label$"), ["class"])];
  var floatinglabel_props = {
    $$slots: {
      default: [create_default_slot_2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }

  floatinglabel = new FloatingLabel({
    props: floatinglabel_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(floatinglabel.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(floatinglabel.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var floatinglabel_changes = dirty[0] &
      /*inputId, value, label$class, $$props*/
      134285313 ? get_spread_update(floatinglabel_spread_levels, [dirty[0] &
      /*inputId*/
      2048 && {
        id:
        /*inputId*/
        ctx[11] + "-smui-label"
      }, dirty[0] &
      /*value*/
      1 && {
        floatAbove:
        /*value*/
        ctx[0] !== ""
      }, dirty[0] &
      /*label$class*/
      65536 && {
        class:
        /*label$class*/
        ctx[16]
      }, dirty[0] &
      /*$$props*/
      134217728 && get_spread_object(exclude(prefixFilter(
      /*$$props*/
      ctx[27], "label$"), ["class"]))]) : {};

      if (dirty[0] &
      /*label*/
      512 | dirty[1] &
      /*$$scope*/
      256) {
        floatinglabel_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      floatinglabel.$set(floatinglabel_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(floatinglabel, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(54:6) {#if !noLabel && label != null}",
    ctx: ctx
  });
  return block;
} // (55:8) <FloatingLabel           id={inputId+'-smui-label'}           floatAbove={value !== ''}           class="{label$class}"           {...exclude(prefixFilter($$props, 'label$'), ['class'])}         >


function create_default_slot_2(ctx) {
  var t;
  var current;
  var label_slot_template =
  /*#slots*/
  ctx[34].label;
  var label_slot = create_slot(label_slot_template, ctx,
  /*$$scope*/
  ctx[39], get_label_slot_context_1);
  var block = {
    c: function create() {
      t = text(
      /*label*/
      ctx[9]);
      if (label_slot) label_slot.c();
    },
    l: function claim(nodes) {
      t = claim_text(nodes,
      /*label*/
      ctx[9]);
      if (label_slot) label_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);

      if (label_slot) {
        label_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (!current || dirty[0] &
      /*label*/
      512) set_data_dev(t,
      /*label*/
      ctx[9]);

      if (label_slot) {
        if (label_slot.p && dirty[1] &
        /*$$scope*/
        256) {
          update_slot(label_slot, label_slot_template, ctx,
          /*$$scope*/
          ctx[39], dirty, get_label_slot_changes_1, get_label_slot_context_1);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if (label_slot) label_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(55:8) <FloatingLabel           id={inputId+'-smui-label'}           floatAbove={value !== ''}           class=\\\"{label$class}\\\"           {...exclude(prefixFilter($$props, 'label$'), ['class'])}         >",
    ctx: ctx
  });
  return block;
} // (62:6) {#if ripple}


function create_if_block_1(ctx) {
  var lineripple;
  var current;
  var lineripple_spread_levels = [prefixFilter(
  /*$$props*/
  ctx[27], "ripple$")];
  var lineripple_props = {};

  for (var i = 0; i < lineripple_spread_levels.length; i += 1) {
    lineripple_props = assign(lineripple_props, lineripple_spread_levels[i]);
  }

  lineripple = new LineRipple({
    props: lineripple_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(lineripple.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(lineripple.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(lineripple, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var lineripple_changes = dirty[0] &
      /*$$props*/
      134217728 ? get_spread_update(lineripple_spread_levels, [get_spread_object(prefixFilter(
      /*$$props*/
      ctx[27], "ripple$"))]) : {};
      lineripple.$set(lineripple_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(lineripple.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(lineripple.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(lineripple, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(62:6) {#if ripple}",
    ctx: ctx
  });
  return block;
} // (73:4) <List {...prefixFilter($$props, 'list$')}>


function create_default_slot_1(ctx) {
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[34].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[39], null);
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
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty[1] &
        /*$$scope*/
        256) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[39], dirty, null, null);
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(73:4) <List {...prefixFilter($$props, 'list$')}>",
    ctx: ctx
  });
  return block;
} // (67:2) <Menu     class="mdc-select__menu {menu$class}"     role="listbox"     bind:open={menuOpen}     {...exclude(prefixFilter($$props, 'menu$'), ['class'])}   >


function create_default_slot(ctx) {
  var list;
  var current;
  var list_spread_levels = [prefixFilter(
  /*$$props*/
  ctx[27], "list$")];
  var list_props = {
    $$slots: {
      default: [create_default_slot_1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < list_spread_levels.length; i += 1) {
    list_props = assign(list_props, list_spread_levels[i]);
  }

  list = new List({
    props: list_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = dirty[0] &
      /*$$props*/
      134217728 ? get_spread_update(list_spread_levels, [get_spread_object(prefixFilter(
      /*$$props*/
      ctx[27], "list$"))]) : {};

      if (dirty[1] &
      /*$$scope*/
      256) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(67:2) <Menu     class=\\\"mdc-select__menu {menu$class}\\\"     role=\\\"listbox\\\"     bind:open={menuOpen}     {...exclude(prefixFilter($$props, 'menu$'), ['class'])}   >",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div2;
  var div1;
  var t0;
  var t1;
  var i;
  var t2;
  var div0;
  var t3;
  var div0_id_value;
  var div0_class_value;
  var div0_aria_labelledby_value;
  var div0_aria_disabled_value;
  var div0_aria_required_value;
  var useActions_action;
  var t4;
  var div1_class_value;
  var useActions_action_1;
  var t5;
  var menu;
  var updating_open;
  var div2_class_value;
  var Anchor_action;
  var useActions_action_2;
  var forwardEvents_action;
  var current;
  var mounted;
  var dispose;
  var if_block0 =
  /*variant*/
  ctx[6] === "outlined" && create_if_block_3(ctx);
  var icon_slot_template =
  /*#slots*/
  ctx[34].icon;
  var icon_slot = create_slot(icon_slot_template, ctx,
  /*$$scope*/
  ctx[39], get_icon_slot_context);
  var div0_levels = [{
    id: div0_id_value =
    /*inputId*/
    ctx[11] + "-smui-selected-text"
  }, {
    class: div0_class_value = "mdc-select__selected-text " +
    /*selectedText$class*/
    ctx[15]
  }, {
    role: "button"
  }, {
    "aria-haspopup": "listbox"
  }, {
    "aria-labelledby": div0_aria_labelledby_value = "" + (
    /*inputId*/
    ctx[11] + "-smui-label" + " " + (
    /*inputId*/
    ctx[11] + "-smui-selected-text"))
  }, {
    "aria-disabled": div0_aria_disabled_value =
    /*disabled*/
    ctx[5] ? "true" : "false"
  }, {
    "aria-required": div0_aria_required_value =
    /*required*/
    ctx[10] ? "true" : "false"
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[27], "selectedText$"), ["use", "class"])];
  var div0_data = {};

  for (var _i = 0; _i < div0_levels.length; _i += 1) {
    div0_data = assign(div0_data, div0_levels[_i]);
  }

  var if_block1 =
  /*variant*/
  ctx[6] !== "outlined" && create_if_block(ctx);
  var div1_levels = [{
    class: div1_class_value = "mdc-select__anchor " +
    /*anchor$class*/
    ctx[13]
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[27], "anchor$"), ["use", "class"])];
  var div1_data = {};

  for (var _i2 = 0; _i2 < div1_levels.length; _i2 += 1) {
    div1_data = assign(div1_data, div1_levels[_i2]);
  }

  var menu_spread_levels = [{
    class: "mdc-select__menu " +
    /*menu$class*/
    ctx[17]
  }, {
    role: "listbox"
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[27], "menu$"), ["class"])];

  function menu_open_binding(value) {
    /*menu_open_binding*/
    ctx[36].call(null, value);
  }

  var menu_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var _i3 = 0; _i3 < menu_spread_levels.length; _i3 += 1) {
    menu_props = assign(menu_props, menu_spread_levels[_i3]);
  }

  if (
  /*menuOpen*/
  ctx[21] !== void 0) {
    menu_props.open =
    /*menuOpen*/
    ctx[21];
  }

  menu = new Menu({
    props: menu_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(menu, "open", menu_open_binding);
  });
  var div2_levels = [{
    class: div2_class_value = "\n    mdc-select\n    " +
    /*className*/
    ctx[3] + "\n    " +
    /*anchorClasses*/
    ctx[20].join(" ") + "\n    " + (
    /*required*/
    ctx[10] ? "mdc-select--required" : "") + "\n    " + (
    /*disabled*/
    ctx[5] ? "mdc-select--disabled" : "") + "\n    " + (
    /*variant*/
    ctx[6] === "outlined" ? "mdc-select--outlined" : "") + "\n    " + (
    /*variant*/
    ctx[6] === "standard" ? "smui-select--standard" : "") + "\n    " + (
    /*withLeadingIcon*/
    ctx[7] ? "mdc-select--with-leading-icon" : "") + "\n    " + (
    /*noLabel*/
    ctx[8] ||
    /*label*/
    ctx[9] == null ? "mdc-select--no-label" : "") + "\n    " + (
    /*invalid*/
    ctx[1] ? "mdc-select--invalid" : "") + "\n    " + (
    /*menuOpen*/
    ctx[21] ? "mdc-select--activated" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[27], ["use", "class", "ripple", "disabled", "variant", "noLabel", "withLeadingIcon", "label", "value", "selectedIndex", "selectedText", "dirty", "invalid", "updateInvalid", "required", "anchor$", "selectedText$", "label$", "ripple$", "outline$", "menu$", "list$"])];
  var div2_data = {};

  for (var _i4 = 0; _i4 < div2_levels.length; _i4 += 1) {
    div2_data = assign(div2_data, div2_levels[_i4]);
  }

  var block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      if (if_block0) if_block0.c();
      t0 = space();
      if (icon_slot) icon_slot.c();
      t1 = space();
      i = element("i");
      t2 = space();
      div0 = element("div");
      t3 = text(
      /*$selectedTextStore*/
      ctx[22]);
      t4 = space();
      if (if_block1) if_block1.c();
      t5 = space();
      create_component(menu.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      if (if_block0) if_block0.l(div1_nodes);
      t0 = claim_space(div1_nodes);
      if (icon_slot) icon_slot.l(div1_nodes);
      t1 = claim_space(div1_nodes);
      i = claim_element(div1_nodes, "I", {
        class: true
      });
      children(i).forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        id: true,
        class: true,
        role: true,
        "aria-haspopup": true,
        "aria-labelledby": true,
        "aria-disabled": true,
        "aria-required": true
      });
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes,
      /*$selectedTextStore*/
      ctx[22]);
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      if (if_block1) if_block1.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      claim_component(menu.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "mdc-select__dropdown-icon");
      add_location(i, file, 39, 4, 1633);
      set_attributes(div0, div0_data);
      add_location(div0, file, 40, 4, 1679);
      set_attributes(div1, div1_data);
      add_location(div1, file, 21, 2, 959);
      set_attributes(div2, div2_data);
      add_location(div2, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div1);
      if (if_block0) if_block0.m(div1, null);
      append_dev(div1, t0);

      if (icon_slot) {
        icon_slot.m(div1, null);
      }

      append_dev(div1, t1);
      append_dev(div1, i);
      append_dev(div1, t2);
      append_dev(div1, div0);
      append_dev(div0, t3);
      /*div0_binding*/

      ctx[35](div0);
      append_dev(div1, t4);
      if (if_block1) if_block1.m(div1, null);
      append_dev(div2, t5);
      mount_component(menu, div2, null);
      /*div2_binding*/

      ctx[37](div2);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, div0,
        /*selectedText$use*/
        ctx[14])), action_destroyer(useActions_action_1 = useActions.call(null, div1,
        /*anchor$use*/
        ctx[12])), action_destroyer(Anchor_action = Anchor.call(null, div2, {
          classForward:
          /*Anchor_function*/
          ctx[38]
        })), action_destroyer(useActions_action_2 = useActions.call(null, div2,
        /*use*/
        ctx[2])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[23].call(null, div2)), listen_dev(div2, "MDCSelect:change",
        /*changeHandler*/
        ctx[26], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (
      /*variant*/
      ctx[6] === "outlined") {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty[0] &
          /*variant*/
          64) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_3(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div1, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (icon_slot) {
        if (icon_slot.p && dirty[1] &
        /*$$scope*/
        256) {
          update_slot(icon_slot, icon_slot_template, ctx,
          /*$$scope*/
          ctx[39], dirty, get_icon_slot_changes, get_icon_slot_context);
        }
      }

      if (!current || dirty[0] &
      /*$selectedTextStore*/
      4194304) set_data_dev(t3,
      /*$selectedTextStore*/
      ctx[22]);
      set_attributes(div0, div0_data = get_spread_update(div0_levels, [(!current || dirty[0] &
      /*inputId*/
      2048 && div0_id_value !== (div0_id_value =
      /*inputId*/
      ctx[11] + "-smui-selected-text")) && {
        id: div0_id_value
      }, (!current || dirty[0] &
      /*selectedText$class*/
      32768 && div0_class_value !== (div0_class_value = "mdc-select__selected-text " +
      /*selectedText$class*/
      ctx[15])) && {
        class: div0_class_value
      }, {
        role: "button"
      }, {
        "aria-haspopup": "listbox"
      }, (!current || dirty[0] &
      /*inputId*/
      2048 && div0_aria_labelledby_value !== (div0_aria_labelledby_value = "" + (
      /*inputId*/
      ctx[11] + "-smui-label" + " " + (
      /*inputId*/
      ctx[11] + "-smui-selected-text")))) && {
        "aria-labelledby": div0_aria_labelledby_value
      }, (!current || dirty[0] &
      /*disabled*/
      32 && div0_aria_disabled_value !== (div0_aria_disabled_value =
      /*disabled*/
      ctx[5] ? "true" : "false")) && {
        "aria-disabled": div0_aria_disabled_value
      }, (!current || dirty[0] &
      /*required*/
      1024 && div0_aria_required_value !== (div0_aria_required_value =
      /*required*/
      ctx[10] ? "true" : "false")) && {
        "aria-required": div0_aria_required_value
      }, dirty[0] &
      /*$$props*/
      134217728 && exclude(prefixFilter(
      /*$$props*/
      ctx[27], "selectedText$"), ["use", "class"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty[0] &
      /*selectedText$use*/
      16384) useActions_action.update.call(null,
      /*selectedText$use*/
      ctx[14]);

      if (
      /*variant*/
      ctx[6] !== "outlined") {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty[0] &
          /*variant*/
          64) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }

      set_attributes(div1, div1_data = get_spread_update(div1_levels, [(!current || dirty[0] &
      /*anchor$class*/
      8192 && div1_class_value !== (div1_class_value = "mdc-select__anchor " +
      /*anchor$class*/
      ctx[13])) && {
        class: div1_class_value
      }, dirty[0] &
      /*$$props*/
      134217728 && exclude(prefixFilter(
      /*$$props*/
      ctx[27], "anchor$"), ["use", "class"])]));
      if (useActions_action_1 && is_function(useActions_action_1.update) && dirty[0] &
      /*anchor$use*/
      4096) useActions_action_1.update.call(null,
      /*anchor$use*/
      ctx[12]);
      var menu_changes = dirty[0] &
      /*menu$class, $$props*/
      134348800 ? get_spread_update(menu_spread_levels, [dirty[0] &
      /*menu$class*/
      131072 && {
        class: "mdc-select__menu " +
        /*menu$class*/
        ctx[17]
      }, menu_spread_levels[1], dirty[0] &
      /*$$props*/
      134217728 && get_spread_object(exclude(prefixFilter(
      /*$$props*/
      ctx[27], "menu$"), ["class"]))]) : {};

      if (dirty[0] &
      /*$$props*/
      134217728 | dirty[1] &
      /*$$scope*/
      256) {
        menu_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_open && dirty[0] &
      /*menuOpen*/
      2097152) {
        updating_open = true;
        menu_changes.open =
        /*menuOpen*/
        ctx[21];
        add_flush_callback(function () {
          return updating_open = false;
        });
      }

      menu.$set(menu_changes);
      set_attributes(div2, div2_data = get_spread_update(div2_levels, [(!current || dirty[0] &
      /*className, anchorClasses, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, menuOpen*/
      3147754 && div2_class_value !== (div2_class_value = "\n    mdc-select\n    " +
      /*className*/
      ctx[3] + "\n    " +
      /*anchorClasses*/
      ctx[20].join(" ") + "\n    " + (
      /*required*/
      ctx[10] ? "mdc-select--required" : "") + "\n    " + (
      /*disabled*/
      ctx[5] ? "mdc-select--disabled" : "") + "\n    " + (
      /*variant*/
      ctx[6] === "outlined" ? "mdc-select--outlined" : "") + "\n    " + (
      /*variant*/
      ctx[6] === "standard" ? "smui-select--standard" : "") + "\n    " + (
      /*withLeadingIcon*/
      ctx[7] ? "mdc-select--with-leading-icon" : "") + "\n    " + (
      /*noLabel*/
      ctx[8] ||
      /*label*/
      ctx[9] == null ? "mdc-select--no-label" : "") + "\n    " + (
      /*invalid*/
      ctx[1] ? "mdc-select--invalid" : "") + "\n    " + (
      /*menuOpen*/
      ctx[21] ? "mdc-select--activated" : "") + "\n  ")) && {
        class: div2_class_value
      }, dirty[0] &
      /*$$props*/
      134217728 && exclude(
      /*$$props*/
      ctx[27], ["use", "class", "ripple", "disabled", "variant", "noLabel", "withLeadingIcon", "label", "value", "selectedIndex", "selectedText", "dirty", "invalid", "updateInvalid", "required", "anchor$", "selectedText$", "label$", "ripple$", "outline$", "menu$", "list$"])]));
      if (Anchor_action && is_function(Anchor_action.update) && dirty[0] &
      /*anchorClasses*/
      1048576) Anchor_action.update.call(null, {
        classForward:
        /*Anchor_function*/
        ctx[38]
      });
      if (useActions_action_2 && is_function(useActions_action_2.update) && dirty[0] &
      /*use*/
      4) useActions_action_2.update.call(null,
      /*use*/
      ctx[2]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(icon_slot, local);
      transition_in(if_block1);
      transition_in(menu.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(icon_slot, local);
      transition_out(if_block1);
      transition_out(menu.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
      if (if_block0) if_block0.d();
      if (icon_slot) icon_slot.d(detaching);
      /*div0_binding*/

      ctx[35](null);
      if (if_block1) if_block1.d();
      destroy_component(menu);
      /*div2_binding*/

      ctx[37](null);
      mounted = false;
      run_all(dispose);
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

var counter = 0;

function instance($$self, $$props, $$invalidate) {
  var $valueStore;
  var $selectedTextStore;
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Select", slots, ['label', 'icon', 'default']);
  var forwardEvents = forwardEventsBuilder(get_current_component(), "MDCSelect:change");

  var uninitializedValue = function uninitializedValue() {};

  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;
  var _$$props4 = $$props,
      _$$props4$ripple = _$$props4.ripple,
      ripple = _$$props4$ripple === void 0 ? true : _$$props4$ripple;
  var _$$props5 = $$props,
      _$$props5$disabled = _$$props5.disabled,
      disabled = _$$props5$disabled === void 0 ? false : _$$props5$disabled;
  var _$$props6 = $$props,
      _$$props6$variant = _$$props6.variant,
      variant = _$$props6$variant === void 0 ? "standard" : _$$props6$variant;
  var _$$props7 = $$props,
      _$$props7$withLeading = _$$props7.withLeadingIcon,
      withLeadingIcon = _$$props7$withLeading === void 0 ? false : _$$props7$withLeading;
  var _$$props8 = $$props,
      _$$props8$noLabel = _$$props8.noLabel,
      noLabel = _$$props8$noLabel === void 0 ? false : _$$props8$noLabel;
  var _$$props9 = $$props,
      _$$props9$label = _$$props9.label,
      label = _$$props9$label === void 0 ? null : _$$props9$label;
  var _$$props10 = $$props,
      _$$props10$value = _$$props10.value,
      value = _$$props10$value === void 0 ? "" : _$$props10$value;
  var _$$props11 = $$props,
      _$$props11$selectedIn = _$$props11.selectedIndex,
      selectedIndex = _$$props11$selectedIn === void 0 ? uninitializedValue : _$$props11$selectedIn;
  var _$$props12 = $$props,
      _$$props12$dirty = _$$props12.dirty,
      dirty = _$$props12$dirty === void 0 ? false : _$$props12$dirty;
  var _$$props13 = $$props,
      _$$props13$invalid = _$$props13.invalid,
      invalid = _$$props13$invalid === void 0 ? uninitializedValue : _$$props13$invalid;
  var _$$props14 = $$props,
      _$$props14$updateInva = _$$props14.updateInvalid,
      updateInvalid = _$$props14$updateInva === void 0 ? invalid === uninitializedValue : _$$props14$updateInva;
  var _$$props15 = $$props,
      _$$props15$required = _$$props15.required,
      required = _$$props15$required === void 0 ? false : _$$props15$required;
  var _$$props16 = $$props,
      _$$props16$inputId = _$$props16.inputId,
      inputId = _$$props16$inputId === void 0 ? "SMUI-select-" + counter++ : _$$props16$inputId;
  var _$$props17 = $$props,
      _$$props17$anchor$use = _$$props17.anchor$use,
      anchor$use = _$$props17$anchor$use === void 0 ? [] : _$$props17$anchor$use;
  var _$$props18 = $$props,
      _$$props18$anchor$cla = _$$props18.anchor$class,
      anchor$class = _$$props18$anchor$cla === void 0 ? "" : _$$props18$anchor$cla;
  var _$$props19 = $$props,
      _$$props19$selectedTe = _$$props19.selectedText$use,
      selectedText$use = _$$props19$selectedTe === void 0 ? [] : _$$props19$selectedTe;
  var _$$props20 = $$props,
      _$$props20$selectedTe = _$$props20.selectedText$class,
      selectedText$class = _$$props20$selectedTe === void 0 ? "" : _$$props20$selectedTe;
  var _$$props21 = $$props,
      _$$props21$label$clas = _$$props21.label$class,
      label$class = _$$props21$label$clas === void 0 ? "" : _$$props21$label$clas;
  var _$$props22 = $$props,
      _$$props22$menu$class = _$$props22.menu$class,
      menu$class = _$$props22$menu$class === void 0 ? "" : _$$props22$menu$class;
  var element;
  var selectText;
  var select;
  var anchorClasses = [];
  var menuPromiseResolve;
  var menuPromise = new Promise(function (resolve) {
    return menuPromiseResolve = resolve;
  });
  var addLayoutListener = getContext("SMUI:addLayoutListener");
  var removeLayoutListener;
  var menuOpen = false;
  setContext("SMUI:menu:instantiate", false);
  setContext("SMUI:menu:getInstance", getMenuInstancePromise);
  setContext("SMUI:list:role", "");
  setContext("SMUI:list:nav", false); // Only needed on initialization.

  var selectedTextStore = writable("");
  validate_store(selectedTextStore, "selectedTextStore");
  component_subscribe($$self, selectedTextStore, function (value) {
    return $$invalidate(22, $selectedTextStore = value);
  });
  setContext("SMUI:select:selectedText", selectedTextStore);
  var valueStore = writable(value);
  validate_store(valueStore, "valueStore");
  component_subscribe($$self, valueStore, function (value) {
    return $$invalidate(42, $valueStore = value);
  });
  setContext("SMUI:select:value", valueStore);

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $$invalidate(33, select = new MDCSelect(element));
            menuPromiseResolve(select.menu_);

            if (!ripple && select.ripple) {
              select.ripple.destroy();
            }

            if (updateInvalid) {
              $$invalidate(1, invalid = !select.valid);
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  onDestroy(function () {
    select && select.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function getMenuInstancePromise() {
    return menuPromise;
  }

  function changeHandler(e) {
    $$invalidate(0, value = e.detail.value);
    $$invalidate(28, selectedIndex = e.detail.index);
    $$invalidate(29, dirty = true);

    if (select && updateInvalid) {
      $$invalidate(1, invalid = !select.valid);
    }
  }

  function focus() {
    var _selectText;

    return (_selectText = selectText).focus.apply(_selectText, arguments);
  }

  function layout() {
    var _select;

    return (_select = select).layout.apply(_select, arguments);
  }

  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      selectText = $$value;
      $$invalidate(19, selectText);
    });
  }

  function menu_open_binding(value) {
    menuOpen = value;
    $$invalidate(21, menuOpen);
  }

  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(18, element);
    });
  }

  var Anchor_function = function Anchor_function(classes) {
    return $$invalidate(20, anchorClasses = classes);
  };

  $$self.$$set = function ($$new_props) {
    $$invalidate(27, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(2, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(3, className = $$new_props.class);
    if ("ripple" in $$new_props) $$invalidate(4, ripple = $$new_props.ripple);
    if ("disabled" in $$new_props) $$invalidate(5, disabled = $$new_props.disabled);
    if ("variant" in $$new_props) $$invalidate(6, variant = $$new_props.variant);
    if ("withLeadingIcon" in $$new_props) $$invalidate(7, withLeadingIcon = $$new_props.withLeadingIcon);
    if ("noLabel" in $$new_props) $$invalidate(8, noLabel = $$new_props.noLabel);
    if ("label" in $$new_props) $$invalidate(9, label = $$new_props.label);
    if ("value" in $$new_props) $$invalidate(0, value = $$new_props.value);
    if ("selectedIndex" in $$new_props) $$invalidate(28, selectedIndex = $$new_props.selectedIndex);
    if ("dirty" in $$new_props) $$invalidate(29, dirty = $$new_props.dirty);
    if ("invalid" in $$new_props) $$invalidate(1, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$new_props) $$invalidate(30, updateInvalid = $$new_props.updateInvalid);
    if ("required" in $$new_props) $$invalidate(10, required = $$new_props.required);
    if ("inputId" in $$new_props) $$invalidate(11, inputId = $$new_props.inputId);
    if ("anchor$use" in $$new_props) $$invalidate(12, anchor$use = $$new_props.anchor$use);
    if ("anchor$class" in $$new_props) $$invalidate(13, anchor$class = $$new_props.anchor$class);
    if ("selectedText$use" in $$new_props) $$invalidate(14, selectedText$use = $$new_props.selectedText$use);
    if ("selectedText$class" in $$new_props) $$invalidate(15, selectedText$class = $$new_props.selectedText$class);
    if ("label$class" in $$new_props) $$invalidate(16, label$class = $$new_props.label$class);
    if ("menu$class" in $$new_props) $$invalidate(17, menu$class = $$new_props.menu$class);
    if ("$$scope" in $$new_props) $$invalidate(39, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      counter: counter,
      MDCSelect: MDCSelect,
      onMount: onMount,
      onDestroy: onDestroy,
      getContext: getContext,
      setContext: setContext,
      writable: writable,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      prefixFilter: prefixFilter,
      useActions: useActions,
      Anchor: Anchor,
      Menu: Menu,
      List: List,
      FloatingLabel: FloatingLabel,
      LineRipple: LineRipple,
      NotchedOutline: NotchedOutline,
      forwardEvents: forwardEvents,
      uninitializedValue: uninitializedValue,
      use: use,
      className: className,
      ripple: ripple,
      disabled: disabled,
      variant: variant,
      withLeadingIcon: withLeadingIcon,
      noLabel: noLabel,
      label: label,
      value: value,
      selectedIndex: selectedIndex,
      dirty: dirty,
      invalid: invalid,
      updateInvalid: updateInvalid,
      required: required,
      inputId: inputId,
      anchor$use: anchor$use,
      anchor$class: anchor$class,
      selectedText$use: selectedText$use,
      selectedText$class: selectedText$class,
      label$class: label$class,
      menu$class: menu$class,
      element: element,
      selectText: selectText,
      select: select,
      anchorClasses: anchorClasses,
      menuPromiseResolve: menuPromiseResolve,
      menuPromise: menuPromise,
      addLayoutListener: addLayoutListener,
      removeLayoutListener: removeLayoutListener,
      menuOpen: menuOpen,
      selectedTextStore: selectedTextStore,
      valueStore: valueStore,
      getMenuInstancePromise: getMenuInstancePromise,
      changeHandler: changeHandler,
      focus: focus,
      layout: layout,
      $valueStore: $valueStore,
      $selectedTextStore: $selectedTextStore
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(27, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(2, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(3, className = $$new_props.className);
    if ("ripple" in $$props) $$invalidate(4, ripple = $$new_props.ripple);
    if ("disabled" in $$props) $$invalidate(5, disabled = $$new_props.disabled);
    if ("variant" in $$props) $$invalidate(6, variant = $$new_props.variant);
    if ("withLeadingIcon" in $$props) $$invalidate(7, withLeadingIcon = $$new_props.withLeadingIcon);
    if ("noLabel" in $$props) $$invalidate(8, noLabel = $$new_props.noLabel);
    if ("label" in $$props) $$invalidate(9, label = $$new_props.label);
    if ("value" in $$props) $$invalidate(0, value = $$new_props.value);
    if ("selectedIndex" in $$props) $$invalidate(28, selectedIndex = $$new_props.selectedIndex);
    if ("dirty" in $$props) $$invalidate(29, dirty = $$new_props.dirty);
    if ("invalid" in $$props) $$invalidate(1, invalid = $$new_props.invalid);
    if ("updateInvalid" in $$props) $$invalidate(30, updateInvalid = $$new_props.updateInvalid);
    if ("required" in $$props) $$invalidate(10, required = $$new_props.required);
    if ("inputId" in $$props) $$invalidate(11, inputId = $$new_props.inputId);
    if ("anchor$use" in $$props) $$invalidate(12, anchor$use = $$new_props.anchor$use);
    if ("anchor$class" in $$props) $$invalidate(13, anchor$class = $$new_props.anchor$class);
    if ("selectedText$use" in $$props) $$invalidate(14, selectedText$use = $$new_props.selectedText$use);
    if ("selectedText$class" in $$props) $$invalidate(15, selectedText$class = $$new_props.selectedText$class);
    if ("label$class" in $$props) $$invalidate(16, label$class = $$new_props.label$class);
    if ("menu$class" in $$props) $$invalidate(17, menu$class = $$new_props.menu$class);
    if ("element" in $$props) $$invalidate(18, element = $$new_props.element);
    if ("selectText" in $$props) $$invalidate(19, selectText = $$new_props.selectText);
    if ("select" in $$props) $$invalidate(33, select = $$new_props.select);
    if ("anchorClasses" in $$props) $$invalidate(20, anchorClasses = $$new_props.anchorClasses);
    if ("menuPromiseResolve" in $$props) menuPromiseResolve = $$new_props.menuPromiseResolve;
    if ("menuPromise" in $$props) menuPromise = $$new_props.menuPromise;
    if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
    if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
    if ("menuOpen" in $$props) $$invalidate(21, menuOpen = $$new_props.menuOpen);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*value*/
    1) {
       set_store_value(valueStore, $valueStore = value, $valueStore);
    }

    if ($$self.$$.dirty[0] &
    /*value*/
    1 | $$self.$$.dirty[1] &
    /*select*/
    4) {
       if (select && select.value !== value) {
        $$invalidate(33, select.value = value, select);
      }
    }

    if ($$self.$$.dirty[0] &
    /*selectedIndex*/
    268435456 | $$self.$$.dirty[1] &
    /*select*/
    4) {
       if (select && select.selectedIndex !== selectedIndex) {
        if (selectedIndex === uninitializedValue) {
          $$invalidate(28, selectedIndex = select.selectedIndex);
        } else {
          $$invalidate(33, select.selectedIndex = selectedIndex, select);
        }
      }
    }

    if ($$self.$$.dirty[0] &
    /*disabled*/
    32 | $$self.$$.dirty[1] &
    /*select*/
    4) {
       if (select && select.disabled !== disabled) {
        $$invalidate(33, select.disabled = disabled, select);
      }
    }

    if ($$self.$$.dirty[0] &
    /*invalid, updateInvalid*/
    1073741826 | $$self.$$.dirty[1] &
    /*select*/
    4) {
       if (select && select.valid !== !invalid) {
        if (updateInvalid) {
          $$invalidate(1, invalid = !select.valid);
        } else {
          $$invalidate(33, select.valid = !invalid, select);
        }
      }
    }

    if ($$self.$$.dirty[0] &
    /*required*/
    1024 | $$self.$$.dirty[1] &
    /*select*/
    4) {
       if (select && select.required !== required) {
        $$invalidate(33, select.required = required, select);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [value, invalid, use, className, ripple, disabled, variant, withLeadingIcon, noLabel, label, required, inputId, anchor$use, anchor$class, selectedText$use, selectedText$class, label$class, menu$class, element, selectText, anchorClasses, menuOpen, $selectedTextStore, forwardEvents, selectedTextStore, valueStore, changeHandler, $$props, selectedIndex, dirty, updateInvalid, focus, layout, select, slots, div0_binding, menu_open_binding, div2_binding, Anchor_function, $$scope];
}

var Select = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Select, _SvelteComponentDev);

  var _super = _createSuper(Select);

  function Select(options) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 2,
      class: 3,
      ripple: 4,
      disabled: 5,
      variant: 6,
      withLeadingIcon: 7,
      noLabel: 8,
      label: 9,
      value: 0,
      selectedIndex: 28,
      dirty: 29,
      invalid: 1,
      updateInvalid: 30,
      required: 10,
      inputId: 11,
      anchor$use: 12,
      anchor$class: 13,
      selectedText$use: 14,
      selectedText$class: 15,
      label$class: 16,
      menu$class: 17,
      focus: 31,
      layout: 32
    }, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Select",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Select, [{
    key: "use",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "disabled",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "withLeadingIcon",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "noLabel",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "label",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selectedIndex",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dirty",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "invalid",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "updateInvalid",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "required",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "inputId",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "anchor$use",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "anchor$class",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selectedText$use",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selectedText$class",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "label$class",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "menu$class",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "focus",
    get: function get() {
      return this.$$.ctx[31];
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "layout",
    get: function get() {
      return this.$$.ctx[32];
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Select;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_default_slot$1(ctx) {
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[11].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[13], null);
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
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        8192) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[13], dirty, null, null);
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
    id: create_default_slot$1.name,
    type: "slot",
    source: "(1:0) <Item   bind:this={element}   use={[forwardEvents, ...use]}   data-value={value}   {selected}   {...exclude($$props, ['use', 'value', 'selected'])} >",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var item;
  var current;
  var item_spread_levels = [{
    use: [
    /*forwardEvents*/
    ctx[4]].concat(_toConsumableArray(
    /*use*/
    ctx[0]))
  }, {
    "data-value":
    /*value*/
    ctx[1]
  }, {
    selected:
    /*selected*/
    ctx[3]
  }, exclude(
  /*$$props*/
  ctx[7], ["use", "value", "selected"])];
  var item_props = {
    $$slots: {
      default: [create_default_slot$1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < item_spread_levels.length; i += 1) {
    item_props = assign(item_props, item_spread_levels[i]);
  }

  item = new Item({
    props: item_props,
    $$inline: true
  });
  /*item_binding*/

  ctx[12](item);
  var block = {
    c: function create() {
      create_component(item.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var item_changes = dirty &
      /*forwardEvents, use, value, selected, exclude, $$props*/
      155 ? get_spread_update(item_spread_levels, [dirty &
      /*forwardEvents, use*/
      17 && {
        use: [
        /*forwardEvents*/
        ctx[4]].concat(_toConsumableArray(
        /*use*/
        ctx[0]))
      }, dirty &
      /*value*/
      2 && {
        "data-value":
        /*value*/
        ctx[1]
      }, dirty &
      /*selected*/
      8 && {
        selected:
        /*selected*/
        ctx[3]
      }, dirty &
      /*exclude, $$props*/
      128 && get_spread_object(exclude(
      /*$$props*/
      ctx[7], ["use", "value", "selected"]))]) : {};

      if (dirty &
      /*$$scope*/
      8192) {
        item_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      /*item_binding*/
      ctx[12](null);
      destroy_component(item, detaching);
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
  var $valueStore;
  var $selectedText;
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Option", slots, ['default']);
  var forwardEvents = forwardEventsBuilder(get_current_component());

  var uninitializedValue = function uninitializedValue() {};

  var valueStore = getContext("SMUI:select:value");
  validate_store(valueStore, "valueStore");
  component_subscribe($$self, valueStore, function (value) {
    return $$invalidate(10, $valueStore = value);
  });
  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var className = "";
  var _$$props3 = $$props,
      _$$props3$value = _$$props3.value,
      value = _$$props3$value === void 0 ? "" : _$$props3$value;
  var _$$props4 = $$props,
      _$$props4$selected = _$$props4.selected,
      selectedProp = _$$props4$selected === void 0 ? uninitializedValue : _$$props4$selected;
  var element;
  var selectedText = getContext("SMUI:select:selectedText");
  validate_store(selectedText, "selectedText");
  component_subscribe($$self, selectedText, function (value) {
    return $$invalidate(14, $selectedText = value);
  });
  setContext("SMUI:list:item:role", "option");

  function item_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(2, element);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("value" in $$new_props) $$invalidate(1, value = $$new_props.value);
    if ("selected" in $$new_props) $$invalidate(9, selectedProp = $$new_props.selected);
    if ("$$scope" in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      getContext: getContext,
      setContext: setContext,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      Item: Item,
      forwardEvents: forwardEvents,
      uninitializedValue: uninitializedValue,
      valueStore: valueStore,
      use: use,
      className: className,
      value: value,
      selectedProp: selectedProp,
      element: element,
      selectedText: selectedText,
      selected: selected,
      $valueStore: $valueStore,
      $selectedText: $selectedText
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("value" in $$props) $$invalidate(1, value = $$new_props.value);
    if ("selectedProp" in $$props) $$invalidate(9, selectedProp = $$new_props.selectedProp);
    if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
    if ("selected" in $$props) $$invalidate(3, selected = $$new_props.selected);
  };

  var selected;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*selectedProp, value, $valueStore*/
    1538) {
       $$invalidate(3, selected = selectedProp === uninitializedValue ? value !== "" && $valueStore === value : selectedProp);
    }

    if ($$self.$$.dirty &
    /*selected, element*/
    12) {
       if (selected && element) {
        set_store_value(selectedText, $selectedText = element.textContent || "", $selectedText);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [use, value, element, selected, forwardEvents, valueStore, selectedText, $$props, className, selectedProp, $valueStore, slots, item_binding, $$scope];
}

var Option = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Option, _SvelteComponentDev);

  var _super = _createSuper$1(Option);

  function Option(options) {
    var _this;

    _classCallCheck(this, Option);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 0,
      class: 8,
      value: 1,
      selected: 9
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Option",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Option, [{
    key: "use",
    get: function get() {
      throw new Error("<Option>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Option>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      return this.$$.ctx[8];
    },
    set: function set(value) {
      throw new Error("<Option>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Option>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Option>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selected",
    get: function get() {
      throw new Error("<Option>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Option>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Option;
}(SvelteComponentDev);

var css_248z$1 = ".mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;position:absolute;bottom:16px;box-sizing:border-box;width:24px;height:24px;border:none;background-color:transparent;fill:currentColor;opacity:.54;text-decoration:none;cursor:pointer;user-select:none}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}";
styleInject(css_248z$1);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "../packages/select/icon/Icon.svelte";

function create_fragment$2(ctx) {
  var i;
  var i_class_value;
  var i_aria_hidden_value;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[8].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[7], null);
  var i_levels = [{
    class: i_class_value = "mdc-select__icon " +
    /*className*/
    ctx[1]
  }, {
    tabindex:
    /*tabindex*/
    ctx[2]
  }, {
    "aria-hidden": i_aria_hidden_value =
    /*tabindex*/
    ctx[2] === "-1" ? "true" : "false"
  }, exclude(
  /*$$props*/
  ctx[5], ["use", "class", "tabindex"])];
  var i_data = {};

  for (var _i = 0; _i < i_levels.length; _i += 1) {
    i_data = assign(i_data, i_levels[_i]);
  }

  var block = {
    c: function create() {
      i = element("i");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      i = claim_element(nodes, "I", {
        class: true,
        tabindex: true,
        "aria-hidden": true
      });
      var i_nodes = children(i);
      if (default_slot) default_slot.l(i_nodes);
      i_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(i, i_data);
      add_location(i, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);

      if (default_slot) {
        default_slot.m(i, null);
      }
      /*i_binding*/


      ctx[9](i);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, i,
        /*use*/
        ctx[0])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[4].call(null, i))];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        128) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[7], dirty, null, null);
        }
      }

      set_attributes(i, i_data = get_spread_update(i_levels, [(!current || dirty &
      /*className*/
      2 && i_class_value !== (i_class_value = "mdc-select__icon " +
      /*className*/
      ctx[1])) && {
        class: i_class_value
      }, (!current || dirty &
      /*tabindex*/
      4) && {
        tabindex:
        /*tabindex*/
        ctx[2]
      }, (!current || dirty &
      /*tabindex*/
      4 && i_aria_hidden_value !== (i_aria_hidden_value =
      /*tabindex*/
      ctx[2] === "-1" ? "true" : "false")) && {
        "aria-hidden": i_aria_hidden_value
      }, dirty &
      /*$$props*/
      32 && exclude(
      /*$$props*/
      ctx[5], ["use", "class", "tabindex"])]));
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

      ctx[9](null);
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
      _$$props4$role = _$$props4.role,
      role = _$$props4$role === void 0 ? undefined : _$$props4$role; // Intentionally left out of exclude call above.

  var _$$props5 = $$props,
      _$$props5$tabindex = _$$props5.tabindex,
      tabindex = _$$props5$tabindex === void 0 ? role !== undefined ? "0" : "-1" : _$$props5$tabindex;
  var element;
  var icon;
  onMount(function () {
    icon = new MDCSelectIcon(element);
  });
  onDestroy(function () {
    icon && icon.destroy();
  });

  function i_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(3, element);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("role" in $$new_props) $$invalidate(6, role = $$new_props.role);
    if ("tabindex" in $$new_props) $$invalidate(2, tabindex = $$new_props.tabindex);
    if ("$$scope" in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      MDCSelectIcon: MDCSelectIcon,
      onMount: onMount,
      onDestroy: onDestroy,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      role: role,
      tabindex: tabindex,
      element: element,
      icon: icon
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("role" in $$props) $$invalidate(6, role = $$new_props.role);
    if ("tabindex" in $$props) $$invalidate(2, tabindex = $$new_props.tabindex);
    if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
    if ("icon" in $$props) icon = $$new_props.icon;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, tabindex, element, forwardEvents, $$props, role, $$scope, slots, i_binding];
}

var Icon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Icon, _SvelteComponentDev);

  var _super = _createSuper$2(Icon);

  function Icon(options) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      use: 0,
      class: 1,
      role: 6,
      tabindex: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon",
      options: options,
      id: create_fragment$2.name
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
    key: "role",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tabindex",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Icon;
}(SvelteComponentDev);

var css_248z$2 = ".mdc-select-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;display:block;line-height:normal;margin:0;transition:opacity .18s cubic-bezier(.4,0,.2,1);opacity:0;will-change:opacity}.mdc-select-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-select-helper-text--persistent{transition:none;opacity:1;will-change:auto}";
styleInject(css_248z$2);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "../packages/select/helper-text/HelperText.svelte";

function create_fragment$3(ctx) {
  var p;
  var p_class_value;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[8].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[7], null);
  var p_levels = [{
    class: p_class_value = "\n    mdc-select-helper-text\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*persistent*/
    ctx[2] ? "mdc-select-helper-text--persistent" : "") + "\n    " + (
    /*validationMsg*/
    ctx[3] ? "mdc-select-helper-text--validation-msg" : "") + "\n  "
  }, {
    "aria-hidden": "true"
  }, exclude(
  /*$$props*/
  ctx[6], ["use", "class", "persistent", "validationMsg"])];
  var p_data = {};

  for (var i = 0; i < p_levels.length; i += 1) {
    p_data = assign(p_data, p_levels[i]);
  }

  var block = {
    c: function create() {
      p = element("p");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true,
        "aria-hidden": true
      });
      var p_nodes = children(p);
      if (default_slot) default_slot.l(p_nodes);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(p, p_data);
      add_location(p, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);

      if (default_slot) {
        default_slot.m(p, null);
      }
      /*p_binding*/


      ctx[9](p);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, p,
        /*use*/
        ctx[0])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[5].call(null, p))];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        128) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[7], dirty, null, null);
        }
      }

      set_attributes(p, p_data = get_spread_update(p_levels, [(!current || dirty &
      /*className, persistent, validationMsg*/
      14 && p_class_value !== (p_class_value = "\n    mdc-select-helper-text\n    " +
      /*className*/
      ctx[1] + "\n    " + (
      /*persistent*/
      ctx[2] ? "mdc-select-helper-text--persistent" : "") + "\n    " + (
      /*validationMsg*/
      ctx[3] ? "mdc-select-helper-text--validation-msg" : "") + "\n  ")) && {
        class: p_class_value
      }, {
        "aria-hidden": "true"
      }, dirty &
      /*$$props*/
      64 && exclude(
      /*$$props*/
      ctx[6], ["use", "class", "persistent", "validationMsg"])]));
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
      if (detaching) detach_dev(p);
      if (default_slot) default_slot.d(detaching);
      /*p_binding*/

      ctx[9](null);
      mounted = false;
      run_all(dispose);
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
  validate_slots("HelperText", slots, ['default']);
  var forwardEvents = forwardEventsBuilder(get_current_component());
  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;
  var _$$props4 = $$props,
      _$$props4$persistent = _$$props4.persistent,
      persistent = _$$props4$persistent === void 0 ? false : _$$props4$persistent;
  var _$$props5 = $$props,
      _$$props5$validationM = _$$props5.validationMsg,
      validationMsg = _$$props5$validationM === void 0 ? false : _$$props5$validationM;
  var element;
  var helperText;
  onMount(function () {
    helperText = new MDCSelectHelperText(element);
  });
  onDestroy(function () {
    helperText && helperText.destroy();
  });

  function p_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(4, element);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("persistent" in $$new_props) $$invalidate(2, persistent = $$new_props.persistent);
    if ("validationMsg" in $$new_props) $$invalidate(3, validationMsg = $$new_props.validationMsg);
    if ("$$scope" in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      MDCSelectHelperText: MDCSelectHelperText,
      onMount: onMount,
      onDestroy: onDestroy,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      persistent: persistent,
      validationMsg: validationMsg,
      element: element,
      helperText: helperText
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("persistent" in $$props) $$invalidate(2, persistent = $$new_props.persistent);
    if ("validationMsg" in $$props) $$invalidate(3, validationMsg = $$new_props.validationMsg);
    if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
    if ("helperText" in $$props) helperText = $$new_props.helperText;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, persistent, validationMsg, element, forwardEvents, $$props, $$scope, slots, p_binding];
}

var HelperText = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(HelperText, _SvelteComponentDev);

  var _super = _createSuper$3(HelperText);

  function HelperText(options) {
    var _this;

    _classCallCheck(this, HelperText);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      use: 0,
      class: 1,
      persistent: 2,
      validationMsg: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "HelperText",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(HelperText, [{
    key: "use",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "persistent",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "validationMsg",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return HelperText;
}(SvelteComponentDev);

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "src/routes/demo/select.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-bitxd9-style";
  style.textContent = ".margins.svelte-bitxd9.svelte-bitxd9{margin:18px 0 24px}.columns.svelte-bitxd9.svelte-bitxd9{display:flex;flex-wrap:wrap;justify-content:space-between}.columns.svelte-bitxd9>.svelte-bitxd9{margin-left:12px}.columns.svelte-bitxd9>.svelte-bitxd9:first-child{margin-left:0}.svelte-bitxd9 .demo-select-width{min-width:200px}.svelte-bitxd9 .shaped{border-radius:16px 16px 0 0}.svelte-bitxd9 .shaped-outlined .mdc-text-field__input{padding-left:32px;padding-right:0}.svelte-bitxd9 .shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:28px 0 0 28px;width:28px}.svelte-bitxd9 .shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 28px 28px 0}.svelte-bitxd9 .shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - 28px * 2)}.svelte-bitxd9 .shaped-outlined + .mdc-text-field-helper-line{padding-left:32px;padding-right:28px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnN2ZWx0ZSIsInNvdXJjZXMiOlsic2VsZWN0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5TZWxlY3QgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+U2VsZWN0PC9oMj5cblxuICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XCI+XG4gICAgPGRpdj5cbiAgICAgIDxTZWxlY3QgYmluZDp2YWx1ZT17dmFsdWVQcmVmaWxsZWR9IGxhYmVsPVwiU2VsZWN0IE1lbnVcIiBhbmNob3IkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgIHsvZWFjaH1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZVByZWZpbGxlZH08L3ByZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBTdGFuZGFyZDo8YnIgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgYmluZDp2YWx1ZT17dmFsdWVTdGFuZGFyZH0gbGFiZWw9XCJGcnVpdFwiIGFuY2hvciRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTdGFuZGFyZH08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IGJpbmQ6dmFsdWU9e3ZhbHVlU3RhbmRhcmRIZWxwZXJUZXh0fSBsYWJlbD1cIldpdGggSGVscGVyIFRleHRcIiBhbmNob3IkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8SGVscGVyVGV4dD5IZWxwZXIgdGV4dC48L0hlbHBlclRleHQ+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTdGFuZGFyZEhlbHBlclRleHR9PC9wcmU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCB3aXRoTGVhZGluZ0ljb24gYmluZDp2YWx1ZT17dmFsdWVTdGFuZGFyZExlYWRpbmdJY29ufSBsYWJlbD1cIkxlYWRpbmcgSWNvblwiIGFuY2hvciRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImljb25cIj48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXZlbnQ8L0ljb24+PC9zcGFuPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU3RhbmRhcmRMZWFkaW5nSWNvbn08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IGludmFsaWQgYmluZDp2YWx1ZT17dmFsdWVTdGFuZGFyZEludmFsaWR9IGxhYmVsPVwiSW52YWxpZFwiIGFuY2hvciRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTdGFuZGFyZEludmFsaWR9PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBGaWxsZWQ6PGJyIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IHZhcmlhbnQ9XCJmaWxsZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZUZpbGxlZH0gbGFiZWw9XCJGcnVpdFwiIGFuY2hvciRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVGaWxsZWR9PC9wcmU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVGaWxsZWRIZWxwZXJUZXh0fSBsYWJlbD1cIldpdGggSGVscGVyIFRleHRcIiBhbmNob3IkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8SGVscGVyVGV4dD5IZWxwZXIgdGV4dC48L0hlbHBlclRleHQ+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVGaWxsZWRIZWxwZXJUZXh0fTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgdmFyaWFudD1cImZpbGxlZFwiIHdpdGhMZWFkaW5nSWNvbiBiaW5kOnZhbHVlPXt2YWx1ZUZpbGxlZExlYWRpbmdJY29ufSBsYWJlbD1cIkxlYWRpbmcgSWNvblwiIGFuY2hvciRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImljb25cIj48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXZlbnQ8L0ljb24+PC9zcGFuPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlRmlsbGVkTGVhZGluZ0ljb259PC9wcmU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCB2YXJpYW50PVwiZmlsbGVkXCIgaW52YWxpZCBiaW5kOnZhbHVlPXt2YWx1ZUZpbGxlZEludmFsaWR9IGxhYmVsPVwiSW52YWxpZFwiIGFuY2hvciRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVGaWxsZWRJbnZhbGlkfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgT3V0bGluZWQ6PGJyIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlT3V0bGluZWR9IGxhYmVsPVwiRnJ1aXRcIiBhbmNob3IkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlT3V0bGluZWR9PC9wcmU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCB2YXJpYW50PVwib3V0bGluZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZU91dGxpbmVkSGVscGVyVGV4dH0gbGFiZWw9XCJXaXRoIEhlbHBlciBUZXh0XCIgYW5jaG9yJGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIiBtZW51JGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEhlbHBlclRleHQ+SGVscGVyIHRleHQuPC9IZWxwZXJUZXh0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlT3V0bGluZWRIZWxwZXJUZXh0fTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgdmFyaWFudD1cIm91dGxpbmVkXCIgd2l0aExlYWRpbmdJY29uIGJpbmQ6dmFsdWU9e3ZhbHVlT3V0bGluZWRMZWFkaW5nSWNvbn0gbGFiZWw9XCJMZWFkaW5nIEljb25cIiBhbmNob3IkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpY29uXCI+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmV2ZW50PC9JY29uPjwvc3Bhbj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZU91dGxpbmVkTGVhZGluZ0ljb259PC9wcmU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCB2YXJpYW50PVwib3V0bGluZWRcIiBpbnZhbGlkIGJpbmQ6dmFsdWU9e3ZhbHVlT3V0bGluZWRJbnZhbGlkfSBsYWJlbD1cIkludmFsaWRcIiBhbmNob3IkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlT3V0bGluZWRJbnZhbGlkfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgU2hhcGVkIEZpbGxlZDo8YnIgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWRcIiB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVTaGFwZWRGaWxsZWR9IGxhYmVsPVwiRnJ1aXRcIiBhbmNob3IkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU2hhcGVkRmlsbGVkfTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWRcIiB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVTaGFwZWRGaWxsZWRIZWxwZXJUZXh0fSBsYWJlbD1cIldpdGggSGVscGVyIFRleHRcIiBhbmNob3IkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8SGVscGVyVGV4dD5IZWxwZXIgdGV4dC48L0hlbHBlclRleHQ+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTaGFwZWRGaWxsZWRIZWxwZXJUZXh0fTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWRcIiB2YXJpYW50PVwiZmlsbGVkXCIgd2l0aExlYWRpbmdJY29uIGJpbmQ6dmFsdWU9e3ZhbHVlU2hhcGVkRmlsbGVkTGVhZGluZ0ljb259IGxhYmVsPVwiTGVhZGluZyBJY29uXCIgYW5jaG9yJGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIiBtZW51JGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaWNvblwiPjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5ldmVudDwvSWNvbj48L3NwYW4+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTaGFwZWRGaWxsZWRMZWFkaW5nSWNvbn08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IGNsYXNzPVwic2hhcGVkXCIgdmFyaWFudD1cImZpbGxlZFwiIGludmFsaWQgYmluZDp2YWx1ZT17dmFsdWVTaGFwZWRGaWxsZWRJbnZhbGlkfSBsYWJlbD1cIkludmFsaWRcIiBhbmNob3IkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU2hhcGVkRmlsbGVkSW52YWxpZH08L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIFNoYXBlZCBPdXRsaW5lZDo8YnIgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWRcIiB2YXJpYW50PVwib3V0bGluZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZVNoYXBlZE91dGxpbmVkfSBsYWJlbD1cIkZydWl0XCIgYW5jaG9yJGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIiBtZW51JGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZVNoYXBlZE91dGxpbmVkfTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWRcIiB2YXJpYW50PVwib3V0bGluZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZVNoYXBlZE91dGxpbmVkSGVscGVyVGV4dH0gbGFiZWw9XCJXaXRoIEhlbHBlciBUZXh0XCIgYW5jaG9yJGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIiBtZW51JGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEhlbHBlclRleHQ+SGVscGVyIHRleHQuPC9IZWxwZXJUZXh0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU2hhcGVkT3V0bGluZWRIZWxwZXJUZXh0fTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWRcIiB2YXJpYW50PVwib3V0bGluZWRcIiB3aXRoTGVhZGluZ0ljb24gYmluZDp2YWx1ZT17dmFsdWVTaGFwZWRPdXRsaW5lZExlYWRpbmdJY29ufSBsYWJlbD1cIkxlYWRpbmcgSWNvblwiIGFuY2hvciRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImljb25cIj48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXZlbnQ8L0ljb24+PC9zcGFuPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU2hhcGVkT3V0bGluZWRMZWFkaW5nSWNvbn08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IGNsYXNzPVwic2hhcGVkLW91dGxpbmVkXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgaW52YWxpZCBiaW5kOnZhbHVlPXt2YWx1ZVNoYXBlZE91dGxpbmVkSW52YWxpZH0gbGFiZWw9XCJJbnZhbGlkXCIgYW5jaG9yJGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIiBtZW51JGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZVNoYXBlZE91dGxpbmVkSW52YWxpZH08L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNlbGVjdCwge09wdGlvbn0gZnJvbSAnQHNtdWkvc2VsZWN0JztcbiAgaW1wb3J0IEljb24gZnJvbSAnQHNtdWkvc2VsZWN0L2ljb24vaW5kZXgnO1xuICBpbXBvcnQgSGVscGVyVGV4dCBmcm9tICdAc211aS9zZWxlY3QvaGVscGVyLXRleHQvaW5kZXgnO1xuXG4gIGxldCBmcnVpdHMgPSBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnLCAnTWFuZ28nXTtcblxuICBsZXQgdmFsdWVQcmVmaWxsZWQgPSAnT3JhbmdlJztcbiAgbGV0IHZhbHVlU3RhbmRhcmQgPSAnJztcbiAgbGV0IHZhbHVlU3RhbmRhcmRIZWxwZXJUZXh0ID0gJyc7XG4gIGxldCB2YWx1ZVN0YW5kYXJkTGVhZGluZ0ljb24gPSAnJztcbiAgbGV0IHZhbHVlU3RhbmRhcmRJbnZhbGlkID0gJyc7XG4gIGxldCB2YWx1ZUZpbGxlZCA9ICcnO1xuICBsZXQgdmFsdWVGaWxsZWRIZWxwZXJUZXh0ID0gJyc7XG4gIGxldCB2YWx1ZUZpbGxlZExlYWRpbmdJY29uID0gJyc7XG4gIGxldCB2YWx1ZUZpbGxlZEludmFsaWQgPSAnJztcbiAgbGV0IHZhbHVlT3V0bGluZWQgPSAnJztcbiAgbGV0IHZhbHVlT3V0bGluZWRIZWxwZXJUZXh0ID0gJyc7XG4gIGxldCB2YWx1ZU91dGxpbmVkTGVhZGluZ0ljb24gPSAnJztcbiAgbGV0IHZhbHVlT3V0bGluZWRJbnZhbGlkID0gJyc7XG4gIGxldCB2YWx1ZVNoYXBlZEZpbGxlZCA9ICcnO1xuICBsZXQgdmFsdWVTaGFwZWRGaWxsZWRIZWxwZXJUZXh0ID0gJyc7XG4gIGxldCB2YWx1ZVNoYXBlZEZpbGxlZExlYWRpbmdJY29uID0gJyc7XG4gIGxldCB2YWx1ZVNoYXBlZEZpbGxlZEludmFsaWQgPSAnJztcbiAgbGV0IHZhbHVlU2hhcGVkT3V0bGluZWQgPSAnJztcbiAgbGV0IHZhbHVlU2hhcGVkT3V0bGluZWRIZWxwZXJUZXh0ID0gJyc7XG4gIGxldCB2YWx1ZVNoYXBlZE91dGxpbmVkTGVhZGluZ0ljb24gPSAnJztcbiAgbGV0IHZhbHVlU2hhcGVkT3V0bGluZWRJbnZhbGlkID0gJyc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAubWFyZ2lucyB7XG4gICAgbWFyZ2luOiAxOHB4IDAgMjRweDtcbiAgfVxuXG4gIC5jb2x1bW5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuY29sdW1ucyA+ICoge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG4gIC5jb2x1bW5zID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAqIDpnbG9iYWwoLmRlbW8tc2VsZWN0LXdpZHRoKSB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgfVxuXG4gICogOmdsb2JhbCguc2hhcGVkKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbiAgfVxuXG4gICogOmdsb2JhbCguc2hhcGVkLW91dGxpbmVkIC5tZGMtdGV4dC1maWVsZF9faW5wdXQpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICAqIDpnbG9iYWwoLnNoYXBlZC1vdXRsaW5lZCAubWRjLW5vdGNoZWQtb3V0bGluZSAubWRjLW5vdGNoZWQtb3V0bGluZV9fbGVhZGluZykge1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHggMCAwIDI4cHg7XG4gICAgd2lkdGg6IDI4cHg7XG4gIH1cbiAgKiA6Z2xvYmFsKC5zaGFwZWQtb3V0bGluZWQgLm1kYy1ub3RjaGVkLW91dGxpbmUgLm1kYy1ub3RjaGVkLW91dGxpbmVfX3RyYWlsaW5nKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAyOHB4IDI4cHggMDtcbiAgfVxuICAqIDpnbG9iYWwoLnNoYXBlZC1vdXRsaW5lZCAubWRjLW5vdGNoZWQtb3V0bGluZSAubWRjLW5vdGNoZWQtb3V0bGluZV9fbm90Y2gpIHtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHggKiAyKTtcbiAgfVxuICAqIDpnbG9iYWwoLnNoYXBlZC1vdXRsaW5lZCArIC5tZGMtdGV4dC1maWVsZC1oZWxwZXItbGluZSkge1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1VEUsUUFBUSw0QkFBQyxDQUFDLEFBQ1IsTUFBTSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxBQUNyQixDQUFDLEFBRUQsUUFBUSw0QkFBQyxDQUFDLEFBQ1IsT0FBTyxDQUFFLElBQUksQ0FDYixTQUFTLENBQUUsSUFBSSxDQUNmLGVBQWUsQ0FBRSxhQUFhLEFBQ2hDLENBQUMsQUFFRCxzQkFBUSxDQUFHLGNBQUUsQ0FBQyxBQUNaLFdBQVcsQ0FBRSxJQUFJLEFBQ25CLENBQUMsQUFDRCxzQkFBUSxDQUFHLGNBQUMsWUFBWSxBQUFDLENBQUMsQUFDeEIsV0FBVyxDQUFFLENBQUMsQUFDaEIsQ0FBQyxBQUVELGNBQUMsQ0FBQyxBQUFRLGtCQUFrQixBQUFFLENBQUMsQUFDN0IsU0FBUyxDQUFFLEtBQUssQUFDbEIsQ0FBQyxBQUVELGNBQUMsQ0FBQyxBQUFRLE9BQU8sQUFBRSxDQUFDLEFBQ2xCLGFBQWEsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQzlCLENBQUMsQUFFRCxjQUFDLENBQUMsQUFBUSx1Q0FBdUMsQUFBRSxDQUFDLEFBQ2xELFlBQVksQ0FBRSxJQUFJLENBQ2xCLGFBQWEsQ0FBRSxDQUFDLEFBQ2xCLENBQUMsQUFDRCxjQUFDLENBQUMsQUFBUSxtRUFBbUUsQUFBRSxDQUFDLEFBQzlFLGFBQWEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVCLEtBQUssQ0FBRSxJQUFJLEFBQ2IsQ0FBQyxBQUNELGNBQUMsQ0FBQyxBQUFRLG9FQUFvRSxBQUFFLENBQUMsQUFDL0UsYUFBYSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQUFDOUIsQ0FBQyxBQUNELGNBQUMsQ0FBQyxBQUFRLGlFQUFpRSxBQUFFLENBQUMsQUFDNUUsU0FBUyxDQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUNsQyxDQUFDLEFBQ0QsY0FBQyxDQUFDLEFBQVEsOENBQThDLEFBQUUsQ0FBQyxBQUN6RCxZQUFZLENBQUUsSUFBSSxDQUNsQixhQUFhLENBQUUsSUFBSSxBQUNyQixDQUFDIn0= */";
  append_dev(document.head, style);
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_4(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_5(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_6(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_7(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_8(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_9(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_10(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_11(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_12(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_13(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_14(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_15(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_16(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_17(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_18(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_19(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}

function get_each_context_20(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
} // (12:10) <Option value={fruit}>


function create_default_slot_51(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_51.name,
    type: "slot",
    source: "(12:10) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (11:8) {#each fruits as fruit}


function create_each_block_20(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_51]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_20.name,
    type: "each",
    source: "(11:8) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (10:6) <Select bind:value={valuePrefilled} label="Select Menu" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_50(ctx) {
  var each_1_anchor;
  var current;
  var each_value_20 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_20);
  var each_blocks = [];

  for (var i = 0; i < each_value_20.length; i += 1) {
    each_blocks[i] = create_each_block_20(get_each_context_20(ctx, each_value_20, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_20 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_20);

        var _i4;

        for (_i4 = 0; _i4 < each_value_20.length; _i4 += 1) {
          var child_ctx = get_each_context_20(ctx, each_value_20, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block_20(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i4 = each_value_20.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value_20.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_50.name,
    type: "slot",
    source: "(10:6) <Select bind:value={valuePrefilled} label=\\\"Select Menu\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (28:12) <Option value={fruit}>


function create_default_slot_49(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_49.name,
    type: "slot",
    source: "(28:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (27:10) {#each fruits as fruit}


function create_each_block_19(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_49]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_19.name,
    type: "each",
    source: "(27:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (25:8) <Select bind:value={valueStandard} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_48(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_19 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_19);
  var each_blocks = [];

  for (var i = 0; i < each_value_19.length; i += 1) {
    each_blocks[i] = create_each_block_19(get_each_context_19(ctx, each_value_19, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        each_blocks[_i9].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_19 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_19);

        var _i10;

        for (_i10 = 0; _i10 < each_value_19.length; _i10 += 1) {
          var child_ctx = get_each_context_19(ctx, each_value_19, _i10);

          if (each_blocks[_i10]) {
            each_blocks[_i10].p(child_ctx, dirty);

            transition_in(each_blocks[_i10], 1);
          } else {
            each_blocks[_i10] = create_each_block_19(child_ctx);

            each_blocks[_i10].c();

            transition_in(each_blocks[_i10], 1);

            each_blocks[_i10].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i10 = each_value_19.length; _i10 < each_blocks.length; _i10 += 1) {
          out(_i10);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i11 = 0; _i11 < each_value_19.length; _i11 += 1) {
        transition_in(each_blocks[_i11]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i12 = 0; _i12 < each_blocks.length; _i12 += 1) {
        transition_out(each_blocks[_i12]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_48.name,
    type: "slot",
    source: "(25:8) <Select bind:value={valueStandard} label=\\\"Fruit\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (39:12) <Option value={fruit}>


function create_default_slot_47(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_47.name,
    type: "slot",
    source: "(39:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (38:10) {#each fruits as fruit}


function create_each_block_18(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_47]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_18.name,
    type: "each",
    source: "(38:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (36:8) <Select bind:value={valueStandardHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_46(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_18 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_18);
  var each_blocks = [];

  for (var i = 0; i < each_value_18.length; i += 1) {
    each_blocks[i] = create_each_block_18(get_each_context_18(ctx, each_value_18, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i13 = 0; _i13 < each_blocks.length; _i13 += 1) {
        each_blocks[_i13].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i14 = 0; _i14 < each_blocks.length; _i14 += 1) {
        each_blocks[_i14].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i15 = 0; _i15 < each_blocks.length; _i15 += 1) {
        each_blocks[_i15].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_18 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_18);

        var _i16;

        for (_i16 = 0; _i16 < each_value_18.length; _i16 += 1) {
          var child_ctx = get_each_context_18(ctx, each_value_18, _i16);

          if (each_blocks[_i16]) {
            each_blocks[_i16].p(child_ctx, dirty);

            transition_in(each_blocks[_i16], 1);
          } else {
            each_blocks[_i16] = create_each_block_18(child_ctx);

            each_blocks[_i16].c();

            transition_in(each_blocks[_i16], 1);

            each_blocks[_i16].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i16 = each_value_18.length; _i16 < each_blocks.length; _i16 += 1) {
          out(_i16);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i17 = 0; _i17 < each_value_18.length; _i17 += 1) {
        transition_in(each_blocks[_i17]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i18 = 0; _i18 < each_blocks.length; _i18 += 1) {
        transition_out(each_blocks[_i18]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_46.name,
    type: "slot",
    source: "(36:8) <Select bind:value={valueStandardHelperText} label=\\\"With Helper Text\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (42:8) <HelperText>


function create_default_slot_45(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    id: create_default_slot_45.name,
    type: "slot",
    source: "(42:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (49:28) <Icon class="material-icons">


function create_default_slot_44(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    id: create_default_slot_44.name,
    type: "slot",
    source: "(49:28) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (49:10) <span slot="icon">


function create_icon_slot_4(ctx) {
  var span;
  var icon;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_44]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(icon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      });
      var span_nodes = children(span);
      claim_component(icon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-bitxd9");
      add_location(span, file$3, 48, 10, 1542);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
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
      if (detaching) detach_dev(span);
      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot_4.name,
    type: "slot",
    source: "(49:10) <span slot=\\\"icon\\\">",
    ctx: ctx
  });
  return block;
} // (52:12) <Option value={fruit}>


function create_default_slot_43(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_43.name,
    type: "slot",
    source: "(52:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (51:10) {#each fruits as fruit}


function create_each_block_17(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_17.name,
    type: "each",
    source: "(51:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (48:8) <Select withLeadingIcon bind:value={valueStandardLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_42(ctx) {
  var t0;
  var option;
  var t1;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_17 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_17);
  var each_blocks = [];

  for (var i = 0; i < each_value_17.length; i += 1) {
    each_blocks[i] = create_each_block_17(get_each_context_17(ctx, each_value_17, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      create_component(option.$$.fragment);
      t1 = space();

      for (var _i19 = 0; _i19 < each_blocks.length; _i19 += 1) {
        each_blocks[_i19].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      claim_component(option.$$.fragment, nodes);
      t1 = claim_space(nodes);

      for (var _i20 = 0; _i20 < each_blocks.length; _i20 += 1) {
        each_blocks[_i20].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i21 = 0; _i21 < each_blocks.length; _i21 += 1) {
        each_blocks[_i21].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_17 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_17);

        var _i22;

        for (_i22 = 0; _i22 < each_value_17.length; _i22 += 1) {
          var child_ctx = get_each_context_17(ctx, each_value_17, _i22);

          if (each_blocks[_i22]) {
            each_blocks[_i22].p(child_ctx, dirty);

            transition_in(each_blocks[_i22], 1);
          } else {
            each_blocks[_i22] = create_each_block_17(child_ctx);

            each_blocks[_i22].c();

            transition_in(each_blocks[_i22], 1);

            each_blocks[_i22].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i22 = each_value_17.length; _i22 < each_blocks.length; _i22 += 1) {
          out(_i22);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i23 = 0; _i23 < each_value_17.length; _i23 += 1) {
        transition_in(each_blocks[_i23]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i24 = 0; _i24 < each_blocks.length; _i24 += 1) {
        transition_out(each_blocks[_i24]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      destroy_component(option, detaching);
      if (detaching) detach_dev(t1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_42.name,
    type: "slot",
    source: "(48:8) <Select withLeadingIcon bind:value={valueStandardLeadingIcon} label=\\\"Leading Icon\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (63:12) <Option value={fruit}>


function create_default_slot_41(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_41.name,
    type: "slot",
    source: "(63:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (62:10) {#each fruits as fruit}


function create_each_block_16(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_41]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_16.name,
    type: "each",
    source: "(62:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (60:8) <Select invalid bind:value={valueStandardInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_40(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_16 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_16);
  var each_blocks = [];

  for (var i = 0; i < each_value_16.length; i += 1) {
    each_blocks[i] = create_each_block_16(get_each_context_16(ctx, each_value_16, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i25 = 0; _i25 < each_blocks.length; _i25 += 1) {
        each_blocks[_i25].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i26 = 0; _i26 < each_blocks.length; _i26 += 1) {
        each_blocks[_i26].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i27 = 0; _i27 < each_blocks.length; _i27 += 1) {
        each_blocks[_i27].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_16 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_16);

        var _i28;

        for (_i28 = 0; _i28 < each_value_16.length; _i28 += 1) {
          var child_ctx = get_each_context_16(ctx, each_value_16, _i28);

          if (each_blocks[_i28]) {
            each_blocks[_i28].p(child_ctx, dirty);

            transition_in(each_blocks[_i28], 1);
          } else {
            each_blocks[_i28] = create_each_block_16(child_ctx);

            each_blocks[_i28].c();

            transition_in(each_blocks[_i28], 1);

            each_blocks[_i28].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i28 = each_value_16.length; _i28 < each_blocks.length; _i28 += 1) {
          out(_i28);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i29 = 0; _i29 < each_value_16.length; _i29 += 1) {
        transition_in(each_blocks[_i29]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i30 = 0; _i30 < each_blocks.length; _i30 += 1) {
        transition_out(each_blocks[_i30]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_40.name,
    type: "slot",
    source: "(60:8) <Select invalid bind:value={valueStandardInvalid} label=\\\"Invalid\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (80:12) <Option value={fruit}>


function create_default_slot_39(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_39.name,
    type: "slot",
    source: "(80:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (79:10) {#each fruits as fruit}


function create_each_block_15(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_39]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_15.name,
    type: "each",
    source: "(79:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (77:8) <Select variant="filled" bind:value={valueFilled} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_38(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_15 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_15);
  var each_blocks = [];

  for (var i = 0; i < each_value_15.length; i += 1) {
    each_blocks[i] = create_each_block_15(get_each_context_15(ctx, each_value_15, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i31 = 0; _i31 < each_blocks.length; _i31 += 1) {
        each_blocks[_i31].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i32 = 0; _i32 < each_blocks.length; _i32 += 1) {
        each_blocks[_i32].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i33 = 0; _i33 < each_blocks.length; _i33 += 1) {
        each_blocks[_i33].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_15 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_15);

        var _i34;

        for (_i34 = 0; _i34 < each_value_15.length; _i34 += 1) {
          var child_ctx = get_each_context_15(ctx, each_value_15, _i34);

          if (each_blocks[_i34]) {
            each_blocks[_i34].p(child_ctx, dirty);

            transition_in(each_blocks[_i34], 1);
          } else {
            each_blocks[_i34] = create_each_block_15(child_ctx);

            each_blocks[_i34].c();

            transition_in(each_blocks[_i34], 1);

            each_blocks[_i34].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i34 = each_value_15.length; _i34 < each_blocks.length; _i34 += 1) {
          out(_i34);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i35 = 0; _i35 < each_value_15.length; _i35 += 1) {
        transition_in(each_blocks[_i35]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i36 = 0; _i36 < each_blocks.length; _i36 += 1) {
        transition_out(each_blocks[_i36]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_38.name,
    type: "slot",
    source: "(77:8) <Select variant=\\\"filled\\\" bind:value={valueFilled} label=\\\"Fruit\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (91:12) <Option value={fruit}>


function create_default_slot_37(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_37.name,
    type: "slot",
    source: "(91:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (90:10) {#each fruits as fruit}


function create_each_block_14(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_37]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_14.name,
    type: "each",
    source: "(90:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (88:8) <Select variant="filled" bind:value={valueFilledHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_36(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_14 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_14);
  var each_blocks = [];

  for (var i = 0; i < each_value_14.length; i += 1) {
    each_blocks[i] = create_each_block_14(get_each_context_14(ctx, each_value_14, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i37 = 0; _i37 < each_blocks.length; _i37 += 1) {
        each_blocks[_i37].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i38 = 0; _i38 < each_blocks.length; _i38 += 1) {
        each_blocks[_i38].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i39 = 0; _i39 < each_blocks.length; _i39 += 1) {
        each_blocks[_i39].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_14 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_14);

        var _i40;

        for (_i40 = 0; _i40 < each_value_14.length; _i40 += 1) {
          var child_ctx = get_each_context_14(ctx, each_value_14, _i40);

          if (each_blocks[_i40]) {
            each_blocks[_i40].p(child_ctx, dirty);

            transition_in(each_blocks[_i40], 1);
          } else {
            each_blocks[_i40] = create_each_block_14(child_ctx);

            each_blocks[_i40].c();

            transition_in(each_blocks[_i40], 1);

            each_blocks[_i40].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i40 = each_value_14.length; _i40 < each_blocks.length; _i40 += 1) {
          out(_i40);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i41 = 0; _i41 < each_value_14.length; _i41 += 1) {
        transition_in(each_blocks[_i41]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i42 = 0; _i42 < each_blocks.length; _i42 += 1) {
        transition_out(each_blocks[_i42]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_36.name,
    type: "slot",
    source: "(88:8) <Select variant=\\\"filled\\\" bind:value={valueFilledHelperText} label=\\\"With Helper Text\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (94:8) <HelperText>


function create_default_slot_35(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    id: create_default_slot_35.name,
    type: "slot",
    source: "(94:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (101:28) <Icon class="material-icons">


function create_default_slot_34(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    source: "(101:28) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (101:10) <span slot="icon">


function create_icon_slot_3(ctx) {
  var span;
  var icon;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
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
      span = element("span");
      create_component(icon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      });
      var span_nodes = children(span);
      claim_component(icon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-bitxd9");
      add_location(span, file$3, 100, 10, 3355);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
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
      if (detaching) detach_dev(span);
      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot_3.name,
    type: "slot",
    source: "(101:10) <span slot=\\\"icon\\\">",
    ctx: ctx
  });
  return block;
} // (104:12) <Option value={fruit}>


function create_default_slot_33(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(104:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (103:10) {#each fruits as fruit}


function create_each_block_13(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_13.name,
    type: "each",
    source: "(103:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (100:8) <Select variant="filled" withLeadingIcon bind:value={valueFilledLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_32(ctx) {
  var t0;
  var option;
  var t1;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_13 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_13);
  var each_blocks = [];

  for (var i = 0; i < each_value_13.length; i += 1) {
    each_blocks[i] = create_each_block_13(get_each_context_13(ctx, each_value_13, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      create_component(option.$$.fragment);
      t1 = space();

      for (var _i43 = 0; _i43 < each_blocks.length; _i43 += 1) {
        each_blocks[_i43].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      claim_component(option.$$.fragment, nodes);
      t1 = claim_space(nodes);

      for (var _i44 = 0; _i44 < each_blocks.length; _i44 += 1) {
        each_blocks[_i44].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i45 = 0; _i45 < each_blocks.length; _i45 += 1) {
        each_blocks[_i45].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_13 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_13);

        var _i46;

        for (_i46 = 0; _i46 < each_value_13.length; _i46 += 1) {
          var child_ctx = get_each_context_13(ctx, each_value_13, _i46);

          if (each_blocks[_i46]) {
            each_blocks[_i46].p(child_ctx, dirty);

            transition_in(each_blocks[_i46], 1);
          } else {
            each_blocks[_i46] = create_each_block_13(child_ctx);

            each_blocks[_i46].c();

            transition_in(each_blocks[_i46], 1);

            each_blocks[_i46].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i46 = each_value_13.length; _i46 < each_blocks.length; _i46 += 1) {
          out(_i46);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i47 = 0; _i47 < each_value_13.length; _i47 += 1) {
        transition_in(each_blocks[_i47]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i48 = 0; _i48 < each_blocks.length; _i48 += 1) {
        transition_out(each_blocks[_i48]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      destroy_component(option, detaching);
      if (detaching) detach_dev(t1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_32.name,
    type: "slot",
    source: "(100:8) <Select variant=\\\"filled\\\" withLeadingIcon bind:value={valueFilledLeadingIcon} label=\\\"Leading Icon\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (115:12) <Option value={fruit}>


function create_default_slot_31(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(115:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (114:10) {#each fruits as fruit}


function create_each_block_12(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
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
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_12.name,
    type: "each",
    source: "(114:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (112:8) <Select variant="filled" invalid bind:value={valueFilledInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_30(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_12 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_12);
  var each_blocks = [];

  for (var i = 0; i < each_value_12.length; i += 1) {
    each_blocks[i] = create_each_block_12(get_each_context_12(ctx, each_value_12, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i49 = 0; _i49 < each_blocks.length; _i49 += 1) {
        each_blocks[_i49].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i50 = 0; _i50 < each_blocks.length; _i50 += 1) {
        each_blocks[_i50].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i51 = 0; _i51 < each_blocks.length; _i51 += 1) {
        each_blocks[_i51].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_12 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_12);

        var _i52;

        for (_i52 = 0; _i52 < each_value_12.length; _i52 += 1) {
          var child_ctx = get_each_context_12(ctx, each_value_12, _i52);

          if (each_blocks[_i52]) {
            each_blocks[_i52].p(child_ctx, dirty);

            transition_in(each_blocks[_i52], 1);
          } else {
            each_blocks[_i52] = create_each_block_12(child_ctx);

            each_blocks[_i52].c();

            transition_in(each_blocks[_i52], 1);

            each_blocks[_i52].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i52 = each_value_12.length; _i52 < each_blocks.length; _i52 += 1) {
          out(_i52);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i53 = 0; _i53 < each_value_12.length; _i53 += 1) {
        transition_in(each_blocks[_i53]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i54 = 0; _i54 < each_blocks.length; _i54 += 1) {
        transition_out(each_blocks[_i54]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_30.name,
    type: "slot",
    source: "(112:8) <Select variant=\\\"filled\\\" invalid bind:value={valueFilledInvalid} label=\\\"Invalid\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (132:12) <Option value={fruit}>


function create_default_slot_29(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_29.name,
    type: "slot",
    source: "(132:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (131:10) {#each fruits as fruit}


function create_each_block_11(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
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
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_11.name,
    type: "each",
    source: "(131:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (129:8) <Select variant="outlined" bind:value={valueOutlined} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_28(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_11 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_11);
  var each_blocks = [];

  for (var i = 0; i < each_value_11.length; i += 1) {
    each_blocks[i] = create_each_block_11(get_each_context_11(ctx, each_value_11, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i55 = 0; _i55 < each_blocks.length; _i55 += 1) {
        each_blocks[_i55].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i56 = 0; _i56 < each_blocks.length; _i56 += 1) {
        each_blocks[_i56].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i57 = 0; _i57 < each_blocks.length; _i57 += 1) {
        each_blocks[_i57].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_11 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_11);

        var _i58;

        for (_i58 = 0; _i58 < each_value_11.length; _i58 += 1) {
          var child_ctx = get_each_context_11(ctx, each_value_11, _i58);

          if (each_blocks[_i58]) {
            each_blocks[_i58].p(child_ctx, dirty);

            transition_in(each_blocks[_i58], 1);
          } else {
            each_blocks[_i58] = create_each_block_11(child_ctx);

            each_blocks[_i58].c();

            transition_in(each_blocks[_i58], 1);

            each_blocks[_i58].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i58 = each_value_11.length; _i58 < each_blocks.length; _i58 += 1) {
          out(_i58);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i59 = 0; _i59 < each_value_11.length; _i59 += 1) {
        transition_in(each_blocks[_i59]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i60 = 0; _i60 < each_blocks.length; _i60 += 1) {
        transition_out(each_blocks[_i60]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_28.name,
    type: "slot",
    source: "(129:8) <Select variant=\\\"outlined\\\" bind:value={valueOutlined} label=\\\"Fruit\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (143:12) <Option value={fruit}>


function create_default_slot_27(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(143:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (142:10) {#each fruits as fruit}


function create_each_block_10(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_10.name,
    type: "each",
    source: "(142:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (140:8) <Select variant="outlined" bind:value={valueOutlinedHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_26(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_10 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_10);
  var each_blocks = [];

  for (var i = 0; i < each_value_10.length; i += 1) {
    each_blocks[i] = create_each_block_10(get_each_context_10(ctx, each_value_10, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i61 = 0; _i61 < each_blocks.length; _i61 += 1) {
        each_blocks[_i61].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i62 = 0; _i62 < each_blocks.length; _i62 += 1) {
        each_blocks[_i62].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i63 = 0; _i63 < each_blocks.length; _i63 += 1) {
        each_blocks[_i63].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_10 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_10);

        var _i64;

        for (_i64 = 0; _i64 < each_value_10.length; _i64 += 1) {
          var child_ctx = get_each_context_10(ctx, each_value_10, _i64);

          if (each_blocks[_i64]) {
            each_blocks[_i64].p(child_ctx, dirty);

            transition_in(each_blocks[_i64], 1);
          } else {
            each_blocks[_i64] = create_each_block_10(child_ctx);

            each_blocks[_i64].c();

            transition_in(each_blocks[_i64], 1);

            each_blocks[_i64].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i64 = each_value_10.length; _i64 < each_blocks.length; _i64 += 1) {
          out(_i64);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i65 = 0; _i65 < each_value_10.length; _i65 += 1) {
        transition_in(each_blocks[_i65]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i66 = 0; _i66 < each_blocks.length; _i66 += 1) {
        transition_out(each_blocks[_i66]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_26.name,
    type: "slot",
    source: "(140:8) <Select variant=\\\"outlined\\\" bind:value={valueOutlinedHelperText} label=\\\"With Helper Text\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (146:8) <HelperText>


function create_default_slot_25(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    id: create_default_slot_25.name,
    type: "slot",
    source: "(146:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (153:28) <Icon class="material-icons">


function create_default_slot_24(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    source: "(153:28) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (153:10) <span slot="icon">


function create_icon_slot_2(ctx) {
  var span;
  var icon;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
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
      span = element("span");
      create_component(icon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      });
      var span_nodes = children(span);
      claim_component(icon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-bitxd9");
      add_location(span, file$3, 152, 10, 5197);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
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
      if (detaching) detach_dev(span);
      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot_2.name,
    type: "slot",
    source: "(153:10) <span slot=\\\"icon\\\">",
    ctx: ctx
  });
  return block;
} // (156:12) <Option value={fruit}>


function create_default_slot_23(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(156:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (155:10) {#each fruits as fruit}


function create_each_block_9(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_23]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_9.name,
    type: "each",
    source: "(155:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (152:8) <Select variant="outlined" withLeadingIcon bind:value={valueOutlinedLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_22(ctx) {
  var t0;
  var option;
  var t1;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_9 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_9);
  var each_blocks = [];

  for (var i = 0; i < each_value_9.length; i += 1) {
    each_blocks[i] = create_each_block_9(get_each_context_9(ctx, each_value_9, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      create_component(option.$$.fragment);
      t1 = space();

      for (var _i67 = 0; _i67 < each_blocks.length; _i67 += 1) {
        each_blocks[_i67].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      claim_component(option.$$.fragment, nodes);
      t1 = claim_space(nodes);

      for (var _i68 = 0; _i68 < each_blocks.length; _i68 += 1) {
        each_blocks[_i68].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i69 = 0; _i69 < each_blocks.length; _i69 += 1) {
        each_blocks[_i69].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_9 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_9);

        var _i70;

        for (_i70 = 0; _i70 < each_value_9.length; _i70 += 1) {
          var child_ctx = get_each_context_9(ctx, each_value_9, _i70);

          if (each_blocks[_i70]) {
            each_blocks[_i70].p(child_ctx, dirty);

            transition_in(each_blocks[_i70], 1);
          } else {
            each_blocks[_i70] = create_each_block_9(child_ctx);

            each_blocks[_i70].c();

            transition_in(each_blocks[_i70], 1);

            each_blocks[_i70].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i70 = each_value_9.length; _i70 < each_blocks.length; _i70 += 1) {
          out(_i70);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i71 = 0; _i71 < each_value_9.length; _i71 += 1) {
        transition_in(each_blocks[_i71]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i72 = 0; _i72 < each_blocks.length; _i72 += 1) {
        transition_out(each_blocks[_i72]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      destroy_component(option, detaching);
      if (detaching) detach_dev(t1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(152:8) <Select variant=\\\"outlined\\\" withLeadingIcon bind:value={valueOutlinedLeadingIcon} label=\\\"Leading Icon\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (167:12) <Option value={fruit}>


function create_default_slot_21(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(167:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (166:10) {#each fruits as fruit}


function create_each_block_8(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_8.name,
    type: "each",
    source: "(166:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (164:8) <Select variant="outlined" invalid bind:value={valueOutlinedInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_20(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_8 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_8);
  var each_blocks = [];

  for (var i = 0; i < each_value_8.length; i += 1) {
    each_blocks[i] = create_each_block_8(get_each_context_8(ctx, each_value_8, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i73 = 0; _i73 < each_blocks.length; _i73 += 1) {
        each_blocks[_i73].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i74 = 0; _i74 < each_blocks.length; _i74 += 1) {
        each_blocks[_i74].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i75 = 0; _i75 < each_blocks.length; _i75 += 1) {
        each_blocks[_i75].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_8 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_8);

        var _i76;

        for (_i76 = 0; _i76 < each_value_8.length; _i76 += 1) {
          var child_ctx = get_each_context_8(ctx, each_value_8, _i76);

          if (each_blocks[_i76]) {
            each_blocks[_i76].p(child_ctx, dirty);

            transition_in(each_blocks[_i76], 1);
          } else {
            each_blocks[_i76] = create_each_block_8(child_ctx);

            each_blocks[_i76].c();

            transition_in(each_blocks[_i76], 1);

            each_blocks[_i76].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i76 = each_value_8.length; _i76 < each_blocks.length; _i76 += 1) {
          out(_i76);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i77 = 0; _i77 < each_value_8.length; _i77 += 1) {
        transition_in(each_blocks[_i77]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i78 = 0; _i78 < each_blocks.length; _i78 += 1) {
        transition_out(each_blocks[_i78]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(164:8) <Select variant=\\\"outlined\\\" invalid bind:value={valueOutlinedInvalid} label=\\\"Invalid\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (184:12) <Option value={fruit}>


function create_default_slot_19(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(184:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (183:10) {#each fruits as fruit}


function create_each_block_7(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_7.name,
    type: "each",
    source: "(183:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (181:8) <Select class="shaped" variant="filled" bind:value={valueShapedFilled} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_18(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_7 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_7);
  var each_blocks = [];

  for (var i = 0; i < each_value_7.length; i += 1) {
    each_blocks[i] = create_each_block_7(get_each_context_7(ctx, each_value_7, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i79 = 0; _i79 < each_blocks.length; _i79 += 1) {
        each_blocks[_i79].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i80 = 0; _i80 < each_blocks.length; _i80 += 1) {
        each_blocks[_i80].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i81 = 0; _i81 < each_blocks.length; _i81 += 1) {
        each_blocks[_i81].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_7 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_7);

        var _i82;

        for (_i82 = 0; _i82 < each_value_7.length; _i82 += 1) {
          var child_ctx = get_each_context_7(ctx, each_value_7, _i82);

          if (each_blocks[_i82]) {
            each_blocks[_i82].p(child_ctx, dirty);

            transition_in(each_blocks[_i82], 1);
          } else {
            each_blocks[_i82] = create_each_block_7(child_ctx);

            each_blocks[_i82].c();

            transition_in(each_blocks[_i82], 1);

            each_blocks[_i82].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i82 = each_value_7.length; _i82 < each_blocks.length; _i82 += 1) {
          out(_i82);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i83 = 0; _i83 < each_value_7.length; _i83 += 1) {
        transition_in(each_blocks[_i83]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i84 = 0; _i84 < each_blocks.length; _i84 += 1) {
        transition_out(each_blocks[_i84]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(181:8) <Select class=\\\"shaped\\\" variant=\\\"filled\\\" bind:value={valueShapedFilled} label=\\\"Fruit\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (195:12) <Option value={fruit}>


function create_default_slot_17(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(195:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (194:10) {#each fruits as fruit}


function create_each_block_6(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
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
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_6.name,
    type: "each",
    source: "(194:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (192:8) <Select class="shaped" variant="filled" bind:value={valueShapedFilledHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_16(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_6 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_6);
  var each_blocks = [];

  for (var i = 0; i < each_value_6.length; i += 1) {
    each_blocks[i] = create_each_block_6(get_each_context_6(ctx, each_value_6, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i85 = 0; _i85 < each_blocks.length; _i85 += 1) {
        each_blocks[_i85].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i86 = 0; _i86 < each_blocks.length; _i86 += 1) {
        each_blocks[_i86].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i87 = 0; _i87 < each_blocks.length; _i87 += 1) {
        each_blocks[_i87].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_6 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_6);

        var _i88;

        for (_i88 = 0; _i88 < each_value_6.length; _i88 += 1) {
          var child_ctx = get_each_context_6(ctx, each_value_6, _i88);

          if (each_blocks[_i88]) {
            each_blocks[_i88].p(child_ctx, dirty);

            transition_in(each_blocks[_i88], 1);
          } else {
            each_blocks[_i88] = create_each_block_6(child_ctx);

            each_blocks[_i88].c();

            transition_in(each_blocks[_i88], 1);

            each_blocks[_i88].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i88 = each_value_6.length; _i88 < each_blocks.length; _i88 += 1) {
          out(_i88);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i89 = 0; _i89 < each_value_6.length; _i89 += 1) {
        transition_in(each_blocks[_i89]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i90 = 0; _i90 < each_blocks.length; _i90 += 1) {
        transition_out(each_blocks[_i90]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(192:8) <Select class=\\\"shaped\\\" variant=\\\"filled\\\" bind:value={valueShapedFilledHelperText} label=\\\"With Helper Text\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (198:8) <HelperText>


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    source: "(198:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (205:28) <Icon class="material-icons">


function create_default_slot_14(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    id: create_default_slot_14.name,
    type: "slot",
    source: "(205:28) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (205:10) <span slot="icon">


function create_icon_slot_1(ctx) {
  var span;
  var icon;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
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
      span = element("span");
      create_component(icon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      });
      var span_nodes = children(span);
      claim_component(icon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-bitxd9");
      add_location(span, file$3, 204, 10, 7111);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
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
      if (detaching) detach_dev(span);
      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot_1.name,
    type: "slot",
    source: "(205:10) <span slot=\\\"icon\\\">",
    ctx: ctx
  });
  return block;
} // (208:12) <Option value={fruit}>


function create_default_slot_13(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(208:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (207:10) {#each fruits as fruit}


function create_each_block_5(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
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
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_5.name,
    type: "each",
    source: "(207:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (204:8) <Select class="shaped" variant="filled" withLeadingIcon bind:value={valueShapedFilledLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_12(ctx) {
  var t0;
  var option;
  var t1;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_5 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_5);
  var each_blocks = [];

  for (var i = 0; i < each_value_5.length; i += 1) {
    each_blocks[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      create_component(option.$$.fragment);
      t1 = space();

      for (var _i91 = 0; _i91 < each_blocks.length; _i91 += 1) {
        each_blocks[_i91].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      claim_component(option.$$.fragment, nodes);
      t1 = claim_space(nodes);

      for (var _i92 = 0; _i92 < each_blocks.length; _i92 += 1) {
        each_blocks[_i92].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i93 = 0; _i93 < each_blocks.length; _i93 += 1) {
        each_blocks[_i93].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_5 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_5);

        var _i94;

        for (_i94 = 0; _i94 < each_value_5.length; _i94 += 1) {
          var child_ctx = get_each_context_5(ctx, each_value_5, _i94);

          if (each_blocks[_i94]) {
            each_blocks[_i94].p(child_ctx, dirty);

            transition_in(each_blocks[_i94], 1);
          } else {
            each_blocks[_i94] = create_each_block_5(child_ctx);

            each_blocks[_i94].c();

            transition_in(each_blocks[_i94], 1);

            each_blocks[_i94].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i94 = each_value_5.length; _i94 < each_blocks.length; _i94 += 1) {
          out(_i94);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i95 = 0; _i95 < each_value_5.length; _i95 += 1) {
        transition_in(each_blocks[_i95]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i96 = 0; _i96 < each_blocks.length; _i96 += 1) {
        transition_out(each_blocks[_i96]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      destroy_component(option, detaching);
      if (detaching) detach_dev(t1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(204:8) <Select class=\\\"shaped\\\" variant=\\\"filled\\\" withLeadingIcon bind:value={valueShapedFilledLeadingIcon} label=\\\"Leading Icon\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (219:12) <Option value={fruit}>


function create_default_slot_11(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(219:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (218:10) {#each fruits as fruit}


function create_each_block_4(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_4.name,
    type: "each",
    source: "(218:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (216:8) <Select class="shaped" variant="filled" invalid bind:value={valueShapedFilledInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_10(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_4 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_4);
  var each_blocks = [];

  for (var i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i97 = 0; _i97 < each_blocks.length; _i97 += 1) {
        each_blocks[_i97].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i98 = 0; _i98 < each_blocks.length; _i98 += 1) {
        each_blocks[_i98].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i99 = 0; _i99 < each_blocks.length; _i99 += 1) {
        each_blocks[_i99].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_4 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_4);

        var _i100;

        for (_i100 = 0; _i100 < each_value_4.length; _i100 += 1) {
          var child_ctx = get_each_context_4(ctx, each_value_4, _i100);

          if (each_blocks[_i100]) {
            each_blocks[_i100].p(child_ctx, dirty);

            transition_in(each_blocks[_i100], 1);
          } else {
            each_blocks[_i100] = create_each_block_4(child_ctx);

            each_blocks[_i100].c();

            transition_in(each_blocks[_i100], 1);

            each_blocks[_i100].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i100 = each_value_4.length; _i100 < each_blocks.length; _i100 += 1) {
          out(_i100);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i101 = 0; _i101 < each_value_4.length; _i101 += 1) {
        transition_in(each_blocks[_i101]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i102 = 0; _i102 < each_blocks.length; _i102 += 1) {
        transition_out(each_blocks[_i102]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(216:8) <Select class=\\\"shaped\\\" variant=\\\"filled\\\" invalid bind:value={valueShapedFilledInvalid} label=\\\"Invalid\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (236:12) <Option value={fruit}>


function create_default_slot_9(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(236:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (235:10) {#each fruits as fruit}


function create_each_block_3(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
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
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_3.name,
    type: "each",
    source: "(235:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (233:8) <Select class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlined} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_8(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_3 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_3);
  var each_blocks = [];

  for (var i = 0; i < each_value_3.length; i += 1) {
    each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i103 = 0; _i103 < each_blocks.length; _i103 += 1) {
        each_blocks[_i103].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i104 = 0; _i104 < each_blocks.length; _i104 += 1) {
        each_blocks[_i104].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i105 = 0; _i105 < each_blocks.length; _i105 += 1) {
        each_blocks[_i105].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_3 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_3);

        var _i106;

        for (_i106 = 0; _i106 < each_value_3.length; _i106 += 1) {
          var child_ctx = get_each_context_3(ctx, each_value_3, _i106);

          if (each_blocks[_i106]) {
            each_blocks[_i106].p(child_ctx, dirty);

            transition_in(each_blocks[_i106], 1);
          } else {
            each_blocks[_i106] = create_each_block_3(child_ctx);

            each_blocks[_i106].c();

            transition_in(each_blocks[_i106], 1);

            each_blocks[_i106].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i106 = each_value_3.length; _i106 < each_blocks.length; _i106 += 1) {
          out(_i106);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i107 = 0; _i107 < each_value_3.length; _i107 += 1) {
        transition_in(each_blocks[_i107]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i108 = 0; _i108 < each_blocks.length; _i108 += 1) {
        transition_out(each_blocks[_i108]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(233:8) <Select class=\\\"shaped-outlined\\\" variant=\\\"outlined\\\" bind:value={valueShapedOutlined} label=\\\"Fruit\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (247:12) <Option value={fruit}>


function create_default_slot_7(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(247:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (246:10) {#each fruits as fruit}


function create_each_block_2(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
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
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_2.name,
    type: "each",
    source: "(246:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (244:8) <Select class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlinedHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_6(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_2 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_2);
  var each_blocks = [];

  for (var i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i109 = 0; _i109 < each_blocks.length; _i109 += 1) {
        each_blocks[_i109].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i110 = 0; _i110 < each_blocks.length; _i110 += 1) {
        each_blocks[_i110].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i111 = 0; _i111 < each_blocks.length; _i111 += 1) {
        each_blocks[_i111].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_2 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_2);

        var _i112;

        for (_i112 = 0; _i112 < each_value_2.length; _i112 += 1) {
          var child_ctx = get_each_context_2(ctx, each_value_2, _i112);

          if (each_blocks[_i112]) {
            each_blocks[_i112].p(child_ctx, dirty);

            transition_in(each_blocks[_i112], 1);
          } else {
            each_blocks[_i112] = create_each_block_2(child_ctx);

            each_blocks[_i112].c();

            transition_in(each_blocks[_i112], 1);

            each_blocks[_i112].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i112 = each_value_2.length; _i112 < each_blocks.length; _i112 += 1) {
          out(_i112);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i113 = 0; _i113 < each_value_2.length; _i113 += 1) {
        transition_in(each_blocks[_i113]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i114 = 0; _i114 < each_blocks.length; _i114 += 1) {
        transition_out(each_blocks[_i114]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(244:8) <Select class=\\\"shaped-outlined\\\" variant=\\\"outlined\\\" bind:value={valueShapedOutlinedHelperText} label=\\\"With Helper Text\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (250:8) <HelperText>


function create_default_slot_5(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    id: create_default_slot_5.name,
    type: "slot",
    source: "(250:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (257:28) <Icon class="material-icons">


function create_default_slot_4$1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    id: create_default_slot_4$1.name,
    type: "slot",
    source: "(257:28) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (257:10) <span slot="icon">


function create_icon_slot(ctx) {
  var span;
  var icon;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_4$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(icon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      });
      var span_nodes = children(span);
      claim_component(icon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-bitxd9");
      add_location(span, file$3, 256, 10, 9095);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
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
      if (detaching) detach_dev(span);
      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot.name,
    type: "slot",
    source: "(257:10) <span slot=\\\"icon\\\">",
    ctx: ctx
  });
  return block;
} // (260:12) <Option value={fruit}>


function create_default_slot_3$1(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3$1.name,
    type: "slot",
    source: "(260:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (259:10) {#each fruits as fruit}


function create_each_block_1(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_3$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(259:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (256:8) <Select class="shaped-outlined" variant="outlined" withLeadingIcon bind:value={valueShapedOutlinedLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_2$1(ctx) {
  var t0;
  var option;
  var t1;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_1 =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value_1);
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      create_component(option.$$.fragment);
      t1 = space();

      for (var _i115 = 0; _i115 < each_blocks.length; _i115 += 1) {
        each_blocks[_i115].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      claim_component(option.$$.fragment, nodes);
      t1 = claim_space(nodes);

      for (var _i116 = 0; _i116 < each_blocks.length; _i116 += 1) {
        each_blocks[_i116].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i117 = 0; _i117 < each_blocks.length; _i117 += 1) {
        each_blocks[_i117].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value_1 =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value_1);

        var _i118;

        for (_i118 = 0; _i118 < each_value_1.length; _i118 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i118);

          if (each_blocks[_i118]) {
            each_blocks[_i118].p(child_ctx, dirty);

            transition_in(each_blocks[_i118], 1);
          } else {
            each_blocks[_i118] = create_each_block_1(child_ctx);

            each_blocks[_i118].c();

            transition_in(each_blocks[_i118], 1);

            each_blocks[_i118].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i118 = each_value_1.length; _i118 < each_blocks.length; _i118 += 1) {
          out(_i118);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i119 = 0; _i119 < each_value_1.length; _i119 += 1) {
        transition_in(each_blocks[_i119]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i120 = 0; _i120 < each_blocks.length; _i120 += 1) {
        transition_out(each_blocks[_i120]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      destroy_component(option, detaching);
      if (detaching) detach_dev(t1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: "(256:8) <Select class=\\\"shaped-outlined\\\" variant=\\\"outlined\\\" withLeadingIcon bind:value={valueShapedOutlinedLeadingIcon} label=\\\"Leading Icon\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
} // (271:12) <Option value={fruit}>


function create_default_slot_1$1(ctx) {
  var t_value =
  /*fruit*/
  ctx[43] + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: "(271:12) <Option value={fruit}>",
    ctx: ctx
  });
  return block;
} // (270:10) {#each fruits as fruit}


function create_each_block(ctx) {
  var option;
  var current;
  option = new Option({
    props: {
      value:
      /*fruit*/
      ctx[43],
      $$slots: {
        default: [create_default_slot_1$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(option.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var option_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        option_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(270:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (268:8) <Select class="shaped-outlined" variant="outlined" invalid bind:value={valueShapedOutlinedInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">


function create_default_slot$2(ctx) {
  var option;
  var t;
  var each_1_anchor;
  var current;
  option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value =
  /*fruits*/
  ctx[21];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      create_component(option.$$.fragment);
      t = space();

      for (var _i121 = 0; _i121 < each_blocks.length; _i121 += 1) {
        each_blocks[_i121].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(option.$$.fragment, nodes);
      t = claim_space(nodes);

      for (var _i122 = 0; _i122 < each_blocks.length; _i122 += 1) {
        each_blocks[_i122].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i123 = 0; _i123 < each_blocks.length; _i123 += 1) {
        each_blocks[_i123].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*fruits*/
      2097152) {
        each_value =
        /*fruits*/
        ctx[21];
        validate_each_argument(each_value);

        var _i124;

        for (_i124 = 0; _i124 < each_value.length; _i124 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i124);

          if (each_blocks[_i124]) {
            each_blocks[_i124].p(child_ctx, dirty);

            transition_in(each_blocks[_i124], 1);
          } else {
            each_blocks[_i124] = create_each_block(child_ctx);

            each_blocks[_i124].c();

            transition_in(each_blocks[_i124], 1);

            each_blocks[_i124].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i124 = each_value.length; _i124 < each_blocks.length; _i124 += 1) {
          out(_i124);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i125 = 0; _i125 < each_value.length; _i125 += 1) {
        transition_in(each_blocks[_i125]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i126 = 0; _i126 < each_blocks.length; _i126 += 1) {
        transition_out(each_blocks[_i126]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
      if (detaching) detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$2.name,
    type: "slot",
    source: "(268:8) <Select class=\\\"shaped-outlined\\\" variant=\\\"outlined\\\" invalid bind:value={valueShapedOutlinedInvalid} label=\\\"Invalid\\\" anchor$class=\\\"demo-select-width\\\" menu$class=\\\"demo-select-width\\\">",
    ctx: ctx
  });
  return block;
}

function create_fragment$4(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div1;
  var div0;
  var select0;
  var updating_value;
  var t3;
  var pre0;
  var t4;
  var t5;
  var t6;
  var div7;
  var t7;
  var br0;
  var t8;
  var div6;
  var div2;
  var select1;
  var updating_value_1;
  var t9;
  var pre1;
  var t10;
  var t11;
  var t12;
  var div3;
  var select2;
  var updating_value_2;
  var t13;
  var helpertext0;
  var t14;
  var pre2;
  var t15;
  var t16;
  var t17;
  var div4;
  var select3;
  var updating_value_3;
  var t18;
  var pre3;
  var t19;
  var t20;
  var t21;
  var div5;
  var select4;
  var updating_value_4;
  var t22;
  var pre4;
  var t23;
  var t24;
  var t25;
  var div13;
  var t26;
  var br1;
  var t27;
  var div12;
  var div8;
  var select5;
  var updating_value_5;
  var t28;
  var pre5;
  var t29;
  var t30;
  var t31;
  var div9;
  var select6;
  var updating_value_6;
  var t32;
  var helpertext1;
  var t33;
  var pre6;
  var t34;
  var t35;
  var t36;
  var div10;
  var select7;
  var updating_value_7;
  var t37;
  var pre7;
  var t38;
  var t39;
  var t40;
  var div11;
  var select8;
  var updating_value_8;
  var t41;
  var pre8;
  var t42;
  var t43;
  var t44;
  var div19;
  var t45;
  var br2;
  var t46;
  var div18;
  var div14;
  var select9;
  var updating_value_9;
  var t47;
  var pre9;
  var t48;
  var t49;
  var t50;
  var div15;
  var select10;
  var updating_value_10;
  var t51;
  var helpertext2;
  var t52;
  var pre10;
  var t53;
  var t54;
  var t55;
  var div16;
  var select11;
  var updating_value_11;
  var t56;
  var pre11;
  var t57;
  var t58;
  var t59;
  var div17;
  var select12;
  var updating_value_12;
  var t60;
  var pre12;
  var t61;
  var t62;
  var t63;
  var div25;
  var t64;
  var br3;
  var t65;
  var div24;
  var div20;
  var select13;
  var updating_value_13;
  var t66;
  var pre13;
  var t67;
  var t68;
  var t69;
  var div21;
  var select14;
  var updating_value_14;
  var t70;
  var helpertext3;
  var t71;
  var pre14;
  var t72;
  var t73;
  var t74;
  var div22;
  var select15;
  var updating_value_15;
  var t75;
  var pre15;
  var t76;
  var t77;
  var t78;
  var div23;
  var select16;
  var updating_value_16;
  var t79;
  var pre16;
  var t80;
  var t81;
  var t82;
  var div31;
  var t83;
  var br4;
  var t84;
  var div30;
  var div26;
  var select17;
  var updating_value_17;
  var t85;
  var pre17;
  var t86;
  var t87;
  var t88;
  var div27;
  var select18;
  var updating_value_18;
  var t89;
  var helpertext4;
  var t90;
  var pre18;
  var t91;
  var t92;
  var t93;
  var div28;
  var select19;
  var updating_value_19;
  var t94;
  var pre19;
  var t95;
  var t96;
  var t97;
  var div29;
  var select20;
  var updating_value_20;
  var t98;
  var pre20;
  var t99;
  var t100;
  var current;

  function select0_value_binding(value) {
    /*select0_value_binding*/
    ctx[22].call(null, value);
  }

  var select0_props = {
    label: "Select Menu",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_50]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valuePrefilled*/
  ctx[0] !== void 0) {
    select0_props.value =
    /*valuePrefilled*/
    ctx[0];
  }

  select0 = new Select({
    props: select0_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select0, "value", select0_value_binding);
  });

  function select1_value_binding(value) {
    /*select1_value_binding*/
    ctx[23].call(null, value);
  }

  var select1_props = {
    label: "Fruit",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_48]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueStandard*/
  ctx[1] !== void 0) {
    select1_props.value =
    /*valueStandard*/
    ctx[1];
  }

  select1 = new Select({
    props: select1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select1, "value", select1_value_binding);
  });

  function select2_value_binding(value) {
    /*select2_value_binding*/
    ctx[24].call(null, value);
  }

  var select2_props = {
    label: "With Helper Text",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_46]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueStandardHelperText*/
  ctx[2] !== void 0) {
    select2_props.value =
    /*valueStandardHelperText*/
    ctx[2];
  }

  select2 = new Select({
    props: select2_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select2, "value", select2_value_binding);
  });
  helpertext0 = new HelperText({
    props: {
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function select3_value_binding(value) {
    /*select3_value_binding*/
    ctx[25].call(null, value);
  }

  var select3_props = {
    withLeadingIcon: true,
    label: "Leading Icon",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_42],
      icon: [create_icon_slot_4]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueStandardLeadingIcon*/
  ctx[3] !== void 0) {
    select3_props.value =
    /*valueStandardLeadingIcon*/
    ctx[3];
  }

  select3 = new Select({
    props: select3_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select3, "value", select3_value_binding);
  });

  function select4_value_binding(value) {
    /*select4_value_binding*/
    ctx[26].call(null, value);
  }

  var select4_props = {
    invalid: true,
    label: "Invalid",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_40]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueStandardInvalid*/
  ctx[4] !== void 0) {
    select4_props.value =
    /*valueStandardInvalid*/
    ctx[4];
  }

  select4 = new Select({
    props: select4_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select4, "value", select4_value_binding);
  });

  function select5_value_binding(value) {
    /*select5_value_binding*/
    ctx[27].call(null, value);
  }

  var select5_props = {
    variant: "filled",
    label: "Fruit",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_38]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueFilled*/
  ctx[5] !== void 0) {
    select5_props.value =
    /*valueFilled*/
    ctx[5];
  }

  select5 = new Select({
    props: select5_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select5, "value", select5_value_binding);
  });

  function select6_value_binding(value) {
    /*select6_value_binding*/
    ctx[28].call(null, value);
  }

  var select6_props = {
    variant: "filled",
    label: "With Helper Text",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_36]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueFilledHelperText*/
  ctx[6] !== void 0) {
    select6_props.value =
    /*valueFilledHelperText*/
    ctx[6];
  }

  select6 = new Select({
    props: select6_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select6, "value", select6_value_binding);
  });
  helpertext1 = new HelperText({
    props: {
      $$slots: {
        default: [create_default_slot_35]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function select7_value_binding(value) {
    /*select7_value_binding*/
    ctx[29].call(null, value);
  }

  var select7_props = {
    variant: "filled",
    withLeadingIcon: true,
    label: "Leading Icon",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_32],
      icon: [create_icon_slot_3]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueFilledLeadingIcon*/
  ctx[7] !== void 0) {
    select7_props.value =
    /*valueFilledLeadingIcon*/
    ctx[7];
  }

  select7 = new Select({
    props: select7_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select7, "value", select7_value_binding);
  });

  function select8_value_binding(value) {
    /*select8_value_binding*/
    ctx[30].call(null, value);
  }

  var select8_props = {
    variant: "filled",
    invalid: true,
    label: "Invalid",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_30]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueFilledInvalid*/
  ctx[8] !== void 0) {
    select8_props.value =
    /*valueFilledInvalid*/
    ctx[8];
  }

  select8 = new Select({
    props: select8_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select8, "value", select8_value_binding);
  });

  function select9_value_binding(value) {
    /*select9_value_binding*/
    ctx[31].call(null, value);
  }

  var select9_props = {
    variant: "outlined",
    label: "Fruit",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_28]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueOutlined*/
  ctx[9] !== void 0) {
    select9_props.value =
    /*valueOutlined*/
    ctx[9];
  }

  select9 = new Select({
    props: select9_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select9, "value", select9_value_binding);
  });

  function select10_value_binding(value) {
    /*select10_value_binding*/
    ctx[32].call(null, value);
  }

  var select10_props = {
    variant: "outlined",
    label: "With Helper Text",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_26]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueOutlinedHelperText*/
  ctx[10] !== void 0) {
    select10_props.value =
    /*valueOutlinedHelperText*/
    ctx[10];
  }

  select10 = new Select({
    props: select10_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select10, "value", select10_value_binding);
  });
  helpertext2 = new HelperText({
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

  function select11_value_binding(value) {
    /*select11_value_binding*/
    ctx[33].call(null, value);
  }

  var select11_props = {
    variant: "outlined",
    withLeadingIcon: true,
    label: "Leading Icon",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_22],
      icon: [create_icon_slot_2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueOutlinedLeadingIcon*/
  ctx[11] !== void 0) {
    select11_props.value =
    /*valueOutlinedLeadingIcon*/
    ctx[11];
  }

  select11 = new Select({
    props: select11_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select11, "value", select11_value_binding);
  });

  function select12_value_binding(value) {
    /*select12_value_binding*/
    ctx[34].call(null, value);
  }

  var select12_props = {
    variant: "outlined",
    invalid: true,
    label: "Invalid",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_20]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueOutlinedInvalid*/
  ctx[12] !== void 0) {
    select12_props.value =
    /*valueOutlinedInvalid*/
    ctx[12];
  }

  select12 = new Select({
    props: select12_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select12, "value", select12_value_binding);
  });

  function select13_value_binding(value) {
    /*select13_value_binding*/
    ctx[35].call(null, value);
  }

  var select13_props = {
    class: "shaped",
    variant: "filled",
    label: "Fruit",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_18]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueShapedFilled*/
  ctx[13] !== void 0) {
    select13_props.value =
    /*valueShapedFilled*/
    ctx[13];
  }

  select13 = new Select({
    props: select13_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select13, "value", select13_value_binding);
  });

  function select14_value_binding(value) {
    /*select14_value_binding*/
    ctx[36].call(null, value);
  }

  var select14_props = {
    class: "shaped",
    variant: "filled",
    label: "With Helper Text",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_16]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueShapedFilledHelperText*/
  ctx[14] !== void 0) {
    select14_props.value =
    /*valueShapedFilledHelperText*/
    ctx[14];
  }

  select14 = new Select({
    props: select14_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select14, "value", select14_value_binding);
  });
  helpertext3 = new HelperText({
    props: {
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function select15_value_binding(value) {
    /*select15_value_binding*/
    ctx[37].call(null, value);
  }

  var select15_props = {
    class: "shaped",
    variant: "filled",
    withLeadingIcon: true,
    label: "Leading Icon",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_12],
      icon: [create_icon_slot_1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueShapedFilledLeadingIcon*/
  ctx[15] !== void 0) {
    select15_props.value =
    /*valueShapedFilledLeadingIcon*/
    ctx[15];
  }

  select15 = new Select({
    props: select15_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select15, "value", select15_value_binding);
  });

  function select16_value_binding(value) {
    /*select16_value_binding*/
    ctx[38].call(null, value);
  }

  var select16_props = {
    class: "shaped",
    variant: "filled",
    invalid: true,
    label: "Invalid",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_10]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueShapedFilledInvalid*/
  ctx[16] !== void 0) {
    select16_props.value =
    /*valueShapedFilledInvalid*/
    ctx[16];
  }

  select16 = new Select({
    props: select16_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select16, "value", select16_value_binding);
  });

  function select17_value_binding(value) {
    /*select17_value_binding*/
    ctx[39].call(null, value);
  }

  var select17_props = {
    class: "shaped-outlined",
    variant: "outlined",
    label: "Fruit",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_8]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueShapedOutlined*/
  ctx[17] !== void 0) {
    select17_props.value =
    /*valueShapedOutlined*/
    ctx[17];
  }

  select17 = new Select({
    props: select17_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select17, "value", select17_value_binding);
  });

  function select18_value_binding(value) {
    /*select18_value_binding*/
    ctx[40].call(null, value);
  }

  var select18_props = {
    class: "shaped-outlined",
    variant: "outlined",
    label: "With Helper Text",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_6]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueShapedOutlinedHelperText*/
  ctx[18] !== void 0) {
    select18_props.value =
    /*valueShapedOutlinedHelperText*/
    ctx[18];
  }

  select18 = new Select({
    props: select18_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select18, "value", select18_value_binding);
  });
  helpertext4 = new HelperText({
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

  function select19_value_binding(value) {
    /*select19_value_binding*/
    ctx[41].call(null, value);
  }

  var select19_props = {
    class: "shaped-outlined",
    variant: "outlined",
    withLeadingIcon: true,
    label: "Leading Icon",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_2$1],
      icon: [create_icon_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueShapedOutlinedLeadingIcon*/
  ctx[19] !== void 0) {
    select19_props.value =
    /*valueShapedOutlinedLeadingIcon*/
    ctx[19];
  }

  select19 = new Select({
    props: select19_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select19, "value", select19_value_binding);
  });

  function select20_value_binding(value) {
    /*select20_value_binding*/
    ctx[42].call(null, value);
  }

  var select20_props = {
    class: "shaped-outlined",
    variant: "outlined",
    invalid: true,
    label: "Invalid",
    anchor$class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot$2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*valueShapedOutlinedInvalid*/
  ctx[20] !== void 0) {
    select20_props.value =
    /*valueShapedOutlinedInvalid*/
    ctx[20];
  }

  select20 = new Select({
    props: select20_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select20, "value", select20_value_binding);
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Select");
      t2 = space();
      div1 = element("div");
      div0 = element("div");
      create_component(select0.$$.fragment);
      t3 = space();
      pre0 = element("pre");
      t4 = text("Selected: ");
      t5 = text(
      /*valuePrefilled*/
      ctx[0]);
      t6 = space();
      div7 = element("div");
      t7 = text("Standard:");
      br0 = element("br");
      t8 = space();
      div6 = element("div");
      div2 = element("div");
      create_component(select1.$$.fragment);
      t9 = space();
      pre1 = element("pre");
      t10 = text("Selected: ");
      t11 = text(
      /*valueStandard*/
      ctx[1]);
      t12 = space();
      div3 = element("div");
      create_component(select2.$$.fragment);
      t13 = space();
      create_component(helpertext0.$$.fragment);
      t14 = space();
      pre2 = element("pre");
      t15 = text("Selected: ");
      t16 = text(
      /*valueStandardHelperText*/
      ctx[2]);
      t17 = space();
      div4 = element("div");
      create_component(select3.$$.fragment);
      t18 = space();
      pre3 = element("pre");
      t19 = text("Selected: ");
      t20 = text(
      /*valueStandardLeadingIcon*/
      ctx[3]);
      t21 = space();
      div5 = element("div");
      create_component(select4.$$.fragment);
      t22 = space();
      pre4 = element("pre");
      t23 = text("Selected: ");
      t24 = text(
      /*valueStandardInvalid*/
      ctx[4]);
      t25 = space();
      div13 = element("div");
      t26 = text("Filled:");
      br1 = element("br");
      t27 = space();
      div12 = element("div");
      div8 = element("div");
      create_component(select5.$$.fragment);
      t28 = space();
      pre5 = element("pre");
      t29 = text("Selected: ");
      t30 = text(
      /*valueFilled*/
      ctx[5]);
      t31 = space();
      div9 = element("div");
      create_component(select6.$$.fragment);
      t32 = space();
      create_component(helpertext1.$$.fragment);
      t33 = space();
      pre6 = element("pre");
      t34 = text("Selected: ");
      t35 = text(
      /*valueFilledHelperText*/
      ctx[6]);
      t36 = space();
      div10 = element("div");
      create_component(select7.$$.fragment);
      t37 = space();
      pre7 = element("pre");
      t38 = text("Selected: ");
      t39 = text(
      /*valueFilledLeadingIcon*/
      ctx[7]);
      t40 = space();
      div11 = element("div");
      create_component(select8.$$.fragment);
      t41 = space();
      pre8 = element("pre");
      t42 = text("Selected: ");
      t43 = text(
      /*valueFilledInvalid*/
      ctx[8]);
      t44 = space();
      div19 = element("div");
      t45 = text("Outlined:");
      br2 = element("br");
      t46 = space();
      div18 = element("div");
      div14 = element("div");
      create_component(select9.$$.fragment);
      t47 = space();
      pre9 = element("pre");
      t48 = text("Selected: ");
      t49 = text(
      /*valueOutlined*/
      ctx[9]);
      t50 = space();
      div15 = element("div");
      create_component(select10.$$.fragment);
      t51 = space();
      create_component(helpertext2.$$.fragment);
      t52 = space();
      pre10 = element("pre");
      t53 = text("Selected: ");
      t54 = text(
      /*valueOutlinedHelperText*/
      ctx[10]);
      t55 = space();
      div16 = element("div");
      create_component(select11.$$.fragment);
      t56 = space();
      pre11 = element("pre");
      t57 = text("Selected: ");
      t58 = text(
      /*valueOutlinedLeadingIcon*/
      ctx[11]);
      t59 = space();
      div17 = element("div");
      create_component(select12.$$.fragment);
      t60 = space();
      pre12 = element("pre");
      t61 = text("Selected: ");
      t62 = text(
      /*valueOutlinedInvalid*/
      ctx[12]);
      t63 = space();
      div25 = element("div");
      t64 = text("Shaped Filled:");
      br3 = element("br");
      t65 = space();
      div24 = element("div");
      div20 = element("div");
      create_component(select13.$$.fragment);
      t66 = space();
      pre13 = element("pre");
      t67 = text("Selected: ");
      t68 = text(
      /*valueShapedFilled*/
      ctx[13]);
      t69 = space();
      div21 = element("div");
      create_component(select14.$$.fragment);
      t70 = space();
      create_component(helpertext3.$$.fragment);
      t71 = space();
      pre14 = element("pre");
      t72 = text("Selected: ");
      t73 = text(
      /*valueShapedFilledHelperText*/
      ctx[14]);
      t74 = space();
      div22 = element("div");
      create_component(select15.$$.fragment);
      t75 = space();
      pre15 = element("pre");
      t76 = text("Selected: ");
      t77 = text(
      /*valueShapedFilledLeadingIcon*/
      ctx[15]);
      t78 = space();
      div23 = element("div");
      create_component(select16.$$.fragment);
      t79 = space();
      pre16 = element("pre");
      t80 = text("Selected: ");
      t81 = text(
      /*valueShapedFilledInvalid*/
      ctx[16]);
      t82 = space();
      div31 = element("div");
      t83 = text("Shaped Outlined:");
      br4 = element("br");
      t84 = space();
      div30 = element("div");
      div26 = element("div");
      create_component(select17.$$.fragment);
      t85 = space();
      pre17 = element("pre");
      t86 = text("Selected: ");
      t87 = text(
      /*valueShapedOutlined*/
      ctx[17]);
      t88 = space();
      div27 = element("div");
      create_component(select18.$$.fragment);
      t89 = space();
      create_component(helpertext4.$$.fragment);
      t90 = space();
      pre18 = element("pre");
      t91 = text("Selected: ");
      t92 = text(
      /*valueShapedOutlinedHelperText*/
      ctx[18]);
      t93 = space();
      div28 = element("div");
      create_component(select19.$$.fragment);
      t94 = space();
      pre19 = element("pre");
      t95 = text("Selected: ");
      t96 = text(
      /*valueShapedOutlinedLeadingIcon*/
      ctx[19]);
      t97 = space();
      div29 = element("div");
      create_component(select20.$$.fragment);
      t98 = space();
      pre20 = element("pre");
      t99 = text("Selected: ");
      t100 = text(
      /*valueShapedOutlinedInvalid*/
      ctx[20]);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-15m4q42\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Select");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true,
        style: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(select0.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      pre0 = claim_element(div0_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t4 = claim_text(pre0_nodes, "Selected: ");
      t5 = claim_text(pre0_nodes,
      /*valuePrefilled*/
      ctx[0]);
      pre0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div7 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      t7 = claim_text(div7_nodes, "Standard:");
      br0 = claim_element(div7_nodes, "BR", {
        class: true
      });
      t8 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div2 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      claim_component(select1.$$.fragment, div2_nodes);
      t9 = claim_space(div2_nodes);
      pre1 = claim_element(div2_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t10 = claim_text(pre1_nodes, "Selected: ");
      t11 = claim_text(pre1_nodes,
      /*valueStandard*/
      ctx[1]);
      pre1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t12 = claim_space(div6_nodes);
      div3 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      claim_component(select2.$$.fragment, div3_nodes);
      t13 = claim_space(div3_nodes);
      claim_component(helpertext0.$$.fragment, div3_nodes);
      t14 = claim_space(div3_nodes);
      pre2 = claim_element(div3_nodes, "PRE", {
        class: true
      });
      var pre2_nodes = children(pre2);
      t15 = claim_text(pre2_nodes, "Selected: ");
      t16 = claim_text(pre2_nodes,
      /*valueStandardHelperText*/
      ctx[2]);
      pre2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t17 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      claim_component(select3.$$.fragment, div4_nodes);
      t18 = claim_space(div4_nodes);
      pre3 = claim_element(div4_nodes, "PRE", {
        class: true
      });
      var pre3_nodes = children(pre3);
      t19 = claim_text(pre3_nodes, "Selected: ");
      t20 = claim_text(pre3_nodes,
      /*valueStandardLeadingIcon*/
      ctx[3]);
      pre3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t21 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      claim_component(select4.$$.fragment, div5_nodes);
      t22 = claim_space(div5_nodes);
      pre4 = claim_element(div5_nodes, "PRE", {
        class: true
      });
      var pre4_nodes = children(pre4);
      t23 = claim_text(pre4_nodes, "Selected: ");
      t24 = claim_text(pre4_nodes,
      /*valueStandardInvalid*/
      ctx[4]);
      pre4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t25 = claim_space(section_nodes);
      div13 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      t26 = claim_text(div13_nodes, "Filled:");
      br1 = claim_element(div13_nodes, "BR", {
        class: true
      });
      t27 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      div8 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      claim_component(select5.$$.fragment, div8_nodes);
      t28 = claim_space(div8_nodes);
      pre5 = claim_element(div8_nodes, "PRE", {
        class: true
      });
      var pre5_nodes = children(pre5);
      t29 = claim_text(pre5_nodes, "Selected: ");
      t30 = claim_text(pre5_nodes,
      /*valueFilled*/
      ctx[5]);
      pre5_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t31 = claim_space(div12_nodes);
      div9 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      claim_component(select6.$$.fragment, div9_nodes);
      t32 = claim_space(div9_nodes);
      claim_component(helpertext1.$$.fragment, div9_nodes);
      t33 = claim_space(div9_nodes);
      pre6 = claim_element(div9_nodes, "PRE", {
        class: true
      });
      var pre6_nodes = children(pre6);
      t34 = claim_text(pre6_nodes, "Selected: ");
      t35 = claim_text(pre6_nodes,
      /*valueFilledHelperText*/
      ctx[6]);
      pre6_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      t36 = claim_space(div12_nodes);
      div10 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      claim_component(select7.$$.fragment, div10_nodes);
      t37 = claim_space(div10_nodes);
      pre7 = claim_element(div10_nodes, "PRE", {
        class: true
      });
      var pre7_nodes = children(pre7);
      t38 = claim_text(pre7_nodes, "Selected: ");
      t39 = claim_text(pre7_nodes,
      /*valueFilledLeadingIcon*/
      ctx[7]);
      pre7_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      t40 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      claim_component(select8.$$.fragment, div11_nodes);
      t41 = claim_space(div11_nodes);
      pre8 = claim_element(div11_nodes, "PRE", {
        class: true
      });
      var pre8_nodes = children(pre8);
      t42 = claim_text(pre8_nodes, "Selected: ");
      t43 = claim_text(pre8_nodes,
      /*valueFilledInvalid*/
      ctx[8]);
      pre8_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      t44 = claim_space(section_nodes);
      div19 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div19_nodes = children(div19);
      t45 = claim_text(div19_nodes, "Outlined:");
      br2 = claim_element(div19_nodes, "BR", {
        class: true
      });
      t46 = claim_space(div19_nodes);
      div18 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div18_nodes = children(div18);
      div14 = claim_element(div18_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      claim_component(select9.$$.fragment, div14_nodes);
      t47 = claim_space(div14_nodes);
      pre9 = claim_element(div14_nodes, "PRE", {
        class: true
      });
      var pre9_nodes = children(pre9);
      t48 = claim_text(pre9_nodes, "Selected: ");
      t49 = claim_text(pre9_nodes,
      /*valueOutlined*/
      ctx[9]);
      pre9_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      t50 = claim_space(div18_nodes);
      div15 = claim_element(div18_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      claim_component(select10.$$.fragment, div15_nodes);
      t51 = claim_space(div15_nodes);
      claim_component(helpertext2.$$.fragment, div15_nodes);
      t52 = claim_space(div15_nodes);
      pre10 = claim_element(div15_nodes, "PRE", {
        class: true
      });
      var pre10_nodes = children(pre10);
      t53 = claim_text(pre10_nodes, "Selected: ");
      t54 = claim_text(pre10_nodes,
      /*valueOutlinedHelperText*/
      ctx[10]);
      pre10_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      t55 = claim_space(div18_nodes);
      div16 = claim_element(div18_nodes, "DIV", {
        class: true
      });
      var div16_nodes = children(div16);
      claim_component(select11.$$.fragment, div16_nodes);
      t56 = claim_space(div16_nodes);
      pre11 = claim_element(div16_nodes, "PRE", {
        class: true
      });
      var pre11_nodes = children(pre11);
      t57 = claim_text(pre11_nodes, "Selected: ");
      t58 = claim_text(pre11_nodes,
      /*valueOutlinedLeadingIcon*/
      ctx[11]);
      pre11_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      t59 = claim_space(div18_nodes);
      div17 = claim_element(div18_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      claim_component(select12.$$.fragment, div17_nodes);
      t60 = claim_space(div17_nodes);
      pre12 = claim_element(div17_nodes, "PRE", {
        class: true
      });
      var pre12_nodes = children(pre12);
      t61 = claim_text(pre12_nodes, "Selected: ");
      t62 = claim_text(pre12_nodes,
      /*valueOutlinedInvalid*/
      ctx[12]);
      pre12_nodes.forEach(detach_dev);
      div17_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      div19_nodes.forEach(detach_dev);
      t63 = claim_space(section_nodes);
      div25 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div25_nodes = children(div25);
      t64 = claim_text(div25_nodes, "Shaped Filled:");
      br3 = claim_element(div25_nodes, "BR", {
        class: true
      });
      t65 = claim_space(div25_nodes);
      div24 = claim_element(div25_nodes, "DIV", {
        class: true
      });
      var div24_nodes = children(div24);
      div20 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div20_nodes = children(div20);
      claim_component(select13.$$.fragment, div20_nodes);
      t66 = claim_space(div20_nodes);
      pre13 = claim_element(div20_nodes, "PRE", {
        class: true
      });
      var pre13_nodes = children(pre13);
      t67 = claim_text(pre13_nodes, "Selected: ");
      t68 = claim_text(pre13_nodes,
      /*valueShapedFilled*/
      ctx[13]);
      pre13_nodes.forEach(detach_dev);
      div20_nodes.forEach(detach_dev);
      t69 = claim_space(div24_nodes);
      div21 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div21_nodes = children(div21);
      claim_component(select14.$$.fragment, div21_nodes);
      t70 = claim_space(div21_nodes);
      claim_component(helpertext3.$$.fragment, div21_nodes);
      t71 = claim_space(div21_nodes);
      pre14 = claim_element(div21_nodes, "PRE", {
        class: true
      });
      var pre14_nodes = children(pre14);
      t72 = claim_text(pre14_nodes, "Selected: ");
      t73 = claim_text(pre14_nodes,
      /*valueShapedFilledHelperText*/
      ctx[14]);
      pre14_nodes.forEach(detach_dev);
      div21_nodes.forEach(detach_dev);
      t74 = claim_space(div24_nodes);
      div22 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div22_nodes = children(div22);
      claim_component(select15.$$.fragment, div22_nodes);
      t75 = claim_space(div22_nodes);
      pre15 = claim_element(div22_nodes, "PRE", {
        class: true
      });
      var pre15_nodes = children(pre15);
      t76 = claim_text(pre15_nodes, "Selected: ");
      t77 = claim_text(pre15_nodes,
      /*valueShapedFilledLeadingIcon*/
      ctx[15]);
      pre15_nodes.forEach(detach_dev);
      div22_nodes.forEach(detach_dev);
      t78 = claim_space(div24_nodes);
      div23 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div23_nodes = children(div23);
      claim_component(select16.$$.fragment, div23_nodes);
      t79 = claim_space(div23_nodes);
      pre16 = claim_element(div23_nodes, "PRE", {
        class: true
      });
      var pre16_nodes = children(pre16);
      t80 = claim_text(pre16_nodes, "Selected: ");
      t81 = claim_text(pre16_nodes,
      /*valueShapedFilledInvalid*/
      ctx[16]);
      pre16_nodes.forEach(detach_dev);
      div23_nodes.forEach(detach_dev);
      div24_nodes.forEach(detach_dev);
      div25_nodes.forEach(detach_dev);
      t82 = claim_space(section_nodes);
      div31 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div31_nodes = children(div31);
      t83 = claim_text(div31_nodes, "Shaped Outlined:");
      br4 = claim_element(div31_nodes, "BR", {
        class: true
      });
      t84 = claim_space(div31_nodes);
      div30 = claim_element(div31_nodes, "DIV", {
        class: true
      });
      var div30_nodes = children(div30);
      div26 = claim_element(div30_nodes, "DIV", {
        class: true
      });
      var div26_nodes = children(div26);
      claim_component(select17.$$.fragment, div26_nodes);
      t85 = claim_space(div26_nodes);
      pre17 = claim_element(div26_nodes, "PRE", {
        class: true
      });
      var pre17_nodes = children(pre17);
      t86 = claim_text(pre17_nodes, "Selected: ");
      t87 = claim_text(pre17_nodes,
      /*valueShapedOutlined*/
      ctx[17]);
      pre17_nodes.forEach(detach_dev);
      div26_nodes.forEach(detach_dev);
      t88 = claim_space(div30_nodes);
      div27 = claim_element(div30_nodes, "DIV", {
        class: true
      });
      var div27_nodes = children(div27);
      claim_component(select18.$$.fragment, div27_nodes);
      t89 = claim_space(div27_nodes);
      claim_component(helpertext4.$$.fragment, div27_nodes);
      t90 = claim_space(div27_nodes);
      pre18 = claim_element(div27_nodes, "PRE", {
        class: true
      });
      var pre18_nodes = children(pre18);
      t91 = claim_text(pre18_nodes, "Selected: ");
      t92 = claim_text(pre18_nodes,
      /*valueShapedOutlinedHelperText*/
      ctx[18]);
      pre18_nodes.forEach(detach_dev);
      div27_nodes.forEach(detach_dev);
      t93 = claim_space(div30_nodes);
      div28 = claim_element(div30_nodes, "DIV", {
        class: true
      });
      var div28_nodes = children(div28);
      claim_component(select19.$$.fragment, div28_nodes);
      t94 = claim_space(div28_nodes);
      pre19 = claim_element(div28_nodes, "PRE", {
        class: true
      });
      var pre19_nodes = children(pre19);
      t95 = claim_text(pre19_nodes, "Selected: ");
      t96 = claim_text(pre19_nodes,
      /*valueShapedOutlinedLeadingIcon*/
      ctx[19]);
      pre19_nodes.forEach(detach_dev);
      div28_nodes.forEach(detach_dev);
      t97 = claim_space(div30_nodes);
      div29 = claim_element(div30_nodes, "DIV", {
        class: true
      });
      var div29_nodes = children(div29);
      claim_component(select20.$$.fragment, div29_nodes);
      t98 = claim_space(div29_nodes);
      pre20 = claim_element(div29_nodes, "PRE", {
        class: true
      });
      var pre20_nodes = children(pre20);
      t99 = claim_text(pre20_nodes, "Selected: ");
      t100 = claim_text(pre20_nodes,
      /*valueShapedOutlinedInvalid*/
      ctx[20]);
      pre20_nodes.forEach(detach_dev);
      div29_nodes.forEach(detach_dev);
      div30_nodes.forEach(detach_dev);
      div31_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Select - SMUI";
      attr_dev(h2, "class", "svelte-bitxd9");
      add_location(h2, file$3, 5, 2, 73);
      attr_dev(pre0, "class", "status svelte-bitxd9");
      add_location(pre0, file$3, 15, 6, 416);
      attr_dev(div0, "class", "svelte-bitxd9");
      add_location(div0, file$3, 8, 4, 163);
      attr_dev(div1, "class", "columns margins svelte-bitxd9");
      set_style(div1, "justify-content", "flex-start");
      add_location(div1, file$3, 7, 2, 92);
      attr_dev(br0, "class", "svelte-bitxd9");
      add_location(br0, file$3, 20, 13, 511);
      attr_dev(pre1, "class", "status svelte-bitxd9");
      add_location(pre1, file$3, 31, 8, 854);
      attr_dev(div2, "class", "svelte-bitxd9");
      add_location(div2, file$3, 23, 6, 559);
      attr_dev(pre2, "class", "status svelte-bitxd9");
      add_location(pre2, file$3, 43, 8, 1288);
      attr_dev(div3, "class", "svelte-bitxd9");
      add_location(div3, file$3, 34, 6, 926);
      attr_dev(pre3, "class", "status svelte-bitxd9");
      add_location(pre3, file$3, 55, 8, 1776);
      attr_dev(div4, "class", "svelte-bitxd9");
      add_location(div4, file$3, 46, 6, 1370);
      attr_dev(pre4, "class", "status svelte-bitxd9");
      add_location(pre4, file$3, 66, 8, 2171);
      attr_dev(div5, "class", "svelte-bitxd9");
      add_location(div5, file$3, 58, 6, 1859);
      attr_dev(div6, "class", "columns margins svelte-bitxd9");
      add_location(div6, file$3, 22, 4, 523);
      attr_dev(div7, "class", "svelte-bitxd9");
      add_location(div7, file$3, 19, 2, 492);
      attr_dev(br1, "class", "svelte-bitxd9");
      add_location(br1, file$3, 72, 11, 2283);
      attr_dev(pre5, "class", "status svelte-bitxd9");
      add_location(pre5, file$3, 83, 8, 2641);
      attr_dev(div8, "class", "svelte-bitxd9");
      add_location(div8, file$3, 75, 6, 2331);
      attr_dev(pre6, "class", "status svelte-bitxd9");
      add_location(pre6, file$3, 95, 8, 3088);
      attr_dev(div9, "class", "svelte-bitxd9");
      add_location(div9, file$3, 86, 6, 2711);
      attr_dev(pre7, "class", "status svelte-bitxd9");
      add_location(pre7, file$3, 107, 8, 3589);
      attr_dev(div10, "class", "svelte-bitxd9");
      add_location(div10, file$3, 98, 6, 3168);
      attr_dev(pre8, "class", "status svelte-bitxd9");
      add_location(pre8, file$3, 118, 8, 3997);
      attr_dev(div11, "class", "svelte-bitxd9");
      add_location(div11, file$3, 110, 6, 3670);
      attr_dev(div12, "class", "columns margins svelte-bitxd9");
      add_location(div12, file$3, 74, 4, 2295);
      attr_dev(div13, "class", "svelte-bitxd9");
      add_location(div13, file$3, 71, 2, 2266);
      attr_dev(br2, "class", "svelte-bitxd9");
      add_location(br2, file$3, 124, 13, 4109);
      attr_dev(pre9, "class", "status svelte-bitxd9");
      add_location(pre9, file$3, 135, 8, 4471);
      attr_dev(div14, "class", "svelte-bitxd9");
      add_location(div14, file$3, 127, 6, 4157);
      attr_dev(pre10, "class", "status svelte-bitxd9");
      add_location(pre10, file$3, 147, 8, 4924);
      attr_dev(div15, "class", "svelte-bitxd9");
      add_location(div15, file$3, 138, 6, 4543);
      attr_dev(pre11, "class", "status svelte-bitxd9");
      add_location(pre11, file$3, 159, 8, 5431);
      attr_dev(div16, "class", "svelte-bitxd9");
      add_location(div16, file$3, 150, 6, 5006);
      attr_dev(pre12, "class", "status svelte-bitxd9");
      add_location(pre12, file$3, 170, 8, 5845);
      attr_dev(div17, "class", "svelte-bitxd9");
      add_location(div17, file$3, 162, 6, 5514);
      attr_dev(div18, "class", "columns margins svelte-bitxd9");
      add_location(div18, file$3, 126, 4, 4121);
      attr_dev(div19, "class", "svelte-bitxd9");
      add_location(div19, file$3, 123, 2, 4090);
      attr_dev(br3, "class", "svelte-bitxd9");
      add_location(br3, file$3, 176, 18, 5964);
      attr_dev(pre13, "class", "status svelte-bitxd9");
      add_location(pre13, file$3, 187, 8, 6343);
      attr_dev(div20, "class", "svelte-bitxd9");
      add_location(div20, file$3, 179, 6, 6012);
      attr_dev(pre14, "class", "status svelte-bitxd9");
      add_location(pre14, file$3, 199, 8, 6817);
      attr_dev(div21, "class", "svelte-bitxd9");
      add_location(div21, file$3, 190, 6, 6419);
      attr_dev(pre15, "class", "status svelte-bitxd9");
      add_location(pre15, file$3, 211, 8, 7345);
      attr_dev(div22, "class", "svelte-bitxd9");
      add_location(div22, file$3, 202, 6, 6903);
      attr_dev(pre16, "class", "status svelte-bitxd9");
      add_location(pre16, file$3, 222, 8, 7780);
      attr_dev(div23, "class", "svelte-bitxd9");
      add_location(div23, file$3, 214, 6, 7432);
      attr_dev(div24, "class", "columns margins svelte-bitxd9");
      add_location(div24, file$3, 178, 4, 5976);
      attr_dev(div25, "class", "svelte-bitxd9");
      add_location(div25, file$3, 175, 2, 5940);
      attr_dev(br4, "class", "svelte-bitxd9");
      add_location(br4, file$3, 228, 20, 7905);
      attr_dev(pre17, "class", "status svelte-bitxd9");
      add_location(pre17, file$3, 239, 8, 8297);
      attr_dev(div26, "class", "svelte-bitxd9");
      add_location(div26, file$3, 231, 6, 7953);
      attr_dev(pre18, "class", "status svelte-bitxd9");
      add_location(pre18, file$3, 251, 8, 8786);
      attr_dev(div27, "class", "svelte-bitxd9");
      add_location(div27, file$3, 242, 6, 8375);
      attr_dev(pre19, "class", "status svelte-bitxd9");
      add_location(pre19, file$3, 263, 8, 9329);
      attr_dev(div28, "class", "svelte-bitxd9");
      add_location(div28, file$3, 254, 6, 8874);
      attr_dev(pre20, "class", "status svelte-bitxd9");
      add_location(pre20, file$3, 274, 8, 9779);
      attr_dev(div29, "class", "svelte-bitxd9");
      add_location(div29, file$3, 266, 6, 9418);
      attr_dev(div30, "class", "columns margins svelte-bitxd9");
      add_location(div30, file$3, 230, 4, 7917);
      attr_dev(div31, "class", "svelte-bitxd9");
      add_location(div31, file$3, 227, 2, 7879);
      attr_dev(section, "class", "svelte-bitxd9");
      add_location(section, file$3, 4, 0, 61);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div1);
      append_dev(div1, div0);
      mount_component(select0, div0, null);
      append_dev(div0, t3);
      append_dev(div0, pre0);
      append_dev(pre0, t4);
      append_dev(pre0, t5);
      append_dev(section, t6);
      append_dev(section, div7);
      append_dev(div7, t7);
      append_dev(div7, br0);
      append_dev(div7, t8);
      append_dev(div7, div6);
      append_dev(div6, div2);
      mount_component(select1, div2, null);
      append_dev(div2, t9);
      append_dev(div2, pre1);
      append_dev(pre1, t10);
      append_dev(pre1, t11);
      append_dev(div6, t12);
      append_dev(div6, div3);
      mount_component(select2, div3, null);
      append_dev(div3, t13);
      mount_component(helpertext0, div3, null);
      append_dev(div3, t14);
      append_dev(div3, pre2);
      append_dev(pre2, t15);
      append_dev(pre2, t16);
      append_dev(div6, t17);
      append_dev(div6, div4);
      mount_component(select3, div4, null);
      append_dev(div4, t18);
      append_dev(div4, pre3);
      append_dev(pre3, t19);
      append_dev(pre3, t20);
      append_dev(div6, t21);
      append_dev(div6, div5);
      mount_component(select4, div5, null);
      append_dev(div5, t22);
      append_dev(div5, pre4);
      append_dev(pre4, t23);
      append_dev(pre4, t24);
      append_dev(section, t25);
      append_dev(section, div13);
      append_dev(div13, t26);
      append_dev(div13, br1);
      append_dev(div13, t27);
      append_dev(div13, div12);
      append_dev(div12, div8);
      mount_component(select5, div8, null);
      append_dev(div8, t28);
      append_dev(div8, pre5);
      append_dev(pre5, t29);
      append_dev(pre5, t30);
      append_dev(div12, t31);
      append_dev(div12, div9);
      mount_component(select6, div9, null);
      append_dev(div9, t32);
      mount_component(helpertext1, div9, null);
      append_dev(div9, t33);
      append_dev(div9, pre6);
      append_dev(pre6, t34);
      append_dev(pre6, t35);
      append_dev(div12, t36);
      append_dev(div12, div10);
      mount_component(select7, div10, null);
      append_dev(div10, t37);
      append_dev(div10, pre7);
      append_dev(pre7, t38);
      append_dev(pre7, t39);
      append_dev(div12, t40);
      append_dev(div12, div11);
      mount_component(select8, div11, null);
      append_dev(div11, t41);
      append_dev(div11, pre8);
      append_dev(pre8, t42);
      append_dev(pre8, t43);
      append_dev(section, t44);
      append_dev(section, div19);
      append_dev(div19, t45);
      append_dev(div19, br2);
      append_dev(div19, t46);
      append_dev(div19, div18);
      append_dev(div18, div14);
      mount_component(select9, div14, null);
      append_dev(div14, t47);
      append_dev(div14, pre9);
      append_dev(pre9, t48);
      append_dev(pre9, t49);
      append_dev(div18, t50);
      append_dev(div18, div15);
      mount_component(select10, div15, null);
      append_dev(div15, t51);
      mount_component(helpertext2, div15, null);
      append_dev(div15, t52);
      append_dev(div15, pre10);
      append_dev(pre10, t53);
      append_dev(pre10, t54);
      append_dev(div18, t55);
      append_dev(div18, div16);
      mount_component(select11, div16, null);
      append_dev(div16, t56);
      append_dev(div16, pre11);
      append_dev(pre11, t57);
      append_dev(pre11, t58);
      append_dev(div18, t59);
      append_dev(div18, div17);
      mount_component(select12, div17, null);
      append_dev(div17, t60);
      append_dev(div17, pre12);
      append_dev(pre12, t61);
      append_dev(pre12, t62);
      append_dev(section, t63);
      append_dev(section, div25);
      append_dev(div25, t64);
      append_dev(div25, br3);
      append_dev(div25, t65);
      append_dev(div25, div24);
      append_dev(div24, div20);
      mount_component(select13, div20, null);
      append_dev(div20, t66);
      append_dev(div20, pre13);
      append_dev(pre13, t67);
      append_dev(pre13, t68);
      append_dev(div24, t69);
      append_dev(div24, div21);
      mount_component(select14, div21, null);
      append_dev(div21, t70);
      mount_component(helpertext3, div21, null);
      append_dev(div21, t71);
      append_dev(div21, pre14);
      append_dev(pre14, t72);
      append_dev(pre14, t73);
      append_dev(div24, t74);
      append_dev(div24, div22);
      mount_component(select15, div22, null);
      append_dev(div22, t75);
      append_dev(div22, pre15);
      append_dev(pre15, t76);
      append_dev(pre15, t77);
      append_dev(div24, t78);
      append_dev(div24, div23);
      mount_component(select16, div23, null);
      append_dev(div23, t79);
      append_dev(div23, pre16);
      append_dev(pre16, t80);
      append_dev(pre16, t81);
      append_dev(section, t82);
      append_dev(section, div31);
      append_dev(div31, t83);
      append_dev(div31, br4);
      append_dev(div31, t84);
      append_dev(div31, div30);
      append_dev(div30, div26);
      mount_component(select17, div26, null);
      append_dev(div26, t85);
      append_dev(div26, pre17);
      append_dev(pre17, t86);
      append_dev(pre17, t87);
      append_dev(div30, t88);
      append_dev(div30, div27);
      mount_component(select18, div27, null);
      append_dev(div27, t89);
      mount_component(helpertext4, div27, null);
      append_dev(div27, t90);
      append_dev(div27, pre18);
      append_dev(pre18, t91);
      append_dev(pre18, t92);
      append_dev(div30, t93);
      append_dev(div30, div28);
      mount_component(select19, div28, null);
      append_dev(div28, t94);
      append_dev(div28, pre19);
      append_dev(pre19, t95);
      append_dev(pre19, t96);
      append_dev(div30, t97);
      append_dev(div30, div29);
      mount_component(select20, div29, null);
      append_dev(div29, t98);
      append_dev(div29, pre20);
      append_dev(pre20, t99);
      append_dev(pre20, t100);
      current = true;
    },
    p: function update(ctx, dirty) {
      var select0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value && dirty[0] &
      /*valuePrefilled*/
      1) {
        updating_value = true;
        select0_changes.value =
        /*valuePrefilled*/
        ctx[0];
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      select0.$set(select0_changes);
      if (!current || dirty[0] &
      /*valuePrefilled*/
      1) set_data_dev(t5,
      /*valuePrefilled*/
      ctx[0]);
      var select1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_1 && dirty[0] &
      /*valueStandard*/
      2) {
        updating_value_1 = true;
        select1_changes.value =
        /*valueStandard*/
        ctx[1];
        add_flush_callback(function () {
          return updating_value_1 = false;
        });
      }

      select1.$set(select1_changes);
      if (!current || dirty[0] &
      /*valueStandard*/
      2) set_data_dev(t11,
      /*valueStandard*/
      ctx[1]);
      var select2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_2 && dirty[0] &
      /*valueStandardHelperText*/
      4) {
        updating_value_2 = true;
        select2_changes.value =
        /*valueStandardHelperText*/
        ctx[2];
        add_flush_callback(function () {
          return updating_value_2 = false;
        });
      }

      select2.$set(select2_changes);
      var helpertext0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        helpertext0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      helpertext0.$set(helpertext0_changes);
      if (!current || dirty[0] &
      /*valueStandardHelperText*/
      4) set_data_dev(t16,
      /*valueStandardHelperText*/
      ctx[2]);
      var select3_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_3 && dirty[0] &
      /*valueStandardLeadingIcon*/
      8) {
        updating_value_3 = true;
        select3_changes.value =
        /*valueStandardLeadingIcon*/
        ctx[3];
        add_flush_callback(function () {
          return updating_value_3 = false;
        });
      }

      select3.$set(select3_changes);
      if (!current || dirty[0] &
      /*valueStandardLeadingIcon*/
      8) set_data_dev(t20,
      /*valueStandardLeadingIcon*/
      ctx[3]);
      var select4_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_4 && dirty[0] &
      /*valueStandardInvalid*/
      16) {
        updating_value_4 = true;
        select4_changes.value =
        /*valueStandardInvalid*/
        ctx[4];
        add_flush_callback(function () {
          return updating_value_4 = false;
        });
      }

      select4.$set(select4_changes);
      if (!current || dirty[0] &
      /*valueStandardInvalid*/
      16) set_data_dev(t24,
      /*valueStandardInvalid*/
      ctx[4]);
      var select5_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_5 && dirty[0] &
      /*valueFilled*/
      32) {
        updating_value_5 = true;
        select5_changes.value =
        /*valueFilled*/
        ctx[5];
        add_flush_callback(function () {
          return updating_value_5 = false;
        });
      }

      select5.$set(select5_changes);
      if (!current || dirty[0] &
      /*valueFilled*/
      32) set_data_dev(t30,
      /*valueFilled*/
      ctx[5]);
      var select6_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_6 && dirty[0] &
      /*valueFilledHelperText*/
      64) {
        updating_value_6 = true;
        select6_changes.value =
        /*valueFilledHelperText*/
        ctx[6];
        add_flush_callback(function () {
          return updating_value_6 = false;
        });
      }

      select6.$set(select6_changes);
      var helpertext1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        helpertext1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      helpertext1.$set(helpertext1_changes);
      if (!current || dirty[0] &
      /*valueFilledHelperText*/
      64) set_data_dev(t35,
      /*valueFilledHelperText*/
      ctx[6]);
      var select7_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_7 && dirty[0] &
      /*valueFilledLeadingIcon*/
      128) {
        updating_value_7 = true;
        select7_changes.value =
        /*valueFilledLeadingIcon*/
        ctx[7];
        add_flush_callback(function () {
          return updating_value_7 = false;
        });
      }

      select7.$set(select7_changes);
      if (!current || dirty[0] &
      /*valueFilledLeadingIcon*/
      128) set_data_dev(t39,
      /*valueFilledLeadingIcon*/
      ctx[7]);
      var select8_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select8_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_8 && dirty[0] &
      /*valueFilledInvalid*/
      256) {
        updating_value_8 = true;
        select8_changes.value =
        /*valueFilledInvalid*/
        ctx[8];
        add_flush_callback(function () {
          return updating_value_8 = false;
        });
      }

      select8.$set(select8_changes);
      if (!current || dirty[0] &
      /*valueFilledInvalid*/
      256) set_data_dev(t43,
      /*valueFilledInvalid*/
      ctx[8]);
      var select9_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select9_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_9 && dirty[0] &
      /*valueOutlined*/
      512) {
        updating_value_9 = true;
        select9_changes.value =
        /*valueOutlined*/
        ctx[9];
        add_flush_callback(function () {
          return updating_value_9 = false;
        });
      }

      select9.$set(select9_changes);
      if (!current || dirty[0] &
      /*valueOutlined*/
      512) set_data_dev(t49,
      /*valueOutlined*/
      ctx[9]);
      var select10_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select10_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_10 && dirty[0] &
      /*valueOutlinedHelperText*/
      1024) {
        updating_value_10 = true;
        select10_changes.value =
        /*valueOutlinedHelperText*/
        ctx[10];
        add_flush_callback(function () {
          return updating_value_10 = false;
        });
      }

      select10.$set(select10_changes);
      var helpertext2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        helpertext2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      helpertext2.$set(helpertext2_changes);
      if (!current || dirty[0] &
      /*valueOutlinedHelperText*/
      1024) set_data_dev(t54,
      /*valueOutlinedHelperText*/
      ctx[10]);
      var select11_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select11_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_11 && dirty[0] &
      /*valueOutlinedLeadingIcon*/
      2048) {
        updating_value_11 = true;
        select11_changes.value =
        /*valueOutlinedLeadingIcon*/
        ctx[11];
        add_flush_callback(function () {
          return updating_value_11 = false;
        });
      }

      select11.$set(select11_changes);
      if (!current || dirty[0] &
      /*valueOutlinedLeadingIcon*/
      2048) set_data_dev(t58,
      /*valueOutlinedLeadingIcon*/
      ctx[11]);
      var select12_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select12_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_12 && dirty[0] &
      /*valueOutlinedInvalid*/
      4096) {
        updating_value_12 = true;
        select12_changes.value =
        /*valueOutlinedInvalid*/
        ctx[12];
        add_flush_callback(function () {
          return updating_value_12 = false;
        });
      }

      select12.$set(select12_changes);
      if (!current || dirty[0] &
      /*valueOutlinedInvalid*/
      4096) set_data_dev(t62,
      /*valueOutlinedInvalid*/
      ctx[12]);
      var select13_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select13_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_13 && dirty[0] &
      /*valueShapedFilled*/
      8192) {
        updating_value_13 = true;
        select13_changes.value =
        /*valueShapedFilled*/
        ctx[13];
        add_flush_callback(function () {
          return updating_value_13 = false;
        });
      }

      select13.$set(select13_changes);
      if (!current || dirty[0] &
      /*valueShapedFilled*/
      8192) set_data_dev(t68,
      /*valueShapedFilled*/
      ctx[13]);
      var select14_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select14_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_14 && dirty[0] &
      /*valueShapedFilledHelperText*/
      16384) {
        updating_value_14 = true;
        select14_changes.value =
        /*valueShapedFilledHelperText*/
        ctx[14];
        add_flush_callback(function () {
          return updating_value_14 = false;
        });
      }

      select14.$set(select14_changes);
      var helpertext3_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        helpertext3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      helpertext3.$set(helpertext3_changes);
      if (!current || dirty[0] &
      /*valueShapedFilledHelperText*/
      16384) set_data_dev(t73,
      /*valueShapedFilledHelperText*/
      ctx[14]);
      var select15_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select15_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_15 && dirty[0] &
      /*valueShapedFilledLeadingIcon*/
      32768) {
        updating_value_15 = true;
        select15_changes.value =
        /*valueShapedFilledLeadingIcon*/
        ctx[15];
        add_flush_callback(function () {
          return updating_value_15 = false;
        });
      }

      select15.$set(select15_changes);
      if (!current || dirty[0] &
      /*valueShapedFilledLeadingIcon*/
      32768) set_data_dev(t77,
      /*valueShapedFilledLeadingIcon*/
      ctx[15]);
      var select16_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select16_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_16 && dirty[0] &
      /*valueShapedFilledInvalid*/
      65536) {
        updating_value_16 = true;
        select16_changes.value =
        /*valueShapedFilledInvalid*/
        ctx[16];
        add_flush_callback(function () {
          return updating_value_16 = false;
        });
      }

      select16.$set(select16_changes);
      if (!current || dirty[0] &
      /*valueShapedFilledInvalid*/
      65536) set_data_dev(t81,
      /*valueShapedFilledInvalid*/
      ctx[16]);
      var select17_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select17_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_17 && dirty[0] &
      /*valueShapedOutlined*/
      131072) {
        updating_value_17 = true;
        select17_changes.value =
        /*valueShapedOutlined*/
        ctx[17];
        add_flush_callback(function () {
          return updating_value_17 = false;
        });
      }

      select17.$set(select17_changes);
      if (!current || dirty[0] &
      /*valueShapedOutlined*/
      131072) set_data_dev(t87,
      /*valueShapedOutlined*/
      ctx[17]);
      var select18_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select18_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_18 && dirty[0] &
      /*valueShapedOutlinedHelperText*/
      262144) {
        updating_value_18 = true;
        select18_changes.value =
        /*valueShapedOutlinedHelperText*/
        ctx[18];
        add_flush_callback(function () {
          return updating_value_18 = false;
        });
      }

      select18.$set(select18_changes);
      var helpertext4_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        helpertext4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      helpertext4.$set(helpertext4_changes);
      if (!current || dirty[0] &
      /*valueShapedOutlinedHelperText*/
      262144) set_data_dev(t92,
      /*valueShapedOutlinedHelperText*/
      ctx[18]);
      var select19_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select19_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_19 && dirty[0] &
      /*valueShapedOutlinedLeadingIcon*/
      524288) {
        updating_value_19 = true;
        select19_changes.value =
        /*valueShapedOutlinedLeadingIcon*/
        ctx[19];
        add_flush_callback(function () {
          return updating_value_19 = false;
        });
      }

      select19.$set(select19_changes);
      if (!current || dirty[0] &
      /*valueShapedOutlinedLeadingIcon*/
      524288) set_data_dev(t96,
      /*valueShapedOutlinedLeadingIcon*/
      ctx[19]);
      var select20_changes = {};

      if (dirty[2] &
      /*$$scope*/
      16777216) {
        select20_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_value_20 && dirty[0] &
      /*valueShapedOutlinedInvalid*/
      1048576) {
        updating_value_20 = true;
        select20_changes.value =
        /*valueShapedOutlinedInvalid*/
        ctx[20];
        add_flush_callback(function () {
          return updating_value_20 = false;
        });
      }

      select20.$set(select20_changes);
      if (!current || dirty[0] &
      /*valueShapedOutlinedInvalid*/
      1048576) set_data_dev(t100,
      /*valueShapedOutlinedInvalid*/
      ctx[20]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(select0.$$.fragment, local);
      transition_in(select1.$$.fragment, local);
      transition_in(select2.$$.fragment, local);
      transition_in(helpertext0.$$.fragment, local);
      transition_in(select3.$$.fragment, local);
      transition_in(select4.$$.fragment, local);
      transition_in(select5.$$.fragment, local);
      transition_in(select6.$$.fragment, local);
      transition_in(helpertext1.$$.fragment, local);
      transition_in(select7.$$.fragment, local);
      transition_in(select8.$$.fragment, local);
      transition_in(select9.$$.fragment, local);
      transition_in(select10.$$.fragment, local);
      transition_in(helpertext2.$$.fragment, local);
      transition_in(select11.$$.fragment, local);
      transition_in(select12.$$.fragment, local);
      transition_in(select13.$$.fragment, local);
      transition_in(select14.$$.fragment, local);
      transition_in(helpertext3.$$.fragment, local);
      transition_in(select15.$$.fragment, local);
      transition_in(select16.$$.fragment, local);
      transition_in(select17.$$.fragment, local);
      transition_in(select18.$$.fragment, local);
      transition_in(helpertext4.$$.fragment, local);
      transition_in(select19.$$.fragment, local);
      transition_in(select20.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(select0.$$.fragment, local);
      transition_out(select1.$$.fragment, local);
      transition_out(select2.$$.fragment, local);
      transition_out(helpertext0.$$.fragment, local);
      transition_out(select3.$$.fragment, local);
      transition_out(select4.$$.fragment, local);
      transition_out(select5.$$.fragment, local);
      transition_out(select6.$$.fragment, local);
      transition_out(helpertext1.$$.fragment, local);
      transition_out(select7.$$.fragment, local);
      transition_out(select8.$$.fragment, local);
      transition_out(select9.$$.fragment, local);
      transition_out(select10.$$.fragment, local);
      transition_out(helpertext2.$$.fragment, local);
      transition_out(select11.$$.fragment, local);
      transition_out(select12.$$.fragment, local);
      transition_out(select13.$$.fragment, local);
      transition_out(select14.$$.fragment, local);
      transition_out(helpertext3.$$.fragment, local);
      transition_out(select15.$$.fragment, local);
      transition_out(select16.$$.fragment, local);
      transition_out(select17.$$.fragment, local);
      transition_out(select18.$$.fragment, local);
      transition_out(helpertext4.$$.fragment, local);
      transition_out(select19.$$.fragment, local);
      transition_out(select20.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(select0);
      destroy_component(select1);
      destroy_component(select2);
      destroy_component(helpertext0);
      destroy_component(select3);
      destroy_component(select4);
      destroy_component(select5);
      destroy_component(select6);
      destroy_component(helpertext1);
      destroy_component(select7);
      destroy_component(select8);
      destroy_component(select9);
      destroy_component(select10);
      destroy_component(helpertext2);
      destroy_component(select11);
      destroy_component(select12);
      destroy_component(select13);
      destroy_component(select14);
      destroy_component(helpertext3);
      destroy_component(select15);
      destroy_component(select16);
      destroy_component(select17);
      destroy_component(select18);
      destroy_component(helpertext4);
      destroy_component(select19);
      destroy_component(select20);
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
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Select", slots, []);
  var fruits = ["Apple", "Orange", "Banana", "Mango"];
  var valuePrefilled = "Orange";
  var valueStandard = "";
  var valueStandardHelperText = "";
  var valueStandardLeadingIcon = "";
  var valueStandardInvalid = "";
  var valueFilled = "";
  var valueFilledHelperText = "";
  var valueFilledLeadingIcon = "";
  var valueFilledInvalid = "";
  var valueOutlined = "";
  var valueOutlinedHelperText = "";
  var valueOutlinedLeadingIcon = "";
  var valueOutlinedInvalid = "";
  var valueShapedFilled = "";
  var valueShapedFilledHelperText = "";
  var valueShapedFilledLeadingIcon = "";
  var valueShapedFilledInvalid = "";
  var valueShapedOutlined = "";
  var valueShapedOutlinedHelperText = "";
  var valueShapedOutlinedLeadingIcon = "";
  var valueShapedOutlinedInvalid = "";
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Select> was created with unknown prop '".concat(key, "'"));
  });

  function select0_value_binding(value) {
    valuePrefilled = value;
    $$invalidate(0, valuePrefilled);
  }

  function select1_value_binding(value) {
    valueStandard = value;
    $$invalidate(1, valueStandard);
  }

  function select2_value_binding(value) {
    valueStandardHelperText = value;
    $$invalidate(2, valueStandardHelperText);
  }

  function select3_value_binding(value) {
    valueStandardLeadingIcon = value;
    $$invalidate(3, valueStandardLeadingIcon);
  }

  function select4_value_binding(value) {
    valueStandardInvalid = value;
    $$invalidate(4, valueStandardInvalid);
  }

  function select5_value_binding(value) {
    valueFilled = value;
    $$invalidate(5, valueFilled);
  }

  function select6_value_binding(value) {
    valueFilledHelperText = value;
    $$invalidate(6, valueFilledHelperText);
  }

  function select7_value_binding(value) {
    valueFilledLeadingIcon = value;
    $$invalidate(7, valueFilledLeadingIcon);
  }

  function select8_value_binding(value) {
    valueFilledInvalid = value;
    $$invalidate(8, valueFilledInvalid);
  }

  function select9_value_binding(value) {
    valueOutlined = value;
    $$invalidate(9, valueOutlined);
  }

  function select10_value_binding(value) {
    valueOutlinedHelperText = value;
    $$invalidate(10, valueOutlinedHelperText);
  }

  function select11_value_binding(value) {
    valueOutlinedLeadingIcon = value;
    $$invalidate(11, valueOutlinedLeadingIcon);
  }

  function select12_value_binding(value) {
    valueOutlinedInvalid = value;
    $$invalidate(12, valueOutlinedInvalid);
  }

  function select13_value_binding(value) {
    valueShapedFilled = value;
    $$invalidate(13, valueShapedFilled);
  }

  function select14_value_binding(value) {
    valueShapedFilledHelperText = value;
    $$invalidate(14, valueShapedFilledHelperText);
  }

  function select15_value_binding(value) {
    valueShapedFilledLeadingIcon = value;
    $$invalidate(15, valueShapedFilledLeadingIcon);
  }

  function select16_value_binding(value) {
    valueShapedFilledInvalid = value;
    $$invalidate(16, valueShapedFilledInvalid);
  }

  function select17_value_binding(value) {
    valueShapedOutlined = value;
    $$invalidate(17, valueShapedOutlined);
  }

  function select18_value_binding(value) {
    valueShapedOutlinedHelperText = value;
    $$invalidate(18, valueShapedOutlinedHelperText);
  }

  function select19_value_binding(value) {
    valueShapedOutlinedLeadingIcon = value;
    $$invalidate(19, valueShapedOutlinedLeadingIcon);
  }

  function select20_value_binding(value) {
    valueShapedOutlinedInvalid = value;
    $$invalidate(20, valueShapedOutlinedInvalid);
  }

  $$self.$capture_state = function () {
    return {
      Select: Select,
      Option: Option,
      Icon: Icon,
      HelperText: HelperText,
      fruits: fruits,
      valuePrefilled: valuePrefilled,
      valueStandard: valueStandard,
      valueStandardHelperText: valueStandardHelperText,
      valueStandardLeadingIcon: valueStandardLeadingIcon,
      valueStandardInvalid: valueStandardInvalid,
      valueFilled: valueFilled,
      valueFilledHelperText: valueFilledHelperText,
      valueFilledLeadingIcon: valueFilledLeadingIcon,
      valueFilledInvalid: valueFilledInvalid,
      valueOutlined: valueOutlined,
      valueOutlinedHelperText: valueOutlinedHelperText,
      valueOutlinedLeadingIcon: valueOutlinedLeadingIcon,
      valueOutlinedInvalid: valueOutlinedInvalid,
      valueShapedFilled: valueShapedFilled,
      valueShapedFilledHelperText: valueShapedFilledHelperText,
      valueShapedFilledLeadingIcon: valueShapedFilledLeadingIcon,
      valueShapedFilledInvalid: valueShapedFilledInvalid,
      valueShapedOutlined: valueShapedOutlined,
      valueShapedOutlinedHelperText: valueShapedOutlinedHelperText,
      valueShapedOutlinedLeadingIcon: valueShapedOutlinedLeadingIcon,
      valueShapedOutlinedInvalid: valueShapedOutlinedInvalid
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("fruits" in $$props) $$invalidate(21, fruits = $$props.fruits);
    if ("valuePrefilled" in $$props) $$invalidate(0, valuePrefilled = $$props.valuePrefilled);
    if ("valueStandard" in $$props) $$invalidate(1, valueStandard = $$props.valueStandard);
    if ("valueStandardHelperText" in $$props) $$invalidate(2, valueStandardHelperText = $$props.valueStandardHelperText);
    if ("valueStandardLeadingIcon" in $$props) $$invalidate(3, valueStandardLeadingIcon = $$props.valueStandardLeadingIcon);
    if ("valueStandardInvalid" in $$props) $$invalidate(4, valueStandardInvalid = $$props.valueStandardInvalid);
    if ("valueFilled" in $$props) $$invalidate(5, valueFilled = $$props.valueFilled);
    if ("valueFilledHelperText" in $$props) $$invalidate(6, valueFilledHelperText = $$props.valueFilledHelperText);
    if ("valueFilledLeadingIcon" in $$props) $$invalidate(7, valueFilledLeadingIcon = $$props.valueFilledLeadingIcon);
    if ("valueFilledInvalid" in $$props) $$invalidate(8, valueFilledInvalid = $$props.valueFilledInvalid);
    if ("valueOutlined" in $$props) $$invalidate(9, valueOutlined = $$props.valueOutlined);
    if ("valueOutlinedHelperText" in $$props) $$invalidate(10, valueOutlinedHelperText = $$props.valueOutlinedHelperText);
    if ("valueOutlinedLeadingIcon" in $$props) $$invalidate(11, valueOutlinedLeadingIcon = $$props.valueOutlinedLeadingIcon);
    if ("valueOutlinedInvalid" in $$props) $$invalidate(12, valueOutlinedInvalid = $$props.valueOutlinedInvalid);
    if ("valueShapedFilled" in $$props) $$invalidate(13, valueShapedFilled = $$props.valueShapedFilled);
    if ("valueShapedFilledHelperText" in $$props) $$invalidate(14, valueShapedFilledHelperText = $$props.valueShapedFilledHelperText);
    if ("valueShapedFilledLeadingIcon" in $$props) $$invalidate(15, valueShapedFilledLeadingIcon = $$props.valueShapedFilledLeadingIcon);
    if ("valueShapedFilledInvalid" in $$props) $$invalidate(16, valueShapedFilledInvalid = $$props.valueShapedFilledInvalid);
    if ("valueShapedOutlined" in $$props) $$invalidate(17, valueShapedOutlined = $$props.valueShapedOutlined);
    if ("valueShapedOutlinedHelperText" in $$props) $$invalidate(18, valueShapedOutlinedHelperText = $$props.valueShapedOutlinedHelperText);
    if ("valueShapedOutlinedLeadingIcon" in $$props) $$invalidate(19, valueShapedOutlinedLeadingIcon = $$props.valueShapedOutlinedLeadingIcon);
    if ("valueShapedOutlinedInvalid" in $$props) $$invalidate(20, valueShapedOutlinedInvalid = $$props.valueShapedOutlinedInvalid);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [valuePrefilled, valueStandard, valueStandardHelperText, valueStandardLeadingIcon, valueStandardInvalid, valueFilled, valueFilledHelperText, valueFilledLeadingIcon, valueFilledInvalid, valueOutlined, valueOutlinedHelperText, valueOutlinedLeadingIcon, valueOutlinedInvalid, valueShapedFilled, valueShapedFilledHelperText, valueShapedFilledLeadingIcon, valueShapedFilledInvalid, valueShapedOutlined, valueShapedOutlinedHelperText, valueShapedOutlinedLeadingIcon, valueShapedOutlinedInvalid, fruits, select0_value_binding, select1_value_binding, select2_value_binding, select3_value_binding, select4_value_binding, select5_value_binding, select6_value_binding, select7_value_binding, select8_value_binding, select9_value_binding, select10_value_binding, select11_value_binding, select12_value_binding, select13_value_binding, select14_value_binding, select15_value_binding, select16_value_binding, select17_value_binding, select18_value_binding, select19_value_binding, select20_value_binding];
}

var Select_1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Select_1, _SvelteComponentDev);

  var _super = _createSuper$4(Select_1);

  function Select_1(options) {
    var _this;

    _classCallCheck$1(this, Select_1);

    _this = _super.call(this, options);
    if (!document.getElementById("svelte-bitxd9-style")) add_css();
    init(_assertThisInitialized$1(_this), options, instance$4, create_fragment$4, safe_not_equal, {}, [-1, -1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Select_1",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  return Select_1;
}(SvelteComponentDev);

export default Select_1;
