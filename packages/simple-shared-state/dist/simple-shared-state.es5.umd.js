!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleSharedState=e():t.SimpleSharedState=e()}(Function("return this")(),(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.r(e);var c=Object.getPrototypeOf({}),f=Array.isArray,u=function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,f=arguments.length>2?arguments[2]:void 0;i(this,t);var u,a=o({},n),p=!1,h=new Map,y=new Map,b=new Set,v=function(t){p=!0,a=o({},a),l(a,t),h.forEach((function(e,n){var r=s;try{if(r=n(t),n(a),void 0===r)return}catch(t){r=void 0}var o=y.get(n);if(r!==s&&r!==o){var i=l(o,r);y.set(n,i),e(i)}})),b.forEach((function(t){return t()})),p=!1};if(f&&f.connect&&"function"==typeof f.connect&&((u=f.connect()).subscribe((function(t){"DISPATCH"===t.type&&"JUMP_TO_STATE"===t.payload.type&&v(JSON.parse(t.state))})),u.init(a)),this.dispatch=function(t,n){if("string"!=typeof t)throw new Error("dispatch actionName must be a string");if(p)throw new Error("can't dispatch while dispatching");var r="function"==typeof n?n(e.getState()):n;if(!r||Object.getPrototypeOf(r)!==c)throw new Error("dispatch expects plain object");v(r),u&&u.send(t,e.getState())},this.watch=function(t,e){if("function"!=typeof t||"function"!=typeof e)throw new Error("selector and handler must be functions");if(h.has(t))throw new Error("Cannot reuse selector");var n;try{n=t(a)}catch(t){}return h.set(t,e),y.set(t,n),function(){h.delete(t),y.delete(t)}},this.watchBatch=function(t,n){if(!t||"function"!=typeof t.forEach)throw new Error("selectors must be a list of functions");if("function"!=typeof n)throw new Error("handler is not a function");var r=[],o=0,i=!1;t.forEach((function(n){if("function"!=typeof n)throw t.forEach((function(t){return h.delete(t)})),new Error("selector must be a function");var c=o++;try{r[c]=n(a)}catch(t){r[c]=void 0}e.watch(n,(function(t){r[c]=t,i=!0}))}));var c=function(){i&&(n(r.map(d)),i=!1)};return b.add(c),n(r.map(d)),function(){b.delete(c),t.forEach((function(t){return h.delete(t)}))}},this.watchDispatch=function(t){if("function"!=typeof t)throw new Error("handler must be a function");return b.add(t),function(){return b.delete(t)}},this.getState=function(t){if(t&&"function"==typeof t){var e;try{e=d(t(a))}catch(t){}return e}return o({},a)},this.actions={},r&&"function"==typeof r){var w=r(this);Object.keys(w).forEach((function(t){var n="";u&&(n=t.replace(/([A-Z])/g,"_$1").toUpperCase()),e.actions[t]=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];e.dispatch(n,w[t].apply(null,o))}}))}},a=new Number,s=new Number,l=function t(e,n){return e&&n&&"object"===r(e)?(Object.keys(n).forEach((function(r){n[r]===a?delete e[r]:e[r]=t(e[r],n[r])})),e):n},p=function(t,e){var n=[];return n[t]=e,n};function d(t){return t&&"object"===r(t)?o(f(t)?[]:{},t):t}n.d(e,"createStore",(function(){return h})),n.d(e,"partialArray",(function(){return p})),n.d(e,"simpleMerge",(function(){return l})),n.d(e,"deleted",(function(){return a}));var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new u(t,e,n)}}])}));