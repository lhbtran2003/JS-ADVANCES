"use strict";
// các kiểu dữ liệu cơ bản
// array: mảng
// cách 1:
let array = ["trân", "ngọc"];
// cách 2: ko đc thông dụng vì theo hướng đối tượng nhiều hơn
let array2 = [1, 2, 3, 4];
array.push("khánh");
// OBJECT: 
// Khởi tạo
let obj;
// Khai báo
obj = {
    id: "1",
    name: "bảo trân",
    age: 18,
    sex: false,
    getInfo: () => {
        return "id" + obj.id + "name: " + obj.name + "age: " + obj.age + "sex: " + obj.sex ? "nam" : "nữ";
    }
};
// ENUM
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["green"] = 3] = "green"; // nếu ko định nghĩa value cho green, nó sẽ tự cộng 1 so vs value liền trước, => 3
})(color || (color = {}));
console.log(color.green);
// NEVER: function: ko bao giờ xảy ra
// lỗi javascript
function error(message) {
    throw new Error(message);
}
// vòng lặp vô hạn
function infiniteLong() {
    while (true) {
        console.log("há há há");
    }
}
