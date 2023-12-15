interface Add{
    (num1:number, num2:number): number; //반환값
}

const addNum:Add = function(x,y){
    return x+y;
}

add(10,20);

interface IsAdult{
    (age:number):boolean;
}

const ageConfirm:IsAdult = (age) =>{
    return age > 19;
}
ageConfirm(23)