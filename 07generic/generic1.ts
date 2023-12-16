//제네릭 - 어떤 타입을 전달받아서 사용받을 수 있게 만듦
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number | string>(arr1);

const arr2 = ["a", "b", "c"];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize(arr3);

const arr4 = [{}, {}, { name: "Tim" }];
getSize(arr4);
