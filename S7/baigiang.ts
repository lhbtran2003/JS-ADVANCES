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
// ko bao giờ nhận đc giá trị trả về
// lỗi javascript
function  error(message: string) : never {  // nếu ko là never thì tự động trả về kiểu any
    throw new Error(message);
    return // sẽ bị lỗi ở đây
}

// vòng lặp vô hạn
function infiniteLong(): never {// tác dụng của never là ép kiểu data =))))
    while(true) {
        console.log("há há há")
    }
}

// UNKNOW
let unknowVariable: unknown = 1;
unknowVariable = "abc";
console.log(unknowVariable.length) //ko có kiểu data cụ thể, nên length ko xác định đc