(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>s});var o=e(81),t=e.n(o),i=e(645),a=e.n(i)()(t());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap);"]),a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Carter+One&display=swap);"]),a.push([r.id,":root {\r\n  --input-color: #0b1d49;\r\n  --input-border: #cdd9ed;\r\n  --input-background: #fff;\r\n  --input-placeholder: #cbd1dc;\r\n  --input-border-focus: #275efe;\r\n  --group-color: var(--input-color);\r\n  --group-border: var(--input-border);\r\n  --group-background: #eef4ff;\r\n  --group-color-focus: #fff;\r\n  --group-border-focus: var(--input-border-focus);\r\n  --group-background-focus: #678efe;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  width: 100%;\r\n  display: block;\r\n  position: relative;\r\n  margin: 0 auto;\r\n  z-index: 0;\r\n}\r\n\r\nhtml::after {\r\n  background: url('https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');\r\n  background-repeat: repeat;\r\n  background-size: cover;\r\n  content: \"\";\r\n  opacity: 0.4;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n}\r\n\r\nh1 {\r\n  margin-left: 15%;\r\n  font-family: 'Fredoka One', cursive;\r\n  font-size: 50px;\r\n  color: rgb(13, 36, 59);\r\n}\r\n\r\nh2 {\r\n  font-family: 'Carter One', cursive;\r\n  font-size: 30px;\r\n  color: rgb(13, 36, 59);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  margin-inline: 20px;\r\n}\r\n\r\n.leaderboard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 300px;\r\n}\r\n\r\n.lb-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.refreshBtn {\r\n  width: auto;\r\n  padding: 3px;\r\n  cursor: pointer;\r\n  color: rgb(45, 57, 107);\r\n}\r\n\r\n.lb-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin-top: -10px;\r\n  border-radius: 10px;\r\n  border: 2px solid #111;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 10px;\r\n  flex-direction: row;\r\n  clear: both;\r\n  align-items: center;\r\n  gap: 20px;\r\n  max-width: 400px;\r\n  transition-duration: 1s;\r\n  -moz-transition-duration: 1s;\r\n  -webkit-transition-duration: 1s;\r\n  -ms-transition-duration: 1s;\r\n}\r\n\r\n.lb-list li:nth-child(even) {\r\n  background-color: rgb(142, 187, 207);\r\n}\r\n\r\nli .user {\r\n  min-width: 150px;\r\n  font-size: 15px;\r\n  font-family: 'Carter One', cursive;\r\n}\r\n\r\n.addscore {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n}\r\n\r\n.addscore-container {\r\n  padding: 30px;\r\n  background-color: rgb(142, 187, 207);\r\n  opacity: 0.9;\r\n  z-index: 2;\r\n}\r\n\r\n.as-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  align-items: flex-end;\r\n}\r\n\r\n.as-form input {\r\n  padding: 7px;\r\n}\r\n\r\n.rk {\r\n  padding: 6px;\r\n  background-color: #1b78ab;\r\n  border-radius: 5px;\r\n  color: #ddd;\r\n  text-align: center;\r\n  width: 40px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.score {\r\n  margin-left: auto;\r\n  font-weight: bold;\r\n  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);\r\n  background-color: #456;\r\n  padding: 6px;\r\n  font-size: 20px;\r\n  width: 50px;\r\n  text-align: center;\r\n  color: #eff;\r\n}\r\n\r\n.form-field {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 8px 16px;\r\n  line-height: 25px;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  font-family: inherit;\r\n  border-radius: 6px;\r\n  -webkit-appearance: none;\r\n  color: var(--input-color);\r\n  border: 1px solid var(--input-border);\r\n  background: var(--input-background);\r\n  transition: border 0.3s ease;\r\n}\r\n\r\n.form-field::placeholder {\r\n  color: var(--input-placeholder);\r\n}\r\n\r\n.form-field:focus {\r\n  outline: none;\r\n  border-color: var(--input-border-focus);\r\n}\r\n\r\n.form-group {\r\n  position: relative;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.form-group > span,\r\n.form-group .form-field {\r\n  white-space: nowrap;\r\n  display: block;\r\n}\r\n\r\n.form-group .form-field {\r\n  border-radius: 0 6px 6px 0;\r\n  position: relative;\r\n  z-index: 1;\r\n  flex: 1 1 auto;\r\n  width: 1%;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  font-family: 'Fredoka One', cursive;\r\n}\r\n\r\n.form-group > span {\r\n  border-radius: 6px 0 0 6px;\r\n  text-align: center;\r\n  padding: 8px 12px;\r\n  font-size: 14px;\r\n  line-height: 25px;\r\n  color: var(--group-color);\r\n  background: var(--group-background);\r\n  border: 1px solid var(--group-border);\r\n  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;\r\n}\r\n\r\n.form-group:focus-within > span {\r\n  color: var(--group-color-focus);\r\n  background: var(--group-background-focus);\r\n  border-color: var(--group-border-focus);\r\n}\r\n\r\n.button-base {\r\n  -webkit-appearance: none;\r\n  border: none;\r\n  text-transform: none;\r\n  -moz-box-sizing: border-box;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  background: #4285f4;\r\n  color: #fff;\r\n  vertical-align: middle;\r\n  border-radius: 3px;\r\n  line-height: 36px;\r\n  min-height: 36px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  min-width: 5.14em;\r\n  padding: 0 1em;\r\n  margin: 0 0.25em;\r\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\r\n}\r\n\r\n.button-base:focus {\r\n  outline: 0;\r\n}\r\n\r\n.ripple {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.ripple::before {\r\n  border-radius: 50%;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.ripple:focus::before {\r\n  transition: all 0.8s ease-out;\r\n  opacity: 0;\r\n  width: 160px;\r\n  height: 160px;\r\n  margin-top: -80px;\r\n  margin-left: -80px;\r\n}\r\n\r\n@media all and (max-width: 775px) {\r\n  h1 {\r\n    margin-left: 0;\r\n    text-align: center;\r\n  }\r\n\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    margin-inline: 20px;\r\n  }\r\n\r\n  .leaderboard {\r\n    width: 90%;\r\n  }\r\n\r\n  li {\r\n    max-width: 100%;\r\n  }\r\n}\r\n",""]);const s=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,o,t,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===r){e=o;break}return e}function o(r,o){for(var i={},a=[],s=0;s<r.length;s++){var c=r[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var g=t(f,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function t(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,t){var i=o(r=r||[],t=t||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var c=o(r,t),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:r=>{var n={};r.exports=function(r,e){var o=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(o){var t=n[o];if(void 0!==t)return t.exports;var i=n[o]={id:o,exports:{}};return r[o](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var o in n)e.o(n,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=e(379),n=e.n(r),o=e(795),t=e.n(o),i=e(569),a=e.n(i),s=e(565),c=e.n(s),l=e(216),d=e.n(l),p=e(589),u=e.n(p),f=e(426),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=t(),g.insertStyleElement=d(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const b="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/m4sf6ZHY83BiDA7soyq9/scores/";let x=[{user:"King007",score:23},{user:"PaulWalker",score:18},{user:"Gonakie",score:16},{user:"Punisher",score:30},{user:"Microscope",score:24},{user:"RealGuy",score:13}];const m=r=>`${x[r].user}-${x[r].score}`;async function h(){const r=await async function(){return(await fetch(b)).json()}();r.result&&(x=r.result),function(r){const n=document.querySelector(".lb-list");n.innerHTML="";const e=r.sort(((r,n)=>n.score-r.score)).map(((r,n)=>`<li id="${m(n)}" class="show">\n                <span class="rk">${n+1}</span>\n                <span class="user">${r.user}</span>\n                <span class="score">${r.score}</span>\n              </li>`)).join("");n.innerHTML=e,function(){const r=[...document.querySelectorAll("li")];r.slice(0,3).forEach((r=>{r.querySelector(".rk").style.background="green",r.querySelector(".rk").style.fontSize="17px"})),r[0].querySelector(".rk").textContent="🥇",r[1].querySelector(".rk").textContent="🥈",r[2].querySelector(".rk").textContent="🥉",r.length>3&&(r[3].querySelector(".rk").style.background="#dd7722")}()}(x)}(async()=>{await h()})();const v=document.forms["add-score"],y=document.querySelector(".refreshBtn");v.addEventListener("submit",(async r=>{r.preventDefault();const n=v.name.value,e=Number(v.score.value);if(n&&e){const r={user:n,score:e};await async function(r){return(await fetch(b,{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(r)})).json()}(r),await h(),v.name.value="",v.score.value=""}})),y.addEventListener("click",(async()=>{await h()}))})()})();