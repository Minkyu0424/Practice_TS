interface User{
    name:string;
    age:number;
}

interface Car{
    name:boolean;
    color:string;
}

interface Book{
    price:number;
}

const user: User ={name:"a", age:10};
const car: Car ={name:true, color:"red"};
const book: Book={price:3000};

function showName<T extends {name: string}>(data:T):string{
    return data.name
}


showName(user);
// showName(car); 오류발생
// showName(book); 오류발생

export{}