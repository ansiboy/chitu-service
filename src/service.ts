import { Callbacks, Callback1 } from "./callback.js";
import { errors } from "./errors.js";

export interface ServiceConstructor<T> {
    new(): T
}

export type AjaxOptions = { data?: any, headers?: { [key: string]: string }, method?: string };

export interface IService {
    error: Callback1<Service, Error>
    headers: AjaxOptions["headers"]
}

let methods = {
    get: "get",
    put: "put",
    post: "post",
    delete: "delete"
}

type LoadNodeFetchModule = () => Promise<any>;

export class Service implements IService {

    error = Callbacks<Service, Error>();
    headers: { [name: string]: string } = {};

    static settings = {
        ajaxTimeout: 30,
    }

    static headers: AjaxOptions["headers"] = {};

    constructor(handleError?: (error: Error, sender: Service) => void) {
        if (handleError) {
            this.error.add((sender, err) => {
                handleError(err, this);
            })
        }
    }

    async loadNodeFetchModule() {
        let nodeFetch = (await eval(`import('node-fetch')`)).default;
        return nodeFetch;
    }

    ajax<T>(url: string, options?: AjaxOptions): Promise<T> {
        if (options === undefined)
            options = {}

        let data = options.data;
        let method = options.method || methods.get;
        let headers = Object.assign({}, Service.headers, this.headers, options.headers || {});
        let body: string | URLSearchParams | FormData;

        if (data != null) {
            let is_json = ((headers['content-type'] || '') as string).indexOf('json') >= 0;
            let is_formdata = ((headers['content-type'] || '') as string).indexOf('form-data') >= 0;
            if (is_json) {
                body = JSON.stringify(data);
            }
            else if (is_formdata) {
                delete headers["content-type"];
                if (typeof FormData == "undefined") {
                    let FormData = eval("require")("form-data");
                    body = new FormData() as FormData;
                }
                else {
                    body = new FormData();
                }

                for (let key in data) {
                    body.append(key, data[key])
                }
            }
            else {
                body = new URLSearchParams();
                for (let key in data) {
                    body.append(key, data[key])
                }
            }
        }

        return new Promise<T>((reslove, reject) => {
            let options = method == methods.get ? { headers, method } : { headers, body, method }
            let timeId: number;
            if (options == null) throw errors.unexpectedNullValue('options')
            if (method == methods.get) {
                timeId = setTimeout(() => {
                    console.warn(`timeout url: ${url}`);
                    let err = new Error(); //new AjaxError(options.method);
                    err.name = 'timeout';
                    err.message = `Connect timeout, url: ${url}`;
                    reject(err);
                    this.error.fire(this, err);
                    clearTimeout(timeId);

                }, Service.settings.ajaxTimeout * 1000) as any as number;
            }

            this._ajax<T>(url, options, () => this.loadNodeFetchModule())
                .then(data => {
                    reslove(data);
                    if (timeId)
                        clearTimeout(timeId);
                })
                .catch(err => {
                    if (typeof err == "object") {
                        err.detail = `Execute url '${url}' by method ${options.method} fail.`
                    }

                    this.error.fire(this, err);
                    if ((err as import("./errors").ServiceError).processed !== undefined) {
                        reslove((err as import("./errors").ServiceError).processed)
                    }
                    else {
                        reject(err);
                    }

                    if (timeId)
                        clearTimeout(timeId);
                });

        })
    }

    protected async _ajax<T>(url: string, options: RequestInit, loadNodeFetchModule: LoadNodeFetchModule): Promise<T> {
        // try {
        let response: Response;
        let responsePromise: Promise<Response>;
        if (typeof window === 'undefined') {
            // 使用 global['require'] 而不是 require ，避免 webpack 处理 node-fetch
            let nodeFetch = await loadNodeFetchModule();//(await eval(`import('node-fetch')`)).default;
            responsePromise = nodeFetch(url, options);
        }
        else {
            responsePromise = fetch(url, options)
        }

        return new Promise<T>((resolve, reject) => {
            responsePromise.then(r => {
                response = r;
                let responseText: Promise<string> | string = response.text();
                let p: Promise<string>;
                if (typeof responseText == 'string') {
                    p = new Promise<string>((reslove, reject) => {
                        reslove(responseText);
                    })
                }
                else {
                    p = responseText as Promise<string>;
                }

                return p;
            }).then(text => {
                let textObject;
                let isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;
                if (isJSONContextType) {
                    try {
                        textObject = text ? JSON.parse(text) : {};
                    }
                    catch {
                        let err = errors.parseJSONFail(text);
                        console.error(err);
                        textObject = text;
                    }
                }
                else {
                    textObject = text;
                }

                if (response.status >= 300) {
                    let err: Error & { method?: string | undefined } = new Error();
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
            })

        })

        // }
        // catch (err) {
        //     console.error(err);
        //     throw err;
        // }
    }

    protected formatData(data: any) {
        return formatData(data);
    }


    /**
     * 创建服务
     * @param type 服务类型
     */
    createService<T extends Service>(type?: ServiceConstructor<T>): T {
        type = type || Service as any as ServiceConstructor<T>
        let service = new type();
        service.error.add((sender, error) => {
            this.error.fire(service, error)
        })
        return service;
    }

    getByJson<T>(url: string, data?: any, headers?: AjaxOptions["headers"]) {
        if (data && Object.getOwnPropertyNames(data).length > 0) {
            url = `${url}?${encodeURIComponent(JSON.stringify(data))}`;
        }

        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax<T>(url, { headers, method: methods.get })
    }

    putByJson<T>(url: string, data?: any, headers?: AjaxOptions["headers"]) {
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax<T>(url, { headers, data, method: methods.put });
    }

    postByJson<T>(url: string, data?: any, headers?: AjaxOptions["headers"]) {
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax<T>(url, { headers, data, method: methods.post });
    }

    deleteByJson<T>(url: string, data: any, headers?: AjaxOptions["headers"]) {
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax<T>(url, { headers, data, method: methods.delete });
    }

    putByFormData<T>(url: string, data?: any, headers?: AjaxOptions["headers"]) {
        headers = headers || {};
        headers["content-type"] = "multipart/form-data";
        return this.ajax<T>(url, { headers, data, method: methods.put });
    }

    postByFormData<T>(url: string, data?: any, headers?: AjaxOptions["headers"]) {
        headers = headers || {};
        headers["content-type"] = "multipart/form-data";
        return this.ajax<T>(url, { headers, data, method: methods.post });
    }

    deleteByFormData<T>(url: string, data?: any, headers?: AjaxOptions["headers"]) {
        headers = headers || {};
        headers["content-type"] = "multipart/form-data";
        return this.ajax<T>(url, { headers, data, method: methods.delete });
    }

    private isEncoded(uri: string) {
        try {
            uri = uri || '';
            return uri !== decodeURIComponent(uri);
        }
        catch (e) {
            return false
        }
    }

    get<T>(url: string, data?: any, headers?: AjaxOptions["headers"]) {
        data = data || {};
        let params = "";
        for (let key in data) {
            if (data[key] == null)
                continue

            let value = `${data[key]}`
            if (!this.isEncoded(value)) {
                value = encodeURIComponent(value)
            }
            params = params ? `${params}&${key}=${value}` : `${key}=${value}`;
        }

        if (params) {
            url = `${url}?${params}`;
        }

        return this.ajax<T>(url, { headers, method: methods.get })
    }

    put<T>(url: string, data?: any, headers?: AjaxOptions["headers"]) {
        headers = headers || {};
        headers["content-type"] = "application/x-www-form-urlencoded";
        return this.ajax<T>(url, { headers, data, method: methods.put });
    }

    post<T>(url: string, data?: any, headers?: AjaxOptions["headers"]) {
        headers = headers || {};
        headers["content-type"] = "application/x-www-form-urlencoded";
        return this.ajax<T>(url, { headers, data, method: methods.post, });
    }

    delete<T>(url: string, data: any, headers?: AjaxOptions["headers"]) {
        headers = headers || {};
        headers["content-type"] = "application/x-www-form-urlencoded";
        return this.ajax<T>(url, { headers, data, method: methods.delete });
    }
}

export function formatData(data: any) {

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

