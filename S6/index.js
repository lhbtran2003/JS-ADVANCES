"use strict";
//cú pháp ts: let/const <tên biến> : <kiểu dữ liệu> = <giá trị>
let a = 10;
let string = "bấy bì";
let b = true;
let any = false;
any = "bảo trân";
let empty = null; //có giá trị nhưng là rỗng
let undef = undefined; //ko xác định giá trị được
const showInfo = (info) => {
    console.log(info);
};
//tính tổng 2 số
const sum = (a, b) => {
    return a + b;
};
let numberOrString = 12;
//khai báo mảng
//cách 1
let arr1 = [1, 2, 3, 4, 5];
//cách 2:
let arr2 = [1, 2, 3, 4];
//khai báo đối tượng
