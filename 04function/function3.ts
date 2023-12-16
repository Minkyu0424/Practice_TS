//오버로드 : 사용 같은 함수더라도 매개변수에 따라 반환값이 다른 경우에 사용
interface User2 {
  name: string;
  age: number;
}
function join(name: string, age: string): string;
function join(name: string, age: number): User2;
function join(name: string, age: number | string): User2 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요";
  }
}
const sam: User2 = join("Sam", 30);
const jane: string = join("Jane", "30");
console.log("hello");

export {};
