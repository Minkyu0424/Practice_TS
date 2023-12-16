//추상클래스 - new를 통해서 생성 불가능. 상속을 통해서만 생성 가능
//이름만 지어주고 구체적인 것은 상속 받는쪽에서 명시
abstract class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  abstract doSomething(): void;
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    alert(3);
  }
}

const z4 = new Bmw("black");
export {};
