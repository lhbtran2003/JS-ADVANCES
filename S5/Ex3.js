let todoList = [
    {
        id: 1,
        title: "học javascript",
        isComplete: false
    },
    {
        id: 2,
        title: "học c++",
        isComplete: true
    },
    {
        id: 3,
        title: "học scratch",
        isComplete: false
    },
    {
        id: 4,
        title: "học database",
        isComplete: true
    }
]

// hàm hiển thị
const display = () => {
    let html = todoList.reduce((temp, todo) =>
        temp + `<li class="list-group-item d-flex justify-content-between"><span ${todo.isComplete ? 'class="text-decoration-line-through"' : ''}>${todo.title}</span> ${todo.isComplete ? '<i class="bi bi-x-circle text-danger " onclick = "change(' + todo.id + ')"></i>' : '<i class="bi bi-check-circle text-success" onclick = "change(' + todo.id + ')"></i>'}</li>
    `, "") //temp là chuỗi

    document.getElementById("todoList").innerHTML = html
}
display()

// hàm thêm mới
// thêm 1 id mới
const getNewId = () => {
    let maxId = 0
    todoList.forEach(e => {
        if(e.id > maxId) {
            maxId = e.id
        }

    })
    return maxId + 1
}
const add = () => {
    let newTitle = document.getElementById("inputTodo").value

    let newTodo = {
        id: getNewId(),
        title: newTitle,
        isComplete: false
    }
    todoList = [...todoList,newTodo] //spread operator
    display()
}


// hàm cập nhật trạng thái
const change = (id) => {
    const todo = todoList.find((e) => e.id == id) // nếu tìm thấy -> trả về ddtuong todo đó, nếu ko tìm thấy -> trả về undefined
    if (todo) {
        if (!todo.isComplete) {
            todo.isComplete = true // todo là 1 object, tham chiếu đến phần tử trong mảng todoList
        }
        else {
            todoList = todoList.filter((e) => e.id != id)
            console.log(id)
        }
        display()
    }
}

