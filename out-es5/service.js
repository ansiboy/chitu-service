"use strict";

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

define(["require", "exports", "./callback", "./errors"], function (require, exports, callback_1, errors_1) {
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
});
//# sourceMappingURL=service.js.map
