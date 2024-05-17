function checkElement(arr, value) {
    return arr.includes(value);
}

console.log(checkElement([1, 2, 3, 4, 5], 3)); 
console.log(checkElement([1, 2, 3, 4, 5], 6)); 
console.log(checkElement(['apple', 'banana', 'cherry'], 'banana')); 
console.log(checkElement(['apple', 'banana', 'cherry'], 'grape')); 