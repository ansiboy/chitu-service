/*!
 * 
 *  maishu-chitu-service v1.1.8
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out-es5/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out-es5/callback.js":
/*!*****************************!*\
  !*** ./out-es5/callback.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Callback =\n/*#__PURE__*/\nfunction () {\n  function Callback() {\n    _classCallCheck(this, Callback);\n\n    this.funcs = new Array();\n  }\n\n  _createClass(Callback, [{\n    key: \"add\",\n    value: function add(func) {\n      this.funcs.push(func);\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(func) {\n      this.funcs = this.funcs.filter(function (o) {\n        return o != func;\n      });\n    }\n  }, {\n    key: \"fire\",\n    value: function fire() {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      this.funcs.forEach(function (o) {\n        return o.apply(void 0, args);\n      });\n    }\n  }]);\n\n  return Callback;\n}();\n\nexports.Callback = Callback;\n\nfunction Callbacks() {\n  return new Callback();\n}\n\nexports.Callbacks = Callbacks;\n//# sourceMappingURL=callback.js.map\n\n\n//# sourceURL=webpack:///./out-es5/callback.js?");

/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.errors = {\n  serviceUrlCanntNull: function serviceUrlCanntNull(serviceName) {\n    var msg = \"Service '\".concat(serviceName, \"' base url can not null.\");\n    return new Error(msg);\n  },\n  unexpectedNullResult: function unexpectedNullResult() {\n    var msg = \"Null result is unexpected.\";\n    return new Error(msg);\n  },\n  unexpectedNullValue: function unexpectedNullValue(name) {\n    var msg = \"variable \".concat(name, \" is unexpected null value.\");\n    return new Error(msg);\n  },\n  argumentNull: function argumentNull(name) {\n    var msg = \"Arugment \".concat(name, \" cannt null or empty.\");\n    return new Error(msg);\n  },\n  fieldNull: function fieldNull(field, itemName) {\n    var msg = \"\".concat(itemName, \" \").concat(field, \" cannt be null or empty\");\n    return new Error(msg);\n  },\n  instanceMessangerStart: function instanceMessangerStart() {\n    var msg = \"Instance messanger is start.\";\n    return new Error(msg);\n  }\n};\n//# sourceMappingURL=errors.js.map\n\n\n//# sourceURL=webpack:///./out-es5/errors.js?");

/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar service_1 = __webpack_require__(/*! ./service */ \"./out-es5/service.js\");\n\nexports.Service = service_1.Service;\n\nvar callback_1 = __webpack_require__(/*! ./callback */ \"./out-es5/callback.js\");\n\nexports.Callback = callback_1.Callback;\nexports.Callbacks = callback_1.Callbacks;\n\nvar value_store_1 = __webpack_require__(/*! ./value-store */ \"./out-es5/value-store.js\");\n\nexports.ValueStore = value_store_1.ValueStore;\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack:///./out-es5/index.js?");

/***/ }),

/***/ "./out-es5/service.js":
/*!****************************!*\
  !*** ./out-es5/service.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar callback_1 = __webpack_require__(/*! ./callback */ \"./out-es5/callback.js\");\n\nvar errors_1 = __webpack_require__(/*! ./errors */ \"./out-es5/errors.js\");\n\nvar Service =\n/*#__PURE__*/\nfunction () {\n  function Service() {\n    _classCallCheck(this, Service);\n\n    this.error = callback_1.Callbacks();\n  }\n\n  _createClass(Service, [{\n    key: \"ajax\",\n    value: function ajax(url, options) {\n      var _this = this;\n\n      // options = options || {} as any\n      if (options === undefined) options = {};\n      var data = options.data;\n      var method = options.method;\n      var headers = options.headers || {};\n      var body;\n\n      if (data != null) {\n        var is_json = (headers['content-type'] || '').indexOf('json') >= 0;\n\n        if (is_json) {\n          body = JSON.stringify(data);\n        } else {\n          body = new URLSearchParams();\n\n          for (var key in data) {\n            body.append(key, data[key]);\n          }\n        }\n      } // return callAjax<T>(url, { headers: headers as any, body, method }, this, this.error);\n\n\n      return new Promise(function (reslove, reject) {\n        var options = {\n          headers: headers,\n          body: body,\n          method: method\n        };\n        var timeId;\n        if (options == null) throw errors_1.errors.unexpectedNullValue('options');\n\n        if (method == 'get') {\n          timeId = setTimeout(function () {\n            var err = new Error(); //new AjaxError(options.method);\n\n            err.name = 'timeout';\n            err.message = '网络连接超时';\n            reject(err);\n\n            _this.error.fire(_this, err);\n\n            clearTimeout(timeId);\n          }, Service.settings.ajaxTimeout * 1000);\n        }\n\n        _ajax(url, options).then(function (data) {\n          reslove(data);\n          if (timeId) clearTimeout(timeId);\n        })[\"catch\"](function (err) {\n          reject(err);\n\n          _this.error.fire(_this, err);\n\n          if (timeId) clearTimeout(timeId);\n        });\n      });\n    }\n    /**\r\n     * 创建服务\r\n     * @param type 服务类型\r\n     */\n\n  }, {\n    key: \"createService\",\n    value: function createService(type) {\n      var _this2 = this;\n\n      type = type || Service;\n      var service = new type();\n      service.error.add(function (sender, error) {\n        _this2.error.fire(service, error);\n      });\n      return service;\n    }\n  }]);\n\n  return Service;\n}();\n\nService.settings = {\n  ajaxTimeout: 30\n};\nexports.Service = Service;\n\nfunction _ajax(url, options) {\n  return __awaiter(this, void 0, void 0,\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    var response, responseText, p, text, textObject, isJSONContextType, err;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url, options);\n\n          case 2:\n            response = _context.sent;\n            responseText = response.text();\n\n            if (typeof responseText == 'string') {\n              p = new Promise(function (reslove, reject) {\n                reslove(responseText);\n              });\n            } else {\n              p = responseText;\n            }\n\n            _context.next = 7;\n            return responseText;\n\n          case 7:\n            text = _context.sent;\n            isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;\n\n            if (isJSONContextType) {\n              textObject = text ? JSON.parse(text) : null;\n            } else {\n              textObject = text;\n            }\n\n            if (!(response.status >= 300)) {\n              _context.next = 17;\n              break;\n            }\n\n            err = new Error();\n            err.method = options.method;\n            err.name = \"\".concat(response.status);\n            err.message = isJSONContextType ? textObject.Message || textObject.message : textObject;\n            err.message = err.message || response.statusText;\n            throw err;\n\n          case 17:\n            return _context.abrupt(\"return\", textObject);\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n}\n//# sourceMappingURL=service.js.map\n\n\n//# sourceURL=webpack:///./out-es5/service.js?");

/***/ }),

/***/ "./out-es5/value-store.js":
/*!********************************!*\
  !*** ./out-es5/value-store.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\r\n * 实现数据的存储，以及数据修改的通知\r\n */\n\nvar ValueStore =\n/*#__PURE__*/\nfunction () {\n  function ValueStore(value) {\n    _classCallCheck(this, ValueStore);\n\n    this.items = new Array();\n    this._value = value === undefined ? null : value;\n  }\n\n  _createClass(ValueStore, [{\n    key: \"add\",\n    value: function add(func, sender) {\n      this.items.push({\n        func: func,\n        sender: sender\n      });\n      return func;\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(func) {\n      this.items = this.items.filter(function (o) {\n        return o.func != func;\n      });\n    }\n  }, {\n    key: \"fire\",\n    value: function fire(value) {\n      this.items.forEach(function (o) {\n        return o.func(value, o.sender);\n      });\n    }\n  }, {\n    key: \"value\",\n    get: function get() {\n      if (this._value === undefined) return null;\n      return this._value;\n    },\n    set: function set(value) {\n      this._value = value;\n      this.fire(value);\n    }\n  }]);\n\n  return ValueStore;\n}();\n\nexports.ValueStore = ValueStore;\n//# sourceMappingURL=value-store.js.map\n\n\n//# sourceURL=webpack:///./out-es5/value-store.js?");

/***/ })

/******/ });
});