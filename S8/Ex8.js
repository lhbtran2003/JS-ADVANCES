"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// Ví dụ sử dụng:
const person = { name: "Trân", age: 19 };
const animal = { name: "Sú", gender: true };
const mergedObject = mergeObjects(person, animal);
console.log(mergedObject);
