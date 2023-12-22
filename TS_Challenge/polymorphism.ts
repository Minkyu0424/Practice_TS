type SuperPrint = {<T,M>(arr: T[], b:M): T}

type SuperPrint2 = <T,M>(arr: T[], b:M) => T

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], 0);
const b = superPrint([true, false, true, true], 'last');
const c = superPrint(["a", "b", "c", "d"], false);
const d = superPrint([1, 2, false, "hi", false], []);
