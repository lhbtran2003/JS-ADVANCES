"use strict";
// Định nghĩa lớp Circle
class Circle {
    constructor(_radius) {
        this.radius = _radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(_width, _height) {
        this.width = _width;
        this.height = _height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(2);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());
const retangle = new Rectangle(3, 4);
console.log(retangle.calculatePerimeter());
