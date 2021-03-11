"use strict";
(function () {
    // interface 可以重复声明，它的效果是加起来
    const obj = {
        name: 'sss',
        age: 11,
        gender: '男'
    };
    /**
     * 定义类时，可以使类去实现一个接口
     *   实现接口就说使类满足接口的要求
     */
    class Myclass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好');
        }
    }
})();
