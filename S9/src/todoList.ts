type Todo = {
    id: number,
    title: string,
    isCompleted: boolean
}
let todoList: Todo[] = [ //1 mảng chứa các phần tử có kiểu Todo
    { id: 1, title: "đi chơi", isCompleted: true },
    { id: 2, title: "đi học", isCompleted: false },
    { id: 3, title: "đi ngủ", isCompleted: false },
]; 

// Lấy thẻ html bằng id
const getElement = (id:string): HTMLElement=>{
    return document.getElementById(id) as HTMLElement //trong trường hợp trả về null, null ko đc gán kiểu HTMLElement
}

// In thông tin ra màn hình
const printInfo = ():void=>{
    let html = todoList.reduce((temp, todo) =>
        temp + `<li class="list-group-item d-flex justify-content-between"><span ${todo.isComplete ? 'class="text-decoration-line-through"' : ''}>${todo.title}</span> ${todo.isCompleted ? '<i class="bi bi-x-circle text-danger " onclick = "editTodo(' + todo.id + ')"></i>' : '<i class="bi bi-check-circle text-success" onclick = "editTodo(' + todo.id + ',false)"></i>'}</li>
    `, "") //temp là chuỗi
    getElement("todoList").innerHTML = html
}

// Chỉnh sửa trạng thái của todo
const editTodo = (id:number, status:true):void=>{//status được gán giá trị mặc định  
     if(status) {
        // xóa todo
        todoList = todoList.filter(e => id !== e.id)
     }
     else {
        // hoàn thành việc
        let index = todoList.findIndex(e => e.id === id)
        if(index != -1) { //tìm thấy
           todoList[index].isCompleted = true
        } 
     }
}

// Thêm todo mới
const addTodoId = (id:number):number=>{
    let max = 0
    todoList.find(e => {
        if(e.id > max) {
            max = e.id
        }
    })
    return max+1;
}
const addTodo = ():void=>{
    let input = document.querySelector('input') as HTMLInputElement
    let newTodo:Todo = {
        id: addTodo(),
        title: input.value,
        isCompleted: false 
    }
    todoList = [...todoList,newTodo]
    printInfo()
    input.value = ""
}