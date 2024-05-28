"use strict";
class Student {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    getId() {
        return this.id;
    }
    setId(newId) {
        return this.id = newId;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        return this.name = newName;
    }
}
// Tạo 1 mảng Student
let arrStudent = [];
// Tạo lớp Classroom
class Classroom {
}
//Student[] nghĩa là mảng chứa các học sinh có datatype là Student
Classroom.students = []; //đã có vùng nhớ thì phải khởi tạo giá trị
// // constructor là cấp phát động
// constructor(_students:Student[]) {
//     this.students = _students;
// }
// Đề kêu hàm này để thêm học sinh => học sinh là tham số
Classroom.addStudent = (student) => {
    Classroom.students = [...Classroom.students, student];
};
Classroom.showStudent = () => {
    Classroom.students.forEach(student => {
        console.log(student.getName());
    });
};
// Logic là xóa theo id
Classroom.removeStudent = (studentId) => {
    Classroom.students = Classroom.students.filter(e => e.getId() != studentId);
};
// Logic là chỉnh sửa theo đối tượng, ghi đè thông tin
Classroom.editStudent = (student) => {
    Classroom.students = Classroom.students.map(e => {
        if (e.getId() == student.getId()) {
            return student;
        }
        return e;
    });
};
// // Tạo 1 đối tượng Classroom
// // Truyền mảng ngoài vào constructor của Classroom
// let classRoom1: Classroom = new Classroom(arrStudent)
// Tạo 6 học sinh Student
let s1 = new Student(1, "bảo trân");
let s2 = new Student(2, "như ngọc");
let s3 = new Student(3, "bảo trân");
let s4 = new Student(4, "bảo trân");
let s5 = new Student(5, "bảo trân");
let s6 = new Student(6, "bảo trân");
// Tạo 2 lớp học và thêm hsinh trên vào lớp
// Thay vì tạo ra 1 mảng thì truyển thẳng vào lớp
let class1 = new Classroom([]); // mảng này thì là kiểu any đó
let class2 = new Classroom([]);
// Thêm học sinh vào lớp
Classroom.addStudent();
Classroom.addStudent(s2);
Classroom.addStudent(s3);
Classroom.addStudent(s4);
Classroom.addStudent(s5);
Classroom.addStudent(s6);
// Hiển thị danh sách học sinh
Classroom.showStudent();
Classroom.showStudent();
// Xóa học sinh
Classroom.removeStudent(Number(window.prompt("Nhập id muốn sửa")));
// Chỉnh sửa thông tin học sinh
let idEdited = Number(window.prompt("Nhập id muốn sửa"));
let newName = (window.prompt("Nhập tên mới"));
let updateStudent = new Student(idEdited, newName);
