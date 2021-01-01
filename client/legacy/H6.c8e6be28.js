import { Y as _inherits, Z as _getPrototypeOf, $ as _possibleConstructorReturn, a0 as _classCallCheck, i as init, s as safe_not_equal, a1 as _assertThisInitialized, e as dispatch_dev, a2 as _createClass, S as SvelteComponentDev, ah as create_slot, a3 as exclude, a4 as assign, w as validate_slots, a5 as forwardEventsBuilder, a6 as get_current_component, a9 as exclude_internal_props, aa as useActions, g as element, k as claim_element, l as children, h as detach_dev, ab as set_attributes, p as add_location, r as insert_dev, A as action_destroyer, ac as _slicedToArray, al as update_slot, ad as get_spread_update, ae as is_function, C as transition_in, D as transition_out, af as run_all, L as binding_callbacks } from './client.7aab66ca.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "../packages/common/H6.svelte";

function create_fragment(ctx) {
  var h6;
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
  var h6_levels = [exclude(
  /*$$props*/
  ctx[3], ["element", "use", "forwardEvents"])];
  var h6_data = {};

  for (var i = 0; i < h6_levels.length; i += 1) {
    h6_data = assign(h6_data, h6_levels[i]);
  }

  var block = {
    c: function create() {
      h6 = element("h6");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      h6 = claim_element(nodes, "H6", {});
      var h6_nodes = children(h6);
      if (default_slot) default_slot.l(h6_nodes);
      h6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(h6, h6_data);
      add_location(h6, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h6, anchor);

      if (default_slot) {
        default_slot.m(h6, null);
      }
      /*h6_binding*/


      ctx[7](h6);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, h6,
        /*use*/
        ctx[1])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[2].call(null, h6))];
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

      set_attributes(h6, h6_data = get_spread_update(h6_levels, [dirty &
      /*$$props*/
      8 && exclude(
      /*$$props*/
      ctx[3], ["element", "use", "forwardEvents"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      2) useActions_action.update.call(null,
      /*use*/
      ctx[1]);
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
      if (detaching) detach_dev(h6);
      if (default_slot) default_slot.d(detaching);
      /*h6_binding*/

      ctx[7](null);
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
  validate_slots("H6", slots, ['default']);
  var _$$props2 = $$props,
      _$$props2$element = _$$props2.element,
      element = _$$props2$element === void 0 ? null : _$$props2$element;
  var _$$props3 = $$props,
      _$$props3$use = _$$props3.use,
      use = _$$props3$use === void 0 ? [] : _$$props3$use;
  var _$$props4 = $$props,
      _$$props4$forwardEven = _$$props4.forwardEvents,
      forwardEventsAdditional = _$$props4$forwardEven === void 0 ? [] : _$$props4$forwardEven;
  var forwardEvents = forwardEventsBuilder(get_current_component(), forwardEventsAdditional);

  function h6_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("element" in $$new_props) $$invalidate(0, element = $$new_props.element);
    if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
    if ("forwardEvents" in $$new_props) $$invalidate(4, forwardEventsAdditional = $$new_props.forwardEvents);
    if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      element: element,
      use: use,
      forwardEventsAdditional: forwardEventsAdditional,
      forwardEvents: forwardEvents
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), $$new_props));
    if ("element" in $$props) $$invalidate(0, element = $$new_props.element);
    if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
    if ("forwardEventsAdditional" in $$props) $$invalidate(4, forwardEventsAdditional = $$new_props.forwardEventsAdditional);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [element, use, forwardEvents, $$props, forwardEventsAdditional, $$scope, slots, h6_binding];
}

var H6 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(H6, _SvelteComponentDev);

  var _super = _createSuper(H6);

  function H6(options) {
    var _this;

    _classCallCheck(this, H6);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      element: 0,
      use: 1,
      forwardEvents: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "H6",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(H6, [{
    key: "element",
    get: function get() {
      throw new Error("<H6>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<H6>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "use",
    get: function get() {
      throw new Error("<H6>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<H6>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "forwardEvents",
    get: function get() {
      throw new Error("<H6>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<H6>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return H6;
}(SvelteComponentDev);

export { H6 as H };
