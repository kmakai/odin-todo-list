import {addProject, AddItem, loadProjects, loadTodos, createTodoItem, createProject, projects}from "./todoapp.js"
console.log("hello test");

const itemForm = document.querySelector("#todo-form");
const createItemButton = document.querySelector("#item-button");
const cancelItemButton = document.querySelector("#cancelItem");
const newItemButton = document.querySelector("#new-item-btn");

newItemButton.addEventListener('click', () => {
    document.querySelector('#title').value = "";
    document.querySelector('#discription').value = "";
    document.querySelector('#due').value = "";
    document.querySelector('#notes').value = "";
    itemForm.style.visibility = "visible";
})

cancelItemButton.addEventListener('click', () => {
    AddItem();
    itemForm.style.visibility = "collapse";
})

createItemButton.addEventListener('click', () => {
    AddItem();
    itemForm.style.visibility = "collapse";
})

addProject("Test Project");
loadProjects();
projects[0].todolist.push(createTodoItem("todotest", "test for to do edit", "11/29/21", "notes section"));
projects[0].todolist.push(createTodoItem("todotestsecond", "test for to do edit", "11/29/21", "notes section2"));
loadTodos(projects[0]);