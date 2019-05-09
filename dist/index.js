/*!
 * 
 *  maishu-chitu-service v1.1.16
 *  https://github.com/ansiboy/services-sdk
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/callback.js":
/*!*************************!*\
  !*** ./out/callback.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    class Callback {\r\n        constructor() {\r\n            this.funcs = new Array();\r\n        }\r\n        add(func) {\r\n            this.funcs.push(func);\r\n        }\r\n        remove(func) {\r\n            this.funcs = this.funcs.filter(o => o != func);\r\n        }\r\n        fire(...args) {\r\n            this.funcs.forEach(o => o(...args));\r\n        }\r\n    }\r\n    exports.Callback = Callback;\r\n    function Callbacks() {\r\n        return new Callback();\r\n    }\r\n    exports.Callbacks = Callbacks;\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./out/callback.js?");

/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.errors = {\r\n        serviceUrlCanntNull(serviceName) {\r\n            let msg = `Service '${serviceName}' base url can not null.`;\r\n            return new Error(msg);\r\n        },\r\n        unexpectedNullResult() {\r\n            let msg = `Null result is unexpected.`;\r\n            return new Error(msg);\r\n        },\r\n        unexpectedNullValue(name) {\r\n            let msg = `variable ${name} is unexpected null value.`;\r\n            return new Error(msg);\r\n        },\r\n        argumentNull(name) {\r\n            let msg = `Arugment ${name} cannt null or empty.`;\r\n            return new Error(msg);\r\n        },\r\n        fieldNull(field, itemName) {\r\n            let msg = `${itemName} ${field} cannt be null or empty`;\r\n            return new Error(msg);\r\n        },\r\n        instanceMessangerStart() {\r\n            let msg = `Instance messanger is start.`;\r\n            return new Error(msg);\r\n        }\r\n    };\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./out/errors.js?");

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./service */ \"./out/service.js\"), __webpack_require__(/*! ./callback */ \"./out/callback.js\"), __webpack_require__(/*! ./value-store */ \"./out/value-store.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, service_1, callback_1, value_store_1) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.Service = service_1.Service;\r\n    exports.Callback = callback_1.Callback;\r\n    exports.Callbacks = callback_1.Callbacks;\r\n    exports.ValueStore = value_store_1.ValueStore;\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./out/index.js?");

/***/ }),

/***/ "./out/service.js":
/*!************************!*\
  !*** ./out/service.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./callback */ \"./out/callback.js\"), __webpack_require__(/*! ./errors */ \"./out/errors.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, callback_1, errors_1) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    class Service {\r\n        constructor() {\r\n            this.error = callback_1.Callbacks();\r\n        }\r\n        ajax(url, options) {\r\n            // options = options || {} as any\r\n            if (options === undefined)\r\n                options = {};\r\n            let data = options.data;\r\n            let method = options.method;\r\n            let headers = options.headers || {};\r\n            let body;\r\n            if (data != null) {\r\n                let is_json = (headers['content-type'] || '').indexOf('json') >= 0;\r\n                if (is_json) {\r\n                    body = JSON.stringify(data);\r\n                }\r\n                else {\r\n                    body = new URLSearchParams();\r\n                    for (let key in data) {\r\n                        body.append(key, data[key]);\r\n                    }\r\n                }\r\n            }\r\n            // return callAjax<T>(url, { headers: headers as any, body, method }, this, this.error);\r\n            return new Promise((reslove, reject) => {\r\n                let options = { headers: headers, body, method };\r\n                let timeId;\r\n                if (options == null)\r\n                    throw errors_1.errors.unexpectedNullValue('options');\r\n                if (method == 'get') {\r\n                    timeId = setTimeout(() => {\r\n                        let err = new Error(); //new AjaxError(options.method);\r\n                        err.name = 'timeout';\r\n                        err.message = '网络连接超时';\r\n                        reject(err);\r\n                        this.error.fire(this, err);\r\n                        clearTimeout(timeId);\r\n                    }, Service.settings.ajaxTimeout * 1000);\r\n                }\r\n                ajax(url, options)\r\n                    .then(data => {\r\n                    reslove(data);\r\n                    if (timeId)\r\n                        clearTimeout(timeId);\r\n                })\r\n                    .catch(err => {\r\n                    reject(err);\r\n                    this.error.fire(this, err);\r\n                    if (timeId)\r\n                        clearTimeout(timeId);\r\n                });\r\n            });\r\n        }\r\n        /**\r\n         * 创建服务\r\n         * @param type 服务类型\r\n         */\r\n        createService(type) {\r\n            type = type || Service;\r\n            let service = Service.isClass(type) ? new type() : type();\r\n            service.error.add((sender, error) => {\r\n                this.error.fire(service, error);\r\n            });\r\n            return service;\r\n        }\r\n    }\r\n    Service.settings = {\r\n        ajaxTimeout: 30,\r\n    };\r\n    Service.isClass = (function () {\r\n        var toString = Function.prototype.toString;\r\n        function fnBody(fn) {\r\n            return toString.call(fn).replace(/^[^{]*{\\s*/, '').replace(/\\s*}[^}]*$/, '');\r\n        }\r\n        function isClass(fn) {\r\n            return (typeof fn === 'function' &&\r\n                (/^class(\\s|\\{\\}$)/.test(toString.call(fn)) ||\r\n                    (/^.*classCallCheck\\(/.test(fnBody(fn)))) // babel.js\r\n            );\r\n        }\r\n        return isClass;\r\n    })();\r\n    exports.Service = Service;\r\n    function ajax(url, options) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield fetch(url, options);\r\n            let responseText = response.text();\r\n            let p;\r\n            if (typeof responseText == 'string') {\r\n                p = new Promise((reslove, reject) => {\r\n                    reslove(responseText);\r\n                });\r\n            }\r\n            else {\r\n                p = responseText;\r\n            }\r\n            let text = yield responseText;\r\n            let textObject;\r\n            let isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;\r\n            if (isJSONContextType) {\r\n                textObject = text ? JSON.parse(text) : null;\r\n            }\r\n            else {\r\n                textObject = text;\r\n            }\r\n            if (response.status >= 300) {\r\n                let err = new Error();\r\n                err.method = options.method;\r\n                err.name = `${response.status}`;\r\n                err.message = isJSONContextType ? (textObject.Message || textObject.message) : textObject;\r\n                err.message = err.message || response.statusText;\r\n                throw err;\r\n            }\r\n            return textObject;\r\n        });\r\n    }\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./out/service.js?");

/***/ }),

/***/ "./out/value-store.js":
/*!****************************!*\
  !*** ./out/value-store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    /**\r\n     * 实现数据的存储，以及数据修改的通知\r\n     */\r\n    class ValueStore {\r\n        constructor(value) {\r\n            this.items = new Array();\r\n            this._value = value === undefined ? null : value;\r\n        }\r\n        add(func, sender) {\r\n            this.items.push({ func, sender });\r\n            return func;\r\n        }\r\n        remove(func) {\r\n            this.items = this.items.filter(o => o.func != func);\r\n        }\r\n        fire(value) {\r\n            this.items.forEach(o => o.func(value, o.sender));\r\n        }\r\n        get value() {\r\n            if (this._value === undefined)\r\n                return null;\r\n            return this._value;\r\n        }\r\n        set value(value) {\r\n            this._value = value;\r\n            this.fire(value);\r\n        }\r\n    }\r\n    exports.ValueStore = ValueStore;\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./out/value-store.js?");

/***/ })

/******/ });
});