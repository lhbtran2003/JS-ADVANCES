"use strict";
// Lop cha
class Person {
    constructor(_name) {
        this.name = _name;
    }
    // ham de in thong tin
    displayInfo() {
        console.log(`Ten: ${this.name}`);
    }
}
//Lop con
class Student extends Person {
    constructor(_name, _id) {
        super(_name);
        this.id = _id;
    }
    //ghi de
    displayInfo() {
        super.displayInfo();
        console.log(`Id: ${this.id}`);
    }
}
const student = new Student("tran", 2);
console.log(student);
student.displayInfo();
