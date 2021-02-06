var newPhone = {
    model: 'iphone12',
    price: 8599
};
// newPhone.color =  'blue'  // error
console.log(newPhone);
var newPhoneA = {
    model: 'iphone12',
    price: 8599 // ok
};
var newPhoneB = {
    model: 'iphone12',
    price: 8599,
    producer: 'Apple'
};
console.log(newPhoneA, newPhoneB);
