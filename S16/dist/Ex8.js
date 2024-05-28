"use strict";
let object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    }
};
let object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9,
        },
    },
    g: 10,
};
const mergeObject = (objA, objB) => {
    return Object.assign(objA, objB);
};
console.log(mergeObject(object1, object2));
