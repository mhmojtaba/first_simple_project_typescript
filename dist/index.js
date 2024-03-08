"use strict";
let number = 10;
const st = "string";
let any;
const arr = [1, 2, 3];
const arr2 = ["string", "number"];
const arr3 = ["string", "str2", 5, 6, true];
const tup = ["string", 10];
var Statuses;
(function (Statuses) {
    Statuses[Statuses["Ok"] = 200] = "Ok";
    Statuses[Statuses["Bad"] = 400] = "Bad";
    Statuses[Statuses["sent"] = 201] = "sent";
})(Statuses || (Statuses = {}));
const value = 5;
const marketStatus = 'Close';
// functions
function str(id) {
    console.log(id);
}
function add(a, b) {
    return a + b;
}
// declaring a variable as a function
let res;
// initializing a variable with a function
res = str;
// ////////////////
const input = document.querySelector('.inp');
input.value = '20';
