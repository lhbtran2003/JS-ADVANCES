"use strict";
// so sánh nên ta sẽ xài kiểu boolen ha
const soSanh = (param_1, param_2) => {
    if (typeof param_1 == typeof param_2) {
        console.log("hai kiểu dữ liệu giống nhau");
    }
    else {
        console.log("hai kiểu dữ liệu khác nhao");
    }
};
const a = "là lá la";
const b = 10;
console.log(soSanh(a, b));
