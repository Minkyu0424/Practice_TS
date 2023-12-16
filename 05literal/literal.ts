const userName1 = "Bob";
let userName2: string | number = "Tom";
//최초로 할당된 값의 type으로 지정 됨
userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "Minkyu",
  job: "developer",
};

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}

export {};
