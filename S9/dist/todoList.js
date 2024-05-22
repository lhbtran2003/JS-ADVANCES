"use strict";
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
];
const getElement = (id) => {
    return document.getElementById(id);
};
const display = () => {
    let html = todoList.reduce((temp, todo) => temp + `<li class="list-group-item d-flex justify-content-between"><span ${todo.isComplete ? 'class="text-decoration-line-through"' : ''}>${todo.title}</span> ${todo.isComplete ? '<i class="bi bi-x-circle text-danger " onclick = "change(' + todo.id + ')"></i>' : '<i class="bi bi-check-circle text-success" onclick = "change(' + todo.id + ')"></i>'}</li>
   `, "");
    getElement("todoList").innerHTML = html;
};
