let str: string = "banana";
let charArray: string[] = str.split("");
let newStr: string = "";

charArray.forEach((e: string) => {
    if(!newStr.includes(e)) {
      newStr+=e;
    }
});
console.log(newStr)