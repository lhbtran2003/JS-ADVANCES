class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}

const employee = new Employee("Bảo Trân", "TNHH 1 mình t", "123321123");

employee.printInfo();
