"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function join(name, age) {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요";
    }
}
const sam = join("Sam", 30);
const jane = join("Jane", "30");
console.log("hello");
