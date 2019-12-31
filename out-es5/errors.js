"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);
  }

  _createClass(Errors, [{
    key: "argumentNull",
    value: function argumentNull(argumentName) {
      var error = new Error("Argument ".concat(argumentName, " cannt be null or emtpy."));
      error.name = Errors.prototype.argumentNull.name;
      return error;
    }
  }, {
    key: "routeDataFieldNull",
    value: function routeDataFieldNull(fieldName) {
      var msg = "The ".concat(fieldName, " field of route data cannt be null.");
      var error = new Error(msg);
      error.name = Errors.prototype.routeDataFieldNull.name;
      return error;
    }
  }, {
    key: "argumentFieldNull",
    value: function argumentFieldNull(fieldName, argumentName) {
      var msg = "The ".concat(fieldName, " field of ").concat(argumentName, " cannt be null.");
      var error = new Error(msg);
      error.name = Errors.prototype.argumentFieldNull.name;
      return error;
    }
  }]);

  return Errors;
}();

exports.Errors = Errors;
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
//# sourceMappingURL=errors.js.map
