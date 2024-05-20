let firstName: string = "bảo";
let lastName: string = "trân";
let fullName: string;

//hàm kiểm tra viết hoa chữ cái đầu
function vietHoaChuCaiDau(str: string): string {
    if(str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase;
}

vietHoaChuCaiDau(firstName);
vietHoaChuCaiDau(lastName);

//ghép 2 chuỗi
fullName =  firstName + " " + lastName;
console.log(`Fullname is ${fullName}`)
