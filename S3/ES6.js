// TỪ KHÓA LET, VAR
// let: phạm vi truy cập: block scope (dấu {} vd: if, function
// var sẽ local khi khai báo trong function

// khái niệm hoisting: gán giá trị trước khi khai báo

// khi so sánh var và let có 2 vấn đề
// vấn đề 1: phạm vi truy cập
// vấn đề 2: hoisting

// TỪ KHÓA CONST
// là khai báo hằng số - ko cho phép gán giá trị lại khi khai báo
const PI = 3.14
// từ vd trên => khi khai báo phải gán giá trị luôn


// 2. TEMPLATE STRING: cho phép khai báo và chỉnh sửa chuỗi 1 cách linh hoạt
// khác biệt: có dấu $ và khai báo bằng dấu ` `
let stdName = "btran"
let str = `hello bạn ${stdName}`
console.log(str)


// 3. ARROW FUNCTION
// cú pháp: () => {}
// Thành phần most important: 1.params, 2.return
// bài toán: tạo hàm tính tổng 2 số
const sum = (a,b) => {
    return a + b
}
console.log(sum(3,4))
//rút gọn ?

// 4. DESTRUCTORING: phá vỡ cấu trúc áp dụng cho array và object
//array
let arrInterger = [1,2,3,4,5]
let [a,b]=arrInterger //a, b tương ứng lần lượt index 0,1
//object
let student = {id:1, name:"bảo trân", age:18}
let {name,id} = student
console.log(name,id)

// 5. REST PARAMETER
// tính tổng n số chưa biết
const summ = (...param)=>{
    //param là 1 array
    param.reduce((temp,a) => temp+a, 0)
}
//chú ý: kết hợp vs détructoring
let [d,e,f,...param] = arrInterger
console.log(param)


// 6. SPREAD OPERATOR: nhóm lại cấu trúc array và object
let newArray = [...arrInterger]
console.log(newArray)

// thêm hoặc chỉnh sửa thuộc tính của object
// nếu đã tồn tại thì chỉnh sửa, chưa có thì thêm mới
student = {...student, address:"haha"}
console.log(student)


// 7. FOR ...OF: duyệt các phần tử trong mảng
// chỉ áp dụng cho mảng
for(let key of arrInterger) {
    console.log(key) //duyệt theo giá tị của từng phần tử trong mảng, trả về giá trị
}
// muốn duyệt object thì dùng forin
for(const key in student){ //key sẽ là index nếu là array
    console.log(key) //key: tên thuộc tính
    console.log(student[key])//giá trị thuộc tính
}




