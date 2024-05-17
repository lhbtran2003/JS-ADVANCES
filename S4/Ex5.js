function checkStartString(longString, shortString) {
    return longString.startsWith(shortString);
}

console.log(checkStartString("Hello world", "Hello")); 
console.log(checkStartString("Hello world", "world")); 
console.log(checkStartString("JavaScript is fun", "Java"));
console.log(checkStartString("JavaScript is fun", "Script")); 
