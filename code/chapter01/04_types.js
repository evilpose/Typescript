"use strict";
exports.__esModule = true;
// object 表示一个js对象，但是对象太多了
var a;
a = {};
a = function () { };
// {} 用来指定对象中可以包括哪些属性
// 语法  { 属性名:属性值, 属性名:属性值 }
// 在属性名后面加上 ？ 表示属性是可选的
var b;
b = { name: '孙悟空' };
// [propName: string]:any 表示可以用任意属性
var c;
c = { name: '猪八戒', age: 1, gender: '18' };
/**
 *  设置函数结构的类型声明：
 *          语法：(形参：类型，形参：类型...) => 返回值
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/**
 *  数组的类型声明：
 *        类型：[]
 *        Array<类型>
 */
// string[] 表示字符串数组
var e;
e = ['a', 'b', 'c'];
// number[] 表示数值数组
var f;
var g;
g = [1, 2, 3, 4, 5];
/**
 *  元组，元组就是固定长度的数组
 *      语法：[类型，类型，类型]
 */
var h;
h = ['12', '234'];
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
