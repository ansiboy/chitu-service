export declare type ValueChangedCallback<T> = (args: T, sender: any) => void;
/**
 * 实现数据的存储，以及数据修改的通知
 */
export declare class ValueStore<T> {
    private items;
    private _value;
    constructor(value?: T);
    add(func: ValueChangedCallback<T | null>, sender?: any): ValueChangedCallback<T>;
    remove(func: ValueChangedCallback<T>): void;
    fire(value: T | null): void;
    value: T | null;
}
