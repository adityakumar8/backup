// function in js without parameter and without return type.

function sayHello() {
    console.log("hello ubuntu");
}
sayHello();

// function with parameter.

function sum(num1, num2) {
    let num = num1 + num2;
    console.log(num);
}
sum(2,5);

// function with return type.

function multiply(num1, num2) {
    return num1*num2;
}
let ans = multiply(2,4);
console.log(ans);

// function are first class citizen in js.

let a = function sub(num1,num2) {
    return num1 - num2;
}
console.log(a(10,5));

// IIFE --> Immediately Invoked Function Expression 

(function() {
    console.log("HIIIIIIII");
})
();