import { Y as _inherits, Z as _getPrototypeOf, $ as _possibleConstructorReturn, a0 as _classCallCheck, i as init, s as safe_not_equal, a1 as _assertThisInitialized, e as dispatch_dev, a2 as _createClass, S as SvelteComponentDev, aU as Ripple, aJ as _toConsumableArray, a3 as exclude, w as validate_slots, a5 as forwardEventsBuilder, a6 as get_current_component, ai as setContext, a4 as assign, a9 as exclude_internal_props, aW as A, aX as Button, x as create_component, O as empty, y as claim_component, z as mount_component, r as insert_dev, ac as _slicedToArray, ad as get_spread_update, aw as get_spread_object, P as group_outros, D as transition_out, E as destroy_component, Q as check_outros, C as transition_in, h as detach_dev, ah as create_slot, g as element, k as claim_element, l as children, o as attr_dev, p as add_location, al as update_slot } from './client.7aab66ca.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "../packages/fab/Fab.svelte"; // (14:1) {#if ripple}

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
      attr_dev(div, "class", "mdc-fab__ripple");
      add_location(div, file, 13, 13, 549);
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
    source: "(14:1) {#if ripple}",
    ctx: ctx
  });
  return block;
} // (1:0) <svelte:component   this={component}   use={[[Ripple, {ripple, unbounded: false, disabled: !!$$props.disabled, classForward: classes => rippleClasses = classes}], forwardEvents, ...use]}   class="     mdc-fab     {className}     {rippleClasses.join(' ')}     {mini ? 'mdc-fab--mini' : ''}     {exited ? 'mdc-fab--exited' : ''}     {extended ? 'mdc-fab--extended' : ''}     {color === 'primary' ? 'smui-fab--color-primary' : ''}   "   {...exclude($$props, ['use', 'class', 'ripple', 'color', 'mini', 'exited', 'extended', 'component'])} >


function create_default_slot(ctx) {
  var if_block_anchor;
  var current;
  var if_block =
  /*ripple*/
  ctx[2] && create_if_block(ctx);
  var default_slot_template =
  /*#slots*/
  ctx[12].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[14], null);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
      if (default_slot) default_slot.c();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      if (default_slot) default_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);

      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*ripple*/
      ctx[2]) {
        if (if_block) ; else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        16384) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[14], dirty, null, null);
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
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(1:0) <svelte:component   this={component}   use={[[Ripple, {ripple, unbounded: false, disabled: !!$$props.disabled, classForward: classes => rippleClasses = classes}], forwardEvents, ...use]}   class=\\\"     mdc-fab     {className}     {rippleClasses.join(' ')}     {mini ? 'mdc-fab--mini' : ''}     {exited ? 'mdc-fab--exited' : ''}     {extended ? 'mdc-fab--extended' : ''}     {color === 'primary' ? 'smui-fab--color-primary' : ''}   \\\"   {...exclude($$props, ['use', 'class', 'ripple', 'color', 'mini', 'exited', 'extended', 'component'])} >",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var switch_instance;
  var switch_instance_anchor;
  var current;
  var switch_instance_spread_levels = [{
    use: [[Ripple, {
      ripple:
      /*ripple*/
      ctx[2],
      unbounded: false,
      disabled: !!
      /*$$props*/
      ctx[10].disabled,
      classForward:
      /*func*/
      ctx[13]
    }],
    /*forwardEvents*/
    ctx[9]].concat(_toConsumableArray(
    /*use*/
    ctx[0]))
  }, {
    class: "\n    mdc-fab\n    " +
    /*className*/
    ctx[1] + "\n    " +
    /*rippleClasses*/
    ctx[8].join(" ") + "\n    " + (
    /*mini*/
    ctx[4] ? "mdc-fab--mini" : "") + "\n    " + (
    /*exited*/
    ctx[5] ? "mdc-fab--exited" : "") + "\n    " + (
    /*extended*/
    ctx[6] ? "mdc-fab--extended" : "") + "\n    " + (
    /*color*/
    ctx[3] === "primary" ? "smui-fab--color-primary" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[10], ["use", "class", "ripple", "color", "mini", "exited", "extended", "component"])];
  var switch_value =
  /*component*/
  ctx[7];

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

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
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
      /*Ripple, ripple, $$props, rippleClasses, forwardEvents, use, className, mini, exited, extended, color, exclude*/
      1919 ? get_spread_update(switch_instance_spread_levels, [dirty &
      /*Ripple, ripple, $$props, rippleClasses, forwardEvents, use*/
      1797 && {
        use: [[Ripple, {
          ripple:
          /*ripple*/
          ctx[2],
          unbounded: false,
          disabled: !!
          /*$$props*/
          ctx[10].disabled,
          classForward:
          /*func*/
          ctx[13]
        }],
        /*forwardEvents*/
        ctx[9]].concat(_toConsumableArray(
        /*use*/
        ctx[0]))
      }, dirty &
      /*className, rippleClasses, mini, exited, extended, color*/
      378 && {
        class: "\n    mdc-fab\n    " +
        /*className*/
        ctx[1] + "\n    " +
        /*rippleClasses*/
        ctx[8].join(" ") + "\n    " + (
        /*mini*/
        ctx[4] ? "mdc-fab--mini" : "") + "\n    " + (
        /*exited*/
        ctx[5] ? "mdc-fab--exited" : "") + "\n    " + (
        /*extended*/
        ctx[6] ? "mdc-fab--extended" : "") + "\n    " + (
        /*color*/
        ctx[3] === "primary" ? "smui-fab--color-primary" : "") + "\n  "
      }, dirty &
      /*exclude, $$props*/
      1024 && get_spread_object(exclude(
      /*$$props*/
      ctx[10], ["use", "class", "ripple", "color", "mini", "exited", "extended", "component"]))]) : {};

      if (dirty &
      /*$$scope, ripple*/
      16388) {
        switch_instance_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (switch_value !== (switch_value =
      /*component*/
      ctx[7])) {
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
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Fab", slots, ['default']);
  var forwardEvents = forwardEventsBuilder(get_current_component());
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
      _$$props5$color = _$$props5.color,
      color = _$$props5$color === void 0 ? "secondary" : _$$props5$color;
  var _$$props6 = $$props,
      _$$props6$mini = _$$props6.mini,
      mini = _$$props6$mini === void 0 ? false : _$$props6$mini;
  var _$$props7 = $$props,
      _$$props7$exited = _$$props7.exited,
      exited = _$$props7$exited === void 0 ? false : _$$props7$exited;
  var _$$props8 = $$props,
      _$$props8$extended = _$$props8.extended,
      extended = _$$props8$extended === void 0 ? false : _$$props8$extended;
  var _$$props9 = $$props,
      _$$props9$href = _$$props9.href,
      href = _$$props9$href === void 0 ? null : _$$props9$href;
  var _$$props10 = $$props,
      _$$props10$component = _$$props10.component,
      component = _$$props10$component === void 0 ? href == null ? Button : A : _$$props10$component;
  var rippleClasses = [];
  setContext("SMUI:label:context", "fab");
  setContext("SMUI:icon:context", "fab");

  var func = function func(classes) {
    return $$invalidate(8, rippleClasses = classes);
  };

  $$self.$$set = function ($$new_props) {
    $$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("ripple" in $$new_props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$new_props) $$invalidate(3, color = $$new_props.color);
    if ("mini" in $$new_props) $$invalidate(4, mini = $$new_props.mini);
    if ("exited" in $$new_props) $$invalidate(5, exited = $$new_props.exited);
    if ("extended" in $$new_props) $$invalidate(6, extended = $$new_props.extended);
    if ("href" in $$new_props) $$invalidate(11, href = $$new_props.href);
    if ("component" in $$new_props) $$invalidate(7, component = $$new_props.component);
    if ("$$scope" in $$new_props) $$invalidate(14, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      setContext: setContext,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      A: A,
      Button: Button,
      Ripple: Ripple,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      ripple: ripple,
      color: color,
      mini: mini,
      exited: exited,
      extended: extended,
      href: href,
      component: component,
      rippleClasses: rippleClasses
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(10, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("ripple" in $$props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$props) $$invalidate(3, color = $$new_props.color);
    if ("mini" in $$props) $$invalidate(4, mini = $$new_props.mini);
    if ("exited" in $$props) $$invalidate(5, exited = $$new_props.exited);
    if ("extended" in $$props) $$invalidate(6, extended = $$new_props.extended);
    if ("href" in $$props) $$invalidate(11, href = $$new_props.href);
    if ("component" in $$props) $$invalidate(7, component = $$new_props.component);
    if ("rippleClasses" in $$props) $$invalidate(8, rippleClasses = $$new_props.rippleClasses);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, ripple, color, mini, exited, extended, component, rippleClasses, forwardEvents, $$props, href, slots, func, $$scope];
}

var Fab = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Fab, _SvelteComponentDev);

  var _super = _createSuper(Fab);

  function Fab(options) {
    var _this;

    _classCallCheck(this, Fab);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      ripple: 2,
      color: 3,
      mini: 4,
      exited: 5,
      extended: 6,
      href: 11,
      component: 7
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Fab",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Fab, [{
    key: "use",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "color",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "mini",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "exited",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "extended",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "href",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "component",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Fab;
}(SvelteComponentDev);

export { Fab as F };
