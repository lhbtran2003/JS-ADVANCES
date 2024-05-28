// Đối với khai báo mảng
let arr1 : number[] = [1,2,3,4,5];

let arr2 : Array<number> = [1,2,3,4,5]; // GENERIC ARRAY

let arr3 : Array<number> = new Array(1,2,3,4,5); // GENERIC ARRAY


// Đối với function in ra tham số truyền vào chưa xác định kiểu dữ liệu

const print1 = (word: any) : void => { // KO CHẶT CHẼ
    console.log(word)
}

const printGeneric = <T>(word: T) : void => { // TẠO RA 1 THAM SỐ CHO DATATYPE CỦA BIÊN
    console.log(word);
}

printGeneric("bảo trân");

// Khởi tạo 1 tuple từ 2 tham số truyền vào
const getTuple = <U,V>(a:U , b:V) : [U,V] => {
    return [a,b];
}

console.log(getTuple("bảo trân",1))

// Các quy tắc cơ bản để đặt tên
// T
// E
// K 
// V 
// N 

// Bài tập: tạo 1 hàm truyền vào 2 đối số. Nếu 2 đối số đều là number thì trả về tổng của 2 đối số
// Nếu cả 2 là chuỗi thì nối chuỗi
// Nếu không thì in ra "Không thể xác định kiểu"

const myEx = <U,V>(param_1:U, param_2:V) : any => {
    if(typeof param_1 === "number" && typeof param_2 === "number"){
        return Number(param_1) + Number(param_2)
    }
    else if(typeof param_1 === "string" && typeof param_2 === "string"){
        return String(param_1) + String(param_2)
    }
    else {
        console.error("Không thể xác định kiểu");
    }
    
}
console.log(myEx<number, number>(1,2));
console.log(myEx("há","há há"));
console.log(myEx("há",11));

//

interface Person {
    width: number;
    height: number;
}

class Student implements Person {
    width: number;
    height: number;
    name: string;

    constructor(_width: number, _height: number, _name: string) {
        this.width = _width;
        this.height = _height;
        this.name =_name;
    }
}

// Tạo 1 hàm hiển thị thông tin của Person
const printInfoPerson = <T extends Person>(human: T) => {
    console.log(human.height, human.width);
}

let st: Person = new Student(40,150,"bảo trân");//ngầm định
// Ép kiểu ngầm định: quan hệ kế thừa - ép kiểu từ con lên cha
// Ép kiểu tường mình: từ cha về con - <type children>
let str : Student = <Student>st //tường minh
printInfoPerson(st)

// const printInfoStudent = <T >