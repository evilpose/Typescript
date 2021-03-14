"use strict";
(function () {
    // 表示一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         *  get方法用来读取属性，set方法用来设置属性
         *    - 它们被称为属性的存取器
         */
        // // 定义方法 用来获取age属性
        // getAge(){
        //   return this._age;
        // }
        // // 定义方法，用来设置age属性
        // setAge(value:number){
        //   if (value >= 0) {
        //     this._age = value;
        //   };
        // }
        // TS中设置getter方法的方式
        get name() {
            console.log('get name()执行了');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
            ;
        }
    }
    const per = new Person('孙悟空', 18);
    console.log(per);
    /**
     *    现在数学是直接在对象中设置的，属性可以任意的被修改
     *        属性可以任意被修改将会导致对象中的属性变得非常不安全
     */
    // console.log(per);
    // console.log(per.getAge());
    // per.setAge(49);
    // per.setAge(-49);
    // console.log(per.getAge());
    console.log(per.name);
    per.name = 'xxxx';
    console.log(per.name);
    per.age = -38;
    console.log(per.age);
    class A {
        // private num:number;
        // protected
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(12);
    // B.test();
    b.test();
    class C {
        // 可以直接将属性定义再构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 12);
    console.log(c);
})();
