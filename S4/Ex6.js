function checkEndString(longString, shortString) {
    return longString.endsWith(shortString);
}

console.log(checkEndString("Hello world", "world")); 
console.log(checkEndString("Hello world", "Hello")); 
console.log(checkEndString("JavaScript is fun", "fun")); 
console.log(checkEndString("JavaScript is fun", "Java"));