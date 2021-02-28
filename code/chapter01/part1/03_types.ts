// 也可以直接使用字面量进行类型声明

let a = 12;
// a = '11'; // 报错

// b 只能赋值为 "male" 或者 "female" （联合类型）
let b: "male" | "female";
b = "male";
b = "female";
b = "hello";  // 报错

let c: boolean | string;
c = true;
c = 'hello';
c = 12; // 报错

// any 表示的是任意类型 一个变量设置类型为 any 相当于该变量关闭了ts的类型检测
// 使用ts中不建议使用any
// let d;   // 同下
let d:any;
d = 10;
d = "12";
d = true;

// unknown 表示未知类型
let e: unknown;
e = 10;
e = 'hello';
e = true;

// d 的类型是any 可以赋值给任意变量 
let f:string;
f = d;

// unknown 实际上就说一个类型安全的any
// unknown 类型的变量，不能直接赋值给其他变量
if(typeof e === 'string'){
  // 判断之后就不会报错了
  f = e
}
e = 'hello';
f = e;  // 不能将类型“unknown”分配给类型“string”

// 类型断言
// 告诉编辑器 e 就是 string 你放心用吧
/**
 * 语法：
 *      变量 as 类型
 *      <类型>变量
 */
f = e as string;
f = <string>e;

// voide 用来表示空，以函数为例，就表示没有返回值的函数
function fn(num): void{
  return null;
}
console.log(fn(2))
console.log(fn(-1))

// never 表示永远不会返回结果
function fn1(): never{
  // 代码报错了就代表代码立即结束了，就没有返回值了，就表示没有返回结果
  throw new Error('报错了！')
}

// 在 Typescript 中，只要文件存在 import 或 export 关键字，都被视为 module
export {};