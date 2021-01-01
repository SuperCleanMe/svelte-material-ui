import{K as t,S as e,i as n,s as i,a4 as r,L as a,M as l,e as o,a as c,b as u,f as s,c as f,d,N as p,k as m,l as g,r as h,O as b,a5 as y,P as v,Q as _,u as O,v as E,U as I,V as $,W as w,y as j,a1 as x,X as L,Y as P,Z as S,a6 as k,a7 as C,z as R}from"./client.41683df4.js";import{p as H}from"./prefixFilter.73eb3417.js";t(".mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}.mdc-form-field--align-end>label,.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{order:-1}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}.mdc-form-field .mdc-switch+label{margin-left:10px;margin-right:0}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label,.mdc-form-field .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field .mdc-switch+label{margin-left:0;margin-right:10px}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field.mdc-form-field--align-end .mdc-switch+label{margin-left:10px;margin-right:0}");
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
var A=function(t,e){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function D(t,e){function n(){this.constructor=t}A(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var F=function(){return(F=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function M(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,a=n.call(t),l=[];try{for(;(void 0===e||e-- >0)&&!(i=a.next()).done;)l.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return l}function z(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(M(arguments[e]));return t}
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
 */var T=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),U=function(){function t(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,z(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new T({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},t}(),B={ROOT:"mdc-form-field"},W={LABEL_SELECTOR:".mdc-form-field > label"},q=function(t){function e(n){var i=t.call(this,F({},e.defaultAdapter,n))||this;return i.clickHandler_=function(){return i.handleClick_()},i}return D(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return B},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return W},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},e.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame((function(){return t.adapter_.deactivateInputRipple()}))},e}(T),V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return D(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"input",{get:function(){return this.input_},set:function(t){this.input_=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"label_",{get:function(){var t=q.strings.LABEL_SELECTOR;return this.root_.querySelector(t)},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new q({activateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.activate()},deactivateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.deactivate()},deregisterInteractionHandler:function(e,n){t.label_&&t.label_.removeEventListener(e,n)},registerInteractionHandler:function(e,n){t.label_&&t.label_.addEventListener(e,n)}})},e}(U);
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
 */const K=t=>({}),N=t=>({});function Q(t){let e,n,i,$,w,j,x,L,P,S;const k=t[11].default,C=r(k,t,t[10],null),R=t[11].label,A=r(R,t,t[10],N);let D=[{for:t[3]},a(H(t[8],"label$"),["use"])],F={};for(let t=0;t<D.length;t+=1)F=l(F,D[t]);let M=[{class:w="\n    mdc-form-field\n    "+t[1]+"\n    "+("end"===t[2]?"mdc-form-field--align-end":"")+"\n  "},a(t[8],["use","class","alignEnd","inputId","label$"])],z={};for(let t=0;t<M.length;t+=1)z=l(z,M[t]);return{c(){e=o("div"),C&&C.c(),n=c(),i=o("label"),A&&A.c(),this.h()},l(t){e=u(t,"DIV",{class:!0});var r=s(e);C&&C.l(r),n=f(r),i=u(r,"LABEL",{for:!0});var a=s(i);A&&A.l(a),a.forEach(d),r.forEach(d),this.h()},h(){p(i,F),p(e,z)},m(r,a){m(r,e,a),C&&C.m(e,null),g(e,n),g(e,i),A&&A.m(i,null),t[12](e),L=!0,P||(S=[h($=b.call(null,i,t[4])),h(j=b.call(null,e,t[0])),h(x=t[6].call(null,e))],P=!0)},p(t,[n]){C&&C.p&&1024&n&&y(C,k,t,t[10],n,null,null),A&&A.p&&1024&n&&y(A,R,t,t[10],n,K,N),p(i,F=v(D,[(!L||8&n)&&{for:t[3]},256&n&&a(H(t[8],"label$"),["use"])])),$&&_($.update)&&16&n&&$.update.call(null,t[4]),p(e,z=v(M,[(!L||6&n&&w!==(w="\n    mdc-form-field\n    "+t[1]+"\n    "+("end"===t[2]?"mdc-form-field--align-end":"")+"\n  "))&&{class:w},256&n&&a(t[8],["use","class","alignEnd","inputId","label$"])])),j&&_(j.update)&&1&n&&j.update.call(null,t[0])},i(t){L||(O(C,t),O(A,t),L=!0)},o(t){E(C,t),E(A,t),L=!1},d(n){n&&d(e),C&&C.d(n),A&&A.d(n),t[12](null),P=!1,I(S)}}}let X=0;function Y(t,e,n){let i,{$$slots:r={},$$scope:a}=e;const o=$(w());let c,u,{use:s=[]}=e,{class:f=""}=e,{align:d="start"}=e,{inputId:p="SMUI-form-field-"+X++}=e,{label$use:m=[]}=e,g=C(u);return j(t,g,(t=>n(13,i=t))),x("SMUI:form-field",g),x("SMUI:generic:input:props",{id:p}),L((()=>{n(9,u=new V(c))})),P((()=>{u&&u.destroy()})),t.$$set=t=>{n(8,e=l(l({},e),S(t))),"use"in t&&n(0,s=t.use),"class"in t&&n(1,f=t.class),"align"in t&&n(2,d=t.align),"inputId"in t&&n(3,p=t.inputId),"label$use"in t&&n(4,m=t.label$use),"$$scope"in t&&n(10,a=t.$$scope)},t.$$.update=()=>{512&t.$$.dirty&&k(g,i=u,i)},e=S(e),[s,f,d,p,m,c,o,g,e,u,a,r,function(t){R[t?"unshift":"push"]((()=>{c=t,n(5,c)}))}]}class Z extends e{constructor(t){super(),n(this,t,Y,Q,i,{use:0,class:1,align:2,inputId:3,label$use:4})}}export{Z as F};
