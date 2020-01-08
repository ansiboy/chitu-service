"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_toolkit_1 = require("maishu-toolkit");
var maishu_toolkit_2 = require("maishu-toolkit");
exports.Errors = maishu_toolkit_2.Errors;
class MyErrors extends maishu_toolkit_1.Errors {
    unexpectedNullValue(name) {
        let msg = `variable ${name} is unexpected null value.`;
        return new Error(msg);
    }
}
exports.errors = new MyErrors();
//# sourceMappingURL=errors.js.map