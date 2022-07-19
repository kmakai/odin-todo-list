/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todoitem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoitem.js */ "./src/todoitem.js");



class Project {
  constructor(title) {
    this.title = title;
    this.items = [];
  }

  addItem(title, discription, due, notes) {
    this.items.push(new _todoitem_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, discription, due, notes));
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }
}


/***/ }),

/***/ "./src/todoitem.js":
/*!*************************!*\
  !*** ./src/todoitem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoItem)
/* harmony export */ });
class toDoItem {
  constructor(title, discription, due, notes) {
    this.title = title;
    this.discription = discription;
    this.due = due;
    this.notes = notes;
  }
}


/***/ })

/******/ 	});
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


// filler projects and items for testing
const t = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Tester1');
t.addItem('test11', 'test disc', '11/18/2022', 'test notes');
t.addItem('test12', 'test disc', '11/18/2022', 'test notes');
t.addItem('test13', 'test disc', '11/18/2022', 'test notes');
t.addItem('test14', 'test disc', '11/18/2022', 'test notes');

const e = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Tester2');
e.addItem('test21', 'test disc', '11/18/2022', 'test notes');
e.addItem('test22', 'test disc', '11/18/2022', 'test notes');
e.addItem('test23', 'test disc', '11/18/2022', 'test notes');
e.addItem('test24', 'test disc', '11/18/2022', 'test notes');

const s = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Tester3');
s.addItem('test31', 'test disc', '11/18/2022', 'test notes');
s.addItem('test32', 'test disc', '11/18/2022', 'test notes');
s.addItem('test33', 'test disc', '11/18/2022', 'test notes');
s.addItem('test34', 'test disc', '11/18/2022', 'test notes');

const k = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Tester4');
k.addItem('test41', 'test disc', '11/18/2022', 'test notes');
k.addItem('test42', 'test disc', '11/18/2022', 'test notes');
k.addItem('test43', 'test disc', '11/18/2022', 'test notes');
k.addItem('test44', 'test disc', '11/18/2022', 'test notes');

const projects = [t, e, s, k];
let currentProject;

const projectsContainer = document.querySelector('.projects-container');

const displayProjects = function () {
  const main = document.querySelector('.main');
  projects.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'project';
    div.id = i;
    div.innerHTML = `<h2>${p.title}</h2><span>remove</span>`;

    div.addEventListener('click', () => {
      main.innerHTML = '';
      currentProject = projects[i];
      displayItems(currentProject);
    });

    projectsContainer.append(div);
  });

  const delProjectBtns = document.querySelectorAll('.project span');
  delProjectBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      projects.splice(e.target.parentNode.id, 1);
      projectsContainer.innerHTML = '';
      displayProjects();
    });
  });
};

const displayItems = function (p) {
  const main = document.querySelector('.main');
  const newItemBtn = document.createElement('button');
  newItemBtn.className = 'newItemBtn';
  newItemBtn.textContent = 'Add new item';
  main.append(newItemBtn);

  const itemForm = document.querySelector('.new-item-form');

  newItemBtn.addEventListener('click', () => {
    itemForm.style.opacity = 1;
  });

  p.items.forEach((item, i) => {
    const divItem = document.createElement('div');
    divItem.className = 'item';
    divItem.innerHTML = `<input type="checkbox" id="mark"/><h3 id="title">${item.title}</h3>
  <p id="disc">${item.discription}</p>
  <p id="due-date">${item.due}</p>
  <button class="item-del" id="${i}">delete</button>`;

    main.append(divItem);
  });

  const delbtns = document.querySelectorAll('.item-del');
  delbtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id;
      p.removeItem(id);
      main.innerHTML = '';
      displayItems(p);
    });
  });
};

const itemForm = document.querySelector('.new-item-form');
const formSubmit = document.querySelector('.item-submit');
const itemTitle = document.querySelector('#item-title');
const itemDisc = document.querySelector('#item-disc');
const itemDueDate = document.querySelector('#item-due-date');
const itemNotes = document.querySelector('#notes');
const main = document.querySelector('.main');

formSubmit.addEventListener('click', (e) => {
  e.stopPropagation();
  currentProject.addItem(
    itemTitle.value,
    itemDisc.value,
    itemDueDate.value,
    itemNotes.value
  );
  itemForm.style.opacity = 0;
  itemTitle.value = itemDisc.value = itemDueDate.value = itemNotes.value = '';
  main.innerHTML = '';
  displayItems(currentProject);
});

const newProjectBtn = document.querySelector('.new-project-button');
const projectInput = document.querySelector('.project-name-container');
const projectName = document.querySelector('.project-name');

newProjectBtn.addEventListener('click', () => {
  projectInput.classList.toggle('hidden');
});

const projectSubmitBtn = document.querySelector('.project-name-submit');
projectSubmitBtn.addEventListener('click', () => {
  projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectName.value));
  projectInput.classList.toggle('hidden');
  projectsContainer.innerHTML = '';
  displayProjects();
});

displayProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDQTtBQUNyQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQztBQUNBLGNBQWMsbURBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtREFBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1EQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsbURBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxXQUFXO0FBQ3ZGLGlCQUFpQixpQkFBaUI7QUFDbEMscUJBQXFCLFNBQVM7QUFDOUIsaUNBQWlDLEVBQUU7O0FBRW5DO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG9CQUFvQixtREFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvaXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b0RvSXRlbSBmcm9tICcuL3RvZG9pdGVtLmpzJztcclxuaW1wb3J0IFRvRG9JdGVtIGZyb20gJy4vdG9kb2l0ZW0uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0odGl0bGUsIGRpc2NyaXB0aW9uLCBkdWUsIG5vdGVzKSB7XHJcbiAgICB0aGlzLml0ZW1zLnB1c2gobmV3IHRvRG9JdGVtKHRpdGxlLCBkaXNjcmlwdGlvbiwgZHVlLCBub3RlcykpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShpbmRleCkge1xyXG4gICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0b0RvSXRlbSB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRpc2NyaXB0aW9uLCBkdWUsIG5vdGVzKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRpc2NyaXB0aW9uID0gZGlzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZSA9IGR1ZTtcclxuICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG4vLyBmaWxsZXIgcHJvamVjdHMgYW5kIGl0ZW1zIGZvciB0ZXN0aW5nXG5jb25zdCB0ID0gbmV3IFByb2plY3QoJ1Rlc3RlcjEnKTtcbnQuYWRkSXRlbSgndGVzdDExJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbnQuYWRkSXRlbSgndGVzdDEyJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbnQuYWRkSXRlbSgndGVzdDEzJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbnQuYWRkSXRlbSgndGVzdDE0JywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcblxuY29uc3QgZSA9IG5ldyBQcm9qZWN0KCdUZXN0ZXIyJyk7XG5lLmFkZEl0ZW0oJ3Rlc3QyMScsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5lLmFkZEl0ZW0oJ3Rlc3QyMicsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5lLmFkZEl0ZW0oJ3Rlc3QyMycsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5lLmFkZEl0ZW0oJ3Rlc3QyNCcsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5cbmNvbnN0IHMgPSBuZXcgUHJvamVjdCgnVGVzdGVyMycpO1xucy5hZGRJdGVtKCd0ZXN0MzEnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xucy5hZGRJdGVtKCd0ZXN0MzInLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xucy5hZGRJdGVtKCd0ZXN0MzMnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xucy5hZGRJdGVtKCd0ZXN0MzQnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuXG5jb25zdCBrID0gbmV3IFByb2plY3QoJ1Rlc3RlcjQnKTtcbmsuYWRkSXRlbSgndGVzdDQxJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbmsuYWRkSXRlbSgndGVzdDQyJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbmsuYWRkSXRlbSgndGVzdDQzJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbmsuYWRkSXRlbSgndGVzdDQ0JywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcblxuY29uc3QgcHJvamVjdHMgPSBbdCwgZSwgcywga107XG5sZXQgY3VycmVudFByb2plY3Q7XG5cbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwLCBpKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgICBkaXYuaWQgPSBpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgPGgyPiR7cC50aXRsZX08L2gyPjxzcGFuPnJlbW92ZTwvc3Bhbj5gO1xuXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgICBkaXNwbGF5SXRlbXMoY3VycmVudFByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kKGRpdik7XG4gIH0pO1xuXG4gIGNvbnN0IGRlbFByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qgc3BhbicpO1xuICBkZWxQcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHByb2plY3RzLnNwbGljZShlLnRhcmdldC5wYXJlbnROb2RlLmlkLCAxKTtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheUl0ZW1zID0gZnVuY3Rpb24gKHApIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3SXRlbUJ0bi5jbGFzc05hbWUgPSAnbmV3SXRlbUJ0bic7XG4gIG5ld0l0ZW1CdG4udGV4dENvbnRlbnQgPSAnQWRkIG5ldyBpdGVtJztcbiAgbWFpbi5hcHBlbmQobmV3SXRlbUJ0bik7XG5cbiAgY29uc3QgaXRlbUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWl0ZW0tZm9ybScpO1xuXG4gIG5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaXRlbUZvcm0uc3R5bGUub3BhY2l0eSA9IDE7XG4gIH0pO1xuXG4gIHAuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGNvbnN0IGRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZJdGVtLmNsYXNzTmFtZSA9ICdpdGVtJztcbiAgICBkaXZJdGVtLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJtYXJrXCIvPjxoMyBpZD1cInRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvaDM+XG4gIDxwIGlkPVwiZGlzY1wiPiR7aXRlbS5kaXNjcmlwdGlvbn08L3A+XG4gIDxwIGlkPVwiZHVlLWRhdGVcIj4ke2l0ZW0uZHVlfTwvcD5cbiAgPGJ1dHRvbiBjbGFzcz1cIml0ZW0tZGVsXCIgaWQ9XCIke2l9XCI+ZGVsZXRlPC9idXR0b24+YDtcblxuICAgIG1haW4uYXBwZW5kKGRpdkl0ZW0pO1xuICB9KTtcblxuICBjb25zdCBkZWxidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tZGVsJyk7XG4gIGRlbGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQ7XG4gICAgICBwLnJlbW92ZUl0ZW0oaWQpO1xuICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRpc3BsYXlJdGVtcyhwKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctaXRlbS1mb3JtJyk7XG5jb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tc3VibWl0Jyk7XG5jb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS10aXRsZScpO1xuY29uc3QgaXRlbURpc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kaXNjJyk7XG5jb25zdCBpdGVtRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWR1ZS1kYXRlJyk7XG5jb25zdCBpdGVtTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG5mb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY3VycmVudFByb2plY3QuYWRkSXRlbShcbiAgICBpdGVtVGl0bGUudmFsdWUsXG4gICAgaXRlbURpc2MudmFsdWUsXG4gICAgaXRlbUR1ZURhdGUudmFsdWUsXG4gICAgaXRlbU5vdGVzLnZhbHVlXG4gICk7XG4gIGl0ZW1Gb3JtLnN0eWxlLm9wYWNpdHkgPSAwO1xuICBpdGVtVGl0bGUudmFsdWUgPSBpdGVtRGlzYy52YWx1ZSA9IGl0ZW1EdWVEYXRlLnZhbHVlID0gaXRlbU5vdGVzLnZhbHVlID0gJyc7XG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gIGRpc3BsYXlJdGVtcyhjdXJyZW50UHJvamVjdCk7XG59KTtcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1idXR0b24nKTtcbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtY29udGFpbmVyJyk7XG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcblxubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmNvbnN0IHByb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lLXN1Ym1pdCcpO1xucHJvamVjdFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSkpO1xuICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBkaXNwbGF5UHJvamVjdHMoKTtcbn0pO1xuXG5kaXNwbGF5UHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==