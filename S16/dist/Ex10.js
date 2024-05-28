"use strict";
// hàm chuyển đổi chuỗi thành số
const toNumber = (value) => {
    if (typeof value !== "number") {
        const number = Number(value);
        // check 1 lần nữa coi nó có phải là number hay ko
        if (isNaN(number)) {
            console.warn("Không thể chuyển đổi thành số");
        }
        return number;
    }
    return value;
};
const sum = (param_1, param_2) => {
    const a = toNumber(param_1);
    const b = toNumber(param_2);
    return a + b;
};
const subtraction = (param_1, param_2) => {
    const a = toNumber(param_1);
    const b = toNumber(param_2);
    return Math.abs(a - b);
};
const multiplication = (param_1, param_2) => {
    const a = toNumber(param_1);
    const b = toNumber(param_2);
    return a * b;
};
const division = (param_1, param_2) => {
    const a = toNumber(param_1);
    const b = toNumber(param_2);
    if (a == 0) {
        return b / a;
    }
    else if (b == 0) {
        return a / b;
    }
    return a / b;
};
console.log(sum(2, "tran"));
console.log(subtraction(2, 3));
console.log(multiplication(2, 3));
console.log(division(8, 2));
