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
// console.log(newPhone);

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
// console.log(newPhoneA, newPhoneB) 

// 任意属性
// 某些情况下，我们可能只知道接口中部分属性及它们的类型。或者，我们希望能够在初始化后动态添加对象的属性。这时，我们可以使用下面这种写法。

interface Car {
    mode: string
    price: number
    producer?:string
    [propName: string]: any
}

let CarM3: Car = {
    mode: '特斯拉3',
    price: 230000,
}

CarM3.storage = '234254'
CarM3.storage2 = '34534'
CarM3.storage4 = '334'
console.log(CarM3);

// 上面，我们定义任意属性的签名为 string 类型，值为 any 类型。注意：任意属性的值类型必须包含所有已知属性的值类型。 上述例子中，any 包括 string 和 number 类型。

// 只读属性
// 接口中，我们可以使用 readonly 标记某个属性是只读的。当我们试图修改它时，TS 会提示报错。

interface CarB {
    readonly mode: string
    price: number
}

let CarM2: CarB = {
    mode: '特斯拉2',
    price: 230000
}

// CarM2.mode = 'xxxx' //  Error: Cannot assign to 'model' because it is a read-only property.

// 函数
// 命名函数
function add(x:number, y:number):number {
    return x + y;
}
// 匿名函数
const addB = function(x:number, y:number):number {
    return x + y;
}
console.log(add(1,2))
console.log(addB(1,2))
// console.log(addB('1',2))    // Error

// 可选参数
// 使用 ?标记 可以标识某个参数是可选的。可选参数必须放在必要参数后面。
function increment(x:number, step?:number):number {
    return x + (step || 1)
}
increment(10)   // 11

// 参数默认值 ES6 允许我们为参数添加默认值。作为 JS 的超集，TS 自然也是支持参数默认值的。
function incrementB(x: number, step:number = 1):number {
    return x + step
}
incrementB(10)  // => 11

// 剩余参数 ES6 允许我们使用剩余参数将一个不定数量的参数表示为一个数组
function sum(...args: number[]):number {
    return args.reduce((pre, cur) => pre + cur)
}
console.log(sum(1,2,3))  // => 6