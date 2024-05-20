"use strict";
let firstName = "bảo";
let lastName = "trân";
let fullName;
//hàm kiểm tra viết hoa chữ cái đầu
function vietHoaChuCaiDau(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase;
}
vietHoaChuCaiDau(firstName);
vietHoaChuCaiDau(lastName);
//ghép 2 chuỗi
fullName = firstName + " " + lastName;
console.log(`Fullname is ${fullName}`);
