"use strict";
const uk = "id";
// Partial<T>
let admin = {
    id: 1,
    name: "Bob",
};
// Required<T>
let admin2 = {
    id: 2,
    name: "Sam",
    age: 21, //미 기입시 오류
};
//Readonly<T>
let admin3 = {
    id: 1,
    name: "Bob",
};
// admin3.id=4; 수정 불가능
