// hàm chuyển đổi chuỗi thành số
const toNumber = <A>(value:A):number => {
   if(typeof value !== "number") {
    const number = Number(value);
    // check 1 lần nữa coi nó có phải là number hay ko
    if(isNaN(number)) {
        console.warn("Không thể chuyển đổi thành số");
    }
    return number;
   }
   return value;
}


const sum = <A,B>(param_1:A , param_2:B): number => {
   const a = toNumber(param_1);
   const b = toNumber(param_2);
   return a + b;
}
const subtraction = <A,B>(param_1:A , param_2:B): number => {
   const a = toNumber(param_1);
   const b = toNumber(param_2);
   return Math.abs(a-b);
}
const multiplication = <A,B>(param_1:A , param_2:B): number => {
   const a = toNumber(param_1);
   const b = toNumber(param_2);
   return a * b;
}
const division = <A,B>(param_1:A , param_2:B): number => {
   const a = toNumber(param_1);
   const b = toNumber(param_2);
   if(a==0 ) {
    return b/a;
   }
   else if(b==0) {
    return a/b;
   }
   return a/b;
}

console.log(sum(2,"tran"));
console.log(subtraction(2,3));
console.log(multiplication(2,3));
console.log(division(8,2));
