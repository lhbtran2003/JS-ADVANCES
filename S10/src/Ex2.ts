class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

const students: Student[] = [];

const studentData = [
    { id: 1, age: 20, email: "student1@example.com" },
    { id: 2, age: 22, email: "student2@example.com" },
    { id: 3, age: 19, email: "student3@example.com" }
];

studentData.forEach((data) => {
    students.push(new Student(data.id, data.age, data.email));
});

students.forEach((student) => {
    console.log(`Student ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});
