class Car2 {
    readonly name:string="car";
    color:string;
    static wheels=4;
    constructor(color:string, name: string){
      this.color=color;
      this.name=name;
    }
    start() {
      console.log("start");
      console.log(this.name);
      console.log(Car2.wheels);
    }
  }
  class Bmw extends Car2{
    constructor(color:string, name: string){
      super(color, name);
    }
    showName(){
      console.log(this.name);
    }
  }
  const z4=new Bmw("black", "zzzz4");
  console.log(Car2.wheels);

//ts에선 접근제한자 지원 public, private(#), protected
//public : 자식클래스, 클래스 인스턴스 모두 접근 가능
//protected : 자식 클래스 참조가능, 클래스 인스턴스로는 참조 불가능
//private : 해당 클래스 내부에서만 사용가능

//readonly 읽기전용 프로퍼티로 수정이 불가능 함.
//static 정적으로 
