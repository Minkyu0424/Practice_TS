"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log("go...");
    };
    return Bmw;
}());
var Grandeur = /** @class */ (function () {
    function Grandeur() {
        this.color = "silver";
        this.wheels = 4;
        this.door = 4;
    }
    Grandeur.prototype.start = function () {
        console.log("출발");
    };
    Grandeur.prototype.stop = function () {
        console.log("멈춤");
    };
    return Grandeur;
}());
var bCar = new Bmw("green");
console.log(Grandeur);
console.log(bCar);
bCar.start();
