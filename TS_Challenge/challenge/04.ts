const testArr = [1, 2, 3, 4, 5];
const testArr2 = [6, 8, 10];
const testArr3 = ['3', 9, '11'];
const testItem = 2;
function last<T>(a: T[]) {
  return a[a.length];
}

function prepend<M>(arr: M[], item: M) {
  arr.unshift(item);
  return arr;
}

function mix<M, N>(arr2: M[], arr3: N[]) {
  return [...arr2, ...arr3];
}

function count<T>(arr: T[]) {
  return arr.length;
}

function findIndex<T>(arr: T[], item: T) {
  if (arr.indexOf(item) !== -1) return arr.indexOf(item);
  else return null;
}

function slice<T, M>(arr:T[], startIndex:number, endIndex?:number){
    if(endIndex){
        return arr.slice(startIndex, endIndex+1);
    }else{
        return arr.slice(startIndex)
    }
}

console.log(count(testArr));

console.log(mix([1, 2], [3, 4]));

console.log(prepend([1, 2, 3], 4));
console.log(findIndex(testArr, testItem));
console.log(slice(testArr,1,2));
console.log(slice(testArr,1));

export {};
// prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 배열을 return해야 합니다.
// mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
// count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
// findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의
// 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
// slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 
// 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
