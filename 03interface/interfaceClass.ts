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
  wheels: 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go...");
  }
}
const bCar = new Bmw("green");
console.log(bCar);
bCar.start();

export{};
