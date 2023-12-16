type Score = "A" | "B" | "C" | "D";

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  [grade: number]: Score;
  //number를 key, string을 value로 하는 여러 개의 property를 가질 수 있음
}

let user: User = {
  name: "민규",
  age: 23,
  birthYear: 2000,
  1: 'A',
  2: 'B',
//3: 'c',
};

user.age = 24;
user.gender = "male";
// user.birthYear=1999;

console.log(user.name);

export{};

