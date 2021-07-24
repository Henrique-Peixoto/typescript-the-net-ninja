"use strict";
// Implicity function type
var greet = function () {
    console.log('Hello, World!');
};
// greet = 'Hello, World!';
// Explicity function type
var hello;
hello = function () {
    console.log('Hello!');
};
// Function using parameters with type
var add;
add = function (a, b) {
    console.log(a + b);
};
add(5, 10);
// Parameter with question mark
var add2 = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add2(5, 10);
add2(5, 10, 25);
// Parameter with default value
var add3 = function (a, b, c) {
    if (c === void 0) { c = 'Hi'; }
    console.log(a + b);
    console.log(c);
};
add3(5, 10);
add3(5, 10, -1);
// Function return
// Returning void
var add4 = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
// Returning a number
var add5 = function (a, b) {
    return a + b;
};
var sumResult = add5(20, 1);
console.log(sumResult);
