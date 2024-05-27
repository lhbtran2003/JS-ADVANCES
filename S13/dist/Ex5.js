"use strict";
// Định nghĩa lớp Vehicle
class Vehicle {
    constructor(_speed) {
        this.speed = _speed;
    }
    speedUp() {
        return this.speed += 1;
    }
    slowDown() {
        return this.speed -= 1;
    }
    stop() {
        return this.speed = 0;
    }
}
const vehicle = new Vehicle(2);
console.log(vehicle.speedUp());
