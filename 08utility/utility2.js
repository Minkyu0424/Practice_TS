"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isVadlid(user) {
    const result = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0,
        gender: user.gender === "M",
    };
    return result;
}
//Pick<T,K> 일부만 가져오기
const admin = {
    id: 0,
    name: "Mike",
};
//Omit<T,K> 프로퍼티 제외하고 가져오기
const adminO = {
    id: 0,
    name: "Bobby",
};
