class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    public describe(): void {
        console.log(`Department ID: ${this.id}, Name: ${this.name}`);
    }
}

const department = new Department(1, "IT Department", ["John Doe", "Jane Smith"]);

department.describe();
