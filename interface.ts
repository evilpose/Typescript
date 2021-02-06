/**
 * 接口
 * 
 * TypeScript 中，我们使用接口来描述对象或类的具体结构。接口的概念在 TypeScript 中是至关重要的。
 * 它就像是你与程序签订的一个契约，定义一个接口就意味着你答应程序：未来的某个值（或者类）一定会符合契约中所规定的模样，如果不符合，TS 就会直接在编译时报错。
 */
interface Phone {
    model: string,
    price: number
}
let newPhone: Phone = {
    model: 'iphone12',
    price: 8599,
}

// newPhone.color =  'blue'  // error
console.log(newPhone);

/**
 * 接口一般首字母大写。在某些编程语言会建议使用 I 作为前缀。
 * 多一些属性和少一些属性都是不允许的。
 * 接口作为类型注解，只在编译时起作用，不会出现在最终输出的 JS 代码中。
 */

// 可选属性
// 对于某个可能存在的属性，我们可以在该属性后加上 ?标记 表示这个属性是可选的。

interface OptionalPhone {
    model: string
    price: number
    producer?: string
}

let newPhoneA: OptionalPhone = {
    model: 'iphone12',
    price: 8599 // ok
}

let newPhoneB: OptionalPhone = {
    model: 'iphone12',
    price: 8599,
    producer: 'Apple'
}

// 接口作为类型注解，只在编译时起作用，不会出现在最终输出的 JS 代码中。
console.log(newPhoneA, newPhoneB)