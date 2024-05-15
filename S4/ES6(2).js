/* 
      1. default parameter - tham số mặc định
      2. includes - kiểm tra tồn tại
      3. startsWith - kiểm tra chuổi bắt đầu bằng
      4. endsWith - chuỗi kết thúc bằng
      5. class - OOP
      6. modules - imoport/export

*/

// // 1.
// const sum = (a = 100, b = 0) => {
//     console.log("a = ", a)
//     console.log("b = ", b)
// }
// sum(undefined, 10)

// // 2. ắp dụng cho mảng, có thể áp dụng cho chuỗi vì chuỗi là mảng các kí tự
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let checkExitNumberSeven = arr.includes(7)
// console.log(checkExitNumberSeven)

// let today = new Date() // Obj - chú ý : từ khóa new dùng để cập nhật 
// let student = {
//     id: 1,
//     name: "haha"
// }

// let arrObj = [today, student]
// console.log(arrObj.includes(today))

// // 3.
// let string = "rikkei academy"
// console.log(string.startsWith("rikk"))

// // 4.
// console.log(string.endsWith("y"))

// // 5. OOP: phương pháp/ mô hình lập trình xoay quanh các đối tượng
// // clas và object
// // các thành phần của 1 đối tượng : thuộc tính và hành vif
// // trước ES6 - POP
// function Student(id, name) {
//     this.id = id
//     this.name = name
// }
// let s1 = new Student(1, 2) //this trỏ tới s1, giá trị địa chỉ s1 lưu trong stack
// // sử dụng từ khóa class
// class Human {
//     constructor(sex) {
//         this.sex = sex
//     }
//     move() {
//         console.log("...moving")
//     }
// }
// class SV extends Human {
//     constructor(id, name, age, sex) {
//         super(sex);// phải gọi đầu tiên của hàm khởi tạo và gọi đến constructor của lớp cha
//         this.id = id
//         this.name = name
//         this.age = age
//     }
//     move() {
//         console.log("...chạy xe máy")
//     }

//     printInfo = () => {
//         console.log("id: " + this.id + " name: " + this.name + " age: " + this.age)
//     }
// }

// let s2 = new SV(1, "trân", 20)
// s2.printInfo()

// // JS là ngôn ngữ đơn giản, nên ưu tiên cách khai báo sau đây:
// let abc = {
//     id: 1,
//     name: "bảo trân"
// }


// // 6. Khái niệm modules
// // Bài toán: nhúng nhiều file js vào 1 trang thì có thể xung đột code vì phạm vi khai báo là global
// // Module hóa các file js sẽ giúp các biến đc khai báo có phạm vi chỉ trong file js đấy

// 7. Promise: xử lí các thao tác bất đồng bộ trong js
// VD: lấy dữ liệu từ máy chủ về tiêu tốn 1 khoảng thời gian 
// Cú pháp như sau:
let myPromise = new Promise((resolve,reject) => {
    //thành công thì gọi resolve
     let data = [1,2,3,4,5]
     resolve(data)
     let message = "đăng kí thất bại"
     reject(message)
})
// Gọi promise 
myPromise.then(
    (data) => {
     console.log(data)
},
    (message) => {
        console.log(message)
        throw new Error("lỗi khi gọi lấy dữ liệu")
    }
)
.catch((err) => {
    console.log(err)
})
