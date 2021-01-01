import { Y as _inherits, Z as _getPrototypeOf, $ as _possibleConstructorReturn, a0 as _classCallCheck, i as init, s as safe_not_equal, a1 as _assertThisInitialized, e as dispatch_dev, a2 as _createClass, S as SvelteComponentDev, ah as create_slot, a3 as exclude, a4 as assign, w as validate_slots, a5 as forwardEventsBuilder, a6 as get_current_component, a9 as exclude_internal_props, aa as useActions, g as element, k as claim_element, l as children, h as detach_dev, ab as set_attributes, p as add_location, r as insert_dev, A as action_destroyer, ac as _slicedToArray, al as update_slot, ad as get_spread_update, ae as is_function, C as transition_in, D as transition_out, af as run_all, X as styleInject, _ as _inherits$1, a as _getPrototypeOf$1, b as _possibleConstructorReturn$1, c as _classCallCheck$1, d as _assertThisInitialized$1, u as append_dev, ag as Button_1$1, aA as Label, aB as Icon, f as space, t as text, x as create_component, q as query_selector_all, j as claim_space, m as claim_text, y as claim_component, o as attr_dev, z as mount_component, U as set_data_dev, E as destroy_component, as as List, at as Item, au as Text, L as binding_callbacks } from './client.7aab66ca.js';
import { S as Separator } from './Separator.ce5ac247.js';
import './MenuSurface.7cb1c1c1.js';
import './SelectionGroupIcon.33e8964f.js';
import { M as Menu } from './Menu.ed8f12c9.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "../packages/button/Group.svelte";

function create_fragment(ctx) {
  var div;
  var div_class_value;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[5], null);
  var div_levels = [{
    class: div_class_value = "\n    smui-button__group\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*variant*/
    ctx[2] === "raised" ? "smui-button__group--raised" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[4], ["use", "class", "variant"])];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, div,
        /*use*/
        ctx[0])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[3].call(null, div))];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        32) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[5], dirty, null, null);
        }
      }

      set_attributes(div, div_data = get_spread_update(div_levels, [(!current || dirty &
      /*className, variant*/
      6 && div_class_value !== (div_class_value = "\n    smui-button__group\n    " +
      /*className*/
      ctx[1] + "\n    " + (
      /*variant*/
      ctx[2] === "raised" ? "smui-button__group--raised" : "") + "\n  ")) && {
        class: div_class_value
      }, dirty &
      /*$$props*/
      16 && exclude(
      /*$$props*/
      ctx[4], ["use", "class", "variant"])]));
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
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
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

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Group", slots, ['default']);
  var forwardEvents = forwardEventsBuilder(get_current_component());
  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;
  var _$$props4 = $$props,
      _$$props4$variant = _$$props4.variant,
      variant = _$$props4$variant === void 0 ? "text" : _$$props4$variant;

  $$self.$$set = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
    if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      variant: variant
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, variant, forwardEvents, $$props, $$scope, slots];
}

var Group = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Group, _SvelteComponentDev);

  var _super = _createSuper(Group);

  function Group(options) {
    var _this;

    _classCallCheck(this, Group);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      variant: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Group",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Group, [{
    key: "use",
    get: function get() {
      throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Group;
}(SvelteComponentDev);

function GroupItem(node) {
  node.classList.add('smui-button__group-item');
  return {
    destroy: function destroy() {
      node.classList.remove('smui-button__group-item');
    }
  };
}

var css_248z = ".button-shaped-round,.button-shaped-round .mdc-button__ripple{border-radius:999px}.button-shaped-notch{--notchSize:8px;-webkit-clip-path:polygon(0 var(--notchSize),var(--notchSize) 0,calc(100% - var(--notchSize)) 0,100% var(--notchSize),100% calc(100% - var(--notchSize)),calc(100% - var(--notchSize)) 100%,var(--notchSize) 100%,0 calc(100% - var(--notchSize)));clip-path:polygon(0 var(--notchSize),var(--notchSize) 0,calc(100% - var(--notchSize)) 0,100% var(--notchSize),100% calc(100% - var(--notchSize)),calc(100% - var(--notchSize)) 100%,var(--notchSize) 100%,0 calc(100% - var(--notchSize)))}";
styleInject(css_248z);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/demo/button.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-18uebmb-style";
  style.textContent = ".svelte-18uebmb .myClass{text-decoration:underline !important}.svelte-18uebmb .mdc-button, .smui-button__group{margin-bottom:.4em}.svelte-18uebmb .smui-button__group .mdc-button{margin-bottom:0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN2ZWx0ZSIsInNvdXJjZXMiOlsiYnV0dG9uLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5CdXR0b24gLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+QnV0dG9uPC9oMj5cblxuICA8ZGl2PlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPkRlZmF1bHQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGlzYWJsZWQ+PExhYmVsPkRpc2FibGVkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHJpcHBsZT17ZmFsc2V9PjxMYWJlbD5ObyBSaXBwbGU8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5SYWlzZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj48TGFiZWw+T3V0bGluZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gY2xhc3M9XCJteUNsYXNzXCI+PExhYmVsPldpdGggYSBDbGFzczwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBocmVmPVwiaHR0cDovL2V4YW1wbGUuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PExhYmVsPkxpbmsgQnV0dG9uPC9MYWJlbD48L0J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48TGFiZWw+SWNvbjwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT48TGFiZWw+VHJhaWxpbmcgSWNvbjwvTGFiZWw+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjwvQnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIEluY3JlYXNlZCB0b3VjaCB0YXJnZXQ6IDxiciAvPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdG91Y2g+PExhYmVsPkRlZmF1bHQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdG91Y2ggdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5SYWlzZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdG91Y2ggdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB0b3VjaCB2YXJpYW50PVwib3V0bGluZWRcIj48TGFiZWw+T3V0bGluZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdG91Y2ggaHJlZj1cImh0dHA6Ly9leGFtcGxlLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPjxMYWJlbD5MaW5rIEJ1dHRvbjwvTGFiZWw+PC9CdXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgU2Vjb25kYXJ5IGNvbG9yOiA8YnIgLz5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPkRlZmF1bHQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBkaXNhYmxlZD48TGFiZWw+RGlzYWJsZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSByaXBwbGU9e2ZhbHNlfT48TGFiZWw+Tm8gUmlwcGxlPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5SYWlzZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiPjxMYWJlbD5VbmVsZXZhdGVkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+PExhYmVsPk91dGxpbmVkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gY2xhc3M9XCJteUNsYXNzXCI+PExhYmVsPldpdGggYSBDbGFzczwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGhyZWY9XCJodHRwOi8vZXhhbXBsZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj48TGFiZWw+TGluayBCdXR0b248L0xhYmVsPjwvQnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PExhYmVsPkljb248L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT48TGFiZWw+VHJhaWxpbmcgSWNvbjwvTGFiZWw+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjwvQnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIEJ1dHRvbiBncm91cHM6IDxiciAvPlxuICAgIDxHcm91cD5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPk9uZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxMYWJlbD5Ud288L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT48TGFiZWw+VGhyZWU8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDwvR3JvdXA+XG4gICAgPEdyb3VwIHZhcmlhbnQ9XCJyYWlzZWRcIj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5PbmU8L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+PExhYmVsPlR3bzwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj48TGFiZWw+VGhyZWU8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDwvR3JvdXA+XG4gICAgPEdyb3VwIHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+PExhYmVsPk9uZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+PExhYmVsPlR3bzwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+PExhYmVsPlRocmVlPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8L0dyb3VwPlxuICAgIDxHcm91cCB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+PExhYmVsPk9uZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPjxMYWJlbD5Ud288L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj48TGFiZWw+VGhyZWU8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDwvR3JvdXA+XG5cbiAgICA8YnIgLz4gPGJyLz5cblxuICAgIDxHcm91cCB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcIj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIndpZHRoOiA2MCU7XCI+PExhYmVsPlByaW1hcnk8L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+PExhYmVsPlNlY29uZGFyeTwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIj48TGFiZWw+U2Vjb25kYXJ5PC9MYWJlbD48L0J1dHRvbj5cbiAgICA8L0dyb3VwPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIFNwbGl0IGJ1dHRvbnMgdXNpbmcgYSBidXR0b24gZ3JvdXA6IDxiciAvPlxuICAgIDxHcm91cCB2YXJpYW50PVwicmFpc2VkXCI+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj48TGFiZWw+RG8gdGhlIHRoaW5nPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxkaXYgdXNlOkdyb3VwSXRlbT5cbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gbWVudS5zZXRPcGVuKHRydWUpfSB2YXJpYW50PVwicmFpc2VkXCIgc3R5bGU9XCJwYWRkaW5nOiAwOyBtaW4td2lkdGg6IDM2cHg7XCI+XG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHN0eWxlPVwibWFyZ2luOiAwO1wiPmFycm93X2Ryb3BfZG93bjwvSWNvbj5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxNZW51IGJpbmQ6dGhpcz17bWVudX0gYW5jaG9yQ29ybmVyPVwiVE9QX0xFRlRcIj5cbiAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PjxUZXh0PlRoaW5nIDE8L1RleHQ+PC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+PFRleHQ+VGhpbmcgMjwvVGV4dD48L0l0ZW0+XG4gICAgICAgICAgICA8U2VwYXJhdG9yIC8+XG4gICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT48VGV4dD5UaGluZyAzPC9UZXh0PjwvSXRlbT5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvZGl2PlxuICAgIDwvR3JvdXA+XG4gICAgPEdyb3VwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj48TGFiZWw+RG8gdGhlIHRoaW5nPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxkaXYgdXNlOkdyb3VwSXRlbT5cbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gbWVudTIuc2V0T3Blbih0cnVlKX0gdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9XCJwYWRkaW5nOiAwOyBtaW4td2lkdGg6IDM2cHg7XCI+XG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHN0eWxlPVwibWFyZ2luOiAwO1wiPmFycm93X2Ryb3BfZG93bjwvSWNvbj5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxNZW51IGJpbmQ6dGhpcz17bWVudTJ9IGFuY2hvckNvcm5lcj1cIlRPUF9MRUZUXCI+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT48VGV4dD5UaGluZyAxPC9UZXh0PjwvSXRlbT5cbiAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PjxUZXh0PlRoaW5nIDI8L1RleHQ+PC9JdGVtPlxuICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxuICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+PFRleHQ+VGhpbmcgMzwvVGV4dD48L0l0ZW0+XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L2Rpdj5cbiAgICA8L0dyb3VwPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIENyZWF0aW5nIHJvdW5kZWQgYnV0dG9ucyB3aXRoIFNhc3MgbWl4aW5zOiA8YnIgLz5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIiBjbGFzcz1cImJ1dHRvbi1zaGFwZWQtcm91bmRcIj48TGFiZWw+UmFpc2VkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCIgY2xhc3M9XCJidXR0b24tc2hhcGVkLXJvdW5kXCI+PExhYmVsPlVuZWxldmF0ZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3M9XCJidXR0b24tc2hhcGVkLXJvdW5kXCI+PExhYmVsPk91dGxpbmVkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCIgY2xhc3M9XCJidXR0b24tc2hhcGVkLXJvdW5kXCI+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjxMYWJlbD5JY29uPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzPVwiYnV0dG9uLXNoYXBlZC1yb3VuZFwiPjxMYWJlbD5UcmFpbGluZyBJY29uPC9MYWJlbD48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PC9CdXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgQ3JlYXRpbmcgbm90Y2hlZCBidXR0b25zIHdpdGggdmFuaWxsYSBTYXNzOiA8YnIgLz5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIiBjbGFzcz1cImJ1dHRvbi1zaGFwZWQtbm90Y2hcIj48TGFiZWw+UmFpc2VkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCIgY2xhc3M9XCJidXR0b24tc2hhcGVkLW5vdGNoXCI+PExhYmVsPlVuZWxldmF0ZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjbGFzcz1cImJ1dHRvbi1zaGFwZWQtbm90Y2hcIj48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PExhYmVsPkljb248L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjbGFzcz1cImJ1dHRvbi1zaGFwZWQtbm90Y2hcIj48TGFiZWw+VHJhaWxpbmcgSWNvbjwvTGFiZWw+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjwvQnV0dG9uPlxuICA8L2Rpdj5cblxuICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+Q2xpY2tlZDoge2NsaWNrZWR9PC9wcmU+XG48L3NlY3Rpb24+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCAnLi9idXR0b24uc2Nzcyc7XG4gIGltcG9ydCBCdXR0b24sIHtHcm91cCwgR3JvdXBJdGVtLCBMYWJlbCwgSWNvbn0gZnJvbSAnQHNtdWkvYnV0dG9uJztcbiAgaW1wb3J0IE1lbnUgZnJvbSAnQHNtdWkvbWVudSc7XG4gIGltcG9ydCBMaXN0LCB7SXRlbSwgU2VwYXJhdG9yLCBUZXh0fSBmcm9tICdAc211aS9saXN0JztcblxuICBsZXQgY2xpY2tlZCA9IDA7XG4gIGxldCBtZW51O1xuICBsZXQgbWVudTI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAqIDpnbG9iYWwoLm15Q2xhc3MpIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgKiA6Z2xvYmFsKC5tZGMtYnV0dG9uLCAuc211aS1idXR0b25fX2dyb3VwKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjRlbTtcbiAgfVxuXG4gICogOmdsb2JhbCguc211aS1idXR0b25fX2dyb3VwIC5tZGMtYnV0dG9uKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUpFLGVBQUMsQ0FBQyxBQUFRLFFBQVEsQUFBRSxDQUFDLEFBQ25CLGVBQWUsQ0FBRSxTQUFTLENBQUMsVUFBVSxBQUN2QyxDQUFDLEFBRUQsZUFBQyxDQUFDLEFBQVEsZ0NBQWdDLEFBQUUsQ0FBQyxBQUMzQyxhQUFhLENBQUUsSUFBSSxBQUNyQixDQUFDLEFBRUQsZUFBQyxDQUFDLEFBQVEsK0JBQStCLEFBQUUsQ0FBQyxBQUMxQyxhQUFhLENBQUUsQ0FBQyxBQUNsQixDQUFDIn0= */";
  append_dev(document.head, style);
} // (9:39) <Label>


function create_default_slot_136(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Default");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Default");
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
    id: create_default_slot_136.name,
    type: "slot",
    source: "(9:39) <Label>",
    ctx: ctx
  });
  return block;
} // (9:4) <Button on:click={() => clicked++}>


function create_default_slot_135(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_136]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_135.name,
    type: "slot",
    source: "(9:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (10:48) <Label>


function create_default_slot_134(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Disabled");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Disabled");
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
    id: create_default_slot_134.name,
    type: "slot",
    source: "(10:48) <Label>",
    ctx: ctx
  });
  return block;
} // (10:4) <Button on:click={() => clicked++} disabled>


function create_default_slot_133(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_134]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_133.name,
    type: "slot",
    source: "(10:4) <Button on:click={() => clicked++} disabled>",
    ctx: ctx
  });
  return block;
} // (11:54) <Label>


function create_default_slot_132(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("No Ripple");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No Ripple");
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
    id: create_default_slot_132.name,
    type: "slot",
    source: "(11:54) <Label>",
    ctx: ctx
  });
  return block;
} // (11:4) <Button on:click={() => clicked++} ripple={false}>


function create_default_slot_131(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_132]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_131.name,
    type: "slot",
    source: "(11:4) <Button on:click={() => clicked++} ripple={false}>",
    ctx: ctx
  });
  return block;
} // (12:56) <Label>


function create_default_slot_130(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_130.name,
    type: "slot",
    source: "(12:56) <Label>",
    ctx: ctx
  });
  return block;
} // (12:4) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_129(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_130]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_129.name,
    type: "slot",
    source: "(12:4) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (13:60) <Label>


function create_default_slot_128(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    id: create_default_slot_128.name,
    type: "slot",
    source: "(13:60) <Label>",
    ctx: ctx
  });
  return block;
} // (13:4) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_127(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_128]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_127.name,
    type: "slot",
    source: "(13:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (14:58) <Label>


function create_default_slot_126(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_126.name,
    type: "slot",
    source: "(14:58) <Label>",
    ctx: ctx
  });
  return block;
} // (14:4) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_125(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_126]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_125.name,
    type: "slot",
    source: "(14:4) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (15:55) <Label>


function create_default_slot_124(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("With a Class");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "With a Class");
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
    id: create_default_slot_124.name,
    type: "slot",
    source: "(15:55) <Label>",
    ctx: ctx
  });
  return block;
} // (15:4) <Button on:click={() => clicked++} class="myClass">


function create_default_slot_123(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_124]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_123.name,
    type: "slot",
    source: "(15:4) <Button on:click={() => clicked++} class=\\\"myClass\\\">",
    ctx: ctx
  });
  return block;
} // (16:81) <Label>


function create_default_slot_122(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Link Button");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Link Button");
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
    id: create_default_slot_122.name,
    type: "slot",
    source: "(16:81) <Label>",
    ctx: ctx
  });
  return block;
} // (16:4) <Button on:click={() => clicked++} href="http://example.com" target="_blank">


function create_default_slot_121(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_122]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_121.name,
    type: "slot",
    source: "(16:4) <Button on:click={() => clicked++} href=\\\"http://example.com\\\" target=\\\"_blank\\\">",
    ctx: ctx
  });
  return block;
} // (20:39) <Icon class="material-icons">


function create_default_slot_120(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_120.name,
    type: "slot",
    source: "(20:39) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (20:83) <Label>


function create_default_slot_119(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    id: create_default_slot_119.name,
    type: "slot",
    source: "(20:83) <Label>",
    ctx: ctx
  });
  return block;
} // (20:4) <Button on:click={() => clicked++}>


function create_default_slot_118(ctx) {
  var icon;
  var label;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_120]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_119]
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
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_118.name,
    type: "slot",
    source: "(20:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (21:39) <Label>


function create_default_slot_117(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    id: create_default_slot_117.name,
    type: "slot",
    source: "(21:39) <Label>",
    ctx: ctx
  });
  return block;
} // (21:67) <Icon class="material-icons">


function create_default_slot_116(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_116.name,
    type: "slot",
    source: "(21:67) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (21:4) <Button on:click={() => clicked++}>


function create_default_slot_115(ctx) {
  var label;
  var icon;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_117]
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
        default: [create_default_slot_116]
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
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_115.name,
    type: "slot",
    source: "(21:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (26:45) <Label>


function create_default_slot_114(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Default");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Default");
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
    id: create_default_slot_114.name,
    type: "slot",
    source: "(26:45) <Label>",
    ctx: ctx
  });
  return block;
} // (26:4) <Button on:click={() => clicked++} touch>


function create_default_slot_113(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_114]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_113.name,
    type: "slot",
    source: "(26:4) <Button on:click={() => clicked++} touch>",
    ctx: ctx
  });
  return block;
} // (27:62) <Label>


function create_default_slot_112(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_112.name,
    type: "slot",
    source: "(27:62) <Label>",
    ctx: ctx
  });
  return block;
} // (27:4) <Button on:click={() => clicked++} touch variant="raised">


function create_default_slot_111(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_112]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_111.name,
    type: "slot",
    source: "(27:4) <Button on:click={() => clicked++} touch variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (28:66) <Label>


function create_default_slot_110(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    id: create_default_slot_110.name,
    type: "slot",
    source: "(28:66) <Label>",
    ctx: ctx
  });
  return block;
} // (28:4) <Button on:click={() => clicked++} touch variant="unelevated">


function create_default_slot_109(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_110]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_109.name,
    type: "slot",
    source: "(28:4) <Button on:click={() => clicked++} touch variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (29:64) <Label>


function create_default_slot_108(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_108.name,
    type: "slot",
    source: "(29:64) <Label>",
    ctx: ctx
  });
  return block;
} // (29:4) <Button on:click={() => clicked++} touch variant="outlined">


function create_default_slot_107(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_108]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_107.name,
    type: "slot",
    source: "(29:4) <Button on:click={() => clicked++} touch variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (30:87) <Label>


function create_default_slot_106(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Link Button");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Link Button");
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
    id: create_default_slot_106.name,
    type: "slot",
    source: "(30:87) <Label>",
    ctx: ctx
  });
  return block;
} // (30:4) <Button on:click={() => clicked++} touch href="http://example.com" target="_blank">


function create_default_slot_105(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_106]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_105.name,
    type: "slot",
    source: "(30:4) <Button on:click={() => clicked++} touch href=\\\"http://example.com\\\" target=\\\"_blank\\\">",
    ctx: ctx
  });
  return block;
} // (35:57) <Label>


function create_default_slot_104(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Default");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Default");
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
    id: create_default_slot_104.name,
    type: "slot",
    source: "(35:57) <Label>",
    ctx: ctx
  });
  return block;
} // (35:4) <Button color="secondary" on:click={() => clicked++}>


function create_default_slot_103(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_104]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_103.name,
    type: "slot",
    source: "(35:4) <Button color=\\\"secondary\\\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (36:66) <Label>


function create_default_slot_102(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Disabled");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Disabled");
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
    id: create_default_slot_102.name,
    type: "slot",
    source: "(36:66) <Label>",
    ctx: ctx
  });
  return block;
} // (36:4) <Button color="secondary" on:click={() => clicked++} disabled>


function create_default_slot_101(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_102]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_101.name,
    type: "slot",
    source: "(36:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} disabled>",
    ctx: ctx
  });
  return block;
} // (37:72) <Label>


function create_default_slot_100(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("No Ripple");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No Ripple");
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
    id: create_default_slot_100.name,
    type: "slot",
    source: "(37:72) <Label>",
    ctx: ctx
  });
  return block;
} // (37:4) <Button color="secondary" on:click={() => clicked++} ripple={false}>


function create_default_slot_99(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_100]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_99.name,
    type: "slot",
    source: "(37:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} ripple={false}>",
    ctx: ctx
  });
  return block;
} // (38:74) <Label>


function create_default_slot_98(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_98.name,
    type: "slot",
    source: "(38:74) <Label>",
    ctx: ctx
  });
  return block;
} // (38:4) <Button color="secondary" on:click={() => clicked++} variant="raised">


function create_default_slot_97(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_98]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_97.name,
    type: "slot",
    source: "(38:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (39:78) <Label>


function create_default_slot_96(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    id: create_default_slot_96.name,
    type: "slot",
    source: "(39:78) <Label>",
    ctx: ctx
  });
  return block;
} // (39:4) <Button color="secondary" on:click={() => clicked++} variant="unelevated">


function create_default_slot_95(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_96]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_95.name,
    type: "slot",
    source: "(39:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (40:76) <Label>


function create_default_slot_94(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_94.name,
    type: "slot",
    source: "(40:76) <Label>",
    ctx: ctx
  });
  return block;
} // (40:4) <Button color="secondary" on:click={() => clicked++} variant="outlined">


function create_default_slot_93(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_94]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_93.name,
    type: "slot",
    source: "(40:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (41:73) <Label>


function create_default_slot_92(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("With a Class");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "With a Class");
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
    id: create_default_slot_92.name,
    type: "slot",
    source: "(41:73) <Label>",
    ctx: ctx
  });
  return block;
} // (41:4) <Button color="secondary" on:click={() => clicked++} class="myClass">


function create_default_slot_91(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_92]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_91.name,
    type: "slot",
    source: "(41:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} class=\\\"myClass\\\">",
    ctx: ctx
  });
  return block;
} // (42:99) <Label>


function create_default_slot_90(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Link Button");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Link Button");
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
    id: create_default_slot_90.name,
    type: "slot",
    source: "(42:99) <Label>",
    ctx: ctx
  });
  return block;
} // (42:4) <Button color="secondary" on:click={() => clicked++} href="http://example.com" target="_blank">


function create_default_slot_89(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_90]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_89.name,
    type: "slot",
    source: "(42:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} href=\\\"http://example.com\\\" target=\\\"_blank\\\">",
    ctx: ctx
  });
  return block;
} // (46:57) <Icon class="material-icons">


function create_default_slot_88(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_88.name,
    type: "slot",
    source: "(46:57) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (46:101) <Label>


function create_default_slot_87(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    id: create_default_slot_87.name,
    type: "slot",
    source: "(46:101) <Label>",
    ctx: ctx
  });
  return block;
} // (46:4) <Button color="secondary" on:click={() => clicked++}>


function create_default_slot_86(ctx) {
  var icon;
  var label;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_88]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_87]
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
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_86.name,
    type: "slot",
    source: "(46:4) <Button color=\\\"secondary\\\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (47:57) <Label>


function create_default_slot_85(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    id: create_default_slot_85.name,
    type: "slot",
    source: "(47:57) <Label>",
    ctx: ctx
  });
  return block;
} // (47:85) <Icon class="material-icons">


function create_default_slot_84(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_84.name,
    type: "slot",
    source: "(47:85) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (47:4) <Button color="secondary" on:click={() => clicked++}>


function create_default_slot_83(ctx) {
  var label;
  var icon;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_85]
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
        default: [create_default_slot_84]
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
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_83.name,
    type: "slot",
    source: "(47:4) <Button color=\\\"secondary\\\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (53:41) <Label>


function create_default_slot_82(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_82.name,
    type: "slot",
    source: "(53:41) <Label>",
    ctx: ctx
  });
  return block;
} // (53:6) <Button on:click={() => clicked++}>


function create_default_slot_81(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_82]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_81.name,
    type: "slot",
    source: "(53:6) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (54:41) <Label>


function create_default_slot_80(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_80.name,
    type: "slot",
    source: "(54:41) <Label>",
    ctx: ctx
  });
  return block;
} // (54:6) <Button on:click={() => clicked++}>


function create_default_slot_79(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_80]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_79.name,
    type: "slot",
    source: "(54:6) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (55:41) <Label>


function create_default_slot_78(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_78.name,
    type: "slot",
    source: "(55:41) <Label>",
    ctx: ctx
  });
  return block;
} // (55:6) <Button on:click={() => clicked++}>


function create_default_slot_77(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_78]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_77.name,
    type: "slot",
    source: "(55:6) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (52:4) <Group>


function create_default_slot_76(ctx) {
  var button0;
  var t0;
  var button1;
  var t1;
  var button2;
  var current;
  button0 = new Button_1$1({
    props: {
      $$slots: {
        default: [create_default_slot_81]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_25*/
  ctx[28]);
  button1 = new Button_1$1({
    props: {
      $$slots: {
        default: [create_default_slot_79]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_26*/
  ctx[29]);
  button2 = new Button_1$1({
    props: {
      $$slots: {
        default: [create_default_slot_77]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_27*/
  ctx[30]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_76.name,
    type: "slot",
    source: "(52:4) <Group>",
    ctx: ctx
  });
  return block;
} // (58:58) <Label>


function create_default_slot_75(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_75.name,
    type: "slot",
    source: "(58:58) <Label>",
    ctx: ctx
  });
  return block;
} // (58:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_74(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_75]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_74.name,
    type: "slot",
    source: "(58:6) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (59:58) <Label>


function create_default_slot_73(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_73.name,
    type: "slot",
    source: "(59:58) <Label>",
    ctx: ctx
  });
  return block;
} // (59:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_72(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_73]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_72.name,
    type: "slot",
    source: "(59:6) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (60:58) <Label>


function create_default_slot_71(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_71.name,
    type: "slot",
    source: "(60:58) <Label>",
    ctx: ctx
  });
  return block;
} // (60:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_70(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_71]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_70.name,
    type: "slot",
    source: "(60:6) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (57:4) <Group variant="raised">


function create_default_slot_69(ctx) {
  var button0;
  var t0;
  var button1;
  var t1;
  var button2;
  var current;
  button0 = new Button_1$1({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_74]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_28*/
  ctx[31]);
  button1 = new Button_1$1({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_72]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_29*/
  ctx[32]);
  button2 = new Button_1$1({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_70]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_30*/
  ctx[33]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_69.name,
    type: "slot",
    source: "(57:4) <Group variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (63:62) <Label>


function create_default_slot_68(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_68.name,
    type: "slot",
    source: "(63:62) <Label>",
    ctx: ctx
  });
  return block;
} // (63:6) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_67(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_68]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_67.name,
    type: "slot",
    source: "(63:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (64:62) <Label>


function create_default_slot_66(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_66.name,
    type: "slot",
    source: "(64:62) <Label>",
    ctx: ctx
  });
  return block;
} // (64:6) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_65(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_66]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_65.name,
    type: "slot",
    source: "(64:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (65:62) <Label>


function create_default_slot_64(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_64.name,
    type: "slot",
    source: "(65:62) <Label>",
    ctx: ctx
  });
  return block;
} // (65:6) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_63(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_64]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_63.name,
    type: "slot",
    source: "(65:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (62:4) <Group variant="unelevated">


function create_default_slot_62(ctx) {
  var button0;
  var t0;
  var button1;
  var t1;
  var button2;
  var current;
  button0 = new Button_1$1({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_67]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_31*/
  ctx[34]);
  button1 = new Button_1$1({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_65]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_32*/
  ctx[35]);
  button2 = new Button_1$1({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_63]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_33*/
  ctx[36]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_62.name,
    type: "slot",
    source: "(62:4) <Group variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (68:60) <Label>


function create_default_slot_61(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_61.name,
    type: "slot",
    source: "(68:60) <Label>",
    ctx: ctx
  });
  return block;
} // (68:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_60(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_61]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_60.name,
    type: "slot",
    source: "(68:6) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (69:60) <Label>


function create_default_slot_59(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_59.name,
    type: "slot",
    source: "(69:60) <Label>",
    ctx: ctx
  });
  return block;
} // (69:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_58(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_59]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_58.name,
    type: "slot",
    source: "(69:6) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (70:60) <Label>


function create_default_slot_57(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_57.name,
    type: "slot",
    source: "(70:60) <Label>",
    ctx: ctx
  });
  return block;
} // (70:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_56(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_57]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_56.name,
    type: "slot",
    source: "(70:6) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (67:4) <Group variant="outlined">


function create_default_slot_55(ctx) {
  var button0;
  var t0;
  var button1;
  var t1;
  var button2;
  var current;
  button0 = new Button_1$1({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_60]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_34*/
  ctx[37]);
  button1 = new Button_1$1({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_58]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_35*/
  ctx[38]);
  button2 = new Button_1$1({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_56]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_36*/
  ctx[39]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_55.name,
    type: "slot",
    source: "(67:4) <Group variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (76:98) <Label>


function create_default_slot_54(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Primary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Primary");
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
    id: create_default_slot_54.name,
    type: "slot",
    source: "(76:98) <Label>",
    ctx: ctx
  });
  return block;
} // (76:6) <Button on:click={() => clicked++} variant="unelevated" color="primary" style="width: 60%;">


function create_default_slot_53(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_54]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_53.name,
    type: "slot",
    source: "(76:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" color=\\\"primary\\\" style=\\\"width: 60%;\\\">",
    ctx: ctx
  });
  return block;
} // (77:80) <Label>


function create_default_slot_52(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Secondary");
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
    id: create_default_slot_52.name,
    type: "slot",
    source: "(77:80) <Label>",
    ctx: ctx
  });
  return block;
} // (77:6) <Button on:click={() => clicked++} variant="unelevated" color="secondary">


function create_default_slot_51(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_52]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_51.name,
    type: "slot",
    source: "(77:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" color=\\\"secondary\\\">",
    ctx: ctx
  });
  return block;
} // (78:80) <Label>


function create_default_slot_50(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Secondary");
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
    id: create_default_slot_50.name,
    type: "slot",
    source: "(78:80) <Label>",
    ctx: ctx
  });
  return block;
} // (78:6) <Button on:click={() => clicked++} variant="unelevated" color="secondary">


function create_default_slot_49(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_50]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_49.name,
    type: "slot",
    source: "(78:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" color=\\\"secondary\\\">",
    ctx: ctx
  });
  return block;
} // (75:4) <Group variant="outlined" style="display: flex; justify-content: stretch;">


function create_default_slot_48(ctx) {
  var button0;
  var t0;
  var button1;
  var t1;
  var button2;
  var current;
  button0 = new Button_1$1({
    props: {
      variant: "unelevated",
      color: "primary",
      style: "width: 60%;",
      $$slots: {
        default: [create_default_slot_53]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_37*/
  ctx[40]);
  button1 = new Button_1$1({
    props: {
      variant: "unelevated",
      color: "secondary",
      $$slots: {
        default: [create_default_slot_51]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_38*/
  ctx[41]);
  button2 = new Button_1$1({
    props: {
      variant: "unelevated",
      color: "secondary",
      $$slots: {
        default: [create_default_slot_49]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_39*/
  ctx[42]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_48.name,
    type: "slot",
    source: "(75:4) <Group variant=\\\"outlined\\\" style=\\\"display: flex; justify-content: stretch;\\\">",
    ctx: ctx
  });
  return block;
} // (85:58) <Label>


function create_default_slot_47(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Do the thing");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Do the thing");
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
    id: create_default_slot_47.name,
    type: "slot",
    source: "(85:58) <Label>",
    ctx: ctx
  });
  return block;
} // (85:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_46(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_46.name,
    type: "slot",
    source: "(85:6) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (88:10) <Icon class="material-icons" style="margin: 0;">


function create_default_slot_45(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("arrow_drop_down");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "arrow_drop_down");
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
    source: "(88:10) <Icon class=\\\"material-icons\\\" style=\\\"margin: 0;\\\">",
    ctx: ctx
  });
  return block;
} // (87:8) <Button on:click={() => menu.setOpen(true)} variant="raised" style="padding: 0; min-width: 36px;">


function create_default_slot_44(ctx) {
  var icon;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      style: "margin: 0;",
      $$slots: {
        default: [create_default_slot_45]
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
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
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
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_44.name,
    type: "slot",
    source: "(87:8) <Button on:click={() => menu.setOpen(true)} variant=\\\"raised\\\" style=\\\"padding: 0; min-width: 36px;\\\">",
    ctx: ctx
  });
  return block;
} // (92:51) <Text>


function create_default_slot_43(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 1");
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
    id: create_default_slot_43.name,
    type: "slot",
    source: "(92:51) <Text>",
    ctx: ctx
  });
  return block;
} // (92:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_42(ctx) {
  var text_1;
  var current;
  text_1 = new Text({
    props: {
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_42.name,
    type: "slot",
    source: "(92:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (93:51) <Text>


function create_default_slot_41(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 2");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 2");
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
    id: create_default_slot_41.name,
    type: "slot",
    source: "(93:51) <Text>",
    ctx: ctx
  });
  return block;
} // (93:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_40(ctx) {
  var text_1;
  var current;
  text_1 = new Text({
    props: {
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_40.name,
    type: "slot",
    source: "(93:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (95:51) <Text>


function create_default_slot_39(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 3");
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
    id: create_default_slot_39.name,
    type: "slot",
    source: "(95:51) <Text>",
    ctx: ctx
  });
  return block;
} // (95:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_38(ctx) {
  var text_1;
  var current;
  text_1 = new Text({
    props: {
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_38.name,
    type: "slot",
    source: "(95:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (91:10) <List>


function create_default_slot_37(ctx) {
  var item0;
  var t0;
  var item1;
  var t1;
  var separator;
  var t2;
  var item2;
  var current;
  item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_42]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action",
  /*SMUI_action_handler*/
  ctx[45]);
  item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_40]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_1*/
  ctx[46]);
  separator = new Separator({
    $$inline: true
  });
  item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_38]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action",
  /*SMUI_action_handler_2*/
  ctx[47]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(separator.$$.fragment);
      t2 = space();
      create_component(item2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(separator.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(item2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_37.name,
    type: "slot",
    source: "(91:10) <List>",
    ctx: ctx
  });
  return block;
} // (90:8) <Menu bind:this={menu} anchorCorner="TOP_LEFT">


function create_default_slot_36(ctx) {
  var list;
  var current;
  list = new List({
    props: {
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
      var list_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_36.name,
    type: "slot",
    source: "(90:8) <Menu bind:this={menu} anchorCorner=\\\"TOP_LEFT\\\">",
    ctx: ctx
  });
  return block;
} // (84:4) <Group variant="raised">


function create_default_slot_35(ctx) {
  var button0;
  var t0;
  var div;
  var button1;
  var t1;
  var menu_1;
  var GroupItem_action;
  var current;
  var mounted;
  var dispose;
  button0 = new Button_1$1({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_46]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_40*/
  ctx[43]);
  button1 = new Button_1$1({
    props: {
      variant: "raised",
      style: "padding: 0; min-width: 36px;",
      $$slots: {
        default: [create_default_slot_44]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_41*/
  ctx[44]);
  var menu_1_props = {
    anchorCorner: "TOP_LEFT",
    $$slots: {
      default: [create_default_slot_36]
    },
    $$scope: {
      ctx: ctx
    }
  };
  menu_1 = new Menu({
    props: menu_1_props,
    $$inline: true
  });
  /*menu_1_binding*/

  ctx[48](menu_1);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      div = element("div");
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(menu_1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(menu_1.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "svelte-18uebmb");
      add_location(div, file$1, 85, 6, 4687);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      mount_component(button1, div, null);
      append_dev(div, t1);
      mount_component(menu_1, div, null);
      current = true;

      if (!mounted) {
        dispose = action_destroyer(GroupItem_action = GroupItem.call(null, div));
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var menu_1_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[2] &
      /*$$scope*/
      4) {
        menu_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menu_1.$set(menu_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(menu_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(menu_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      destroy_component(button1);
      /*menu_1_binding*/

      ctx[48](null);
      destroy_component(menu_1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_35.name,
    type: "slot",
    source: "(84:4) <Group variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (101:60) <Label>


function create_default_slot_34(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Do the thing");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Do the thing");
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
    source: "(101:60) <Label>",
    ctx: ctx
  });
  return block;
} // (101:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_33(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_33.name,
    type: "slot",
    source: "(101:6) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (104:10) <Icon class="material-icons" style="margin: 0;">


function create_default_slot_32(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("arrow_drop_down");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "arrow_drop_down");
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
    source: "(104:10) <Icon class=\\\"material-icons\\\" style=\\\"margin: 0;\\\">",
    ctx: ctx
  });
  return block;
} // (103:8) <Button on:click={() => menu2.setOpen(true)} variant="outlined" style="padding: 0; min-width: 36px;">


function create_default_slot_31(ctx) {
  var icon;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      style: "margin: 0;",
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
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
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
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(103:8) <Button on:click={() => menu2.setOpen(true)} variant=\\\"outlined\\\" style=\\\"padding: 0; min-width: 36px;\\\">",
    ctx: ctx
  });
  return block;
} // (108:51) <Text>


function create_default_slot_30(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 1");
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
    id: create_default_slot_30.name,
    type: "slot",
    source: "(108:51) <Text>",
    ctx: ctx
  });
  return block;
} // (108:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_29(ctx) {
  var text_1;
  var current;
  text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_30]
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_29.name,
    type: "slot",
    source: "(108:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (109:51) <Text>


function create_default_slot_28(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 2");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 2");
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
    id: create_default_slot_28.name,
    type: "slot",
    source: "(109:51) <Text>",
    ctx: ctx
  });
  return block;
} // (109:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_27(ctx) {
  var text_1;
  var current;
  text_1 = new Text({
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_27.name,
    type: "slot",
    source: "(109:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (111:51) <Text>


function create_default_slot_26(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 3");
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
    source: "(111:51) <Text>",
    ctx: ctx
  });
  return block;
} // (111:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_25(ctx) {
  var text_1;
  var current;
  text_1 = new Text({
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_25.name,
    type: "slot",
    source: "(111:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (107:10) <List>


function create_default_slot_24(ctx) {
  var item0;
  var t0;
  var item1;
  var t1;
  var separator;
  var t2;
  var item2;
  var current;
  item0 = new Item({
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
  item0.$on("SMUI:action",
  /*SMUI_action_handler_3*/
  ctx[51]);
  item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_4*/
  ctx[52]);
  separator = new Separator({
    $$inline: true
  });
  item2 = new Item({
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
  item2.$on("SMUI:action",
  /*SMUI_action_handler_5*/
  ctx[53]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(separator.$$.fragment);
      t2 = space();
      create_component(item2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(separator.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(item2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(107:10) <List>",
    ctx: ctx
  });
  return block;
} // (106:8) <Menu bind:this={menu2} anchorCorner="TOP_LEFT">


function create_default_slot_23(ctx) {
  var list;
  var current;
  list = new List({
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
      var list_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_23.name,
    type: "slot",
    source: "(106:8) <Menu bind:this={menu2} anchorCorner=\\\"TOP_LEFT\\\">",
    ctx: ctx
  });
  return block;
} // (100:4) <Group variant="outlined">


function create_default_slot_22(ctx) {
  var button0;
  var t0;
  var div;
  var button1;
  var t1;
  var menu_1;
  var GroupItem_action;
  var current;
  var mounted;
  var dispose;
  button0 = new Button_1$1({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_42*/
  ctx[49]);
  button1 = new Button_1$1({
    props: {
      variant: "outlined",
      style: "padding: 0; min-width: 36px;",
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_43*/
  ctx[50]);
  var menu_1_props = {
    anchorCorner: "TOP_LEFT",
    $$slots: {
      default: [create_default_slot_23]
    },
    $$scope: {
      ctx: ctx
    }
  };
  menu_1 = new Menu({
    props: menu_1_props,
    $$inline: true
  });
  /*menu_1_binding_1*/

  ctx[54](menu_1);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      div = element("div");
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(menu_1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(menu_1.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "svelte-18uebmb");
      add_location(div, file$1, 101, 6, 5443);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      mount_component(button1, div, null);
      append_dev(div, t1);
      mount_component(menu_1, div, null);
      current = true;

      if (!mounted) {
        dispose = action_destroyer(GroupItem_action = GroupItem.call(null, div));
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var menu_1_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[2] &
      /*$$scope*/
      4) {
        menu_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menu_1.$set(menu_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(menu_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(menu_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      destroy_component(button1);
      /*menu_1_binding_1*/

      ctx[54](null);
      destroy_component(menu_1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(100:4) <Group variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (120:84) <Label>


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_21.name,
    type: "slot",
    source: "(120:84) <Label>",
    ctx: ctx
  });
  return block;
} // (120:4) <Button on:click={() => clicked++} variant="raised" class="button-shaped-round">


function create_default_slot_20(ctx) {
  var label;
  var current;
  label = new Label({
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_20.name,
    type: "slot",
    source: "(120:4) <Button on:click={() => clicked++} variant=\\\"raised\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (121:88) <Label>


function create_default_slot_19(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    id: create_default_slot_19.name,
    type: "slot",
    source: "(121:88) <Label>",
    ctx: ctx
  });
  return block;
} // (121:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-round">


function create_default_slot_18(ctx) {
  var label;
  var current;
  label = new Label({
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_18.name,
    type: "slot",
    source: "(121:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (122:86) <Label>


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(122:86) <Label>",
    ctx: ctx
  });
  return block;
} // (122:4) <Button on:click={() => clicked++} variant="outlined" class="button-shaped-round">


function create_default_slot_16(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_16.name,
    type: "slot",
    source: "(122:4) <Button on:click={() => clicked++} variant=\\\"outlined\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (123:88) <Icon class="material-icons">


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    source: "(123:88) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (123:132) <Label>


function create_default_slot_14(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    source: "(123:132) <Label>",
    ctx: ctx
  });
  return block;
} // (123:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-round">


function create_default_slot_13(ctx) {
  var icon;
  var label;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  label = new Label({
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
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(123:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (124:86) <Label>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(124:86) <Label>",
    ctx: ctx
  });
  return block;
} // (124:114) <Icon class="material-icons">


function create_default_slot_11(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(124:114) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (124:4) <Button on:click={() => clicked++} variant="outlined" class="button-shaped-round">


function create_default_slot_10(ctx) {
  var label;
  var icon;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_12]
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
      create_component(label.$$.fragment);
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(124:4) <Button on:click={() => clicked++} variant=\\\"outlined\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (129:84) <Label>


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(129:84) <Label>",
    ctx: ctx
  });
  return block;
} // (129:4) <Button on:click={() => clicked++} variant="raised" class="button-shaped-notch">


function create_default_slot_8(ctx) {
  var label;
  var current;
  label = new Label({
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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    id: create_default_slot_8.name,
    type: "slot",
    source: "(129:4) <Button on:click={() => clicked++} variant=\\\"raised\\\" class=\\\"button-shaped-notch\\\">",
    ctx: ctx
  });
  return block;
} // (130:88) <Label>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    source: "(130:88) <Label>",
    ctx: ctx
  });
  return block;
} // (130:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-notch">


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

      if (dirty[2] &
      /*$$scope*/
      4) {
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
    source: "(130:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-notch\\\">",
    ctx: ctx
  });
  return block;
} // (131:88) <Icon class="material-icons">


function create_default_slot_5(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    source: "(131:88) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (131:132) <Label>


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    source: "(131:132) <Label>",
    ctx: ctx
  });
  return block;
} // (131:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-notch">


function create_default_slot_3(ctx) {
  var icon;
  var label;
  var current;
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  label = new Label({
    props: {
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
      create_component(icon.$$.fragment);
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(131:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-notch\\\">",
    ctx: ctx
  });
  return block;
} // (132:88) <Label>


function create_default_slot_2(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    id: create_default_slot_2.name,
    type: "slot",
    source: "(132:88) <Label>",
    ctx: ctx
  });
  return block;
} // (132:116) <Icon class="material-icons">


function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    source: "(132:116) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (132:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-notch">


function create_default_slot(ctx) {
  var label;
  var icon;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_2]
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
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var icon_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(132:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-notch\\\">",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var button0;
  var t3;
  var button1;
  var t4;
  var button2;
  var t5;
  var button3;
  var t6;
  var button4;
  var t7;
  var button5;
  var t8;
  var button6;
  var t9;
  var button7;
  var t10;
  var div1;
  var button8;
  var t11;
  var button9;
  var t12;
  var div2;
  var t13;
  var br0;
  var t14;
  var button10;
  var t15;
  var button11;
  var t16;
  var button12;
  var t17;
  var button13;
  var t18;
  var button14;
  var t19;
  var div3;
  var t20;
  var br1;
  var t21;
  var button15;
  var t22;
  var button16;
  var t23;
  var button17;
  var t24;
  var button18;
  var t25;
  var button19;
  var t26;
  var button20;
  var t27;
  var button21;
  var t28;
  var button22;
  var t29;
  var div4;
  var button23;
  var t30;
  var button24;
  var t31;
  var div5;
  var t32;
  var br2;
  var t33;
  var group0;
  var t34;
  var group1;
  var t35;
  var group2;
  var t36;
  var group3;
  var t37;
  var br3;
  var t38;
  var br4;
  var t39;
  var group4;
  var t40;
  var div6;
  var t41;
  var br5;
  var t42;
  var group5;
  var t43;
  var group6;
  var t44;
  var div7;
  var t45;
  var br6;
  var t46;
  var button25;
  var t47;
  var button26;
  var t48;
  var button27;
  var t49;
  var button28;
  var t50;
  var button29;
  var t51;
  var div8;
  var t52;
  var br7;
  var t53;
  var button30;
  var t54;
  var button31;
  var t55;
  var button32;
  var t56;
  var button33;
  var t57;
  var pre;
  var t58;
  var t59;
  var current;
  button0 = new Button_1$1({
    props: {
      $$slots: {
        default: [create_default_slot_135]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler*/
  ctx[3]);
  button1 = new Button_1$1({
    props: {
      disabled: true,
      $$slots: {
        default: [create_default_slot_133]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_1*/
  ctx[4]);
  button2 = new Button_1$1({
    props: {
      ripple: false,
      $$slots: {
        default: [create_default_slot_131]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_2*/
  ctx[5]);
  button3 = new Button_1$1({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_129]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button3.$on("click",
  /*click_handler_3*/
  ctx[6]);
  button4 = new Button_1$1({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_127]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button4.$on("click",
  /*click_handler_4*/
  ctx[7]);
  button5 = new Button_1$1({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_125]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button5.$on("click",
  /*click_handler_5*/
  ctx[8]);
  button6 = new Button_1$1({
    props: {
      class: "myClass",
      $$slots: {
        default: [create_default_slot_123]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button6.$on("click",
  /*click_handler_6*/
  ctx[9]);
  button7 = new Button_1$1({
    props: {
      href: "http://example.com",
      target: "_blank",
      $$slots: {
        default: [create_default_slot_121]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button7.$on("click",
  /*click_handler_7*/
  ctx[10]);
  button8 = new Button_1$1({
    props: {
      $$slots: {
        default: [create_default_slot_118]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button8.$on("click",
  /*click_handler_8*/
  ctx[11]);
  button9 = new Button_1$1({
    props: {
      $$slots: {
        default: [create_default_slot_115]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button9.$on("click",
  /*click_handler_9*/
  ctx[12]);
  button10 = new Button_1$1({
    props: {
      touch: true,
      $$slots: {
        default: [create_default_slot_113]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button10.$on("click",
  /*click_handler_10*/
  ctx[13]);
  button11 = new Button_1$1({
    props: {
      touch: true,
      variant: "raised",
      $$slots: {
        default: [create_default_slot_111]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button11.$on("click",
  /*click_handler_11*/
  ctx[14]);
  button12 = new Button_1$1({
    props: {
      touch: true,
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_109]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button12.$on("click",
  /*click_handler_12*/
  ctx[15]);
  button13 = new Button_1$1({
    props: {
      touch: true,
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_107]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button13.$on("click",
  /*click_handler_13*/
  ctx[16]);
  button14 = new Button_1$1({
    props: {
      touch: true,
      href: "http://example.com",
      target: "_blank",
      $$slots: {
        default: [create_default_slot_105]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button14.$on("click",
  /*click_handler_14*/
  ctx[17]);
  button15 = new Button_1$1({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_103]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button15.$on("click",
  /*click_handler_15*/
  ctx[18]);
  button16 = new Button_1$1({
    props: {
      color: "secondary",
      disabled: true,
      $$slots: {
        default: [create_default_slot_101]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button16.$on("click",
  /*click_handler_16*/
  ctx[19]);
  button17 = new Button_1$1({
    props: {
      color: "secondary",
      ripple: false,
      $$slots: {
        default: [create_default_slot_99]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button17.$on("click",
  /*click_handler_17*/
  ctx[20]);
  button18 = new Button_1$1({
    props: {
      color: "secondary",
      variant: "raised",
      $$slots: {
        default: [create_default_slot_97]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button18.$on("click",
  /*click_handler_18*/
  ctx[21]);
  button19 = new Button_1$1({
    props: {
      color: "secondary",
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_95]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button19.$on("click",
  /*click_handler_19*/
  ctx[22]);
  button20 = new Button_1$1({
    props: {
      color: "secondary",
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_93]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button20.$on("click",
  /*click_handler_20*/
  ctx[23]);
  button21 = new Button_1$1({
    props: {
      color: "secondary",
      class: "myClass",
      $$slots: {
        default: [create_default_slot_91]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button21.$on("click",
  /*click_handler_21*/
  ctx[24]);
  button22 = new Button_1$1({
    props: {
      color: "secondary",
      href: "http://example.com",
      target: "_blank",
      $$slots: {
        default: [create_default_slot_89]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button22.$on("click",
  /*click_handler_22*/
  ctx[25]);
  button23 = new Button_1$1({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_86]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button23.$on("click",
  /*click_handler_23*/
  ctx[26]);
  button24 = new Button_1$1({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_83]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button24.$on("click",
  /*click_handler_24*/
  ctx[27]);
  group0 = new Group({
    props: {
      $$slots: {
        default: [create_default_slot_76]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  group1 = new Group({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_69]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  group2 = new Group({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_62]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  group3 = new Group({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_55]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  group4 = new Group({
    props: {
      variant: "outlined",
      style: "display: flex; justify-content: stretch;",
      $$slots: {
        default: [create_default_slot_48]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  group5 = new Group({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_35]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  group6 = new Group({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button25 = new Button_1$1({
    props: {
      variant: "raised",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button25.$on("click",
  /*click_handler_44*/
  ctx[55]);
  button26 = new Button_1$1({
    props: {
      variant: "unelevated",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button26.$on("click",
  /*click_handler_45*/
  ctx[56]);
  button27 = new Button_1$1({
    props: {
      variant: "outlined",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button27.$on("click",
  /*click_handler_46*/
  ctx[57]);
  button28 = new Button_1$1({
    props: {
      variant: "unelevated",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button28.$on("click",
  /*click_handler_47*/
  ctx[58]);
  button29 = new Button_1$1({
    props: {
      variant: "outlined",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button29.$on("click",
  /*click_handler_48*/
  ctx[59]);
  button30 = new Button_1$1({
    props: {
      variant: "raised",
      class: "button-shaped-notch",
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button30.$on("click",
  /*click_handler_49*/
  ctx[60]);
  button31 = new Button_1$1({
    props: {
      variant: "unelevated",
      class: "button-shaped-notch",
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button31.$on("click",
  /*click_handler_50*/
  ctx[61]);
  button32 = new Button_1$1({
    props: {
      variant: "unelevated",
      class: "button-shaped-notch",
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button32.$on("click",
  /*click_handler_51*/
  ctx[62]);
  button33 = new Button_1$1({
    props: {
      variant: "unelevated",
      class: "button-shaped-notch",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button33.$on("click",
  /*click_handler_52*/
  ctx[63]);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Button");
      t2 = space();
      div0 = element("div");
      create_component(button0.$$.fragment);
      t3 = space();
      create_component(button1.$$.fragment);
      t4 = space();
      create_component(button2.$$.fragment);
      t5 = space();
      create_component(button3.$$.fragment);
      t6 = space();
      create_component(button4.$$.fragment);
      t7 = space();
      create_component(button5.$$.fragment);
      t8 = space();
      create_component(button6.$$.fragment);
      t9 = space();
      create_component(button7.$$.fragment);
      t10 = space();
      div1 = element("div");
      create_component(button8.$$.fragment);
      t11 = space();
      create_component(button9.$$.fragment);
      t12 = space();
      div2 = element("div");
      t13 = text("Increased touch target: ");
      br0 = element("br");
      t14 = space();
      create_component(button10.$$.fragment);
      t15 = space();
      create_component(button11.$$.fragment);
      t16 = space();
      create_component(button12.$$.fragment);
      t17 = space();
      create_component(button13.$$.fragment);
      t18 = space();
      create_component(button14.$$.fragment);
      t19 = space();
      div3 = element("div");
      t20 = text("Secondary color: ");
      br1 = element("br");
      t21 = space();
      create_component(button15.$$.fragment);
      t22 = space();
      create_component(button16.$$.fragment);
      t23 = space();
      create_component(button17.$$.fragment);
      t24 = space();
      create_component(button18.$$.fragment);
      t25 = space();
      create_component(button19.$$.fragment);
      t26 = space();
      create_component(button20.$$.fragment);
      t27 = space();
      create_component(button21.$$.fragment);
      t28 = space();
      create_component(button22.$$.fragment);
      t29 = space();
      div4 = element("div");
      create_component(button23.$$.fragment);
      t30 = space();
      create_component(button24.$$.fragment);
      t31 = space();
      div5 = element("div");
      t32 = text("Button groups: ");
      br2 = element("br");
      t33 = space();
      create_component(group0.$$.fragment);
      t34 = space();
      create_component(group1.$$.fragment);
      t35 = space();
      create_component(group2.$$.fragment);
      t36 = space();
      create_component(group3.$$.fragment);
      t37 = space();
      br3 = element("br");
      t38 = space();
      br4 = element("br");
      t39 = space();
      create_component(group4.$$.fragment);
      t40 = space();
      div6 = element("div");
      t41 = text("Split buttons using a button group: ");
      br5 = element("br");
      t42 = space();
      create_component(group5.$$.fragment);
      t43 = space();
      create_component(group6.$$.fragment);
      t44 = space();
      div7 = element("div");
      t45 = text("Creating rounded buttons with Sass mixins: ");
      br6 = element("br");
      t46 = space();
      create_component(button25.$$.fragment);
      t47 = space();
      create_component(button26.$$.fragment);
      t48 = space();
      create_component(button27.$$.fragment);
      t49 = space();
      create_component(button28.$$.fragment);
      t50 = space();
      create_component(button29.$$.fragment);
      t51 = space();
      div8 = element("div");
      t52 = text("Creating notched buttons with vanilla Sass: ");
      br7 = element("br");
      t53 = space();
      create_component(button30.$$.fragment);
      t54 = space();
      create_component(button31.$$.fragment);
      t55 = space();
      create_component(button32.$$.fragment);
      t56 = space();
      create_component(button33.$$.fragment);
      t57 = space();
      pre = element("pre");
      t58 = text("Clicked: ");
      t59 = text(
      /*clicked*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-brzzne\"]", document.head);
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
      t1 = claim_text(h2_nodes, "Button");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(button0.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      claim_component(button1.$$.fragment, div0_nodes);
      t4 = claim_space(div0_nodes);
      claim_component(button2.$$.fragment, div0_nodes);
      t5 = claim_space(div0_nodes);
      claim_component(button3.$$.fragment, div0_nodes);
      t6 = claim_space(div0_nodes);
      claim_component(button4.$$.fragment, div0_nodes);
      t7 = claim_space(div0_nodes);
      claim_component(button5.$$.fragment, div0_nodes);
      t8 = claim_space(div0_nodes);
      claim_component(button6.$$.fragment, div0_nodes);
      t9 = claim_space(div0_nodes);
      claim_component(button7.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(button8.$$.fragment, div1_nodes);
      t11 = claim_space(div1_nodes);
      claim_component(button9.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t13 = claim_text(div2_nodes, "Increased touch target: ");
      br0 = claim_element(div2_nodes, "BR", {
        class: true
      });
      t14 = claim_space(div2_nodes);
      claim_component(button10.$$.fragment, div2_nodes);
      t15 = claim_space(div2_nodes);
      claim_component(button11.$$.fragment, div2_nodes);
      t16 = claim_space(div2_nodes);
      claim_component(button12.$$.fragment, div2_nodes);
      t17 = claim_space(div2_nodes);
      claim_component(button13.$$.fragment, div2_nodes);
      t18 = claim_space(div2_nodes);
      claim_component(button14.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t19 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t20 = claim_text(div3_nodes, "Secondary color: ");
      br1 = claim_element(div3_nodes, "BR", {
        class: true
      });
      t21 = claim_space(div3_nodes);
      claim_component(button15.$$.fragment, div3_nodes);
      t22 = claim_space(div3_nodes);
      claim_component(button16.$$.fragment, div3_nodes);
      t23 = claim_space(div3_nodes);
      claim_component(button17.$$.fragment, div3_nodes);
      t24 = claim_space(div3_nodes);
      claim_component(button18.$$.fragment, div3_nodes);
      t25 = claim_space(div3_nodes);
      claim_component(button19.$$.fragment, div3_nodes);
      t26 = claim_space(div3_nodes);
      claim_component(button20.$$.fragment, div3_nodes);
      t27 = claim_space(div3_nodes);
      claim_component(button21.$$.fragment, div3_nodes);
      t28 = claim_space(div3_nodes);
      claim_component(button22.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t29 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      claim_component(button23.$$.fragment, div4_nodes);
      t30 = claim_space(div4_nodes);
      claim_component(button24.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t31 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t32 = claim_text(div5_nodes, "Button groups: ");
      br2 = claim_element(div5_nodes, "BR", {
        class: true
      });
      t33 = claim_space(div5_nodes);
      claim_component(group0.$$.fragment, div5_nodes);
      t34 = claim_space(div5_nodes);
      claim_component(group1.$$.fragment, div5_nodes);
      t35 = claim_space(div5_nodes);
      claim_component(group2.$$.fragment, div5_nodes);
      t36 = claim_space(div5_nodes);
      claim_component(group3.$$.fragment, div5_nodes);
      t37 = claim_space(div5_nodes);
      br3 = claim_element(div5_nodes, "BR", {
        class: true
      });
      t38 = claim_space(div5_nodes);
      br4 = claim_element(div5_nodes, "BR", {
        class: true
      });
      t39 = claim_space(div5_nodes);
      claim_component(group4.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      t40 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t41 = claim_text(div6_nodes, "Split buttons using a button group: ");
      br5 = claim_element(div6_nodes, "BR", {
        class: true
      });
      t42 = claim_space(div6_nodes);
      claim_component(group5.$$.fragment, div6_nodes);
      t43 = claim_space(div6_nodes);
      claim_component(group6.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      t44 = claim_space(section_nodes);
      div7 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      t45 = claim_text(div7_nodes, "Creating rounded buttons with Sass mixins: ");
      br6 = claim_element(div7_nodes, "BR", {
        class: true
      });
      t46 = claim_space(div7_nodes);
      claim_component(button25.$$.fragment, div7_nodes);
      t47 = claim_space(div7_nodes);
      claim_component(button26.$$.fragment, div7_nodes);
      t48 = claim_space(div7_nodes);
      claim_component(button27.$$.fragment, div7_nodes);
      t49 = claim_space(div7_nodes);
      claim_component(button28.$$.fragment, div7_nodes);
      t50 = claim_space(div7_nodes);
      claim_component(button29.$$.fragment, div7_nodes);
      div7_nodes.forEach(detach_dev);
      t51 = claim_space(section_nodes);
      div8 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      t52 = claim_text(div8_nodes, "Creating notched buttons with vanilla Sass: ");
      br7 = claim_element(div8_nodes, "BR", {
        class: true
      });
      t53 = claim_space(div8_nodes);
      claim_component(button30.$$.fragment, div8_nodes);
      t54 = claim_space(div8_nodes);
      claim_component(button31.$$.fragment, div8_nodes);
      t55 = claim_space(div8_nodes);
      claim_component(button32.$$.fragment, div8_nodes);
      t56 = claim_space(div8_nodes);
      claim_component(button33.$$.fragment, div8_nodes);
      div8_nodes.forEach(detach_dev);
      t57 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t58 = claim_text(pre_nodes, "Clicked: ");
      t59 = claim_text(pre_nodes,
      /*clicked*/
      ctx[0]);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Button - SMUI";
      attr_dev(h2, "class", "svelte-18uebmb");
      add_location(h2, file$1, 5, 2, 73);
      attr_dev(div0, "class", "svelte-18uebmb");
      add_location(div0, file$1, 7, 2, 92);
      attr_dev(div1, "class", "svelte-18uebmb");
      add_location(div1, file$1, 18, 2, 832);
      attr_dev(br0, "class", "svelte-18uebmb");
      add_location(br0, file$1, 24, 28, 1117);
      attr_dev(div2, "class", "svelte-18uebmb");
      add_location(div2, file$1, 23, 2, 1083);
      attr_dev(br1, "class", "svelte-18uebmb");
      add_location(br1, file$1, 33, 21, 1654);
      attr_dev(div3, "class", "svelte-18uebmb");
      add_location(div3, file$1, 32, 2, 1627);
      attr_dev(div4, "class", "svelte-18uebmb");
      add_location(div4, file$1, 44, 2, 2539);
      attr_dev(br2, "class", "svelte-18uebmb");
      add_location(br2, file$1, 50, 19, 2851);
      attr_dev(br3, "class", "svelte-18uebmb");
      add_location(br3, file$1, 72, 4, 4027);
      attr_dev(br4, "class", "svelte-18uebmb");
      add_location(br4, file$1, 72, 11, 4034);
      attr_dev(div5, "class", "svelte-18uebmb");
      add_location(div5, file$1, 49, 2, 2826);
      attr_dev(br5, "class", "svelte-18uebmb");
      add_location(br5, file$1, 82, 40, 4550);
      attr_dev(div6, "class", "svelte-18uebmb");
      add_location(div6, file$1, 81, 2, 4504);
      attr_dev(br6, "class", "svelte-18uebmb");
      add_location(br6, file$1, 118, 47, 6134);
      attr_dev(div7, "class", "svelte-18uebmb");
      add_location(div7, file$1, 117, 2, 6081);
      attr_dev(br7, "class", "svelte-18uebmb");
      add_location(br7, file$1, 127, 48, 6893);
      attr_dev(div8, "class", "svelte-18uebmb");
      add_location(div8, file$1, 126, 2, 6839);
      attr_dev(pre, "class", "status svelte-18uebmb");
      add_location(pre, file$1, 134, 2, 7481);
      attr_dev(section, "class", "svelte-18uebmb");
      add_location(section, file$1, 4, 0, 61);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(button0, div0, null);
      append_dev(div0, t3);
      mount_component(button1, div0, null);
      append_dev(div0, t4);
      mount_component(button2, div0, null);
      append_dev(div0, t5);
      mount_component(button3, div0, null);
      append_dev(div0, t6);
      mount_component(button4, div0, null);
      append_dev(div0, t7);
      mount_component(button5, div0, null);
      append_dev(div0, t8);
      mount_component(button6, div0, null);
      append_dev(div0, t9);
      mount_component(button7, div0, null);
      append_dev(section, t10);
      append_dev(section, div1);
      mount_component(button8, div1, null);
      append_dev(div1, t11);
      mount_component(button9, div1, null);
      append_dev(section, t12);
      append_dev(section, div2);
      append_dev(div2, t13);
      append_dev(div2, br0);
      append_dev(div2, t14);
      mount_component(button10, div2, null);
      append_dev(div2, t15);
      mount_component(button11, div2, null);
      append_dev(div2, t16);
      mount_component(button12, div2, null);
      append_dev(div2, t17);
      mount_component(button13, div2, null);
      append_dev(div2, t18);
      mount_component(button14, div2, null);
      append_dev(section, t19);
      append_dev(section, div3);
      append_dev(div3, t20);
      append_dev(div3, br1);
      append_dev(div3, t21);
      mount_component(button15, div3, null);
      append_dev(div3, t22);
      mount_component(button16, div3, null);
      append_dev(div3, t23);
      mount_component(button17, div3, null);
      append_dev(div3, t24);
      mount_component(button18, div3, null);
      append_dev(div3, t25);
      mount_component(button19, div3, null);
      append_dev(div3, t26);
      mount_component(button20, div3, null);
      append_dev(div3, t27);
      mount_component(button21, div3, null);
      append_dev(div3, t28);
      mount_component(button22, div3, null);
      append_dev(section, t29);
      append_dev(section, div4);
      mount_component(button23, div4, null);
      append_dev(div4, t30);
      mount_component(button24, div4, null);
      append_dev(section, t31);
      append_dev(section, div5);
      append_dev(div5, t32);
      append_dev(div5, br2);
      append_dev(div5, t33);
      mount_component(group0, div5, null);
      append_dev(div5, t34);
      mount_component(group1, div5, null);
      append_dev(div5, t35);
      mount_component(group2, div5, null);
      append_dev(div5, t36);
      mount_component(group3, div5, null);
      append_dev(div5, t37);
      append_dev(div5, br3);
      append_dev(div5, t38);
      append_dev(div5, br4);
      append_dev(div5, t39);
      mount_component(group4, div5, null);
      append_dev(section, t40);
      append_dev(section, div6);
      append_dev(div6, t41);
      append_dev(div6, br5);
      append_dev(div6, t42);
      mount_component(group5, div6, null);
      append_dev(div6, t43);
      mount_component(group6, div6, null);
      append_dev(section, t44);
      append_dev(section, div7);
      append_dev(div7, t45);
      append_dev(div7, br6);
      append_dev(div7, t46);
      mount_component(button25, div7, null);
      append_dev(div7, t47);
      mount_component(button26, div7, null);
      append_dev(div7, t48);
      mount_component(button27, div7, null);
      append_dev(div7, t49);
      mount_component(button28, div7, null);
      append_dev(div7, t50);
      mount_component(button29, div7, null);
      append_dev(section, t51);
      append_dev(section, div8);
      append_dev(div8, t52);
      append_dev(div8, br7);
      append_dev(div8, t53);
      mount_component(button30, div8, null);
      append_dev(div8, t54);
      mount_component(button31, div8, null);
      append_dev(div8, t55);
      mount_component(button32, div8, null);
      append_dev(div8, t56);
      mount_component(button33, div8, null);
      append_dev(section, t57);
      append_dev(section, pre);
      append_dev(pre, t58);
      append_dev(pre, t59);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
      var button3_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button3.$set(button3_changes);
      var button4_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button4.$set(button4_changes);
      var button5_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button5.$set(button5_changes);
      var button6_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button6.$set(button6_changes);
      var button7_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button7.$set(button7_changes);
      var button8_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button8_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button8.$set(button8_changes);
      var button9_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button9_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button9.$set(button9_changes);
      var button10_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button10_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button10.$set(button10_changes);
      var button11_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button11_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button11.$set(button11_changes);
      var button12_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button12_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button12.$set(button12_changes);
      var button13_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button13_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button13.$set(button13_changes);
      var button14_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button14_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button14.$set(button14_changes);
      var button15_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button15_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button15.$set(button15_changes);
      var button16_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button16_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button16.$set(button16_changes);
      var button17_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button17_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button17.$set(button17_changes);
      var button18_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button18_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button18.$set(button18_changes);
      var button19_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button19_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button19.$set(button19_changes);
      var button20_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button20_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button20.$set(button20_changes);
      var button21_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button21_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button21.$set(button21_changes);
      var button22_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button22_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button22.$set(button22_changes);
      var button23_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button23_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button23.$set(button23_changes);
      var button24_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button24_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button24.$set(button24_changes);
      var group0_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[2] &
      /*$$scope*/
      4) {
        group0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group0.$set(group0_changes);
      var group1_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[2] &
      /*$$scope*/
      4) {
        group1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group1.$set(group1_changes);
      var group2_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[2] &
      /*$$scope*/
      4) {
        group2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group2.$set(group2_changes);
      var group3_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[2] &
      /*$$scope*/
      4) {
        group3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group3.$set(group3_changes);
      var group4_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[2] &
      /*$$scope*/
      4) {
        group4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group4.$set(group4_changes);
      var group5_changes = {};

      if (dirty[0] &
      /*menu, clicked*/
      3 | dirty[2] &
      /*$$scope*/
      4) {
        group5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group5.$set(group5_changes);
      var group6_changes = {};

      if (dirty[0] &
      /*menu2, clicked*/
      5 | dirty[2] &
      /*$$scope*/
      4) {
        group6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group6.$set(group6_changes);
      var button25_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button25_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button25.$set(button25_changes);
      var button26_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button26_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button26.$set(button26_changes);
      var button27_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button27_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button27.$set(button27_changes);
      var button28_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button28_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button28.$set(button28_changes);
      var button29_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button29_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button29.$set(button29_changes);
      var button30_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button30_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button30.$set(button30_changes);
      var button31_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button31_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button31.$set(button31_changes);
      var button32_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button32_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button32.$set(button32_changes);
      var button33_changes = {};

      if (dirty[2] &
      /*$$scope*/
      4) {
        button33_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button33.$set(button33_changes);
      if (!current || dirty[0] &
      /*clicked*/
      1) set_data_dev(t59,
      /*clicked*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      transition_in(button5.$$.fragment, local);
      transition_in(button6.$$.fragment, local);
      transition_in(button7.$$.fragment, local);
      transition_in(button8.$$.fragment, local);
      transition_in(button9.$$.fragment, local);
      transition_in(button10.$$.fragment, local);
      transition_in(button11.$$.fragment, local);
      transition_in(button12.$$.fragment, local);
      transition_in(button13.$$.fragment, local);
      transition_in(button14.$$.fragment, local);
      transition_in(button15.$$.fragment, local);
      transition_in(button16.$$.fragment, local);
      transition_in(button17.$$.fragment, local);
      transition_in(button18.$$.fragment, local);
      transition_in(button19.$$.fragment, local);
      transition_in(button20.$$.fragment, local);
      transition_in(button21.$$.fragment, local);
      transition_in(button22.$$.fragment, local);
      transition_in(button23.$$.fragment, local);
      transition_in(button24.$$.fragment, local);
      transition_in(group0.$$.fragment, local);
      transition_in(group1.$$.fragment, local);
      transition_in(group2.$$.fragment, local);
      transition_in(group3.$$.fragment, local);
      transition_in(group4.$$.fragment, local);
      transition_in(group5.$$.fragment, local);
      transition_in(group6.$$.fragment, local);
      transition_in(button25.$$.fragment, local);
      transition_in(button26.$$.fragment, local);
      transition_in(button27.$$.fragment, local);
      transition_in(button28.$$.fragment, local);
      transition_in(button29.$$.fragment, local);
      transition_in(button30.$$.fragment, local);
      transition_in(button31.$$.fragment, local);
      transition_in(button32.$$.fragment, local);
      transition_in(button33.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      transition_out(button5.$$.fragment, local);
      transition_out(button6.$$.fragment, local);
      transition_out(button7.$$.fragment, local);
      transition_out(button8.$$.fragment, local);
      transition_out(button9.$$.fragment, local);
      transition_out(button10.$$.fragment, local);
      transition_out(button11.$$.fragment, local);
      transition_out(button12.$$.fragment, local);
      transition_out(button13.$$.fragment, local);
      transition_out(button14.$$.fragment, local);
      transition_out(button15.$$.fragment, local);
      transition_out(button16.$$.fragment, local);
      transition_out(button17.$$.fragment, local);
      transition_out(button18.$$.fragment, local);
      transition_out(button19.$$.fragment, local);
      transition_out(button20.$$.fragment, local);
      transition_out(button21.$$.fragment, local);
      transition_out(button22.$$.fragment, local);
      transition_out(button23.$$.fragment, local);
      transition_out(button24.$$.fragment, local);
      transition_out(group0.$$.fragment, local);
      transition_out(group1.$$.fragment, local);
      transition_out(group2.$$.fragment, local);
      transition_out(group3.$$.fragment, local);
      transition_out(group4.$$.fragment, local);
      transition_out(group5.$$.fragment, local);
      transition_out(group6.$$.fragment, local);
      transition_out(button25.$$.fragment, local);
      transition_out(button26.$$.fragment, local);
      transition_out(button27.$$.fragment, local);
      transition_out(button28.$$.fragment, local);
      transition_out(button29.$$.fragment, local);
      transition_out(button30.$$.fragment, local);
      transition_out(button31.$$.fragment, local);
      transition_out(button32.$$.fragment, local);
      transition_out(button33.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
      destroy_component(button5);
      destroy_component(button6);
      destroy_component(button7);
      destroy_component(button8);
      destroy_component(button9);
      destroy_component(button10);
      destroy_component(button11);
      destroy_component(button12);
      destroy_component(button13);
      destroy_component(button14);
      destroy_component(button15);
      destroy_component(button16);
      destroy_component(button17);
      destroy_component(button18);
      destroy_component(button19);
      destroy_component(button20);
      destroy_component(button21);
      destroy_component(button22);
      destroy_component(button23);
      destroy_component(button24);
      destroy_component(group0);
      destroy_component(group1);
      destroy_component(group2);
      destroy_component(group3);
      destroy_component(group4);
      destroy_component(group5);
      destroy_component(group6);
      destroy_component(button25);
      destroy_component(button26);
      destroy_component(button27);
      destroy_component(button28);
      destroy_component(button29);
      destroy_component(button30);
      destroy_component(button31);
      destroy_component(button32);
      destroy_component(button33);
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
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Button", slots, []);
  var clicked = 0;
  var menu;
  var menu2;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Button> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_4 = function click_handler_4() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_5 = function click_handler_5() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_6 = function click_handler_6() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_7 = function click_handler_7() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_8 = function click_handler_8() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_9 = function click_handler_9() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_10 = function click_handler_10() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_11 = function click_handler_11() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_12 = function click_handler_12() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_13 = function click_handler_13() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_14 = function click_handler_14() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_15 = function click_handler_15() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_16 = function click_handler_16() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_17 = function click_handler_17() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_18 = function click_handler_18() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_19 = function click_handler_19() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_20 = function click_handler_20() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_21 = function click_handler_21() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_22 = function click_handler_22() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_23 = function click_handler_23() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_24 = function click_handler_24() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_25 = function click_handler_25() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_26 = function click_handler_26() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_27 = function click_handler_27() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_28 = function click_handler_28() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_29 = function click_handler_29() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_30 = function click_handler_30() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_31 = function click_handler_31() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_32 = function click_handler_32() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_33 = function click_handler_33() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_34 = function click_handler_34() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_35 = function click_handler_35() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_36 = function click_handler_36() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_37 = function click_handler_37() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_38 = function click_handler_38() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_39 = function click_handler_39() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_40 = function click_handler_40() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_41 = function click_handler_41() {
    return menu.setOpen(true);
  };

  var SMUI_action_handler = function SMUI_action_handler() {
    return $$invalidate(0, clicked++, clicked);
  };

  var SMUI_action_handler_1 = function SMUI_action_handler_1() {
    return $$invalidate(0, clicked++, clicked);
  };

  var SMUI_action_handler_2 = function SMUI_action_handler_2() {
    return $$invalidate(0, clicked++, clicked);
  };

  function menu_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      menu = $$value;
      $$invalidate(1, menu);
    });
  }

  var click_handler_42 = function click_handler_42() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_43 = function click_handler_43() {
    return menu2.setOpen(true);
  };

  var SMUI_action_handler_3 = function SMUI_action_handler_3() {
    return $$invalidate(0, clicked++, clicked);
  };

  var SMUI_action_handler_4 = function SMUI_action_handler_4() {
    return $$invalidate(0, clicked++, clicked);
  };

  var SMUI_action_handler_5 = function SMUI_action_handler_5() {
    return $$invalidate(0, clicked++, clicked);
  };

  function menu_1_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      menu2 = $$value;
      $$invalidate(2, menu2);
    });
  }

  var click_handler_44 = function click_handler_44() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_45 = function click_handler_45() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_46 = function click_handler_46() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_47 = function click_handler_47() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_48 = function click_handler_48() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_49 = function click_handler_49() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_50 = function click_handler_50() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_51 = function click_handler_51() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_52 = function click_handler_52() {
    return $$invalidate(0, clicked++, clicked);
  };

  $$self.$capture_state = function () {
    return {
      Button: Button_1$1,
      Group: Group,
      GroupItem: GroupItem,
      Label: Label,
      Icon: Icon,
      Menu: Menu,
      List: List,
      Item: Item,
      Separator: Separator,
      Text: Text,
      clicked: clicked,
      menu: menu,
      menu2: menu2
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
    if ("menu" in $$props) $$invalidate(1, menu = $$props.menu);
    if ("menu2" in $$props) $$invalidate(2, menu2 = $$props.menu2);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [clicked, menu, menu2, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4, click_handler_5, click_handler_6, click_handler_7, click_handler_8, click_handler_9, click_handler_10, click_handler_11, click_handler_12, click_handler_13, click_handler_14, click_handler_15, click_handler_16, click_handler_17, click_handler_18, click_handler_19, click_handler_20, click_handler_21, click_handler_22, click_handler_23, click_handler_24, click_handler_25, click_handler_26, click_handler_27, click_handler_28, click_handler_29, click_handler_30, click_handler_31, click_handler_32, click_handler_33, click_handler_34, click_handler_35, click_handler_36, click_handler_37, click_handler_38, click_handler_39, click_handler_40, click_handler_41, SMUI_action_handler, SMUI_action_handler_1, SMUI_action_handler_2, menu_1_binding, click_handler_42, click_handler_43, SMUI_action_handler_3, SMUI_action_handler_4, SMUI_action_handler_5, menu_1_binding_1, click_handler_44, click_handler_45, click_handler_46, click_handler_47, click_handler_48, click_handler_49, click_handler_50, click_handler_51, click_handler_52];
}

var Button_1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Button_1, _SvelteComponentDev);

  var _super = _createSuper$1(Button_1);

  function Button_1(options) {
    var _this;

    _classCallCheck$1(this, Button_1);

    _this = _super.call(this, options);
    if (!document.getElementById("svelte-18uebmb-style")) add_css();
    init(_assertThisInitialized$1(_this), options, instance$1, create_fragment$1, safe_not_equal, {}, [-1, -1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Button_1",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Button_1;
}(SvelteComponentDev);

export default Button_1;
