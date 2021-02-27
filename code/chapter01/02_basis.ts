// 声明一个变量a，同时指定它的类型为 number
let a: number;

// a 的类型 设置为 number，在以后的使用过程中 a 的值只能为数字
a = 12;

let b:string;
b = 'hello'

// 声明完变量直接进行赋值
// let c:boolean = true;

// 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测，效果同上
let c = true;
c=true;

// JS中函数是不考虑参数的类型和个数的
function sum(e:number, f:number):number{
  return e + f;
}
let res = sum(12, 56);