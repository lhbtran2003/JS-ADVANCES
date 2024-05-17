let arr = ["friendly", "happy", "sad", "excited"]
let count //tại sao ko khởi tạo luôn count = 5 ở đây ???
let randomWord = ""



// ví dụ lấy từ "sad"
// ban đầu: chuyển đổi thành 3 "*"
// nhấn button guess lần 1
// giảm remaining đi 1, đặt biến count cho phần này, count--
// nếu count == 0, restart 
// restart: alert('you lose') -> đổi từ mới -> khôi phục count = 5

// hàm hiển thị 
let displayWord = (inputText = "") => {
    let text = randomWord.split("").reduce((temp, c, index) => {
        return temp + (c === inputText.charAt(index) ? c : "*");
    }, "");
    document.getElementById("abc").innerText = text;
    document.getElementById("count").innerText = count;
}
// hàm khởi tạo ban đầu
let randomElement = () => {
    let randomIndex = Math.floor(Math.random() * arr.length) // phương pháp này sẽ lấy chỉ số index, ko phải lấy giá trị
    word = arr[randomIndex] // giá trị của từng chữ cái trong chuỗi 
    console.log(word)
    count = 5
    displayWord()
}
randomElement()

// hàm đoán
document.getElementById("btn").onclick = function() {
        count--
        let inputWord = document.getElementById("b").value
        if(word = inputWord) {
            alert("You win")
            randomElement()
        }
        else {
            if(count == 0) { 
                alert("You lose")
                randomElement
            }
           
        }
        displayWord(inputWord)
    }

