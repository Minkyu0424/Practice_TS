"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sam = { name: "Sam" };
function showName(age, gender) {
    console.log(this.name, age, gender);
}
const ShowUser = showName.bind(Sam);
ShowUser(30, "m");
