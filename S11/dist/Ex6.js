"use strict";
//lp cha
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // Phương thuc in ra thong tin hien tai
    getDescription() {
        return `ten: ${this.name}, 
        gia: ${this.price}`;
    }
}
//lop con
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    // ghi de getDescription tu lp cha
    getDescription() {
        const productDescription = super.getDescription();
        return `${productDescription}, brand name: ${this.brand}`;
    }
}
