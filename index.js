// 提供了两种定义数组类型的方法。一种是在元素类型后加上 [] 表示这是一个数组；另一种方法是使用泛型表示：Array<T>，其中 T 为数组中元素的类型。
var fruits = ['Apple', 'Banana', 'Orange'];
var otherFruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits, otherFruits);
// 「|」用于表示联合类型，这里表示数组中元素为 string 或 number 类型
var x;
x = ['Hello', 'World', 42, [2, 3]];
// console.log(x);
/**
 * 元组与列表十分相似，都用于表示一组数据。它们之间的不同在于，元组的长度是有限的，而且可以分别定义每一位元素的类型。
 * 一个常见的用法是用于保存函数的执行结果。
 */
var myTuple1 = [1, 'Poplar', true, 4];
myTuple1.push([2, 4]);
// console.log(myTuple1);
// obj = {}表示obj是Object。将其标记为any没有任何意义。为了实现期望的一致性，可以如下定义接口(interface)。
var obj1 = {};
obj1.prop = "value";
obj1.prop2 = 99;
// console.log(obj1);
// 字面量类型允许你约束某个变量可能的值，包括字符串字面量类型，数字字面量类型，布尔值字面量类型。它通常会和类型别名和联合类型一起使用
var lovePeace;
lovePeace = true; // OK
function animate(ele, effect) {
    // ....
}
// animate(document.getElementById('app'), 'ease-in')
// animate(document.getElementById('app'), 'fade-in')  // Error
// 例如：投骰子的结果只能为 1~6 之间的值
function rollDice() {
    // ...
    return 1;
}
// 在 TypeScript 中，使用 enum 关键字定义。TS 支持两种枚举方式：基于数字的枚举和基于字符串的枚举。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red, Color.Green, Color.Blue);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Red, Color2.Green, Color2.Blue);
console.log(Color2[2]);
