// so sánh nên ta sẽ xài kiểu boolen ha
const soSanh = <T ,U>(param_1:T , param_2:U): boolen => {
   if(typeof param_1 == typeof param_2) {
    console.log("hai kiểu dữ liệu giống nhau");
   }
   else {
    console.log("hai kiểu dữ liệu khác nhao");
   }
}

const a:string = "là lá la";
const b:number = 10;
console.log(soSanh(a,b))