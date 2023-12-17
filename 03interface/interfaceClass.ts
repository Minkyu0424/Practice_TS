interface Car {
  color: string;
  wheels: number;
  start(): void;
}
interface Benz extends Car {
  door: number;
  stop(): void;
}
class Bmw implements Car {
  color;
  wheels= 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go...");
  }
}

class Grandeur implements Benz {
  color = "silver";
  wheels= 4;
  door= 4;
  start() {
    console.log("출발");
  }
  stop() {
    console.log("멈춤");
  }
}

const bCar = new Bmw("green");

console.log(Grandeur);
console.log(bCar);

bCar.start();

export {};
