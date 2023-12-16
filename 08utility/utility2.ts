//Record<K,T>
interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "F";
}

function isVadlid(user: User) {
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
    gender: user.gender === "M",
  };
  return result;
}

//Pick<T,K> 일부만 가져오기
const admin: Pick<User, "id" | "name"> = {
  id: 0,
  name: "Mike",
};

//Omit<T,K> 프로퍼티 제외하고 가져오기
const adminO: Omit<User, "age" | "gender"> = {
  id: 0,
  name: "Bobby",
};

//Exclude<T1, T2> T1의 type중 T2 겹치는 것을 제외
type T1 = string | number | boolean;
type T2 = Exclude<T1, number>; // string

//NonNullable<Type>
type T3 = string | void | null | undefined;
type T4 = NonNullable<T3>;

export {};
