!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}({0:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c="http://api.football-data.org/v2/",r={headers:{"X-Auth-Token":"26d1d3867a464ed7ab5ac2c695c8d979"}};function a(t){return 200===t.status?Promise.resolve(t):(s(t.status),Promise.reject(new Error(t.statusText)))}function i(t){return t.json()}function s(t){console.log("Error: "+t)}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,u;return e=t,u=[{key:"getCompetitions",value:function(){return"caches"in window&&caches.match("".concat(c,"competitions?plan=TIER_ONE")).then(a).then(i).then((function(t){return t.competitions?Promise.resolve(t.competitions):Promise.reject("getCompetitions:  failed response.")})).catch(s),fetch("".concat(c,"competitions?plan=TIER_ONE"),r).then(a).then(i).then((function(t){return t.competitions?Promise.resolve(t.competitions):Promise.reject("getCompetitions:  failed response.")})).catch(s)}},{key:"getCompetitionTeams",value:function(t){return"caches"in window&&caches.match("".concat(c,"competitions/").concat(t,"/teams")).then(a).then(i).then((function(t){return t.teams?Promise.resolve(t.teams):Promise.reject("getCompetitionTeams: failed response.")})).catch(s),fetch("".concat(c,"competitions/").concat(t,"/teams"),r).then(a).then(i).then((function(t){return t.teams?Promise.resolve(t.teams):Promise.reject("getCompetitionTeams: failed response.")})).catch(s)}},{key:"getCompetitionStandings",value:function(t){return"caches"in window&&caches.match("".concat(c,"competitions/").concat(t,"/standings?standingType=TOTAL")).then(a).then(i).then((function(t){return t?Promise.resolve(t):Promise.reject("getCompetitionStandings: failed response.")})).catch(s),fetch("".concat(c,"competitions/").concat(t,"/standings?standingType=TOTAL"),r).then(a).then(i).then((function(t){return t?Promise.resolve(t):Promise.reject("getCompetitionStandings: failed response.")})).catch(s)}},{key:"getTeamDetail",value:function(t){return"caches"in window&&caches.match("".concat(c,"teams/").concat(t)).then(a).then(i).then((function(t){return t?Promise.resolve(t):Promise.reject("getTeamDetail: failed response.")})).catch(s),fetch("".concat(c,"teams/").concat(t),r).then(a).then(i).then((function(t){return t?Promise.resolve(t):Promise.reject("getTeamDetail: failed response.")})).catch(s)}}],(n=null)&&o(e.prototype,n),u&&o(e,u),t}();e.a=u},16:function(t,e,n){"use strict";n.r(e);var o=n(0);document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("select"),e=document.querySelector("app-bar");o.a.getCompetitions().then((function(n){n.forEach((function(e){var n=document.createElement("option");n.value=e.code,n.innerHTML=e.name,t.appendChild(n)})),M.FormSelect.init(t),e.togglePreloader()})).catch((function(t){console.log(t)})),document.getElementById("standings-select").addEventListener("change",(function(t){e.togglePreloader(),o.a.getCompetitionStandings(t.target.value).then((function(t){var n,o;n=t.standings[0].table,(o=document.getElementById("standings-table")).innerHTML="\n            <thead>\n                <tr>\n                    <th>Position</th>\n                    <th>Club</th>\n                    <th>Played</th>\n                    <th>Won</th>\n                    <th>Drawn</th>\n                    <th>Lost</th>\n                    <th>GF</th>\n                    <th>GA</th>\n                    <th>GD</th>\n                    <th>Points</th>\n                </tr>\n            </thead>\n            <tbody></tbody>\n        ",n.forEach((function(t){o.querySelector("tbody").innerHTML+='\n                <tr class="hoverable">\n                    <td>'.concat(t.position,'</td>\n                    <td>\n                        <div class="valign-wrapper">\n                            <img style="width: 30px; height:30px;" src="').concat(t.team.crestUrl,'" onerror="this.onerror=null;this.src=\'./src/assets/img/undraw_page_not_found.svg\';" alt="">\n                            <a href="./team.html?id=').concat(t.team.id,'">').concat(t.team.name,"</a>\n                        </div>\n                    </td>\n                    <td>").concat(t.playedGames,"</td>\n                    <td>").concat(t.won,"</td>\n                    <td>").concat(t.draw,"</td>\n                    <td>").concat(t.lost,"</td>\n                    <td>").concat(t.goalsFor,"</td>\n                    <td>").concat(t.goalsAgainst,"</td>\n                    <td>").concat(t.goalDifference,"</td>\n                    <td>").concat(t.points,"</td>\n                </tr>\n            ")})),e.togglePreloader()})).catch((function(t){console.log(t)}))}))}))}});