import { hi } from './m.js'

let a = 12;
console.log('hello')
console.log(hi);
console.log(a);

document.getElementById("box1");
// 这是一个注释

function fn(a:number, b:number):number {
  return a + b;
}

function fn2(this:Window) {
  alert(this);
}

let box1 = document.getElementById('box1');
box1?.addEventListener('click', function(){
  alert('hello');
})