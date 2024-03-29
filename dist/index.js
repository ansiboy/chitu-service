/*!
 * ~
 *  maishu-chitu-service v1.46.0
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
	else if(typeof exports === 'object')
		exports["chitu-service"] = factory();
	else
		root["chitu-service"] = factory();
})(typeof window === 'undefined' ? global : window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/callback.js":
/*!*************************!*\
  !*** ./out/callback.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    clear() {
        while (this.funcs.length > 0) {
            this.funcs.pop();
        }
    }
}
exports.Callback = Callback;
function Callbacks() {
    return new Callback();
}
exports.Callbacks = Callbacks;
//# sourceMappingURL=callback.js.map

/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = exports.Errors = void 0;
class Errors {
    unexpectedNullValue(name) {
        let msg = `variable ${name} is unexpected null value.`;
        return new Error(msg);
    }
    parseJSONFail(text) {
        let msg = `Parse json string fail:\r\n${text}`;
        return new Error(msg);
    }
}
exports.Errors = Errors;
exports.errors = new Errors();
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = exports.StatusCodes = exports.CookieValueStore = exports.LocalValueStore = exports.ValueStore = exports.Callbacks = exports.Callback = exports.formatData = exports.Service = void 0;
var service_1 = __webpack_require__(/*! ./service */ "./out/service.js");
Object.defineProperty(exports, "Service", { enumerable: true, get: function () { return service_1.Service; } });
Object.defineProperty(exports, "formatData", { enumerable: true, get: function () { return service_1.formatData; } });
var callback_1 = __webpack_require__(/*! ./callback */ "./out/callback.js");
Object.defineProperty(exports, "Callback", { enumerable: true, get: function () { return callback_1.Callback; } });
Object.defineProperty(exports, "Callbacks", { enumerable: true, get: function () { return callback_1.Callbacks; } });
var value_store_1 = __webpack_require__(/*! ./value-store */ "./out/value-store.js");
Object.defineProperty(exports, "ValueStore", { enumerable: true, get: function () { return value_store_1.ValueStore; } });
Object.defineProperty(exports, "LocalValueStore", { enumerable: true, get: function () { return value_store_1.LocalValueStore; } });
Object.defineProperty(exports, "CookieValueStore", { enumerable: true, get: function () { return value_store_1.CookieValueStore; } });
var status_code_1 = __webpack_require__(/*! ./status-code */ "./out/status-code.js");
Object.defineProperty(exports, "StatusCodes", { enumerable: true, get: function () { return status_code_1.StatusCode; } });
Object.defineProperty(exports, "StatusCode", { enumerable: true, get: function () { return status_code_1.StatusCode; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/service.js":
/*!************************!*\
  !*** ./out/service.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatData = exports.Service = void 0;
const callback_js_1 = __webpack_require__(/*! ./callback.js */ "./out/callback.js");
const errors_js_1 = __webpack_require__(/*! ./errors.js */ "./out/errors.js");
let methods = {
    get: "get",
    put: "put",
    post: "post",
    delete: "delete"
};
class Service {
    constructor(handleError) {
        this.error = (0, callback_js_1.Callbacks)();
        this.headers = {};
        if (handleError) {
            this.error.add((sender, err) => {
                handleError(err, this);
            });
        }
    }
    loadNodeFetchModule() {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window === 'undefined') {
                // 使用 global['require'] 而不是 require ，避免 webpack 处理 node-fetch
                let nodeFetch = (yield eval(`import('node-fetch')`)).default; //await loadNodeFetchModule();//(await eval(`import('node-fetch')`)).default;
                // responsePromise = nodeFetch(url, options);
                return nodeFetch;
            }
            return fetch;
        });
    }
    ajax(url, options) {
        if (options === undefined)
            options = {};
        let data = options.data;
        let method = options.method || methods.get;
        let headers = Object.assign({}, Service.headers, this.headers, options.headers || {});
        let body;
        if (data != null) {
            let is_json = (headers['content-type'] || '').indexOf('json') >= 0;
            let is_formdata = (headers['content-type'] || '').indexOf('form-data') >= 0;
            if (is_json) {
                body = JSON.stringify(data);
            }
            else if (is_formdata) {
                delete headers["content-type"];
                if (typeof FormData == "undefined") {
                    let FormData = eval("require")("form-data");
                    body = new FormData();
                }
                else {
                    body = new FormData();
                }
                for (let key in data) {
                    body.append(key, data[key]);
                }
            }
            else {
                body = new URLSearchParams();
                for (let key in data) {
                    body.append(key, data[key]);
                }
            }
        }
        return new Promise((reslove, reject) => {
            let options = method == methods.get ? { headers, method } : { headers, body, method };
            let timeId;
            if (options == null)
                throw errors_js_1.errors.unexpectedNullValue('options');
            if (method == methods.get) {
                timeId = setTimeout(() => {
                    console.warn(`timeout url: ${url}`);
                    let err = new Error(); //new AjaxError(options.method);
                    err.name = 'timeout';
                    err.message = `Connect timeout, url: ${url}`;
                    reject(err);
                    this.error.fire(this, err);
                    clearTimeout(timeId);
                }, Service.settings.ajaxTimeout * 1000);
            }
            this._ajax(url, options, () => this.loadNodeFetchModule())
                .then(data => {
                reslove(data);
                if (timeId)
                    clearTimeout(timeId);
            })
                .catch(err => {
                if (typeof err == "object") {
                    err.detail = `Execute url '${url}' by method ${options.method} fail.`;
                }
                this.error.fire(this, err);
                if (err.processed !== undefined) {
                    reslove(err.processed);
                }
                else {
                    reject(err);
                }
                if (timeId)
                    clearTimeout(timeId);
            });
        });
    }
    _ajax(url, options, loadNodeFetchModule) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            let response;
            let fetch = yield loadNodeFetchModule();
            let responsePromise = fetch(url, options);
            return new Promise((resolve, reject) => {
                responsePromise.then(r => {
                    response = r;
                    let responseText = response.text();
                    let p;
                    if (typeof responseText == 'string') {
                        p = new Promise((reslove, reject) => {
                            reslove(responseText);
                        });
                    }
                    else {
                        p = responseText;
                    }
                    return p;
                }).then(text => {
                    let textObject;
                    let isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;
                    if (isJSONContextType) {
                        try {
                            textObject = text ? JSON.parse(text) : {};
                        }
                        catch (_a) {
                            let err = errors_js_1.errors.parseJSONFail(text);
                            console.error(err);
                            textObject = text;
                        }
                    }
                    else {
                        textObject = text;
                    }
                    if (response.status >= 300) {
                        let err = new Error();
                        err.method = options.method;
                        err.name = `${response.status}`;
                        err.message = typeof textObject == "string" ? textObject : (textObject.Message || textObject.message || '');
                        err.message = err.message || response.statusText;
                        reject(err);
                        return;
                    }
                    textObject = this.formatData(textObject);
                    resolve(textObject);
                    return;
                }).catch(err => {
                    console.error(err);
                    reject(err);
                });
            });
            // }
            // catch (err) {
            //     console.error(err);
            //     throw err;
            // }
        });
    }
    formatData(data) {
        return formatData(data);
    }
    /**
     * 创建服务
     * @param type 服务类型
     */
    createService(type) {
        type = type || Service;
        let service = new type();
        service.error.add((sender, error) => {
            this.error.fire(service, error);
        });
        return service;
    }
    getByJson(url, data, headers) {
        if (data && Object.getOwnPropertyNames(data).length > 0) {
            url = `${url}?${encodeURIComponent(JSON.stringify(data))}`;
        }
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax(url, { headers, method: methods.get });
    }
    putByJson(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax(url, { headers, data, method: methods.put });
    }
    postByJson(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax(url, { headers, data, method: methods.post });
    }
    deleteByJson(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax(url, { headers, data, method: methods.delete });
    }
    putByFormData(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "multipart/form-data";
        return this.ajax(url, { headers, data, method: methods.put });
    }
    postByFormData(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "multipart/form-data";
        return this.ajax(url, { headers, data, method: methods.post });
    }
    deleteByFormData(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "multipart/form-data";
        return this.ajax(url, { headers, data, method: methods.delete });
    }
    isEncoded(uri) {
        try {
            uri = uri || '';
            return uri !== decodeURIComponent(uri);
        }
        catch (e) {
            return false;
        }
    }
    get(url, data, headers) {
        data = data || {};
        let params = "";
        for (let key in data) {
            if (data[key] == null)
                continue;
            let value = `${data[key]}`;
            if (!this.isEncoded(value)) {
                value = encodeURIComponent(value);
            }
            params = params ? `${params}&${key}=${value}` : `${key}=${value}`;
        }
        if (params) {
            url = `${url}?${params}`;
        }
        return this.ajax(url, { headers, method: methods.get });
    }
    put(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/x-www-form-urlencoded";
        return this.ajax(url, { headers, data, method: methods.put });
    }
    post(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/x-www-form-urlencoded";
        return this.ajax(url, { headers, data, method: methods.post, });
    }
    delete(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/x-www-form-urlencoded";
        return this.ajax(url, { headers, data, method: methods.delete });
    }
}
exports.Service = Service;
Service.settings = {
    ajaxTimeout: 30,
};
Service.headers = {};
function formatData(data) {
    if (typeof data == "object") {
        for (let key in data) {
            data[key] = formatData(data[key]);
        }
        return data;
    }
    let datePattern = /^\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}$/;
    if (typeof data == "string" && datePattern.test(data)) {
        return new Date(data);
    }
    return data;
}
exports.formatData = formatData;
//# sourceMappingURL=service.js.map

/***/ }),

/***/ "./out/status-code.js":
/*!****************************!*\
  !*** ./out/status-code.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    //=============================================
    // 成功的状态码，必须大于 200
    StatusCode[StatusCode["Login"] = 282] = "Login";
    StatusCode[StatusCode["Logout"] = 283] = "Logout";
    //=============================================
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["Redirect"] = 301] = "Redirect";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    //=============================================
    // 失败的状态码，必须小于或等于 700
    StatusCode[StatusCode["CustomError"] = 700] = "CustomError";
    StatusCode[StatusCode["ArgumentNull"] = 705] = "ArgumentNull";
    /** 字段为空 */
    StatusCode[StatusCode["FieldNull"] = 709] = "FieldNull";
    StatusCode[StatusCode["ArgumentTypeIncorrect"] = 710] = "ArgumentTypeIncorrect";
    /** 用户未登录 */
    StatusCode[StatusCode["UserNotLogin"] = 718] = "UserNotLogin";
    /** 没有权限 */
    StatusCode[StatusCode["NoPermission"] = 726] = "NoPermission";
    StatusCode[StatusCode["UserIdNull"] = 727] = "UserIdNull";
    /** 指定 ID 的对象不存在 */
    StatusCode[StatusCode["ObjectNotExistWithId"] = 728] = "ObjectNotExistWithId";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=status-code.js.map

/***/ }),

/***/ "./out/value-store.js":
/*!****************************!*\
  !*** ./out/value-store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieValueStore = exports.LocalValueStore = exports.ValueStore = void 0;
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
        this._value = value || undefined;
        this.fire(value);
    }
}
exports.ValueStore = ValueStore;
class LocalValueStore extends ValueStore {
    constructor(storageName) {
        super(LocalValueStore.loadValue(storageName));
        this.storageName = storageName;
    }
    get value() {
        return super.value;
    }
    set value(value) {
        super.value = value;
        LocalValueStore.saveValue(this.storageName, value);
    }
    static loadValue(storageName) {
        let text = localStorage.getItem(storageName);
        if (text == null)
            return undefined;
        return JSON.parse(text);
    }
    static saveValue(storageName, value) {
        if (value == null) {
            localStorage.removeItem(storageName);
            return;
        }
        localStorage.setItem(storageName, JSON.stringify(value));
    }
}
exports.LocalValueStore = LocalValueStore;
class CookieValueStore extends ValueStore {
    constructor(storageName) {
        super(CookieValueStore.loadValue(storageName));
        this.storageName = storageName;
    }
    get value() {
        return super.value;
    }
    set value(value) {
        super.value = value;
        CookieValueStore.saveValue(this.storageName, value);
    }
    static loadValue(storageName) {
        let text = CookieValueStore.getCookie(storageName);
        if (text == null)
            return undefined;
        return JSON.parse(text);
    }
    static saveValue(storageName, value) {
        if (value == null) {
            CookieValueStore.removeCookie(storageName);
            return;
        }
        // localStorage.setItem(this.storageName, JSON.stringify(value));
        CookieValueStore.setCookie(storageName, JSON.stringify(value));
    }
    static setCookie(name, value, days) {
        // nodejs 没有 document
        if (typeof document == 'undefined')
            return;
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    static getCookie(name) {
        if (typeof document == 'undefined')
            return null;
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    static removeCookie(name) {
        // document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.setCookie(name, '');
    }
}
exports.CookieValueStore = CookieValueStore;
//# sourceMappingURL=value-store.js.map

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map