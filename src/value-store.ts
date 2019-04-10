export type ValueChangedCallback<T> = (args: T, sender: any) => void;

/**
 * 实现数据的存储，以及数据修改的通知
 */
export class ValueStore<T> {
    private items = new Array<{ func: ValueChangedCallback<T | null>, sender: any }>();
    private _value: T | null;

    constructor(value?: T) {
        this._value = value === undefined ? null : value;
    }
    add(func: ValueChangedCallback<T | null>, sender?: any): ValueChangedCallback<T> {
        this.items.push({ func, sender });
        return func;
    }
    remove(func: ValueChangedCallback<T>) {
        this.items = this.items.filter(o => o.func != func);
    }
    fire(value: T | null) {
        this.items.forEach(o => o.func(value, o.sender));
    }
    get value(): T | null {
        if (this._value === undefined)
            return null

        return this._value;
    }
    set value(value: T | null) {
        this._value = value;
        this.fire(value);
    }
}
