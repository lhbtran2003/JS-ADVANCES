"use strict";
let str = "banana";
let charArray = str.split("");
let newStr = "";
charArray.forEach((e) => {
    if (!newStr.includes(e)) { //INCLUDES ko nhận arrow function
        newStr += e;
    }
});
console.log(newStr);
