"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCodes;
(function (StatusCodes) {
    //=============================================
    // 成功的状态码，必须大于 200
    StatusCodes[StatusCodes["login"] = 282] = "login";
    StatusCodes[StatusCodes["logout"] = 283] = "logout";
    //=============================================
    StatusCodes[StatusCodes["forbidden"] = 403] = "forbidden";
    //=============================================
    // 失败的状态码，必须小于或等于 700
    StatusCodes[StatusCodes["argumentNull"] = 705] = "argumentNull";
    /** 字段为空 */
    StatusCodes[StatusCodes["fieldNull"] = 709] = "fieldNull";
    StatusCodes[StatusCodes["argumentTypeIncorrect"] = 710] = "argumentTypeIncorrect";
    /** 用户未登录 */
    StatusCodes[StatusCodes["userNotLogin"] = 718] = "userNotLogin";
    /** 没有权限 */
    StatusCodes[StatusCodes["noPermission"] = 726] = "noPermission";
    StatusCodes[StatusCodes["userIdNull"] = 727] = "userIdNull";
    /** 指定 ID 的对象不存在 */
    StatusCodes[StatusCodes["objectNotExistWithId"] = 728] = "objectNotExistWithId";
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
//# sourceMappingURL=status-code.js.map