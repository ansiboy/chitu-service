"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callbacks = exports.Callback = void 0;
class Callback {
    constructor() {
        this.funcs = new Array();
    }
    add(func) {
        this.funcs.push(func);
    }
    remove(func) {
        this.funcs = this.funcs.filter(o => o != func);
    }
    fire(...args) {
        this.funcs.forEach(o => o(...args));
    }
}
exports.Callback = Callback;
function Callbacks() {
    return new Callback();
}
exports.Callbacks = Callbacks;
//# sourceMappingURL=callback.js.map