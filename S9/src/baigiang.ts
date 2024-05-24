
// 21/5/2024: Nội dung bài học
// 1. Allias: kiểu đối tượng
// từ khóa thứ nhất: type
// chỉ đổi tên của object => tạo ra kiểu dlieu mới => ko phải OOP
type User = {
    readonly id: number,
    name: string,
    age: number 
}
//từ khóa thứ 2: INTERFACE   có 4 tính chất của OOP
interface UserInterface { 
    id: number,
    name: string,
    age: number 
}

// từ khóa thứ 3: CLASS
class UserClass {
    id: number // ở đây ko có dấu ","
    name: string
    age: number 
  constructor(id:number,name:string,age:number) {
    this.id = id,
    this.name = name,
    this.age = age
  }
}
let user: User = {id:1,name:"tran",age:19}
user.id = 2; // lỗi liền thấy chưa

// 2. Tuble: phiên bản khác của Array nhưng có kích thước cố định
let arrNotBeChanged: [number,string,boolean]
arrNotBeChanged = [1,"tran",true]
arrNotBeChanged[3] = 10; //bị lỗi liền thấy chưa => cố gắng truy cập theo index nằm ngoài mảng là lỗi cú pháp liền

// Câu hỏi đặt ra: nếu khai báo chỉ để đọc thì ntn??
// Optional readonly
let number = 10 //tự ngầm hiểu là number, khai báo ngầm định: literal
let gender = true // cũng là literal
let num: readonly num[] = 10
// 3. Type Guard
// instance of 
let userClass: UserClass = new UserClass(1,"TRAN",19)


// 4. Casting
// Toán tử As: coi như là
let myFunction = (a:string|number, b:string|number): any => {
     if(typeof a =="number" && typeof b == "number") {
        return a+b
     }
     else {
        return String(a) + String(b)
     }
}

// Sử dụng <>: phổ biến hơn: ép kiểu của OOP
let result = <string> myFunction(1,2)

// Toán tử optional chaining "?."
let username = userFake?.name1 //nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó
// nếu ko trả về undèfined

