(self["webpackChunkfirebase_login"]=self["webpackChunkfirebase_login"]||[]).push([[998],{4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return u},L:function(){return s},LL:function(){return w},Mn:function(){return m},X3:function(){return F},ZR:function(){return b},b$:function(){return d},d:function(){return p},eu:function(){return g},hl:function(){return y},m9:function(){return L},ne:function(){return x},pd:function(){return A},ru:function(){return h},tV:function(){return c},uI:function(){return f},vZ:function(){return E},w1:function(){return v},xO:function(){return T},xb:function(){return k},z$:function(){return l},zd:function(){return C}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],a=t[n++],s=t[n++],c=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&s)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,a=o?t[i+1]:0,s=i+2<t.length,c=s?t[i+2]:0,u=e>>2,l=(3&e)<<4|a>>4;let f=(15&a)<<2|c>>6,h=63&c;s||(h=64,o||(f=64)),r.push(n[u],n[l],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;const s=i<t.length,c=s?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==c||null==l)throw Error();const f=e<<2|a>>4;if(r.push(f),64!==c){const t=a<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},s=function(t){return a(t).replace(/\./g,"")},c=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function h(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return l().indexOf("Electron/")>=0}function v(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return l().indexOf("MSAppHost/")>=0}function y(){return"object"===typeof indexedDB}function g(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _="FirebaseError";class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=_,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?I(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`,s=new b(r,a,n);return s}}function I(t,e){return t.replace(O,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function E(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(S(n)&&S(o)){if(!E(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function S(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function C(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function A(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){const n=new R(t,e);return n.subscribe.bind(n)}class R{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=P(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=N),void 0===r.error&&(r.error=N),void 0===r.complete&&(r.complete=N);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function P(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function N(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){return new Promise(((n,r)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{var n;r(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)}}))}class D{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e){return new $(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new M(this._db.createObjectStore(t,e))}close(){this._db.close()}}class ${constructor(t){this._transaction=t,this.complete=new Promise(((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}}))}objectStore(t){return new M(this._transaction.objectStore(t))}}class M{constructor(t){this._store=t}index(t){return new U(this._store.index(t))}createIndex(t,e,n){return new U(this._store.createIndex(t,e,n))}get(t){const e=this._store.get(t);return j(e,"Error reading from IndexedDB")}put(t,e){const n=this._store.put(t,e);return j(n,"Error writing to IndexedDB")}delete(t){const e=this._store.delete(t);return j(e,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return j(t,"Error clearing IndexedDB object store")}}class U{constructor(t){this._index=t}get(t){const e=this._index.get(t);return j(e,"Error reading from IndexedDB")}}function F(t,e,n){return new Promise(((r,i)=>{try{const o=indexedDB.open(t,e);o.onsuccess=t=>{r(new D(t.target.result))},o.onerror=t=>{var e;i(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)},o.onupgradeneeded=t=>{n(new D(o.result),t.oldVersion,t.newVersion,new $(o.transaction))}}catch(o){i(`Error opening indexedDB: ${o.message}`)}}))}},1001:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},9662:function(t,e,n){var r=n(7854),i=n(614),o=n(6330),a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not a function")}},9483:function(t,e,n){var r=n(7854),i=n(4411),o=n(6330),a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not a constructor")}},6077:function(t,e,n){var r=n(7854),i=n(614),o=r.String,a=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw a("Can't set "+o(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),o=n(3070),a=r("unscopables"),s=Array.prototype;void 0==s[a]&&o.f(s,a,{configurable:!0,value:i(null)}),t.exports=function(t){s[a][t]=!0}},5787:function(t,e,n){var r=n(7854),i=n(7976),o=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw o("Incorrect invocation")}},9670:function(t,e,n){var r=n(7854),i=n(111),o=r.String,a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),i=n(1400),o=n(6244),a=function(t){return function(e,n,a){var s,c=r(e),u=o(c),l=i(a,u);if(t&&n!=n){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:function(t,e,n){var r=n(9974),i=n(1702),o=n(8361),a=n(7908),s=n(6244),c=n(5417),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,f=6==t,h=7==t,d=5==t||f;return function(p,v,m,y){for(var g,_,b=a(p),w=o(b),I=r(v,m),O=s(w),k=0,E=y||c,S=e?E(p,O):n||h?E(p,0):void 0;O>k;k++)if((d||k in w)&&(g=w[k],_=I(g,k,b),t))if(e)S[k]=_;else if(_)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:u(S,g)}else switch(t){case 4:return!1;case 7:u(S,g)}return f?-1:i||l?l:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},1194:function(t,e,n){var r=n(7293),i=n(5112),o=n(7392),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},1589:function(t,e,n){var r=n(7854),i=n(1400),o=n(6244),a=n(6135),s=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=o(t),u=i(e,r),l=i(void 0===n?r:n,r),f=s(c(l-u,0)),h=0;u<l;u++,h++)a(f,h,t[u]);return f.length=h,f}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},7475:function(t,e,n){var r=n(7854),i=n(3157),o=n(4411),a=n(111),s=n(5112),c=s("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,o(e)&&(e===u||i(e.prototype))?e=void 0:a(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},5417:function(t,e,n){var r=n(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},7072:function(t,e,n){var r=n(5112),i=r("iterator"),o=!1;try{var a=0,s={next:function(){return{done:!!a++}},return:function(){o=!0}};s[i]=function(){return this},Array.from(s,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},648:function(t,e,n){var r=n(7854),i=n(1694),o=n(614),a=n(4326),s=n(5112),c=s("toStringTag"),u=r.Object,l="Arguments"==a(function(){return arguments}()),f=function(t,e){try{return t[e]}catch(n){}};t.exports=i?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=f(e=u(t),c))?n:l?a(e):"Object"==(r=a(e))&&o(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),i=r("".replace),o=function(t){return String(Error(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,s=a.test(o);t.exports=function(t,e){if(s&&"string"==typeof t)while(e--)t=i(t,a,"");return t}},9920:function(t,e,n){var r=n(2597),i=n(3887),o=n(1236),a=n(3070);t.exports=function(t,e,n){for(var s=i(e),c=a.f,u=o.f,l=0;l<s.length;l++){var f=s[l];r(t,f)||n&&r(n,f)||c(t,f,u(e,f))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,e,n){"use strict";var r=n(3383).IteratorPrototype,i=n(30),o=n(9114),a=n(8003),s=n(7497),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:o(+!u,n)}),a(t,l,!1,!0),s[l]=c,t}},8880:function(t,e,n){var r=n(9781),i=n(3070),o=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,n){"use strict";var r=n(4948),i=n(3070),o=n(9114);t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},654:function(t,e,n){"use strict";var r=n(2109),i=n(6916),o=n(1913),a=n(6530),s=n(614),c=n(4994),u=n(9518),l=n(7674),f=n(8003),h=n(8880),d=n(1320),p=n(5112),v=n(7497),m=n(3383),y=a.PROPER,g=a.CONFIGURABLE,_=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),I="keys",O="values",k="entries",E=function(){return this};t.exports=function(t,e,n,a,p,m,S){c(n,e,a);var T,C,A,x=function(t){if(t===p&&j)return j;if(!b&&t in N)return N[t];switch(t){case I:return function(){return new n(this,t)};case O:return function(){return new n(this,t)};case k:return function(){return new n(this,t)}}return function(){return new n(this)}},R=e+" Iterator",P=!1,N=t.prototype,L=N[w]||N["@@iterator"]||p&&N[p],j=!b&&L||x(p),D="Array"==e&&N.entries||L;if(D&&(T=u(D.call(new t)),T!==Object.prototype&&T.next&&(o||u(T)===_||(l?l(T,_):s(T[w])||d(T,w,E)),f(T,R,!0,!0),o&&(v[R]=E))),y&&p==O&&L&&L.name!==O&&(!o&&g?h(N,"name",O):(P=!0,j=function(){return i(L,this)})),p)if(C={values:x(O),keys:m?j:x(I),entries:x(k)},S)for(A in C)(b||P||!(A in N))&&d(N,A,C[A]);else r({target:e,proto:!0,forced:b||P},C);return o&&!S||N[w]===j||d(N,w,j,{name:p}),v[e]=j,C}},7235:function(t,e,n){var r=n(857),i=n(2597),o=n(6061),a=n(3070).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),i=n(111),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,n){var r=n(317),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;t.exports=o===Object.prototype?void 0:o},7871:function(t){t.exports="object"==typeof window},1528:function(t,e,n){var r=n(8113),i=n(7854);t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326),i=n(7854);t.exports="process"==r(i.process)},1036:function(t,e,n){var r=n(8113);t.exports=/web0s(?!.*chrome)/i.test(r)},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,o=n(7854),a=n(8113),s=o.process,c=o.Deno,u=s&&s.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),i=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),i=n(1236).f,o=n(8880),a=n(1320),s=n(3505),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,f,h,d,p,v=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[v]||s(v,{}):(r[v]||{}).prototype,l)for(f in e){if(d=e[f],t.noTargetGet?(p=i(l,f),h=p&&p.value):h=l[f],n=u(m?f:v+(y?".":"#")+f,t.forced),!n&&void 0!==h){if(typeof d==typeof h)continue;c(d,h)}(t.sham||h&&h.sham)&&o(d,"sham",!0),a(l,f,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.apply,a=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?a.bind(o):function(){return a.apply(o,arguments)})},9974:function(t,e,n){var r=n(1702),i=n(9662),o=n(4374),a=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?a(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},7065:function(t,e,n){"use strict";var r=n(7854),i=n(1702),o=n(9662),a=n(111),s=n(2597),c=n(206),u=n(4374),l=r.Function,f=i([].concat),h=i([].join),d={},p=function(t,e,n){if(!s(d,e)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";d[e]=l("C,a","return new C("+h(r,",")+")")}return d[e](t,n)};t.exports=u?l.bind:function(t){var e=o(this),n=e.prototype,r=c(arguments,1),i=function(){var n=f(r,c(arguments));return this instanceof i?p(e,n.length,n):e.apply(t,n)};return a(n)&&(i.prototype=n),i}},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),o=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,s=i(o,"name"),c=s&&"something"===function(){}.name,u=s&&(!r||r&&a(o,"name").configurable);t.exports={EXISTS:s,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.bind,a=i.call,s=r&&o.bind(a,a);t.exports=r?function(t){return t&&s(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},1246:function(t,e,n){var r=n(648),i=n(8173),o=n(7497),a=n(5112),s=a("iterator");t.exports=function(t){if(void 0!=t)return i(t,s)||i(t,"@@iterator")||o[r(t)]}},8554:function(t,e,n){var r=n(7854),i=n(6916),o=n(9662),a=n(9670),s=n(6330),c=n(1246),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(o(n))return a(i(n,t));throw u(s(t)+" is not iterable")}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},3501:function(t){t.exports={}},842:function(t,e,n){var r=n(7854);t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),o=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),i=n(1702),o=n(7293),a=n(4326),s=r.Object,c=i("".split);t.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?c(t,""):s(t)}:s},9587:function(t,e,n){var r=n(614),i=n(111),o=n(7674);t.exports=function(t,e,n){var a,s;return o&&r(a=e.constructor)&&a!==n&&i(s=a.prototype)&&s!==n.prototype&&o(t,s),t}},2788:function(t,e,n){var r=n(1702),i=n(614),o=n(5465),a=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return a(t)}),t.exports=o.inspectSource},8340:function(t,e,n){var r=n(111),i=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var r,i,o,a=n(8536),s=n(7854),c=n(1702),u=n(111),l=n(8880),f=n(2597),h=n(5465),d=n(6200),p=n(3501),v="Object already initialized",m=s.TypeError,y=s.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},_=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(a||h.state){var b=h.state||(h.state=new y),w=c(b.get),I=c(b.has),O=c(b.set);r=function(t,e){if(I(b,t))throw new m(v);return e.facade=t,O(b,t,e),e},i=function(t){return w(b,t)||{}},o=function(t){return I(b,t)}}else{var k=d("state");p[k]=!0,r=function(t,e){if(f(t,k))throw new m(v);return e.facade=t,l(t,k,e),e},i=function(t){return f(t,k)?t[k]:{}},o=function(t){return f(t,k)}}t.exports={set:r,get:i,has:o,enforce:g,getterFor:_}},7659:function(t,e,n){var r=n(5112),i=n(7497),o=r("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||a[o]===t)}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,n){var r=n(1702),i=n(7293),o=n(614),a=n(648),s=n(5005),c=n(2788),u=function(){},l=[],f=s("Reflect","construct"),h=/^\s*(?:class|function)\b/,d=r(h.exec),p=!h.exec(u),v=function(t){if(!o(t))return!1;try{return f(u,l,t),!0}catch(e){return!1}},m=function(t){if(!o(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(h,c(t))}catch(e){return!0}};m.sham=!0,t.exports=!f||i((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?m:v},4705:function(t,e,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,a=function(t,e){var n=c[s(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},s=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(7854),i=n(5005),o=n(614),a=n(7976),s=n(3307),c=r.Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return o(e)&&a(e.prototype,c(t))}},408:function(t,e,n){var r=n(7854),i=n(9974),o=n(6916),a=n(9670),s=n(6330),c=n(7659),u=n(6244),l=n(7976),f=n(8554),h=n(1246),d=n(9212),p=r.TypeError,v=function(t,e){this.stopped=t,this.result=e},m=v.prototype;t.exports=function(t,e,n){var r,y,g,_,b,w,I,O=n&&n.that,k=!(!n||!n.AS_ENTRIES),E=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),T=i(e,O),C=function(t){return r&&d(r,"normal",t),new v(!0,t)},A=function(t){return k?(a(t),S?T(t[0],t[1],C):T(t[0],t[1])):S?T(t,C):T(t)};if(E)r=t;else{if(y=h(t),!y)throw p(s(t)+" is not iterable");if(c(y)){for(g=0,_=u(t);_>g;g++)if(b=A(t[g]),b&&l(m,b))return b;return new v(!1)}r=f(t,y)}w=r.next;while(!(I=o(w,r)).done){try{b=A(I.value)}catch(x){d(r,"throw",x)}if("object"==typeof b&&b&&l(m,b))return b}return new v(!1)}},9212:function(t,e,n){var r=n(6916),i=n(9670),o=n(8173);t.exports=function(t,e,n){var a,s;i(t);try{if(a=o(t,"return"),!a){if("throw"===e)throw n;return n}a=r(a,t)}catch(c){s=!0,a=c}if("throw"===e)throw n;if(s)throw a;return i(a),n}},3383:function(t,e,n){"use strict";var r,i,o,a=n(7293),s=n(614),c=n(30),u=n(9518),l=n(1320),f=n(5112),h=n(1913),d=f("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var v=void 0==r||a((function(){var t={};return r[d].call(t)!==t}));v?r={}:h&&(r=c(r)),s(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},7497:function(t){t.exports={}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},5948:function(t,e,n){var r,i,o,a,s,c,u,l,f=n(7854),h=n(9974),d=n(1236).f,p=n(261).set,v=n(6833),m=n(1528),y=n(1036),g=n(5268),_=f.MutationObserver||f.WebKitMutationObserver,b=f.document,w=f.process,I=f.Promise,O=d(f,"queueMicrotask"),k=O&&O.value;k||(r=function(){var t,e;g&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?a():o=void 0,n}}o=void 0,t&&t.enter()},v||g||y||!_||!b?!m&&I&&I.resolve?(u=I.resolve(void 0),u.constructor=I,l=h(u.then,u),a=function(){l(r)}):g?a=function(){w.nextTick(r)}:(p=h(p,f),a=function(){p(r)}):(s=!0,c=b.createTextNode(""),new _(r).observe(c,{characterData:!0}),a=function(){c.data=s=!s})),t.exports=k||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,a()),o=e}},3366:function(t,e,n){var r=n(7854);t.exports=r.Promise},133:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),i=n(614),o=n(2788),a=r.WeakMap;t.exports=i(a)&&/native code/.test(o(a))},8523:function(t,e,n){"use strict";var r=n(9662),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},1574:function(t,e,n){"use strict";var r=n(9781),i=n(1702),o=n(6916),a=n(7293),s=n(1956),c=n(5181),u=n(5296),l=n(7908),f=n(8361),h=Object.assign,d=Object.defineProperty,p=i([].concat);t.exports=!h||a((function(){if(r&&1!==h({b:1},h(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=h({},t)[n]||s(h({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,a=1,h=c.f,d=u.f;while(i>a){var v,m=f(arguments[a++]),y=h?p(s(m),h(m)):s(m),g=y.length,_=0;while(g>_)v=y[_++],r&&!o(d,m,v)||(n[v]=m[v])}return n}:h},30:function(t,e,n){var r,i=n(9670),o=n(6048),a=n(748),s=n(3501),c=n(490),u=n(317),l=n(6200),f=">",h="<",d="prototype",p="script",v=l("IE_PROTO"),m=function(){},y=function(t){return h+p+f+t+h+"/"+p+f},g=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?g(r):_():g(r);var t=a.length;while(t--)delete b[d][a[t]];return b()};s[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[v]=t):n=b(),void 0===e?n:o.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),o=n(3070),a=n(9670),s=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){a(t);var n,r=s(e),i=c(e),u=i.length,l=0;while(u>l)o.f(t,n=i[l++],r[n]);return t}},3070:function(t,e,n){var r=n(7854),i=n(9781),o=n(4664),a=n(3353),s=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",p="writable";e.f=i?a?function(t,e,n){if(s(t),e=c(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=f(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(s(t),e=c(e),s(n),o)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),o=n(5296),a=n(9114),s=n(5656),c=n(4948),u=n(2597),l=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=s(t),e=c(e),l)try{return f(t,e)}catch(n){}if(u(t,e))return a(!i(o.f,t,e),t[e])}},1156:function(t,e,n){var r=n(4326),i=n(5656),o=n(8006).f,a=n(1589),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a(s)}};t.exports.f=function(t){return s&&"Window"==r(t)?c(t):o(i(t))}},8006:function(t,e,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(7854),i=n(2597),o=n(614),a=n(7908),s=n(6200),c=n(8544),u=s("IE_PROTO"),l=r.Object,f=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=a(t);if(i(e,u))return e[u];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof l?f:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),o=n(5656),a=n(1318).indexOf,s=n(3501),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(s,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~a(l,n)||c(l,n));return l}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),o=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},288:function(t,e,n){"use strict";var r=n(1694),i=n(648);t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},2140:function(t,e,n){var r=n(7854),i=n(6916),o=n(614),a=n(111),s=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&o(n=t.toString)&&!a(r=i(n,t)))return r;if(o(n=t.valueOf)&&!a(r=i(n,t)))return r;if("string"!==e&&o(n=t.toString)&&!a(r=i(n,t)))return r;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),o=n(8006),a=n(5181),s=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(s(t)),n=a.f;return n?c(e,n(t)):e}},857:function(t,e,n){var r=n(7854);t.exports=r},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},9478:function(t,e,n){var r=n(9670),i=n(111),o=n(8523);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),a=n.resolve;return a(e),n.promise}},8572:function(t){var e=function(){this.head=null,this.tail=null};e.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=e},2248:function(t,e,n){var r=n(1320);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},1320:function(t,e,n){var r=n(7854),i=n(614),o=n(2597),a=n(8880),s=n(3505),c=n(2788),u=n(9909),l=n(6530).CONFIGURABLE,f=u.get,h=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,f=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&a(n,"name",m),u=h(n),u.source||(u.source=d.join("string"==typeof m?m:""))),t!==r?(f?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=n:a(t,e,n)):p?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return i(this)&&f(this).source||c(this)}))},4488:function(t,e,n){var r=n(7854),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6340:function(t,e,n){"use strict";var r=n(5005),i=n(3070),o=n(5112),a=n(9781),s=o("species");t.exports=function(t){var e=r(t),n=i.f;a&&e&&!e[s]&&n(e,s,{configurable:!0,get:function(){return this}})}},8003:function(t,e,n){var r=n(3070).f,i=n(2597),o=n(5112),a=o("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,a)&&r(t,a,{configurable:!0,value:e})}},6200:function(t,e,n){var r=n(2309),i=n(9711),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3505),o="__core-js_shared__",a=r[o]||i(o,{});t.exports=a},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:function(t,e,n){var r=n(9670),i=n(9483),o=n(5112),a=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[a])?e:i(n)}},8710:function(t,e,n){var r=n(1702),i=n(9303),o=n(1340),a=n(4488),s=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,f=o(a(e)),h=i(n),d=f.length;return h<0||h>=d?t?"":void 0:(r=c(f,h),r<55296||r>56319||h+1===d||(l=c(f,h+1))<56320||l>57343?t?s(f,h):r:t?u(f,h,h+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},261:function(t,e,n){var r,i,o,a,s=n(7854),c=n(2104),u=n(9974),l=n(614),f=n(2597),h=n(7293),d=n(490),p=n(206),v=n(317),m=n(8053),y=n(6833),g=n(5268),_=s.setImmediate,b=s.clearImmediate,w=s.process,I=s.Dispatch,O=s.Function,k=s.MessageChannel,E=s.String,S=0,T={},C="onreadystatechange";try{r=s.location}catch(N){}var A=function(t){if(f(T,t)){var e=T[t];delete T[t],e()}},x=function(t){return function(){A(t)}},R=function(t){A(t.data)},P=function(t){s.postMessage(E(t),r.protocol+"//"+r.host)};_&&b||(_=function(t){m(arguments.length,1);var e=l(t)?t:O(t),n=p(arguments,1);return T[++S]=function(){c(e,void 0,n)},i(S),S},b=function(t){delete T[t]},g?i=function(t){w.nextTick(x(t))}:I&&I.now?i=function(t){I.now(x(t))}:k&&!y?(o=new k,a=o.port2,o.port1.onmessage=R,i=u(a.postMessage,a)):s.addEventListener&&l(s.postMessage)&&!s.importScripts&&r&&"file:"!==r.protocol&&!h(P)?(i=P,s.addEventListener("message",R,!1)):i=C in v("script")?function(t){d.appendChild(v("script"))[C]=function(){d.removeChild(this),A(t)}}:function(t){setTimeout(x(t),0)}),t.exports={set:_,clear:b}},1400:function(t,e,n){var r=n(9303),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!==r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),i=n(4488),o=r.Object;t.exports=function(t){return o(i(t))}},7593:function(t,e,n){var r=n(7854),i=n(6916),o=n(111),a=n(2190),s=n(8173),c=n(2140),u=n(5112),l=r.TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!o(t)||a(t))return t;var n,r=s(t,f);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!o(n)||a(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},1340:function(t,e,n){var r=n(7854),i=n(648),o=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:function(t,e,n){var r=n(7854),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,o=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++i+o,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t,e,n){var r=n(7854),i=r.TypeError;t.exports=function(t,e){if(t<e)throw i("Not enough arguments");return t}},6061:function(t,e,n){var r=n(5112);e.f=r},5112:function(t,e,n){var r=n(7854),i=n(2309),o=n(2597),a=n(9711),s=n(133),c=n(3307),u=i("wks"),l=r.Symbol,f=l&&l["for"],h=c?l:l&&l.withoutSetter||a;t.exports=function(t){if(!o(u,t)||!s&&"string"!=typeof u[t]){var e="Symbol."+t;s&&o(l,t)?u[t]=l[t]:u[t]=c&&f?f(e):h(e)}return u[t]}},9191:function(t,e,n){"use strict";var r=n(5005),i=n(2597),o=n(8880),a=n(7976),s=n(7674),c=n(9920),u=n(9587),l=n(6277),f=n(8340),h=n(7741),d=n(2914),p=n(1913);t.exports=function(t,e,n,v){var m=v?2:1,y=t.split("."),g=y[y.length-1],_=r.apply(null,y);if(_){var b=_.prototype;if(!p&&i(b,"cause")&&delete b.cause,!n)return _;var w=r("Error"),I=e((function(t,e){var n=l(v?e:t,void 0),r=v?new _(t):new _;return void 0!==n&&o(r,"message",n),d&&o(r,"stack",h(r.stack,2)),this&&a(b,this)&&u(r,this,I),arguments.length>m&&f(r,arguments[m]),r}));if(I.prototype=b,"Error"!==g&&(s?s(I,w):c(I,w,{name:!0})),c(I,_),!p)try{b.name!==g&&o(b,"name",g),b.constructor=I}catch(O){}return I}}},2222:function(t,e,n){"use strict";var r=n(2109),i=n(7854),o=n(7293),a=n(3157),s=n(111),c=n(7908),u=n(6244),l=n(6135),f=n(5417),h=n(1194),d=n(5112),p=n(7392),v=d("isConcatSpreadable"),m=9007199254740991,y="Maximum allowed index exceeded",g=i.TypeError,_=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=h("concat"),w=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)},I=!_||!b;r({target:"Array",proto:!0,forced:I},{concat:function(t){var e,n,r,i,o,a=c(this),s=f(a,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?a:arguments[e],w(o)){if(i=u(o),h+i>m)throw g(y);for(n=0;n<i;n++,h++)n in o&&l(s,h,o[n])}else{if(h>=m)throw g(y);l(s,h++,o)}return s.length=h,s}})},6992:function(t,e,n){"use strict";var r=n(5656),i=n(1223),o=n(7497),a=n(9909),s=n(3070).f,c=n(654),u=n(1913),l=n(9781),f="Array Iterator",h=a.set,d=a.getterFor(f);t.exports=c(Array,"Array",(function(t,e){h(this,{type:f,target:r(t),index:0,kind:e})}),(function(){var t=d(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{s(p,"name",{value:"values"})}catch(v){}},1703:function(t,e,n){var r=n(2109),i=n(7854),o=n(2104),a=n(9191),s="WebAssembly",c=i[s],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=a(t,e,u),r({global:!0,forced:u},n)},f=function(t,e){if(c&&c[t]){var n={};n[t]=a(s+"."+t,e,u),r({target:s,stat:!0,forced:u},n)}};l("Error",(function(t){return function(e){return o(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return o(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return o(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return o(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return o(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return o(t,this,arguments)}})),l("URIError",(function(t){return function(e){return o(t,this,arguments)}})),f("CompileError",(function(t){return function(e){return o(t,this,arguments)}})),f("LinkError",(function(t){return function(e){return o(t,this,arguments)}})),f("RuntimeError",(function(t){return function(e){return o(t,this,arguments)}}))},9601:function(t,e,n){var r=n(2109),i=n(1574);r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},5003:function(t,e,n){var r=n(2109),i=n(7293),o=n(5656),a=n(1236).f,s=n(9781),c=i((function(){a(1)})),u=!s||c;r({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},489:function(t,e,n){var r=n(2109),i=n(7293),o=n(7908),a=n(9518),s=n(8544),c=i((function(){a(1)}));r({target:"Object",stat:!0,forced:c,sham:!s},{getPrototypeOf:function(t){return a(o(t))}})},1539:function(t,e,n){var r=n(1694),i=n(1320),o=n(288);r||i(Object.prototype,"toString",o,{unsafe:!0})},7727:function(t,e,n){"use strict";var r=n(2109),i=n(1913),o=n(3366),a=n(7293),s=n(5005),c=n(614),u=n(6707),l=n(9478),f=n(1320),h=!!o&&a((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(t){var e=u(this,s("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(o)){var d=s("Promise").prototype["finally"];o.prototype["finally"]!==d&&f(o.prototype,"finally",d,{unsafe:!0})}},8674:function(t,e,n){"use strict";var r,i,o,a,s=n(2109),c=n(1913),u=n(7854),l=n(5005),f=n(6916),h=n(3366),d=n(1320),p=n(2248),v=n(7674),m=n(8003),y=n(6340),g=n(9662),_=n(614),b=n(111),w=n(5787),I=n(2788),O=n(408),k=n(7072),E=n(6707),S=n(261).set,T=n(5948),C=n(9478),A=n(842),x=n(8523),R=n(2534),P=n(8572),N=n(9909),L=n(4705),j=n(5112),D=n(7871),$=n(5268),M=n(7392),U=j("species"),F="Promise",V=N.getterFor(F),z=N.set,H=N.getterFor(F),B=h&&h.prototype,W=h,q=B,G=u.TypeError,K=u.document,J=u.process,X=x.f,Z=X,Y=!!(K&&K.createEvent&&u.dispatchEvent),Q=_(u.PromiseRejectionEvent),tt="unhandledrejection",et="rejectionhandled",nt=0,rt=1,it=2,ot=1,at=2,st=!1,ct=L(F,(function(){var t=I(W),e=t!==String(W);if(!e&&66===M)return!0;if(c&&!q["finally"])return!0;if(M>=51&&/native code/.test(t))return!1;var n=new W((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[U]=r,st=n.then((function(){}))instanceof r,!st||!e&&D&&!Q})),ut=ct||!k((function(t){W.all(t)["catch"]((function(){}))})),lt=function(t){var e;return!(!b(t)||!_(e=t.then))&&e},ft=function(t,e){var n,r,i,o=e.value,a=e.state==rt,s=a?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{s?(a||(e.rejection===at&&mt(e),e.rejection=ot),!0===s?n=o:(l&&l.enter(),n=s(o),l&&(l.exit(),i=!0)),n===t.promise?u(G("Promise-chain cycle")):(r=lt(n))?f(r,n,c,u):c(n)):u(o)}catch(h){l&&!i&&l.exit(),u(h)}},ht=function(t,e){t.notified||(t.notified=!0,T((function(){var n,r=t.reactions;while(n=r.get())ft(n,t);t.notified=!1,e&&!t.rejection&&pt(t)})))},dt=function(t,e,n){var r,i;Y?(r=K.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Q&&(i=u["on"+t])?i(r):t===tt&&A("Unhandled promise rejection",n)},pt=function(t){f(S,u,(function(){var e,n=t.facade,r=t.value,i=vt(t);if(i&&(e=R((function(){$?J.emit("unhandledRejection",r,n):dt(tt,n,r)})),t.rejection=$||vt(t)?at:ot,e.error))throw e.value}))},vt=function(t){return t.rejection!==ot&&!t.parent},mt=function(t){f(S,u,(function(){var e=t.facade;$?J.emit("rejectionHandled",e):dt(et,e,t.value)}))},yt=function(t,e,n){return function(r){t(e,r,n)}},gt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=it,ht(t,!0))},_t=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw G("Promise can't be resolved itself");var r=lt(e);r?T((function(){var n={done:!1};try{f(r,e,yt(_t,n,t),yt(gt,n,t))}catch(i){gt(n,i,t)}})):(t.value=e,t.state=rt,ht(t,!1))}catch(i){gt({done:!1},i,t)}}};if(ct&&(W=function(t){w(this,q),g(t),f(r,this);var e=V(this);try{t(yt(_t,e),yt(gt,e))}catch(n){gt(e,n)}},q=W.prototype,r=function(t){z(this,{type:F,done:!1,notified:!1,parent:!1,reactions:new P,rejection:!1,state:nt,value:void 0})},r.prototype=p(q,{then:function(t,e){var n=H(this),r=X(E(this,W));return n.parent=!0,r.ok=!_(t)||t,r.fail=_(e)&&e,r.domain=$?J.domain:void 0,n.state==nt?n.reactions.add(r):T((function(){ft(r,n)})),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=V(t);this.promise=t,this.resolve=yt(_t,e),this.reject=yt(gt,e)},x.f=X=function(t){return t===W||t===o?new i(t):Z(t)},!c&&_(h)&&B!==Object.prototype)){a=B.then,st||(d(B,"then",(function(t,e){var n=this;return new W((function(t,e){f(a,n,t,e)})).then(t,e)}),{unsafe:!0}),d(B,"catch",q["catch"],{unsafe:!0}));try{delete B.constructor}catch(bt){}v&&v(B,q)}s({global:!0,wrap:!0,forced:ct},{Promise:W}),m(W,F,!1,!0),y(F),o=l(F),s({target:F,stat:!0,forced:ct},{reject:function(t){var e=X(this);return f(e.reject,void 0,t),e.promise}}),s({target:F,stat:!0,forced:c||ct},{resolve:function(t){return C(c&&this===o?W:this,t)}}),s({target:F,stat:!0,forced:ut},{all:function(t){var e=this,n=X(e),r=n.resolve,i=n.reject,o=R((function(){var n=g(e.resolve),o=[],a=0,s=1;O(t,(function(t){var c=a++,u=!1;s++,f(n,e,t).then((function(t){u||(u=!0,o[c]=t,--s||r(o))}),i)})),--s||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=X(e),r=n.reject,i=R((function(){var i=g(e.resolve);O(t,(function(t){f(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},2419:function(t,e,n){var r=n(2109),i=n(5005),o=n(2104),a=n(7065),s=n(9483),c=n(9670),u=n(111),l=n(30),f=n(7293),h=i("Reflect","construct"),d=Object.prototype,p=[].push,v=f((function(){function t(){}return!(h((function(){}),[],t)instanceof t)})),m=!f((function(){h((function(){}))})),y=v||m;r({target:"Reflect",stat:!0,forced:y,sham:y},{construct:function(t,e){s(t),c(e);var n=arguments.length<3?t:s(arguments[2]);if(m&&!v)return h(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return o(p,r,e),new(o(a,t,r))}var i=n.prototype,f=l(u(i)?i:d),y=o(t,f,e);return u(y)?y:f}})},1299:function(t,e,n){var r=n(2109),i=n(7854),o=n(8003);r({global:!0},{Reflect:{}}),o(i.Reflect,"Reflect",!0)},8783:function(t,e,n){"use strict";var r=n(8710).charAt,i=n(1340),o=n(9909),a=n(654),s="String Iterator",c=o.set,u=o.getterFor(s);a(String,"String",(function(t){c(this,{type:s,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},1817:function(t,e,n){"use strict";var r=n(2109),i=n(9781),o=n(7854),a=n(1702),s=n(2597),c=n(614),u=n(7976),l=n(1340),f=n(3070).f,h=n(9920),d=o.Symbol,p=d&&d.prototype;if(i&&c(d)&&(!("description"in p)||void 0!==d().description)){var v={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new d(t):void 0===t?d():d(t);return""===t&&(v[e]=!0),e};h(m,d),m.prototype=p,p.constructor=m;var y="Symbol(test)"==String(d("test")),g=a(p.toString),_=a(p.valueOf),b=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),I=a("".slice);f(p,"description",{configurable:!0,get:function(){var t=_(this),e=g(t);if(s(v,t))return"";var n=y?I(e,7,-1):w(e,b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:m})}},2165:function(t,e,n){var r=n(7235);r("iterator")},2526:function(t,e,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),a=n(2104),s=n(6916),c=n(1702),u=n(1913),l=n(9781),f=n(133),h=n(7293),d=n(2597),p=n(3157),v=n(614),m=n(111),y=n(7976),g=n(2190),_=n(9670),b=n(7908),w=n(5656),I=n(4948),O=n(1340),k=n(9114),E=n(30),S=n(1956),T=n(8006),C=n(1156),A=n(5181),x=n(1236),R=n(3070),P=n(6048),N=n(5296),L=n(206),j=n(1320),D=n(2309),$=n(6200),M=n(3501),U=n(9711),F=n(5112),V=n(6061),z=n(7235),H=n(8003),B=n(9909),W=n(2092).forEach,q=$("hidden"),G="Symbol",K="prototype",J=F("toPrimitive"),X=B.set,Z=B.getterFor(G),Y=Object[K],Q=i.Symbol,tt=Q&&Q[K],et=i.TypeError,nt=i.QObject,rt=o("JSON","stringify"),it=x.f,ot=R.f,at=C.f,st=N.f,ct=c([].push),ut=D("symbols"),lt=D("op-symbols"),ft=D("string-to-symbol-registry"),ht=D("symbol-to-string-registry"),dt=D("wks"),pt=!nt||!nt[K]||!nt[K].findChild,vt=l&&h((function(){return 7!=E(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=it(Y,e);r&&delete Y[e],ot(t,e,n),r&&t!==Y&&ot(Y,e,r)}:ot,mt=function(t,e){var n=ut[t]=E(tt);return X(n,{type:G,tag:t,description:e}),l||(n.description=e),n},yt=function(t,e,n){t===Y&&yt(lt,e,n),_(t);var r=I(e);return _(n),d(ut,r)?(n.enumerable?(d(t,q)&&t[q][r]&&(t[q][r]=!1),n=E(n,{enumerable:k(0,!1)})):(d(t,q)||ot(t,q,k(1,{})),t[q][r]=!0),vt(t,r,n)):ot(t,r,n)},gt=function(t,e){_(t);var n=w(e),r=S(n).concat(Ot(n));return W(r,(function(e){l&&!s(bt,n,e)||yt(t,e,n[e])})),t},_t=function(t,e){return void 0===e?E(t):gt(E(t),e)},bt=function(t){var e=I(t),n=s(st,this,e);return!(this===Y&&d(ut,e)&&!d(lt,e))&&(!(n||!d(this,e)||!d(ut,e)||d(this,q)&&this[q][e])||n)},wt=function(t,e){var n=w(t),r=I(e);if(n!==Y||!d(ut,r)||d(lt,r)){var i=it(n,r);return!i||!d(ut,r)||d(n,q)&&n[q][r]||(i.enumerable=!0),i}},It=function(t){var e=at(w(t)),n=[];return W(e,(function(t){d(ut,t)||d(M,t)||ct(n,t)})),n},Ot=function(t){var e=t===Y,n=at(e?lt:w(t)),r=[];return W(n,(function(t){!d(ut,t)||e&&!d(Y,t)||ct(r,ut[t])})),r};if(f||(Q=function(){if(y(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,e=U(t),n=function(t){this===Y&&s(n,lt,t),d(this,q)&&d(this[q],e)&&(this[q][e]=!1),vt(this,e,k(1,t))};return l&&pt&&vt(Y,e,{configurable:!0,set:n}),mt(e,t)},tt=Q[K],j(tt,"toString",(function(){return Z(this).tag})),j(Q,"withoutSetter",(function(t){return mt(U(t),t)})),N.f=bt,R.f=yt,P.f=gt,x.f=wt,T.f=C.f=It,A.f=Ot,V.f=function(t){return mt(F(t),t)},l&&(ot(tt,"description",{configurable:!0,get:function(){return Z(this).description}}),u||j(Y,"propertyIsEnumerable",bt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Q}),W(S(dt),(function(t){z(t)})),r({target:G,stat:!0,forced:!f},{for:function(t){var e=O(t);if(d(ft,e))return ft[e];var n=Q(e);return ft[e]=n,ht[n]=e,n},keyFor:function(t){if(!g(t))throw et(t+" is not a symbol");if(d(ht,t))return ht[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!f,sham:!l},{create:_t,defineProperty:yt,defineProperties:gt,getOwnPropertyDescriptor:wt}),r({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:It,getOwnPropertySymbols:Ot}),r({target:"Object",stat:!0,forced:h((function(){A.f(1)}))},{getOwnPropertySymbols:function(t){return A.f(b(t))}}),rt){var kt=!f||h((function(){var t=Q();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:kt},{stringify:function(t,e,n){var r=L(arguments),i=e;if((m(e)||void 0!==t)&&!g(t))return p(e)||(e=function(t,e){if(v(i)&&(e=s(i,this,t,e)),!g(e))return e}),r[1]=e,a(rt,null,r)}})}if(!tt[J]){var Et=tt.valueOf;j(tt,J,(function(t){return s(Et,this)}))}H(Q,G),M[q]=!0},3948:function(t,e,n){var r=n(7854),i=n(8324),o=n(8509),a=n(6992),s=n(8880),c=n(5112),u=c("iterator"),l=c("toStringTag"),f=a.values,h=function(t,e){if(t){if(t[u]!==f)try{s(t,u,f)}catch(r){t[u]=f}if(t[l]||s(t,l,e),i[e])for(var n in a)if(t[n]!==a[n])try{s(t,n,a[n])}catch(r){t[n]=a[n]}}};for(var d in i)h(r[d]&&r[d].prototype,d);h(o,"DOMTokenList")},5503:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(2238),i="firebase",o="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},949:function(t,e,n){"use strict";n.d(e,{GH:function(){return te},hJ:function(){return Qt},Xb:function(){return de},h8:function(){return ge},v0:function(){return yr},Aj:function(){return me},w$:function(){return ve},LS:function(){return he},e5:function(){return pe},rh:function(){return yn},w7:function(){return ye}});var r=n(4444),i=n(2238);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var a=n(3333),s=n(8463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),f=new a.Yd("@firebase/auth");function h(t,...e){f.logLevel<=a["in"].ERROR&&f.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,...e){throw y(t,...e)}function p(t,...e){return y(t,...e)}function v(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),o=new r.LL("auth","Firebase",i);return o.create(e,{appName:t.name})}function m(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&d(t,"argument-error"),v(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function g(t,e,...n){if(!t)throw y(e,...n)}function _(t){const e="INTERNAL ASSERTION FAILED: "+t;throw h(e),new Error(e)}function b(t,e){t||_(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function I(t){b(t instanceof Function,"Expected a class definition");let e=w.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;d(t,"already-initialized")}const o=n.initialize({options:e});return o}function k(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(I);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===T()||"https:"===T()}function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,o={}){return $(t,o,(async()=>{let o={},a={};i&&("GET"===e?a=i:o={body:JSON.stringify(i)});const s=(0,r.xO)(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),P.fetch()(U(t,t.config.apiHost,n,s),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))}))}async function $(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,a]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",o);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw v(t,s,a);d(t,s)}}catch(o){if(o instanceof r.ZR)throw o;d(t,"network-request-failed")}}async function M(t,e,n,r,i={}){const o=await D(t,e,n,r,i);return"mfaPendingCredential"in o&&d(t,"multi-factor-auth-required",{_serverResponse:o}),o}function U(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?R(t.config,i):`${t.config.apiScheme}://${i}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function H(t,e){return D(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),o=G(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a="object"===typeof o.firebase?o.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:o,token:i,authTime:B(q(o.auth_time)),issuedAtTime:B(q(o.iat)),expirationTime:B(q(o.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function q(t){return 1e3*Number(t)}function G(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",o),null}}function K(t){const e=G(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await J(t,H(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?nt(o.providerUserInfo):[],s=et(t.providerData,a),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===s||void 0===s?void 0:s.length),l=!!c&&u,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Y(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function tt(t){const e=(0,r.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function et(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function nt(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t,e){const n=await $(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=U(t,i,"/v1/token",`key=${o}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(a,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await rt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new it;return n&&(g("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class at{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await J(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return W(this,t)}reload(){return tt(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new at(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await J(this,z(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,a,s,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,f=null!==(r=e.email)&&void 0!==r?r:void 0,h=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(a=e.tenantId)&&void 0!==a?a:void 0,v=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:O}=e;g(_&&O,t,"internal-error");const k=it.fromJSON(this.name,O);g("string"===typeof _,t,"internal-error"),ot(l,t.name),ot(f,t.name),g("boolean"===typeof b,t,"internal-error"),g("boolean"===typeof w,t,"internal-error"),ot(h,t.name),ot(d,t.name),ot(p,t.name),ot(v,t.name),ot(m,t.name),ot(y,t.name);const E=new at({uid:_,auth:t,email:f,emailVerified:b,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(E.providerData=I.map((t=>Object.assign({},t)))),v&&(E._redirectEventId=v),E}static async _fromIdTokenResponse(t,e,n=!1){const r=new it;r.updateFromServerResponse(e);const i=new at({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const ct=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ut(this.userKey,r.apiKey,i),this.fullPersistenceKey=ut("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?at._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lt(I(ct),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||I(ct);const o=ut(n,t.config.apiKey,t.name);let a=null;for(const u of e)try{const e=await u._get(o);if(e){const n=at._fromJSON(t,e);u!==i&&(a=n),i=u;break}}catch(c){}const s=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(o)}catch(c){}}))),new lt(i,t,n)):new lt(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yt(e))return"Blackberry";if(gt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||pt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function dt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pt(t=(0,r.z$)()){return/crios\//i.test(t)}function vt(t=(0,r.z$)()){return/iemobile/i.test(t)}function mt(t=(0,r.z$)()){return/android/i.test(t)}function yt(t=(0,r.z$)()){return/blackberry/i.test(t)}function gt(t=(0,r.z$)()){return/webos/i.test(t)}function _t(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)}function bt(t=(0,r.z$)()){var e;return _t(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return(0,r.w1)()&&10===document.documentMode}function It(t=(0,r.z$)()){return _t(t)||mt(t)||gt(t)||yt(t)||/windows phone/i.test(t)||vt(t)}function Ot(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e=[]){let n;switch(t){case"Browser":n=ft((0,r.z$)());break;case"Worker":n=`${ft((0,r.z$)())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tt(this),this.idTokenSubscription=new Tt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=I(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await lt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(I(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&I(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[I(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function St(t){return(0,r.m9)(t)}class Tt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return _("not implemented")}_getIdTokenResponse(t){return _("not implemented")}_linkToIdToken(t,e){return _("not implemented")}_getReauthenticationResolver(t){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",j(t,e))}async function Rt(t,e){return D(t,"POST","/v1/accounts:sendOobCode",j(t,e))}async function Pt(t,e){return Rt(t,e)}async function Nt(t,e){return Rt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",j(t,e))}async function jt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Ct{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Dt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Dt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return xt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lt(t,{email:this._email,oobCode:this._password});default:d(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return At(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jt(t,{idToken:e,email:this._email,oobCode:this._password});default:d(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="http://localhost";class Ut extends Ct{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ut(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):d("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const a=new Ut(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return $t(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,$t(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,$t(t,e)}buildRequest(){const t={requestUri:Mt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",j(t,e))}async function Vt(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",j(t,e))}async function zt(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",j(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Ht={["USER_NOT_FOUND"]:"user-not-found"};async function Bt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",j(t,n),Ht)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Ct{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Wt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Wt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Vt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return zt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Bt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Wt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gt(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||e||t}class Kt{constructor(t){var e,n,i,o,a,s;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,f=qt(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(a=c["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=c["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=Gt(t);try{return new Kt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(){this.providerId=Jt.PROVIDER_ID}static credential(t,e){return Dt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Kt.parseLink(e);return g(n,"argument-error"),Dt._fromEmailAndCode(t,n.code,n.tenantId)}}Jt.PROVIDER_ID="password",Jt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Jt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Xt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Zt{constructor(){super("facebook.com")}static credential(t){return Ut._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Yt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Zt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ut._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Qt.credential(e,n)}catch(r){return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com",Qt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te extends Zt{constructor(){super("github.com")}static credential(t){return Ut._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return te.credential(t.oauthAccessToken)}catch(e){return null}}}te.GITHUB_SIGN_IN_METHOD="github.com",te.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends Zt{constructor(){super("twitter.com")}static credential(t,e){return Ut._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ee.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ne(t,e){return M(t,"POST","/v1/accounts:signUp",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ee.TWITTER_SIGN_IN_METHOD="twitter.com",ee.PROVIDER_ID="twitter.com";class re{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await at._fromIdTokenResponse(t,n,r),o=ie(n),a=new re({user:i,providerId:o,_tokenResponse:n,operationType:e});return a}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ie(n);return new re({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ie(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oe extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,oe.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new oe(t,e,n,r)}}function ae(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw oe._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(t,e,n=!1){const r=await J(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return re._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ce(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await J(t,ae(r,i,e,t),n);g(o.idToken,r,"internal-error");const a=G(o.idToken);g(a,r,"internal-error");const{sub:s}=a;return g(t.uid===s,r,"user-mismatch"),re._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&d(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t,e,n=!1){const r="signIn",i=await ae(t,r,e),o=await re._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function le(t,e){return ue(St(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(t,e,n){var r;g((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),g("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(g(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(g(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,e,n){const i=(0,r.m9)(t),o={requestType:"PASSWORD_RESET",email:e};n&&fe(i,o,n),await Nt(i,o)}async function de(t,e,n){const r=St(t),i=await ne(r,{returnSecureToken:!0,email:e,password:n}),o=await re._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function pe(t,e,n){return le((0,r.m9)(t),Jt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(t,e){const n=(0,r.m9)(t),i=await t.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:i};e&&fe(n.auth,o,e);const{email:a}=await Pt(n.auth,o);a!==t.email&&await t.reload()}function me(t,e,n,i){return(0,r.m9)(t).onAuthStateChanged(e,n,i)}function ye(t){return(0,r.m9)(t).signOut()}async function ge(t){return(0,r.m9)(t).delete()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",j(t,e))}function be(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",j(t,e))}new WeakMap;const we="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(we,"1"),this.storage.removeItem(we),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){const t=(0,r.z$)();return dt(t)||_t(t)}const ke=1e3,Ee=10;class Se extends Ie{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Oe()&&Ot(),this.fallbackToPolling=It(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);wt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Ee):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),ke)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Se.type="LOCAL";const Te=Se;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Ie{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ce.type="SESSION";const Ae=Ce;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Re(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map((async t=>t(e.origin,i))),s=await xe(a);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pe(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.receivers=[];class Ne{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((a,s)=>{const c=Pe("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(e.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function je(t){Le().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return"undefined"!==typeof Le()["WorkerGlobalScope"]&&"function"===typeof Le()["importScripts"]}async function $e(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Me(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ue(){return De()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="firebaseLocalStorageDb",Ve=1,ze="firebaseLocalStorage",He="fbase_key";class Be{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function We(t,e){return t.transaction([ze],e?"readwrite":"readonly").objectStore(ze)}function qe(){const t=indexedDB.deleteDatabase(Fe);return new Be(t).toPromise()}function Ge(){const t=indexedDB.open(Fe,Ve);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ze,{keyPath:He})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ze)?e(n):(n.close(),await qe(),e(await Ge()))}))}))}async function Ke(t,e,n){const r=We(t,!0).put({[He]:e,value:n});return new Be(r).toPromise()}async function Je(t,e){const n=We(t,!1).get(e),r=await new Be(n).toPromise();return void 0===r?null:r.value}function Xe(t,e){const n=We(t,!0).delete(e);return new Be(n).toPromise()}const Ze=800,Ye=3;class Qe{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ge()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ye)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return De()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Re._getInstance(Ue()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await $e(),!this.activeServiceWorker)return;this.sender=new Ne(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Me()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ge();return await Ke(t,we,"1"),await Xe(t,we),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ke(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Je(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Xe(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=We(t,!1).getAll();return new Be(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ze)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qe.type="LOCAL";const tn=Qe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",j(t,e))}function nn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function on(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",rn().appendChild(r)}))}function an(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
an("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn="recaptcha";async function cn(t,e,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,t,"argument-error"),g(n.type===sn,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){g("enroll"===e.type,t,"internal-error");const n=await _e(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,t,"missing-multi-factor-info");const a=await en(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Ft(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(t){this.providerId=un.PROVIDER_ID,this.auth=St(t)}verifyPhoneNumber(t,e){return cn(this.auth,t,(0,r.m9)(e))}static credential(t,e){return Wt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return un.credentialFromTaggedObject(e)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Wt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(t,e){return e?I(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.PROVIDER_ID="phone",un.PHONE_SIGN_IN_METHOD="phone";class fn extends Ct{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $t(t,this._buildIdpRequest())}_linkToIdToken(t,e){return $t(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return $t(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function hn(t){return ue(t.auth,new fn(t),t.bypassAuthState)}function dn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ce(n,new fn(t),t.bypassAuthState)}async function pn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),se(n,new fn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=t;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hn;case"linkViaPopup":case"linkViaRedirect":return pn;case"reauthViaPopup":case"reauthViaRedirect":return dn;default:d(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new x(2e3,1e4);async function yn(t,e,n){const r=St(t);m(t,e,Xt);const i=ln(r,n),o=new gn(r,"signInViaPopup",e,i);return o.executeNotNull()}class gn extends vn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=Pe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,mn.get())};t()}}gn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n="pendingRedirect",bn=new Map;class wn extends vn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=bn.get(this.auth._key());if(!t){try{const e=await In(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}bn.set(this.auth._key(),t)}return this.bypassAuthState||bn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function In(t,e){const n=kn(e),r=On(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function On(t){return I(t._redirectPersistence)}function kn(t){return ut(_n,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e,n=!1){const r=St(t),i=ln(r,e),o=new wn(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn=6e5;class Tn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!xn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!An(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cn(t))}saveEventToCache(t){this.cachedEventUids.add(Cn(t)),this.lastProcessedEventTime=Date.now()}}function Cn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function An({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function xn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return An(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(t,e={}){return D(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nn=/^https?/;async function Ln(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Rn(t);for(const r of e)try{if(jn(r))return}catch(n){}d(t,"unauthorized-domain")}function jn(t){const e=E(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Nn.test(n))return!1;if(Pn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new x(3e4,6e4);function $n(){const t=Le().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Mn(t){return new Promise(((e,n)=>{var r,i,o;function a(){$n(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$n(),n(p(t,"network-request-failed"))},timeout:Dn.get()})}if(null===(i=null===(r=Le().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Le().gapi)||void 0===o?void 0:o.load)){const e=an("iframefcb");return Le()[e]=()=>{gapi.load?a():n(p(t,"network-request-failed"))},on(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}a()}})).catch((t=>{throw Un=null,t}))}let Un=null;function Fn(t){return Un=Un||Mn(t),Un}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new x(5e3,15e3),zn="__/auth/iframe",Hn="emulator/auth/iframe",Bn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qn(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?R(e,Hn):`https://${t.config.authDomain}/${zn}`,o={apiKey:e.apiKey,appName:t.name,v:i.Jn},a=Wn.get(t.config.apiHost);a&&(o.eid=a);const s=t._getFrameworks();return s.length&&(o.fw=s.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Gn(t){const e=await Fn(t),n=Le().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:qn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bn,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),o=Le().setTimeout((()=>{r(i)}),Vn.get());function a(){Le().clearTimeout(o),n(e)}e.ping(a).then(a,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jn=500,Xn=600,Zn="_blank",Yn="http://localhost";class Qn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function tr(t,e,n,i=Jn,o=Xn){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Kn),{width:i.toString(),height:o.toString(),top:a,left:s}),l=(0,r.z$)().toLowerCase();n&&(c=pt(l)?Zn:n),ht(l)&&(e=e||Yn,u.scrollbars="yes");const f=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(bt(l)&&"_self"!==c)return er(e||"",c),new Qn(null);const h=window.open(e||"",c,f);g(h,t,"popup-blocked");try{h.focus()}catch(d){}return new Qn(h)}function er(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="__/auth/handler",rr="emulator/auth/handler";function ir(t,e,n,o,a,s){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i.Jn,eventId:a};if(e instanceof Xt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))c[t]=e}if(e instanceof Zt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${or(t)}?${(0,r.xO)(u).slice(1)}`}function or({config:t}){return t.emulator?R(t,rr):`https://${t.authDomain}/${nr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="webStorageSupport";class sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ae,this._completeRedirectFn=En}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ir(t,e,n,E(),r);return tr(t,o,Pe())}async _openRedirect(t,e,n,r){return await this._originValidation(t),je(ir(t,e,n,E(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Gn(t),n=new Tn(t);return e.register("authEvent",(e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ar,{type:ar},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ar];void 0!==i&&e(!!i),d(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ln(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return It()||dt()||_t()}}const cr=sr;class ur{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return _("unexpected MultiFactorSessionType")}}}class lr extends ur{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new lr(t)}_finalizeEnroll(t,e,n){return be(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return nn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fr{constructor(){}static assertion(t){return lr._fromCredential(t)}}fr.FACTOR_ID="phone";var hr="@firebase/auth",dr="0.19.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mr(t){(0,i.Xd)(new s.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:a}=r.options;return((e,r)=>{g(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:e.name});const i={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},s=new Et(e,r,i);return k(s,n),s})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new s.wA("auth-internal",(t=>{const e=St(t.getProvider("auth").getImmediate());return(t=>new pr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(hr,dr,vr(t)),(0,i.KN)(hr,dr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");return e.isInitialized()?e.getImmediate():O(t,{popupRedirectResolver:cr,persistence:[tn,Te,Ae]})}mr("Browser")},5666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new A(r||[]);return o._invoke=E(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function m(){}function y(){}function g(){}var _={};c(_,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(x([])));w&&w!==n&&r.call(w,o)&&(_=w);var I=g.prototype=m.prototype=Object.create(_);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function x(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return y.prototype=g,c(I,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(I),t},t.awrap=function(t){return{__await:t}},O(k.prototype),c(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new k(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(I),c(I,s,"Generator"),c(I,o,(function(){return this})),c(I,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},1929:function(t,e,n){"use strict";n.d(e,{wA:function(){return O},fI:function(){return S},w3:function(){return r.Z}});var r=n(144);
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */
function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){return s(t)||c(t)||u()}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(){return"undefined"!==typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function f(t,e){h(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){h(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){h(t,e,n)}))}function h(t,e,n){var r=n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e);r.forEach((function(r){var i=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,i,t,n):Reflect.defineMetadata(r,i,t)}))}var d={__proto__:[]},p=d instanceof Array;function v(t){return function(e,n,r){var i="function"===typeof e?e:e.constructor;i.__decorators__||(i.__decorators__=[]),"number"!==typeof r&&(r=void 0),i.__decorators__.push((function(e){return t(e,n,r)}))}}function m(t){var e=i(t);return null==t||"object"!==e&&"function"!==e}function y(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var r=new e;e.prototype._init=n;var i={};return Object.keys(r).forEach((function(t){void 0!==r[t]&&(i[t]=r[t])})),i}var g=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(g.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"===typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return o({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return y(this,t)}});var i=t.__decorators__;i&&(i.forEach((function(t){return t(e)})),delete t.__decorators__);var a=Object.getPrototypeOf(t.prototype),s=a instanceof r.Z?a.constructor:r.Z,c=s.extend(e);return w(c,t,s),l()&&f(c,t),c}var b={prototype:!0,arguments:!0,callee:!0,caller:!0};function w(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!b[r]){var i=Object.getOwnPropertyDescriptor(t,r);if(!i||i.configurable){var o=Object.getOwnPropertyDescriptor(e,r);if(!p){if("cid"===r)return;var a=Object.getOwnPropertyDescriptor(n,r);if(!m(o.value)&&a&&a.value===o.value)return}0,Object.defineProperty(t,r,o)}}}))}function I(t){return"function"===typeof t?_(t):function(e){return _(e,t)}}I.registerHooks=function(t){g.push.apply(g,a(t))};var O=I;var k="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function E(t,e,n){if(k&&!Array.isArray(t)&&"function"!==typeof t&&!t.hasOwnProperty("type")&&"undefined"===typeof t.type){var r=Reflect.getMetadata("design:type",e,n);r!==Object&&(t.type=r)}}function S(t){return void 0===t&&(t={}),function(e,n){E(t,e,n),v((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}},8345:function(t,e){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function n(t,e){for(var n in e)t[n]=e[n];return t}var r=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,a=function(t){return encodeURIComponent(t).replace(r,i).replace(o,",")};function s(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var r,i=n||l;try{r=i(t||"")}catch(s){r={}}for(var o in e){var a=e[o];r[o]=Array.isArray(a)?a.map(u):u(a)}return r}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function l(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=s(n.shift()),i=n.length>0?s(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var h=/\/?$/;function d(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=p(o)}catch(s){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:y(e,i),matched:t?m(t):[]};return n&&(a.redirectedFrom=y(n,i)),Object.freeze(a)}function p(t){if(Array.isArray(t))return t.map(p);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=p(t[n]);return e}return t}var v=d(null,{path:"/"});function m(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||f;return(n||"/")+o(r)+i}function g(t,e,n){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(h,"")===e.path.replace(h,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],a=r[i];if(a!==n)return!1;var s=e[n];return null==o||null==s?o===s:"object"===typeof o&&"object"===typeof s?_(o,s):String(o)===String(s)}))}function b(t,e){return 0===t.path.replace(h,"/").indexOf(e.path.replace(h,"/"))&&(!e.hash||t.hash===e.hash)&&w(t.query,e.query)}function w(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var a=0;a<o.length;a++)i._isBeingDestroyed||o[a](i)}}}}var O={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,i=e.children,o=e.parent,a=e.data;a.routerView=!0;var s=o.$createElement,c=r.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),f=0,h=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&f++,d.keepAlive&&o._directInactive&&o._inactive&&(h=!0),o=o.$parent}if(a.routerViewDepth=f,h){var p=l[c],v=p&&p.component;return v?(p.configProps&&k(v,a,p.route,p.configProps),s(v,a,i)):s()}var m=u.matched[f],y=m&&m.components[c];if(!m||!y)return l[c]=null,s();l[c]={component:y},a.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),I(u)};var g=m.props&&m.props[c];return g&&(n(l[c],{route:u,configProps:g}),k(y,a,u,g)),s(y,a,i)}};function k(t,e,r,i){var o=e.props=E(r,i);if(o){o=e.props=n({},o);var a=e.attrs=e.attrs||{};for(var s in o)t.props&&s in t.props||(a[s]=o[s],delete o[s])}}function E(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function S(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),a=0;a<o.length;a++){var s=o[a];".."===s?i.pop():"."!==s&&i.push(s)}return""!==i[0]&&i.unshift(""),i.join("/")}function T(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function C(t){return t.replace(/\/+/g,"/")}var A=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},x=J,R=D,P=$,N=F,L=K,j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(t,e){var n,r=[],i=0,o=0,a="",s=e&&e.delimiter||"/";while(null!=(n=j.exec(t))){var c=n[0],u=n[1],l=n.index;if(a+=t.slice(o,l),o=l+c.length,u)a+=u[1];else{var f=t[o],h=n[2],d=n[3],p=n[4],v=n[5],m=n[6],y=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,_="+"===m||"*"===m,b="?"===m||"*"===m,w=n[2]||s,I=p||v;r.push({name:d||i++,prefix:h||"",delimiter:w,optional:b,repeat:_,partial:g,asterisk:!!y,pattern:I?z(I):y?".*":"[^"+V(w)+"]+?"})}}return o<t.length&&(a+=t.substr(o)),a&&r.push(a),r}function $(t,e){return F(D(t,e),e)}function M(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",B(e)));return function(e,r){for(var i="",o=e||{},a=r||{},s=a.pretty?M:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,f=o[u.name];if(null==f){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(A(f)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(l=s(f[h]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?U(f):s(f),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function V(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function B(t){return t&&t.sensitive?"":"i"}function W(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function q(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(J(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",B(n));return H(o,e)}function G(t,e,n){return K(D(t,n),e,n)}function K(t,e,n){A(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",a=0;a<t.length;a++){var s=t[a];if("string"===typeof s)o+=V(s);else{var c=V(s.prefix),u="(?:"+s.pattern+")";e.push(s),s.repeat&&(u+="(?:"+c+u+")*"),u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=V(n.delimiter||"/"),f=o.slice(-l.length)===l;return r||(o=(f?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&f?"":"(?="+l+"|$)",H(new RegExp("^"+o,B(n)),e)}function J(t,e,n){return A(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?W(t,e):A(t)?q(t,e,n):G(t,e,n)}x.parse=R,x.compile=P,x.tokensToFunction=N,x.tokensToRegExp=L;var X=Object.create(null);function Z(t,e,n){e=e||{};try{var r=X[t]||(X[t]=x.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Y(t,e,r,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=n({},t);var a=o.params;return a&&"object"===typeof a&&(o.params=n({},a)),o}if(!o.path&&o.params&&e){o=n({},o),o._normalized=!0;var s=n(n({},e.params),o.params);if(e.name)o.name=e.name,o.params=s;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=Z(u,s,"path "+e.path)}else 0;return o}var l=T(o.path||""),f=e&&e.path||"/",h=l.path?S(l.path,f,r||o.append):f,d=c(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:h,query:d,hash:p}}var Q,tt=[String,Object],et=[String,Array],nt=function(){},rt={name:"RouterLink",props:{to:{type:tt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:et,default:"click"}},render:function(t){var e=this,r=this.$router,i=this.$route,o=r.resolve(this.to,i,this.append),a=o.location,s=o.route,c=o.href,u={},l=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==l?"router-link-active":l,p=null==f?"router-link-exact-active":f,v=null==this.activeClass?h:this.activeClass,m=null==this.exactActiveClass?p:this.exactActiveClass,y=s.redirectedFrom?d(null,Y(s.redirectedFrom),null,r):s;u[m]=g(i,y,this.exactPath),u[v]=this.exact||this.exactPath?u[m]:b(i,y);var _=u[m]?this.ariaCurrentValue:null,w=function(t){it(t)&&(e.replace?r.replace(a,nt):r.push(a,nt))},I={click:it};Array.isArray(this.event)?this.event.forEach((function(t){I[t]=w})):I[this.event]=w;var O={class:u},k=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:s,navigate:w,isActive:u[v],isExactActive:u[m]});if(k){if(1===k.length)return k[0];if(k.length>1||!k.length)return 0===k.length?t():t("span",{},k)}if("a"===this.tag)O.on=I,O.attrs={href:c,"aria-current":_};else{var E=ot(this.$slots.default);if(E){E.isStatic=!1;var S=E.data=n({},E.data);for(var T in S.on=S.on||{},S.on){var C=S.on[T];T in I&&(S.on[T]=Array.isArray(C)?C:[C])}for(var A in I)A in S.on?S.on[A].push(I[A]):S.on[A]=w;var x=E.data.attrs=n({},E.data.attrs);x.href=c,x["aria-current"]=_}else O.on=I}return t(this.tag,O,this.$slots.default)}};function it(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function at(t){if(!at.installed||Q!==t){at.installed=!0,Q=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",O),t.component("RouterLink",rt);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var st="undefined"!==typeof window;function ct(t,e,n,r,i){var o=e||[],a=n||Object.create(null),s=r||Object.create(null);t.forEach((function(t){ut(o,a,s,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:a,nameMap:s}}function ut(t,e,n,r,i,o){var a=r.path,s=r.name;var c=r.pathToRegexpOptions||{},u=ft(a,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:lt(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:s,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?C(o+"/"+r.path):void 0;ut(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var f=Array.isArray(r.alias)?r.alias:[r.alias],h=0;h<f.length;++h){var d=f[h];0;var p={path:d,children:r.children};ut(t,e,n,p,i,l.path||"/")}s&&(n[s]||(n[s]=l))}function lt(t,e){var n=x(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:C(e.path+"/"+t)}function ht(t,e){var n=ct(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function a(t){ct(t,r,i,o)}function s(t,e){var n="object"!==typeof t?o[t]:void 0;ct([e||t],r,i,o,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,a){var s=Y(t,n,!1,e),c=s.name;if(c){var u=o[c];if(!u)return h(null,s);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof s.params&&(s.params={}),n&&"object"===typeof n.params)for(var f in n.params)!(f in s.params)&&l.indexOf(f)>-1&&(s.params[f]=n.params[f]);return s.path=Z(u.path,s.params,'named route "'+c+'"'),h(u,s,a)}if(s.path){s.params={};for(var d=0;d<r.length;d++){var p=r[d],v=i[p];if(dt(v.regex,s.path,s.params))return h(v,s,a)}}return h(null,s)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(d(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return h(null,n);var a=i,s=a.name,c=a.path,l=n.query,f=n.hash,p=n.params;if(l=a.hasOwnProperty("query")?a.query:l,f=a.hasOwnProperty("hash")?a.hash:f,p=a.hasOwnProperty("params")?a.params:p,s){o[s];return u({_normalized:!0,name:s,query:l,hash:f,params:p},void 0,n)}if(c){var v=pt(c,t),m=Z(v,p,'redirect route with path "'+v+'"');return u({_normalized:!0,path:m,query:l,hash:f},void 0,n)}return h(null,n)}function f(t,e,n){var r=Z(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,a=o[o.length-1];return e.params=i.params,h(a,e)}return h(null,e)}function h(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?f(t,n,t.matchAs):d(t,n,r,e)}return{match:u,addRoute:s,getRoutes:c,addRoutes:a}}function dt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var a=t.keys[i-1];a&&(n[a.name||"pathMatch"]="string"===typeof r[i]?s(r[i]):r[i])}return!0}function pt(t,e){return S(t,e.parent?e.parent.path:"/",!0)}var vt=st&&window.performance&&window.performance.now?window.performance:Date;function mt(){return vt.now().toFixed(3)}var yt=mt();function gt(){return yt}function _t(t){return yt=t}var bt=Object.create(null);function wt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=n({},window.history.state);return r.key=gt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",kt),function(){window.removeEventListener("popstate",kt)}}function It(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=Et(),a=i.call(t,e,n,r?o:null);a&&("function"===typeof a.then?a.then((function(t){Pt(t,o)})).catch((function(t){0})):Pt(a,o))}))}}function Ot(){var t=gt();t&&(bt[t]={x:window.pageXOffset,y:window.pageYOffset})}function kt(t){Ot(),t.state&&t.state.key&&_t(t.state.key)}function Et(){var t=gt();if(t)return bt[t]}function St(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function Tt(t){return xt(t.x)||xt(t.y)}function Ct(t){return{x:xt(t.x)?t.x:window.pageXOffset,y:xt(t.y)?t.y:window.pageYOffset}}function At(t){return{x:xt(t.x)?t.x:0,y:xt(t.y)?t.y:0}}function xt(t){return"number"===typeof t}var Rt=/^#\d/;function Pt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Rt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=At(i),e=St(r,i)}else Tt(t)&&(e=Ct(t))}else n&&Tt(t)&&(e=Ct(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Nt=st&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){Ot();var r=window.history;try{if(e){var i=n({},r.state);i.key=gt(),r.replaceState(i,"",t)}else r.pushState({key:_t(mt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function jt(t){Lt(t,!0)}function Dt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var $t={redirected:2,aborted:4,cancelled:8,duplicated:16};function Mt(t,e){return zt(t,e,$t.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Bt(e)+'" via a navigation guard.')}function Ut(t,e){var n=zt(t,e,$t.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Ft(t,e){return zt(t,e,$t.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Vt(t,e){return zt(t,e,$t.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function zt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Ht=["params","query","hash"];function Bt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ht.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Wt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function qt(t,e){return Wt(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t){return function(e,n,r){var i=!1,o=0,a=null;Kt(t,(function(t,e,n,s){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=Yt((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:Q.extend(e),n.components[s]=e,o--,o<=0&&r()})),l=Yt((function(t){var e="Failed to resolve async component "+s+": "+t;a||(a=Wt(t)?t:new Error(e),r(a))}));try{c=t(u,l)}catch(h){l(h)}if(c)if("function"===typeof c.then)c.then(u,l);else{var f=c.component;f&&"function"===typeof f.then&&f.then(u,l)}}})),i||r()}}function Kt(t,e){return Jt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Jt(t){return Array.prototype.concat.apply([],t)}var Xt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Xt&&"Module"===t[Symbol.toStringTag]}function Yt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var Qt=function(t,e){this.router=t,this.base=te(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function te(t){if(!t)if(st){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ee(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ne(t,e,n,r){var i=Kt(t,(function(t,r,i,o){var a=re(t,e);if(a)return Array.isArray(a)?a.map((function(t){return n(t,r,i,o)})):n(a,r,i,o)}));return Jt(r?i.reverse():i)}function re(t,e){return"function"!==typeof t&&(t=Q.extend(t)),t.options[e]}function ie(t){return ne(t,"beforeRouteLeave",ae,!0)}function oe(t){return ne(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function se(t){return ne(t,"beforeRouteEnter",(function(t,e,n,r){return ce(t,n,r)}))}function ce(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}Qt.prototype.listen=function(t){this.cb=t},Qt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Qt.prototype.onError=function(t){this.errorCbs.push(t)},Qt.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(a){throw this.errorCbs.forEach((function(t){t(a)})),a}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(qt(t,$t.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},Qt.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!qt(t)&&Wt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},a=t.matched.length-1,s=i.matched.length-1;if(g(t,i)&&a===s&&t.matched[a]===i.matched[s])return this.ensureURL(),t.hash&&It(this.router,i,t,!1),o(Ut(i,t));var c=ee(this.current.matched,t.matched),u=c.updated,l=c.deactivated,f=c.activated,h=[].concat(ie(l),this.router.beforeHooks,oe(u),f.map((function(t){return t.beforeEnter})),Gt(f)),d=function(e,n){if(r.pending!==t)return o(Ft(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(Vt(i,t))):Wt(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Mt(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(a){o(a)}};Dt(h,d,(function(){var n=se(f),a=n.concat(r.router.resolveHooks);Dt(a,d,(function(){if(r.pending!==t)return o(Ft(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){I(t)}))}))}))},Qt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Qt.prototype.setupListeners=function(){},Qt.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=v,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=le(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Nt&&n;r&&this.listeners.push(wt());var i=function(){var n=t.current,i=le(t.base);t.current===v&&i===t._startLocation||t.transitionTo(i,(function(t){r&&It(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Lt(C(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){jt(C(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(le(this.base)!==this.current.fullPath){var e=C(this.base+this.current.fullPath);t?Lt(e):jt(e)}},e.prototype.getCurrentLocation=function(){return le(this.base)},e}(Qt);function le(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(C(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&he(this.base)||de()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Nt&&n;r&&this.listeners.push(wt());var i=function(){var e=t.current;de()&&t.transitionTo(pe(),(function(n){r&&It(t.router,n,e,!0),Nt||ye(n.fullPath)}))},o=Nt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){me(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;pe()!==e&&(t?me(e):ye(e))},e.prototype.getCurrentLocation=function(){return pe()},e}(Qt);function he(t){var e=le(t);if(!/^\/#/.test(e))return window.location.replace(C(t+"/#"+e)),!0}function de(){var t=pe();return"/"===t.charAt(0)||(ye("/"+t),!1)}function pe(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ve(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function me(t){Nt?Lt(ve(t)):window.location.hash=t}function ye(t){Nt?jt(ve(t)):window.location.replace(ve(t))}var ge=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){qt(t,$t.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Qt),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ht(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Nt&&!1!==t.fallback,this.fallback&&(e="hash"),st||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new ge(this,t.base);break;default:0}},be={currentRoute:{configurable:!0}};function we(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var r="hash"===n?"#"+e:e;return t?C(t+"/"+r):r}_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},be.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Nt&&i;o&&"fullPath"in t&&It(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return we(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return we(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return we(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Y(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,a=this.history.base,s=Ie(a,o,this.mode);return{location:r,route:i,href:s,normalizedTo:r,resolved:i}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,be),_e.install=at,_e.version="3.5.3",_e.isNavigationFailure=qt,_e.NavigationFailureType=$t,_e.START_LOCATION=v,st&&window.Vue&&window.Vue.use(_e),e["Z"]=_e},144:function(t,e,n){"use strict";
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var r=Object.freeze({});function i(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function f(t){return"[object Object]"===l.call(t)}function h(t){return"[object RegExp]"===l.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var g=y("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function I(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var O=/-(\w)/g,k=I((function(t){return t.replace(O,(function(t,e){return e?e.toUpperCase():""}))})),E=I((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),S=/\B([A-Z])/g,T=I((function(t){return t.replace(S,"-$1").toLowerCase()}));function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){return t.bind(e)}var x=Function.prototype.bind?A:C;function R(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function N(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function L(t,e,n){}var j=function(t,e,n){return!1},D=function(t){return t};function $(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return $(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every((function(n){return $(t[n],e[n])}))}catch(c){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if($(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",V=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:L,parsePlatformTagName:D,mustUseProp:j,async:!0,_lifecycleHooks:z},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+B.source+".$_\\d]");function K(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J,X="__proto__"in{},Z="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=Y&&WXEnvironment.platform.toLowerCase(),tt=Z&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0,it=(tt&&tt.indexOf("android"),tt&&/iphone|ipad|ipod|ios/.test(tt)||"ios"===Q),ot=(tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt),tt&&tt.match(/firefox\/(\d+)/)),at={}.watch,st=!1;if(Z)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){st=!0}}),window.addEventListener("test-passive",null,ct)}catch(Ea){}var ut=function(){return void 0===J&&(J=!Z&&!Y&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),J},lt=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ft(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&ft(Symbol)&&"undefined"!==typeof Reflect&&ft(Reflect.ownKeys);ht="undefined"!==typeof Set&&ft(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pt=L,vt=0,mt=function(){this.id=vt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){_(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var yt=[];function gt(t){yt.push(t),mt.target=t}function _t(){yt.pop(),mt.target=yt[yt.length-1]}var bt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var It=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Ot(t){return new bt(void 0,void 0,void 0,String(t))}function kt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Et=Array.prototype,St=Object.create(Et),Tt=["push","pop","shift","unshift","splice","sort","reverse"];Tt.forEach((function(t){var e=Et[t];q(St,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o}))}));var Ct=Object.getOwnPropertyNames(St),At=!0;function xt(t){At=t}var Rt=function(t){this.value=t,this.dep=new mt,this.vmCount=0,q(t,"__ob__",this),Array.isArray(t)?(X?Pt(t,St):Nt(t,St,Ct),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function Nt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];q(t,o,e[o])}}function Lt(t,e){var n;if(u(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof Rt?n=t.__ob__:At&&!ut()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Rt(t)),e&&n&&n.vmCount++,n}function jt(t,e,n,r,i){var o=new mt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Lt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return mt.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Mt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,u=!i&&Lt(e),o.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(jt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function $t(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}Rt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)jt(t,e[n])},Rt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Lt(t[e])};var Ut=H.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,r,i,o=dt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],w(t,n)?r!==i&&f(r)&&f(i)&&Ft(r,i):Dt(t,n,i));return t}function Vt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Ft(r,i):i}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function zt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Ht(n):n}function Ht(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var i=Object.create(t||null);return e?P(i,e):i}Ut.data=function(t,e,n){return n?Vt(t,e,n):e&&"function"!==typeof e?t:Vt(t,e)},z.forEach((function(t){Ut[t]=zt})),V.forEach((function(t){Ut[t+"s"]=Bt})),Ut.watch=function(t,e,n,r){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in P(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Ut.props=Ut.methods=Ut.inject=Ut.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return P(i,t),e&&P(i,e),i},Ut.provide=Vt;var Wt=function(t,e){return void 0===e?t:e};function qt(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=k(i),a[o]={type:null})}else if(f(n))for(var s in n)i=n[s],o=k(s),a[o]=f(i)?i:{type:i};else 0;t.props=a}}function Gt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(f(n))for(var o in n){var a=n[o];r[o]=f(a)?P({from:o},a):{from:a}}else 0}}function Kt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Jt(t,e,n){if("function"===typeof e&&(e=e.options),qt(e,n),Gt(e,n),Kt(e),!e._base&&(e.extends&&(t=Jt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Jt(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)w(t,o)||s(o);function s(r){var i=Ut[r]||Wt;a[r]=i(t[r],e[r],n,r)}return a}function Xt(t,e,n,r){if("string"===typeof n){var i=t[e];if(w(i,n))return i[n];var o=k(n);if(w(i,o))return i[o];var a=E(o);if(w(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Zt(t,e,n,r){var i=e[t],o=!w(n,t),a=n[t],s=ne(Boolean,i.type);if(s>-1)if(o&&!w(i,"default"))a=!1;else if(""===a||a===T(t)){var c=ne(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Yt(r,i,t);var u=At;xt(!0),Lt(a),xt(u)}return a}function Yt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==te(e.type)?r.call(t):r}}var Qt=/^\s*function (\w+)/;function te(t){var e=t&&t.toString().match(Qt);return e?e[1]:""}function ee(t,e){return te(t)===te(e)}function ne(t,e){if(!Array.isArray(e))return ee(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(ee(e[n],t))return n;return-1}function re(t,e,n){gt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(Ea){oe(Ea,r,"errorCaptured hook")}}}oe(t,e,n)}finally{_t()}}function ie(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&p(o)&&!o._handled&&(o.catch((function(t){return re(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Ea){re(Ea,r,i)}return o}function oe(t,e,n){if(H.errorHandler)try{return H.errorHandler.call(null,t,e,n)}catch(Ea){Ea!==t&&ae(Ea,null,"config.errorHandler")}ae(t,e,n)}function ae(t,e,n){if(!Z&&!Y||"undefined"===typeof console)throw t;console.error(t)}var se,ce=!1,ue=[],le=!1;function fe(){le=!1;var t=ue.slice(0);ue.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ft(Promise)){var he=Promise.resolve();se=function(){he.then(fe),it&&setTimeout(L)},ce=!0}else if(et||"undefined"===typeof MutationObserver||!ft(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())se="undefined"!==typeof setImmediate&&ft(setImmediate)?function(){setImmediate(fe)}:function(){setTimeout(fe,0)};else{var de=1,pe=new MutationObserver(fe),ve=document.createTextNode(String(de));pe.observe(ve,{characterData:!0}),se=function(){de=(de+1)%2,ve.data=String(de)},ce=!0}function me(t,e){var n;if(ue.push((function(){if(t)try{t.call(e)}catch(Ea){re(Ea,e,"nextTick")}else n&&n(e)})),le||(le=!0,se()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ye=new ht;function ge(t){_e(t,ye),ye.clear()}function _e(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!u(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)_e(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)_e(t[r[n]],e)}}}var be=I((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function we(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return ie(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)ie(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function Ie(t,e,n,r,o,s){var c,u,l,f;for(c in t)u=t[c],l=e[c],f=be(c),i(u)||(i(l)?(i(u.fns)&&(u=t[c]=we(u,s)),a(f.once)&&(u=t[c]=o(f.name,u,f.capture)),n(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)i(t[c])&&(f=be(c),r(f.name,e[c],f.capture))}function Oe(t,e,n){var r;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function c(){n.apply(this,arguments),_(r.fns,c)}i(s)?r=we([c]):o(s.fns)&&a(s.merged)?(r=s,r.fns.push(c)):r=we([s,c]),r.merged=!0,t[e]=r}function ke(t,e,n){var r=e.options.props;if(!i(r)){var a={},s=t.attrs,c=t.props;if(o(s)||o(c))for(var u in r){var l=T(u);Ee(a,c,u,l,!0)||Ee(a,s,u,l,!1)}return a}}function Ee(t,e,n,r,i){if(o(e)){if(w(e,n))return t[n]=e[n],i||delete e[n],!0;if(w(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function Se(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Te(t){return c(t)?[Ot(t)]:Array.isArray(t)?Ae(t):void 0}function Ce(t){return o(t)&&o(t.text)&&s(t.isComment)}function Ae(t,e){var n,r,s,u,l=[];for(n=0;n<t.length;n++)r=t[n],i(r)||"boolean"===typeof r||(s=l.length-1,u=l[s],Array.isArray(r)?r.length>0&&(r=Ae(r,(e||"")+"_"+n),Ce(r[0])&&Ce(u)&&(l[s]=Ot(u.text+r[0].text),r.shift()),l.push.apply(l,r)):c(r)?Ce(u)?l[s]=Ot(u.text+r):""!==r&&l.push(Ot(r)):Ce(r)&&Ce(u)?l[s]=Ot(u.text+r.text):(a(t._isVList)&&o(r.tag)&&i(r.key)&&o(e)&&(r.key="__vlist"+e+"_"+n+"__"),l.push(r)));return l}function xe(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Re(t){var e=Pe(t.$options.inject,t);e&&(xt(!1),Object.keys(e).forEach((function(n){jt(t,n,e[n])})),xt(!0))}function Pe(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&w(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ne(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Le)&&delete n[u];return n}function Le(t){return t.isComment&&!t.asyncFactory||" "===t.text}function je(t){return t.isComment&&t.asyncFactory}function De(t,e,n){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&n&&n!==r&&s===n.$key&&!o&&!n.$hasNormal)return n;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=$e(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=Me(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),q(i,"$stable",a),q(i,"$key",s),q(i,"$hasNormal",o),i}function $e(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Te(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!je(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Me(t,e){return function(){return t[e]}}function Ue(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(dt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length)),l=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function Fe(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=P(P({},r),n)),i=o(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Ve(t){return Xt(this.$options,"filters",t,!0)||D}function ze(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function He(t,e,n,r,i){var o=H.keyCodes[e]||n;return i&&r&&!H.keyCodes[e]?ze(i,r):o?ze(o,t):r?T(r)!==e:void 0===t}function Be(t,e,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=N(n));var a=function(a){if("class"===a||"style"===a||g(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||H.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=k(a),u=T(a);if(!(c in o)&&!(u in o)&&(o[a]=n[a],i)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function We(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ge(r,"__static__"+t,!1)),r}function qe(t,e,n){return Ge(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ge(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ke(t[r],e+"_"+r,n);else Ke(t,e,n)}function Ke(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Je(t,e){if(e)if(f(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Xe(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Xe(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Ze(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ye(t,e){return"string"===typeof t?e+t:t}function Qe(t){t._o=qe,t._n=m,t._s=v,t._l=Ue,t._t=Fe,t._q=$,t._i=M,t._m=We,t._f=Ve,t._k=He,t._b=Be,t._v=Ot,t._e=It,t._u=Xe,t._g=Je,t._d=Ze,t._p=Ye}function tn(t,e,n,i,o){var s,c=this,u=o.options;w(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var l=a(u._compiled),f=!l;this.data=t,this.props=e,this.children=n,this.parent=i,this.listeners=t.on||r,this.injections=Pe(u.inject,i),this.slots=function(){return c.$slots||De(t.scopedSlots,c.$slots=Ne(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return De(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=De(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=pn(s,t,e,n,r,f);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return pn(s,t,e,n,r,f)}}function en(t,e,n,i,a){var s=t.options,c={},u=s.props;if(o(u))for(var l in u)c[l]=Zt(l,u,e||r);else o(n.attrs)&&rn(c,n.attrs),o(n.props)&&rn(c,n.props);var f=new tn(n,c,a,i,t),h=s.render.call(null,f._c,f);if(h instanceof bt)return nn(h,n,f.parent,s,f);if(Array.isArray(h)){for(var d=Te(h)||[],p=new Array(d.length),v=0;v<d.length;v++)p[v]=nn(d[v],n,f.parent,s,f);return p}}function nn(t,e,n,r,i){var o=kt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function rn(t,e){for(var n in e)t[k(n)]=e[n]}Qe(tn.prototype);var on={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;on.prepatch(n,n)}else{var r=t.componentInstance=cn(t,Pn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;$n(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Vn(n,"mounted")),t.data.keepAlive&&(e._isMounted?tr(n):Un(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fn(e,!0):e.$destroy())}},an=Object.keys(on);function sn(t,e,n,r,s){if(!i(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(i(t.cid)&&(l=t,t=kn(l,c),void 0===t))return On(l,e,n,r,s);e=e||{},Or(t),o(e.model)&&fn(t.options,e);var f=ke(e,t,s);if(a(t.options.functional))return en(t,f,e,n,r);var h=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}un(e);var p=t.options.name||s,v=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:h,tag:s,children:r},l);return v}}}function cn(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function un(t){for(var e=t.hook||(t.hook={}),n=0;n<an.length;n++){var r=an[n],i=e[r],o=on[r];i===o||i&&i._merged||(e[r]=i?ln(o,i):o)}}function ln(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function fn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var hn=1,dn=2;function pn(t,e,n,r,i,o){return(Array.isArray(n)||c(n))&&(i=r,r=n,n=void 0),a(o)&&(i=dn),vn(t,e,n,r,i)}function vn(t,e,n,r,i){if(o(n)&&o(n.__ob__))return It();if(o(n)&&o(n.is)&&(e=n.is),!e)return It();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===dn?r=Te(r):i===hn&&(r=Se(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||H.getTagNamespace(e),a=H.isReservedTag(e)?new bt(H.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(c=Xt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):sn(c,n,t,r,e)):a=sn(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&mn(a,s),o(n)&&yn(n),a):It()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var r=0,s=t.children.length;r<s;r++){var c=t.children[r];o(c.tag)&&(i(c.ns)||a(n)&&"svg"!==c.tag)&&mn(c,e,n)}}function yn(t){u(t.style)&&ge(t.style),u(t.class)&&ge(t.class)}function gn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Ne(e._renderChildren,i),t.$scopedSlots=r,t._c=function(e,n,r,i){return pn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return pn(t,e,n,r,i,!0)};var o=n&&n.data;jt(t,"$attrs",o&&o.attrs||r,null,!0),jt(t,"$listeners",e._parentListeners||r,null,!0)}var _n,bn=null;function wn(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=De(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Ea){re(Ea,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=It()),t.parent=i,t}}function In(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function On(t,e,n,r,i){var o=It();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function kn(t,e){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=bn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var r=t.owners=[n],s=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return _(r,n)}));var f=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},h=U((function(n){t.resolved=In(n,e),s?r.length=0:f(!0)})),d=U((function(e){o(t.errorComp)&&(t.error=!0,f(!0))})),v=t(h,d);return u(v)&&(p(v)?i(t.resolved)&&v.then(h,d):p(v.component)&&(v.component.then(h,d),o(v.error)&&(t.errorComp=In(v.error,e)),o(v.loading)&&(t.loadingComp=In(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout((function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,f(!1))}),v.delay||200)),o(v.timeout)&&(l=setTimeout((function(){l=null,i(t.resolved)&&d(null)}),v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function En(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||je(n)))return n}}function Sn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&xn(t,e)}function Tn(t,e){_n.$on(t,e)}function Cn(t,e){_n.$off(t,e)}function An(t,e){var n=_n;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function xn(t,e,n){_n=t,Ie(e,n||{},Tn,Cn,An,t),_n=void 0}function Rn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?R(n):n;for(var r=R(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)ie(n[o],e,r,e,i)}return e}}var Pn=null;function Nn(t){var e=Pn;return Pn=t,function(){Pn=e}}function Ln(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function jn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Nn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Vn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Vn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Dn(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=It),Vn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new ir(t,r,L,{before:function(){t._isMounted&&!t._isDestroyed&&Vn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Vn(t,"mounted")),t}function $n(t,e,n,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==r&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key||!a&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||r,t.$listeners=n||r,e&&t.$options.props){xt(!1);for(var l=t._props,f=t.$options._propKeys||[],h=0;h<f.length;h++){var d=f[h],p=t.$options.props;l[d]=Zt(d,p,e,t)}xt(!0),t.$options.propsData=e}n=n||r;var v=t.$options._parentListeners;t.$options._parentListeners=n,xn(t,n,v),u&&(t.$slots=Ne(o,i.context),t.$forceUpdate())}function Mn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Un(t,e){if(e){if(t._directInactive=!1,Mn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Un(t.$children[n]);Vn(t,"activated")}}function Fn(t,e){if((!e||(t._directInactive=!0,!Mn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Vn(t,"deactivated")}}function Vn(t,e){gt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)ie(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),_t()}var zn=[],Hn=[],Bn={},Wn=!1,qn=!1,Gn=0;function Kn(){Gn=zn.length=Hn.length=0,Bn={},Wn=qn=!1}var Jn=0,Xn=Date.now;if(Z&&!et){var Zn=window.performance;Zn&&"function"===typeof Zn.now&&Xn()>document.createEvent("Event").timeStamp&&(Xn=function(){return Zn.now()})}function Yn(){var t,e;for(Jn=Xn(),qn=!0,zn.sort((function(t,e){return t.id-e.id})),Gn=0;Gn<zn.length;Gn++)t=zn[Gn],t.before&&t.before(),e=t.id,Bn[e]=null,t.run();var n=Hn.slice(),r=zn.slice();Kn(),er(n),Qn(r),lt&&H.devtools&&lt.emit("flush")}function Qn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Vn(r,"updated")}}function tr(t){t._inactive=!1,Hn.push(t)}function er(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Un(t[e],!0)}function nr(t){var e=t.id;if(null==Bn[e]){if(Bn[e]=!0,qn){var n=zn.length-1;while(n>Gn&&zn[n].id>t.id)n--;zn.splice(n+1,0,t)}else zn.push(t);Wn||(Wn=!0,me(Yn))}}var rr=0,ir=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++rr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=K(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};ir.prototype.get=function(){var t;gt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Ea){if(!this.user)throw Ea;re(Ea,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ge(t),_t(),this.cleanupDeps()}return t},ir.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ir.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ir.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():nr(this)},ir.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';ie(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ir.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ir.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ir.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var or={enumerable:!0,configurable:!0,get:L,set:L};function ar(t,e,n){or.get=function(){return this[e][n]},or.set=function(t){this[e][n]=t},Object.defineProperty(t,n,or)}function sr(t){t._watchers=[];var e=t.$options;e.props&&cr(t,e.props),e.methods&&mr(t,e.methods),e.data?ur(t):Lt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==at&&yr(t,e.watch)}function cr(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||xt(!1);var a=function(o){i.push(o);var a=Zt(o,e,n,t);jt(r,o,a),o in t||ar(t,"_props",o)};for(var s in e)a(s);xt(!0)}function ur(t){var e=t.$options.data;e=t._data="function"===typeof e?lr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&w(r,o)||W(o)||ar(t,"_data",o)}Lt(e,!0)}function lr(t,e){gt();try{return t.call(e,e)}catch(Ea){return re(Ea,e,"data()"),{}}finally{_t()}}var fr={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ut();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new ir(t,a||L,L,fr)),i in t||dr(t,i,o)}}function dr(t,e,n){var r=!ut();"function"===typeof n?(or.get=r?pr(e):vr(n),or.set=L):(or.get=n.get?r&&!1!==n.cache?pr(e):vr(n.get):L,or.set=n.set||L),Object.defineProperty(t,e,or)}function pr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function vr(t){return function(){return t.call(this,this)}}function mr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:x(e[n],t)}function yr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)gr(t,n,r[i]);else gr(t,n,r)}}function gr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function _r(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return gr(r,t,e,n);n=n||{},n.user=!0;var i=new ir(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';gt(),ie(e,r,[i.value],r,o),_t()}return function(){i.teardown()}}}var br=0;function wr(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?Ir(e,t):e.$options=Jt(Or(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Ln(e),Sn(e),gn(e),Vn(e,"beforeCreate"),Re(e),sr(e),xe(e),Vn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Ir(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Or(t){var e=t.options;if(t.super){var n=Or(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=kr(t);i&&P(t.extendOptions,i),e=t.options=Jt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function kr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Er(t){this._init(t)}function Sr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=R(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Tr(t){t.mixin=function(t){return this.options=Jt(this.options,t),this}}function Cr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Jt(n.options,t),a["super"]=n,a.options.props&&Ar(a),a.options.computed&&xr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,V.forEach((function(t){a[t]=n[t]})),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),i[r]=a,a}}function Ar(t){var e=t.options.props;for(var n in e)ar(t.prototype,"_props",n)}function xr(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function Rr(t){V.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Pr(t){return t&&(t.Ctor.options.name||t.tag)}function Nr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Lr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=a.name;s&&!e(s)&&jr(n,o,r,i)}}}function jr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,_(n,e)}wr(Er),_r(Er),Rn(Er),jn(Er),wn(Er);var Dr=[String,RegExp,Array],$r={name:"keep-alive",abstract:!0,props:{include:Dr,exclude:Dr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,a=r.componentInstance,s=r.componentOptions;e[i]={name:Pr(s),tag:o,componentInstance:a},n.push(i),this.max&&n.length>parseInt(this.max)&&jr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)jr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Lr(t,(function(t){return Nr(e,t)}))})),this.$watch("exclude",(function(e){Lr(t,(function(t){return!Nr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=En(t),n=e&&e.componentOptions;if(n){var r=Pr(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!Nr(o,r))||a&&r&&Nr(a,r))return e;var s=this,c=s.cache,u=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,_(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Mr={KeepAlive:$r};function Ur(t){var e={get:function(){return H}};Object.defineProperty(t,"config",e),t.util={warn:pt,extend:P,mergeOptions:Jt,defineReactive:jt},t.set=Dt,t.delete=$t,t.nextTick=me,t.observable=function(t){return Lt(t),t},t.options=Object.create(null),V.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,P(t.options.components,Mr),Sr(t),Tr(t),Cr(t),Rr(t)}Ur(Er),Object.defineProperty(Er.prototype,"$isServer",{get:ut}),Object.defineProperty(Er.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Er,"FunctionalRenderContext",{value:tn}),Er.version="2.6.14";var Fr=y("style,class"),Vr=y("input,textarea,option,select,progress"),zr=function(t,e,n){return"value"===n&&Vr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Hr=y("contenteditable,draggable,spellcheck"),Br=y("events,caret,typing,plaintext-only"),Wr=function(t,e){return Xr(e)||"false"===e?"false":"contenteditable"===t&&Br(e)?e:"true"},qr=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Gr="http://www.w3.org/1999/xlink",Kr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Jr=function(t){return Kr(t)?t.slice(6,t.length):""},Xr=function(t){return null==t||!1===t};function Zr(t){var e=t.data,n=t,r=t;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Yr(r.data,e));while(o(n=n.parent))n&&n.data&&(e=Yr(e,n.data));return Qr(e.staticClass,e.class)}function Yr(t,e){return{staticClass:ti(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Qr(t,e){return o(t)||o(e)?ti(t,ei(e)):""}function ti(t,e){return t?e?t+" "+e:t:e||""}function ei(t){return Array.isArray(t)?ni(t):u(t)?ri(t):"string"===typeof t?t:""}function ni(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=ei(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ri(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ii={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},oi=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ai=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),si=function(t){return oi(t)||ai(t)};function ci(t){return ai(t)?"svg":"math"===t?"math":void 0}var ui=Object.create(null);function li(t){if(!Z)return!0;if(si(t))return!1;if(t=t.toLowerCase(),null!=ui[t])return ui[t];var e=document.createElement(t);return t.indexOf("-")>-1?ui[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ui[t]=/HTMLUnknownElement/.test(e.toString())}var fi=y("text,number,password,search,email,tel,url");function hi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pi(t,e){return document.createElementNS(ii[t],e)}function vi(t){return document.createTextNode(t)}function mi(t){return document.createComment(t)}function yi(t,e,n){t.insertBefore(e,n)}function gi(t,e){t.removeChild(e)}function _i(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function wi(t){return t.nextSibling}function Ii(t){return t.tagName}function Oi(t,e){t.textContent=e}function ki(t,e){t.setAttribute(e,"")}var Ei=Object.freeze({createElement:di,createElementNS:pi,createTextNode:vi,createComment:mi,insertBefore:yi,removeChild:gi,appendChild:_i,parentNode:bi,nextSibling:wi,tagName:Ii,setTextContent:Oi,setStyleScope:ki}),Si={create:function(t,e){Ti(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ti(t,!0),Ti(e))},destroy:function(t){Ti(t,!0)}};function Ti(t,e){var n=t.data.ref;if(o(n)){var r=t.context,i=t.componentInstance||t.elm,a=r.$refs;e?Array.isArray(a[n])?_(a[n],i):a[n]===i&&(a[n]=void 0):t.data.refInFor?Array.isArray(a[n])?a[n].indexOf(i)<0&&a[n].push(i):a[n]=[i]:a[n]=i}}var Ci=new bt("",{},[]),Ai=["create","activate","update","remove","destroy"];function xi(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&Ri(t,e)||a(t.isAsyncPlaceholder)&&i(e.asyncFactory.error))}function Ri(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||fi(r)&&fi(i)}function Pi(t,e,n){var r,i,a={};for(r=e;r<=n;++r)i=t[r].key,o(i)&&(a[i]=r);return a}function Ni(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<Ai.length;++e)for(r[Ai[e]]=[],n=0;n<s.length;++n)o(s[n][Ai[e]])&&r[Ai[e]].push(s[n][Ai[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&h(t)}return n.listeners=e,n}function h(t){var e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function d(t,e,n,r,i,s,c){if(o(t.elm)&&o(s)&&(t=s[c]=kt(t)),t.isRootInsert=!i,!p(t,e,n,r)){var l=t.data,f=t.children,h=t.tag;o(h)?(t.elm=t.ns?u.createElementNS(t.ns,h):u.createElement(h,t),I(t),_(t,f,e),o(l)&&w(t,e),g(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),g(n,t.elm,r)):(t.elm=u.createTextNode(t.text),g(n,t.elm,r))}}function p(t,e,n,r){var i=t.data;if(o(i)){var s=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1),o(t.componentInstance))return v(t,e),g(n,t.elm,r),a(s)&&m(t,e,n,r),!0}}function v(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(w(t,e),I(t)):(Ti(t),e.push(t))}function m(t,e,n,i){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,o(a=s.data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](Ci,s);e.push(s);break}g(n,t.elm,i)}function g(t,e,n){o(t)&&(o(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function _(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0,e,r)}else c(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function w(t,n){for(var i=0;i<r.create.length;++i)r.create[i](Ci,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(Ci,t),o(e.insert)&&n.push(t))}function I(t){var e;if(o(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}o(e=Pn)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function O(t,e,n,r,i,o){for(;r<=i;++r)d(n[r],o,t,e,!1,n,r)}function k(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)k(t.children[n])}function E(t,e,n){for(;e<=n;++e){var r=t[e];o(r)&&(o(r.tag)?(S(r),k(r)):h(r.elm))}}function S(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=f(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&S(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else h(t.elm)}function T(t,e,n,r,a){var s,c,l,f,h=0,p=0,v=e.length-1,m=e[0],y=e[v],g=n.length-1,_=n[0],b=n[g],w=!a;while(h<=v&&p<=g)i(m)?m=e[++h]:i(y)?y=e[--v]:xi(m,_)?(A(m,_,r,n,p),m=e[++h],_=n[++p]):xi(y,b)?(A(y,b,r,n,g),y=e[--v],b=n[--g]):xi(m,b)?(A(m,b,r,n,g),w&&u.insertBefore(t,m.elm,u.nextSibling(y.elm)),m=e[++h],b=n[--g]):xi(y,_)?(A(y,_,r,n,p),w&&u.insertBefore(t,y.elm,m.elm),y=e[--v],_=n[++p]):(i(s)&&(s=Pi(e,h,v)),c=o(_.key)?s[_.key]:C(_,e,h,v),i(c)?d(_,r,t,m.elm,!1,n,p):(l=e[c],xi(l,_)?(A(l,_,r,n,p),e[c]=void 0,w&&u.insertBefore(t,l.elm,m.elm)):d(_,r,t,m.elm,!1,n,p)),_=n[++p]);h>v?(f=i(n[g+1])?null:n[g+1].elm,O(t,f,n,p,g,r)):p>g&&E(e,h,v)}function C(t,e,n,r){for(var i=n;i<r;i++){var a=e[i];if(o(a)&&xi(t,a))return i}}function A(t,e,n,s,c,l){if(t!==e){o(e.elm)&&o(s)&&(e=s[c]=kt(e));var f=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?P(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var h,d=e.data;o(d)&&o(h=d.hook)&&o(h=h.prepatch)&&h(t,e);var p=t.children,v=e.children;if(o(d)&&b(e)){for(h=0;h<r.update.length;++h)r.update[h](t,e);o(h=d.hook)&&o(h=h.update)&&h(t,e)}i(e.text)?o(p)&&o(v)?p!==v&&T(f,p,v,n,l):o(v)?(o(t.text)&&u.setTextContent(f,""),O(f,null,v,0,v.length-1,n)):o(p)?E(p,0,p.length-1):o(t.text)&&u.setTextContent(f,""):t.text!==e.text&&u.setTextContent(f,e.text),o(d)&&o(h=d.hook)&&o(h=h.postpatch)&&h(t,e)}}}function x(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var R=y("attrs,class,staticClass,staticStyle,key");function P(t,e,n,r){var i,s=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return v(e,n),!0;if(o(s)){if(o(u))if(t.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,f=t.firstChild,h=0;h<u.length;h++){if(!f||!P(f,u[h],n,r)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else _(e,u,n);if(o(c)){var d=!1;for(var p in c)if(!R(p)){d=!0,w(e,n);break}!d&&c["class"]&&ge(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,s){if(!i(e)){var c=!1,f=[];if(i(t))c=!0,d(e,f);else{var h=o(t.nodeType);if(!h&&xi(t,e))A(t,e,f,null,null,s);else{if(h){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),a(n)&&P(t,e,f))return x(e,f,!0),t;t=l(t)}var p=t.elm,v=u.parentNode(p);if(d(e,f,p._leaveCb?null:v,u.nextSibling(p)),o(e.parent)){var m=e.parent,y=b(e);while(m){for(var g=0;g<r.destroy.length;++g)r.destroy[g](m);if(m.elm=e.elm,y){for(var _=0;_<r.create.length;++_)r.create[_](Ci,m);var w=m.data.hook.insert;if(w.merged)for(var I=1;I<w.fns.length;I++)w.fns[I]()}else Ti(m);m=m.parent}}o(v)?E([t],0,0):o(t.tag)&&k(t)}}return x(e,f,c),e.elm}o(t)&&k(t)}}var Li={create:ji,update:ji,destroy:function(t){ji(t,Ci)}};function ji(t,e){(t.data.directives||e.data.directives)&&Di(t,e)}function Di(t,e){var n,r,i,o=t===Ci,a=e===Ci,s=Mi(t.data.directives,t.context),c=Mi(e.data.directives,e.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Fi(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Fi(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)Fi(u[n],"inserted",e,t)};o?Oe(e,"insert",f):f()}if(l.length&&Oe(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Fi(l[n],"componentUpdated",e,t)})),!o)for(n in s)c[n]||Fi(s[n],"unbind",t,t,a)}var $i=Object.create(null);function Mi(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=$i),i[Ui(r)]=r,r.def=Xt(e.$options,"directives",r.name,!0);return i}function Ui(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Fi(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Ea){re(Ea,n.context,"directive "+t.name+" "+e+" hook")}}var Vi=[Si,Li];function zi(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(t.data.attrs)||!i(e.data.attrs))){var r,a,s,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(r in o(l.__ob__)&&(l=e.data.attrs=P({},l)),l)a=l[r],s=u[r],s!==a&&Hi(c,r,a,e.data.pre);for(r in(et||rt)&&l.value!==u.value&&Hi(c,"value",l.value),u)i(l[r])&&(Kr(r)?c.removeAttributeNS(Gr,Jr(r)):Hr(r)||c.removeAttribute(r))}}function Hi(t,e,n,r){r||t.tagName.indexOf("-")>-1?Bi(t,e,n):qr(e)?Xr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Hr(e)?t.setAttribute(e,Wr(e,n)):Kr(e)?Xr(n)?t.removeAttributeNS(Gr,Jr(e)):t.setAttributeNS(Gr,e,n):Bi(t,e,n)}function Bi(t,e,n){if(Xr(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Wi={create:zi,update:zi};function qi(t,e){var n=e.elm,r=e.data,a=t.data;if(!(i(r.staticClass)&&i(r.class)&&(i(a)||i(a.staticClass)&&i(a.class)))){var s=Zr(e),c=n._transitionClasses;o(c)&&(s=ti(s,ei(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var Gi,Ki={create:qi,update:qi},Ji="__r",Xi="__c";function Zi(t){if(o(t[Ji])){var e=et?"change":"input";t[e]=[].concat(t[Ji],t[e]||[]),delete t[Ji]}o(t[Xi])&&(t.change=[].concat(t[Xi],t.change||[]),delete t[Xi])}function Yi(t,e,n){var r=Gi;return function i(){var o=e.apply(null,arguments);null!==o&&eo(t,i,n,r)}}var Qi=ce&&!(ot&&Number(ot[1])<=53);function to(t,e,n,r){if(Qi){var i=Jn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Gi.addEventListener(t,e,st?{capture:n,passive:r}:n)}function eo(t,e,n,r){(r||Gi).removeEventListener(t,e._wrapper||e,n)}function no(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Gi=e.elm,Zi(n),Ie(n,r,to,eo,Yi,e.context),Gi=void 0}}var ro,io={create:no,update:no};function oo(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,r,a=e.elm,s=t.data.domProps||{},c=e.data.domProps||{};for(n in o(c.__ob__)&&(c=e.data.domProps=P({},c)),s)n in c||(a[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n&&"PROGRESS"!==a.tagName){a._value=r;var u=i(r)?"":String(r);ao(a,u)&&(a.value=u)}else if("innerHTML"===n&&ai(a.tagName)&&i(a.innerHTML)){ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+r+"</svg>";var l=ro.firstChild;while(a.firstChild)a.removeChild(a.firstChild);while(l.firstChild)a.appendChild(l.firstChild)}else if(r!==s[n])try{a[n]=r}catch(Ea){}}}}function ao(t,e){return!t.composing&&("OPTION"===t.tagName||so(t,e)||co(t,e))}function so(t,e){var n=!0;try{n=document.activeElement!==t}catch(Ea){}return n&&t.value!==e}function co(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.number)return m(n)!==m(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var uo={create:oo,update:oo},lo=I((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function fo(t){var e=ho(t.style);return t.staticStyle?P(t.staticStyle,e):e}function ho(t){return Array.isArray(t)?N(t):"string"===typeof t?lo(t):t}function po(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=fo(i.data))&&P(r,n)}(n=fo(t.data))&&P(r,n);var o=t;while(o=o.parent)o.data&&(n=fo(o.data))&&P(r,n);return r}var vo,mo=/^--/,yo=/\s*!important$/,go=function(t,e,n){if(mo.test(e))t.style.setProperty(e,n);else if(yo.test(n))t.style.setProperty(T(e),n.replace(yo,""),"important");else{var r=bo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},_o=["Webkit","Moz","ms"],bo=I((function(t){if(vo=vo||document.createElement("div").style,t=k(t),"filter"!==t&&t in vo)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<_o.length;n++){var r=_o[n]+e;if(r in vo)return r}}));function wo(t,e){var n=e.data,r=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var a,s,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},f=u||l,h=ho(e.data.style)||{};e.data.normalizedStyle=o(h.__ob__)?P({},h):h;var d=po(e,!0);for(s in f)i(d[s])&&go(c,s,"");for(s in d)a=d[s],a!==f[s]&&go(c,s,null==a?"":a)}}var Io={create:wo,update:wo},Oo=/\s+/;function ko(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Oo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Eo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Oo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function So(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&P(e,To(t.name||"v")),P(e,t),e}return"string"===typeof t?To(t):void 0}}var To=I((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Co=Z&&!nt,Ao="transition",xo="animation",Ro="transition",Po="transitionend",No="animation",Lo="animationend";Co&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ro="WebkitTransition",Po="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(No="WebkitAnimation",Lo="webkitAnimationEnd"));var jo=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Do(t){jo((function(){jo(t)}))}function $o(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),ko(t,e))}function Mo(t,e){t._transitionClasses&&_(t._transitionClasses,e),Eo(t,e)}function Uo(t,e,n){var r=Vo(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ao?Po:Lo,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout((function(){c<a&&u()}),o+1),t.addEventListener(s,l)}var Fo=/\b(transform|all)(,|$)/;function Vo(t,e){var n,r=window.getComputedStyle(t),i=(r[Ro+"Delay"]||"").split(", "),o=(r[Ro+"Duration"]||"").split(", "),a=zo(i,o),s=(r[No+"Delay"]||"").split(", "),c=(r[No+"Duration"]||"").split(", "),u=zo(s,c),l=0,f=0;e===Ao?a>0&&(n=Ao,l=a,f=o.length):e===xo?u>0&&(n=xo,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?Ao:xo:null,f=n?n===Ao?o.length:c.length:0);var h=n===Ao&&Fo.test(r[Ro+"Property"]);return{type:n,timeout:l,propCount:f,hasTransform:h}}function zo(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Ho(e)+Ho(t[n])})))}function Ho(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Bo(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=So(t.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){var a=r.css,s=r.type,c=r.enterClass,l=r.enterToClass,f=r.enterActiveClass,h=r.appearClass,d=r.appearToClass,p=r.appearActiveClass,v=r.beforeEnter,y=r.enter,g=r.afterEnter,_=r.enterCancelled,b=r.beforeAppear,w=r.appear,I=r.afterAppear,O=r.appearCancelled,k=r.duration,E=Pn,S=Pn.$vnode;while(S&&S.parent)E=S.context,S=S.parent;var T=!E._isMounted||!t.isRootInsert;if(!T||w||""===w){var C=T&&h?h:c,A=T&&p?p:f,x=T&&d?d:l,R=T&&b||v,P=T&&"function"===typeof w?w:y,N=T&&I||g,L=T&&O||_,j=m(u(k)?k.enter:k);0;var D=!1!==a&&!nt,$=Go(P),M=n._enterCb=U((function(){D&&(Mo(n,x),Mo(n,A)),M.cancelled?(D&&Mo(n,C),L&&L(n)):N&&N(n),n._enterCb=null}));t.data.show||Oe(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),P&&P(n,M)})),R&&R(n),D&&($o(n,C),$o(n,A),Do((function(){Mo(n,C),M.cancelled||($o(n,x),$||(qo(j)?setTimeout(M,j):Uo(n,s,M)))}))),t.data.show&&(e&&e(),P&&P(n,M)),D||$||M()}}}function Wo(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=So(t.data.transition);if(i(r)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var a=r.css,s=r.type,c=r.leaveClass,l=r.leaveToClass,f=r.leaveActiveClass,h=r.beforeLeave,d=r.leave,p=r.afterLeave,v=r.leaveCancelled,y=r.delayLeave,g=r.duration,_=!1!==a&&!nt,b=Go(d),w=m(u(g)?g.leave:g);0;var I=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(Mo(n,l),Mo(n,f)),I.cancelled?(_&&Mo(n,c),v&&v(n)):(e(),p&&p(n)),n._leaveCb=null}));y?y(O):O()}function O(){I.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),h&&h(n),_&&($o(n,c),$o(n,f),Do((function(){Mo(n,c),I.cancelled||($o(n,l),b||(qo(w)?setTimeout(I,w):Uo(n,s,I)))}))),d&&d(n,I),_||b||I())}}function qo(t){return"number"===typeof t&&!isNaN(t)}function Go(t){if(i(t))return!1;var e=t.fns;return o(e)?Go(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ko(t,e){!0!==e.data.show&&Bo(e)}var Jo=Z?{create:Ko,activate:Ko,remove:function(t,e){!0!==t.data.show?Wo(t,e):e()}}:{},Xo=[Wi,Ki,io,uo,Io,Jo],Zo=Xo.concat(Vi),Yo=Ni({nodeOps:Ei,modules:Zo});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&aa(t,"input")}));var Qo={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Oe(n,"postpatch",(function(){Qo.componentUpdated(t,e,n)})):ta(t,e,n.context),t._vOptions=[].map.call(t.options,ra)):("textarea"===n.tag||fi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ia),t.addEventListener("compositionend",oa),t.addEventListener("change",oa),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ta(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ra);if(i.some((function(t,e){return!$(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return na(t,i)})):e.value!==e.oldValue&&na(e.value,i);o&&aa(t,"change")}}}};function ta(t,e,n){ea(t,e,n),(et||rt)&&setTimeout((function(){ea(t,e,n)}),0)}function ea(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],i)o=M(r,ra(a))>-1,a.selected!==o&&(a.selected=o);else if($(ra(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function na(t,e){return e.every((function(e){return!$(e,t)}))}function ra(t){return"_value"in t?t._value:t.value}function ia(t){t.target.composing=!0}function oa(t){t.target.composing&&(t.target.composing=!1,aa(t.target,"input"))}function aa(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function sa(t){return!t.componentInstance||t.data&&t.data.transition?t:sa(t.componentInstance._vnode)}var ca={bind:function(t,e,n){var r=e.value;n=sa(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Bo(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=sa(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?Bo(n,(function(){t.style.display=t.__vOriginalDisplay})):Wo(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},ua={model:Qo,show:ca},la={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function fa(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?fa(En(e.children)):t}function ha(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[k(o)]=i[o];return e}function da(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function pa(t){while(t=t.parent)if(t.data.transition)return!0}function va(t,e){return e.key===t.key&&e.tag===t.tag}var ma=function(t){return t.tag||je(t)},ya=function(t){return"show"===t.name},ga={name:"transition",props:la,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(ma),n.length)){0;var r=this.mode;0;var i=n[0];if(pa(this.$vnode))return i;var o=fa(i);if(!o)return i;if(this._leaving)return da(t,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:c(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var s=(o.data||(o.data={})).transition=ha(this),u=this._vnode,l=fa(u);if(o.data.directives&&o.data.directives.some(ya)&&(o.data.show=!0),l&&l.data&&!va(o,l)&&!je(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=P({},s);if("out-in"===r)return this._leaving=!0,Oe(f,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),da(t,i);if("in-out"===r){if(je(o))return u;var h,d=function(){h()};Oe(s,"afterEnter",d),Oe(s,"enterCancelled",d),Oe(f,"delayLeave",(function(t){h=t}))}}return i}}},_a=P({tag:String,moveClass:String},la);delete _a.mode;var ba={props:_a,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Nn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=ha(this),s=0;s<i.length;s++){var c=i[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a;else;}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var h=r[f];h.data.transition=a,h.data.pos=h.elm.getBoundingClientRect(),n[h.key]?u.push(h):l.push(h)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wa),t.forEach(Ia),t.forEach(Oa),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;$o(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Po,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Po,t),n._moveCb=null,Mo(n,e))})}})))},methods:{hasMove:function(t,e){if(!Co)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Eo(n,t)})),ko(n,e),n.style.display="none",this.$el.appendChild(n);var r=Vo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function wa(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Ia(t){t.data.newPos=t.elm.getBoundingClientRect()}function Oa(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var ka={Transition:ga,TransitionGroup:ba};Er.config.mustUseProp=zr,Er.config.isReservedTag=si,Er.config.isReservedAttr=Fr,Er.config.getTagNamespace=ci,Er.config.isUnknownElement=li,P(Er.options.directives,ua),P(Er.options.components,ka),Er.prototype.__patch__=Z?Yo:L,Er.prototype.$mount=function(t,e){return t=t&&Z?hi(t):void 0,Dn(this,t,e)},Z&&setTimeout((function(){H.devtools&&lt&&lt.emit("init",Er)}),0),e["Z"]=Er},2238:function(t,e,n){"use strict";n.d(e,{Jn:function(){return q},KN:function(){return J},Mq:function(){return K},Xd:function(){return V},ZF:function(){return G},qX:function(){return z}});var r=n(8463),i=n(3333),o=n(4444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(s(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function s(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.20",l=new i.Yd("@firebase/app"),f="@firebase/app-compat",h="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",g="@firebase/database",_="@firebase/database-compat",b="@firebase/functions",w="@firebase/functions-compat",I="@firebase/installations",O="@firebase/installations-compat",k="@firebase/messaging",E="@firebase/messaging-compat",S="@firebase/performance",T="@firebase/performance-compat",C="@firebase/remote-config",A="@firebase/remote-config-compat",x="@firebase/storage",R="@firebase/storage-compat",P="@firebase/firestore",N="@firebase/firestore-compat",L="firebase",j="9.6.10",D="[DEFAULT]",$={[c]:"fire-core",[f]:"fire-core-compat",[d]:"fire-analytics",[h]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[g]:"fire-rtdb",[_]:"fire-rtdb-compat",[b]:"fire-fn",[w]:"fire-fn-compat",[I]:"fire-iid",[O]:"fire-iid-compat",[k]:"fire-fcm",[E]:"fire-fcm-compat",[S]:"fire-perf",[T]:"fire-perf-compat",[C]:"fire-rc",[A]:"fire-rc-compat",[x]:"fire-gcs",[R]:"fire-gcs-compat",[P]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},M=new Map,U=new Map;function F(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function V(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of M.values())F(n,t);return!0}function z(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},B=new o.LL("app","Firebase",H);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=j;function G(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:D,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw B.create("bad-app-name",{appName:String(i)});const a=M.get(i);if(a){if((0,o.vZ)(t,a.options)&&(0,o.vZ)(n,a.config))return a;throw B.create("duplicate-app",{appName:i})}const s=new r.H0(i);for(const r of U.values())s.addComponent(r);const c=new W(t,n,s);return M.set(i,c),c}function K(t=D){const e=M.get(t);if(!e)throw B.create("no-app",{appName:t});return e}function J(t,e,n){var i;let o=null!==(i=$[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const a=o.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const t=[`Unable to register library "${o}" with version "${e}":`];return a&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}V(new r.wA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X="firebase-heartbeat-database",Z=1,Y="firebase-heartbeat-store";let Q=null;function tt(){return Q||(Q=(0,o.X3)(X,Z,((t,e)=>{switch(e){case 0:t.createObjectStore(Y)}})).catch((t=>{throw B.create("storage-open",{originalErrorMessage:t.message})}))),Q}async function et(t){try{const e=await tt();return e.transaction(Y).objectStore(Y).get(rt(t))}catch(e){throw B.create("storage-get",{originalErrorMessage:e.message})}}async function nt(t,e){try{const n=await tt(),r=n.transaction(Y,"readwrite"),i=r.objectStore(Y);return await i.put(e,rt(t)),r.complete}catch(n){throw B.create("storage-set",{originalErrorMessage:n.message})}}function rt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=1024,ot=2592e6;class at{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ut(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=st();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ot})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=st(),{heartbeatsToSend:e,unsentEntries:n}=ct(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function st(){const t=new Date;return t.toISOString().substring(0,10)}function ct(t,e=it){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),lt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ut{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await et(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function lt(t){return(0,o.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){V(new r.wA("platform-logger",(t=>new a(t)),"PRIVATE")),V(new r.wA("heartbeat",(t=>new at(t)),"PRIVATE")),J(c,u,t),J(c,u,"esm2017"),J("fire-js","")}ft("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=s[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},3263:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});n(1703);function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},6198:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});n(1539);function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}},6133:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});n(1703);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},2751:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return i}})},3855:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});n(2419),n(1539),n(1299),n(489);function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n(1703);var o=n(9726),a=n(3263);function s(t,e){if(e&&("object"===(0,o.Z)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(t)}function c(t){var e=i();return function(){var n,i=r(t);if(e){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return s(this,n)}}},3796:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},796:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});n(1703);function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}},9726:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});n(2526),n(1817),n(1539),n(2165),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}}}]);
//# sourceMappingURL=chunk-vendors-legacy.8bc9f83a.js.map