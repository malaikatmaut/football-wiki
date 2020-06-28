!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}({0:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o="http://api.football-data.org/v2/",c={headers:{"X-Auth-Token":"26d1d3867a464ed7ab5ac2c695c8d979"}};function i(t){return 200===t.status?Promise.resolve(t):(a(t.status),Promise.reject(new Error(t.statusText)))}function u(t){return t.json()}function a(t){console.log("Error: "+t)}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,s;return e=t,s=[{key:"getCompetitions",value:function(){return"caches"in window&&caches.match("".concat(o,"competitions?plan=TIER_ONE")).then(i).then(u).then((function(t){return t.competitions?Promise.resolve(t.competitions):Promise.reject("getCompetitions:  failed response.")})).catch(a),fetch("".concat(o,"competitions?plan=TIER_ONE"),c).then(i).then(u).then((function(t){return t.competitions?Promise.resolve(t.competitions):Promise.reject("getCompetitions:  failed response.")})).catch(a)}},{key:"getCompetitionTeams",value:function(t){return"caches"in window&&caches.match("".concat(o,"competitions/").concat(t,"/teams")).then(i).then(u).then((function(t){return t.teams?Promise.resolve(t.teams):Promise.reject("getCompetitionTeams: failed response.")})).catch(a),fetch("".concat(o,"competitions/").concat(t,"/teams"),c).then(i).then(u).then((function(t){return t.teams?Promise.resolve(t.teams):Promise.reject("getCompetitionTeams: failed response.")})).catch(a)}},{key:"getCompetitionStandings",value:function(t){return"caches"in window&&caches.match("".concat(o,"competitions/").concat(t,"/standings?standingType=TOTAL")).then(i).then(u).then((function(t){return t?Promise.resolve(t):Promise.reject("getCompetitionStandings: failed response.")})).catch(a),fetch("".concat(o,"competitions/").concat(t,"/standings?standingType=TOTAL"),c).then(i).then(u).then((function(t){return t?Promise.resolve(t):Promise.reject("getCompetitionStandings: failed response.")})).catch(a)}},{key:"getTeamDetail",value:function(t){return"caches"in window&&caches.match("".concat(o,"teams/").concat(t)).then(i).then(u).then((function(t){return t?Promise.resolve(t):Promise.reject("getTeamDetail: failed response.")})).catch(a),fetch("".concat(o,"teams/").concat(t),c).then(i).then(u).then((function(t){return t?Promise.resolve(t):Promise.reject("getTeamDetail: failed response.")})).catch(a)}}],(n=null)&&r(e.prototype,n),s&&r(e,s),t}();e.a=s},15:function(t,e,n){"use strict";n.r(e);n(3),n(4);var r=n(0);document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("select"),e=document.querySelector("app-bar");r.a.getCompetitions().then((function(n){n.forEach((function(e){var n=document.createElement("option");n.value=e.code,n.innerHTML=e.name,t.appendChild(n)})),M.FormSelect.init(t),e.togglePreloader()})).catch((function(t){console.error(t)})),document.getElementById("team-select").addEventListener("change",(function(t){e.togglePreloader();var n=document.querySelector("club-list");r.a.getCompetitionTeams(t.target.value).then((function(t){n.clubs=t,e.togglePreloader()})).catch((function(t){console.error(t)}))}))}))},3:function(t,e,n){"use strict";n.p},4:function(t,e,n){"use strict";n(5);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function a(t,e,n){return(a=s()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(h,t);var e,n,r,u,a,p=(e=h,n=s(),function(){var t,r=f(e);if(n){var o=f(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function h(){return o(this,h),p.apply(this,arguments)}return r=h,(u=[{key:"render",value:function(){this.innerHTML='<div class="row" id="teams"></div>';var t=this.querySelector("div#teams");this._clubs.forEach((function(e){var n=document.createElement("club-item");n.club=e,t.appendChild(n)}))}},{key:"renderError",value:function(t){this.innerHTML+="<h5>Error: ".concat(t,"</h5>")}},{key:"clubs",set:function(t){this._clubs=t,this.render()}}])&&c(r.prototype,u),a&&c(r,a),h}(u(HTMLElement));customElements.define("club-list",p)},5:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function u(t,e,n){return(u=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(h,t);var e,n,i,u,f,p=(e=h,n=a(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)});function h(){return r(this,h),p.apply(this,arguments)}return i=h,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n            <div class="col s12 m6 l4 xl3">\n                <div class="card hoverable medium z-depth-2">\n                    <div class="card-image">\n                        <img class="club" src="'.concat(this._club.crestUrl,'" onerror="this.onerror=null;this.src=\'./src/assets/img/undraw_page_not_found.svg\';" alt="">\n                    </div>\n                    <a href="./team.html?id=').concat(this._club.id,'">\n                        <div class="card-content">\n                            <span class="card-title strong center-align black-text">').concat(this._club.name,"</span>\n                        </div>\n                    </a>\n                </div>\n            </div>\n        ")}},{key:"club",set:function(t){this._club=t,this.render()}}])&&o(i.prototype,u),f&&o(i,f),h}(i(HTMLElement));customElements.define("club-item",f)}});