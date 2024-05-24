// Lop cha
class Person {
    name: string;
    constructor(_name: string) {
      this.name = _name;
    }
  
    // ham de in thong tin
    displayInfo(): void {
      console.log(`Ten: ${this.name}`);
    }
  }
//Lop con
class Student extends Person {
    id: number;
      constructor(_name: string, _id: number) {
      super(_name);
      this.id = _id;
    }
    //ghi de
    override displayInfo(): void {
      super.displayInfo();
      console.log(`Id: ${this.id}`);
    }
}
const student:Student = new Student("tran",2);
console.log(student)
student.displayInfo()
  