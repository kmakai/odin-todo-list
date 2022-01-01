//classes.

class Project {
    constructor(name) {
        this.name = name,
            this.todolist = []
    }
}

class TodoItem {
    constructor(title, discription, due, notes) {
        this.title = title,
            this.discription = discription,
            this.due = due,
            this.notes = notes
    }
}

//functions.

function createProject(name) {
    return new Project(name);
}

function createTodoItem(title, discription, due, notes) {
    return new TodoItem(title, discription, due, notes);
}

export const projects = [];
function addProject(name) {
    projects.push(createProject(name));
    return projects;
}


function loadTodos(project) {
    document.querySelector('#todomap').textContent = "";
    document.querySelector('#project-title').textContent = project.name;
    project.todolist.forEach(element => {
        const todoCard = document.createElement('div');
        const title = document.createElement('div');
        const discription = document.createElement('div');
        const due = document.createElement('div');
        const notes = document.createElement('div');
        title.textContent = `Title: ${element.title}`;
        discription.textContent = `Discription: ${element.discription}`;
        due.textContent = `Due Date: ${element.due}`;
        notes.textContent = `Notes: ${element.notes}`;
        todoCard.append(title, discription, due, notes);
        const update = document.createElement("button");
        const deleteBtn = document.createElement("button");
        update.textContent = "Update/Edit";
        deleteBtn.textContent = "Delete";
        update.addEventListener('click', () => {
            const title = document.querySelector('#title');
            const discription = document.querySelector('#discription');
            const due = document.querySelector('#due');
            const notes = document.querySelector('#notes');
            const itemForm = document.querySelector("#todo-form");            
            itemForm.style.visibility = "visible";
            title.value = element.title;
            discription.value = element.discription;
            due.value = element.due;
            notes.value = element.notes;
            project.todolist.splice(project.todolist.indexOf(element), 1);
            loadTodos(project);
        })
        deleteBtn.addEventListener('click',()=>{
            project.todolist.splice(project.todolist.indexOf(element), 1);
            loadTodos(project);
        })
        todoCard.append(update);
        todoCard.append(deleteBtn);
        document.querySelector('#todomap').append(todoCard);
    });

}
let CurrentIndexNumber = 0;
function loadProjects() {

    const list = document.querySelector('#project-list');
    list.innerHTML = "";
    for (let index = 0; index < projects.length; index++) {
        const li = document.createElement('li');
        li.textContent = projects[index].name;
        list.append(li);
        li.addEventListener('click', () => {
            loadTodos(projects[index]);
            CurrentIndexNumber = index;
            console.log(CurrentIndexNumber);
        })
    }
}

function AddItem() {
    const title = document.querySelector('#title').value;
    const discription = document.querySelector('#discription').value;
    const due = document.querySelector('#due').value;
    const notes = document.querySelector('#notes').value;

    if ((title && discription && due && notes) != "") {
        projects[CurrentIndexNumber].todolist.push(createTodoItem(title, discription, due, notes));
        loadTodos(projects[CurrentIndexNumber]);
    } else {
        alert("fill in the fields!");
    }
}

export {addProject, AddItem, loadProjects, loadTodos, createTodoItem, createProject};