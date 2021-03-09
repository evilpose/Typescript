"use strict";
// 使用class关键字来定义一个类
class Person {
    constructor() {
        /**
         *  直接定义的属性是实例属性，需要通过对象的实例去访问
         *  const per = new Person();
         *  per.age
         *
         *  使用 static 开头的属性是静态属性（类属性），可以直接通过类去访问
         */
        // 定义实例属性
        // readonly 开头的 只读属性
        this.name = '孙悟空';
        this.age = 18;
        this.hight = 12;
    }
    // 定义实例方法（相同的加上 static 就成了类方法（静方法））
    sayHello() {
        console.log('hello  你好');
    }
}
// 在属性钱使用 static 关键字可以定义类属性（静态属性）
Person.sex = '男';
const per = new Person();
// 访问实例属性
console.log(per.name);
// 访问类属性
// console.log(Person.age); // 不存在
console.log(Person.sex);
// per.hight = 18; // 报错 只读属性
per.sayHello();
