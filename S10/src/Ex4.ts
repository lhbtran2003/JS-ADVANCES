class Vehicle1 {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;

    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    public printInfo(): void {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);
    }
}

const vehicle = new Vehicle1("Car", 2020, "Toyota", 123456);

vehicle.printInfo();
