"use strict";
function printStringOrArray(input) {
    if (typeof input === 'string') {
        console.log(input);
    }
    else if (Array.isArray(input)) {
        input.forEach(item => console.log(item));
    }
}
printStringOrArray("há há há há");
printStringOrArray(["Apple", "Banana", "Orange"]);
printStringOrArray(10); // bị lỗi vì 10 ko phải string or string[]
