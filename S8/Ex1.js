"use strict";
function parseInput(input) {
    switch (input) {
        case "number":
            return 0; // Trả về một số, ở đây là 0.
        case "boolean":
            return true; // Trả về giá trị boolean, ở đây là true.
        case "string":
            return input; // Trả về chính chuỗi input.
        case "null":
            return null; // Trả về null.
        case "undefined":
            return undefined; // Trả về undefined.
        default:
            throw new Error("Invalid input type"); // Ném ra lỗi nếu input không hợp lệ.
    }
}
// Kiểm tra kết quả của hàm
console.log(parseInput("number")); // Output: 0 (number)
console.log(parseInput("boolean")); // Output: true (boolean)
console.log(parseInput("string")); // Output: "string" (string)
console.log(parseInput("null")); // Output: null
console.log(parseInput("undefined")); // Output: undefined
