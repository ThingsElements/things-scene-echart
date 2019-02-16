!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e){t.exports=scene},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Echart});var _hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _get(t,e,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var o=_superPropBase(t,e);if(o){var n=Object.getOwnPropertyDescriptor(o,e);return n.get?n.get.call(r):n.value}})(t,e,r||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var NATURE={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"textarea",label:"option",name:"option",property:"option"},{type:"textarea",label:"series",name:"series",property:"series"}]},DEFAULT_OPTION={title:"NO OPTIONS"},Echart=function(_HTMLOverlayContainer){function Echart(){return _classCallCheck(this,Echart),_possibleConstructorReturn(this,_getPrototypeOf(Echart).apply(this,arguments))}return _inherits(Echart,_HTMLOverlayContainer),_createClass(Echart,[{key:"dispose",value:function(){this._echart&&this._echart.dispose(),delete this._echart,delete this._anchor,_get(_getPrototypeOf(Echart.prototype),"dispose",this).call(this)}},{key:"reposition",value:function(){_get(_getPrototypeOf(Echart.prototype),"reposition",this).call(this),this._chart&&(this._chart.setOption(this.buildOptions(Object.assign({series:this.series},this.option))),this._chart.resize({width:"auto",height:"auto",silent:!0}))}},{key:"oncreate_element",value:function(t){var e=this;this._anchor=document.createElement("div"),this._anchor.style.width="100%",this._anchor.style.height="100%",this.element.appendChild(this._anchor),_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader.load(["http://echarts.baidu.com/dist/echarts.js"]).then(function(){requestAnimationFrame(function(){e._chart=echarts.init(e._anchor),e.reposition()})},_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__.error)}},{key:"setElementProperties",value:function(t){}},{key:"buildOptions",value:function(t){var e=t.title,r=void 0===e?{}:e;return t.title=Object.assign(r,{text:this.text,show:!!this.text}),t}},{key:"series",get:function get(){var _this$state=this.state,series=_this$state.series,data=_this$state.data;if("object"!==_typeof(series))try{eval("series = ".concat(series))}catch(t){scene.error(t)}return series}},{key:"option",get:function get(){var _this$state2=this.state,_this$state2$option=_this$state2.option,option=void 0===_this$state2$option?DEFAULT_OPTION:_this$state2$option,data=_this$state2.data;if("object"!==_typeof(option))try{eval("option = ".concat(option))}catch(t){scene.error(t)}return option}},{key:"tagName",get:function(){return"div"}},{key:"nature",get:function(){return NATURE}}]),Echart}(_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__.HTMLOverlayContainer);_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__.Component.register("echart",Echart)},function(t,e,r){t.exports=r(3)},function(t,e,r){"use strict";r.r(e);var o=r(1);r.d(e,"Echart",function(){return o.a})}]);
//# sourceMappingURL=things-scene-echart-ie.js.map