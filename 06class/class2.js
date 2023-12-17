"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//추상클래스 - new를 통해서 생성 불가능. 상속을 통해서만 생성 가능
//이름만 지어주고 구체적인 것은 상속 받는쪽에서 명시
class Car {
    constructor(color) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}
class Bmw extends Car {
    constructor(color) {
        super(color);
    }
    doSomething() {
        alert(3);
    }
}
const z4 = new Bmw("black");
