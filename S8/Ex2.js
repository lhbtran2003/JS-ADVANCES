"use strict";
function validatePerson(person) {
    return (typeof person.name === "string" &&
        typeof person.age === "number" &&
        typeof person.address === "object" &&
        person.address !== null);
}
const person1 = {
    name: "trân",
    age: 19,
    address: {
        city: "HCM",
        country: "VN"
    }
};
const person2 = {
    name: "há há",
    age: true, //age đc đnghia là number, khác data type là lỗi
    address: {
        city: "HN",
        country: "VN"
    }
};
console.log(validatePerson(person1)); //  true
console.log(validatePerson(person2)); //  false
