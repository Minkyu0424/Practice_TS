"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function union() {
    function getGift(gift) {
        console.log(gift.color);
        if (gift.name === "car") {
            gift.start();
        }
        else {
            gift.call();
        }
    }
    //식별 가능한 union타입
}
exports.default = union;
