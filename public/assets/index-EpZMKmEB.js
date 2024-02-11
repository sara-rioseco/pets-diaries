(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Hn="/assets/logo-title-aU5xli8i.webp",$n=()=>{const n=document.createElement("dialog"),e=document.createElement("div"),t=document.createElement("h2"),r=document.createElement("p"),i=document.createElement("p"),s=document.createElement("p"),o=document.createElement("button");for(n.classList.add("modal","about-modal"),e.classList.add("wrapper","dialog-wrapper"),t.classList.add("title"),o.classList.add("button","close-button","small-button"),o.textContent="Close";n.hasChildNodes();)n.removeChild(n.firstChild);return t.textContent="About Pets' Diaries",r.textContent="Pets' Diaries is a web app that works as a social network for pet lovers. Here you can share funny stories, care tips, adoption advice or anything you want related to our beloved pets.",i.textContent=` You can sign up with your email or login with a Google account to access the feed and create, edit, delete, like and unlike posts. Please share some of your stories with us.
Have fun!`,s.textContent="Developed by Sara Rioseco© 2024",o.addEventListener("click",()=>n.close()),e.appendChild(t),e.appendChild(r),e.appendChild(i),e.appendChild(s),e.appendChild(o),n.appendChild(e),n};function zh(n){const e=document.createElement("div"),t=document.createElement("h2"),r=document.createElement("div"),i=document.createElement("button"),s=document.createElement("button"),o=document.createElement("img"),a=$n();return o.src=`${Hn}`,o.alt="logo Pets' Diaries",o.classList.add("logo"),e.className="home-div",r.className="content-wrapper",t.textContent="Welcome to the social network for pet lovers!",i.textContent="Login",s.textContent="Sign Up",i.classList.add("button","home-button"),s.classList.add("button","home-button"),o.addEventListener("click",()=>a.showModal()),i.addEventListener("click",()=>n("/login")),s.addEventListener("click",()=>n("/signup")),r.appendChild(t),r.appendChild(i),r.appendChild(s),e.appendChild(o),e.appendChild(a),e.appendChild(r),e}const Wh='<button class="gsi-material-button">  <div class="gsi-material-button-state"></div>  <div class="gsi-material-button-content-wrapper">    <div class="gsi-material-button-icon">      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>        <path fill="none" d="M0 0h48v48H0z"></path>      </svg>    </div>    <span class="gsi-material-button-contents">Sign in with Google</span>    <span style="display: none;">Sign in with Google</span>  </div></button>',Ot=(n,e,t)=>{const r=document.createElement("div"),i=document.createElement("input"),s=document.createElement("input"),o=document.createElement("label");return r.classList.add("input-wrapper"),s.classList.add("input","input-text"),o.classList.add("label","input-label"),i.style.display="none",s.type=t||"search",s.id=`${e}`,s.autocomplete="new-password",s.placeholder=" ",s.name="nope",s.required=!0,o.setAttribute("for",`${e}`),o.textContent=`${n}`,r.appendChild(i),r.appendChild(s),r.appendChild(o),r};var aa={};/**
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
 */const Lc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Hh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Hh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new $h;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const I=l<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qh=function(n){const e=Lc(n);return Oc.encodeByteArray(e,!0)},Nr=function(n){return Qh(n).replace(/\./g,"")},Mc=function(n){try{return Oc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xh=()=>Jh().__FIREBASE_DEFAULTS__,Yh=()=>{if(typeof process>"u"||typeof aa>"u")return;const n=aa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mc(n[1]);return e&&JSON.parse(e)},Zr=()=>{try{return Xh()||Yh()||Zh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xc=n=>{var e,t;return(t=(e=Zr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ed=n=>{const e=xc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Uc=()=>{var n;return(n=Zr())===null||n===void 0?void 0:n.config},Fc=n=>{var e;return(e=Zr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class td{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function nd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Nr(JSON.stringify(t)),Nr(JSON.stringify(o)),""].join(".")}/**
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
 */function G(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())}function id(){var n;const e=(n=Zr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function od(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ad(){const n=G();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cd(){return!id()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bc(){try{return typeof indexedDB=="object"}catch{return!1}}function ld(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const ud="FirebaseError";class qe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ud,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qe(i,a,r)}}function hd(n,e){return n.replace(dd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dd=/\{\$([^}]+)}/g;function fd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Kt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ca(s)&&ca(o)){if(!Kt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ca(n){return n!==null&&typeof n=="object"}/**
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
 */function Jn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function gn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function pd(n,e){const t=new md(n,e);return t.subscribe.bind(t)}class md{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Oi),i.error===void 0&&(i.error=Oi),i.complete===void 0&&(i.complete=Oi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Oi(){}/**
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
 */function W(n){return n&&n._delegate?n._delegate:n}class Et{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ut="[DEFAULT]";/**
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
 */class _d{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new td;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ed(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yd(n){return n===ut?void 0:n}function Ed(n){return n.instantiationMode==="EAGER"}/**
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
 */class vd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _d(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Id={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},wd=D.INFO,Td={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Ad=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Td[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Os{constructor(e){this.name=e,this._logLevel=wd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Rd=(n,e)=>e.some(t=>n instanceof t);let la,ua;function Cd(){return la||(la=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pd(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qc=new WeakMap,ns=new WeakMap,jc=new WeakMap,Mi=new WeakMap,Ms=new WeakMap;function Sd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t($e(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qc.set(t,n)}).catch(()=>{}),Ms.set(e,n),e}function bd(n){if(ns.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ns.set(n,e)}let rs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ns.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $e(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kd(n){rs=n(rs)}function Dd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xi(this),e,...t);return jc.set(r,e.sort?e.sort():[e]),$e(r)}:Pd().includes(n)?function(...e){return n.apply(xi(this),e),$e(qc.get(this))}:function(...e){return $e(n.apply(xi(this),e))}}function Vd(n){return typeof n=="function"?Dd(n):(n instanceof IDBTransaction&&bd(n),Rd(n,Cd())?new Proxy(n,rs):n)}function $e(n){if(n instanceof IDBRequest)return Sd(n);if(Mi.has(n))return Mi.get(n);const e=Vd(n);return e!==n&&(Mi.set(n,e),Ms.set(e,n)),e}const xi=n=>Ms.get(n);function Nd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=$e(o);return r&&o.addEventListener("upgradeneeded",c=>{r($e(o.result),c.oldVersion,c.newVersion,$e(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ld=["get","getKey","getAll","getAllKeys","count"],Od=["put","add","delete","clear"],Ui=new Map;function ha(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ui.get(e))return Ui.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Od.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ld.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Ui.set(e,s),s}kd(n=>({...n,get:(e,t,r)=>ha(e,t)||n.get(e,t,r),has:(e,t)=>!!ha(e,t)||n.has(e,t)}));/**
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
 */class Md{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function xd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const is="@firebase/app",da="0.9.26";/**
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
 */const vt=new Os("@firebase/app"),Ud="@firebase/app-compat",Fd="@firebase/analytics-compat",Bd="@firebase/analytics",qd="@firebase/app-check-compat",jd="@firebase/app-check",Kd="@firebase/auth",Gd="@firebase/auth-compat",zd="@firebase/database",Wd="@firebase/database-compat",Hd="@firebase/functions",$d="@firebase/functions-compat",Qd="@firebase/installations",Jd="@firebase/installations-compat",Xd="@firebase/messaging",Yd="@firebase/messaging-compat",Zd="@firebase/performance",ef="@firebase/performance-compat",tf="@firebase/remote-config",nf="@firebase/remote-config-compat",rf="@firebase/storage",sf="@firebase/storage-compat",of="@firebase/firestore",af="@firebase/firestore-compat",cf="firebase",lf="10.7.2";/**
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
 */const ss="[DEFAULT]",uf={[is]:"fire-core",[Ud]:"fire-core-compat",[Bd]:"fire-analytics",[Fd]:"fire-analytics-compat",[jd]:"fire-app-check",[qd]:"fire-app-check-compat",[Kd]:"fire-auth",[Gd]:"fire-auth-compat",[zd]:"fire-rtdb",[Wd]:"fire-rtdb-compat",[Hd]:"fire-fn",[$d]:"fire-fn-compat",[Qd]:"fire-iid",[Jd]:"fire-iid-compat",[Xd]:"fire-fcm",[Yd]:"fire-fcm-compat",[Zd]:"fire-perf",[ef]:"fire-perf-compat",[tf]:"fire-rc",[nf]:"fire-rc-compat",[rf]:"fire-gcs",[sf]:"fire-gcs-compat",[of]:"fire-fst",[af]:"fire-fst-compat","fire-js":"fire-js",[cf]:"fire-js-all"};/**
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
 */const Lr=new Map,os=new Map;function hf(n,e){try{n.container.addComponent(e)}catch(t){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gt(n){const e=n.name;if(os.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;os.set(e,n);for(const t of Lr.values())hf(t,n);return!0}function xs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const df={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new Qn("app","Firebase",df);/**
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
 */class ff{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
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
 */const nn=lf;function Kc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ss,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qe.create("bad-app-name",{appName:String(i)});if(t||(t=Uc()),!t)throw Qe.create("no-options");const s=Lr.get(i);if(s){if(Kt(t,s.options)&&Kt(r,s.config))return s;throw Qe.create("duplicate-app",{appName:i})}const o=new vd(i);for(const c of os.values())o.addComponent(c);const a=new ff(t,r,o);return Lr.set(i,a),a}function Gc(n=ss){const e=Lr.get(n);if(!e&&n===ss&&Uc())return Kc();if(!e)throw Qe.create("no-app",{appName:n});return e}function Je(n,e,t){var r;let i=(r=uf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(a.join(" "));return}Gt(new Et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pf="firebase-heartbeat-database",mf=1,kn="firebase-heartbeat-store";let Fi=null;function zc(){return Fi||(Fi=Nd(pf,mf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qe.create("idb-open",{originalErrorMessage:n.message})})),Fi}async function gf(n){try{return await(await zc()).transaction(kn).objectStore(kn).get(Wc(n))}catch(e){if(e instanceof qe)vt.warn(e.message);else{const t=Qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(t.message)}}}async function fa(n,e){try{const r=(await zc()).transaction(kn,"readwrite");await r.objectStore(kn).put(e,Wc(n)),await r.done}catch(t){if(t instanceof qe)vt.warn(t.message);else{const r=Qe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vt.warn(r.message)}}}function Wc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _f=1024,yf=30*24*60*60*1e3;class Ef{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new If(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pa();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=yf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pa(),{heartbeatsToSend:r,unsentEntries:i}=vf(this._heartbeatsCache.heartbeats),s=Nr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function pa(){return new Date().toISOString().substring(0,10)}function vf(n,e=_f){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ma(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ma(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class If{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bc()?ld().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ma(n){return Nr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function wf(n){Gt(new Et("platform-logger",e=>new Md(e),"PRIVATE")),Gt(new Et("heartbeat",e=>new Ef(e),"PRIVATE")),Je(is,da,n),Je(is,da,"esm2017"),Je("fire-js","")}wf("");function Us(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Hc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tf=Hc,$c=new Qn("auth","Firebase",Hc());/**
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
 */const Or=new Os("@firebase/auth");function Af(n,...e){Or.logLevel<=D.WARN&&Or.warn(`Auth (${nn}): ${n}`,...e)}function Rr(n,...e){Or.logLevel<=D.ERROR&&Or.error(`Auth (${nn}): ${n}`,...e)}/**
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
 */function ge(n,...e){throw Fs(n,...e)}function Ae(n,...e){return Fs(n,...e)}function Qc(n,e,t){const r=Object.assign(Object.assign({},Tf()),{[e]:t});return new Qn("auth","Firebase",r).create(e,{appName:n.name})}function Rf(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ge(n,"argument-error"),Qc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return $c.create(n,...e)}function R(n,e,...t){if(!n)throw Fs(e,...t)}function Oe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rr(e),new Error(e)}function Ue(n,e){n||Oe(e)}/**
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
 */function as(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Cf(){return ga()==="http:"||ga()==="https:"}function ga(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Pf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cf()||sd()||"connection"in navigator)?navigator.onLine:!0}function Sf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Xn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ue(t>e,"Short delay should be less than long delay!"),this.isMobile=rd()||od()}get(){return Pf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bs(n,e){Ue(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Jc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kf=new Xn(3e4,6e4);function nt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function je(n,e,t,r,i={}){return Xc(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Jn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Jc.fetch()(Yc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Xc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},bf),e);try{const i=new Vf(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw gr(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Qc(n,u,l);ge(n,u)}}catch(i){if(i instanceof qe)throw i;ge(n,"network-request-failed",{message:String(i)})}}async function Yn(n,e,t,r,i={}){const s=await je(n,e,t,r,i);return"mfaPendingCredential"in s&&ge(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Yc(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Bs(n.config,i):`${n.config.apiScheme}://${i}`}function Df(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ae(this.auth,"network-request-failed")),kf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ae(n,e,r);return i.customData._tokenResponse=t,i}function _a(n){return n!==void 0&&n.enterprise!==void 0}class Nf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Df(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Lf(n,e){return je(n,"GET","/v2/recaptchaConfig",nt(n,e))}/**
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
 */async function Of(n,e){return je(n,"POST","/v1/accounts:delete",e)}async function Mf(n,e){return je(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Tn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xf(n,e=!1){const t=W(n),r=await t.getIdToken(e),i=qs(r);R(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Tn(Bi(i.auth_time)),issuedAtTime:Tn(Bi(i.iat)),expirationTime:Tn(Bi(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bi(n){return Number(n)*1e3}function qs(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mc(t);return i?JSON.parse(i):(Rr("Failed to decode base64 JWT payload"),null)}catch(i){return Rr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Uf(n){const e=qs(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qe&&Ff(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ff({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Bf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mr(n){var e;const t=n.auth,r=await n.getIdToken(),i=await zt(n,Mf(t,{idToken:r}));R(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Kf(s.providerUserInfo):[],a=jf(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function qf(n){const e=W(n);await Mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jf(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kf(n){return n.map(e=>{var{providerId:t}=e,r=Us(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Gf(n,e){const t=await Xc(n,{},async()=>{const r=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Yc(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zf(n,e){return je(n,"POST","/v2/accounts:revokeToken",nt(n,e))}/**
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
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Gf(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Dn;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return Oe("not implemented")}}/**
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
 */function Ke(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _t{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Us(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await zt(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xf(this,e)}reload(){return qf(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zt(this,Of(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=t.photoURL)!==null&&o!==void 0?o:void 0,T=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=t.createdAt)!==null&&l!==void 0?l:void 0,A=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:te,isAnonymous:Ve,providerData:fe,stsTokenManager:Ne}=t;R(U&&Ne,e,"internal-error");const mr=Dn.fromJSON(this.name,Ne);R(typeof U=="string",e,"internal-error"),Ke(h,e.name),Ke(d,e.name),R(typeof te=="boolean",e,"internal-error"),R(typeof Ve=="boolean",e,"internal-error"),Ke(f,e.name),Ke(I,e.name),Ke(T,e.name),Ke(E,e.name),Ke(v,e.name),Ke(A,e.name);const ct=new _t({uid:U,auth:e,email:d,emailVerified:te,displayName:h,isAnonymous:Ve,photoURL:I,phoneNumber:f,tenantId:T,stsTokenManager:mr,createdAt:v,lastLoginAt:A});return fe&&Array.isArray(fe)&&(ct.providerData=fe.map(kt=>Object.assign({},kt))),E&&(ct._redirectEventId=E),ct}static async _fromIdTokenResponse(e,t,r=!1){const i=new Dn;i.updateFromServerResponse(t);const s=new _t({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mr(s),s}}/**
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
 */const ya=new Map;function Me(n){Ue(n instanceof Function,"Expected a class definition");let e=ya.get(n);return e?(Ue(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ya.set(n,e),e)}/**
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
 */class el{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}el.type="NONE";const Ea=el;/**
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
 */function Cr(n,e,t){return`firebase:${n}:${e}:${t}`}class Ut{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Cr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Cr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ut(Me(Ea),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Me(Ea);const o=Cr(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=_t._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ut(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ut(s,e,r))}}/**
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
 */function va(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sl(e))return"Blackberry";if(ol(e))return"Webos";if(js(e))return"Safari";if((e.includes("chrome/")||nl(e))&&!e.includes("edge/"))return"Chrome";if(il(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tl(n=G()){return/firefox\//i.test(n)}function js(n=G()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nl(n=G()){return/crios\//i.test(n)}function rl(n=G()){return/iemobile/i.test(n)}function il(n=G()){return/android/i.test(n)}function sl(n=G()){return/blackberry/i.test(n)}function ol(n=G()){return/webos/i.test(n)}function ei(n=G()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wf(n=G()){var e;return ei(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hf(){return ad()&&document.documentMode===10}function al(n=G()){return ei(n)||il(n)||ol(n)||sl(n)||/windows phone/i.test(n)||rl(n)}function $f(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cl(n,e=[]){let t;switch(n){case"Browser":t=va(G());break;case"Worker":t=`${va(G())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nn}/${r}`}/**
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
 */class Qf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Jf(n,e={}){return je(n,"GET","/v2/passwordPolicy",nt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Xf=6;class Yf{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Xf,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Zf{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ia(this),this.idTokenSubscription=new Ia(this),this.beforeStateQueue=new Qf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Me(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ut.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?W(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jf(this),t=new Yf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await zf(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Me(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await Ut.create(this,[Me(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Af(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function rt(n){return W(n)}class Ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=pd(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ep(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ll(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ae("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",ep().appendChild(r)})}function tp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const np="https://www.google.com/recaptcha/enterprise.js?render=",rp="recaptcha-enterprise",ip="NO_RECAPTCHA";class sp{constructor(e){this.type=rp,this.auth=rt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Lf(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Nf(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;_a(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(ip)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&_a(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ll(np+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function wa(n,e,t,r=!1){const i=new sp(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function cs(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await wa(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await wa(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
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
 */function op(n,e){const t=xs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Kt(s,e??{}))return i;ge(i,"already-initialized")}return t.initialize({options:e})}function ap(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Me);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cp(n,e,t){const r=rt(n);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=ul(e),{host:o,port:a}=lp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||up()}function ul(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lp(n){const e=ul(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ta(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ta(o)}}}function Ta(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function up(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ks{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Oe("not implemented")}_getIdTokenResponse(e){return Oe("not implemented")}_linkToIdToken(e,t){return Oe("not implemented")}_getReauthenticationResolver(e){return Oe("not implemented")}}async function hp(n,e){return je(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dp(n,e){return Yn(n,"POST","/v1/accounts:signInWithPassword",nt(n,e))}/**
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
 */async function fp(n,e){return Yn(n,"POST","/v1/accounts:signInWithEmailLink",nt(n,e))}async function pp(n,e){return Yn(n,"POST","/v1/accounts:signInWithEmailLink",nt(n,e))}/**
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
 */class Vn extends Ks{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Vn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Vn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cs(e,t,"signInWithPassword",dp);case"emailLink":return fp(e,{email:this._email,oobCode:this._password});default:ge(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cs(e,r,"signUpPassword",hp);case"emailLink":return pp(e,{idToken:t,email:this._email,oobCode:this._password});default:ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ft(n,e){return Yn(n,"POST","/v1/accounts:signInWithIdp",nt(n,e))}/**
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
 */const mp="http://localhost";class It extends Ks{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new It(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Us(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new It(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ft(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ft(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ft(e,t)}buildRequest(){const e={requestUri:mp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jn(t)}return e}}/**
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
 */function gp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _p(n){const e=mn(gn(n)).link,t=e?mn(gn(e)).deep_link_id:null,r=mn(gn(n)).deep_link_id;return(r?mn(gn(r)).link:null)||r||t||e||n}class Gs{constructor(e){var t,r,i,s,o,a;const c=mn(gn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=gp((i=c.mode)!==null&&i!==void 0?i:null);R(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=_p(e);try{return new Gs(t)}catch{return null}}}/**
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
 */class rn{constructor(){this.providerId=rn.PROVIDER_ID}static credential(e,t){return Vn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Gs.parseLink(t);return R(r,"argument-error"),Vn._fromEmailAndCode(e,r.code,r.tenantId)}}rn.PROVIDER_ID="password";rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zn extends zs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ge extends Zn{constructor(){super("facebook.com")}static credential(e){return It._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch{return null}}}Ge.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ge.PROVIDER_ID="facebook.com";/**
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
 */class Le extends Zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return It._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Le.credential(t,r)}catch{return null}}}Le.GOOGLE_SIGN_IN_METHOD="google.com";Le.PROVIDER_ID="google.com";/**
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
 */class ze extends Zn{constructor(){super("github.com")}static credential(e){return It._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
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
 */class We extends Zn{constructor(){super("twitter.com")}static credential(e,t){return It._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return We.credential(t,r)}catch{return null}}}We.TWITTER_SIGN_IN_METHOD="twitter.com";We.PROVIDER_ID="twitter.com";/**
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
 */async function yp(n,e){return Yn(n,"POST","/v1/accounts:signUp",nt(n,e))}/**
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
 */class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await _t._fromIdTokenResponse(e,r,i),o=Aa(r);return new wt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Aa(r);return new wt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Aa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class xr extends qe{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new xr(e,t,r,i)}}function hl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(n,s,e,r):s})}async function Ep(n,e,t=!1){const r=await zt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wt._forOperation(n,"link",r)}/**
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
 */async function vp(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await zt(n,hl(r,i,e,n),t);R(s.idToken,r,"internal-error");const o=qs(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(n.uid===a,r,"user-mismatch"),wt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ge(r,"user-mismatch"),s}}/**
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
 */async function dl(n,e,t=!1){const r="signIn",i=await hl(n,r,e),s=await wt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Ip(n,e){return dl(rt(n),e)}/**
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
 */async function fl(n){const e=rt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wp(n,e,t){const r=rt(n),o=await cs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&fl(n),c}),a=await wt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Tp(n,e,t){return Ip(W(n),rn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fl(n),r})}/**
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
 */async function Ap(n,e){return je(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Rp(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=W(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await zt(r,Ap(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Cp(n,e,t,r){return W(n).onIdTokenChanged(e,t,r)}function Pp(n,e,t){return W(n).beforeAuthStateChanged(e,t)}function Sp(n){return W(n).signOut()}const Ur="__sak";/**
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
 */class pl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ur,"1"),this.storage.removeItem(Ur),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function bp(){const n=G();return js(n)||ei(n)}const kp=1e3,Dp=10;class ml extends pl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bp()&&$f(),this.fallbackToPolling=al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Hf()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ml.type="LOCAL";const Vp=ml;/**
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
 */class gl extends pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gl.type="SESSION";const _l=gl;/**
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
 */function Np(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ti{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ti(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await Np(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ti.receivers=[];/**
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
 */function Ws(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Lp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Ws("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Re(){return window}function Op(n){Re().location.href=n}/**
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
 */function yl(){return typeof Re().WorkerGlobalScope<"u"&&typeof Re().importScripts=="function"}async function Mp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Up(){return yl()?self:null}/**
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
 */const El="firebaseLocalStorageDb",Fp=1,Fr="firebaseLocalStorage",vl="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ni(n,e){return n.transaction([Fr],e?"readwrite":"readonly").objectStore(Fr)}function Bp(){const n=indexedDB.deleteDatabase(El);return new er(n).toPromise()}function ls(){const n=indexedDB.open(El,Fp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fr,{keyPath:vl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fr)?e(r):(r.close(),await Bp(),e(await ls()))})})}async function Ra(n,e,t){const r=ni(n,!0).put({[vl]:e,value:t});return new er(r).toPromise()}async function qp(n,e){const t=ni(n,!1).get(e),r=await new er(t).toPromise();return r===void 0?null:r.value}function Ca(n,e){const t=ni(n,!0).delete(e);return new er(t).toPromise()}const jp=800,Kp=3;class Il{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ls(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Kp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ti._getInstance(Up()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mp(),!this.activeServiceWorker)return;this.sender=new Lp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ls();return await Ra(e,Ur,"1"),await Ca(e,Ur),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ra(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ca(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ni(i,!1).getAll();return new er(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Il.type="LOCAL";const Gp=Il;new Xn(3e4,6e4);/**
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
 */function wl(n,e){return e?Me(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Hs extends Ks{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zp(n){return dl(n.auth,new Hs(n),n.bypassAuthState)}function Wp(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),vp(t,new Hs(n),n.bypassAuthState)}async function Hp(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Ep(t,new Hs(n),n.bypassAuthState)}/**
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
 */class Tl{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zp;case"linkViaPopup":case"linkViaRedirect":return Hp;case"reauthViaPopup":case"reauthViaRedirect":return Wp;default:ge(this.auth,"internal-error")}}resolve(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $p=new Xn(2e3,1e4);async function Qp(n,e,t){const r=rt(n);Rf(n,e,zs);const i=wl(r,t);return new dt(r,"signInViaPopup",e,i).executeNotNull()}class dt extends Tl{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,dt.currentPopupAction&&dt.currentPopupAction.cancel(),dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Ue(this.filter.length===1,"Popup operations only handle one event");const e=Ws();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$p.get())};e()}}dt.currentPopupAction=null;/**
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
 */const Jp="pendingRedirect",Pr=new Map;class Xp extends Tl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Pr.get(this.auth._key());if(!e){try{const r=await Yp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Pr.set(this.auth._key(),e)}return this.bypassAuthState||Pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yp(n,e){const t=tm(e),r=em(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Zp(n,e){Pr.set(n._key(),e)}function em(n){return Me(n._redirectPersistence)}function tm(n){return Cr(Jp,n.config.apiKey,n.name)}async function nm(n,e,t=!1){const r=rt(n),i=wl(r,e),o=await new Xp(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const rm=10*60*1e3;class im{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Al(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ae(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pa(e))}saveEventToCache(e){this.cachedEventUids.add(Pa(e)),this.lastProcessedEventTime=Date.now()}}function Pa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Al({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Al(n);default:return!1}}/**
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
 */async function om(n,e={}){return je(n,"GET","/v1/projects",e)}/**
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
 */const am=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cm=/^https?/;async function lm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await om(n);for(const t of e)try{if(um(t))return}catch{}ge(n,"unauthorized-domain")}function um(n){const e=as(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!cm.test(t))return!1;if(am.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hm=new Xn(3e4,6e4);function Sa(){const n=Re().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dm(n){return new Promise((e,t)=>{var r,i,s;function o(){Sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sa(),t(Ae(n,"network-request-failed"))},timeout:hm.get()})}if(!((i=(r=Re().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Re().gapi)===null||s===void 0)&&s.load)o();else{const a=tp("iframefcb");return Re()[a]=()=>{gapi.load?o():t(Ae(n,"network-request-failed"))},ll(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Sr=null,e})}let Sr=null;function fm(n){return Sr=Sr||dm(n),Sr}/**
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
 */const pm=new Xn(5e3,15e3),mm="__/auth/iframe",gm="emulator/auth/iframe",_m={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ym=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Em(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bs(e,gm):`https://${n.config.authDomain}/${mm}`,r={apiKey:e.apiKey,appName:n.name,v:nn},i=ym.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Jn(r).slice(1)}`}async function vm(n){const e=await fm(n),t=Re().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:Em(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_m,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ae(n,"network-request-failed"),a=Re().setTimeout(()=>{s(o)},pm.get());function c(){Re().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Im={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wm=500,Tm=600,Am="_blank",Rm="http://localhost";class ba{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cm(n,e,t,r=wm,i=Tm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Im),{width:r.toString(),height:i.toString(),top:s,left:o}),l=G().toLowerCase();t&&(a=nl(l)?Am:t),tl(l)&&(e=e||Rm,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,I])=>`${d}${f}=${I},`,"");if(Wf(l)&&a!=="_self")return Pm(e||"",a),new ba(null);const h=window.open(e||"",a,u);R(h,n,"popup-blocked");try{h.focus()}catch{}return new ba(h)}function Pm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Sm="__/auth/handler",bm="emulator/auth/handler",km=encodeURIComponent("fac");async function ka(n,e,t,r,i,s){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:nn,eventId:i};if(e instanceof zs){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",fd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Zn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${km}=${encodeURIComponent(c)}`:"";return`${Dm(n)}?${Jn(a).slice(1)}${l}`}function Dm({config:n}){return n.emulator?Bs(n,bm):`https://${n.authDomain}/${Sm}`}/**
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
 */const qi="webStorageSupport";class Vm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_l,this._completeRedirectFn=nm,this._overrideRedirectResult=Zp}async _openPopup(e,t,r,i){var s;Ue((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ka(e,t,r,as(),i);return Cm(e,o,Ws())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await ka(e,t,r,as(),i);return Op(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ue(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await vm(e),r=new im(e);return t.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qi,{type:qi},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qi];o!==void 0&&t(!!o),ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return al()||js()||ei()}}const Nm=Vm;var Da="@firebase/auth",Va="1.5.1";/**
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
 */class Lm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Om(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mm(n){Gt(new Et("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cl(n)},l=new Zf(r,i,s,c);return ap(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Gt(new Et("auth-internal",e=>{const t=rt(e.getProvider("auth").getImmediate());return(r=>new Lm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Da,Va,Om(n)),Je(Da,Va,"esm2017")}/**
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
 */const xm=5*60,Um=Fc("authIdTokenMaxAge")||xm;let Na=null;const Fm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Um)return;const i=t==null?void 0:t.token;Na!==i&&(Na=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bm(n=Gc()){const e=xs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=op(n,{popupRedirectResolver:Nm,persistence:[Gp,Vp,_l]}),r=Fc("authTokenSyncURL");if(r){const s=Fm(r);Pp(t,s,()=>s(t.currentUser)),Cp(t,o=>s(o))}const i=xc("auth");return i&&cp(t,`http://${i}`),t}Mm("Browser");var qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,$s=$s||{},P=qm||self;function ri(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function tr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function jm(n){return Object.prototype.hasOwnProperty.call(n,ji)&&n[ji]||(n[ji]=++Km)}var ji="closure_uid_"+(1e9*Math.random()>>>0),Km=0;function Gm(n,e,t){return n.call.apply(n.bind,arguments)}function zm(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function se(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?se=Gm:se=zm,se.apply(null,arguments)}function _r(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Q(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function it(){this.s=this.s,this.o=this.o}var Wm=0;it.prototype.s=!1;it.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Wm!=0)&&jm(this)};it.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rl=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Qs(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function La(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ri(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function oe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var Hm=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const t=()=>{};P.addEventListener("test",t,e),P.removeEventListener("test",t,e)}catch{}return n}();function Nn(n){return/^[\s\xa0]*$/.test(n)}function ii(){var n=P.navigator;return n&&(n=n.userAgent)?n:""}function Ie(n){return ii().indexOf(n)!=-1}function Js(n){return Js[" "](n),n}Js[" "]=function(){};function $m(n,e){var t=Bg;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Qm=Ie("Opera"),Wt=Ie("Trident")||Ie("MSIE"),Cl=Ie("Edge"),us=Cl||Wt,Pl=Ie("Gecko")&&!(ii().toLowerCase().indexOf("webkit")!=-1&&!Ie("Edge"))&&!(Ie("Trident")||Ie("MSIE"))&&!Ie("Edge"),Jm=ii().toLowerCase().indexOf("webkit")!=-1&&!Ie("Edge");function Sl(){var n=P.document;return n?n.documentMode:void 0}var hs;e:{var Ki="",Gi=function(){var n=ii();if(Pl)return/rv:([^\);]+)(\)|;)/.exec(n);if(Cl)return/Edge\/([\d\.]+)/.exec(n);if(Wt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Jm)return/WebKit\/(\S+)/.exec(n);if(Qm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Gi&&(Ki=Gi?Gi[1]:""),Wt){var zi=Sl();if(zi!=null&&zi>parseFloat(Ki)){hs=String(zi);break e}}hs=Ki}var ds;if(P.document&&Wt){var Oa=Sl();ds=Oa||parseInt(hs,10)||void 0}else ds=void 0;var Xm=ds;function Ln(n,e){if(oe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Pl){e:{try{Js(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Ym[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ln.$.h.call(this)}}Q(Ln,oe);var Ym={2:"touch",3:"pen",4:"mouse"};Ln.prototype.h=function(){Ln.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var nr="closure_listenable_"+(1e6*Math.random()|0),Zm=0;function eg(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++Zm,this.fa=this.ia=!1}function si(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Xs(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function tg(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function bl(n){const e={};for(const t in n)e[t]=n[t];return e}const Ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kl(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Ma.length;s++)t=Ma[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function oi(n){this.src=n,this.g={},this.h=0}oi.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ps(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new eg(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function fs(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Rl(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(si(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ps(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Ys="closure_lm_"+(1e6*Math.random()|0),Wi={};function Dl(n,e,t,r,i){if(r&&r.once)return Nl(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Dl(n,e[s],t,r,i);return null}return t=to(t),n&&n[nr]?n.O(e,t,tr(r)?!!r.capture:!!r,i):Vl(n,e,t,!1,r,i)}function Vl(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=tr(i)?!!i.capture:!!i,a=eo(n);if(a||(n[Ys]=a=new oi(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=ng(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Hm||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Ol(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function ng(){function n(t){return e.call(n.src,n.listener,t)}const e=rg;return n}function Nl(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Nl(n,e[s],t,r,i);return null}return t=to(t),n&&n[nr]?n.P(e,t,tr(r)?!!r.capture:!!r,i):Vl(n,e,t,!0,r,i)}function Ll(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ll(n,e[s],t,r,i);else r=tr(r)?!!r.capture:!!r,t=to(t),n&&n[nr]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=ps(s,t,r,i),-1<t&&(si(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=eo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ps(e,t,r,i)),(t=-1<n?e[n]:null)&&Zs(t))}function Zs(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[nr])fs(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Ol(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=eo(e))?(fs(t,n),t.h==0&&(t.src=null,e[Ys]=null)):si(n)}}}function Ol(n){return n in Wi?Wi[n]:Wi[n]="on"+n}function rg(n,e){if(n.fa)n=!0;else{e=new Ln(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Zs(n),n=t.call(r,e)}return n}function eo(n){return n=n[Ys],n instanceof oi?n:null}var Hi="__closure_events_fn_"+(1e9*Math.random()>>>0);function to(n){return typeof n=="function"?n:(n[Hi]||(n[Hi]=function(e){return n.handleEvent(e)}),n[Hi])}function $(){it.call(this),this.i=new oi(this),this.S=this,this.J=null}Q($,it);$.prototype[nr]=!0;$.prototype.removeEventListener=function(n,e,t,r){Ll(this,n,e,t,r)};function Z(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new oe(e,n);else if(e instanceof oe)e.target=e.target||n;else{var i=e;e=new oe(r,n),kl(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=yr(o,r,!0,e)&&i}if(o=e.g=n,i=yr(o,r,!0,e)&&i,i=yr(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=yr(o,r,!1,e)&&i}$.prototype.N=function(){if($.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)si(t[r]);delete n.g[e],n.h--}}this.J=null};$.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};$.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function yr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&fs(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var no=P.JSON.stringify;class ig{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function sg(){var n=ro;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class og{constructor(){this.h=this.g=null}add(e,t){const r=Ml.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Ml=new ig(()=>new ag,n=>n.reset());class ag{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function cg(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function lg(n){P.setTimeout(()=>{throw n},0)}let On,Mn=!1,ro=new og,xl=()=>{const n=P.Promise.resolve(void 0);On=()=>{n.then(ug)}};var ug=()=>{for(var n;n=sg();){try{n.h.call(n.g)}catch(t){lg(t)}var e=Ml;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Mn=!1};function ai(n,e){$.call(this),this.h=n||1,this.g=e||P,this.j=se(this.qb,this),this.l=Date.now()}Q(ai,$);_=ai.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Z(this,"tick"),this.ga&&(io(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function io(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}_.N=function(){ai.$.N.call(this),io(this),delete this.g};function so(n,e,t){if(typeof n=="function")t&&(n=se(n,t));else if(n&&typeof n.handleEvent=="function")n=se(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:P.setTimeout(n,e||0)}function Ul(n){n.g=so(()=>{n.g=null,n.i&&(n.i=!1,Ul(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class hg extends it{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ul(this)}N(){super.N(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xn(n){it.call(this),this.h=n,this.g={}}Q(xn,it);var xa=[];function Fl(n,e,t,r){Array.isArray(t)||(t&&(xa[0]=t.toString()),t=xa);for(var i=0;i<t.length;i++){var s=Dl(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Bl(n){Xs(n.g,function(e,t){this.g.hasOwnProperty(t)&&Zs(e)},n),n.g={}}xn.prototype.N=function(){xn.$.N.call(this),Bl(this)};xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ci(){this.g=!0}ci.prototype.Ea=function(){this.g=!1};function dg(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function fg(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Mt(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+mg(n,t)+(r?" "+r:"")})}function pg(n,e){n.info(function(){return"TIMEOUT: "+e})}ci.prototype.info=function(){};function mg(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return no(t)}catch{return e}}var Ct={},Ua=null;function li(){return Ua=Ua||new $}Ct.Ta="serverreachability";function ql(n){oe.call(this,Ct.Ta,n)}Q(ql,oe);function Un(n){const e=li();Z(e,new ql(e))}Ct.STAT_EVENT="statevent";function jl(n,e){oe.call(this,Ct.STAT_EVENT,n),this.stat=e}Q(jl,oe);function ce(n){const e=li();Z(e,new jl(e,n))}Ct.Ua="timingevent";function Kl(n,e){oe.call(this,Ct.Ua,n),this.size=e}Q(Kl,oe);function rr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){n()},e)}var ui={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Gl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function oo(){}oo.prototype.h=null;function Fa(n){return n.h||(n.h=n.i())}function zl(){}var ir={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ao(){oe.call(this,"d")}Q(ao,oe);function co(){oe.call(this,"c")}Q(co,oe);var ms;function hi(){}Q(hi,oo);hi.prototype.g=function(){return new XMLHttpRequest};hi.prototype.i=function(){return{}};ms=new hi;function sr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new xn(this),this.P=gg,n=us?125:void 0,this.V=new ai(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var gg=45e3,Hl={},gs={};_=sr.prototype;_.setTimeout=function(n){this.P=n};function _s(n,e,t){n.L=1,n.A=fi(Fe(e)),n.u=t,n.S=!0,$l(n,null)}function $l(n,e){n.G=Date.now(),or(n),n.B=Fe(n.A);var t=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),nu(t.i,"t",r),n.o=0,t=n.l.J,n.h=new Wl,n.g=Tu(n.l,t?e:null,!n.u),0<n.O&&(n.M=new hg(se(n.Pa,n,n.g),n.O)),Fl(n.U,n.g,"readystatechange",n.nb),e=n.I?bl(n.I):{},n.u?(n.v||(n.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,e)):(n.v="GET",n.g.ha(n.B,n.v,null,e)),Un(),dg(n.j,n.v,n.B,n.m,n.W,n.u)}_.nb=function(n){n=n.target;const e=this.M;e&&we(n)==3?e.l():this.Pa(n)};_.Pa=function(n){try{if(n==this.g)e:{const u=we(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||us||this.g&&(this.h.h||this.g.ja()||Ka(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Un(3):Un(2)),di(this);var t=this.g.da();this.ca=t;t:if(Ql(this)){var r=Ka(this.g);n="";var i=r.length,s=we(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ft(this),An(this);var o="";break t}this.h.i=new P.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,fg(this.j,this.v,this.B,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nn(a)){var l=a;break t}}l=null}if(t=l)Mt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ys(this,t);else{this.i=!1,this.s=3,ce(12),ft(this),An(this);break e}}this.S?(Jl(this,u,o),us&&this.i&&u==3&&(Fl(this.U,this.V,"tick",this.mb),this.V.start())):(Mt(this.j,this.m,o,null),ys(this,o)),u==4&&ft(this),this.i&&!this.J&&(u==4?Eu(this.l,this):(this.i=!1,or(this)))}else xg(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),ft(this),An(this)}}}catch{}finally{}};function Ql(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Jl(n,e,t){let r=!0,i;for(;!n.J&&n.o<t.length;)if(i=_g(n,t),i==gs){e==4&&(n.s=4,ce(14),r=!1),Mt(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Hl){n.s=4,ce(15),Mt(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Mt(n.j,n.m,i,null),ys(n,i);Ql(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),e!=4||t.length!=0||n.h.h||(n.s=1,ce(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),mo(e),e.M=!0,ce(11))):(Mt(n.j,n.m,t,"[Invalid Chunked Response]"),ft(n),An(n))}_.mb=function(){if(this.g){var n=we(this.g),e=this.g.ja();this.o<e.length&&(di(this),Jl(this,n,e),this.i&&n!=4&&or(this))}};function _g(n,e){var t=n.o,r=e.indexOf(`
`,t);return r==-1?gs:(t=Number(e.substring(t,r)),isNaN(t)?Hl:(r+=1,r+t>e.length?gs:(e=e.slice(r,r+t),n.o=r+t,e)))}_.cancel=function(){this.J=!0,ft(this)};function or(n){n.Y=Date.now()+n.P,Xl(n,n.P)}function Xl(n,e){if(n.C!=null)throw Error("WatchDog timer not null");n.C=rr(se(n.lb,n),e)}function di(n){n.C&&(P.clearTimeout(n.C),n.C=null)}_.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(pg(this.j,this.B),this.L!=2&&(Un(),ce(17)),ft(this),this.s=2,An(this)):Xl(this,this.Y-n)};function An(n){n.l.H==0||n.J||Eu(n.l,n)}function ft(n){di(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,io(n.V),Bl(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function ys(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Es(t.i,n))){if(!n.K&&Es(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)jr(t),_i(t);else break e;po(t),ce(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=rr(se(t.ib,t),6e3));if(1>=su(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else pt(t,11)}else if((n.K||t.g==n)&&jr(t),!Nn(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const I=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(lo(s,s.h),s.h=null))}if(r.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,M(r.I,r.F,T))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=wu(r,r.J?r.pa:null,r.Y),o.K){ou(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(di(a),or(a)),r.g=o}else _u(r);0<t.j.length&&yi(t)}else l[0]!="stop"&&l[0]!="close"||pt(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?pt(t,7):fo(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}Un(4)}catch{}}function yg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ri(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Eg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ri(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Yl(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ri(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Eg(n),r=yg(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vg(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function yt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof yt){this.h=n.h,Br(this,n.j),this.s=n.s,this.g=n.g,qr(this,n.m),this.l=n.l;var e=n.i,t=new Fn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Ba(this,t),this.o=n.o}else n&&(e=String(n).match(Zl))?(this.h=!1,Br(this,e[1]||"",!0),this.s=_n(e[2]||""),this.g=_n(e[3]||"",!0),qr(this,e[4]),this.l=_n(e[5]||"",!0),Ba(this,e[6]||"",!0),this.o=_n(e[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}yt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(yn(e,qa,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(yn(e,qa,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(yn(t,t.charAt(0)=="/"?Tg:wg,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",yn(t,Rg)),n.join("")};function Fe(n){return new yt(n)}function Br(n,e,t){n.j=t?_n(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function qr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Ba(n,e,t){e instanceof Fn?(n.i=e,Cg(n.i,n.h)):(t||(e=yn(e,Ag)),n.i=new Fn(e,n.h))}function M(n,e,t){n.i.set(e,t)}function fi(n){return M(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function _n(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function yn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Ig),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Ig(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var qa=/[#\/\?@]/g,wg=/[#\?:]/g,Tg=/[#\?]/g,Ag=/[#\?@]/g,Rg=/#/g;function Fn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function st(n){n.g||(n.g=new Map,n.h=0,n.i&&vg(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}_=Fn.prototype;_.add=function(n,e){st(this),this.i=null,n=sn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function eu(n,e){st(n),e=sn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function tu(n,e){return st(n),e=sn(n,e),n.g.has(e)}_.forEach=function(n,e){st(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};_.ta=function(){st(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};_.Z=function(n){st(this);let e=[];if(typeof n=="string")tu(this,n)&&(e=e.concat(this.g.get(sn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};_.set=function(n,e){return st(this),this.i=null,n=sn(this,n),tu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};_.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function nu(n,e,t){eu(n,e),0<t.length&&(n.i=null,n.g.set(sn(n,e),Qs(t)),n.h+=t.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function sn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Cg(n,e){e&&!n.j&&(st(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(eu(this,r),nu(this,i,t))},n)),n.j=e}var Pg=class{constructor(n,e){this.g=n,this.map=e}};function ru(n){this.l=n||Sg,P.PerformanceNavigationTiming?(n=P.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(P.g&&P.g.Ka&&P.g.Ka()&&P.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sg=10;function iu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function su(n){return n.h?1:n.g?n.g.size:0}function Es(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function lo(n,e){n.g?n.g.add(e):n.h=e}function ou(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}ru.prototype.cancel=function(){if(this.i=au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function au(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Qs(n.i)}var bg=class{stringify(n){return P.JSON.stringify(n,void 0)}parse(n){return P.JSON.parse(n,void 0)}};function kg(){this.g=new bg}function Dg(n,e,t){const r=t||"";try{Yl(n,function(i,s){let o=i;tr(i)&&(o=no(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Vg(n,e){const t=new ci;if(P.Image){const r=new Image;r.onload=_r(Er,t,r,"TestLoadImage: loaded",!0,e),r.onerror=_r(Er,t,r,"TestLoadImage: error",!1,e),r.onabort=_r(Er,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=_r(Er,t,r,"TestLoadImage: timeout",!1,e),P.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Er(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function pi(n){this.l=n.ec||null,this.j=n.ob||!1}Q(pi,oo);pi.prototype.g=function(){return new mi(this.l,this.j)};pi.prototype.i=function(n){return function(){return n}}({});function mi(n,e){$.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=uo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(mi,$);var uo=0;_=mi.prototype;_.open=function(n,e){if(this.readyState!=uo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Bn(this)};_.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||P).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ar(this)),this.readyState=uo};_.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function cu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}_.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ar(this):Bn(this),this.readyState==3&&cu(this)}};_.Za=function(n){this.g&&(this.response=this.responseText=n,ar(this))};_.Ya=function(n){this.g&&(this.response=n,ar(this))};_.ka=function(){this.g&&ar(this)};function ar(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Bn(n)}_.setRequestHeader=function(n,e){this.v.append(n,e)};_.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Bn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Ng=P.JSON.parse;function B(n){$.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lu,this.L=this.M=!1}Q(B,$);var lu="",Lg=/^https?$/i,Og=["POST","PUT"];_=B.prototype;_.Oa=function(n){this.M=n};_.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ms.g(),this.C=this.u?Fa(this.u):Fa(ms),this.g.onreadystatechange=se(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){ja(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=P.FormData&&n instanceof P.FormData,!(0<=Rl(Og,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{du(this),0<this.B&&((this.L=Mg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=se(this.ua,this)):this.A=so(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){ja(this,s)}};function Mg(n){return Wt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}_.ua=function(){typeof $s<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Z(this,"timeout"),this.abort(8))};function ja(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,uu(n),gi(n)}function uu(n){n.F||(n.F=!0,Z(n,"complete"),Z(n,"error"))}_.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Z(this,"complete"),Z(this,"abort"),gi(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gi(this,!0)),B.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?hu(this):this.kb())};_.kb=function(){hu(this)};function hu(n){if(n.h&&typeof $s<"u"&&(!n.C[1]||we(n)!=4||n.da()!=2)){if(n.v&&we(n)==4)so(n.La,0,n);else if(Z(n,"readystatechange"),we(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(Zl)[1]||null;!i&&P.self&&P.self.location&&(i=P.self.location.protocol.slice(0,-1)),r=!Lg.test(i?i.toLowerCase():"")}t=r}if(t)Z(n,"complete"),Z(n,"success");else{n.m=6;try{var s=2<we(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",uu(n)}}finally{gi(n)}}}}function gi(n,e){if(n.g){du(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Z(n,"ready");try{t.onreadystatechange=r}catch{}}}function du(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(P.clearTimeout(n.A),n.A=null)}_.isActive=function(){return!!this.g};function we(n){return n.g?n.g.readyState:0}_.da=function(){try{return 2<we(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Ng(e)}};function Ka(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case lu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function xg(n){const e={};n=(n.g&&2<=we(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Nn(n[r]))continue;var t=cg(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}tg(e,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fu(n){let e="";return Xs(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function ho(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=fu(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):M(n,e,t))}function dn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function pu(n){this.Ga=0,this.j=[],this.l=new ci,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=dn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=dn("baseRetryDelayMs",5e3,n),this.hb=dn("retryDelaySeedMs",1e4,n),this.eb=dn("forwardChannelMaxRetries",2,n),this.xa=dn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new ru(n&&n.concurrentRequestLimit),this.Ja=new kg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=pu.prototype;_.ra=8;_.H=1;function fo(n){if(mu(n),n.H==3){var e=n.W++,t=Fe(n.I);if(M(t,"SID",n.K),M(t,"RID",e),M(t,"TYPE","terminate"),cr(n,t),e=new sr(n,n.l,e),e.L=2,e.A=fi(Fe(t)),t=!1,P.navigator&&P.navigator.sendBeacon)try{t=P.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&P.Image&&(new Image().src=e.A,t=!0),t||(e.g=Tu(e.l,null),e.g.ha(e.A)),e.G=Date.now(),or(e)}Iu(n)}function _i(n){n.g&&(mo(n),n.g.cancel(),n.g=null)}function mu(n){_i(n),n.u&&(P.clearTimeout(n.u),n.u=null),jr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&P.clearTimeout(n.m),n.m=null)}function yi(n){if(!iu(n.i)&&!n.m){n.m=!0;var e=n.Na;On||xl(),Mn||(On(),Mn=!0),ro.add(e,n),n.C=0}}function Ug(n,e){return su(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=rr(se(n.Na,n,e),vu(n,n.C)),n.C++,!0)}_.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new sr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=bl(s),kl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=gu(this,i,e),t=Fe(this.I),M(t,"RID",n),M(t,"CVER",22),this.F&&M(t,"X-HTTP-Session-Id",this.F),cr(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(fu(s)))+"&"+e:this.o&&ho(t,this.o,s)),lo(this.i,i),this.bb&&M(t,"TYPE","init"),this.P?(M(t,"$req",e),M(t,"SID","null"),i.aa=!0,_s(i,t,null)):_s(i,t,e),this.H=2}}else this.H==3&&(n?Ga(this,n):this.j.length==0||iu(this.i)||Ga(this))};function Ga(n,e){var t;e?t=e.m:t=n.W++;const r=Fe(n.I);M(r,"SID",n.K),M(r,"RID",t),M(r,"AID",n.V),cr(n,r),n.o&&n.s&&ho(r,n.o,n.s),t=new sr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=gu(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),lo(n.i,t),_s(t,r,e)}function cr(n,e){n.na&&Xs(n.na,function(t,r){M(e,r,t)}),n.h&&Yl({},function(t,r){M(e,r,t)})}function gu(n,e,t){t=Math.min(n.j.length,t);var r=n.h?se(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{Dg(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function _u(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;On||xl(),Mn||(On(),Mn=!0),ro.add(e,n),n.A=0}}function po(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=rr(se(n.Ma,n),vu(n,n.A)),n.A++,!0)}_.Ma=function(){if(this.u=null,yu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=rr(se(this.jb,this),n)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ce(10),_i(this),yu(this))};function mo(n){n.B!=null&&(P.clearTimeout(n.B),n.B=null)}function yu(n){n.g=new sr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Fe(n.wa);M(e,"RID","rpc"),M(e,"SID",n.K),M(e,"AID",n.V),M(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&M(e,"TO",n.qa),M(e,"TYPE","xmlhttp"),cr(n,e),n.o&&n.s&&ho(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.A=fi(Fe(e)),t.u=null,t.S=!0,$l(t,n)}_.ib=function(){this.v!=null&&(this.v=null,_i(this),po(this),ce(19))};function jr(n){n.v!=null&&(P.clearTimeout(n.v),n.v=null)}function Eu(n,e){var t=null;if(n.g==e){jr(n),mo(n),n.g=null;var r=2}else if(Es(n.i,e))t=e.F,ou(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var i=n.C;r=li(),Z(r,new Kl(r,t)),yi(n)}else _u(n);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&Ug(n,e)||r==2&&po(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:pt(n,5);break;case 4:pt(n,10);break;case 3:pt(n,6);break;default:pt(n,2)}}}function vu(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function pt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=se(n.pb,n);t||(t=new yt("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||Br(t,"https"),fi(t)),Vg(t.toString(),r)}else ce(2);n.H=0,n.h&&n.h.za(e),Iu(n),mu(n)}_.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ce(2)):(this.l.info("Failed to ping google.com"),ce(1))};function Iu(n){if(n.H=0,n.ma=[],n.h){const e=au(n.i);(e.length!=0||n.j.length!=0)&&(La(n.ma,e),La(n.ma,n.j),n.i.i.length=0,Qs(n.j),n.j.length=0),n.h.ya()}}function wu(n,e,t){var r=t instanceof yt?Fe(t):new yt(t);if(r.g!="")e&&(r.g=e+"."+r.g),qr(r,r.m);else{var i=P.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new yt(null);r&&Br(s,r),e&&(s.g=e),i&&qr(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&M(r,t,e),M(r,"VER",n.ra),cr(n,r),r}function Tu(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n.Ha&&!n.va?new B(new pi({ob:t})):new B(n.va),e.Oa(n.J),e}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function Au(){}_=Au.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function Kr(){if(Wt&&!(10<=Number(Xm)))throw Error("Environmental error: no available transport.")}Kr.prototype.g=function(n,e){return new de(n,e)};function de(n,e){$.call(this),this.g=new pu(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Nn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new on(this)}Q(de,$);de.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ce(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=wu(n,null,n.Y),yi(n)};de.prototype.close=function(){fo(this.g)};de.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=no(n),n=t);e.j.push(new Pg(e.fb++,n)),e.H==3&&yi(e)};de.prototype.N=function(){this.g.h=null,delete this.j,fo(this.g),delete this.g,de.$.N.call(this)};function Ru(n){ao.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Q(Ru,ao);function Cu(){co.call(this),this.status=1}Q(Cu,co);function on(n){this.g=n}Q(on,Au);on.prototype.Ba=function(){Z(this.g,"a")};on.prototype.Aa=function(n){Z(this.g,new Ru(n))};on.prototype.za=function(n){Z(this.g,new Cu)};on.prototype.ya=function(){Z(this.g,"b")};function Fg(){this.blockSize=-1}function Ee(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Q(Ee,Fg);Ee.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $i(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Ee.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)$i(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){$i(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){$i(this,r),i=0;break}}this.h=i,this.i+=e};Ee.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function L(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var Bg={};function go(n){return-128<=n&&128>n?$m(n,function(e){return new L([e|0],0>e?-1:0)}):new L([n|0],0>n?-1:0)}function Te(n){if(isNaN(n)||!isFinite(n))return Bt;if(0>n)return X(Te(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=vs;return new L(e,0)}function Pu(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return X(Pu(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Te(Math.pow(e,8)),r=Bt,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Te(Math.pow(e,s)),r=r.R(s).add(Te(o))):(r=r.R(t),r=r.add(Te(o)))}return r}var vs=4294967296,Bt=go(0),Is=go(1),za=go(16777216);_=L.prototype;_.ea=function(){if(pe(this))return-X(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:vs+r)*e,e*=vs}return n};_.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(xe(this))return"0";if(pe(this))return"-"+X(this).toString(n);for(var e=Te(Math.pow(n,6)),t=this,r="";;){var i=zr(t,e).g;t=Gr(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,xe(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};_.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function xe(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function pe(n){return n.h==-1}_.X=function(n){return n=Gr(this,n),pe(n)?-1:xe(n)?0:1};function X(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new L(t,~n.h).add(Is)}_.abs=function(){return pe(this)?X(this):this};_.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new L(t,t[t.length-1]&-2147483648?-1:0)};function Gr(n,e){return n.add(X(e))}_.R=function(n){if(xe(this)||xe(n))return Bt;if(pe(this))return pe(n)?X(this).R(X(n)):X(X(this).R(n));if(pe(n))return X(this.R(X(n)));if(0>this.X(za)&&0>n.X(za))return Te(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,vr(t,2*r+2*i),t[2*r+2*i+1]+=s*c,vr(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,vr(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,vr(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new L(t,0)};function vr(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function fn(n,e){this.g=n,this.h=e}function zr(n,e){if(xe(e))throw Error("division by zero");if(xe(n))return new fn(Bt,Bt);if(pe(n))return e=zr(X(n),e),new fn(X(e.g),X(e.h));if(pe(e))return e=zr(n,X(e)),new fn(X(e.g),e.h);if(30<n.g.length){if(pe(n)||pe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Is,r=e;0>=r.X(n);)t=Wa(t),r=Wa(r);var i=Dt(t,1),s=Dt(r,1);for(r=Dt(r,2),t=Dt(t,2);!xe(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Dt(r,1),t=Dt(t,1)}return e=Gr(n,i.R(e)),new fn(i,e)}for(i=Bt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Te(t),o=s.R(e);pe(o)||0<o.X(n);)t-=r,s=Te(t),o=s.R(e);xe(s)&&(s=Is),i=i.add(s),n=Gr(n,o)}return new fn(i,n)}_.gb=function(n){return zr(this,n).h};_.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new L(t,this.h&n.h)};_.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new L(t,this.h|n.h)};_.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new L(t,this.h^n.h)};function Wa(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new L(t,n.h)}function Dt(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new L(i,n.h)}Kr.prototype.createWebChannel=Kr.prototype.g;de.prototype.send=de.prototype.u;de.prototype.open=de.prototype.m;de.prototype.close=de.prototype.close;ui.NO_ERROR=0;ui.TIMEOUT=8;ui.HTTP_ERROR=6;Gl.COMPLETE="complete";zl.EventType=ir;ir.OPEN="a";ir.CLOSE="b";ir.ERROR="c";ir.MESSAGE="d";$.prototype.listen=$.prototype.O;B.prototype.listenOnce=B.prototype.P;B.prototype.getLastError=B.prototype.Sa;B.prototype.getLastErrorCode=B.prototype.Ia;B.prototype.getStatus=B.prototype.da;B.prototype.getResponseJson=B.prototype.Wa;B.prototype.getResponseText=B.prototype.ja;B.prototype.send=B.prototype.ha;B.prototype.setWithCredentials=B.prototype.Oa;Ee.prototype.digest=Ee.prototype.l;Ee.prototype.reset=Ee.prototype.reset;Ee.prototype.update=Ee.prototype.j;L.prototype.add=L.prototype.add;L.prototype.multiply=L.prototype.R;L.prototype.modulo=L.prototype.gb;L.prototype.compare=L.prototype.X;L.prototype.toNumber=L.prototype.ea;L.prototype.toString=L.prototype.toString;L.prototype.getBits=L.prototype.D;L.fromNumber=Te;L.fromString=Pu;var qg=function(){return new Kr},jg=function(){return li()},Qi=ui,Kg=Gl,Gg=Ct,Ha={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ir=zl,zg=B,Wg=Ee,qt=L;const $a="@firebase/firestore";/**
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
 */class re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}re.UNAUTHENTICATED=new re(null),re.GOOGLE_CREDENTIALS=new re("google-credentials-uid"),re.FIRST_PARTY=new re("first-party-uid"),re.MOCK_USER=new re("mock-user");/**
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
 */let an="10.7.2";/**
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
 */const Tt=new Os("@firebase/firestore");function pn(){return Tt.logLevel}function g(n,...e){if(Tt.logLevel<=D.DEBUG){const t=e.map(_o);Tt.debug(`Firestore (${an}): ${n}`,...t)}}function be(n,...e){if(Tt.logLevel<=D.ERROR){const t=e.map(_o);Tt.error(`Firestore (${an}): ${n}`,...t)}}function Ht(n,...e){if(Tt.logLevel<=D.WARN){const t=e.map(_o);Tt.warn(`Firestore (${an}): ${n}`,...t)}}function _o(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function C(n="Unexpected state"){const e=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: `+n;throw be(e),new Error(e)}function O(n,e){n||C()}function b(n,e){return n}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends qe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ce{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Su{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(re.UNAUTHENTICATED))}shutdown(){}}class $g{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Qg{constructor(e){this.t=e,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new Ce;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ce,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ce)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(O(typeof r.accessToken=="string"),new Su(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return O(e===null||typeof e=="string"),new re(e)}}class Jg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=re.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Jg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(O(typeof t.token=="string"),this.R=t.token,new Yg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function e_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class bu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=e_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function $t(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class z{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return z.fromMillis(Date.now())}static fromDate(e){return z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new z(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new z(0,0))}static max(){return new S(new z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qn{constructor(e,t,r){t===void 0?t=0:t>e.length&&C(),r===void 0?r=e.length-t:r>e.length-t&&C(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class x extends qn{construct(e,t,r){return new x(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new x(t)}static emptyPath(){return new x([])}}const t_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends qn{construct(e,t,r){return new Y(e,t,r)}static isValidIdentifier(e){return t_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Y(t)}static emptyPath(){return new Y([])}}/**
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
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(x.fromString(e))}static fromName(e){return new w(x.fromString(e).popFirst(5))}static empty(){return new w(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&x.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return x.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new x(e.slice()))}}function n_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=S.fromTimestamp(r===1e9?new z(t+1,0):new z(t,r));return new Ye(i,w.empty(),e)}function r_(n){return new Ye(n.readTime,n.key,-1)}class Ye{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ye(S.min(),w.empty(),-1)}static max(){return new Ye(S.max(),w.empty(),-1)}}function i_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=w.comparator(n.documentKey,e.documentKey),t!==0?t:N(n.largestBatchId,e.largestBatchId))}/**
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
 */const s_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class o_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lr(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==s_)throw n;g("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class yo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Ce,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Rn(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Eo(r.target.error);this.V.reject(new Rn(e,i))}}static open(e,t,r,i){try{return new yo(t,e.transaction(i,r))}catch(s){throw new Rn(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(g("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new c_(t)}}class mt{constructor(e,t,r){this.name=e,this.version=t,this.p=r,mt.S(G())===12.2&&be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return g("SimpleDb","Removing database:",e),ht(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Bc())return!1;if(mt.C())return!0;const e=G(),t=mt.S(e),r=0<t&&t<10,i=mt.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Rn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Rn(e,o))},i.onupgradeneeded=s=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=yo.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),m.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(g("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class a_{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ht(this.k.delete())}}class Rn extends y{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ur(n){return n.name==="IndexedDbTransactionError"}class c_{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(g("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ht(r)}add(e){return g("SimpleDb","ADD",this.store.name,e,e),ht(this.store.add(e))}get(e){return ht(this.store.get(e)).next(t=>(t===void 0&&(t=null),g("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return g("SimpleDb","DELETE",this.store.name,e),ht(this.store.delete(e))}count(){return g("SimpleDb","COUNT",this.store.name),ht(this.store.count())}W(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new m((o,a)=>{s.onerror=c=>{a(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,t){g("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.G(i,t)}Z(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=Eo(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new a_(a),l=t(a.primaryKey,a.value,c);if(l instanceof m){const u=l.catch(h=>(c.done(),m.reject(h)));r.push(u)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ht(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Eo(r.target.error);t(i)}})}let Qa=!1;function Eo(n){const e=mt.S(G());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Qa||(Qa=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class vo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}vo._e=-1;function Ei(n){return n==null}function Wr(n){return n===0&&1/n==-1/0}function l_(n){return typeof n=="number"&&Number.isInteger(n)&&!Wr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ja(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ku(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class F{constructor(e,t){this.comparator=e,this.root=t||J.EMPTY}insert(e,t){return new F(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,J.BLACK,null,null))}remove(e){return new F(this.comparator,this.root.remove(e,this.comparator).copy(null,null,J.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wr(this.root,e,this.comparator,!1)}getReverseIterator(){return new wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wr(this.root,e,this.comparator,!0)}}class wr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class J{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??J.RED,this.left=i??J.EMPTY,this.right=s??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new J(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return J.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,r,i,s){return this}insert(e,t,r){return new J(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(e){this.comparator=e,this.data=new F(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xa(this.data.getIterator())}getIteratorFrom(e){return new Xa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ee(this.comparator);return t.data=e,t}}class Xa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class he{constructor(e){this.fields=e,e.sort(Y.comparator)}static empty(){return new he([])}unionWith(e){let t=new ee(Y.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new he(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $t(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Du extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Du("Invalid base64 string: "+s):s}}(e);return new ae(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ae.EMPTY_BYTE_STRING=new ae("");const u_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(n){if(O(!!n),typeof n=="string"){let e=0;const t=u_.exec(n);if(O(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:j(n.seconds),nanos:j(n.nanos)}}function j(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function At(n){return typeof n=="string"?ae.fromBase64String(n):ae.fromUint8Array(n)}/**
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
 */function Io(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function wo(n){const e=n.mapValue.fields.__previous_value__;return Io(e)?wo(e):e}function jn(n){const e=Ze(n.mapValue.fields.__local_write_time__.timestampValue);return new z(e.seconds,e.nanos)}/**
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
 */class h_{constructor(e,t,r,i,s,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Kn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Io(n)?4:d_(n)?9007199254740991:10:C()}function ke(n,e){if(n===e)return!0;const t=Rt(n);if(t!==Rt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jn(n).isEqual(jn(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ze(i.timestampValue),a=Ze(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return At(i.bytesValue).isEqual(At(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return j(i.geoPointValue.latitude)===j(s.geoPointValue.latitude)&&j(i.geoPointValue.longitude)===j(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return j(i.integerValue)===j(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=j(i.doubleValue),a=j(s.doubleValue);return o===a?Wr(o)===Wr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return $t(n.arrayValue.values||[],e.arrayValue.values||[],ke);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ja(o)!==Ja(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ke(o[c],a[c])))return!1;return!0}(n,e);default:return C()}}function Gn(n,e){return(n.values||[]).find(t=>ke(t,e))!==void 0}function Qt(n,e){if(n===e)return 0;const t=Rt(n),r=Rt(e);if(t!==r)return N(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=j(s.integerValue||s.doubleValue),c=j(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Ya(n.timestampValue,e.timestampValue);case 4:return Ya(jn(n),jn(e));case 5:return N(n.stringValue,e.stringValue);case 6:return function(s,o){const a=At(s),c=At(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=N(a[l],c[l]);if(u!==0)return u}return N(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=N(j(s.latitude),j(o.latitude));return a!==0?a:N(j(s.longitude),j(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Qt(a[l],c[l]);if(u)return u}return N(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Tr.mapValue&&o===Tr.mapValue)return 0;if(s===Tr.mapValue)return 1;if(o===Tr.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=N(c[h],u[h]);if(d!==0)return d;const f=Qt(a[c[h]],l[u[h]]);if(f!==0)return f}return N(c.length,u.length)}(n.mapValue,e.mapValue);default:throw C()}}function Ya(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Ze(n),r=Ze(e),i=N(t.seconds,r.seconds);return i!==0?i:N(t.nanos,r.nanos)}function Jt(n){return ws(n)}function ws(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ze(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return At(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return w.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=ws(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ws(t.fields[o])}`;return i+"}"}(n.mapValue):C()}function Za(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ts(n){return!!n&&"integerValue"in n}function To(n){return!!n&&"arrayValue"in n}function ec(n){return!!n&&"nullValue"in n}function tc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function br(n){return!!n&&"mapValue"in n}function Cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Cn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function d_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!br(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cn(t)}setAll(e){let t=Y.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Cn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());br(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];br(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Pt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ue(Cn(this.value))}}function Vu(n){const e=[];return Pt(n.fields,(t,r)=>{const i=new Y([t]);if(br(r)){const s=Vu(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new he(e)}/**
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
 */class ie{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ie(e,0,S.min(),S.min(),S.min(),ue.empty(),0)}static newFoundDocument(e,t,r,i){return new ie(e,1,t,S.min(),r,i,0)}static newNoDocument(e,t){return new ie(e,2,t,S.min(),S.min(),ue.empty(),0)}static newUnknownDocument(e,t){return new ie(e,3,t,S.min(),S.min(),ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hr{constructor(e,t){this.position=e,this.inclusive=t}}function nc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),t.key):r=Qt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function rc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ke(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class zn{constructor(e,t="asc"){this.field=e,this.dir=t}}function f_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Nu{}class K extends Nu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new m_(e,t,r):t==="array-contains"?new y_(e,r):t==="in"?new E_(e,r):t==="not-in"?new v_(e,r):t==="array-contains-any"?new I_(e,r):new K(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new g_(e,r):new __(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qt(t,this.value)):t!==null&&Rt(this.value)===Rt(t)&&this.matchesComparison(Qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ve extends Nu{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new ve(e,t)}matches(e){return Lu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Lu(n){return n.op==="and"}function Ou(n){return p_(n)&&Lu(n)}function p_(n){for(const e of n.filters)if(e instanceof ve)return!1;return!0}function As(n){if(n instanceof K)return n.field.canonicalString()+n.op.toString()+Jt(n.value);if(Ou(n))return n.filters.map(e=>As(e)).join(",");{const e=n.filters.map(t=>As(t)).join(",");return`${n.op}(${e})`}}function Mu(n,e){return n instanceof K?function(r,i){return i instanceof K&&r.op===i.op&&r.field.isEqual(i.field)&&ke(r.value,i.value)}(n,e):n instanceof ve?function(r,i){return i instanceof ve&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Mu(o,i.filters[a]),!0):!1}(n,e):void C()}function xu(n){return n instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${Jt(t.value)}`}(n):n instanceof ve?function(t){return t.op.toString()+" {"+t.getFilters().map(xu).join(" ,")+"}"}(n):"Filter"}class m_ extends K{constructor(e,t,r){super(e,t,r),this.key=w.fromName(r.referenceValue)}matches(e){const t=w.comparator(e.key,this.key);return this.matchesComparison(t)}}class g_ extends K{constructor(e,t){super(e,"in",t),this.keys=Uu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class __ extends K{constructor(e,t){super(e,"not-in",t),this.keys=Uu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Uu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>w.fromName(r.referenceValue))}class y_ extends K{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return To(t)&&Gn(t.arrayValue,this.value)}}class E_ extends K{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gn(this.value.arrayValue,t)}}class v_ extends K{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gn(this.value.arrayValue,t)}}class I_ extends K{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!To(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Gn(this.value.arrayValue,r))}}/**
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
 */class w_{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function ic(n,e=null,t=[],r=[],i=null,s=null,o=null){return new w_(n,e,t,r,i,s,o)}function Ao(n){const e=b(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>As(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ei(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Jt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Jt(r)).join(",")),e.ce=t}return e.ce}function Ro(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!f_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Mu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rc(n.startAt,e.startAt)&&rc(n.endAt,e.endAt)}function Rs(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class cn{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function T_(n,e,t,r,i,s,o,a){return new cn(n,e,t,r,i,s,o,a)}function vi(n){return new cn(n)}function sc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fu(n){return n.collectionGroup!==null}function Pn(n){const e=b(n);if(e.le===null){e.le=[];const t=new Set;for(const s of e.explicitOrderBy)e.le.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ee(Y.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.le.push(new zn(s,r))}),t.has(Y.keyField().canonicalString())||e.le.push(new zn(Y.keyField(),r))}return e.le}function Pe(n){const e=b(n);return e.he||(e.he=A_(e,Pn(n))),e.he}function A_(n,e){if(n.limitType==="F")return ic(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new zn(i.field,s)});const t=n.endAt?new Hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hr(n.startAt.position,n.startAt.inclusive):null;return ic(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cs(n,e){const t=n.filters.concat([e]);return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ps(n,e,t){return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ii(n,e){return Ro(Pe(n),Pe(e))&&n.limitType===e.limitType}function Bu(n){return`${Ao(Pe(n))}|lt:${n.limitType}`}function Vt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>xu(i)).join(", ")}]`),Ei(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Jt(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Jt(i)).join(",")),`Target(${r})`}(Pe(n))}; limitType=${n.limitType})`}function wi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Pn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=nc(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Pn(r),i)||r.endAt&&!function(o,a,c){const l=nc(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Pn(r),i))}(n,e)}function R_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qu(n){return(e,t)=>{let r=!1;for(const i of Pn(n)){const s=C_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function C_(n,e,t){const r=n.field.isKeyField()?w.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?Qt(c,l):C()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return C()}}/**
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
 */class ln{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ku(this.inner)}size(){return this.innerSize}}/**
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
 */const P_=new F(w.comparator);function Be(){return P_}const ju=new F(w.comparator);function En(...n){let e=ju;for(const t of n)e=e.insert(t.key,t);return e}function Ku(n){let e=ju;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function gt(){return Sn()}function Gu(){return Sn()}function Sn(){return new ln(n=>n.toString(),(n,e)=>n.isEqual(e))}const S_=new F(w.comparator),b_=new ee(w.comparator);function k(...n){let e=b_;for(const t of n)e=e.add(t);return e}const k_=new ee(N);function D_(){return k_}/**
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
 */function zu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(e)?"-0":e}}function Wu(n){return{integerValue:""+n}}function V_(n,e){return l_(e)?Wu(e):zu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ti{constructor(){this._=void 0}}function N_(n,e,t){return n instanceof Wn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Io(s)&&(s=wo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Xt?$u(n,e):n instanceof Yt?Qu(n,e):function(i,s){const o=Hu(i,s),a=oc(o)+oc(i.Ie);return Ts(o)&&Ts(i.Ie)?Wu(a):zu(i.serializer,a)}(n,e)}function L_(n,e,t){return n instanceof Xt?$u(n,e):n instanceof Yt?Qu(n,e):t}function Hu(n,e){return n instanceof $r?function(r){return Ts(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Wn extends Ti{}class Xt extends Ti{constructor(e){super(),this.elements=e}}function $u(n,e){const t=Ju(e);for(const r of n.elements)t.some(i=>ke(i,r))||t.push(r);return{arrayValue:{values:t}}}class Yt extends Ti{constructor(e){super(),this.elements=e}}function Qu(n,e){let t=Ju(e);for(const r of n.elements)t=t.filter(i=>!ke(i,r));return{arrayValue:{values:t}}}class $r extends Ti{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function oc(n){return j(n.integerValue||n.doubleValue)}function Ju(n){return To(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Co{constructor(e,t){this.field=e,this.transform=t}}function O_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Xt&&i instanceof Xt||r instanceof Yt&&i instanceof Yt?$t(r.elements,i.elements,ke):r instanceof $r&&i instanceof $r?ke(r.Ie,i.Ie):r instanceof Wn&&i instanceof Wn}(n.transform,e.transform)}class M_{constructor(e,t){this.version=e,this.transformResults=t}}class ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ye}static exists(e){return new ye(void 0,e)}static updateTime(e){return new ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ai{}function Xu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Po(n.key,ye.none()):new hr(n.key,n.data,ye.none());{const t=n.data,r=ue.empty();let i=new ee(Y.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ot(n.key,r,new he(i.toArray()),ye.none())}}function x_(n,e,t){n instanceof hr?function(i,s,o){const a=i.value.clone(),c=cc(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof ot?function(i,s,o){if(!kr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=cc(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Yu(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function bn(n,e,t,r){return n instanceof hr?function(s,o,a,c){if(!kr(s.precondition,o))return a;const l=s.value.clone(),u=lc(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof ot?function(s,o,a,c){if(!kr(s.precondition,o))return a;const l=lc(s.fieldTransforms,c,o),u=o.data;return u.setAll(Yu(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return kr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function U_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Hu(r.transform,i||null);s!=null&&(t===null&&(t=ue.empty()),t.set(r.field,s))}return t||null}function ac(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$t(r,i,(s,o)=>O_(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hr extends Ai{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ot extends Ai{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Yu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function cc(n,e,t){const r=new Map;O(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,L_(o,a,t[i]))}return r}function lc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,N_(s,o,e))}return r}class Po extends Ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class F_ extends Ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class B_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&x_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=bn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=bn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Gu();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Xu(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),k())}isEqual(e){return this.batchId===e.batchId&&$t(this.mutations,e.mutations,(t,r)=>ac(t,r))&&$t(this.baseMutations,e.baseMutations,(t,r)=>ac(t,r))}}class So{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){O(e.mutations.length===r.length);let i=function(){return S_}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new So(e,t,r,i)}}/**
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
 */class q_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class j_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var q,V;function K_(n){switch(n){default:return C();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Zu(n){if(n===void 0)return be("GRPC error has no .code"),p.UNKNOWN;switch(n){case q.OK:return p.OK;case q.CANCELLED:return p.CANCELLED;case q.UNKNOWN:return p.UNKNOWN;case q.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case q.INTERNAL:return p.INTERNAL;case q.UNAVAILABLE:return p.UNAVAILABLE;case q.UNAUTHENTICATED:return p.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case q.NOT_FOUND:return p.NOT_FOUND;case q.ALREADY_EXISTS:return p.ALREADY_EXISTS;case q.PERMISSION_DENIED:return p.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case q.ABORTED:return p.ABORTED;case q.OUT_OF_RANGE:return p.OUT_OF_RANGE;case q.UNIMPLEMENTED:return p.UNIMPLEMENTED;case q.DATA_LOSS:return p.DATA_LOSS;default:return C()}}(V=q||(q={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function G_(){return new TextEncoder}/**
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
 */const z_=new qt([4294967295,4294967295],0);function uc(n){const e=G_().encode(n),t=new Wg;return t.update(e),new Uint8Array(t.digest())}function hc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qt([t,r],0),new qt([i,s],0)]}class bo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new vn(`Invalid padding: ${t}`);if(r<0)throw new vn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new vn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=qt.fromNumber(this.Te)}de(e,t,r){let i=e.add(t.multiply(qt.fromNumber(r)));return i.compare(z_)===1&&(i=new qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=uc(e),[r,i]=hc(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new bo(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=uc(e),[r,i]=hc(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ri{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,dr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ri(S.min(),i,new F(N),Be(),k())}}class dr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new dr(r,t,k(),k(),k())}}/**
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
 */class Dr{constructor(e,t,r,i){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=i}}class eh{constructor(e,t){this.targetId=e,this.fe=t}}class th{constructor(e,t,r=ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class dc{constructor(){this.ge=0,this.pe=pc(),this.ye=ae.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=k(),t=k(),r=k();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:C()}}),new dr(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=pc()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,O(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class W_{constructor(e){this.Le=e,this.ke=new Map,this.qe=Be(),this.Qe=fc(),this.Ke=new F(N)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:C()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.fe.count,i=this.Ye(t);if(i){const s=i.target;if(Rs(s))if(r===0){const o=new w(s.path);this.We(t,o,ie.newNoDocument(o,S.min()))}else O(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,l)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=At(r).toUint8Array()}catch(c){if(c instanceof Du)return Ht("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new bo(o,i,s)}catch(c){return Ht(c instanceof vn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Rs(a.target)){const c=new w(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,ie.newNoDocument(c,e))}s.De&&(t.set(o,s.ve()),s.Fe())}});let r=k();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Ri(e,t,this.Ke,this.qe,r);return this.qe=Be(),this.Qe=fc(),this.Ke=new F(N),i}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new dc,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new ee(N),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||g("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new dc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function fc(){return new F(w.comparator)}function pc(){return new F(w.comparator)}const H_={asc:"ASCENDING",desc:"DESCENDING"},$_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Q_={and:"AND",or:"OR"};class J_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ss(n,e){return n.useProto3Json||Ei(e)?e:{value:e}}function Qr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function X_(n,e){return Qr(n,e.toTimestamp())}function Se(n){return O(!!n),S.fromTimestamp(function(t){const r=Ze(t);return new z(r.seconds,r.nanos)}(n))}function ko(n,e){return bs(n,e).canonicalString()}function bs(n,e){const t=function(i){return new x(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function rh(n){const e=x.fromString(n);return O(ch(e)),e}function ks(n,e){return ko(n.databaseId,e.path)}function Ji(n,e){const t=rh(e);if(t.get(1)!==n.databaseId.projectId)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new w(sh(t))}function ih(n,e){return ko(n.databaseId,e)}function Y_(n){const e=rh(n);return e.length===4?x.emptyPath():sh(e)}function Ds(n){return new x(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sh(n){return O(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function mc(n,e,t){return{name:ks(n,e),fields:t.value.mapValue.fields}}function Z_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:C()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(O(u===void 0||typeof u=="string"),ae.fromBase64String(u||"")):(O(u===void 0||u instanceof Uint8Array),ae.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?p.UNKNOWN:Zu(l.code);return new y(u,l.message||"")}(o);t=new th(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ji(n,r.document.name),s=Se(r.document.updateTime),o=r.document.createTime?Se(r.document.createTime):S.min(),a=new ue({mapValue:{fields:r.document.fields}}),c=ie.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];t=new Dr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ji(n,r.document),s=r.readTime?Se(r.readTime):S.min(),o=ie.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Dr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ji(n,r.document),s=r.removedTargetIds||[];t=new Dr([],s,i,null)}else{if(!("filter"in e))return C();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new j_(i,s),a=r.targetId;t=new eh(a,o)}}return t}function ey(n,e){let t;if(e instanceof hr)t={update:mc(n,e.key,e.value)};else if(e instanceof Po)t={delete:ks(n,e.key)};else if(e instanceof ot)t={update:mc(n,e.key,e.data),updateMask:ly(e.fieldMask)};else{if(!(e instanceof F_))return C();t={verify:ks(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Wn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Xt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Yt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $r)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw C()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:X_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:C()}(n,e.precondition)),t}function ty(n,e){return n&&n.length>0?(O(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Se(i.updateTime):Se(s);return o.isEqual(S.min())&&(o=Se(s)),new M_(o,i.transformResults||[])}(t,e))):[]}function ny(n,e){return{documents:[ih(n,e.path)]}}function ry(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ih(n,i);const s=function(l){if(l.length!==0)return ah(ve.create(l,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Nt(d.field),direction:oy(d.dir)}}(u))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Ss(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:t,parent:i}}function iy(n){let e=Y_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){O(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(h){const d=oh(h);return d instanceof ve&&Ou(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(I){return new zn(Lt(I.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ei(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Hr(f,d)}(t.startAt));let l=null;return t.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Hr(f,d)}(t.endAt)),T_(e,i,o,s,a,"F",c,l)}function sy(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function oh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Lt(t.unaryFilter.field);return K.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Lt(t.unaryFilter.field);return K.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Lt(t.unaryFilter.field);return K.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Lt(t.unaryFilter.field);return K.create(o,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(n):n.fieldFilter!==void 0?function(t){return K.create(Lt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ve.create(t.compositeFilter.filters.map(r=>oh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op))}(n):C()}function oy(n){return H_[n]}function ay(n){return $_[n]}function cy(n){return Q_[n]}function Nt(n){return{fieldPath:n.canonicalString()}}function Lt(n){return Y.fromServerFormat(n.fieldPath)}function ah(n){return n instanceof K?function(t){if(t.op==="=="){if(tc(t.value))return{unaryFilter:{field:Nt(t.field),op:"IS_NAN"}};if(ec(t.value))return{unaryFilter:{field:Nt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tc(t.value))return{unaryFilter:{field:Nt(t.field),op:"IS_NOT_NAN"}};if(ec(t.value))return{unaryFilter:{field:Nt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nt(t.field),op:ay(t.op),value:t.value}}}(n):n instanceof ve?function(t){const r=t.getFilters().map(i=>ah(i));return r.length===1?r[0]:{compositeFilter:{op:cy(t.op),filters:r}}}(n):C()}function ly(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ch(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class He{constructor(e,t,r,i,s=S.min(),o=S.min(),a=ae.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new He(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uy{constructor(e){this.ct=e}}function hy(n){const e=iy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ps(e,e.limit,"L"):e}/**
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
 */class dy{constructor(){this._n=new fy}addToCollectionParentIndex(e,t){return this._n.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}deleteAllFieldIndexes(e){return m.resolve()}createTargetIndexes(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Ye.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Ye.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class fy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ee(x.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ee(x.comparator)).toArray()}}/**
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
 */class Zt{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Zt(0)}static Bn(){return new Zt(-1)}}/**
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
 */class py{constructor(){this.changes=new ln(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class my{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class gy{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&bn(r.mutation,i,he.empty(),z.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,k()).next(()=>r))}getLocalViewOfDocuments(e,t,r=k()){const i=gt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=En();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=gt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,k()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Be();const o=Sn(),a=function(){return Sn()}();return t.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof ot)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),bn(u.mutation,l,u.mutation.getFieldMask(),z.now())):o.set(l.key,he.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new my(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Sn();let i=new F((o,a)=>o-a),s=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=r.get(c)||he.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||k()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Gu();u.forEach(d=>{if(!s.has(d)){const f=Xu(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return w.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(gt());let a=-1,c=s;return o.next(l=>m.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?m.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,k())).next(u=>({batchId:a,changes:Ku(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new w(t)).next(r=>{let i=En();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=En();return this.indexManager.getCollectionParents(e,s).next(a=>m.forEach(a,c=>{const l=function(h,d){return new cn(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ie.newInvalidDocument(u)))});let a=En();return o.forEach((c,l)=>{const u=s.get(c);u!==void 0&&bn(u.mutation,l,he.empty(),z.now()),wi(t,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class _y{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return m.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Se(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:hy(i.bundledQuery),readTime:Se(i.readTime)}}(t)),m.resolve()}}/**
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
 */class yy{constructor(){this.overlays=new F(w.comparator),this.hr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=gt();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=gt(),s=t.length+1,o=new w(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new F((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=gt(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=gt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return m.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new q_(t,r));let s=this.hr.get(t);s===void 0&&(s=k(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}}/**
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
 */class Do{constructor(){this.Pr=new ee(H.Ir),this.Tr=new ee(H.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new H(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new H(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new w(new x([])),r=new H(t,e),i=new H(t,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new w(new x([])),r=new H(t,e),i=new H(t,e+1);let s=k();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new H(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class H{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return w.comparator(e.key,t.key)||N(e.pr,t.pr)}static Er(e,t){return N(e.pr,t.pr)||w.comparator(e.key,t.key)}}/**
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
 */class Ey{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new ee(H.Ir)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new B_(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new H(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new H(t,0),i=new H(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ee(N);return t.forEach(i=>{const s=new H(i,0),o=new H(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),m.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new H(new w(s),0);let a=new ee(N);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.pr)),!0)},o),m.resolve(this.Dr(a))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){O(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return m.forEach(t.mutations,i=>{const s=new H(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new H(t,0),i=this.wr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vy{constructor(e){this.vr=e,this.docs=function(){return new F(w.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():ie.newInvalidDocument(t))}getEntries(e,t){let r=Be();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ie.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Be();const o=t.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||i_(r_(u),r)<=0||(i.has(u.key)||wi(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){C()}Fr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Iy(this)}getSize(e){return m.resolve(this.size)}}class Iy extends py{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class wy{constructor(e){this.persistence=e,this.Mr=new ln(t=>Ao(t),Ro),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Do,this.targetCount=0,this.Br=Zt.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),m.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new Zt(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.qn(t),m.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Nr.containsKey(t))}}/**
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
 */class Ty{constructor(e,t){this.Lr={},this.overlays={},this.kr=new vo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new wy(this),this.indexManager=new dy,this.remoteDocumentCache=function(i){return new vy(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new uy(t),this.$r=new _y(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Lr[e.toKey()];return r||(r=new Ey(t,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);const i=new Ay(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return m.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,t)))}}class Ay extends o_{constructor(e){super(),this.currentSequenceNumber=e}}class Vo{constructor(e){this.persistence=e,this.zr=new Do,this.jr=null}static Hr(e){return new Vo(e)}get Jr(){if(this.jr)return this.jr;throw C()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),m.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Jr,r=>{const i=w.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,S.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return m.or([()=>m.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class No{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=k(),i=k();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new No(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Ry{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Cy{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return cd()?8:mt.v(G())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ji(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ry;return this.Ji(e,t,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,t,o,a.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(pn()<=D.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",Vt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),m.resolve()):(pn()<=D.DEBUG&&g("QueryEngine","Query:",Vt(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(pn()<=D.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",Vt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pe(t))):m.resolve())}ji(e,t){if(sc(t))return m.resolve(null);let r=Pe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ps(t,null,"F"),r=Pe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=k(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(t,a);return this.Xi(t,l,o,c.readTime)?this.ji(e,Ps(t,null,"F")):this.es(e,l,t,c)}))})))}Hi(e,t,r,i){return sc(t)||i.isEqual(S.min())?m.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(t,s);return this.Xi(t,o,r,i)?m.resolve(null):(pn()<=D.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vt(t)),this.es(e,o,t,n_(i,-1)).next(a=>a))})}Zi(e,t){let r=new ee(qu(e));return t.forEach((i,s)=>{wi(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return pn()<=D.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",Vt(t)),this.zi.getDocumentsMatchingQuery(e,t,Ye.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Py{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new F(N),this.rs=new ln(s=>Ao(s),Ro),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gy(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function Sy(n,e,t,r){return new Py(n,e,t,r)}async function lh(n,e){const t=b(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=k();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function by(n,e){const t=b(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=m.resolve();return d.forEach(I=>{f=f.next(()=>u.getEntry(c,I)).next(T=>{const E=l.docVersions.get(I);O(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=k();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function uh(n){const e=b(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function ky(n,e){const t=b(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.Qr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ae.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(T,E,v){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,f,u)&&a.push(t.Qr.updateTargetData(s,f))});let c=Be(),l=k();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Dy(s,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(S.min())){const u=t.Qr.getLastRemoteSnapshotVersion(s).next(h=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(t.ns=i,s))}function Dy(n,e,t){let r=k(),i=k();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Be();return t.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):g("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:i}})}function Vy(n,e){const t=b(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ny(n,e){const t=b(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.Qr.allocateTargetId(r).next(o=>(i=new He(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function Vs(n,e,t){const r=b(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ur(o))throw o;g("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function gc(n,e,t){const r=b(n);let i=S.min(),s=k();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=b(c),d=h.rs.get(u);return d!==void 0?m.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,Pe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,t?i:S.min(),t?s:k())).next(a=>(Ly(r,R_(e),a),{documents:a,hs:s})))}function Ly(n,e,t){let r=n.ss.get(e)||S.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}class _c{constructor(){this.activeTargetIds=D_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Oy{constructor(){this.no=new _c,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new _c,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class My{io(e){}shutdown(){}}/**
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
 */class yc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ar=null;function Xi(){return Ar===null?Ar=function(){return 268435456+Math.round(2147483648*Math.random())}():Ar++,"0x"+Ar.toString(16)}/**
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
 */const xy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Uy{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const ne="WebChannelConnection";class Fy extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+t.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(t,r,i,s,o){const a=Xi(),c=this.bo(t,r.toUriEncodedString());g("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,s,o),this.Co(t,c,l,i).then(u=>(g("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw Ht("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}vo(t,r,i,s,o,a){return this.So(t,r,i,s,o)}Do(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+an}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}bo(t,r){const i=xy[t];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,r,i){const s=Xi();return new Promise((o,a)=>{const c=new zg;c.setWithCredentials(!0),c.listenOnce(Kg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qi.NO_ERROR:const u=c.getResponseJson();g(ne,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Qi.TIMEOUT:g(ne,`RPC '${e}' ${s} timed out`),a(new y(p.DEADLINE_EXCEEDED,"Request time out"));break;case Qi.HTTP_ERROR:const h=c.getStatus();if(g(ne,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const I=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(v)>=0?v:p.UNKNOWN}(f.status);a(new y(I,f.message))}else a(new y(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(p.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{g(ne,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);g(ne,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",l,r,15)})}Fo(e,t,r){const i=Xi(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qg(),a=jg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");g(ne,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const I=new Uy({lo:E=>{f?g(ne,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(g(ne,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),g(ne,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},ho:()=>h.close()}),T=(E,v,A)=>{E.listen(v,U=>{try{A(U)}catch(te){setTimeout(()=>{throw te},0)}})};return T(h,Ir.EventType.OPEN,()=>{f||g(ne,`RPC '${e}' stream ${i} transport opened.`)}),T(h,Ir.EventType.CLOSE,()=>{f||(f=!0,g(ne,`RPC '${e}' stream ${i} transport closed`),I.Vo())}),T(h,Ir.EventType.ERROR,E=>{f||(f=!0,Ht(ne,`RPC '${e}' stream ${i} transport errored:`,E),I.Vo(new y(p.UNAVAILABLE,"The operation could not be completed")))}),T(h,Ir.EventType.MESSAGE,E=>{var v;if(!f){const A=E.data[0];O(!!A);const U=A,te=U.error||((v=U[0])===null||v===void 0?void 0:v.error);if(te){g(ne,`RPC '${e}' stream ${i} received error:`,te);const Ve=te.status;let fe=function(ct){const kt=q[ct];if(kt!==void 0)return Zu(kt)}(Ve),Ne=te.message;fe===void 0&&(fe=p.INTERNAL,Ne="Unknown error status: "+Ve+" with message "+te.message),f=!0,I.Vo(new y(fe,Ne)),h.close()}else g(ne,`RPC '${e}' stream ${i} received:`,A),I.mo(A)}}),T(a,Gg.STAT_EVENT,E=>{E.stat===Ha.PROXY?g(ne,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Ha.NOPROXY&&g(ne,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Ro()},0),I}}function Yi(){return typeof document<"u"?document:null}/**
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
 */function Ci(n){return new J_(n,!0)}/**
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
 */class hh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,t-r);i>0&&g("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class dh{constructor(e,t,r,i,s,o,a,c){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new hh(e,t)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(be(t.toString()),be("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===t&&this.o_(r,i)},r=>{e(()=>{const i=new y(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,t){const r=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class By extends dh{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=Z_(this.serializer,e),r=function(s){if(!("targetChange"in s))return S.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?Se(o.readTime):S.min()}(e);return this.listener.u_(t,r)}c_(e){const t={};t.database=Ds(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=Rs(c)?{documents:ny(s,c)}:{query:ry(s,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=nh(s,o.resumeToken);const l=Ss(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=Qr(s,o.snapshotVersion.toTimestamp());const l=Ss(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=sy(this.serializer,e);r&&(t.labels=r),this.t_(t)}l_(e){const t={};t.database=Ds(this.serializer),t.removeTarget=e,this.t_(t)}}class qy extends dh{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(O(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=ty(e.writeResults,e.commitTime),r=Se(e.commitTime);return this.listener.T_(r,t)}return O(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Ds(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ey(this.serializer,r))};this.t_(t)}}/**
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
 */class jy extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,bs(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(p.UNKNOWN,s.toString())})}vo(e,t,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,bs(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(p.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Ky{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(be(t),this.g_=!1):g("OnlineStateTracker",t)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class Gy{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{St(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=b(c);l.v_.add(4),await fr(l),l.x_.set("Unknown"),l.v_.delete(4),await Pi(l)}(this))})}),this.x_=new Ky(r,i)}}async function Pi(n){if(St(n))for(const e of n.F_)await e(!0)}async function fr(n){for(const e of n.F_)await e(!1)}function fh(n,e){const t=b(n);t.C_.has(e.targetId)||(t.C_.set(e.targetId,e),Mo(t)?Oo(t):un(t).Jo()&&Lo(t,e))}function ph(n,e){const t=b(n),r=un(t);t.C_.delete(e),r.Jo()&&mh(t,e),t.C_.size===0&&(r.Jo()?r.Xo():St(t)&&t.x_.set("Unknown"))}function Lo(n,e){if(n.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(S.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}un(n).c_(e)}function mh(n,e){n.O_.Oe(e),un(n).l_(e)}function Oo(n){n.O_=new W_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.C_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),un(n).start(),n.x_.p_()}function Mo(n){return St(n)&&!un(n).Ho()&&n.C_.size>0}function St(n){return b(n).v_.size===0}function gh(n){n.O_=void 0}async function zy(n){n.C_.forEach((e,t)=>{Lo(n,e)})}async function Wy(n,e){gh(n),Mo(n)?(n.x_.S_(e),Oo(n)):n.x_.set("Unknown")}async function Hy(n,e,t){if(n.x_.set("Online"),e instanceof th&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,e)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jr(n,r)}else if(e instanceof Dr?n.O_.$e(e):e instanceof eh?n.O_.Je(e):n.O_.Ge(e),!t.isEqual(S.min()))try{const r=await uh(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.C_.get(l);u&&s.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.C_.get(c);if(!u)return;s.C_.set(c,u.withResumeToken(ae.EMPTY_BYTE_STRING,u.snapshotVersion)),mh(s,c);const h=new He(u.target,c,l,u.sequenceNumber);Lo(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){g("RemoteStore","Failed to raise snapshot:",r),await Jr(n,r)}}async function Jr(n,e,t){if(!ur(e))throw e;n.v_.add(1),await fr(n),n.x_.set("Offline"),t||(t=()=>uh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await t(),n.v_.delete(1),await Pi(n)})}function _h(n,e){return e().catch(t=>Jr(n,t,e))}async function Si(n){const e=b(n),t=et(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;$y(e);)try{const i=await Vy(e.localStore,r);if(i===null){e.D_.length===0&&t.Xo();break}r=i.batchId,Qy(e,i)}catch(i){await Jr(e,i)}yh(e)&&Eh(e)}function $y(n){return St(n)&&n.D_.length<10}function Qy(n,e){n.D_.push(e);const t=et(n);t.Jo()&&t.P_&&t.I_(e.mutations)}function yh(n){return St(n)&&!et(n).Ho()&&n.D_.length>0}function Eh(n){et(n).start()}async function Jy(n){et(n).d_()}async function Xy(n){const e=et(n);for(const t of n.D_)e.I_(t.mutations)}async function Yy(n,e,t){const r=n.D_.shift(),i=So.from(r,e,t);await _h(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Si(n)}async function Zy(n,e){e&&et(n).P_&&await async function(r,i){if(function(o){return K_(o)&&o!==p.ABORTED}(i.code)){const s=r.D_.shift();et(r).Zo(),await _h(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Si(r)}}(n,e),yh(n)&&Eh(n)}async function Ec(n,e){const t=b(n);t.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const r=St(t);t.v_.add(3),await fr(t),r&&t.x_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.v_.delete(3),await Pi(t)}async function eE(n,e){const t=b(n);e?(t.v_.delete(2),await Pi(t)):e||(t.v_.add(2),await fr(t),t.x_.set("Unknown"))}function un(n){return n.N_||(n.N_=function(t,r,i){const s=b(t);return s.R_(),new By(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:zy.bind(null,n),To:Wy.bind(null,n),u_:Hy.bind(null,n)}),n.F_.push(async e=>{e?(n.N_.Zo(),Mo(n)?Oo(n):n.x_.set("Unknown")):(await n.N_.stop(),gh(n))})),n.N_}function et(n){return n.B_||(n.B_=function(t,r,i){const s=b(t);return s.R_(),new qy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:Jy.bind(null,n),To:Zy.bind(null,n),E_:Xy.bind(null,n),T_:Yy.bind(null,n)}),n.F_.push(async e=>{e?(n.B_.Zo(),await Si(n)):(await n.B_.stop(),n.D_.length>0&&(g("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
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
 */class xo{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new xo(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uo(n,e){if(be("AsyncQueue",`${e}: ${n}`),ur(n))return new y(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class jt{constructor(e){this.comparator=e?(t,r)=>e(t,r)||w.comparator(t.key,r.key):(t,r)=>w.comparator(t.key,r.key),this.keyedMap=En(),this.sortedSet=new F(this.comparator)}static emptySet(e){return new jt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new jt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class vc{constructor(){this.L_=new F(w.comparator)}track(e){const t=e.doc.key,r=this.L_.get(t);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(t,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(t):e.type===1&&r.type===2?this.L_=this.L_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):C():this.L_=this.L_.insert(t,e)}k_(){const e=[];return this.L_.inorderTraversal((t,r)=>{e.push(r)}),e}}class en{constructor(e,t,r,i,s,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new en(e,t,jt.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ii(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class tE{constructor(){this.q_=void 0,this.Q_=[]}}class nE{constructor(){this.queries=new ln(e=>Bu(e),Ii),this.onlineState="Unknown",this.K_=new Set}}async function Fo(n,e){const t=b(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new tE),i)try{s.q_=await t.onListen(r)}catch(o){const a=Uo(o,`Initialization of query '${Vt(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.Q_.push(e),e.U_(t.onlineState),s.q_&&e.W_(s.q_)&&qo(t)}async function Bo(n,e){const t=b(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function rE(n,e){const t=b(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&qo(t)}function iE(n,e,t){const r=b(n),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(t);r.queries.delete(e)}function qo(n){n.K_.forEach(e=>{e.next()})}class jo{constructor(e,t,r){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new en(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Y_(e){e=en.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class vh{constructor(e){this.key=e}}class Ih{constructor(e){this.key=e}}class sE{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=k(),this.mutatedKeys=k(),this.ua=qu(e),this.ca=new jt(this.ua)}get la(){return this.oa}ha(e,t){const r=t?t.Pa:new vc,i=t?t.ca:this.ca;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=wi(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?I!==T&&(r.track({type:3,doc:f}),E=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.ua(f,c)>0||l&&this.ua(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(f?(o=o.add(f),s=T?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((u,h)=>function(f,I){const T=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return T(f)-T(I)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),i=i!=null&&i;const a=t&&!i?this.Ea():[],c=this.aa.size===0&&this.current&&!i?1:0,l=c!==this._a;return this._a=c,o.length!==0||l?{snapshot:new en(this.query,e.ca,s,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new vc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(t=>this.oa=this.oa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.oa=this.oa.delete(t)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=k(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const t=[];return e.forEach(r=>{this.aa.has(r)||t.push(new Ih(r))}),this.aa.forEach(r=>{e.has(r)||t.push(new vh(r))}),t}Ra(e){this.oa=e.hs,this.aa=k();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return en.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class oE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class aE{constructor(e){this.key=e,this.ma=!1}}class cE{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ln(a=>Bu(a),Ii),this.pa=new Map,this.ya=new Set,this.wa=new F(w.comparator),this.Sa=new Map,this.ba=new Do,this.Da={},this.Ca=new Map,this.va=Zt.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function lE(n,e){const t=EE(n);let r,i;const s=t.ga.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Ny(t.localStore,Pe(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await uE(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&fh(t.remoteStore,o)}return i}async function uE(n,e,t,r,i){n.Ma=(h,d,f)=>async function(T,E,v,A){let U=E.view.ha(v);U.Xi&&(U=await gc(T.localStore,E.query,!1).then(({documents:Ne})=>E.view.ha(Ne,U)));const te=A&&A.targetChanges.get(E.targetId),Ve=A&&A.targetMismatches.get(E.targetId)!=null,fe=E.view.applyChanges(U,T.isPrimaryClient,te,Ve);return wc(T,E.targetId,fe.da),fe.snapshot}(n,h,d,f);const s=await gc(n.localStore,e,!0),o=new sE(e,s.hs),a=o.ha(s.documents),c=dr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);wc(n,t,l.da);const u=new oE(e,t,o);return n.ga.set(e,u),n.pa.has(t)?n.pa.get(t).push(e):n.pa.set(t,[e]),l.snapshot}async function hE(n,e){const t=b(n),r=t.ga.get(e),i=t.pa.get(r.targetId);if(i.length>1)return t.pa.set(r.targetId,i.filter(s=>!Ii(s,e))),void t.ga.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Vs(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ph(t.remoteStore,r.targetId),Ns(t,r.targetId)}).catch(lr)):(Ns(t,r.targetId),await Vs(t.localStore,r.targetId,!0))}async function dE(n,e,t){const r=vE(n);try{const i=await function(o,a){const c=b(o),l=z.now(),u=a.reduce((f,I)=>f.add(I.key),k());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let I=Be(),T=k();return c.os.getEntries(f,u).next(E=>{I=E,I.forEach((v,A)=>{A.isValidDocument()||(T=T.add(v))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,I)).next(E=>{h=E;const v=[];for(const A of a){const U=U_(A,h.get(A.key).overlayedDocument);U!=null&&v.push(new ot(A.key,U,Vu(U.value.mapValue),ye.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,v,a)}).next(E=>{d=E;const v=E.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(f,E.batchId,v)})}).then(()=>({batchId:d.batchId,changes:Ku(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new F(N)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,i.batchId,t),await pr(r,i.changes),await Si(r.remoteStore)}catch(i){const s=Uo(i,"Failed to persist write");t.reject(s)}}async function wh(n,e){const t=b(n);try{const r=await ky(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Sa.get(s);o&&(O(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?O(o.ma):i.removedDocuments.size>0&&(O(o.ma),o.ma=!1))}),await pr(t,r,e)}catch(r){await lr(r)}}function Ic(n,e,t){const r=b(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=b(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(l=!0)}),l&&qo(c)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fE(n,e,t){const r=b(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new F(w.comparator);o=o.insert(s,ie.newNoDocument(s,S.min()));const a=k().add(s),c=new Ri(S.min(),new Map,new F(N),o,a);await wh(r,c),r.wa=r.wa.remove(s),r.Sa.delete(e),Ko(r)}else await Vs(r.localStore,e,!1).then(()=>Ns(r,e,t)).catch(lr)}async function pE(n,e){const t=b(n),r=e.batch.batchId;try{const i=await by(t.localStore,e);Ah(t,r,null),Th(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await pr(t,i)}catch(i){await lr(i)}}async function mE(n,e,t){const r=b(n);try{const i=await function(o,a){const c=b(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(O(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Ah(r,e,t),Th(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await pr(r,i)}catch(i){await lr(i)}}function Th(n,e){(n.Ca.get(e)||[]).forEach(t=>{t.resolve()}),n.Ca.delete(e)}function Ah(n,e,t){const r=b(n);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Ns(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.pa.get(e))n.ga.delete(r),t&&n.fa.xa(r,t);n.pa.delete(e),n.isPrimaryClient&&n.ba.Vr(e).forEach(r=>{n.ba.containsKey(r)||Rh(n,r)})}function Rh(n,e){n.ya.delete(e.path.canonicalString());const t=n.wa.get(e);t!==null&&(ph(n.remoteStore,t),n.wa=n.wa.remove(e),n.Sa.delete(t),Ko(n))}function wc(n,e,t){for(const r of t)r instanceof vh?(n.ba.addReference(r.key,e),gE(n,r)):r instanceof Ih?(g("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,e),n.ba.containsKey(r.key)||Rh(n,r.key)):C()}function gE(n,e){const t=e.key,r=t.path.canonicalString();n.wa.get(t)||n.ya.has(r)||(g("SyncEngine","New document in limbo: "+t),n.ya.add(r),Ko(n))}function Ko(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const e=n.ya.values().next().value;n.ya.delete(e);const t=new w(x.fromString(e)),r=n.va.next();n.Sa.set(r,new aE(t)),n.wa=n.wa.insert(t,r),fh(n.remoteStore,new He(Pe(vi(t.path)),r,"TargetPurposeLimboResolution",vo._e))}}async function pr(n,e,t){const r=b(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,t).then(l=>{if((l||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=No.Ki(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.fa.u_(i),await async function(c,l){const u=b(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(l,d=>m.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ur(h))throw h;g("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),I=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(I);u.ns=u.ns.insert(d,T)}}}(r.localStore,s))}async function _E(n,e){const t=b(n);if(!t.currentUser.isEqual(e)){g("SyncEngine","User change. New user:",e.toKey());const r=await lh(t.localStore,e);t.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new y(p.CANCELLED,o))})}),s.Ca.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pr(t,r.us)}}function yE(n,e){const t=b(n),r=t.Sa.get(e);if(r&&r.ma)return k().add(r.key);{let i=k();const s=t.pa.get(e);if(!s)return i;for(const o of s){const a=t.ga.get(o);i=i.unionWith(a.view.la)}return i}}function EE(n){const e=b(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fE.bind(null,e),e.fa.u_=rE.bind(null,e.eventManager),e.fa.xa=iE.bind(null,e.eventManager),e}function vE(n){const e=b(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mE.bind(null,e),e}class Tc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ci(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Sy(this.persistence,new Cy,e.initialUser,this.serializer)}createPersistence(e){return new Ty(Vo.Hr,this.serializer)}createSharedClientState(e){return new Oy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class IE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ic(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_E.bind(null,this.syncEngine),await eE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nE}()}createDatastore(e){const t=Ci(e.databaseInfo.databaseId),r=function(s){return new Fy(s)}(e.databaseInfo);return function(s,o,a,c){return new jy(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new Gy(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Ic(this.syncEngine,t,0),function(){return yc.D()?new yc:new My}())}createSyncEngine(e,t){return function(i,s,o,a,c,l,u){const h=new cE(i,s,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=b(r);g("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await fr(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class Go{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):be("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class wE{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=re.UNAUTHENTICATED,this.clientId=bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{g("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(g("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ce;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Uo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zi(n,e){n.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ac(n,e){n.asyncQueue.verifyOperationInProgress();const t=await AE(n);g("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ec(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ec(e.remoteStore,i)),n._onlineComponents=e}function TE(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function AE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!TE(t))throw t;Ht("Error using user provided cache. Falling back to memory cache: "+t),await Zi(n,new Tc)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await Zi(n,new Tc);return n._offlineComponents}async function Ch(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await Ac(n,n._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await Ac(n,new IE))),n._onlineComponents}function RE(n){return Ch(n).then(e=>e.syncEngine)}async function Xr(n){const e=await Ch(n),t=e.eventManager;return t.onListen=lE.bind(null,e.syncEngine),t.onUnlisten=hE.bind(null,e.syncEngine),t}function CE(n,e,t={}){const r=new Ce;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Go({next:d=>{o.enqueueAndForget(()=>Bo(s,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new y(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new y(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new jo(vi(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Fo(s,h)}(await Xr(n),n.asyncQueue,e,t,r)),r.promise}function PE(n,e,t={}){const r=new Ce;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Go({next:d=>{o.enqueueAndForget(()=>Bo(s,h)),d.fromCache&&c.source==="server"?l.reject(new y(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new jo(a,u,{includeMetadataChanges:!0,Z_:!0});return Fo(s,h)}(await Xr(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ph(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Rc=new Map;/**
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
 */function Sh(n,e,t){if(!t)throw new y(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function SE(n,e,t,r){if(e===!0&&r===!0)throw new y(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Cc(n){if(!w.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Pc(n){if(w.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":C()}function me(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bi(n);throw new y(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Sc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new y(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ph((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ki{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Hg;switch(r.type){case"firstParty":return new Xg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Rc.get(t);r&&(g("ComponentProvider","Removing Datastore"),Rc.delete(t),r.terminate())}(this),Promise.resolve()}}function bE(n,e,t,r={}){var i;const s=(n=me(n,ki))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ht("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=re.MOCK_USER;else{a=nd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new y(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new re(l)}n._authCredentials=new $g(new Su(a,c))}}/**
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
 */class at{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new at(this.firestore,e,this._query)}}class le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}}class Xe extends at{constructor(e,t,r){super(e,t,vi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new w(e))}withConverter(e){return new Xe(this.firestore,e,this._path)}}function es(n,e,...t){if(n=W(n),Sh("collection","path",e),n instanceof ki){const r=x.fromString(e,...t);return Pc(r),new Xe(n,null,r)}{if(!(n instanceof le||n instanceof Xe))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(e,...t));return Pc(r),new Xe(n.firestore,null,r)}}function In(n,e,...t){if(n=W(n),arguments.length===1&&(e=bu.newId()),Sh("doc","path",e),n instanceof ki){const r=x.fromString(e,...t);return Cc(r),new le(n,null,new w(r))}{if(!(n instanceof le||n instanceof Xe))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(e,...t));return Cc(r),new le(n.firestore,n instanceof Xe?n.converter:null,new w(r))}}/**
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
 */class kE{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new hh(this,"async_queue_retry"),this._u=()=>{const t=Yi();t&&g("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const e=Yi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const t=Yi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const t=new Ce;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!ur(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const t=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=t,t}enqueueAfterDelay(e,t,r){this.au(),this.ou.indexOf(e)>-1&&(t=0);const i=xo.createAndSchedule(this,e,t,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&C()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.nu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const t=this.nu.indexOf(e);this.nu.splice(t,1)}}function bc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class tt extends ki{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new kE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bh(this),this._firestoreClient.terminate()}}function DE(n,e){const t=typeof n=="object"?n:Gc(),r=typeof n=="string"?n:e||"(default)",i=xs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ed("firestore");s&&bE(i,...s)}return i}function Di(n){return n._firestoreClient||bh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function bh(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,l,u){return new h_(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ph(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new wE(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(ae.fromBase64String(e))}catch(t){throw new y(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new tn(ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hn{constructor(e){this._methodName=e}}/**
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
 */class zo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
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
 */const VE=/^__.*__$/;class NE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new hr(e,this.data,t,this.fieldTransforms)}}class kh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ot(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class Ni{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Ni(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return Yr(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(Dh(this.du)&&VE.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class LE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ci(e)}Su(e,t,r,i=!1){return new Ni({du:e,methodName:t,wu:r,path:Y.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wo(n){const e=n._freezeSettings(),t=Ci(n._databaseId);return new LE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function OE(n,e,t,r,i,s={}){const o=n.Su(s.merge||s.mergeFields?2:0,e,t,i);Jo("Data must be an object, but it was:",o,r);const a=Nh(r,o);let c,l;if(s.merge)c=new he(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Ls(e,h,t);if(!o.contains(d))throw new y(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Oh(u,d)||u.push(d)}c=new he(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new NE(new ue(a),c,l)}class Li extends hn{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Li}}function Vh(n,e,t){return new Ni({du:3,wu:e.settings.wu,methodName:n._methodName,Vu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ho extends hn{_toFieldTransform(e){return new Co(e.path,new Wn)}isEqual(e){return e instanceof Ho}}class $o extends hn{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=Vh(this,e,!0),r=this.bu.map(s=>bt(s,t)),i=new Xt(r);return new Co(e.path,i)}isEqual(e){return e instanceof $o&&Kt(this.bu,e.bu)}}class Qo extends hn{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=Vh(this,e,!0),r=this.bu.map(s=>bt(s,t)),i=new Yt(r);return new Co(e.path,i)}isEqual(e){return e instanceof Qo&&Kt(this.bu,e.bu)}}function ME(n,e,t,r){const i=n.Su(1,e,t);Jo("Data must be an object, but it was:",i,r);const s=[],o=ue.empty();Pt(r,(c,l)=>{const u=Xo(e,c,t);l=W(l);const h=i.fu(u);if(l instanceof Li)s.push(u);else{const d=bt(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new he(s);return new kh(o,a,i.fieldTransforms)}function xE(n,e,t,r,i,s){const o=n.Su(1,e,t),a=[Ls(e,r,t)],c=[i];if(s.length%2!=0)throw new y(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ls(e,s[d])),c.push(s[d+1]);const l=[],u=ue.empty();for(let d=a.length-1;d>=0;--d)if(!Oh(l,a[d])){const f=a[d];let I=c[d];I=W(I);const T=o.fu(f);if(I instanceof Li)l.push(f);else{const E=bt(I,T);E!=null&&(l.push(f),u.set(f,E))}}const h=new he(l);return new kh(u,h,o.fieldTransforms)}function UE(n,e,t,r=!1){return bt(t,n.Su(r?4:3,e))}function bt(n,e){if(Lh(n=W(n)))return Jo("Unsupported field value:",e,n),Nh(n,e);if(n instanceof hn)return function(r,i){if(!Dh(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=bt(a,i.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=W(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return V_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=z.fromDate(r);return{timestampValue:Qr(i.serializer,s)}}if(r instanceof z){const s=new z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qr(i.serializer,s)}}if(r instanceof zo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:nh(i.serializer,r._byteString)};if(r instanceof le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ko(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${bi(r)}`)}(n,e)}function Nh(n,e){const t={};return ku(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pt(n,(r,i)=>{const s=bt(i,e.Ru(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Lh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof z||n instanceof zo||n instanceof tn||n instanceof le||n instanceof hn)}function Jo(n,e,t){if(!Lh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=bi(t);throw r==="an object"?e.pu(n+" a custom object"):e.pu(n+" "+r)}}function Ls(n,e,t){if((e=W(e))instanceof Vi)return e._internalPath;if(typeof e=="string")return Xo(n,e);throw Yr("Field path arguments must be of type string or ",n,!1,void 0,t)}const FE=new RegExp("[~\\*/\\[\\]]");function Xo(n,e,t){if(e.search(FE)>=0)throw Yr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vi(...e.split("."))._internalPath}catch{throw Yr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Yr(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(p.INVALID_ARGUMENT,a+n+c)}function Oh(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Mh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BE extends Mh{data(){return super.data()}}function Yo(n,e){return typeof e=="string"?Xo(n,e):e instanceof Vi?e._internalPath:e._delegate._internalPath}/**
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
 */function xh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zo{}class Uh extends Zo{}function qE(n,e,...t){let r=[];e instanceof Zo&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof ta).length,a=s.filter(c=>c instanceof ea).length;if(o>1||o>0&&a>0)throw new y(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ea extends Uh{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ea(e,t,r)}_apply(e){const t=this._parse(e);return Fh(e._query,t),new at(e.firestore,e.converter,Cs(e._query,t))}_parse(e){const t=Wo(e.firestore);return function(s,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Dc(h,u);const f=[];for(const I of h)f.push(kc(c,s,I));d={arrayValue:{values:f}}}else d=kc(c,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Dc(h,u),d=UE(a,o,h,u==="in"||u==="not-in");return K.create(l,u,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ta extends Zo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ta(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ve.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Fh(o,c),o=Cs(o,c)}(e._query,t),new at(e.firestore,e.converter,Cs(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class na extends Uh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new na(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zn(s,o)}(e._query,this._field,this._direction);return new at(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new cn(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function jE(n,e="asc"){const t=e,r=Yo("orderBy",n);return na._create(r,t)}function kc(n,e,t){if(typeof(t=W(t))=="string"){if(t==="")throw new y(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fu(e)&&t.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(x.fromString(t));if(!w.isDocumentKey(r))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Za(n,new w(r))}if(t instanceof le)return Za(n,t._key);throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bi(t)}.`)}function Dc(n,e){if(!Array.isArray(n)||n.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fh(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class KE{convertValue(e,t="none"){switch(Rt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return j(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(At(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw C()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Pt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new zo(j(e.latitude),j(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=wo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(jn(e));default:return null}}convertTimestamp(e){const t=Ze(e);return new z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=x.fromString(e);O(ch(r));const i=new Kn(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(t)||be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function GE(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bh extends Mh{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Vr extends Bh{data(e={}){return super.data(e)}}class qh{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new wn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Vr(this._firestore,this._userDataWriter,r.key,r,new wn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Vr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new wn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Vr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new wn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:zE(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}/**
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
 */function WE(n){n=me(n,le);const e=me(n.firestore,tt);return CE(Di(e),n._key).then(t=>jh(e,n,t))}class ra extends KE{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function HE(n){n=me(n,at);const e=me(n.firestore,tt),t=Di(e),r=new ra(e);return xh(n._query),PE(t,n._query).then(i=>new qh(e,r,n,i))}function ts(n,e,t,...r){n=me(n,le);const i=me(n.firestore,tt),s=Wo(i);let o;return o=typeof(e=W(e))=="string"||e instanceof Vi?xE(s,"updateDoc",n._key,e,t,r):ME(s,"updateDoc",n._key,e),ia(i,[o.toMutation(n._key,ye.exists(!0))])}function $E(n){return ia(me(n.firestore,tt),[new Po(n._key,ye.none())])}function QE(n,e){const t=me(n.firestore,tt),r=In(n),i=GE(n.converter,e);return ia(t,[OE(Wo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ye.exists(!1))]).then(()=>r)}function JE(n,...e){var t,r,i;n=W(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(bc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof le)l=me(n.firestore,tt),u=vi(n._key.path),c={next:h=>{e[o]&&e[o](jh(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=me(n,at);l=me(h.firestore,tt),u=h._query;const d=new ra(l);c={next:f=>{e[o]&&e[o](new qh(l,d,h,f))},error:e[o+1],complete:e[o+2]},xh(n._query)}return function(d,f,I,T){const E=new Go(T),v=new jo(f,E,I);return d.asyncQueue.enqueueAndForget(async()=>Fo(await Xr(d),v)),()=>{E.La(),d.asyncQueue.enqueueAndForget(async()=>Bo(await Xr(d),v))}}(Di(l),u,a,c)}function ia(n,e){return function(r,i){const s=new Ce;return r.asyncQueue.enqueueAndForget(async()=>dE(await RE(r),i,s)),s.promise}(Di(n),e)}function jh(n,e,t){const r=t.docs.get(e._key),i=new ra(n);return new Bh(n,i,e._key,r,new wn(t.hasPendingWrites,t.fromCache),e.converter)}function XE(){return new Ho("serverTimestamp")}function YE(...n){return new $o("arrayUnion",n)}function ZE(...n){return new Qo("arrayRemove",n)}(function(e,t=!0){(function(i){an=i})(nn),Gt(new Et("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new tt(new Qg(r.getProvider("auth-internal")),new Zg(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new y(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Je($a,"4.4.1",e),Je($a,"4.4.1","esm2017")})();var ev="firebase",tv="10.7.2";/**
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
 */Je(ev,tv,"app");const nv={apiKey:"AIzaSyAoPzifXuWI56JUEwPFZDnkPnbVyF7tLa4",authDomain:"pets--diaries.firebaseapp.com",projectId:"pets--diaries",storageBucket:"pets--diaries.appspot.com",messagingSenderId:"954679174408",appId:"1:954679174408:web:cbf851119a71a5f81f78bd",measurementId:"G-BKTBMV3M64"},Kh=Kc(nv),_e=Bm(Kh),lt=DE(Kh);function De(){const n=(v,A)=>wp(_e,v,A),e=async v=>{const A=_e.currentUser;return await A.getIdToken(!0),await Rp(A,v)},t=(v,A)=>Tp(_e,v,A),r=async()=>{const v=new Le;return await Qp(_e,v)},i=()=>_e.currentUser,s=()=>_e.currentUser.email;return{createUser:n,updateUser:e,userLogin:t,googleLogin:r,getCurrentUser:i,getEmail:s,getDisplayName:()=>_e.currentUser.displayName,getProfilePicture:()=>{var v;return(v=_e.currentUser)==null?void 0:v.photoURL},userLogout:()=>Sp(_e),getPostsRef:()=>qE(es(lt,"posts"),jE("time","desc")),getPosts:async()=>await HE(es(lt,"posts")),getLikes:async v=>{const A=await WE(v);return A.exists()?A.data().likes:null},createPost:async v=>{try{return await QE(es(lt,"posts"),{content:v,time:XE(),email:_e.currentUser.email,displayName:_e.currentUser.displayName,likes:[]})}catch(A){throw new Error(`${A}`)}},editPost:async(v,A)=>{const U=In(lt,"posts",A);try{await i().getIdToken(!0),await ts(U,{content:`${v}`})}catch(te){throw new Error(`${te}`)}},deletePost:async v=>{const A=In(lt,"posts",v);try{await i().getIdToken(!0),await $E(A)}catch(U){throw new Error(`${U}`)}},addLike:async v=>{try{ts(In(lt,"posts",v.id),{likes:YE(s())})}catch(A){throw new Error(`${A}`)}},removeLike:async v=>{try{ts(In(lt,"posts",v.id),{likes:ZE(s())})}catch(A){throw new Error(`${A}`)}}}}const{userLogin:rv,googleLogin:iv}=De();function sv(n){const e=document.createElement("div"),t=document.createElement("h2"),r=document.createElement("div"),i=Ot("Email","login-email"),s=Ot("Password","login-password","password"),o=document.createElement("button"),a=document.createElement("button"),c=document.createElement("img"),l=document.createElement("div"),u=document.createElement("li"),h=$n();return c.src=`${Hn}`,c.alt="logo Pets' Diaries",c.classList.add("logo"),o.classList.add("button","login-button"),l.className="logoGoogle",a.classList.add("button","login-button"),u.classList.add("divTitleLogin"),e.className="home-div",r.className="content-wrapper",l.innerHTML=`${Wh}`,t.textContent="Log into your account",o.textContent="Login",a.textContent="Go back",c.addEventListener("click",()=>h.showModal()),a.addEventListener("click",()=>n("/")),o.addEventListener("click",()=>{const d=document.getElementById("login-email").value,f=document.getElementById("login-password").value;rv(d,f).then(()=>{n("/feed")},()=>alert("Invalid credentials"))}),l.addEventListener("click",()=>{iv().then(()=>{n("/feed")},()=>alert("Invalid credentials"))}),e.appendChild(c),e.appendChild(h),r.appendChild(t),r.appendChild(i),r.appendChild(s),r.appendChild(o),r.appendChild(l),r.appendChild(a),e.appendChild(r),e}function ov(){return{arePasswordsEqual:(r,i)=>r===i,isPasswordValid:r=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(r),isEmailValid:r=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(r)}}const{isEmailValid:av,isPasswordValid:cv,arePasswordsEqual:lv}=ov(),{createUser:uv,updateUser:hv}=De();function dv(n){const e=document.createElement("div"),t=document.createElement("h2"),r=document.createElement("div"),i=Ot("Username","name-input"),s=Ot("Email","email-input"),o=Ot("Enter Password","password-input","password"),a=Ot("Repeat Password","password-input-2","password"),c=document.createElement("button"),l=document.createElement("button"),u=document.createElement("img"),h=$n(),d=document.createElement("li");return u.src=`${Hn}`,u.alt="logo Pets' Diaries",u.classList.add("logo"),l.classList.add("button","signup-button"),d.classList.add("divTitleLogin"),e.className="home-div",r.className="content-wrapper",c.classList.add("button","signup-button"),t.textContent="Sign Up with your email",c.textContent="Sign Up",l.textContent="Go back",u.addEventListener("click",()=>h.showModal()),l.addEventListener("click",()=>n("/")),c.addEventListener("click",f=>{f.preventDefault();const I=document.getElementById("name-input").value,T=document.getElementById("email-input").value,E=document.getElementById("password-input").value,v=document.getElementById("password-input-2").value;if(!lv(E,v)){alert("Passwords do not match"),window.location.reload();return}if(!cv(E)){alert("Password must have a minimum of eight characters and at least one uppercase letter, one lowercase letter and one number"),window.location.reload();return}if(av(T))uv(T,E).then(()=>{hv({displayName:I}).then(()=>n("/feed"))}).catch(A=>{throw new Error(`${A}`)});else{alert("Invalid email address"),window.location.reload();return}}),e.appendChild(u),e.appendChild(h),r.appendChild(t),r.appendChild(i),r.appendChild(s),r.appendChild(o),r.appendChild(a),r.appendChild(c),r.appendChild(l),e.appendChild(r),e}const fv="/assets/user-image-x1c81KBE.webp",Vc="data:image/webp;base64,UklGRrwOAABXRUJQVlA4TLAOAAAv04PWEA8wK1M7QPMf8BwFbdtIzvizvhdCREyAxFL4kLbDj+aFZtr0piRHAAuIVozDHpWgFKVRmlKU4OjPGDmQiOx67/1bRP8ngHJtq7ZtBRoFrBECoRAahmYohmDx7/ZzPXsBk33OsxTR/wmAW9tu2AajYzSMghFQosBBGfN/fKWO6H+Axu9o6X596c1w/bKCTG5UkQ5vqsjmNg258T0ZN7tU5IfX4G70yLjrhrSty1qMLeQRGQW5QcP9GNElvC6hpAzIKCplTSQGdJmoSigr7RIKc1ET8nZNymsSSrdD8Zoqps2KnJYMsWjW5aIiozz3woNc0A5Yq3LCCvBgtuon8lw5cUknPCrH2hFrVM7YMTyajdqZPJXPXNxnnLn4UDukbTIe1kPjULSpp+JMwtNt+qnrTD0mXfC4HOnHrEk+Z0fweDSp5+JEPnc16eeuE1WB9ECFcqArsBZZgx1AhdGiagh7WcPVomvAvapCOgwVdqur0AYJVT5bQ4U3KDr8TkKV2aDqiDtFx9Wg60CzUZVIHSq1G12JlSUtbgOVelnR4nlJS5ZVLZFXtFxlXQsaVlMjVajWsroaK0p6HAvVelHR4zlJTxRVPZFT9FxFTQ9yqiKuGYoMoynSGlT8MIYiK8maHAMVR0nRFKisKUuqpkgVTVdJ14RUVSUVQ5UluiqtQNUPMVRZQdLlCFTtBUVXWGVdWVB1xVXRdRU0XbiqyvhcV2YWTZmcQ+XPYijTY0mbW6ByP5a1+Sl1i2NFW5hytzxWtcWpdLuONW1oAKC141NdnQWA3k5ODXUPAIx2eiihegcA2N4PZX0eIOmLQ0VfAMj68lDVhwBV33WovcBAewGf6S+w0F8gZ8YLHhgv0DP4Qgf4QjuS3uDTG/xIfkPIb4gj5Q2xvCGP1DdgfcN1pL3i3yv4RH/FO+XEuIaewN+QHUj38AP5HnGg3CMP1HtcB9pF+F6/iNwbF9FHgRe1W+kmfivfJG6Vm+StepPrSbSr8J1+FbkzrqIPAq9qN9Jd/Ea+SzyHcpe8Ue9y3WiX4cfQLyOvjcvoY8DL2kvpNv4U8m3ipXKbfAr1NtdL7Tr8EPp15CGM6+greF17Buk+/gzyfeKFcp98BvU+1zNoF+JH0C8kj2BcSB8BXtg28/9IN8s3iidQbpRPoN7oetf4q/ZL61eSBzCupA8Ar2z7pTv5W5fvFPuVO+VbV+907dcuxe9cv5SsNy6l7xxe2t64dCt/4/Kt4o0rt8o3rt7q+sy1a/H71q8lH7lxLf3I4bXtE5fu5Z+4fK/4xlZeYJKMBXU5wQNUCQ9QL2ABkoQFSN8XAQCGAADA+Dw/1T0/VXVVnZvy3jMVZdcAO6U9M6XPMxOMLVh+XYRl2wmr/nFhVXf8qmlr2vwq7zyrqozVuVXasavycc8Kdswqf5wlBi/COn2cIRovEPBxQFaep4ayrixSheeorku0BSrzHqrdIfHsHTwFPEPVT3OMwQK6XKJz4iUemcDIyoYyy2gySZe+p3L8JQyjcBwDLpE5zyVAxnLGHdJ1Igc4htMvMRjwGtQdvsVe1KnIapdoVLiEP1cvUSn/+3GsQtlLP74/mdIlHhlZKMn8sA0vBL8oyxsEvfz9G9RX+abFSu0y5hxtUVf+QSsr+6DllX7eZKX0Xw1W/P+XP7+gD9/3wOSbQC71+9ukdT98U/sRmH2D+AmYf96i7ud36M9d8sR14/eP01X351NStjmGuvafxqW5hj2VfivPqXyNdBsnYVlFl8z/6U/Va+TVc41wqt2sf1pklZW7Bp4aurj/UcOpK8/Cb7Nn0j3adR6BwMkf584UZVSHfRXv4c/ULzKZEThjhZzGsPAVHqBR8UynAkD9CAuQRZA0jEFZgHQuKRkAAINARqKsQAQAGJ8QpkqZI0j6qX2CmzJlqUw9VKKeqXzCMwH1UEUgU2bKn2AWnXACjipEhOWxoCDAshGeqpSnKuFX4wPiqhCBalSgGuFW/QPCKhGR6lSkOmFX7QP8CgikBoXUIMyqfoAjBmEI3Eu4jrAup5wcf4hGPKvEMatMBCJ/gCUq4VaZY1eF8ET6kEL4VeG4VSXchxgiE3FVOX7ViYeAU0aGA5kIXDVOWA3CUOM7gLKLwYmLhCR8R2QMwi2QbaZCREZ/XWB0IkyZ90yNCGqUbHmNwKny3DQIz2gfUikLAJ0XASAh6T7EMwrlAQA3DUClHkb9kEwhQNlxAEOfkA3qGInhAbdNRdoyyocA47D5pqEEPuThdB2Rkw8xWf+PTUf4EsupOryqUnOcdIh6lZtlHY+qVLNqsoPhpJuBDsOBH0sQWTCHCrhY/Kz+Oc5sGoIef1BVg9dlX7VuRYP7Oa3Wo0e75V/FEJMGq0feC6OH/9VE0JZeZ39QoIf+XcyxZeBeD0B+Wd4FAIC2EfVkv75hp3wiv+45EGE5XhVnblVfEsPsKvHChzVWBLK/w79w0Ml5qsqV77JUfpNdAXO8wkYFTuN4Xn2d51WO45RX6Fd7YznpOsAeUk3DYEEq8PobZJLn1a+KUg8vS/Uj/FWfGB4w3A0ibA6hoaEw5BUq7LQX0CC3U96ToJF5drIQnsxJZgfeE6CVge0hko7EoLDXPuoR8XtVJB/x/3BiJZ69/FFOxO4lkaLCDkCQ8GqsiZeIEl2i6lh6kGgS7Yg2CRJOor5msCjxSBSJfkTmWIn0msZQwkiAxDjCXQynLSKIjkVgoY5iB5mujLrYPS9T99InPHtOpuzlI/lCgo7TF49MXkRO+SYrk3TFCwH6PRDeq58QOGOKUmNCTjviLzgYt4JU3+qfgFteqm6NI/aCoYaBs5MqC8PAb7A7j1TeSWf0lQUfKi2sVFpYKqsZ0O0YKdgpZ6SPp/ICxMf0UFVNg4EqU5TrG+0M94kbQa5NjupqCkSqTl6uTp4aZ6iRIdrk5MoGqknU8h65PAUinclOjuiTlUtTJIqeQD0xJiMHExL1THQKBM5wcExm1fQ4iqs0xWN2Nc54K7PIUzjRp2eR8Ky9ZPCzKJM/0Sa3yB/iF+1YncKiHtLXFo2LPrkTZYqLrmlQNBPOz4k8oZnwsPR6ACAt7Im0sACQVTUcAKAuzAlYeABop7gXGoC+gHMRAFBV4R4yzvHMmPCBeoya0Yf6QmHeSF44094RPH+maokp7oOc95wpWhxS1mI3jGfPpJcszZwBLToFvmhEhhIZEk91JXynWQGpRJpEQ7yqbpJlVcnJzeJWsLQqbpwlVc7xKQzJRIxj95ZE5UvRRzGcrBuK3GtOYGBUfVMcrysK3U+OQUhYeRMchRCwguEHnCN1fmPfsRNL4Tpj6MMYCjVcgpxoRmJgXHNTjMBAJ1Ok8ZzisEKk8DjiDIPgwBK3I8ZQXKsRuG4mZ4YgHfyoP8JnisAdDKfF8lASCFeILBqHHE8IDm1u7Bt2auHo0aiemk/IA2nYexTKp+oTdDphQ5DY8ii+EMccVgR+zDQCtEeyqCDQcyPhoJzrD/AYRkDnS8KuUj8LQj8KHCUAjm4hK7BPr7xWDJZdBpKKlufNqLK+nFgAyJKQaCRKXN1LTN3mOLpVKERrRlxqWpxrSpxqUzsH2bwoii+7QgJeZNpWtdJaNdKyGVc1ovBKmqpTOctCIN6jzJW9zJStboW1boRlM67rL5cw1aduNgjdaOC63sB0rcPKaoeRlQ4ty5tRx/pyqmaLUI0WruotTNV6rKj2GFHp0aLco0SpZ2pmk9CMJq7pTUzTuqykdhlJ2SEfuUtLUtd6tVHZJr8citHGFb2NKVqfva0y2mce/aukT/OKU8N9ipURER8l1DdJGZePimwUJCTNThOJRv4YdhoVNHgjo2RkPgqs0zI6J250Ee00b5GXkf2ck05N6Lx4jjsVnnHTsoYIdc43ZLWdcCpbBZxw2xyKVv5oGHXPc1DSWxk89vCQ9do3S2UUfKgkor0G7BKByiLcq98eIqGoPUK9680RVcYTRSKbJTZkkKgS0czf/Cqj8HPAm9lbWHWpuGoS1m2f4iKhuF0MCe02T2imKucXKCnd+s1OeNAAQBLhbvXmAKCe8ABQRKh7vgUAwKMGoElku3hDA/1MhISS0c4fX+rtTMn6rZD2GyHp10Lcr4Sof+rkgNDxAaZjE1ZGJ4yMTGgZnlAyNDFVckSoxAhX8RGmYjNWRGeMCM8oEZqZGjkkNGKIa/gQ07ApK6FTRkKmtARNTYUcEwoxxhV8jCnYnBXQOSMgc1qA5uZ9Dor7GOT3PsjubdKe66Q5l0l1TpPzOkfFdYzyax9l1zZrj2VWH/OsOqbZeZvD4jaG+a0Ps1udNqcyrU95Wp3S9LzMcX7p4+zS5u2hzptDmdeHND/vEkDcBQC/cwB2ZwjmTBD0GSOoM0KYVwkhrhyCXRmGPVIMcyQY+ogw5k2CiJsA4TcOwvZEUcyJoOgTRlEnhDIuAoZfOAy7MBx7IDj6gHHUAeFMfgJxvgMxviFZuiIZOiMpOiFNdkIJtkMxtmFZsmIZsmApMmFNboIJboAxrqFZqqIZqqApKqFNZsIJZsAxpuFZouIZouApIuFNXgIKngMyniFamiIaGiMqGiFOVkJylkMylmFakmJqEmMqEmFOToJyjoMyjqEaiqBqCqMqCqEORsByhsOyJSiuIQiuJjCuxJNwBx7ADDdkCyuygQVZwYQ80YTmqEMz1LAtKNgaZGwFEvbAApxjDs4WUnQDCbqCCH0iCS8Qh2eI4VtA8TXA+Aog/PEeC/i7L2D7rBvMs2xQz7RhvuYK/uor2KvtMI+yQz/yDvWWtGO8xRL+ZkvYPukW88Rb1BNtmS+xhr/4Gvaie8yD7NEPtGf+zkXity9iv22T+Smb9E/eJH8lbRq/YhX7ZbvsD92lf/Au9YN2jb9jGf/bl7H9U7eZP2Wb+pO2zb9incTxdWAwdJ/OkH0qg/YtVC6UKF8IKN2oE7JRJWjjssqV0spXgpXt1BeyU1vwTmWKtHOe/FIwua06ItqtGiKarQpihK0zor8WILp7dbT3amjuVSLcO4eLgXsZ",Nc="data:image/webp;base64,UklGRrwOAABXRUJQVlA4TLAOAAAv04PWEA8wgAM4gPMf8BwFbdtIzvizvhdCREyAxFL4kLbDj+aFZtr0piRHAAuIVozDHpWgFKVRmlKU4OjPGDmQiOx67/1bRP8ngHJtq7ZtBRoFrBECoRAahmYohmDx7/ZzPXsBk33OsxTR/wmAW9tu2AajYzSMghFQosBBGfN/fKWO6H+Axu9o6X596c1w/bKCTG5UkQ5vqsjmNg258T0ZN7tU5IfX4G70yLjrhrSty1qMLeQRGQW5QcP9GNElvC6hpAzIKCplTSQGdJmoSigr7RIKc1ET8nZNymsSSrdD8Zoqps2KnJYMsWjW5aIiozz3woNc0A5Yq3LCCvBgtuon8lw5cUknPCrH2hFrVM7YMTyajdqZPJXPXNxnnLn4UDukbTIe1kPjULSpp+JMwtNt+qnrTD0mXfC4HOnHrEk+Z0fweDSp5+JEPnc16eeuE1WB9ECFcqArsBZZgx1AhdGiagh7WcPVomvAvapCOgwVdqur0AYJVT5bQ4U3KDr8TkKV2aDqiDtFx9Wg60CzUZVIHSq1G12JlSUtbgOVelnR4nlJS5ZVLZFXtFxlXQsaVlMjVajWsroaK0p6HAvVelHR4zlJTxRVPZFT9FxFTQ9yqiKuGYoMoynSGlT8MIYiK8maHAMVR0nRFKisKUuqpkgVTVdJ14RUVSUVQ5UluiqtQNUPMVRZQdLlCFTtBUVXWGVdWVB1xVXRdRU0XbiqyvhcV2YWTZmcQ+XPYijTY0mbW6ByP5a1+Sl1i2NFW5hytzxWtcWpdLuONW1oAKC141NdnQWA3k5ODXUPAIx2eiihegcA2N4PZX0eIOmLQ0VfAMj68lDVhwBV33WovcBAewGf6S+w0F8gZ8YLHhgv0DP4Qgf4QjuS3uDTG/xIfkPIb4gj5Q2xvCGP1DdgfcN1pL3i3yv4RH/FO+XEuIaewN+QHUj38AP5HnGg3CMP1HtcB9pF+F6/iNwbF9FHgRe1W+kmfivfJG6Vm+StepPrSbSr8J1+FbkzrqIPAq9qN9Jd/Ea+SzyHcpe8Ue9y3WiX4cfQLyOvjcvoY8DL2kvpNv4U8m3ipXKbfAr1NtdL7Tr8EPp15CGM6+greF17Buk+/gzyfeKFcp98BvU+1zNoF+JH0C8kj2BcSB8BXtg28/9IN8s3iidQbpRPoN7oetf4q/ZL61eSBzCupA8Ar2z7pTv5W5fvFPuVO+VbV+907dcuxe9cv5SsNy6l7xxe2t64dCt/4/Kt4o0rt8o3rt7q+sy1a/H71q8lH7lxLf3I4bXtE5fu5Z+4fK/4xlZeYJKMBXU5wQNUCQ9QL2ABkoQFSN8XAQCGAADA+Dw/1T0/VXVVnZvy3jMVZdcAO6U9M6XPMxOMLVh+XYRl2wmr/nFhVXf8qmlr2vwq7zyrqozVuVXasavycc8Kdswqf5wlBi/COn2cIRovEPBxQFaep4ayrixSheeorku0BSrzHqrdIfHsHTwFPEPVT3OMwQK6XKJz4iUemcDIyoYyy2gySZe+p3L8JQyjcBwDLpE5zyVAxnLGHdJ1Igc4htMvMRjwGtQdvsVe1KnIapdoVLiEP1cvUSn/+3GsQtlLP74/mdIlHhlZKMn8sA0vBL8oyxsEvfz9G9RX+abFSu0y5hxtUVf+QSsr+6DllX7eZKX0Xw1W/P+XP7+gD9/3wOSbQC71+9ukdT98U/sRmH2D+AmYf96i7ud36M9d8sR14/eP01X351NStjmGuvafxqW5hj2VfivPqXyNdBsnYVlFl8z/6U/Va+TVc41wqt2sf1pklZW7Bp4aurj/UcOpK8/Cb7Nn0j3adR6BwMkf584UZVSHfRXv4c/ULzKZEThjhZzGsPAVHqBR8UynAkD9CAuQRZA0jEFZgHQuKRkAAINARqKsQAQAGJ8QpkqZI0j6qX2CmzJlqUw9VKKeqXzCMwH1UEUgU2bKn2AWnXACjipEhOWxoCDAshGeqpSnKuFX4wPiqhCBalSgGuFW/QPCKhGR6lSkOmFX7QP8CgikBoXUIMyqfoAjBmEI3Eu4jrAup5wcf4hGPKvEMatMBCJ/gCUq4VaZY1eF8ET6kEL4VeG4VSXchxgiE3FVOX7ViYeAU0aGA5kIXDVOWA3CUOM7gLKLwYmLhCR8R2QMwi2QbaZCREZ/XWB0IkyZ90yNCGqUbHmNwKny3DQIz2gfUikLAJ0XASAh6T7EMwrlAQA3DUClHkb9kEwhQNlxAEOfkA3qGInhAbdNRdoyyocA47D5pqEEPuThdB2Rkw8xWf+PTUf4EsupOryqUnOcdIh6lZtlHY+qVLNqsoPhpJuBDsOBH0sQWTCHCrhY/Kz+Oc5sGoIef1BVg9dlX7VuRYP7Oa3Wo0e75V/FEJMGq0feC6OH/9VE0JZeZ39QoIf+XcyxZeBeD0B+Wd4FAIC2EfVkv75hp3wiv+45EGE5XhVnblVfEsPsKvHChzVWBLK/w79w0Ml5qsqV77JUfpNdAXO8wkYFTuN4Xn2d51WO45RX6Fd7YznpOsAeUk3DYEEq8PobZJLn1a+KUg8vS/Uj/FWfGB4w3A0ibA6hoaEw5BUq7LQX0CC3U96ToJF5drIQnsxJZgfeE6CVge0hko7EoLDXPuoR8XtVJB/x/3BiJZ69/FFOxO4lkaLCDkCQ8GqsiZeIEl2i6lh6kGgS7Yg2CRJOor5msCjxSBSJfkTmWIn0msZQwkiAxDjCXQynLSKIjkVgoY5iB5mujLrYPS9T99InPHtOpuzlI/lCgo7TF49MXkRO+SYrk3TFCwH6PRDeq58QOGOKUmNCTjviLzgYt4JU3+qfgFteqm6NI/aCoYaBs5MqC8PAb7A7j1TeSWf0lQUfKi2sVFpYKqsZ0O0YKdgpZ6SPp/ICxMf0UFVNg4EqU5TrG+0M94kbQa5NjupqCkSqTl6uTp4aZ6iRIdrk5MoGqknU8h65PAUinclOjuiTlUtTJIqeQD0xJiMHExL1THQKBM5wcExm1fQ4iqs0xWN2Nc54K7PIUzjRp2eR8Ky9ZPCzKJM/0Sa3yB/iF+1YncKiHtLXFo2LPrkTZYqLrmlQNBPOz4k8oZnwsPR6ACAt7Im0sACQVTUcAKAuzAlYeABop7gXGoC+gHMRAFBV4R4yzvHMmPCBeoya0Yf6QmHeSF44094RPH+maokp7oOc95wpWhxS1mI3jGfPpJcszZwBLToFvmhEhhIZEk91JXynWQGpRJpEQ7yqbpJlVcnJzeJWsLQqbpwlVc7xKQzJRIxj95ZE5UvRRzGcrBuK3GtOYGBUfVMcrysK3U+OQUhYeRMchRCwguEHnCN1fmPfsRNL4Tpj6MMYCjVcgpxoRmJgXHNTjMBAJ1Ok8ZzisEKk8DjiDIPgwBK3I8ZQXKsRuG4mZ4YgHfyoP8JnisAdDKfF8lASCFeILBqHHE8IDm1u7Bt2auHo0aiemk/IA2nYexTKp+oTdDphQ5DY8ii+EMccVgR+zDQCtEeyqCDQcyPhoJzrD/AYRkDnS8KuUj8LQj8KHCUAjm4hK7BPr7xWDJZdBpKKlufNqLK+nFgAyJKQaCRKXN1LTN3mOLpVKERrRlxqWpxrSpxqUzsH2bwoii+7QgJeZNpWtdJaNdKyGVc1ovBKmqpTOctCIN6jzJW9zJStboW1boRlM67rL5cw1aduNgjdaOC63sB0rcPKaoeRlQ4ty5tRx/pyqmaLUI0WruotTNV6rKj2GFHp0aLco0SpZ2pmk9CMJq7pTUzTuqykdhlJ2SEfuUtLUtd6tVHZJr8citHGFb2NKVqfva0y2mce/aukT/OKU8N9ipURER8l1DdJGZePimwUJCTNThOJRv4YdhoVNHgjo2RkPgqs0zI6J250Ee00b5GXkf2ck05N6Lx4jjsVnnHTsoYIdc43ZLWdcCpbBZxw2xyKVv5oGHXPc1DSWxk89vCQ9do3S2UUfKgkor0G7BKByiLcq98eIqGoPUK9680RVcYTRSKbJTZkkKgS0czf/Cqj8HPAm9lbWHWpuGoS1m2f4iKhuF0MCe02T2imKucXKCnd+s1OeNAAQBLhbvXmAKCe8ABQRKh7vgUAwKMGoElku3hDA/1MhISS0c4fX+rtTMn6rZD2GyHp10Lcr4Sof+rkgNDxAaZjE1ZGJ4yMTGgZnlAyNDFVckSoxAhX8RGmYjNWRGeMCM8oEZqZGjkkNGKIa/gQ07ApK6FTRkKmtARNTYUcEwoxxhV8jCnYnBXQOSMgc1qA5uZ9Dor7GOT3PsjubdKe66Q5l0l1TpPzOkfFdYzyax9l1zZrj2VWH/OsOqbZeZvD4jaG+a0Ps1udNqcyrU95Wp3S9LzMcX7p4+zS5u2hzptDmdeHND/vEkDcBQC/cwB2ZwjmTBD0GSOoM0KYVwkhrhyCXRmGPVIMcyQY+ogw5k2CiJsA4TcOwvZEUcyJoOgTRlEnhDIuAoZfOAy7MBx7IDj6gHHUAeFMfgJxvgMxviFZuiIZOiMpOiFNdkIJtkMxtmFZsmIZsmApMmFNboIJboAxrqFZqqIZqqApKqFNZsIJZsAxpuFZouIZouApIuFNXgIKngMyniFamiIaGiMqGiFOVkJylkMylmFakmJqEmMqEmFOToJyjoMyjqEaiqBqCqMqCqEORsByhsOyJSiuIQiuJjCuxJNwBx7ADDdkCyuygQVZwYQ80YTmqEMz1LAtKNgaZGwFEvbAApxjDs4WUnQDCbqCCH0iCS8Qh2eI4VtA8TXA+Aog/PEeC/i7L2D7rBvMs2xQz7RhvuYK/uor2KvtMI+yQz/yDvWWtGO8xRL+ZkvYPukW88Rb1BNtmS+xhr/4Gvaie8yD7NEPtGf+zkXity9iv22T+Smb9E/eJH8lbRq/YhX7ZbvsD92lf/Au9YN2jb9jGf/bl7H9U7eZP2Wb+pO2zb9incTxdWAwdJ/OkH0qg/YtVC6UKF8IKN2oE7JRJWjjssqV0spXgpXt1BeyU1vwTmWKtHOe/FIwua06ItqtGiKarQpihK0zor8WILp7dbT3amjuVSLcO4eLgXsZ",{addLike:pv,removeLike:mv}=De(),gv=(n,e,t)=>{const r=document.createElement("div"),i=document.createElement("span"),s=document.createElement("img");return r.classList.add("like-wrapper"),s.alt="Like icon",s.classList.add("like-icon"),i.innerText="(0)",i.classList.add("like-count"),i.innerText=`(${t.length})`,t.includes(n)&&(s.src=`${Vc}`,s.addEventListener("click",async()=>{mv(e.ref).then(()=>{s.src=`${Nc}`}).catch(o=>{throw new Error(`${o.message}`)})})),t.includes(n)||(s.src=`${Nc}`,s.addEventListener("click",()=>{pv(e.ref).then(()=>{s.src=`${Vc}`}).catch(o=>{throw new Error(`${o.message}`)})})),r.appendChild(s),r.appendChild(i),r},{editPost:_v}=De(),yv=(n,e)=>{const t=document.createElement("dialog"),r=document.createElement("div"),i=document.createElement("h3"),s=document.createElement("textarea"),o=document.createElement("button"),a=document.createElement("button");for(t.id="edit-modal",t.classList.add("modal","edit-modal"),r.classList.add("wrapper","dialog-wrapper"),a.classList.add("button","cancel-button","small-button"),o.classList.add("button","edit-button","small-button"),a.textContent="Cancel",o.textContent="Edit",i.innerText="Edit your post:",s.id="new-input",s.classList.add("textarea"),s.rows=4,s.innerText=`${n}`;t.hasChildNodes();)t.removeChild(t.firstChild);return o.addEventListener("click",async()=>{let c=document.getElementById("new-input").innerText;c=s.value,await _v(c,e)}),a.addEventListener("click",()=>t.close()),r.appendChild(i),r.appendChild(s),r.appendChild(o),r.appendChild(a),t.appendChild(r),t},{deletePost:Ev}=De(),vv=n=>{const e=document.createElement("dialog"),t=document.createElement("div"),r=document.createElement("h3"),i=document.createElement("button"),s=document.createElement("button");for(e.id="delete-modal",e.classList.add("modal","delete-modal"),t.classList.add("wrapper","dialog-wrapper"),s.classList.add("button","cancel-button","small-button"),i.classList.add("button","delete-button","small-button"),s.textContent="Cancel",i.textContent="Delete",r.innerText="Do you want to delete this post?";e.hasChildNodes();)e.removeChild(e.firstChild);return i.addEventListener("click",async()=>{await Ev(n)}),s.addEventListener("click",()=>e.close()),t.appendChild(r),t.appendChild(i),t.appendChild(s),e.appendChild(t),e},{getDisplayName:Iv}=De(),wv=(n,e,t,r,i,s)=>{const o=Iv(),a=document.createElement("div"),c=document.createElement("div"),l=document.createElement("p"),u=document.createElement("p"),h=document.createElement("div"),d=document.createElement("button"),f=document.createElement("button"),I=vv(`${i}`),T=yv(`${r}`,`${i}`);return a.classList.add("card","post-card"),c.classList.add("wrapper","post-card-wrapper"),l.classList.add("title","post-title"),u.classList.add("text","post-text"),h.classList.add("buttons","button-group"),d.classList.add("button","edit-button","post-edit-button","small-button"),d.textContent="Edit",f.classList.add("button","edit-button","post-edit-button","small-button"),f.textContent="Delete",l.textContent=`${n} published on ${e} at ${t}`,u.textContent=`${r}`,c.appendChild(l),c.appendChild(u),`${n}`===o&&(d.addEventListener("click",()=>{T.showModal()}),f.addEventListener("click",()=>{I.showModal()}),h.appendChild(d),h.appendChild(f),c.appendChild(h),c.appendChild(T),c.appendChild(I)),h.appendChild(s),c.appendChild(h),a.appendChild(c),a},Tv=()=>{const n=document.createElement("button"),e=document.createElement("i");return n.id="top-button",n.className="top-button",n.title="Go to top",e.classList.add("fa","fa-chevron-up"),n.appendChild(e),n},{getDisplayName:Av,getProfilePicture:Rv,getEmail:Cv,getPostsRef:Pv,createPost:Sv,userLogout:bv}=De();function kv(n){const e=document.createElement("div"),t=document.createElement("header"),r=document.createElement("img"),i=document.createElement("nav"),s=document.createElement("img"),o=document.createElement("h3"),a=document.createElement("button"),c=document.createElement("h3"),l=document.createElement("input"),u=document.createElement("button"),h=$n(),d=document.createElement("div"),f=Tv();s.src=`${Rv()||fv}`,s.loading="lazy",s.alt="User's image",s.classList.add("img","user-img"),o.textContent=`Welcome, ${Av()}!`,r.src=`${Hn}`,r.alt="logo Pets' Diaries",r.classList.add("logo","feed-logo"),a.textContent="Logout",a.classList.add("button","logout-button","small-button"),l.classList.add("input","feed-input"),l.id="new-post-input",l.placeholder="Write your post here",l.required=!0,l.autocomplete="off",d.classList.add("posts-wrapper"),u.textContent="Publish",u.classList.add("button","publish-button","small-button"),c.textContent="Share your stories:",c.classList.add("title","post-title"),t.className="header",e.className="feed-div",r.addEventListener("click",()=>h.showModal()),o.addEventListener("click",()=>n("/profile")),s.addEventListener("click",()=>n("/profile")),a.addEventListener("click",()=>{bv().then(()=>n("/"))}),u.addEventListener("click",async E=>{E.preventDefault();const v=document.querySelector("input");await Sv(v.value),l.value=""});function I(){document.body.scrollTop>20||document.documentElement.scrollTop>20?f.style.display="flex":f.style.display="none"}function T(){document.body.scrollTop=0,document.documentElement.scrollTop=0}return window.onscroll=()=>I(),f.addEventListener("click",E=>{E.preventDefault(),T()}),t.appendChild(r),i.appendChild(s),i.appendChild(o),i.appendChild(a),i.appendChild(c),i.appendChild(l),i.appendChild(u),i.appendChild(h),e.appendChild(t),e.appendChild(i),e.appendChild(d),e.appendChild(f),JE(Pv(),E=>{for(;d.hasChildNodes();)d.removeChild(d.firstChild);E.forEach(v=>{const A=v.data({serverTimestamps:"estimate"}),U=v.data().displayName||v.data().email,te=A.time.toDate().toLocaleDateString(),Ve=A.time.toDate().toLocaleTimeString(),{content:fe}=v.data(),Ne=Cv(),{likes:mr}=v.data(),ct=v.id,kt=gv(Ne,v,mr),Gh=wv(U,te,Ve,fe,ct,kt);d.appendChild(Gh)})}),e}const{getDisplayName:Dv,updateUser:Vv}=De(),Nv=n=>{const e=document.createElement("dialog"),t=document.createElement("div"),r=document.createElement("p"),i=document.createElement("input"),s=document.createElement("button"),o=document.createElement("button");for(e.classList.add("modal","update-modal"),t.classList.add("wrapper","dialog-wrapper"),s.classList.add("button","update-button","small-button"),o.classList.add("button","cancel-button","small-button"),r.innerText="Enter your new username",i.id="new-name",i.classList.add("input"),i.value=Dv(),s.textContent="Change Username",o.textContent="Cancel";e.hasChildNodes();)e.removeChild(e.firstChild);return s.addEventListener("click",async()=>{let a=document.getElementById("new-name").value;a=i.value,await Vv({displayName:a}).then(()=>{e.close(),n("/feed")}).catch(c=>{throw new Error(`${c}`)})}),o.addEventListener("click",()=>e.close()),t.appendChild(r),t.appendChild(i),t.appendChild(s),t.appendChild(o),e.appendChild(t),e},{updateUser:Lv}=De(),Ov=n=>{const e=document.createElement("dialog"),t=document.createElement("div"),r=document.createElement("p"),i=document.createElement("input"),s=document.createElement("button"),o=document.createElement("button");for(e.classList.add("modal","update-modal"),t.classList.add("wrapper","dialog-wrapper"),s.classList.add("button","update-button","small-button"),o.classList.add("button","cancel-button","small-button"),r.innerText="Enter the url of you image",i.id="new-img",i.classList.add("input"),s.textContent="Change Picture",o.textContent="Cancel";e.hasChildNodes();)e.removeChild(e.firstChild);return s.addEventListener("click",async()=>{let a=document.getElementById("new-img").value;a=i.value,await Lv({photoURL:a}).then(()=>{e.close(),n("/feed")}).catch(c=>{throw new Error(`${c}`)})}),o.addEventListener("click",()=>e.close()),t.appendChild(r),t.appendChild(i),t.appendChild(s),t.appendChild(o),e.appendChild(t),e},{getDisplayName:Mv,userLogout:xv}=De();function Uv(n){const e=document.createElement("div"),t=document.createElement("header"),r=document.createElement("nav"),i=document.createElement("h3"),s=document.createElement("div"),o=document.createElement("button"),a=document.createElement("button"),c=document.createElement("button"),l=document.createElement("button"),u=document.createElement("img"),h=$n(),d=Nv(n),f=Ov(n);return u.src=`${Hn}`,u.alt="logo Pets' Diaries",u.classList.add("logo"),e.className="home-div",t.className="header",r.className="profile-nav",s.className="content-div",o.classList.add("button","login-button"),a.classList.add("button","login-button"),c.classList.add("button","login-button"),l.classList.add("button","login-button"),u.addEventListener("click",()=>h.showModal()),i.textContent=`Welcome, ${Mv()}, this is your Profile.`,c.textContent="Update username",c.addEventListener("click",()=>d.showModal()),l.textContent="Update picture",l.addEventListener("click",()=>f.showModal()),o.textContent="Go back to feed",o.addEventListener("click",()=>n("/feed")),a.textContent="Logout",a.addEventListener("click",()=>{xv().then(()=>n("/"))}),t.appendChild(u),t.appendChild(h),r.appendChild(i),r.appendChild(c),r.appendChild(l),r.appendChild(o),r.appendChild(a),r.appendChild(d),r.appendChild(f),e.appendChild(t),e.appendChild(r),e.appendChild(s),e}const xt=document.getElementById("root"),sa={"/":zh,"/login":sv,"/signup":dv,"/feed":kv,"/profile":Uv},oa=(n,e=xt)=>{for(window.history.pushState({},n,window.location.origin+n);e.firstChild;)e.removeChild(e.firstChild);e.appendChild(sa[n](oa))};window.onpopstate=()=>{for(;xt.firstChild;)xt.removeChild(xt.firstChild);xt.appendChild(sa[window.location.pathname](oa))};xt.appendChild(sa[window.location.pathname](oa));