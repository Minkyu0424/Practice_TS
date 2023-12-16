interface User3 {
  name: string;
}

const Sam: User3 = { name: "Sam" };

function showName(this: User3, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const ShowUser = showName.bind(Sam);
ShowUser(30, "m");

export{};
