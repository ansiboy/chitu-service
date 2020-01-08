import { Errors } from "maishu-toolkit";
export { Errors } from "maishu-toolkit";
declare class MyErrors extends Errors {
    unexpectedNullValue(name: string): Error;
}
export declare let errors: MyErrors;
