export default function union(params) {
  interface Car {
    name: "car";
    color: string;
    start(): void;
  }

  interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
  }

  function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    if (gift.name === "car") {
      gift.start();
    } else {
      gift.call();
    }
  }
  //식별 가능한 union타입
  
}
