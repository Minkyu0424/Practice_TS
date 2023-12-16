//keyof
interface User {
  id: number;
  name: string;
  age?: number;
}

type UserKey = keyof User;

const uk: UserKey = "id";

// Partial<T>
let admin: Partial<User> = {
  id: 1,
  name: "Bob",
};

// Required<T>
let admin2: Required<User> = {
  id: 2,
  name: "Sam",
  age:21, //미 기입시 오류
};

//Readonly<T>
let admin3: Readonly<User> = {
    id: 1,
    name: "Bob",
};
// admin3.id=4; 수정 불가능