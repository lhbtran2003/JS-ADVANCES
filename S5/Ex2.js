const questions = [
    {
        question: "Ngày giải phóng miền Nam là ngày nào sau đây:",
        options: ["A. 27/4", "B. 28/4", "C. 29/4", "D. 30/4"],
        answer: "D"
    },
    {
        question: "Ngày Quốc khánh của Việt Nam là ngày nào?",
        options: ["A. 30/4", "B. 1/5", "C. 2/9", "D. 20/11"],
        answer: "C"
    },
    {
        question: "Thành phố nào là thủ đô của Việt Nam?",
        options: ["A. TP. Hồ Chí Minh", "B. Hà Nội", "C. Đà Nẵng", "D. Huế"],
        answer: "B"
    },
    {
        question: "Bác Hồ sinh năm bao nhiêu?",
        options: ["A. 1890", "B. 1892", "C. 1900", "D. 1911"],
        answer: "A"
    },
    {
        question: "Dòng sông nào chảy qua thủ đô Hà Nội?",
        options: ["A. Sông Hương", "B. Sông Tiền", "C. Sông Hồng", "D. Sông Đồng Nai"],
        answer: "C"
    },
    {
        question: "Người anh hùng dân tộc nào được gọi là Vua Quang Trung?",
        options: ["A. Trần Hưng Đạo", "B. Nguyễn Huệ", "C. Lý Thường Kiệt", "D. Lê Lợi"],
        answer: "B"
    },
    {
        question: "Năm 1975, sự kiện nào đánh dấu sự thống nhất đất nước?",
        options: ["A. Chiến dịch Hồ Chí Minh", "B. Chiến dịch Điện Biên Phủ", "C. Chiến dịch Mùa Xuân 1968", "D. Chiến dịch Tây Nguyên"],
        answer: "A"
    },
    {
        question: "Vịnh Hạ Long được UNESCO công nhận là di sản thế giới vào năm nào?",
        options: ["A. 1994", "B. 1999", "C. 2000", "D. 2003"],
        answer: "A"
    },
    {
        question: "Biển Đông của Việt Nam tiếp giáp với nước nào sau đây?",
        options: ["A. Campuchia", "B. Thái Lan", "C. Lào", "D. Trung Quốc"],
        answer: "D"
    },
    {
        question: "Chùa Một Cột nằm ở thành phố nào?",
        options: ["A. Hà Nội", "B. Huế", "C. Đà Nẵng", "D. TP. Hồ Chí Minh"],
        answer: "A"
    },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function displayQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById("question").innerText = q.question;
        const options = document.querySelectorAll('.options label');
        options.forEach((option, index) => {
            option.innerHTML = `<input type="radio" name="answer" value="${q.options[index][0]}"> ${q.options[index]}`;
        });
        document.getElementById("question-number").innerText = currentQuestion + 1;
        timeLeft = 15;
        document.getElementById("time").innerText = timeLeft;
        startTimer();
    } else {
        showResult();
    }
}

function nextQuestion() {
    clearInterval(timer);
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption && selectedOption.value === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    displayQuestion();
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result").innerText = `Kết quả: ${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    displayQuestion();
}

document.addEventListener("DOMContentLoaded", function() {
    displayQuestion();
});
