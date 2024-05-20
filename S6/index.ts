//cú pháp ts: let/const <tên biến> : <kiểu dữ liệu> = <giá trị>
let a: number = 10;
let string: string = "bấy bì";
let b: boolean = true;
let any: any = false;
any = "bảo trân";
let empty: null = null; //có giá trị nhưng là rỗng
let undef: undefined = undefined; //ko xác định giá trị được
const showInfo = (info: string): void => {
    console.log(info)
}

//tính tổng 2 số
const sum = (a:number, b:number) : number => {
    return a+b;
}

let numberOrString: number|string = 12

//khai báo mảng
//cách 1
let arr1: number[] = [1,2,3,4,5]
//cách 2:
let arr2: Array<number> = [1,2,3,4]

//khai báo đối tượng
