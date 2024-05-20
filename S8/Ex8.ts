type Person = {
    name: string;
    age: number;
};

type Animal = {
    name: string,
    gender: boolean
};

function mergeObjects(obj1: Person, obj2: Animal): Person & Animal {
    return { ...obj1, ...obj2 };
}

// Ví dụ sử dụng:
const person: Person = { name: "Trân", age: 19 };
const animal: Animal = { name: "Sú", gender: true};

const mergedObject = mergeObjects(person, animal);
console.log(mergedObject);
