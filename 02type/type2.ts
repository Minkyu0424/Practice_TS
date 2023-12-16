//tuple
let b: [string, number];
b = ["age", 23];

b[0].toLowerCase();
b[1].toFixed(1);

//void, never

function sayHello(): void {
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
enum OS {
  window = 3,
  Ios = 10,
  Android,
}

let myOS: OS;
myOS = OS.Android;

//null, undefined
let nullBox:null=null;
let udf:undefined=undefined;

export{};
