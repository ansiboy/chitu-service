/*!
 * 
 *  maishu-chitu-service v1.1.20
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
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

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
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=callback.js.map


/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.errors = {
    serviceUrlCanntNull: function serviceUrlCanntNull(serviceName) {
      var msg = "Service '".concat(serviceName, "' base url can not null.");
      return new Error(msg);
    },
    unexpectedNullResult: function unexpectedNullResult() {
      var msg = "Null result is unexpected.";
      return new Error(msg);
    },
    unexpectedNullValue: function unexpectedNullValue(name) {
      var msg = "variable ".concat(name, " is unexpected null value.");
      return new Error(msg);
    },
    argumentNull: function argumentNull(name) {
      var msg = "Arugment ".concat(name, " cannt null or empty.");
      return new Error(msg);
    },
    fieldNull: function fieldNull(field, itemName) {
      var msg = "".concat(itemName, " ").concat(field, " cannt be null or empty");
      return new Error(msg);
    },
    instanceMessangerStart: function instanceMessangerStart() {
      var msg = "Instance messanger is start.";
      return new Error(msg);
    }
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./service */ "./out-es5/service.js"), __webpack_require__(/*! ./callback */ "./out-es5/callback.js"), __webpack_require__(/*! ./value-store */ "./out-es5/value-store.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, service_1, callback_1, value_store_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Service = service_1.Service;
  exports.Callback = callback_1.Callback;
  exports.Callbacks = callback_1.Callbacks;
  exports.ValueStore = value_store_1.ValueStore;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/service.js":
/*!****************************!*\
  !*** ./out-es5/service.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
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
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./callback */ "./out-es5/callback.js"), __webpack_require__(/*! ./errors */ "./out-es5/errors.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, callback_1, errors_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Service =
  /*#__PURE__*/
  function () {
    function Service() {
      _classCallCheck(this, Service);

      this.error = callback_1.Callbacks();
    }

    _createClass(Service, [{
      key: "ajax",
      value: function ajax(url, options) {
        var _this = this;

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
              var err = new Error(); //new AjaxError(options.method);

              err.name = 'timeout';
              err.message = '网络连接超时';
              reject(err);

              _this.error.fire(_this, err);

              clearTimeout(timeId);
            }, Service.settings.ajaxTimeout * 1000);
          }

          _ajax(url, options).then(function (data) {
            reslove(data);
            if (timeId) clearTimeout(timeId);
          }).catch(function (err) {
            reject(err);

            _this.error.fire(_this, err);

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
        var _this2 = this;

        type = type || Service;
        var service = new type();
        service.error.add(function (sender, error) {
          _this2.error.fire(service, error);
        });
        return service;
      }
    }]);

    return Service;
  }();

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

  exports.Service = Service;

  function _ajax(url, options) {
    return __awaiter(this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var response, responseText, p, text, textObject, isJSONContextType, err;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url, options);

            case 2:
              response = _context.sent;
              responseText = response.text();

              if (typeof responseText == 'string') {
                p = new Promise(function (reslove, reject) {
                  reslove(responseText);
                });
              } else {
                p = responseText;
              }

              _context.next = 7;
              return responseText;

            case 7:
              text = _context.sent;
              isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;

              if (isJSONContextType) {
                textObject = text ? JSON.parse(text) : null;
              } else {
                textObject = text;
              }

              if (!(response.status >= 300)) {
                _context.next = 17;
                break;
              }

              err = new Error();
              err.method = options.method;
              err.name = "".concat(response.status);
              err.message = isJSONContextType ? textObject.Message || textObject.message : textObject;
              err.message = err.message || response.statusText;
              throw err;

            case 17:
              return _context.abrupt("return", textObject);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=service.js.map


/***/ }),

/***/ "./out-es5/value-store.js":
/*!********************************!*\
  !*** ./out-es5/value-store.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

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
      this._value = value === undefined ? null : value;
    }

    _createClass(ValueStore, [{
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
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=value-store.js.map


/***/ })

/******/ });
});
//# sourceMappingURL=index.es5.js.map