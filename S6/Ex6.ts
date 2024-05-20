let str: string = "2";
let number: number = 2;

// So sánh bằng toán tử (==)
let isEqual1: boolean = (str == number);
console.log(`So sánh lỏng (==) giữa "${strValue}" và ${numValue}: ${isEqualLoose}`);

// So sánh bằng toán tử (===)
let isEqual2: boolean = (str === number);
console.log(`So sánh chặt (===) giữa "${strValue}" và ${numValue}: ${isEqualStrict}`);
