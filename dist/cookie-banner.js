/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cookieconsent/build/cookieconsent.min.js":
/*!***************************************************************!*\
  !*** ./node_modules/cookieconsent/build/cookieconsent.min.js ***!
  \***************************************************************/
/***/ (() => {

!function(e){if(!e.hasInitialised){var t={escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},hasClass:function(e,t){var i=" ";return 1===e.nodeType&&(i+e.className+i).replace(/[\n\t]/g,i).indexOf(i+t+i)>=0},addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var i=new RegExp("\\b"+this.escapeRegExp(t)+"\\b");e.className=e.className.replace(i,"")},interpolateString:function(e,t){return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi,function(e){return t(arguments[1])||""})},getCookie:function(e){var t=("; "+document.cookie).split("; "+e+"=");return t.length<2?void 0:t.pop().split(";").shift()},setCookie:function(e,t,i,n,o,s){var r=new Date;r.setHours(r.getHours()+24*(i||365));var a=[e+"="+t,"expires="+r.toUTCString(),"path="+(o||"/")];n&&a.push("domain="+n),s&&a.push("secure"),document.cookie=a.join(";")},deepExtend:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(i in e&&this.isPlainObject(e[i])&&this.isPlainObject(t[i])?this.deepExtend(e[i],t[i]):e[i]=t[i]);return e},throttle:function(e,t){var i=!1;return function(){i||(e.apply(this,arguments),i=!0,setTimeout(function(){i=!1},t))}},hash:function(e){var t,i,n=0;if(0===e.length)return n;for(t=0,i=e.length;t<i;++t)n=(n<<5)-n+e.charCodeAt(t),n|=0;return n},normaliseHex:function(e){return"#"==e[0]&&(e=e.substr(1)),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e},getContrast:function(e){return e=this.normaliseHex(e),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000":"#fff"},getLuminance:function(e){var t=parseInt(this.normaliseHex(e),16),i=38+(t>>16),n=38+(t>>8&255),o=38+(255&t);return"#"+(16777216+65536*(i<255?i<1?0:i:255)+256*(n<255?n<1?0:n:255)+(o<255?o<1?0:o:255)).toString(16).slice(1)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isPlainObject:function(e){return"object"==typeof e&&null!==e&&e.constructor==Object},traverseDOMPath:function(e,i){return e&&e.parentNode?t.hasClass(e,i)?e:this.traverseDOMPath(e.parentNode,i):null}};e.status={deny:"deny",allow:"allow",dismiss:"dismiss"},e.transitionEnd=function(){var e=document.createElement("div"),t={t:"transitionend",OT:"oTransitionEnd",msT:"MSTransitionEnd",MozT:"transitionend",WebkitT:"webkitTransitionEnd"};for(var i in t)if(t.hasOwnProperty(i)&&void 0!==e.style[i+"ransition"])return t[i];return""}(),e.hasTransition=!!e.transitionEnd;var i=Object.keys(e.status).map(t.escapeRegExp);e.customStyles={},e.Popup=function(){var n={enabled:!0,container:null,cookie:{name:"cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(e){},onStatusChange:function(e,t){},onRevokeChoice:function(){},onNoCookieLaw:function(e,t){},content:{header:"Cookies used on the website!",message:"This website uses cookies to ensure you get the best experience on our website.",dismiss:"Got it!",allow:"Allow cookies",deny:"Decline",link:"Learn more",href:"https://www.cookiesandyou.com",close:"&#x274c;",target:"_blank",policy:"Cookie Policy"},elements:{header:'<span class="cc-header">{{header}}</span>&nbsp;',message:'<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',dismiss:'<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',allow:'<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',deny:'<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',link:'<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',close:'<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'},window:'<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',revokeBtn:'<div class="cc-revoke {{classes}}">{{policy}}</div>',compliance:{info:'<div class="cc-compliance">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',"opt-out":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'},type:"info",layouts:{basic:"{{messagelink}}{{compliance}}","basic-close":"{{messagelink}}{{compliance}}{{close}}","basic-header":"{{header}}{{message}}{{link}}{{compliance}}"},layout:"basic",position:"bottom",theme:"block",static:!1,palette:null,revokable:!1,animateRevokable:!0,showLink:!0,dismissOnScroll:!1,dismissOnTimeout:!1,dismissOnWindowClick:!1,ignoreClicksFrom:["cc-revoke","cc-btn"],autoOpen:!0,autoAttach:!0,whitelistPage:[],blacklistPage:[],overrideHTML:null};function o(){this.initialise.apply(this,arguments)}function s(e){this.openingTimeout=null,t.removeClass(e,"cc-invisible")}function r(t){t.style.display="none",t.removeEventListener(e.transitionEnd,this.afterTransition),this.afterTransition=null}function a(){var e=this.options.position.split("-"),t=[];return e.forEach(function(e){t.push("cc-"+e)}),t}function c(n){var o=this.options,s=document.createElement("div"),r=o.container&&1===o.container.nodeType?o.container:document.body;s.innerHTML=n;var a=s.children[0];return a.style.display="none",t.hasClass(a,"cc-window")&&e.hasTransition&&t.addClass(a,"cc-invisible"),this.onButtonClick=function(n){var o=t.traverseDOMPath(n.target,"cc-btn")||n.target;if(t.hasClass(o,"cc-btn")){var s=o.className.match(new RegExp("\\bcc-("+i.join("|")+")\\b")),r=s&&s[1]||!1;r&&(this.setStatus(r),this.close(!0))}t.hasClass(o,"cc-close")&&(this.setStatus(e.status.dismiss),this.close(!0));t.hasClass(o,"cc-revoke")&&this.revokeChoice()}.bind(this),a.addEventListener("click",this.onButtonClick),o.autoAttach&&(r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a)),a}function l(e){return"000000"==(e=t.normaliseHex(e))?"#222":t.getLuminance(e)}function u(e,t){for(var i=0,n=e.length;i<n;++i){var o=e[i];if(o instanceof RegExp&&o.test(t)||"string"==typeof o&&o.length&&o===t)return!0}return!1}return o.prototype.initialise=function(i){this.options&&this.destroy(),t.deepExtend(this.options={},n),t.isPlainObject(i)&&t.deepExtend(this.options,i),function(){var t=this.options.onInitialise.bind(this);if(!window.navigator.cookieEnabled)return t(e.status.deny),!0;if(window.CookiesOK||window.navigator.CookiesOK)return t(e.status.allow),!0;var i=Object.keys(e.status),n=this.getStatus(),o=i.indexOf(n)>=0;o&&t(n);return o}.call(this)&&(this.options.enabled=!1),u(this.options.blacklistPage,location.pathname)&&(this.options.enabled=!1),u(this.options.whitelistPage,location.pathname)&&(this.options.enabled=!0);var o=this.options.window.replace("{{classes}}",function(){var i=this.options,n="top"==i.position||"bottom"==i.position?"banner":"floating";t.isMobile()&&(n="floating");var o=["cc-"+n,"cc-type-"+i.type,"cc-theme-"+i.theme];i.static&&o.push("cc-static");o.push.apply(o,a.call(this));(function(i){var n=t.hash(JSON.stringify(i)),o="cc-color-override-"+n,s=t.isPlainObject(i);this.customStyleSelector=s?o:null,s&&function(i,n,o){if(e.customStyles[i])return void++e.customStyles[i].references;var s={},r=n.popup,a=n.button,c=n.highlight;r&&(r.text=r.text?r.text:t.getContrast(r.background),r.link=r.link?r.link:r.text,s[o+".cc-window"]=["color: "+r.text,"background-color: "+r.background],s[o+".cc-revoke"]=["color: "+r.text,"background-color: "+r.background],s[o+" .cc-link,"+o+" .cc-link:active,"+o+" .cc-link:visited"]=["color: "+r.link],a&&(a.text=a.text?a.text:t.getContrast(a.background),a.border=a.border?a.border:"transparent",s[o+" .cc-btn"]=["color: "+a.text,"border-color: "+a.border,"background-color: "+a.background],a.padding&&s[o+" .cc-btn"].push("padding: "+a.padding),"transparent"!=a.background&&(s[o+" .cc-btn:hover, "+o+" .cc-btn:focus"]=["background-color: "+(a.hover||l(a.background))]),c?(c.text=c.text?c.text:t.getContrast(c.background),c.border=c.border?c.border:"transparent",s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+c.text,"border-color: "+c.border,"background-color: "+c.background]):s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+r.text]));var u=document.createElement("style");document.head.appendChild(u),e.customStyles[i]={references:1,element:u.sheet};var h=-1;for(var p in s)s.hasOwnProperty(p)&&u.sheet.insertRule(p+"{"+s[p].join(";")+"}",++h)}(n,i,"."+o);return s}).call(this,this.options.palette);this.customStyleSelector&&o.push(this.customStyleSelector);return o}.call(this).join(" ")).replace("{{children}}",function(){var e={},i=this.options;i.showLink||(i.elements.link="",i.elements.messagelink=i.elements.message);Object.keys(i.elements).forEach(function(n){e[n]=t.interpolateString(i.elements[n],function(e){var t=i.content[e];return e&&"string"==typeof t&&t.length?t:""})});var n=i.compliance[i.type];n||(n=i.compliance.info);e.compliance=t.interpolateString(n,function(t){return e[t]});var o=i.layouts[i.layout];o||(o=i.layouts.basic);return t.interpolateString(o,function(t){return e[t]})}.call(this)),s=this.options.overrideHTML;if("string"==typeof s&&s.length&&(o=s),this.options.static){var r=c.call(this,'<div class="cc-grower">'+o+"</div>");r.style.display="",this.element=r.firstChild,this.element.style.display="none",t.addClass(this.element,"cc-invisible")}else this.element=c.call(this,o);(function(){var i=this.setStatus.bind(this),n=this.close.bind(this),o=this.options.dismissOnTimeout;"number"==typeof o&&o>=0&&(this.dismissTimeout=window.setTimeout(function(){i(e.status.dismiss),n(!0)},Math.floor(o)));var s=this.options.dismissOnScroll;if("number"==typeof s&&s>=0){var r=function(t){window.pageYOffset>Math.floor(s)&&(i(e.status.dismiss),n(!0),window.removeEventListener("scroll",r),this.onWindowScroll=null)};this.options.enabled&&(this.onWindowScroll=r,window.addEventListener("scroll",r))}var a=this.options.dismissOnWindowClick,c=this.options.ignoreClicksFrom;if(a){var l=function(o){for(var s=!1,r=o.path.length,a=c.length,u=0;u<r;u++)if(!s)for(var h=0;h<a;h++)s||(s=t.hasClass(o.path[u],c[h]));s||(i(e.status.dismiss),n(!0),window.removeEventListener("click",l),window.removeEventListener("touchend",l),this.onWindowClick=null)}.bind(this);this.options.enabled&&(this.onWindowClick=l,window.addEventListener("click",l),window.addEventListener("touchend",l))}}).call(this),function(){"info"!=this.options.type&&(this.options.revokable=!0);t.isMobile()&&(this.options.animateRevokable=!1);if(this.options.revokable){var e=a.call(this);this.options.animateRevokable&&e.push("cc-animate"),this.customStyleSelector&&e.push(this.customStyleSelector);var i=this.options.revokeBtn.replace("{{classes}}",e.join(" ")).replace("{{policy}}",this.options.content.policy);this.revokeBtn=c.call(this,i);var n=this.revokeBtn;if(this.options.animateRevokable){var o=t.throttle(function(e){var i=!1,o=window.innerHeight-20;t.hasClass(n,"cc-top")&&e.clientY<20&&(i=!0),t.hasClass(n,"cc-bottom")&&e.clientY>o&&(i=!0),i?t.hasClass(n,"cc-active")||t.addClass(n,"cc-active"):t.hasClass(n,"cc-active")&&t.removeClass(n,"cc-active")},200);this.onMouseMove=o,window.addEventListener("mousemove",o)}}}.call(this),this.options.autoOpen&&this.autoOpen()},o.prototype.destroy=function(){this.onButtonClick&&this.element&&(this.element.removeEventListener("click",this.onButtonClick),this.onButtonClick=null),this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null),this.onWindowScroll&&(window.removeEventListener("scroll",this.onWindowScroll),this.onWindowScroll=null),this.onWindowClick&&(window.removeEventListener("click",this.onWindowClick),this.onWindowClick=null),this.onMouseMove&&(window.removeEventListener("mousemove",this.onMouseMove),this.onMouseMove=null),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.revokeBtn&&this.revokeBtn.parentNode&&this.revokeBtn.parentNode.removeChild(this.revokeBtn),this.revokeBtn=null,function(i){if(t.isPlainObject(i)){var n=t.hash(JSON.stringify(i)),o=e.customStyles[n];if(o&&!--o.references){var s=o.element.ownerNode;s&&s.parentNode&&s.parentNode.removeChild(s),e.customStyles[n]=null}}}(this.options.palette),this.options=null},o.prototype.open=function(t){if(this.element)return this.isOpen()||(e.hasTransition?this.fadeIn():this.element.style.display="",this.options.revokable&&this.toggleRevokeButton(),this.options.onPopupOpen.call(this)),this},o.prototype.close=function(t){if(this.element)return this.isOpen()&&(e.hasTransition?this.fadeOut():this.element.style.display="none",t&&this.options.revokable&&this.toggleRevokeButton(!0),this.options.onPopupClose.call(this)),this},o.prototype.fadeIn=function(){var i=this.element;if(e.hasTransition&&i&&(this.afterTransition&&r.call(this,i),t.hasClass(i,"cc-invisible"))){if(i.style.display="",this.options.static){var n=this.element.clientHeight;this.element.parentNode.style.maxHeight=n+"px"}this.openingTimeout=setTimeout(s.bind(this,i),20)}},o.prototype.fadeOut=function(){var i=this.element;e.hasTransition&&i&&(this.openingTimeout&&(clearTimeout(this.openingTimeout),s.bind(this,i)),t.hasClass(i,"cc-invisible")||(this.options.static&&(this.element.parentNode.style.maxHeight=""),this.afterTransition=r.bind(this,i),i.addEventListener(e.transitionEnd,this.afterTransition),t.addClass(i,"cc-invisible")))},o.prototype.isOpen=function(){return this.element&&""==this.element.style.display&&(!e.hasTransition||!t.hasClass(this.element,"cc-invisible"))},o.prototype.toggleRevokeButton=function(e){this.revokeBtn&&(this.revokeBtn.style.display=e?"":"none")},o.prototype.revokeChoice=function(e){this.options.enabled=!0,this.clearStatus(),this.options.onRevokeChoice.call(this),e||this.autoOpen()},o.prototype.hasAnswered=function(t){return Object.keys(e.status).indexOf(this.getStatus())>=0},o.prototype.hasConsented=function(t){var i=this.getStatus();return i==e.status.allow||i==e.status.dismiss},o.prototype.autoOpen=function(e){!this.hasAnswered()&&this.options.enabled?this.open():this.hasAnswered()&&this.options.revokable&&this.toggleRevokeButton(!0)},o.prototype.setStatus=function(i){var n=this.options.cookie,o=t.getCookie(n.name),s=Object.keys(e.status).indexOf(o)>=0;Object.keys(e.status).indexOf(i)>=0?(t.setCookie(n.name,i,n.expiryDays,n.domain,n.path,n.secure),this.options.onStatusChange.call(this,i,s)):this.clearStatus()},o.prototype.getStatus=function(){return t.getCookie(this.options.cookie.name)},o.prototype.clearStatus=function(){var e=this.options.cookie;t.setCookie(e.name,"",-1,e.domain,e.path)},o}(),e.Location=function(){var e={timeout:5e3,services:["ipinfo"],serviceDefinitions:{ipinfo:function(){return{url:"//ipinfo.io",headers:["Accept: application/json"],callback:function(e,t){try{var i=JSON.parse(t);return i.error?s(i):{code:i.country}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},ipinfodb:function(e){return{url:"//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",isScript:!0,callback:function(e,t){try{var i=JSON.parse(t);return"ERROR"==i.statusCode?s({error:i.statusMessage}):{code:i.countryCode}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},maxmind:function(){return{url:"//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",isScript:!0,callback:function(e){window.geoip2?geoip2.country(function(t){try{e({code:t.country.iso_code})}catch(t){e(s(t))}},function(t){e(s(t))}):e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))}}}}};function i(i){t.deepExtend(this.options={},e),t.isPlainObject(i)&&t.deepExtend(this.options,i),this.currentServiceIndex=-1}function n(e,t,i){var n,o=document.createElement("script");o.type="text/"+(e.type||"javascript"),o.src=e.src||e,o.async=!1,o.onreadystatechange=o.onload=function(){var e=o.readyState;clearTimeout(n),t.done||e&&!/loaded|complete/.test(e)||(t.done=!0,t(),o.onreadystatechange=o.onload=null)},document.body.appendChild(o),n=setTimeout(function(){t.done=!0,t(),o.onreadystatechange=o.onload=null},i)}function o(e,t,i,n,o){var s=new(window.XMLHttpRequest||window.ActiveXObject)("MSXML2.XMLHTTP.3.0");if(s.open(n?"POST":"GET",e,1),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),Array.isArray(o))for(var r=0,a=o.length;r<a;++r){var c=o[r].split(":",2);s.setRequestHeader(c[0].replace(/^\s+|\s+$/g,""),c[1].replace(/^\s+|\s+$/g,""))}"function"==typeof t&&(s.onreadystatechange=function(){s.readyState>3&&t(s)}),s.send(n)}function s(e){return new Error("Error ["+(e.code||"UNKNOWN")+"]: "+e.error)}return i.prototype.getNextService=function(){var e;do{e=this.getServiceByIdx(++this.currentServiceIndex)}while(this.currentServiceIndex<this.options.services.length&&!e);return e},i.prototype.getServiceByIdx=function(e){var i=this.options.services[e];if("function"==typeof i){var n=i();return n.name&&t.deepExtend(n,this.options.serviceDefinitions[n.name](n)),n}return"string"==typeof i?this.options.serviceDefinitions[i]():t.isPlainObject(i)?this.options.serviceDefinitions[i.name](i):null},i.prototype.locate=function(e,t){var i=this.getNextService();i?(this.callbackComplete=e,this.callbackError=t,this.runService(i,this.runNextServiceOnError.bind(this))):t(new Error("No services to run"))},i.prototype.setupUrl=function(e){var t=this.getCurrentServiceOpts();return e.url.replace(/\{(.*?)\}/g,function(i,n){if("callback"===n){var o="callback"+Date.now();return window[o]=function(t){e.__JSONP_DATA=JSON.stringify(t)},o}if(n in t.interpolateUrl)return t.interpolateUrl[n]})},i.prototype.runService=function(e,t){var i=this;e&&e.url&&e.callback&&(e.isScript?n:o)(this.setupUrl(e),function(n){var o=n?n.responseText:"";e.__JSONP_DATA&&(o=e.__JSONP_DATA,delete e.__JSONP_DATA),i.runServiceCallback.call(i,t,e,o)},this.options.timeout,e.data,e.headers)},i.prototype.runServiceCallback=function(e,t,i){var n=this,o=t.callback(function(t){o||n.onServiceResult.call(n,e,t)},i);o&&this.onServiceResult.call(this,e,o)},i.prototype.onServiceResult=function(e,t){t instanceof Error||t&&t.error?e.call(this,t,null):e.call(this,null,t)},i.prototype.runNextServiceOnError=function(e,t){if(e){this.logError(e);var i=this.getNextService();i?this.runService(i,this.runNextServiceOnError.bind(this)):this.completeService.call(this,this.callbackError,new Error("All services failed"))}else this.completeService.call(this,this.callbackComplete,t)},i.prototype.getCurrentServiceOpts=function(){var e=this.options.services[this.currentServiceIndex];return"string"==typeof e?{name:e}:"function"==typeof e?e():t.isPlainObject(e)?e:{}},i.prototype.completeService=function(e,t){this.currentServiceIndex=-1,e&&e(t)},i.prototype.logError=function(e){var t=this.currentServiceIndex,i=this.getServiceByIdx(t);console.warn("The service["+t+"] ("+i.url+") responded with the following error",e)},i}(),e.Law=function(){var e={regionalLaw:!0,hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","ES","SE","GB","UK","GR","EU"],revokable:["HR","CY","DK","EE","FR","DE","LV","LT","NL","PT","ES"],explicitAction:["HR","IT","ES"]};function i(e){this.initialise.apply(this,arguments)}return i.prototype.initialise=function(i){t.deepExtend(this.options={},e),t.isPlainObject(i)&&t.deepExtend(this.options,i)},i.prototype.get=function(e){var t=this.options;return{hasLaw:t.hasLaw.indexOf(e)>=0,revokable:t.revokable.indexOf(e)>=0,explicitAction:t.explicitAction.indexOf(e)>=0}},i.prototype.applyLaw=function(e,t){var i=this.get(t);return i.hasLaw||(e.enabled=!1,"function"==typeof e.onNoCookieLaw&&e.onNoCookieLaw(t,i)),this.options.regionalLaw&&(i.revokable&&(e.revokable=!0),i.explicitAction&&(e.dismissOnScroll=!1,e.dismissOnTimeout=!1)),e},i}(),e.initialise=function(i,n,o){var s=new e.Law(i.law);n||(n=function(){}),o||(o=function(){});var r=Object.keys(e.status),a=t.getCookie("cookieconsent_status");r.indexOf(a)>=0?n(new e.Popup(i)):e.getCountryCode(i,function(t){delete i.law,delete i.location,t.code&&(i=s.applyLaw(i,t.code)),n(new e.Popup(i))},function(t){delete i.law,delete i.location,o(t,new e.Popup(i))})},e.getCountryCode=function(t,i,n){t.law&&t.law.countryCode?i({code:t.law.countryCode}):t.location?new e.Location(t.location).locate(function(e){i(e||{})},n):i({})},e.utils=t,e.hasInitialised=!0,window.cookieconsent=e}}(window.cookieconsent||{});

/***/ }),

/***/ "./node_modules/merge/lib/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/merge/lib/src/index.js ***!
  \*********************************************/
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isPlainObject = exports.clone = exports.recursive = exports.merge = exports.main = void 0;
module.exports = exports = main;
exports["default"] = main;
function main() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return merge.apply(void 0, items);
}
exports.main = main;
main.clone = clone;
main.isPlainObject = isPlainObject;
main.recursive = recursive;
function merge() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return _merge(items[0] === true, false, items);
}
exports.merge = merge;
function recursive() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return _merge(items[0] === true, true, items);
}
exports.recursive = recursive;
function clone(input) {
    if (Array.isArray(input)) {
        var output = [];
        for (var index = 0; index < input.length; ++index)
            output.push(clone(input[index]));
        return output;
    }
    else if (isPlainObject(input)) {
        var output = {};
        for (var index in input)
            output[index] = clone(input[index]);
        return output;
    }
    else {
        return input;
    }
}
exports.clone = clone;
function isPlainObject(input) {
    return input && typeof input === 'object' && !Array.isArray(input);
}
exports.isPlainObject = isPlainObject;
function _recursiveMerge(base, extend) {
    if (!isPlainObject(base))
        return extend;
    for (var key in extend) {
        if (key === '__proto__' || key === 'constructor' || key === 'prototype')
            continue;
        base[key] = (isPlainObject(base[key]) && isPlainObject(extend[key])) ?
            _recursiveMerge(base[key], extend[key]) :
            extend[key];
    }
    return base;
}
function _merge(isClone, isRecursive, items) {
    var result;
    if (isClone || !isPlainObject(result = items.shift()))
        result = {};
    for (var index = 0; index < items.length; ++index) {
        var item = items[index];
        if (!isPlainObject(item))
            continue;
        for (var key in item) {
            if (key === '__proto__' || key === 'constructor' || key === 'prototype')
                continue;
            var value = isClone ? clone(item[key]) : item[key];
            result[key] = isRecursive ? _recursiveMerge(result[key], value) : value;
        }
    }
    return result;
}


/***/ }),

/***/ "./src/cookie-banner.js":
/*!******************************!*\
  !*** ./src/cookie-banner.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CookieBanner)
/* harmony export */ });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/lib/src/index.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookieconsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookieconsent */ "./node_modules/cookieconsent/build/cookieconsent.min.js");
/* harmony import */ var cookieconsent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookieconsent__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var CookieBanner = /*#__PURE__*/function () {
  function CookieBanner() {
    _classCallCheck(this, CookieBanner);
    this._defaultLocale = 'en';
    this._options = {
      locale: document.documentElement.lang || this._defaultLocale,
      policyPath: '/cookie-policy',
      cookieConsent: {
        type: 'opt-in',
        theme: 'classic',
        position: 'bottom-left',
        ignoreClicksFrom: ['cc-revoke', 'cc-btn', 'cc-link'],
        animateRevokable: false,
        revokeBtn: "\n                    <div class=\"cc-revoke\" title=\"Cookie\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"img\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\">\n                            <path d=\"M17.07 8.93c-2.55-.39-4.57-2.41-4.99-4.94C6.73 3.82 4 8.69 4 12c0 4.41 3.59 8 8 8c4.06 0 7.7-3.14 7.98-7.45a5.033 5.033 0 0 1-2.91-3.62zM8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15zm2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm4.5 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z\" fill=\"#e1be64\"/>\n                            <circle cx=\"10.5\" cy=\"8.5\" r=\"1.5\" fill=\"#333333\"/>\n                            <circle cx=\"8.5\" cy=\"13.5\" r=\"1.5\" fill=\"#333333\"/>\n                            <circle cx=\"15\" cy=\"15\" r=\"1\" fill=\"#333333\"/>\n                            <path d=\"M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22c-2.97 1-5.78-1.59-5.19-4.56C7.1.74 2 6.41 2 12c0 5.52 4.48 10 10 10c5.89 0 10.54-5.08 9.95-11.01zM12 20c-4.41 0-8-3.59-8-8c0-3.31 2.73-8.18 8.08-8.02c.42 2.54 2.44 4.56 4.99 4.94c.07.36.52 2.55 2.92 3.63C19.7 16.86 16.06 20 12 20z\" fill=\"#333333\"/>\n                        </svg>\n                    </div>\n                "
      }
    };
    this._options.cookieConsent = Object.assign(this.events(), this._options.cookieConsent);
  }
  return _createClass(CookieBanner, [{
    key: "setup",
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._options = merge__WEBPACK_IMPORTED_MODULE_0___default().recursive(this._options, options);
      return this;
    }
  }, {
    key: "run",
    value: function run() {
      this._options.cookieConsent.content = merge__WEBPACK_IMPORTED_MODULE_0___default()(this.getContent(), this._options.cookieConsent.content);
      cookieconsent.initialise(this._options.cookieConsent);
      return this;
    }
  }, {
    key: "events",
    value: function events() {
      var self = this;
      return {
        onInitialise: function onInitialise(status) {
          if (this.hasConsented()) {
            self.runPreventedScripts();
          }
        },
        onStatusChange: function onStatusChange(status, chosenBefore) {
          if (this.hasConsented()) {
            self.runPreventedScripts();
          }
        },
        onRevokeChoice: function onRevokeChoice() {
          self.blockPreventedScripts();
        }
      };
    }
  }, {
    key: "runPreventedScripts",
    value: function runPreventedScripts() {
      document.querySelectorAll('.cookie-prevent').forEach(function (el) {
        if (el.hasAttribute('data-suppressedsrc')) {
          el.setAttribute('src', el.getAttribute('data-suppressedsrc'));
        }
      });
      document.querySelectorAll('.cookie-prevent-inline').forEach(function (el) {
        if (el.getAttribute('type') == 'text/plain') {
          var newScriptEl = el;
          newScriptEl.setAttribute('type', 'text/javascript');
          el.parentNode.insertBefore(newScriptEl, el.nextSibling);
        }
      });
    }
  }, {
    key: "blockPreventedScripts",
    value: function blockPreventedScripts() {
      document.querySelectorAll('.cookie-prevent').forEach(function (el) {
        if (el.hasAttribute('src')) {
          el.setAttribute('data-suppressedsrc', el.getAttribute('src'));
          el.removeAttribute('src');
        }
      });
      document.querySelectorAll('.cookie-prevent-inline').forEach(function (el) {
        if (el.getAttribute('type') == 'text/javascript') {
          var newScriptEl = el;
          newScriptEl.setAttribute('type', 'text/plain');
          el.parentNode.insertBefore(newScriptEl, el.nextSibling);
        }
      });
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._options.locale;
      var policyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._options.policyPath;
      var contents = {
        it: {
          link: "Scopri di più",
          href: policyPath,
          deny: "Rifiuta",
          allow: "Accetta",
          message: "Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per altre finalità come specificato nella cookie policy. Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento. Puoi acconsentire all’utilizzo di tali tecnologie utilizzando il pulsante “Accetta”. Chiudendo questa informativa, continui senza accettare."
        },
        en: {
          link: "Learn more",
          href: policyPath,
          deny: "Reject",
          allow: "Accept",
          message: "We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for other purposes as specified in the cookie policy. You can freely give, deny, or withdraw your consent at any time. You can consent to the use of such technologies by using the “Accept” button. By closing this notice, you continue without accepting."
        },
        de: {
          link: "Mehr erfahren",
          href: policyPath,
          deny: "Ablehnen",
          allow: "Zustimmen",
          message: "Wir und ausgewählte Dritte setzen für technische Zwecke und, mit Ihrer Einwilligung, für andere Zwecke Cookies und ähnliche Technologien ein, so wie in der Cookie-Richtlinie beschrieben. Ihre Einwilligung können Sie jederzeit erteilen, verweigern oder widerrufen. Sie willigen in den Einsatz solcher Technologien ein, indem Sie den „Zustimmen“-Button betätigen. Indem Sie diesen Hinweis schließen, fahren Sie fort, ohne zuzustimmen."
        },
        fr: {
          link: "Obtenire plus d'information",
          href: policyPath,
          deny: "Refuser",
          allow: "Accepter",
          message: "Les tiers sélectionnés et nous-mêmes utilisons des cookies ou des technologies similaires à des fins techniques et, avec votre consentement, à d'autres fins, comme décrit dans la politique relative aux cookies. Vous pouvez librement donner, refuser ou retirer votre consentement à tout moment. Vous pouvez consentir à l’utilisation de ces technologies en vous servant du bouton « Accepter ». En fermant le présent avis, vous continuez sans accepter."
        },
        es: {
          link: "Saber más",
          href: policyPath,
          deny: "Rechazar",
          allow: "Acceptar",
          message: "Nosotros y terceros seleccionados utilizamos cookies o tecnologías similares con fines técnicos y, con su consentimiento, para otras finalidades según se especifica en la política de cookies. Usted es libre de otorgar, denegar o revocar su consentimiento en cualquier momento. Puede consentir el uso de dichas tecnologías utilizando el botón de “Aceptar”. Al cerrar esta nota informativa, usted continúa sin aceptar."
        }
      };
      return contents[locale] || contents[this._defaultLocale];
    }
  }]);
}();

window.CookieBanner = new CookieBanner();

/***/ }),

/***/ "./src/cookie-banner.scss":
/*!********************************!*\
  !*** ./src/cookie-banner.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/cookie-banner": 0,
/******/ 			"dist/cookie-banner": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcookie_banner"] = self["webpackChunkcookie_banner"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/cookie-banner"], () => (__webpack_require__("./src/cookie-banner.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/cookie-banner"], () => (__webpack_require__("./src/cookie-banner.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;