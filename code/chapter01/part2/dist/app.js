import { hi } from './m.js';
var a = 12;
console.log('hello');
console.log(hi);
console.log(a);
document.getElementById("box1");
function fn(a, b) {
    return a + b;
}
function fn2() {
    alert(this);
}
var box1 = document.getElementById('box1');
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
    alert('hello');
});
