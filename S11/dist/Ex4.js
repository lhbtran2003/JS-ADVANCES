"use strict";
class Vehicle {
    constructor(_name, _speed, _id) {
        this.name = _name;
        this.speed = _speed;
        this.id = _id;
    }
    // phuong thuc giam toc
    slowDown() {
        this.speed -= 5; //this.speed = this.speed - 5 
    }
    // phuong thuc tang toc
    speedUp() {
        this.speed += 5;
    }
    // in ra toc do hien tại
    showSpeed() {
        console.log(`Toc do hien tai la ${this.speed}`);
    }
}
//Lop con
class Bicycle extends Vehicle {
    constructor(_name, _speed, _id, _gear) {
        super(_name, _speed, _id);
        this.gear = _gear;
    }
    getGear() {
        return this.gear;
    }
    setGear(_newGear) {
        this.gear = _newGear;
    }
    // phuong thuc giam toc
    slowDown() {
        super.slowDown();
    }
    speedUp() {
        super.speedUp();
    }
    showSpeed() {
        super.showSpeed();
    }
}
const bicycle = new Bicycle("carbon 50 trieu", 100, 1, 7);
