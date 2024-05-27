class Student {
    private id: number;
    private name: string;
    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }
    getId() {
        return this.id;
    }
    setId(newId: number) {
        return this.id = newId;
    }
    getName() {
        return this.name;
    }
    setName(newName: string) {
        return this.name = newName;
    }

}

let arrStudent: Student[] = []
abstract class Classroom {
    students: string

}