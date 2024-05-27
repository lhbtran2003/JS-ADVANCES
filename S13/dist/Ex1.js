"use strict";
class Shape {
    constructor(_name) {
        this.name = _name;
    }
    getName() {
        return this.name;
    }
}
class Retangle extends Shape {
    constructor(_name, _width, _height) {
        super(_name);
        this.width = _width;
        this.height = _height;
    }
    getSize() {
        return this.width * this.height;
    }
}
