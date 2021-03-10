(function(){

  /**
   *    以 abstract 开头的为抽象类
   *      抽象类 和 其他类区别不大，只是不能用来创造对象
   *      抽象类就是专门用来被继承的类
   * 
   *      抽象类 中 可以 添加 抽象方法
   */

  abstract class Animal{
    name:string;
    constructor(name:string){
      this.name = name
    }

    // 定义一个抽象方法
    // 抽象方法使用 abstract 开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello():void;
  }

  class Dog extends Animal{

    sayHello() {
      console.log('汪汪汪!');
    }

  }

  const dog = new Dog('旺财');
  // console.log(dog);
  // dog.sayHello()

  // const an = new Animal()  // 报错 无法创建抽象类的实例

})()