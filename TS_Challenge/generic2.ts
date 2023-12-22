function superPrint<T,M>(a: T[], b:M) {
  return a[0];
}

const a = superPrint([1, 2, 3, 4], 0);
const b = superPrint([true, false, true, true], 'last');
const c = superPrint(["a", "b", "c", "d"], false);
const d = superPrint([1, 2, false, "hi", false], []);

type Player<E> ={
    name:string
    extraInfo:E
}

type kyuPlayer = Player<{favFood : string}>

const nico : kyuPlayer ={
    name:"nico",
    extraInfo:{
        favFood: "gogi"
    }
}

const lynn : Player<null>={
    name:"lynn",
    extraInfo:null
}

type A = Array<number>
let f:A=[1,2,3,4]
export {};

