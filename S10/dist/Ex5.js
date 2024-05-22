"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(`Department ID: ${this.id}, Name: ${this.name}`);
    }
}
const department = new Department(1, "IT Department", ["John Doe", "Jane Smith"]);
department.describe();
