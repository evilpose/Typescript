(function(){

  class Animal{
    name:string;
    constructor(name:string){
      this.name = name
    }
    sayHello(){
      console.log('动物在叫~')
    }
  }

  class Dog extends Animal{

    age:number;

    constructor(name:string, age:number){
      // 如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
      // 如果不调用，就是把父类的构造函数覆盖了就报错了
      super(name);  // 调用父类的构造函数
      this.age = age;
    }

    sayHello() {
      // 在类的方法中 super 就表示当前类的父类
      super.sayHello();
    }

  }

  const dog = new Dog('旺财', 12);
  console.log(dog);
  dog.sayHello()

})()