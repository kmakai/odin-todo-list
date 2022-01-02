/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "AddItem": () => (/* binding */ AddItem),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "loadTodos": () => (/* binding */ loadTodos),
/* harmony export */   "createTodoItem": () => (/* binding */ createTodoItem),
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
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

const projects = [];
function addProject(name) {
    projects.push(createProject(name));
    return projects;
}


function loadTodos(project) {
    document.querySelector('#todomap').textContent = "";
    document.querySelector('#project-title').textContent = project.name;
    project.todolist.forEach(element => {
        const todoCard = document.createElement('div');
        todoCard.id = "todocard";
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
        deleteBtn.addEventListener('click', () => {
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
    }
}



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoapp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

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
    cancelItemButton.addEventListener('click', () => {
        itemForm.style.visibility = "collapse";

    })
})



createItemButton.addEventListener('click', () => {
    ;(0,_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.AddItem)();
    itemForm.style.visibility = "collapse";

})

cancelItemButton.addEventListener('click', () => {
    ;(0,_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.AddItem)();
    itemForm.style.visibility = "collapse";
});
(0,_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.addProject)("Test Project");
(0,_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();
_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.projects[0].todolist.push((0,_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)("todotest", "test for to do edit", "11/29/21", "notes section"));
_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.projects[0].todolist.push((0,_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)("todotestsecond", "test for to do edit", "11/29/21", "notes section2"));
(0,_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.loadTodos)(_todoapp_js__WEBPACK_IMPORTED_MODULE_0__.projects[0]);
})();

/******/ })()
;