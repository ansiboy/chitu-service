"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = exports.Errors = void 0;

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);
  }

  _createClass(Errors, [{
    key: "unexpectedNullValue",
    value: function unexpectedNullValue(name) {
      var msg = "variable ".concat(name, " is unexpected null value.");
      return new Error(msg);
    }
  }, {
    key: "parseJSONFail",
    value: function parseJSONFail(text) {
      var msg = "Parse json string fail:\r\n".concat(text);
      return new Error(msg);
    }
  }]);

  return Errors;
}();

exports.Errors = Errors;
exports.errors = new Errors();
//# sourceMappingURL=errors.js.map
