(self["webpackChunkcelenganku_app"]=self["webpackChunkcelenganku_app"]||[]).push([[111],{80599:()=>{function e(n){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){e=function e(n){return typeof n}}else{e=function e(n){return n&&typeof Symbol==="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n}}return e(n)}function n(e,n){if(!(e instanceof n)){throw new TypeError("Cannot call a class as a function")}}function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function r(e,n,r){if(n)t(e.prototype,n);if(r)t(e,r);return e}function a(e,n){if(typeof n!=="function"&&n!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:true,configurable:true}});if(n)f(e,n)}function o(e){var n=l();return function t(){var r=d(e),a;if(n){var o=d(this).constructor;a=Reflect.construct(r,arguments,o)}else{a=r.apply(this,arguments)}return i(this,a)}}function i(n,t){if(t&&(e(t)==="object"||typeof t==="function")){return t}return u(n)}function u(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function s(e){var n=typeof Map==="function"?new Map:undefined;s=function e(t){if(t===null||!p(t))return t;if(typeof t!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof n!=="undefined"){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,d(this).constructor)}r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:false,writable:true,configurable:true}});return f(r,t)};return s(e)}function c(e,n,t){if(l()){c=Reflect.construct}else{c=function e(n,t,r){var a=[null];a.push.apply(a,t);var o=Function.bind.apply(n,a);var i=new o;if(r)f(i,r.prototype);return i}}return c.apply(null,arguments)}function l(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function p(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function f(e,n){f=Object.setPrototypeOf||function e(n,t){n.__proto__=t;return n};return f(e,n)}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(n){return n.__proto__||Object.getPrototypeOf(n)};return d(e)}var h=function(e){a(i,e);var t=o(i);function i(){n(this,i);return t.apply(this,arguments)}r(i,[{key:"_bgColor",value:function e(){var n="md:bg-primary";if(this._role==="admin"){n="md:bg-blue-500"}return n}},{key:"_renderLinksByRole",value:function e(){var n=this._role;var t="";if(n==="user"){t='\n        <a href="#/profile" class="flex px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n          role="menuitem">\n          <i class="text-primary flex"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\n          </svg></i>\n          <p class="flex ml-2 leading-relaxed">Lihat Profil</p>\n        </a>\n        <a href="#" class="flex px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n          role="menuitem">\n          <i class="text-primary flex"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n          </svg></i>\n          <p class="flex ml-2 leading-relaxed">Tentang Celenganku</p>\n        </a>\n        <a href="/api/logout" class="flex px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n          role="menuitem">\n          <i class="text-primary flex"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />\n          </svg></i>\n          <p class="flex ml-2 leading-relaxed">Keluar</p>\n        </a>\n        '}else{t='\n        <a href="#/profile" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Edit Profil</a>\n        <a href="#/help" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Bantuan</a>\n          <a href="/api/logout" class="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">\n            Keluar\n          </a>'}return t}},{key:"_render",value:function e(){var n=this._name;var t=this._avatar||"http://ui-avatars.com/api/?name=".concat(n,"&background=fff");this.className="".concat(this._bgColor()," z-50 sticky top-0 bg-white rounded-b-lg flex flex-wrap items-center md:rounded-bl-none md:h-16 pt-2 pb-2 md:justify-end");this.innerHTML='\n          <div class="flex w-full p-4 md:p-0 md:w-auto">\n            <div class="flex relative w-10 h-10 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">\n              <img class="w-10 h-10 rounded-full object-cover" src="'.concat(t,'" alt="').concat(n,' Photo Profile">\n            </div>\n            <div class="flex flex-col leading-tight mt-1 md:text-white px-1">\n              <p class="font-light">Halo,</p>\n              <p class="font-light" id="greeting-username">').concat(n,'</p>\n            </div>\n            <button id="settings" class="h-12 w-12 p-3 mr-3 md:text-white ml-auto md:ml-0">\n              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />\n              </svg>\n            </button>\n            <div id="settings-dropdown" class="hidden origin-top-right absolute right-0 mt-10 mr-5 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">\n              <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">\n                ').concat(this._renderLinksByRole(),"\n              </div>\n            </div>\n          </div>")}},{key:"role",set:function e(n){this._role=n;this._render()}},{key:"name",set:function e(n){this._name=n;this._render()}},{key:"avatar",set:function e(n){this._avatar=n;this._render()}}]);return i}(s(HTMLElement));customElements.define("app-bar",h)},61400:()=>{function e(n){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){e=function e(n){return typeof n}}else{e=function e(n){return n&&typeof Symbol==="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n}}return e(n)}function n(e,n){if(!(e instanceof n)){throw new TypeError("Cannot call a class as a function")}}function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function r(e,n,r){if(n)t(e.prototype,n);if(r)t(e,r);return e}function a(e,n){if(typeof n!=="function"&&n!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:true,configurable:true}});if(n)f(e,n)}function o(e){var n=l();return function t(){var r=d(e),a;if(n){var o=d(this).constructor;a=Reflect.construct(r,arguments,o)}else{a=r.apply(this,arguments)}return i(this,a)}}function i(n,t){if(t&&(e(t)==="object"||typeof t==="function")){return t}return u(n)}function u(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function s(e){var n=typeof Map==="function"?new Map:undefined;s=function e(t){if(t===null||!p(t))return t;if(typeof t!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof n!=="undefined"){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,d(this).constructor)}r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:false,writable:true,configurable:true}});return f(r,t)};return s(e)}function c(e,n,t){if(l()){c=Reflect.construct}else{c=function e(n,t,r){var a=[null];a.push.apply(a,t);var o=Function.bind.apply(n,a);var i=new o;if(r)f(i,r.prototype);return i}}return c.apply(null,arguments)}function l(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function p(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function f(e,n){f=Object.setPrototypeOf||function e(n,t){n.__proto__=t;return n};return f(e,n)}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(n){return n.__proto__||Object.getPrototypeOf(n)};return d(e)}var h=function(e){a(i,e);var t=o(i);function i(){n(this,i);return t.apply(this,arguments)}r(i,[{key:"_bgColor",value:function e(){var n="bg-primary";if(this._role==="admin"){n="bg-secondary"}return n}},{key:"_renderNavsByRole",value:function e(){var n=this._role;var t="";if(n==="admin"){t='<a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/admin">\n            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" \n                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />\n            </svg>\n        </a>\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/admin/pay">\n          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />\n          </svg>\n        </a>\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/admin/data">\n          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\n          </svg>\n        </a>'}else{t='\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#">\n        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />\n        </svg>\n        </a>\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/transaction">\n        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>\n        </a>\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/report">\n          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>\n        </a>\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/profile">\n          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\n          </svg>\n        </a>\n        '}return t}},{key:"_render",value:function e(){this.className="".concat(this._bgColor()," z-50 fixed bottom-0 w-full md:relative md:w-auto md:h-auto md:min-h-screen");this.innerHTML='\n    <div id="navs" class="sticky top-0 flex flex-row justify-evenly md:flex-col">\n        <p class="h-16 w-16 p-4 text-white">\n            <img src="./images/app-icon.png">\n            <g stroke="null">\n                <ellipse stroke="#000" ry="4.54353" rx="4.54353" id="svg_2" cy="12" cx="5.51189" stroke-width="0" fill="#ffffff"/>\n                <ellipse stroke="#000" ry="4.54353" rx="4.54353" id="svg_3" cy="12" cx="18.48811" stroke-width="0" fill="#ffffff"/>\n            </g>\n            </svg>\n        </p>\n        '.concat(this._renderNavsByRole(),"\n    </div>")}},{key:"role",set:function e(n){this._role=n;this._render()}}]);return i}(s(HTMLElement));customElements.define("side-bar",h)},3078:(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var r=function e(n){var t=n.split(".")[1];var r=t.replace(/-/g,"+").replace(/_/g,"/");var a=decodeURIComponent(atob(r).split("").map((function(e){return"%".concat("00".concat(e.charCodeAt(0).toString(16)).slice(-2))})).join(""));return JSON.parse(a)};const a=r;var o={TOKEN:"api/token/",MIDTRANS:"https://cors-anywhere.herokuapp.com/https://app.sandbox.midtrans.com/snap/v1/transactions",SISWA:{LIST:"api/siswa/",LIST_DATA:"api/siswa/data",AKUN:function e(n){return"api/siswa/".concat(n)},DATA:function e(n){return"api/siswa/".concat(n,"/data")},PROFIL:function e(n){return"api/siswa/".concat(n,"/profil")},SALDO:function e(n){return"api/siswa/".concat(n,"/saldo")},TRANSAKSI:function e(n){return"api/transaction/nisn/".concat(n)}},TRANSAKSI:{ID:function e(n){return"api/transaction/".concat(n)},CREATE:"api/transaction/create"},ADMIN:function e(n){return"api/admin/".concat(n)},UPLOAD_FILE:"api/upload",DELETE_FILE:"api/delete"};const i=o;function u(e,n,t,r,a,o,i){try{var u=e[o](i);var s=u.value}catch(e){t(e);return}if(u.done){n(s)}else{Promise.resolve(s).then(r,a)}}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){u(o,r,a,i,s,"next",e)}function s(e){u(o,r,a,i,s,"throw",e)}i(undefined)}))}}function c(e,n){if(!(e instanceof n)){throw new TypeError("Cannot call a class as a function")}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function p(e,n,t){if(n)l(e.prototype,n);if(t)l(e,t);return e}var f=function(){function e(){c(this,e)}p(e,null,[{key:"retrieveUser",value:function(){var e=s(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return fetch(i.TOKEN);case 3:n=r.sent;r.next=6;return n.json();case 6:t=r.sent;r.next=9;return a(t.response);case 9:t=r.sent;return r.abrupt("return",t);case 13:r.prev=13;r.t0=r["catch"](0);return r.abrupt("return",{id:null,role:"unauthorized",error:true,message:r.t0});case 16:case"end":return r.stop()}}}),e,null,[[0,13]])})));function n(){return e.apply(this,arguments)}return n}()},{key:"getMidtransToken",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t,r,a;return regeneratorRuntime.wrap((function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;t="SB-Mid-server-XmFoI8_j9MpEyaNvbE1-sQiN:";r=btoa(t);o.next=5;return fetch(i.MIDTRANS,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic ".concat(r)},body:JSON.stringify(n)});case 5:a=o.sent;return o.abrupt("return",a.json());case 9:o.prev=9;o.t0=o["catch"](0);return o.abrupt("return",o.t0);case 12:case"end":return o.stop()}}}),e,null,[[0,9]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"createTransaction",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return fetch(i.TRANSAKSI.CREATE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:t=r.sent;return r.abrupt("return",t.json());case 7:r.prev=7;r.t0=r["catch"](0);console.log(r.t0);return r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}}),e,null,[[0,7]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"updateTransaction",value:function(){var e=s(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function e(a){while(1){switch(a.prev=a.next){case 0:a.prev=0;a.next=3;return fetch(i.TRANSAKSI.ID(n),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:r=a.sent;return a.abrupt("return",r.json());case 7:a.prev=7;a.t0=a["catch"](0);console.log(a.t0);return a.abrupt("return",a.t0);case 11:case"end":return a.stop()}}}),e,null,[[0,7]])})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"uploadFile",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function e(a){while(1){switch(a.prev=a.next){case 0:a.prev=0;t=new FormData;t.append("avatar",n);console.log(t);a.next=6;return fetch(i.UPLOAD_FILE,{method:"POST",body:t});case 6:r=a.sent;return a.abrupt("return",r.json());case 10:a.prev=10;a.t0=a["catch"](0);return a.abrupt("return",{});case 13:case"end":return a.stop()}}}),e,null,[[0,10]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"deleteFile",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t,r,a,o,u;return regeneratorRuntime.wrap((function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;t=n.search("%2F");r=n.search("alt");a=n.slice(t+3,r-1);o={url:n,name:a};s.next=7;return fetch(i.DELETE_FILE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 7:u=s.sent;return s.abrupt("return",u.json());case 11:s.prev=11;s.t0=s["catch"](0);return s.abrupt("return",{});case 14:case"end":return s.stop()}}}),e,null,[[0,11]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"getAllSiswaData",value:function(){var e=s(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return fetch(i.SISWA.LIST_DATA);case 3:n=r.sent;r.next=6;return n.json();case 6:t=r.sent;return r.abrupt("return",t.restaurants);case 10:r.prev=10;r.t0=r["catch"](0);return r.abrupt("return",{});case 13:case"end":return r.stop()}}}),e,null,[[0,10]])})));function n(){return e.apply(this,arguments)}return n}()},{key:"getAllAkunSiswa",value:function(){var e=s(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function e(t){while(1){switch(t.prev=t.next){case 0:t.prev=0;t.next=3;return fetch(i.SISWA.LIST);case 3:n=t.sent;return t.abrupt("return",n.json());case 7:t.prev=7;t.t0=t["catch"](0);return t.abrupt("return",{});case 10:case"end":return t.stop()}}}),e,null,[[0,7]])})));function n(){return e.apply(this,arguments)}return n}()},{key:"getDataSiswa",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return fetch(i.SISWA.DATA(n));case 3:t=r.sent;return r.abrupt("return",t.json());case 7:r.prev=7;r.t0=r["catch"](0);return r.abrupt("return",{});case 10:case"end":return r.stop()}}}),e,null,[[0,7]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"getProfilSiswa",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return fetch(i.SISWA.PROFIL(n));case 3:t=r.sent;return r.abrupt("return",t.json());case 7:r.prev=7;r.t0=r["catch"](0);return r.abrupt("return",{});case 10:case"end":return r.stop()}}}),e,null,[[0,7]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"getAkunSiswa",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return fetch(i.SISWA.AKUN(n));case 3:t=r.sent;return r.abrupt("return",t.json());case 7:r.prev=7;r.t0=r["catch"](0);return r.abrupt("return",{});case 10:case"end":return r.stop()}}}),e,null,[[0,7]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"updateSaldo",value:function(){var e=s(regeneratorRuntime.mark((function e(n,t,r){var a,o;return regeneratorRuntime.wrap((function e(u){while(1){switch(u.prev=u.next){case 0:a={saldo:t,jenis:r};u.prev=1;u.next=4;return fetch(i.SISWA.SALDO(n),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:o=u.sent;return u.abrupt("return",o.json());case 8:u.prev=8;u.t0=u["catch"](1);console.log(u.t0);return u.abrupt("return",u.t0);case 12:case"end":return u.stop()}}}),e,null,[[1,8]])})));function n(n,t,r){return e.apply(this,arguments)}return n}()},{key:"getTransaksiSiswa",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return fetch(i.SISWA.TRANSAKSI(n));case 3:t=r.sent;return r.abrupt("return",t.json());case 7:r.prev=7;r.t0=r["catch"](0);return r.abrupt("return",{});case 10:case"end":return r.stop()}}}),e,null,[[0,7]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"deleteTransaksiSiswa",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return fetch(i.TRANSAKSI.ID(n),{method:"DELETE"});case 3:t=r.sent;return r.abrupt("return",t.json());case 7:r.prev=7;r.t0=r["catch"](0);return r.abrupt("return",r.t0);case 10:case"end":return r.stop()}}}),e,null,[[0,7]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"updateAkunSiswa",value:function(){var e=s(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function e(a){while(1){switch(a.prev=a.next){case 0:a.prev=0;a.next=3;return fetch(i.SISWA.AKUN(n),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:r=a.sent;return a.abrupt("return",r.json());case 7:a.prev=7;a.t0=a["catch"](0);return a.abrupt("return",{});case 10:case"end":return a.stop()}}}),e,null,[[0,7]])})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"getAdmin",value:function(){var e=s(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return fetch(i.ADMIN(n));case 3:t=r.sent;return r.abrupt("return",t.json());case 7:r.prev=7;r.t0=r["catch"](0);return r.abrupt("return",{});case 10:case"end":return r.stop()}}}),e,null,[[0,7]])})));function n(n){return e.apply(this,arguments)}return n}()}]);return e}();const d=f},15978:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r={getTimeCounter:function e(n){var t=(new Date).getTime();var r=n-t;var a=Math.floor(r%(1e3*60*60*24)/(1e3*60*60));var o=Math.floor(r%(1e3*60*60)/(1e3*60));var i=Math.floor(r%(1e3*60)/1e3);return{distance:r,hours:a,minutes:o,seconds:i}},isDateInThisWeek:function e(n){var t=new Date;var r=t.getDate();var a=t.getDay();var o=new Date(t.setDate(r-a));var i=new Date(o);i.setDate(i.getDate()+6);return n>=o&&n<=i}};const a=r},94115:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r={triggerEvent:function e(n,t){if("createEvent"in document){var r=document.createEvent("HTMLEvents");r.initEvent(t,false,true);n.dispatchEvent(r)}else{var a=document.createEventObject();a.eventType=t;n.fireEvent("on".concat(a.eventType),a)}},copyTextToClipboard:function e(n){var t=document.createElement("textarea");t.style.position="fixed";t.style.top=0;t.style.left=0;t.style.width="2em";t.style.height="2em";t.style.padding=0;t.style.border="none";t.style.outline="none";t.style.boxShadow="none";t.style.background="transparent";t.value=n;document.body.appendChild(t);t.focus();t.select();try{var r=document.execCommand("copy");var a=r?"successful":"unsuccessful";console.log("Copying text command was ".concat(a))}catch(e){console.log("Oops, unable to copy")}document.body.removeChild(t)}};const a=r},82502:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});function r(e,n,t,r,a,o,i){try{var u=e[o](i);var s=u.value}catch(e){t(e);return}if(u.done){n(s)}else{Promise.resolve(s).then(r,a)}}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,o){var i=e.apply(n,t);function u(e){r(i,a,o,u,s,"next",e)}function s(e){r(i,a,o,u,s,"throw",e)}u(undefined)}))}}var o={init:function e(n){var t=this;return a(regeneratorRuntime.mark((function e(){var r,a,o,i;return regeneratorRuntime.wrap((function e(u){while(1){switch(u.prev=u.next){case 0:r=n.formInputs,a=n.submitButton,o=n.isEdit,i=o===void 0?false:o;t._formInputs=r;t._submitButton=a;t._isEdit=i;t._inputTemp={};u.next=7;return t._createEvent();case 7:case"end":return u.stop()}}}),e)})))()},_createEvent:function e(){var n=this;return a(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:t=n._formInputs;if(t.length!==undefined){t.forEach((function(e){n._showPasswordToggle(e);if(n._isEdit)n._setTemp(e);e.addEventListener("keyup",(function(t){t.preventDefault();n._validateInput(e)}))}))}else{n._showPasswordToggle(t);if(n._isEdit)n._setTemp(t);t.addEventListener("keyup",(function(e){e.preventDefault();n._validateInput(t)}))}case 2:case"end":return r.stop()}}}),e)})))()},_setTemp:function e(n){var t=this;return a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:t._inputTemp[n.name]=n.value;case 1:case"end":return r.stop()}}}),e)})))()},_showPasswordToggle:function e(n){return a(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function e(a){while(1){switch(a.prev=a.next){case 0:if(n.type==="password"){t=document.createElement("div");t.className="relative w-full";t.id="".concat(n.id,"-wrapper");t.innerHTML='\n          <div class="absolute inset-y-0 right-0 flex items-center px-2">\n            <input class="hidden password-toggle" id="'.concat(n.id,'-toggle" type="checkbox">\n            <label class="rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer password-label" for="').concat(n.id,'-toggle">\n            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />\n        </svg>\n            </label>\n          </div>');n.parentElement.insertBefore(t,n);t.appendChild(n);r=document.getElementById("".concat(n.id,"-toggle"));r.addEventListener("change",(function(){var e=r.parentElement.querySelector(".password-label");if(n.type==="password"){n.type="text";e.innerHTML='<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />\n        </svg>'}else{n.type="password";e.innerHTML='<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />\n        </svg>'}n.focus()}))}case 1:case"end":return a.stop()}}}),e)})))()},_validateInput:function e(n){var t=this;return a(regeneratorRuntime.mark((function e(){var r,a,o,i,u,s,c,l,p,f,d;return regeneratorRuntime.wrap((function e(h){while(1){switch(h.prev=h.next){case 0:r=["border-red-500","border-opacity-50","focus:border-red-500"];a=["border-green-500","border-opacity-50","focus:border-green-500"];o=document.createElement("span");o.className="text-sm text-red-500";o.id="".concat(n.id,"-alert");i=[];if("rule"in n.dataset){u=n.dataset.rule.split(" ");u.forEach((function(e){if(e==="required"){if(n.value===""){i.push("".concat(n.name," tidak boleh kosong"))}else if(i.includes("".concat(n.name," tidak boleh kosong"))){i.splice(i.indexOf("".concat(n.name," tidak boleh kosong")),1)}}else if(e==="no-space"){if(n.value.indexOf(" ")>=0){i.push("".concat(n.name," tidak boleh mengandung spasi"))}else if(i.includes("".concat(n.name," tidak boleh mengandung spasi"))){i.splice(i.indexOf("".concat(n.name," tidak boleh mengandung spasi")),1)}}else if(e.includes("number-must-")){var t=parseInt(e.replace("number-must-",""),10);if(n.value.length<t||n.value.length>t){i.push("".concat(n.name," harus berisi ").concat(t," digit angka"))}else if(i.includes("".concat(n.name," harus berisikan ").concat(t," digit angka"))){i.splice(i.indexOf("".concat(n.name," harus berisi ").concat(t," digit angka")),1)}}else if(e.includes("value-more-than-")){var r=parseInt(e.replace("value-more-than-",""),10);if(parseInt(n.value,10)<r){i.push("Minimal ".concat(n.name," adalah ").concat(r+1))}else if(i.includes("Minimal ".concat(n.name," adalah ").concat(r+1))){i.splice(i.indexOf("Minimal ".concat(n.name," adalah ").concat(r+1)),1)}}else if(e.includes("multiple-of-")){var a=parseInt(e.replace("multiple-of-",""),10);if(parseInt(n.value,10)%a!==0){i.push("".concat(n.name," merupakan kelipatan ").concat(a))}else if(i.includes("".concat(n.name," merupakan kelipatan ").concat(a))){i.splice(i.indexOf("".concat(n.name," merupakan kelipatan ").concat(a)),1)}}else if(e.includes("cannot-more-than-")){var o=parseInt(e.replace("cannot-more-than-",""),10);if(parseInt(n.value,10)>o){i.push("".concat(n.name," tidak bisa lebih dari jumlah saldo"))}else if(i.includes("".concat(n.name," tidak bisa lebih dari jumlah saldo"))){i.splice(i.indexOf("".concat(n.name," tidak bisa lebih dari jumlah saldo")),1)}}else if(e.includes("email")){if(!(n.value.includes("@")&&n.value.split("@")[1].includes("."))){i.push("".concat(n.name," harus berisikan format: your@email.com"))}else if(i.includes("".concat(n.name," harus berisikan format: your@email.com"))){i.splice(i.indexOf("".concat(n.name," harus berisikan format: your@email.com")),1)}}else if(e.includes("equal-")){var u=document.querySelector('input[data-equal="'.concat(e.replace("equal-",""),'"]'));if(n.value!==u.value){i.push("Input harus sama dengan ".concat(u.name))}else if(i.includes("Input harus sama dengan ".concat(u.name))){i.splice(i.indexOf("Input harus sama dengan ".concat(u.name)),1)}}}))}s=function e(){if(t._isEdit){t._submitButton.disabled=false}else{var n;var r=document.querySelectorAll("input.border-green-500");if(t._formInputs.length!==undefined){if(r.length===t._formInputs.length){t._submitButton.disabled=false}else{t._submitButton.disabled=true}}else if((n=t._formInputs.className).includes.apply(n,a)){t._submitButton.disabled=false}else{t._submitButton.disabled=true}}};c=document.getElementById("".concat(n.id,"-alert"));if(i.length>0){t._submitButton.disabled=true;(l=n.classList).add.apply(l,r);(p=n.classList).remove.apply(p,a);if(typeof c!=="undefined"&&c!=null){c.innerHTML=i[0]}else{o.innerHTML=i[0];if(n.name==="Password"){n.parentElement.parentElement.insertBefore(o,n.parentElement.nextSibling)}else{n.parentElement.insertBefore(o,n.nextSibling)}}}else{try{(f=n.classList).remove.apply(f,r);(d=n.classList).add.apply(d,a);c.remove()}catch(e){}s()}case 10:case"end":return h.stop()}}}),e)})))()}};const i=o},7504:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r={convertToCashFormat:function e(n){var t=n.toString().split("").reverse().join("");var r=t.match(/\d{1,3}/g);r=r.join(".").split("").reverse().join("");return r},convertCasttoInt:function e(n){var t=n.replace(".","");t=+t;return t}};const a=r},34746:(e,n,t)=>{"use strict";var r=t(16009);var a=t.n(r);var o=t(59777);var i=t(24073);var u=t(65665);var s=t(94192);var c=new s.Z({content:document.querySelector("main"),sidebar:document.createElement("side-bar"),appbar:document.querySelector("app-bar")});window.addEventListener("hashchange",(function(){c.loadPage()}));window.addEventListener("load",(function(){c.loadPage()}));if(false){}}}]);
//# sourceMappingURL=main.49ea73a0.js.map