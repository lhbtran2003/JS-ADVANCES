"use strict";
// Tính trừu tượng - chỉ tập trung vào các khái quát về lớp, phương thức
// Ví dụ: Con người: chiều cao, cân nặng, nói
// Phương thức trừu tượng: là phương thức ko có phần thân
// Tạo 1 lớp kế thừa và triển khai các phương thức trừu tượng 
class Square {
    // contructor
    constructor(_canh) {
        this.chuVi = 0;
        this.dienTich = 0;
        // Phải triển khai toàn bộ các phương thức trừu tượng của Interface
        this.tinhChuVi = () => {
            return this.canh * 4;
        };
        this.tinhDienTich = () => {
            return this.canh * this.canh;
        };
        this.canh = _canh;
    }
}
// Abstract class
class Animals {
    constructor(_species, _sex, _color) {
        this.species = _species;
        this.sex = _sex;
        this.color = _color;
    }
    getInfor() {
        return `Animal [specie: ${this.species} | sex: ${this.sex} | color: ${this.color}]`;
    }
}
class Dog extends Animals {
    constructor(_species, _sex, _color) {
        super(_species, _sex, _color);
        // triển khai toàn bộ phương thức trừu tượng
        this.makeSound = () => {
            return "gâu gâu";
        };
    }
}
let dogOne = new Dog("");
