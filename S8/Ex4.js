"use strict";
function calculateSquareOrArray(input) {
    if (typeof input === "number") {
        return input ** 2;
    }
    else if (Array.isArray(input)) {
        return input.map((num) => num ** 2);
    }
}
console.log(calculateSquareOrArray(5));
console.log(calculateSquareOrArray([1, 2, 3]));
