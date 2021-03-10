class Dog{
  name:string;
  age:number;

  // 构造函数会在对象创建时候调用
  constructor(name:string, age:number){
    // 在实例的方法中this表示当前的实例
    // 在构造函数中当前对象就是当前新建的那个对象
    // 可以通过this像新建的对象中添加属性
    this.name = name;
    this.age = age
  }

  bark(){
    // alert('汪汪汪！');
    // 在方法中可以通过this表示当前调用方法的对象
    console.log(this.name);
  };

}

const dog = new Dog('旺财', 18);
const dog2 = new Dog('小白', 28);
console.log(dog);
console.log(dog2);

dog.bark()
dog2.bark()