// các kiểu dữ liệu cơ bản
// array: mảng
// cách 1:
let array : string[] = ["trân","ngọc"]
// cách 2: ko đc thông dụng vì theo hướng đối tượng nhiều hơn
let array2 : Array<number> = [1,2,3,4] 
array.push("khánh")

// OBJECT: 
// Khởi tạo
let obj : {
    id: string,
    name: string,
    age: number,
    sex: boolean,
    getInfo: () => string // trả về là string
}
// Khai báo
obj = {
    id: "1",
    name: "bảo trân",
    age: 18,
    sex: false,
    getInfo: () => {
        return "id" + obj.id + "name: "+obj.name+"age: "+obj.age+"sex: " +obj.sex ? "nam" : "nữ";
    }
}

// ENUM
enum color {
    red=1, blue=2, green // nếu ko định nghĩa value cho green, nó sẽ tự cộng 1 so vs value liền trước, => 3
}

console.log(color.green)

// NEVER: function: ko bao giờ xảy ra

// lỗi javascript
function  error(message: string) : never {
    throw new Error(message);
}

// vòng lặp vô hạn
function infiniteLong(): never {
    while(true) {
        console.log("há há há")
    }
}