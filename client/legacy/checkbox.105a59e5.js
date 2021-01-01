import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, V as validate_each_argument, ag as Button_1, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, C as transition_in, D as transition_out, E as destroy_component, f as space, g as element, t as text, q as query_selector_all, h as detach_dev, j as claim_space, k as claim_element, l as children, m as claim_text, p as add_location, o as attr_dev, r as insert_dev, u as append_dev, B as _slicedToArray, U as set_data_dev, Q as check_outros, W as destroy_each, w as validate_slots, L as binding_callbacks, M as bind, N as add_flush_callback, P as group_outros, v as noop } from './client.7aab66ca.js';
import { C as Checkbox } from './Checkbox.aae2afee.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './FormField.3cfd6222.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/demo/checkbox.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
} // (11:6) <span slot="label">


function create_label_slot_4(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Remember me.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Remember me.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 10, 6, 173);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot_4.name,
    type: "slot",
    source: "(11:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (9:4) <FormField>


function create_default_slot_5(ctx) {
  var checkbox;
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding(value) {
    /*checkbox_checked_binding*/
    ctx[6].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*simpleSelected*/
  ctx[0] !== void 0) {
    checkbox_props.checked =
    /*simpleSelected*/
    ctx[0];
  }

  checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "checked", checkbox_checked_binding);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_checked && dirty &
      /*simpleSelected*/
      1) {
        updating_checked = true;
        checkbox_changes.checked =
        /*simpleSelected*/
        ctx[0];
        add_flush_callback(function () {
          return updating_checked = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(9:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (20:6) <span slot="label">


function create_label_slot_3(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Remember me.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Remember me.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 19, 6, 386);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot_3.name,
    type: "slot",
    source: "(20:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (18:4) <FormField align="end">


function create_default_slot_4(ctx) {
  var checkbox;
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding_1(value) {
    /*checkbox_checked_binding_1*/
    ctx[7].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*simpleSelected2*/
  ctx[1] !== void 0) {
    checkbox_props.checked =
    /*simpleSelected2*/
    ctx[1];
  }

  checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "checked", checkbox_checked_binding_1);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_checked && dirty &
      /*simpleSelected2*/
      2) {
        updating_checked = true;
        checkbox_changes.checked =
        /*simpleSelected2*/
        ctx[1];
        add_flush_callback(function () {
          return updating_checked = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(18:4) <FormField align=\\\"end\\\">",
    ctx: ctx
  });
  return block;
} // (30:6) <span slot="label">


function create_label_slot_2(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Remember me.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Remember me.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 29, 6, 628);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot_2.name,
    type: "slot",
    source: "(30:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (28:4) <FormField>


function create_default_slot_3(ctx) {
  var checkbox;
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding_2(value) {
    /*checkbox_checked_binding_2*/
    ctx[8].call(null, value);
  }

  var checkbox_props = {
    touch: true
  };

  if (
  /*simpleSelected3*/
  ctx[2] !== void 0) {
    checkbox_props.checked =
    /*simpleSelected3*/
    ctx[2];
  }

  checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "checked", checkbox_checked_binding_2);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_checked && dirty &
      /*simpleSelected3*/
      4) {
        updating_checked = true;
        checkbox_changes.checked =
        /*simpleSelected3*/
        ctx[2];
        add_flush_callback(function () {
          return updating_checked = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(28:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (41:8) <span slot="label">


function create_label_slot_1(ctx) {
  var span;
  var t0_value =
  /*option*/
  ctx[12].name + "";
  var t0;
  var t1_value = (
  /*option*/
  ctx[12].disabled ? " (disabled)" : "") + "";
  var t1;
  var block = {
    c: function create() {
      span = element("span");
      t0 = text(t0_value);
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 40, 8, 930);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t0);
      append_dev(span, t1);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot_1.name,
    type: "slot",
    source: "(41:8) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (39:6) <FormField>


function create_default_slot_2(ctx) {
  var checkbox;
  var updating_group;
  var t0;
  var t1;
  var current;

  function checkbox_group_binding(value) {
    /*checkbox_group_binding*/
    ctx[9].call(null, value);
  }

  var checkbox_props = {
    value:
    /*option*/
    ctx[12].name,
    disabled:
    /*option*/
    ctx[12].disabled
  };

  if (
  /*selected*/
  ctx[3] !== void 0) {
    checkbox_props.group =
    /*selected*/
    ctx[3];
  }

  checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "group", checkbox_group_binding);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
      t0 = space();
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t0 = claim_space(nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_group && dirty &
      /*selected*/
      8) {
        updating_group = true;
        checkbox_changes.group =
        /*selected*/
        ctx[3];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(39:6) <FormField>",
    ctx: ctx
  });
  return block;
} // (38:4) {#each options as option}


function create_each_block(ctx) {
  var formfield;
  var current;
  formfield = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_2],
        label: [create_label_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(formfield.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(formfield.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(formfield, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var formfield_changes = {};

      if (dirty &
      /*$$scope, selected*/
      32776) {
        formfield_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield.$set(formfield_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(formfield, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(38:4) {#each options as option}",
    ctx: ctx
  });
  return block;
} // (52:6) <span slot="label">


function create_label_slot(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("I agree to the terms.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "I agree to the terms.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 51, 6, 1281);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot.name,
    type: "slot",
    source: "(52:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (50:4) <FormField>


function create_default_slot_1(ctx) {
  var checkbox;
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding_3(value) {
    /*checkbox_checked_binding_3*/
    ctx[10].call(null, value);
  }

  var checkbox_props = {
    indeterminate:
    /*indeterminateChecked*/
    ctx[4] === null,
    input$required: true
  };

  if (
  /*indeterminateChecked*/
  ctx[4] !== void 0) {
    checkbox_props.checked =
    /*indeterminateChecked*/
    ctx[4];
  }

  checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "checked", checkbox_checked_binding_3);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};
      if (dirty &
      /*indeterminateChecked*/
      16) checkbox_changes.indeterminate =
      /*indeterminateChecked*/
      ctx[4] === null;

      if (!updating_checked && dirty &
      /*indeterminateChecked*/
      16) {
        updating_checked = true;
        checkbox_changes.checked =
        /*indeterminateChecked*/
        ctx[4];
        add_flush_callback(function () {
          return updating_checked = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(50:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (57:2) <Button on:click={() => indeterminateChecked = null }>


function create_default_slot(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("reset");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "reset");
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
    id: create_default_slot.name,
    type: "slot",
    source: "(57:2) <Button on:click={() => indeterminateChecked = null }>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var formfield0;
  var t3;
  var pre0;
  var t4;
  var t5;
  var t6;
  var div1;
  var formfield1;
  var t7;
  var pre1;
  var t8;
  var t9;
  var t10;
  var div2;
  var t11;
  var br0;
  var t12;
  var formfield2;
  var t13;
  var pre2;
  var t14;
  var t15;
  var t16;
  var div3;
  var t17;
  var br1;
  var t18;
  var t19;
  var pre3;
  var t20;
  var t21_value =
  /*selected*/
  ctx[3].join(", ") + "";
  var t21;
  var t22;
  var div4;
  var t23;
  var br2;
  var t24;
  var formfield3;
  var t25;
  var pre4;
  var t26;
  var t27;
  var t28;
  var button;
  var current;
  formfield0 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_5],
        label: [create_label_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  formfield1 = new FormField({
    props: {
      align: "end",
      $$slots: {
        default: [create_default_slot_4],
        label: [create_label_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  formfield2 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_3],
        label: [create_label_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var each_value =
  /*options*/
  ctx[5];
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

  formfield3 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_1],
        label: [create_label_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button.$on("click",
  /*click_handler*/
  ctx[11]);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Checkbox");
      t2 = space();
      div0 = element("div");
      create_component(formfield0.$$.fragment);
      t3 = space();
      pre0 = element("pre");
      t4 = text("Checked: ");
      t5 = text(
      /*simpleSelected*/
      ctx[0]);
      t6 = space();
      div1 = element("div");
      create_component(formfield1.$$.fragment);
      t7 = space();
      pre1 = element("pre");
      t8 = text("Checked: ");
      t9 = text(
      /*simpleSelected2*/
      ctx[1]);
      t10 = space();
      div2 = element("div");
      t11 = text("Increased touch target:");
      br0 = element("br");
      t12 = space();
      create_component(formfield2.$$.fragment);
      t13 = space();
      pre2 = element("pre");
      t14 = text("Checked: ");
      t15 = text(
      /*simpleSelected3*/
      ctx[2]);
      t16 = space();
      div3 = element("div");
      t17 = text("Group checkbox:");
      br1 = element("br");
      t18 = space();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t19 = space();
      pre3 = element("pre");
      t20 = text("Selected: ");
      t21 = text(t21_value);
      t22 = space();
      div4 = element("div");
      t23 = text("Indeterminate:");
      br2 = element("br");
      t24 = space();
      create_component(formfield3.$$.fragment);
      t25 = space();
      pre4 = element("pre");
      t26 = text("Checked: ");
      t27 = text(
      /*indeterminateChecked*/
      ctx[4]);
      t28 = space();
      create_component(button.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-az4iod\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Checkbox");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(formfield0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t4 = claim_text(pre0_nodes, "Checked: ");
      t5 = claim_text(pre0_nodes,
      /*simpleSelected*/
      ctx[0]);
      pre0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      claim_component(formfield1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t8 = claim_text(pre1_nodes, "Checked: ");
      t9 = claim_text(pre1_nodes,
      /*simpleSelected2*/
      ctx[1]);
      pre1_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t11 = claim_text(div2_nodes, "Increased touch target:");
      br0 = claim_element(div2_nodes, "BR", {});
      t12 = claim_space(div2_nodes);
      claim_component(formfield2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre2_nodes = children(pre2);
      t14 = claim_text(pre2_nodes, "Checked: ");
      t15 = claim_text(pre2_nodes,
      /*simpleSelected3*/
      ctx[2]);
      pre2_nodes.forEach(detach_dev);
      t16 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t17 = claim_text(div3_nodes, "Group checkbox:");
      br1 = claim_element(div3_nodes, "BR", {});
      t18 = claim_space(div3_nodes);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div3_nodes);
      }

      div3_nodes.forEach(detach_dev);
      t19 = claim_space(section_nodes);
      pre3 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre3_nodes = children(pre3);
      t20 = claim_text(pre3_nodes, "Selected: ");
      t21 = claim_text(pre3_nodes, t21_value);
      pre3_nodes.forEach(detach_dev);
      t22 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {});
      var div4_nodes = children(div4);
      t23 = claim_text(div4_nodes, "Indeterminate:");
      br2 = claim_element(div4_nodes, "BR", {});
      t24 = claim_space(div4_nodes);
      claim_component(formfield3.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t25 = claim_space(section_nodes);
      pre4 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre4_nodes = children(pre4);
      t26 = claim_text(pre4_nodes, "Checked: ");
      t27 = claim_text(pre4_nodes,
      /*indeterminateChecked*/
      ctx[4]);
      pre4_nodes.forEach(detach_dev);
      t28 = claim_space(section_nodes);
      claim_component(button.$$.fragment, section_nodes);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Checkbox - SMUI";
      add_location(h2, file, 5, 2, 75);
      add_location(div0, file, 7, 2, 96);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file, 14, 2, 241);
      add_location(div1, file, 16, 2, 296);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file, 23, 2, 454);
      add_location(br0, file, 26, 27, 543);
      add_location(div2, file, 25, 2, 510);
      attr_dev(pre2, "class", "status");
      add_location(pre2, file, 33, 2, 696);
      add_location(br1, file, 36, 19, 777);
      add_location(div3, file, 35, 2, 752);
      attr_dev(pre3, "class", "status");
      add_location(pre3, file, 45, 2, 1051);
      add_location(br2, file, 48, 18, 1136);
      add_location(div4, file, 47, 2, 1112);
      attr_dev(pre4, "class", "status");
      add_location(pre4, file, 55, 2, 1358);
      add_location(section, file, 4, 0, 63);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(formfield0, div0, null);
      append_dev(section, t3);
      append_dev(section, pre0);
      append_dev(pre0, t4);
      append_dev(pre0, t5);
      append_dev(section, t6);
      append_dev(section, div1);
      mount_component(formfield1, div1, null);
      append_dev(section, t7);
      append_dev(section, pre1);
      append_dev(pre1, t8);
      append_dev(pre1, t9);
      append_dev(section, t10);
      append_dev(section, div2);
      append_dev(div2, t11);
      append_dev(div2, br0);
      append_dev(div2, t12);
      mount_component(formfield2, div2, null);
      append_dev(section, t13);
      append_dev(section, pre2);
      append_dev(pre2, t14);
      append_dev(pre2, t15);
      append_dev(section, t16);
      append_dev(section, div3);
      append_dev(div3, t17);
      append_dev(div3, br1);
      append_dev(div3, t18);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div3, null);
      }

      append_dev(section, t19);
      append_dev(section, pre3);
      append_dev(pre3, t20);
      append_dev(pre3, t21);
      append_dev(section, t22);
      append_dev(section, div4);
      append_dev(div4, t23);
      append_dev(div4, br2);
      append_dev(div4, t24);
      mount_component(formfield3, div4, null);
      append_dev(section, t25);
      append_dev(section, pre4);
      append_dev(pre4, t26);
      append_dev(pre4, t27);
      append_dev(section, t28);
      mount_component(button, section, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var formfield0_changes = {};

      if (dirty &
      /*$$scope, simpleSelected*/
      32769) {
        formfield0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield0.$set(formfield0_changes);
      if (!current || dirty &
      /*simpleSelected*/
      1) set_data_dev(t5,
      /*simpleSelected*/
      ctx[0]);
      var formfield1_changes = {};

      if (dirty &
      /*$$scope, simpleSelected2*/
      32770) {
        formfield1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield1.$set(formfield1_changes);
      if (!current || dirty &
      /*simpleSelected2*/
      2) set_data_dev(t9,
      /*simpleSelected2*/
      ctx[1]);
      var formfield2_changes = {};

      if (dirty &
      /*$$scope, simpleSelected3*/
      32772) {
        formfield2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield2.$set(formfield2_changes);
      if (!current || dirty &
      /*simpleSelected3*/
      4) set_data_dev(t15,
      /*simpleSelected3*/
      ctx[2]);

      if (dirty &
      /*options, selected*/
      40) {
        each_value =
        /*options*/
        ctx[5];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div3, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if ((!current || dirty &
      /*selected*/
      8) && t21_value !== (t21_value =
      /*selected*/
      ctx[3].join(", ") + "")) set_data_dev(t21, t21_value);
      var formfield3_changes = {};

      if (dirty &
      /*$$scope, indeterminateChecked*/
      32784) {
        formfield3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield3.$set(formfield3_changes);
      if (!current || dirty &
      /*indeterminateChecked*/
      16) set_data_dev(t27,
      /*indeterminateChecked*/
      ctx[4]);
      var button_changes = {};

      if (dirty &
      /*$$scope*/
      32768) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield0.$$.fragment, local);
      transition_in(formfield1.$$.fragment, local);
      transition_in(formfield2.$$.fragment, local);

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      transition_in(formfield3.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield0.$$.fragment, local);
      transition_out(formfield1.$$.fragment, local);
      transition_out(formfield2.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      transition_out(formfield3.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(formfield0);
      destroy_component(formfield1);
      destroy_component(formfield2);
      destroy_each(each_blocks, detaching);
      destroy_component(formfield3);
      destroy_component(button);
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
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Checkbox", slots, []);
  var simpleSelected = false;
  var simpleSelected2 = false;
  var simpleSelected3 = false;
  var options = [{
    name: "Bashful",
    disabled: false
  }, {
    name: "Doc",
    disabled: true
  }, {
    name: "Dopey",
    disabled: false
  }, {
    name: "Happy",
    disabled: false
  }, {
    name: "Sleepy",
    disabled: false
  }, {
    name: "Sneezy",
    disabled: false
  }, {
    name: "Grumpy",
    disabled: false
  }];
  var selected = ["Happy", "Grumpy"];
  var indeterminateChecked = null;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Checkbox> was created with unknown prop '".concat(key, "'"));
  });

  function checkbox_checked_binding(value) {
    simpleSelected = value;
    $$invalidate(0, simpleSelected);
  }

  function checkbox_checked_binding_1(value) {
    simpleSelected2 = value;
    $$invalidate(1, simpleSelected2);
  }

  function checkbox_checked_binding_2(value) {
    simpleSelected3 = value;
    $$invalidate(2, simpleSelected3);
  }

  function checkbox_group_binding(value) {
    selected = value;
    $$invalidate(3, selected);
  }

  function checkbox_checked_binding_3(value) {
    indeterminateChecked = value;
    $$invalidate(4, indeterminateChecked);
  }

  var click_handler = function click_handler() {
    return $$invalidate(4, indeterminateChecked = null);
  };

  $$self.$capture_state = function () {
    return {
      Checkbox: Checkbox,
      FormField: FormField,
      Button: Button_1,
      simpleSelected: simpleSelected,
      simpleSelected2: simpleSelected2,
      simpleSelected3: simpleSelected3,
      options: options,
      selected: selected,
      indeterminateChecked: indeterminateChecked
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("simpleSelected" in $$props) $$invalidate(0, simpleSelected = $$props.simpleSelected);
    if ("simpleSelected2" in $$props) $$invalidate(1, simpleSelected2 = $$props.simpleSelected2);
    if ("simpleSelected3" in $$props) $$invalidate(2, simpleSelected3 = $$props.simpleSelected3);
    if ("options" in $$props) $$invalidate(5, options = $$props.options);
    if ("selected" in $$props) $$invalidate(3, selected = $$props.selected);
    if ("indeterminateChecked" in $$props) $$invalidate(4, indeterminateChecked = $$props.indeterminateChecked);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [simpleSelected, simpleSelected2, simpleSelected3, selected, indeterminateChecked, options, checkbox_checked_binding, checkbox_checked_binding_1, checkbox_checked_binding_2, checkbox_group_binding, checkbox_checked_binding_3, click_handler];
}

var Checkbox_1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Checkbox_1, _SvelteComponentDev);

  var _super = _createSuper(Checkbox_1);

  function Checkbox_1(options) {
    var _this;

    _classCallCheck(this, Checkbox_1);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Checkbox_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Checkbox_1;
}(SvelteComponentDev);

export default Checkbox_1;
