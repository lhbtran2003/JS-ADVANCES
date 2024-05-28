const check = <T>(condition: boolean):T => {
   if(condition) {
    console.log("Xin chào");
   }
   else {
    console.log("bái bai");
   }
}

let isTrue:boolean = true;
let greeting: string = check(isTrue);
console.log(greeting);

let isFalse:boolean = false;
let goodbye: string = check(isFalse);
console.log(goodbye)