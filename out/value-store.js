"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 实现数据的存储，以及数据修改的通知
 */
class ValueStore {
    constructor(value) {
        this.items = new Array();
        this._value = value;
    }
    attach(func, sender) {
        if (this.value !== undefined) {
            func(this.value, sender);
        }
        return this.add(func, sender);
    }
    add(func, sender) {
        this.items.push({ func, sender });
        return func;
    }
    remove(func) {
        this.items = this.items.filter(o => o.func != func);
    }
    fire(value) {
        this.items.forEach(o => o.func(value, o.sender));
    }
    get value() {
        if (this._value === undefined)
            return null;
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.fire(value);
    }
}
exports.ValueStore = ValueStore;
//# sourceMappingURL=value-store.js.map