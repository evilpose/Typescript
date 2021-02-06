var newPhone = {
    model: 'iphone12',
    price: 8599
};
var newPhoneA = {
    model: 'iphone12',
    price: 8599 // ok
};
var newPhoneB = {
    model: 'iphone12',
    price: 8599,
    producer: 'Apple'
};
var CarM3 = {
    mode: '特斯拉3',
    price: 230000
};
CarM3.storage = '234254';
CarM3.storage2 = '34534';
CarM3.storage4 = '334';
console.log(CarM3);
var CarM2 = {
    mode: '特斯拉2',
    price: 230000
};
// CarM2.mode = 'xxxx' //  Error: Cannot assign to 'model' because it is a read-only property.
// 函数
// 命名函数
function add(x, y) {
    return x + y;
}
// 匿名函数
var addB = function (x, y) {
    return x + y;
};
console.log(add(1, 2));
console.log(addB(1, 2));
// console.log(addB('1',2))    // Error
// 可选参数
// 使用 ?标记 可以标识某个参数是可选的。可选参数必须放在必要参数后面。
function increment(x, step) {
    return x + (step || 1);
}
increment(10); // 11
// 参数默认值 ES6 允许我们为参数添加默认值。作为 JS 的超集，TS 自然也是支持参数默认值的。
function incrementB(x, step) {
    if (step === void 0) { step = 1; }
    return x + step;
}
incrementB(10); // => 11
// 剩余参数 ES6 允许我们使用剩余参数将一个不定数量的参数表示为一个数组
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (pre, cur) { return pre + cur; });
}
console.log(sum(1, 2, 3)); // => 6
