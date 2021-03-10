(function(){

  // 定义一个动物类
  class Animal{
    name:string;
    age:number

    constructor(name:string, age:number){
      this.name = name;
      this.age = age;
    }

    sayHello(){
      console.log('动物在叫');
    }
  }

  /**
   * Dog extends Animal
   *    - 此时 Animal 被称为父类
   *    - Dog 被称为子类
   *    - 使用继承后，子类将会拥有父类所有的方法和属性（就相当于直接把Animal中的代码复制粘贴到Dog中）
   *    - 通过继承可以通过多个类中共有的代码写在一个父类中
   *        这样我们子需要写一次即可让所有的子类都同时拥有父类的中的属性和方法
   *        如果希望在子类中添加一些父类中没有的属性或方法直接加就行 
   *    - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖父类的方法
   *        这种子类覆盖掉父类方法的形式，我们称之为方法重写
   */
  
  // 定义类
  // Dog 继承 Animal
  class Dog extends Animal{
    run() {
      console.log(`${this.name}在跑~`)
    }
    sayHello(){
      console.log('汪汪汪！！');
    }
  }

  const dog = new Dog('旺财', 18);
  console.log(dog);
  dog.sayHello();
  dog.run();

  // 定义一个表示猫的类
  // Cat 继承 Animal
  class Cat extends Animal{
    sayHello(){
      console.log('喵喵喵！！');
    }
  }
  
  const cat = new Cat('咪咪', 18);
  console.log(cat);
  cat.sayHello();
  // cat.run();  // cat 中 不存在 run()
 
})()
