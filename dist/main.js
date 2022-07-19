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

displayProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDQTtBQUNyQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQztBQUNBLGNBQWMsbURBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtREFBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1EQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsbURBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxXQUFXO0FBQ3ZGLGlCQUFpQixpQkFBaUI7QUFDbEMscUJBQXFCLFNBQVM7QUFDOUIsaUNBQWlDLEVBQUU7O0FBRW5DO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb2l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Eb0l0ZW0gZnJvbSAnLi90b2RvaXRlbS5qcyc7XHJcbmltcG9ydCBUb0RvSXRlbSBmcm9tICcuL3RvZG9pdGVtLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKHRpdGxlLCBkaXNjcmlwdGlvbiwgZHVlLCBub3Rlcykge1xyXG4gICAgdGhpcy5pdGVtcy5wdXNoKG5ldyB0b0RvSXRlbSh0aXRsZSwgZGlzY3JpcHRpb24sIGR1ZSwgbm90ZXMpKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oaW5kZXgpIHtcclxuICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9Eb0l0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkaXNjcmlwdGlvbiwgZHVlLCBub3Rlcykge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kaXNjcmlwdGlvbiA9IGRpc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWUgPSBkdWU7XHJcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuLy8gZmlsbGVyIHByb2plY3RzIGFuZCBpdGVtcyBmb3IgdGVzdGluZ1xuY29uc3QgdCA9IG5ldyBQcm9qZWN0KCdUZXN0ZXIxJyk7XG50LmFkZEl0ZW0oJ3Rlc3QxMScsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG50LmFkZEl0ZW0oJ3Rlc3QxMicsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG50LmFkZEl0ZW0oJ3Rlc3QxMycsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG50LmFkZEl0ZW0oJ3Rlc3QxNCcsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5cbmNvbnN0IGUgPSBuZXcgUHJvamVjdCgnVGVzdGVyMicpO1xuZS5hZGRJdGVtKCd0ZXN0MjEnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuZS5hZGRJdGVtKCd0ZXN0MjInLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuZS5hZGRJdGVtKCd0ZXN0MjMnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuZS5hZGRJdGVtKCd0ZXN0MjQnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuXG5jb25zdCBzID0gbmV3IFByb2plY3QoJ1Rlc3RlcjMnKTtcbnMuYWRkSXRlbSgndGVzdDMxJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbnMuYWRkSXRlbSgndGVzdDMyJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbnMuYWRkSXRlbSgndGVzdDMzJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbnMuYWRkSXRlbSgndGVzdDM0JywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcblxuY29uc3QgayA9IG5ldyBQcm9qZWN0KCdUZXN0ZXI0Jyk7XG5rLmFkZEl0ZW0oJ3Rlc3Q0MScsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5rLmFkZEl0ZW0oJ3Rlc3Q0MicsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5rLmFkZEl0ZW0oJ3Rlc3Q0MycsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5rLmFkZEl0ZW0oJ3Rlc3Q0NCcsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5cbmNvbnN0IHByb2plY3RzID0gW3QsIGUsIHMsIGtdO1xubGV0IGN1cnJlbnRQcm9qZWN0O1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAncHJvamVjdCc7XG4gICAgZGl2LmlkID0gaTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxoMj4ke3AudGl0bGV9PC9oMj48c3Bhbj5yZW1vdmU8L3NwYW4+YDtcblxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ldO1xuICAgICAgZGlzcGxheUl0ZW1zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChkaXYpO1xuICB9KTtcblxuICBjb25zdCBkZWxQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0IHNwYW4nKTtcbiAgZGVsUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwcm9qZWN0cy5zcGxpY2UoZS50YXJnZXQucGFyZW50Tm9kZS5pZCwgMSk7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlJdGVtcyA9IGZ1bmN0aW9uIChwKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld0l0ZW1CdG4uY2xhc3NOYW1lID0gJ25ld0l0ZW1CdG4nO1xuICBuZXdJdGVtQnRuLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgaXRlbSc7XG4gIG1haW4uYXBwZW5kKG5ld0l0ZW1CdG4pO1xuXG4gIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1pdGVtLWZvcm0nKTtcblxuICBuZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGl0ZW1Gb3JtLnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9KTtcblxuICBwLml0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2SXRlbS5jbGFzc05hbWUgPSAnaXRlbSc7XG4gICAgZGl2SXRlbS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibWFya1wiLz48aDMgaWQ9XCJ0aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxuICA8cCBpZD1cImRpc2NcIj4ke2l0ZW0uZGlzY3JpcHRpb259PC9wPlxuICA8cCBpZD1cImR1ZS1kYXRlXCI+JHtpdGVtLmR1ZX08L3A+XG4gIDxidXR0b24gY2xhc3M9XCJpdGVtLWRlbFwiIGlkPVwiJHtpfVwiPmRlbGV0ZTwvYnV0dG9uPmA7XG5cbiAgICBtYWluLmFwcGVuZChkaXZJdGVtKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWRlbCcpO1xuICBkZWxidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgICAgcC5yZW1vdmVJdGVtKGlkKTtcbiAgICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgICBkaXNwbGF5SXRlbXMocCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaXRlbUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWl0ZW0tZm9ybScpO1xuY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXN1Ym1pdCcpO1xuY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tdGl0bGUnKTtcbmNvbnN0IGl0ZW1EaXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZGlzYycpO1xuY29uc3QgaXRlbUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kdWUtZGF0ZScpO1xuY29uc3QgaXRlbU5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGN1cnJlbnRQcm9qZWN0LmFkZEl0ZW0oXG4gICAgaXRlbVRpdGxlLnZhbHVlLFxuICAgIGl0ZW1EaXNjLnZhbHVlLFxuICAgIGl0ZW1EdWVEYXRlLnZhbHVlLFxuICAgIGl0ZW1Ob3Rlcy52YWx1ZVxuICApO1xuICBpdGVtRm9ybS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgaXRlbVRpdGxlLnZhbHVlID0gaXRlbURpc2MudmFsdWUgPSBpdGVtRHVlRGF0ZS52YWx1ZSA9IGl0ZW1Ob3Rlcy52YWx1ZSA9ICcnO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuICBkaXNwbGF5SXRlbXMoY3VycmVudFByb2plY3QpO1xufSk7XG5cbmRpc3BsYXlQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9