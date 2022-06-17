(()=>{"use strict";var e={705:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(c[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},738:e=>{e.exports=function(e){return e[1]}},800:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(738),i=t.n(o),a=t(705),c=t.n(a)()(i());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap);"]),c.push([e.id,'::-webkit-scrollbar{display:none}body{background-color:#15151c;font-family:"Source Sans Pro",sans-serif;margin:0;padding:0;width:100vw !important}body nav{display:grid;grid-template-columns:calc(8rem + 8vw) 1fr;background-color:#15151c;height:70px;width:95vw;margin:0 2.5vw;position:fixed;top:0;left:0}body nav #name{display:flex;align-items:center}body nav #name span{color:#fff;text-decoration:none;font-size:calc(1.2rem + .3vw);font-weight:300;letter-spacing:calc(.02rem + .03vw);user-select:none;cursor:pointer}body nav #menu-icon{display:flex;align-items:center;justify-content:flex-end;height:100%}@media screen and (min-width: 800px){body nav #menu-icon{display:none}}body nav #menu-icon #menu-button{background-color:#15151c;display:flex;align-items:center;justify-content:center;height:35px;width:35px}body nav #menu-icon #menu-button img{max-width:60%;max-height:60%}body nav .links{display:flex;list-style:none;margin:0;padding:0}body nav .links li,body nav .links a{color:#fff;text-decoration:none;user-select:none;font-weight:300;cursor:pointer}body nav .links#desktop-links{align-items:center;justify-content:flex-end;letter-spacing:calc(.04rem + .04vw);font-size:calc(.8rem + .34vw)}body nav .links#desktop-links li{margin-left:calc(.02rem + 1.3vw)}@media screen and (max-width: 800px){body nav .links#desktop-links{display:none !important}}body nav .links#mobile-links{display:none;margin:0;padding:0;position:fixed;flex-direction:column;background-color:#15151c;top:70px;left:0;width:100vw;padding-bottom:20px;font-size:calc(1.2rem + .2vw)}body nav .links#mobile-links li{margin:calc(.4rem + .3vw) 0 calc(.5rem + .5vw) calc(.4rem + .3vw)}@media screen and (min-width: 800px){body nav .links#mobile-links{display:none !important}}body main #content-container{width:47vw;margin-left:calc(15vw + 45px)}@media screen and (max-width: 800px){body main #content-container{margin-left:10vw;width:80vw}}body main #content-container section{box-sizing:border-box;min-height:100vh;color:#fff;margin-top:calc(5rem + 7vw)}body main #content-container section ::selection{color:#15151c;background:#fff}body main #content-container section#home{padding-top:calc(1.4rem + 3.5vw)}body main #content-container section#home span{font-weight:200;font-size:calc(1.1rem + .9vw);margin:0;padding:0}body main #content-container section#home h1{font-weight:600;font-size:calc(3rem + 2.3vw);margin:0;padding:0}body main #content-container section#home #icons{padding-top:calc(.5rem + .2vw);display:flex;flex-direction:row;user-select:none}body main #content-container section#home #icons a{height:calc(1.7rem + .8vw);width:calc(4.5rem + 1.1vw);margin-right:calc(.9rem + .8vw);display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;font-size:calc(1.05rem + .2vw);font-weight:200}body main #content-container section#home #icons a img{max-width:70%;max-height:70%;padding-right:calc(.3rem + .1vw)}body main #content-container section#home #icons a#email{width:calc(5rem + 1.1vw);background-color:#0061d0;font-weight:400;border-radius:3px}body main #content-container section#home #icons a#email img{max-height:50%}body main #content-container section h2{font-size:calc(1.6rem + 1.3vw);font-weight:600;margin-bottom:.5rem}body main #content-container section p{font-size:calc(1.1rem + .2vw);font-weight:200;line-height:calc(1.7rem + .65vw);margin:0}body main #content-container section#skills ul{display:flex;padding:0}body main #content-container section#skills ul .col{padding-left:calc(2.4rem + 4vw)}body main #content-container section#skills ul .col:first-of-type{padding-left:calc(1.6rem + 1.2vw)}body main #content-container section#skills ul .col li{font-size:calc(1.25rem + .2vw);font-weight:200;margin-bottom:calc(.7rem + .5vw)}body main #content-container section#projects ul{list-style:none;padding:0}body main #content-container section#projects ul li{margin-bottom:calc(.8rem + 50px)}body main #content-container section#projects ul li h3{font-size:calc(1.4rem + .4vw);font-weight:600;margin-bottom:calc(.5rem + .1vw)}body main #content-container section#projects ul li .links{margin-top:calc(.5rem + .2vw);display:flex}body main #content-container section#projects ul li .links a{margin-right:calc(.5rem + .5vw);box-sizing:border-box;padding:calc(.2rem + .1vw) calc(.4rem + .2vw);font-weight:400;background-color:#fff;text-decoration:none;color:#15151c;font-size:calc(.8rem + .3vw);border-radius:3px}body main #content-container section#contact{display:flex;flex-direction:column}body main #content-container section#contact a{display:flex;align-items:center;color:#fff;text-decoration:none;font-size:calc(1.1rem + .2vw);height:calc(1.7rem + .65vw);margin:calc(.25rem + .4vw);font-weight:200}body main #content-container section#contact a img{padding-right:calc(.35rem + .2vw);width:calc(1rem + 1vw)}body main #content-container section#contact a:first-of-type{margin-top:calc(.5rem + .5vw)}',""]);const r=c},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],r=0;r<e.length;r++){var l=e[r],s=o.base?l[0]+o.base:l[0],d=a[s]||0,m="".concat(s," ").concat(d);a[s]=d+1;var p=t(m),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var u=i(f,o);o.byIndex=r,n.splice(r,0,{identifier:m,updater:u,references:1})}c.push(m)}return c}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=o(e=e||[],i=i||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var r=t(a[c]);n[r].references--}for(var l=o(e,i),s=0;s<a.length;s++){var d=t(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),a=t(569),c=t.n(a),r=t(565),l=t.n(r),s=t(216),d=t.n(s),m=t(589),p=t.n(m),f=t(800),u={};u.styleTagTransform=p(),u.setAttributes=l(),u.insert=c().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=d(),n()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals;const v=document.getElementById("mobile-links"),y=document.getElementsByClassName("mobile-link"),g=document.getElementById("menu-button"),h=document.getElementById("mobile-open"),b=document.getElementById("mobile-close");for(let e=0;e<y.length;e++)y[e].addEventListener("click",(()=>{w()}));function w(){"flex"===v.style.display?(v.style.display="none",h.style.display="block",b.style.display="none",v.setAttribute("aria-expanded","false"),g.setAttribute("aria-expanded","false")):(v.style.display="flex",h.style.display="none",b.style.display="block",v.setAttribute("aria-expanded","true"),g.setAttribute("aria-expanded","true"))}g.addEventListener("click",(()=>{w()}));const x=document.getElementsByClassName("content-links");for(let e=0;e<x.length;e++){const n=x[e];n.addEventListener("click",(()=>{k(n)}))}function k(e){const n=e.getAttribute("href"),t=document.getElementById(n).offsetTop-150;window.scroll({top:t,behavior:"smooth"})}})()})();