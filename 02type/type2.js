"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//tuple
let b;
b = ["age", 23];
b[0].toLowerCase();
b[1].toFixed(1);
//void, never
function sayHello() {
    console.log("hello");
}
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        console.log("Its True!");
    }
}
// enum 값 미지정시 자동으로 0에서 1씩 증가한 값이 매겨짐
var OS;
(function (OS) {
    OS[OS["window"] = 3] = "window";
    OS[OS["Ios"] = 10] = "Ios";
    OS[OS["Android"] = 11] = "Android";
})(OS || (OS = {}));
let myOS;
myOS = OS.Android;
//null, undefined
let nullBox = null;
let udf = undefined;
