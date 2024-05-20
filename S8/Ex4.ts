function calculateSquareOrArray(input: number | number[]): number | number[] { // tại sao ở đây bị lỗi
    if (typeof input === "number") {
        return input ** 2;
    } else if (Array.isArray(input)) {
        return input.map((num) => num ** 2);
    }
}

console.log(calculateSquareOrArray(5)); 
console.log(calculateSquareOrArray([1, 2, 3])); 
