// Kiểm tra trong mảng it nhất1 phần tử chia hết cho 3
let arr = [1,2,3,4,5,9,7]
let check = arr.some((e) => e % 3 == 0)
console.log(check)

// every(): check tất cả phần tử trong mảng có chia hết cho 3 ko
let check1 = arr.every((e) => e % 3 == 0)
console.log(check1)

let check2 = arr.sort()



