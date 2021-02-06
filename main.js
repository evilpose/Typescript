// 创建一个 sayHi 函数，具有一个参数 person
// person 必须为字符串
function sayHi(person) {
    return "Hi," + person;
}
sayHi('typescript');
// 注意，尽管编译器会报出错误，但其仍然会生成『有问题』的 JS 文件！
// sayHi(42);
var decimalNumber = 42;
var hexNumber = 0x2A;
var binaryNumber = 42;
var octalNumber = 42;
var positiveLargestNumber = Infinity;
var negativeLargestNumber = -Infinity;
var notANumber = NaN;
// console.log(decimalNumber, hexNumber, binaryNumber, octalNumber, positiveLargestNumber, negativeLargestNumber, notANumber);
var theAnswer = 42;
var sentence = "The Answer to the Ultimate Question of Life, The Universe, and Everything is " + theAnswer + ".";
// console.log(sentence);
var num = -10;
var isPositive = num > 0;
// console.log(isPositive);
// undefined 和 null 都被用来表示空值。作为两个原始数据类型，不可赋值成除 undefined 和 null 的类型的值
// undefined 和 null 是所有其他类型的子类型。也就是说，如果 undefined 和 null 赋值给任何其他类型的变量。
var u = undefined;
var n = null;
var Other = 123;
Other = null;
// console.log(u, n, Other);
// undefined 表示变量已声明但未初始化，null 则在逻辑上表示一个空对象指针（这也正是 typeof null === 'object' 的原因）。
// 无论什么情况下，都没有必要把一个变量的值显式地设置为 undefined，可是同样的规则对 null 却不适用。换句话说，只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存 null 值。
// void 类型表示没有任何类型，这句话听起来可能有些自相矛盾。不过，让我们来考虑这样一种情况：如果一个函数没有返回值，我们如何表示其类型？这时候 void 类型就派上用场了
function warning() {
    console.log('WARNING');
}
// warning();
// any 类型就像是 void 类型的反面，任何类型都是 any 类型的子类型。换句话说，any 类型的变量可以被赋予任何类型的值。
var anthing = 'Ohh, that is crazy';
anthing = 12;
anthing = '23';
// console.log(typeof anthing)
// 如果变量在声明时，没有声明其类型，也没有初始化（因为类型推断会自动判断类型），那么它会被当做 any 类型。
// 但是 如果  let something  = 'string' 这样 something 就成了 string 类型了
var something;
something = 'autochess';
something = 6;
// console.log(something);
// something.myExist() // 没问题，因为其可能在运行时存在
// something.toFixed() // 没问题，虽然确实存在，但是编译器并不会去检查
// never 用于表示永远不会存在的值的类型。** never 是任何类型的子类型 ** ，但没有类型是 never 的子类型。
function neverStop() {
    while (true) {
        // do somthing  
    }
}
function error(messgae) {
    throw new Error(messgae);
}
function checkNumber(x) {
    if (typeof x === 'number') {
        return true;
    }
    else if (typeof x === 'string') {
        return false;
    }
    return fail('Failure');
}
function fail(message) {
    throw new Error(message);
}
checkNumber(['1', '2', '4']);
