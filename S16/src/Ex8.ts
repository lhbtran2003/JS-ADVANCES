let object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    }
}

let object2 = {
    a: 5, 
    b: {
        c: 6,
        d: [7,8],
        e: {
            f:9,
        },
    },
    g: 10,
}

const mergeObject = <U extends object, V extends object>(objA: U, objB: V): any => {
     return Object.assign(objA,objB)
}

console.log(mergeObject(object1,object2))
