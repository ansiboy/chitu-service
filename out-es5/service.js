"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
exports.formatData = exports.Service = void 0;

var callback_js_1 = require("./callback.js");

var errors_js_1 = require("./errors.js");

var methods = {
  get: "get",
  put: "put",
  post: "post",
  delete: "delete"
};

var Service =
/*#__PURE__*/
function () {
  function Service(handleError) {
    var _this = this;

    _classCallCheck(this, Service);

    this.error = (0, callback_js_1.Callbacks)();
    this.headers = {};

    if (handleError) {
      this.error.add(function (sender, err) {
        handleError(err, _this);
      });
    }
  }

  _createClass(Service, [{
    key: "loadNodeFetchModule",
    value: function loadNodeFetchModule() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var nodeFetch;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof window === 'undefined')) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return eval("import('node-fetch')");

              case 3:
                nodeFetch = _context.sent.default;
                return _context.abrupt("return", nodeFetch);

              case 5:
                return _context.abrupt("return", fetch);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "ajax",
    value: function ajax(url, options) {
      var _this2 = this;

      if (options === undefined) options = {};
      var data = options.data;
      var method = options.method || methods.get;
      var headers = Object.assign({}, Service.headers, this.headers, options.headers || {});
      var body;

      if (data != null) {
        var is_json = (headers['content-type'] || '').indexOf('json') >= 0;
        var is_formdata = (headers['content-type'] || '').indexOf('form-data') >= 0;

        if (is_json) {
          body = JSON.stringify(data);
        } else if (is_formdata) {
          delete headers["content-type"];

          if (typeof FormData == "undefined") {
            var _FormData = eval("require")("form-data");

            body = new _FormData();
          } else {
            body = new FormData();
          }

          for (var key in data) {
            body.append(key, data[key]);
          }
        } else {
          body = new URLSearchParams();

          for (var _key in data) {
            body.append(_key, data[_key]);
          }
        }
      }

      return new Promise(function (reslove, reject) {
        var options = method == methods.get ? {
          headers: headers,
          method: method
        } : {
          headers: headers,
          body: body,
          method: method
        };
        var timeId;
        if (options == null) throw errors_js_1.errors.unexpectedNullValue('options');

        if (method == methods.get) {
          timeId = setTimeout(function () {
            console.warn("timeout url: ".concat(url));
            var err = new Error(); //new AjaxError(options.method);

            err.name = 'timeout';
            err.message = "Connect timeout, url: ".concat(url);
            reject(err);

            _this2.error.fire(_this2, err);

            clearTimeout(timeId);
          }, Service.settings.ajaxTimeout * 1000);
        }

        _this2._ajax(url, options, function () {
          return _this2.loadNodeFetchModule();
        }).then(function (data) {
          reslove(data);
          if (timeId) clearTimeout(timeId);
        }).catch(function (err) {
          if (_typeof(err) == "object") {
            err.detail = "Execute url '".concat(url, "' by method ").concat(options.method, " fail.");
          }

          _this2.error.fire(_this2, err);

          if (err.processed !== undefined) {
            reslove(err.processed);
          } else {
            reject(err);
          }

          if (timeId) clearTimeout(timeId);
        });
      });
    }
  }, {
    key: "_ajax",
    value: function _ajax(url, options, loadNodeFetchModule) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        var response, fetch, responsePromise;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return loadNodeFetchModule();

              case 2:
                fetch = _context2.sent;
                responsePromise = fetch(url, options);
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  responsePromise.then(function (r) {
                    response = r;
                    var responseText = response.text();
                    var p;

                    if (typeof responseText == 'string') {
                      p = new Promise(function (reslove, reject) {
                        reslove(responseText);
                      });
                    } else {
                      p = responseText;
                    }

                    return p;
                  }).then(function (text) {
                    var textObject;
                    var isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;

                    if (isJSONContextType) {
                      try {
                        textObject = text ? JSON.parse(text) : {};
                      } catch (_a) {
                        var err = errors_js_1.errors.parseJSONFail(text);
                        console.error(err);
                        textObject = text;
                      }
                    } else {
                      textObject = text;
                    }

                    if (response.status >= 300) {
                      var _err = new Error();

                      _err.method = options.method;
                      _err.name = "".concat(response.status);
                      _err.message = typeof textObject == "string" ? textObject : textObject.Message || textObject.message || '';
                      _err.message = _err.message || response.statusText;
                      reject(_err);
                      return;
                    }

                    textObject = _this3.formatData(textObject);
                    resolve(textObject);
                    return;
                  }).catch(function (err) {
                    console.error(err);
                    reject(err);
                  });
                }));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "formatData",
    value: function formatData(data) {
      return _formatData(data);
    }
    /**
     * 创建服务
     * @param type 服务类型
     */

  }, {
    key: "createService",
    value: function createService(type) {
      var _this4 = this;

      type = type || Service;
      var service = new type();
      service.error.add(function (sender, error) {
        _this4.error.fire(service, error);
      });
      return service;
    }
  }, {
    key: "getByJson",
    value: function getByJson(url, data, headers) {
      if (data && Object.getOwnPropertyNames(data).length > 0) {
        url = "".concat(url, "?").concat(encodeURIComponent(JSON.stringify(data)));
      }

      headers = headers || {};
      headers["content-type"] = "application/json";
      return this.ajax(url, {
        headers: headers,
        method: methods.get
      });
    }
  }, {
    key: "putByJson",
    value: function putByJson(url, data, headers) {
      headers = headers || {};
      headers["content-type"] = "application/json";
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: methods.put
      });
    }
  }, {
    key: "postByJson",
    value: function postByJson(url, data, headers) {
      headers = headers || {};
      headers["content-type"] = "application/json";
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: methods.post
      });
    }
  }, {
    key: "deleteByJson",
    value: function deleteByJson(url, data, headers) {
      headers = headers || {};
      headers["content-type"] = "application/json";
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: methods.delete
      });
    }
  }, {
    key: "putByFormData",
    value: function putByFormData(url, data, headers) {
      headers = headers || {};
      headers["content-type"] = "multipart/form-data";
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: methods.put
      });
    }
  }, {
    key: "postByFormData",
    value: function postByFormData(url, data, headers) {
      headers = headers || {};
      headers["content-type"] = "multipart/form-data";
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: methods.post
      });
    }
  }, {
    key: "deleteByFormData",
    value: function deleteByFormData(url, data, headers) {
      headers = headers || {};
      headers["content-type"] = "multipart/form-data";
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: methods.delete
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
    value: function get(url, data, headers) {
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
        headers: headers,
        method: methods.get
      });
    }
  }, {
    key: "put",
    value: function put(url, data, headers) {
      headers = headers || {};
      headers["content-type"] = "application/x-www-form-urlencoded";
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: methods.put
      });
    }
  }, {
    key: "post",
    value: function post(url, data, headers) {
      headers = headers || {};
      headers["content-type"] = "application/x-www-form-urlencoded";
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: methods.post
      });
    }
  }, {
    key: "delete",
    value: function _delete(url, data, headers) {
      headers = headers || {};
      headers["content-type"] = "application/x-www-form-urlencoded";
      return this.ajax(url, {
        headers: headers,
        data: data,
        method: methods.delete
      });
    }
  }]);

  return Service;
}();

exports.Service = Service;
Service.settings = {
  ajaxTimeout: 30
};
Service.headers = {};

function _formatData(data) {
  if (_typeof(data) == "object") {
    for (var key in data) {
      data[key] = _formatData(data[key]);
    }

    return data;
  }

  var datePattern = /^\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}$/;

  if (typeof data == "string" && datePattern.test(data)) {
    return new Date(data);
  }

  return data;
}

exports.formatData = _formatData;
//# sourceMappingURL=service.js.map
