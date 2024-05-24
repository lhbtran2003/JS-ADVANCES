"use strict";
//Lop cha
class Employee {
    constructor(_name, _company, _phone) {
        this.name = _name;
        this.company = _company;
        this.phone = _phone;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(newPhone) {
        this.phone = newPhone;
    }
    printInfo() {
        console.log(`Ten nhan vien: ${this.name}
        Ten cong ty: ${this.company}
        So dien thoai: ${this.phone}`);
    }
}
//Lop con
class Manager extends Employee {
    constructor(_name, _company, _phone, _teamSize) {
        super(_name, _company, _phone);
        this.teamSize = _teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`So luong thanh vien trong team: ${this.teamSize}`);
    }
}
const manager = new Manager("Tran", "TNHH 1 minh t", "123-456", 1);
console.log(manager);
