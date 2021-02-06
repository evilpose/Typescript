// 提供了两种定义数组类型的方法。一种是在元素类型后加上 [] 表示这是一个数组；另一种方法是使用泛型表示：Array<T>，其中 T 为数组中元素的类型。

let fruits: string[] = ['Apple', 'Banana', 'Orange']

let otherFruits: Array<string> = ['Apple', 'Banana', 'Orange']

// console.log(fruits, otherFruits);

// 「|」用于表示联合类型，这里表示数组中元素为 string 或 number 类型
let x: Array<string | number | number[]>
x = ['Hello', 'World', 42, [2, 3]]
// console.log(x);

/**
 * 元组与列表十分相似，都用于表示一组数据。它们之间的不同在于，元组的长度是有限的，而且可以分别定义每一位元素的类型。
 * 一个常见的用法是用于保存函数的执行结果。
 */
let myTuple1: [number, string, boolean, any] = [1, 'Poplar', true, 4];
myTuple1.push([2, 4])
// console.log(myTuple1);


// obj = {}表示obj是Object。将其标记为any没有任何意义。为了实现期望的一致性，可以如下定义接口(interface)。
let obj1: {[k: string]:any} = {}
obj1.prop = "value";
obj1.prop2 = 99;
// console.log(obj1);

// 字面量类型允许你约束某个变量可能的值，包括字符串字面量类型，数字字面量类型，布尔值字面量类型。它通常会和类型别名和联合类型一起使用

let lovePeace: true;
lovePeace = true; // OK
// lovePeace = false; // Error

type Effect = 'ease-in' | 'ease-out' | 'eaes-in-out'
function animate(ele:Element, effect: Effect) {
    // ....
}

// animate(document.getElementById('app'), 'ease-in')
// animate(document.getElementById('app'), 'fade-in')  // Error

// 例如：投骰子的结果只能为 1~6 之间的值
function rollDice(): 1|2|3|4|5|6 {
    // ...
    return 1
}

// 在 TypeScript 中，使用 enum 关键字定义。TS 支持两种枚举方式：基于数字的枚举和基于字符串的枚举。
enum Color {
    Red,
    Green,
    Blue
}
console.log(Color.Red, Color.Green, Color.Blue);

enum Color2 {
    Red = 1,
    Green,
    Blue
}
console.log(Color2.Red, Color2.Green, Color2.Blue);
console.log(Color2[2])

// 字符串枚举成员不会自增长，每个成员都必须被初始化。另外，字符串枚举不会为成员生成反向映射。
enum Color3 {
    Red = 'REDs',
    Green = 'Green',
    Blue = 'Blue'
}