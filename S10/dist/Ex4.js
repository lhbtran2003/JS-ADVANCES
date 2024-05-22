"use strict";
class Vehicle1 {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);
    }
}
const vehicle = new Vehicle1("Car", 2020, "Toyota", 123456);
vehicle.printInfo();
