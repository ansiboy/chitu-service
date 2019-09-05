"use strict";

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
//# sourceMappingURL=value-store.js.map