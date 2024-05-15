//  Tạo ô input nhập vào 1 số nguyên và 1 nút button của text là Add
// khi ấn vào button dd thì thêm số vừa nhập vào 1 mảng
// thực hiên tính toán tổng của các số trong mảng hiện có và hiển thị danh sách các phần tử và tổng đã tính toán ra màn hình
// use: rest parameter, spread, event DOM, reduce()


var arr = []
var sum
document.getElementById("btn").onclick = function(e) { //đây gọi là bắt sự kiện trên thẻ html
    e.preventDefault()
    let a = +document.getElementById("input").value
    arr = [...arr, a] // ES6
    document.getElementById("text").textContent = [...arr]
    sum = arr.reduce((temp,a)=> temp+a,0)
    document.getElementById("text-1").textContent = sum
}


document.getElementById("form").addEventListener('submit',function() {//đây gọi là bắt sự kiện trong DOM

})

