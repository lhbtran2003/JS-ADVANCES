// Định nghĩa alias type cho tên người dùng là string
type Username = string;

// Định nghĩa alias type cho tuổi người dùng là number
type Age = number;

// Định nghĩa kiểu User sử dụng các alias type đã tạo
interface User1 {
    username: Username;
    age: Age;
}

// Tạo một đối tượng User với các thuộc tính username và age
const user1: User1 = {
    username: "john_doe",
    age: 30
};

// In ra đối tượng User
console.log(user);
