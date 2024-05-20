"use strict";
// hàm chuyển đổi string thành number
function toNumber(e) {
    if (typeof e === "number") {
        return e;
    }
    let convert = parseFloat(e);
    return isNaN(convert) ? null : convert;
}
//hàm tính tổng
function phepCong(num1, num2) {
    let number1 = toNumber(num1);
    let number2 = toNumber(num2);
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        console.log("giá trị ko hợp lệ");
    }
    else {
        return number1 + number2;
    }
}
