"use strict";
// Đối với khai báo mảng
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5]; // GENERIC ARRAY
let arr3 = new Array(1, 2, 3, 4, 5); // GENERIC ARRAY
// Đối với function in ra tham số truyền vào chưa xác định kiểu dữ liệu
const print1 = (word) => {
    console.log(word);
};
const printGeneric = (word) => {
    console.log(word);
};
printGeneric("bảo trân");
// Khởi tạo 1 tuple từ 2 tham số truyền vào
const getTuple = (a, b) => {
    return [a, b];
};
console.log(getTuple("bảo trân", 1));
// Các quy tắc cơ bản để đặt tên
// T
// E
// K 
// V 
// N 
// Bài tập: tạo 1 hàm truyền vào 2 đối số. Nếu 2 đối số đều là number thì trả về tổng của 2 đối số
// Nếu cả 2 là chuỗi thì nối chuỗi
// Nếu không thì in ra "Không thể xác định kiểu"
const myEx = (param_1, param_2) => {
    if (typeof param_1 === "number" && typeof param_2 === "number") {
        return Number(param_1) + Number(param_2);
    }
    else if (typeof param_1 === "string" && typeof param_2 === "string") {
        return String(param_1) + String(param_2);
    }
    else {
        console.error("Không thể xác định kiểu");
    }
};
console.log(myEx(1, 2));
console.log(myEx("há", "há há"));
console.log(myEx("há", 11));
class Student {
    constructor(_width, _height, _name) {
        this.width = _width;
        this.height = _height;
        this.name = _name;
    }
}
// Tạo 1 hàm hiển thị thông tin của Person
const printInfoPerson = (human) => {
    console.log(human.height, human.width);
};
let st = new Student(40, 150, "bảo trân"); //ngầm định
// Ép kiểu ngầm định: quan hệ kế thừa - ép kiểu từ con lên cha
// Ép kiểu tường mình: từ cha về con - <type children>
let str = st; //tường minh
printInfoPerson(st);
// const printInfoStudent = <T >
