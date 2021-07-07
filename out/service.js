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
const callback_1 = require("./callback");
const errors_1 = require("./errors");
let methods = {
    get: "get",
    put: "put",
    post: "post",
    delete: "delete"
};
class Service {
    constructor(handleError) {
        this.error = callback_1.Callbacks();
        this.headers = {};
        if (handleError) {
            this.error.add((sender, err) => {
                handleError(err, this);
            });
        }
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
                body = new FormData();
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
                throw errors_1.errors.unexpectedNullValue('options');
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
            ajax(url, options)
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
    let datePattern = /^\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}/;
    if (typeof data == "string" && datePattern.test(data)) {
        return new Date(data);
    }
    return data;
}
exports.formatData = formatData;
function ajax(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        if (typeof window === 'undefined') {
            // 使用 global['require'] 而不是 require ，避免 webpack 处理 node-fetch
            response = yield eval('require')('node-fetch')(url, options);
        }
        else {
            response = yield fetch(url, options);
        }
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
        let text = yield responseText;
        let textObject;
        let isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;
        if (isJSONContextType) {
            try {
                textObject = text ? JSON.parse(text) : {};
            }
            catch (_a) {
                let err = errors_1.errors.parseJSONFail(text);
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
            throw err;
        }
        textObject = formatData(textObject);
        return textObject;
    });
}
//# sourceMappingURL=service.js.map