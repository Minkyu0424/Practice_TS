//선택적 매개변수 optional parameter
function sayHello(name?: string) {
  return `Hello, ${name || "world"}`;
}

function sayHello2(name = "world") {
  return `Hello, ${name}`;
}

const result = sayHello();
const result2 = sayHello("Sam");

function addSpread(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

addSpread(1, 2, 3);
addSpread(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

export{};