"use strict";
const check = (condition) => {
    if (condition) {
        console.log("Xin chào");
    }
    else {
        console.log("bái bai");
    }
};
let isTrue = true;
let greeting = check(isTrue);
console.log(greeting);
let isFalse = false;
let goodbye = check(isFalse);
console.log(goodbye);
