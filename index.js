// // Bài 2
// let LopHoc = [
//     {id: 1, number: 25},
//     {id: 1, number: 30},
//     {id: 1, number: 50},
// ]
// let arr = []
// LopHoc.forEach((element) => {
//     if(element.number < 30) {
//         arr.push({id: element.id, number: element.number+10})
//     }
//     else if(element.number > 30) {
//         arr.push({id: element.id, number: element.number-10})
//     }
//     else {
//         arr.push({id: element.id, number: element.number})
//     }
// })
// console.log(arr)

// // Bài 3
// let arr = [1,2,'z',true,-1,-3]
// let newArray = arr.filter((e) => typeof e === 'number' && e > 0)
// console.log(newArray)

// // Bài 5
// let account = [
//     { email: 'abc', password: 'ab c' },
//     { email: 'abc', password: 'abc' },
//     { email: 'abc', password: 'a b c' },
//     { email: 'abc', password: 'a bc' },
// ]
// let a = account.forEach((e, index) => {
//     if (e.password.includes(" ")) {
//         console.log(`tai khoản thứ ${index + 1} có password chưa khoảng trắng!`)
//     }
//     else {
//         console.log(`tai khoản thứ ${index + 1} có password ko chưa khoảng trắng!`)
//     }
// })

// // Bài 6
// let employees = [
//     { id: 1, name: 'Alice', age: 25, department: 'IT' },
//     { id: 2, name: 'Bob', age: 20, department: 'IT' },
//     { id: 3, name: 'Charlie', age: 25, department: 'Marketing' },
//     { id: 4, name: 'David', age: 35, department: 'IT' },
//     { id: 5, name: 'Eve', age: 30, department: 'HR' }
// ];

// let youngEmployees = employees.filter(employee => employee.age < 25);

// console.log(youngEmployees);

// // Bài 7
// let arr = [34,56,75,44,13,79,87,38,99]
// function search(arr, number) {
//    let i = arr.filter((e) => e <= number) // ra 1 mảng gồm các số nhỏ hơn number
//    let max = Math.max(...i)
//    return max

// }

// let a = 100
// console.log(search(arr, a))

// // Bài 8
// function Insert(arr1,arr2,num) {
//     let i = arr1.findIndex((e) => e = num ) //i là vị trí
//     let a = arr1.slice(0,i)
//     let b = arr1.slice(i)
// }

// let main = [1,2,3,7,8]
// let sub = [4,5,6]
// let num = 3
// Insert

// Bài 9
let users = [
    { id: 1, name: 'Alice', hobbies: ['Reading', 'Drawing'] },
    { id: 2, name: 'Bob', hobbies: ['Gaming', 'Cooking'] },
]

let a = []
a.push(users.forEach((e) => {
    e.hobbies
})
)
console.log(a)