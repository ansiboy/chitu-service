import { Errors } from "maishu-toolkit";
export { Errors } from "maishu-toolkit";

class MyErrors extends Errors {
    unexpectedNullValue(name: string) {
        let msg = `variable ${name} is unexpected null value.`
        return new Error(msg)
    }
}

export let errors = new MyErrors();

