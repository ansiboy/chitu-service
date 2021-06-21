import { Callback1 } from "./callback";
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
export declare class Service implements IService {
    error: Callback1<Service, Error>;
    headers: {};
    static settings: {
        ajaxTimeout: number;
    };
    static headers: AjaxOptions["headers"];
    constructor(handleError?: (error: Error, sender: Service) => void);
    ajax<T>(url: string, options?: AjaxOptions): Promise<T | null>;
    /**
     * 创建服务
     * @param type 服务类型
     */
    createService<T extends Service>(type?: ServiceConstructor<T>): T;
    getByJson<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T | null>;
    putByJson<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T | null>;
    postByJson<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T | null>;
    deleteByJson<T>(url: string, data: any, headers?: AjaxOptions["headers"]): Promise<T | null>;
    private isEncoded;
    get<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T | null>;
    put<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T | null>;
    post<T>(url: string, data?: any, headers?: AjaxOptions["headers"]): Promise<T | null>;
    delete<T>(url: string, data: any, headers?: AjaxOptions["headers"]): Promise<T | null>;
}
export declare function formatData(data: any): any;
