/*!
 * ~
 *  maishu-chitu-service v1.13.0
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
})(typeof window === 'undefined' ? global : window, function() {
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

/***/ "../toolkit/dist/index.js":
/*!********************************!*\
  !*** ../toolkit/dist/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * ~
 *  maishu-toolkit v1.0.0
 *  https://github.com/ansiboy/toolkit
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(typeof window === 'undefined' ? global : window, function() {
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

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Errors {
    argumentNull(argumentName) {
        let error = new Error(`Argument ${argumentName} cannt be null or emtpy.`);
        let name = "argumentNull";
        error.name = name;
        return error;
    }
    routeDataFieldNull(fieldName) {
        let msg = `The ${fieldName} field of route data cannt be null.`;
        let error = new Error(msg);
        let name = "routeDataFieldNull";
        error.name = name;
        return error;
    }
    argumentFieldNull(fieldName, argumentName) {
        let msg = `The ${fieldName} field of ${argumentName} cannt be null.`;
        let error = new Error(msg);
        let name = "argumentFieldNull";
        error.name = name;
        return error;
    }
    argumentTypeIncorrect(argumentName, expectedType) {
        let msg = `Argument ${argumentName} type error, expected type is ${expectedType}.`;
        let error = new Error(msg);
        let name = "argumentTypeIncorrect";
        error.name = name;
        return error;
    }
}
exports.Errors = Errors;
exports.errors = new Errors();


/***/ }),

/***/ "./out/guid.js":
/*!*********************!*\
  !*** ./out/guid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
exports.guid = guid;


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__(/*! ./guid */ "./out/guid.js");
exports.guid = guid_1.guid;
var path_1 = __webpack_require__(/*! ./path */ "./out/path.js");
exports.pathContact = path_1.pathContact;
var errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
exports.Errors = errors_1.Errors;


/***/ }),

/***/ "./out/path.js":
/*!*********************!*\
  !*** ./out/path.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** 连接多个路径 */
function pathContact(...paths) {
    paths = paths || [];
    if (paths.length == 0)
        return "";
    if (paths.length == 1) {
        return paths[0];
    }
    let str = paths.join("");
    // 将一个或多个的 / 变为一个 /，例如：/shop/test// 转换为 /shop/test/
    str = str.replace(/\/+/g, '/');
    return str;
}
exports.pathContact = pathContact;


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../chitu-service/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./out-es5/callback.js":
/*!*****************************!*\
  !*** ./out-es5/callback.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Callback =
/*#__PURE__*/
function () {
  function Callback() {
    _classCallCheck(this, Callback);

    this.funcs = new Array();
  }

  _createClass(Callback, [{
    key: "add",
    value: function add(func) {
      this.funcs.push(func);
    }
  }, {
    key: "remove",
    value: function remove(func) {
      this.funcs = this.funcs.filter(function (o) {
        return o != func;
      });
    }
  }, {
    key: "fire",
    value: function fire() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.funcs.forEach(function (o) {
        return o.apply(void 0, args);
      });
    }
  }]);

  return Callback;
}();

exports.Callback = Callback;

function Callbacks() {
  return new Callback();
}

exports.Callbacks = Callbacks;
//# sourceMappingURL=callback.js.map


/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "../toolkit/dist/index.js");

var maishu_toolkit_2 = __webpack_require__(/*! maishu-toolkit */ "../toolkit/dist/index.js");

exports.Errors = maishu_toolkit_2.Errors;

var MyErrors =
/*#__PURE__*/
function (_maishu_toolkit_1$Err) {
  _inherits(MyErrors, _maishu_toolkit_1$Err);

  function MyErrors() {
    _classCallCheck(this, MyErrors);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyErrors).apply(this, arguments));
  }

  _createClass(MyErrors, [{
    key: "unexpectedNullValue",
    value: function unexpectedNullValue(name) {
      var msg = "variable ".concat(name, " is unexpected null value.");
      return new Error(msg);
    }
  }]);

  return MyErrors;
}(maishu_toolkit_1.Errors);

exports.errors = new MyErrors();
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var service_1 = __webpack_require__(/*! ./service */ "./out-es5/service.js");

exports.Service = service_1.Service;

var callback_1 = __webpack_require__(/*! ./callback */ "./out-es5/callback.js");

exports.Callback = callback_1.Callback;
exports.Callbacks = callback_1.Callbacks;

var value_store_1 = __webpack_require__(/*! ./value-store */ "./out-es5/value-store.js");

exports.ValueStore = value_store_1.ValueStore;
exports.LocalValueStore = value_store_1.LocalValueStore;
exports.CookieValueStore = value_store_1.CookieValueStore;

var utility_1 = __webpack_require__(/*! ./utility */ "./out-es5/utility.js");

exports.guid = utility_1.guid;

var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

exports.Errors = errors_1.Errors;

var status_code_1 = __webpack_require__(/*! ./status-code */ "./out-es5/status-code.js");

exports.StatusCodes = status_code_1.StatusCode;
exports.StatusCode = status_code_1.StatusCode;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/service.js":
/*!****************************!*\
  !*** ./out-es5/service.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var callback_1 = __webpack_require__(/*! ./callback */ "./out-es5/callback.js");

var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var Service =
/*#__PURE__*/
function () {
  function Service(handleError) {
    var _this = this;

    _classCallCheck(this, Service);

    this.error = callback_1.Callbacks();

    if (handleError) {
      this.error.add(function (sender, err) {
        handleError(err, _this);
      });
    }
  }

  _createClass(Service, [{
    key: "ajax",
    value: function ajax(url, options) {
      var _this2 = this;

      // options = options || {} as any
      if (options === undefined) options = {};
      var data = options.data;
      var method = options.method;
      var headers = options.headers || {};
      var body;

      if (data != null) {
        var is_json = (headers['content-type'] || '').indexOf('json') >= 0;

        if (is_json) {
          body = JSON.stringify(data);
        } else {
          body = new URLSearchParams();

          for (var key in data) {
            body.append(key, data[key]);
          }
        }
      } // return callAjax<T>(url, { headers: headers as any, body, method }, this, this.error);


      return new Promise(function (reslove, reject) {
        var options = {
          headers: headers,
          body: body,
          method: method
        };
        var timeId;
        if (options == null) throw errors_1.errors.unexpectedNullValue('options');

        if (method == 'get') {
          timeId = setTimeout(function () {
            console.warn("timeout url: ".concat(url));
            var err = new Error(); //new AjaxError(options.method);

            err.name = 'timeout';
            err.message = '网络连接超时';
            reject(err);

            _this2.error.fire(_this2, err);

            clearTimeout(timeId);
          }, Service.settings.ajaxTimeout * 1000);
        }

        _ajax(url, options).then(function (data) {
          reslove(data);
          if (timeId) clearTimeout(timeId);
        }).catch(function (err) {
          reject(err);

          _this2.error.fire(_this2, err);

          if (timeId) clearTimeout(timeId);
        });
      });
    }
    /**
     * 创建服务
     * @param type 服务类型
     */

  }, {
    key: "createService",
    value: function createService(type) {
      var _this3 = this;

      type = type || Service;
      var service = new type();
      service.error.add(function (sender, error) {
        _this3.error.fire(service, error);
      });
      return service;
    }
  }, {
    key: "getByJson",
    value: function getByJson(url, data) {
      if (data && Object.getOwnPropertyNames(data).length > 0) {
        url = "".concat(url, "?").concat(encodeURIComponent(JSON.stringify(data)));
      }

      var headers = {
        "content-type": 'application/json'
      };
      return this.ajax(url, {
        headers: headers,
        method: 'get'
      });
    }
  }, {
    key: "putByJson",
    value: function putByJson(url, data) {
      var headers = {
        "content-type": 'application/json'
      };
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: 'put'
      });
    }
  }, {
    key: "postByJson",
    value: function postByJson(url, data) {
      var headers = {
        "content-type": 'application/json'
      };
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: 'post'
      });
    }
  }, {
    key: "deleteByJson",
    value: function deleteByJson(url, data) {
      var headers = {
        "content-type": 'application/json'
      };
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: 'delete'
      });
    }
  }, {
    key: "isEncoded",
    value: function isEncoded(uri) {
      try {
        uri = uri || '';
        return uri !== decodeURIComponent(uri);
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "get",
    value: function get(url, data) {
      data = data || {};
      var params = "";

      for (var key in data) {
        if (data[key] == null) continue;
        var value = "".concat(data[key]);

        if (!this.isEncoded(value)) {
          value = encodeURIComponent(value);
        }

        params = params ? "".concat(params, "&").concat(key, "=").concat(value) : "".concat(key, "=").concat(value);
      }

      if (params) {
        url = "".concat(url, "?").concat(params);
      }

      return this.ajax(url, {
        method: 'get'
      });
    }
  }, {
    key: "put",
    value: function put(url, data) {
      var headers = {
        "content-type": 'application/x-www-form-urlencoded'
      };
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: 'put'
      });
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var headers = {
        "content-type": 'application/x-www-form-urlencoded'
      };
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: 'post'
      });
    }
  }, {
    key: "delete",
    value: function _delete(url, data) {
      var headers = {
        "content-type": 'application/x-www-form-urlencoded'
      };
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: 'delete'
      });
    }
  }]);

  return Service;
}();

exports.Service = Service;
Service.settings = {
  ajaxTimeout: 30
};

Service.isClass = function () {
  var toString = Function.prototype.toString;

  function fnBody(fn) {
    return toString.call(fn).replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
  }

  function isClass(fn) {
    return typeof fn === 'function' && (/^class(\s|\{\}$)/.test(toString.call(fn)) || /^.*classCallCheck\(/.test(fnBody(fn))) // babel.js
    ;
  }

  return isClass;
}();

function _ajax(url, options) {
  return __awaiter(this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response, responseText, p, text, textObject, isJSONContextType, err;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof window === 'undefined')) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return eval('require')('node-fetch')(url, options);

          case 3:
            response = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.next = 8;
            return fetch(url, options);

          case 8:
            response = _context.sent;

          case 9:
            responseText = response.text();

            if (typeof responseText == 'string') {
              p = new Promise(function (reslove, reject) {
                reslove(responseText);
              });
            } else {
              p = responseText;
            }

            _context.next = 13;
            return responseText;

          case 13:
            text = _context.sent;
            isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;

            if (isJSONContextType) {
              textObject = text ? JSON.parse(text) : {};
            } else {
              textObject = text;
            }

            if (!(response.status >= 300)) {
              _context.next = 23;
              break;
            }

            err = new Error();
            err.method = options.method;
            err.name = "".concat(response.status);
            err.message = isJSONContextType ? textObject.Message || textObject.message || '' : textObject;
            err.message = err.message || response.statusText;
            throw err;

          case 23:
            return _context.abrupt("return", textObject);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}
//# sourceMappingURL=service.js.map


/***/ }),

/***/ "./out-es5/status-code.js":
/*!********************************!*\
  !*** ./out-es5/status-code.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var StatusCode;

(function (StatusCode) {
  //=============================================
  // 成功的状态码，必须大于 200
  StatusCode[StatusCode["Login"] = 282] = "Login";
  StatusCode[StatusCode["Logout"] = 283] = "Logout"; //=============================================

  StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
  StatusCode[StatusCode["OK"] = 200] = "OK";
  StatusCode[StatusCode["Redirect"] = 301] = "Redirect";
  StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
  StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden"; //=============================================
  // 失败的状态码，必须小于或等于 700

  StatusCode[StatusCode["ArgumentNull"] = 705] = "ArgumentNull";
  /** 字段为空 */

  StatusCode[StatusCode["FieldNull"] = 709] = "FieldNull";
  StatusCode[StatusCode["ArgumentTypeIncorrect"] = 710] = "ArgumentTypeIncorrect";
  /** 用户未登录 */

  StatusCode[StatusCode["UserNotLogin"] = 718] = "UserNotLogin";
  /** 没有权限 */

  StatusCode[StatusCode["NoPermission"] = 726] = "NoPermission";
  StatusCode[StatusCode["UserIdNull"] = 727] = "UserIdNull";
  /** 指定 ID 的对象不存在 */

  StatusCode[StatusCode["ObjectNotExistWithId"] = 728] = "ObjectNotExistWithId";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=status-code.js.map


/***/ }),

/***/ "./out-es5/utility.js":
/*!****************************!*\
  !*** ./out-es5/utility.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

exports.guid = guid;
//# sourceMappingURL=utility.js.map


/***/ }),

/***/ "./out-es5/value-store.js":
/*!********************************!*\
  !*** ./out-es5/value-store.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 实现数据的存储，以及数据修改的通知
 */

var ValueStore =
/*#__PURE__*/
function () {
  function ValueStore(value) {
    _classCallCheck(this, ValueStore);

    this.items = new Array();
    this._value = value;
  }

  _createClass(ValueStore, [{
    key: "attach",
    value: function attach(func, sender) {
      if (this.value !== undefined) {
        func(this.value, sender);
      }

      return this.add(func, sender);
    }
  }, {
    key: "add",
    value: function add(func, sender) {
      this.items.push({
        func: func,
        sender: sender
      });
      return func;
    }
  }, {
    key: "remove",
    value: function remove(func) {
      this.items = this.items.filter(function (o) {
        return o.func != func;
      });
    }
  }, {
    key: "fire",
    value: function fire(value) {
      this.items.forEach(function (o) {
        return o.func(value, o.sender);
      });
    }
  }, {
    key: "value",
    get: function get() {
      if (this._value === undefined) return null;
      return this._value;
    },
    set: function set(value) {
      this._value = value;
      this.fire(value);
    }
  }]);

  return ValueStore;
}();

exports.ValueStore = ValueStore;

var LocalValueStore =
/*#__PURE__*/
function (_ValueStore) {
  _inherits(LocalValueStore, _ValueStore);

  function LocalValueStore(storageName) {
    var _this;

    _classCallCheck(this, LocalValueStore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LocalValueStore).call(this, LocalValueStore.loadValue(storageName)));
    _this.storageName = storageName;
    return _this;
  }

  _createClass(LocalValueStore, [{
    key: "value",
    get: function get() {
      return _get(_getPrototypeOf(LocalValueStore.prototype), "value", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(LocalValueStore.prototype), "value", value, this, true);

      LocalValueStore.saveValue(this.storageName, value);
    }
  }], [{
    key: "loadValue",
    value: function loadValue(storageName) {
      var text = localStorage.getItem(storageName);
      if (text == null) return null;
      return JSON.parse(text);
    }
  }, {
    key: "saveValue",
    value: function saveValue(storageName, value) {
      if (value == null) {
        localStorage.removeItem(storageName);
        return;
      }

      localStorage.setItem(storageName, JSON.stringify(value));
    }
  }]);

  return LocalValueStore;
}(ValueStore);

exports.LocalValueStore = LocalValueStore;

var CookieValueStore =
/*#__PURE__*/
function (_ValueStore2) {
  _inherits(CookieValueStore, _ValueStore2);

  function CookieValueStore(storageName) {
    var _this2;

    _classCallCheck(this, CookieValueStore);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CookieValueStore).call(this, CookieValueStore.loadValue(storageName)));
    _this2.storageName = storageName;
    return _this2;
  }

  _createClass(CookieValueStore, [{
    key: "value",
    get: function get() {
      return _get(_getPrototypeOf(CookieValueStore.prototype), "value", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(CookieValueStore.prototype), "value", value, this, true);

      CookieValueStore.saveValue(this.storageName, value);
    }
  }], [{
    key: "loadValue",
    value: function loadValue(storageName) {
      var text = CookieValueStore.getCookie(storageName);
      if (text == null) return null;
      return JSON.parse(text);
    }
  }, {
    key: "saveValue",
    value: function saveValue(storageName, value) {
      if (value == null) {
        CookieValueStore.removeCookie(storageName);
        return;
      } // localStorage.setItem(this.storageName, JSON.stringify(value));


      CookieValueStore.setCookie(storageName, JSON.stringify(value));
    }
  }, {
    key: "setCookie",
    value: function setCookie(name, value, days) {
      // nodejs 没有 document
      if (typeof document == 'undefined') return;
      var expires = "";

      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }

      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
  }, {
    key: "getCookie",
    value: function getCookie(name) {
      if (typeof document == 'undefined') return null;
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }

      return null;
    }
  }, {
    key: "removeCookie",
    value: function removeCookie(name) {
      // document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      this.setCookie(name, '');
    }
  }]);

  return CookieValueStore;
}(ValueStore);

exports.CookieValueStore = CookieValueStore;
//# sourceMappingURL=value-store.js.map


/***/ })

/******/ });
});
//# sourceMappingURL=index.es5.js.map