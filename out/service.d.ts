import { Callback1 } from "./callback.js";
export interface ServiceConstructor<T> {
    new (): T;
}
export declare type AjaxOptions = {
    data?: any;
    headers?: {
        [key: string]: string;
    };
    method?: string;
};
export interface IService {
    error: Callback1<Service, Error>;
    headers: AjaxOptions["headers"];
}
declare type LoadNodeFetchModule = () => Promise<any>;
export declare class Service implements IService {
    error: Callback1<Service, Error>;
    headers: {
        [name: string]: string;
    };
    static settings: {
        ajaxTimeout: number;
    };
    static headers: AjaxOptions["headers"];
    constructor(handleError?: (error: Error, sender: Service) => void);
    protected loadNodeFetchModule(): Promise<any>;
    ajax<T>(url: string, options?: AjaxOptions): Promise<T>;
    protected _ajax<T>(url: string, options: RequestInit, loadNodeFetchModule: LoadNodeFetchModule): Promise<T>;
    protected formatData(data: any): any;
    /**
     * 创建服务
     * @param type 服务类型
     */
    createService<T extends Service>(type?: ServiceConstructor<T>): T;
    getByJson<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T>;
    putByJson<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T>;
    postByJson<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T>;
    deleteByJson<T>(url: string, data: any, headers?: AjaxOptions["headers"]): Promise<T>;
    putByFormData<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T>;
    postByFormData<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T>;
    deleteByFormData<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T>;
    private isEncoded;
    get<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T>;
    put<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T>;
    post<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T>;
    delete<T>(url: string, data: any, headers?: AjaxOptions["headers"]): Promise<T>;
}
export declare function formatData(data: any): any;
export {};
