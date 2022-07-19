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
const projectInput = document.querySelector(".project-name-container");
newProjectBtn.addEventListener('click', () => {
  projectInput.classList.toggle('hidden');
});

displayProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDQTtBQUNyQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQztBQUNBLGNBQWMsbURBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtREFBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1EQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsbURBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxXQUFXO0FBQ3ZGLGlCQUFpQixpQkFBaUI7QUFDbEMscUJBQXFCLFNBQVM7QUFDOUIsaUNBQWlDLEVBQUU7O0FBRW5DO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9pdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvRG9JdGVtIGZyb20gJy4vdG9kb2l0ZW0uanMnO1xyXG5pbXBvcnQgVG9Eb0l0ZW0gZnJvbSAnLi90b2RvaXRlbS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbSh0aXRsZSwgZGlzY3JpcHRpb24sIGR1ZSwgbm90ZXMpIHtcclxuICAgIHRoaXMuaXRlbXMucHVzaChuZXcgdG9Eb0l0ZW0odGl0bGUsIGRpc2NyaXB0aW9uLCBkdWUsIG5vdGVzKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGluZGV4KSB7XHJcbiAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvRG9JdGVtIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGlzY3JpcHRpb24sIGR1ZSwgbm90ZXMpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlID0gZHVlO1xyXG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbi8vIGZpbGxlciBwcm9qZWN0cyBhbmQgaXRlbXMgZm9yIHRlc3RpbmdcbmNvbnN0IHQgPSBuZXcgUHJvamVjdCgnVGVzdGVyMScpO1xudC5hZGRJdGVtKCd0ZXN0MTEnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xudC5hZGRJdGVtKCd0ZXN0MTInLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xudC5hZGRJdGVtKCd0ZXN0MTMnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xudC5hZGRJdGVtKCd0ZXN0MTQnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuXG5jb25zdCBlID0gbmV3IFByb2plY3QoJ1Rlc3RlcjInKTtcbmUuYWRkSXRlbSgndGVzdDIxJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbmUuYWRkSXRlbSgndGVzdDIyJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbmUuYWRkSXRlbSgndGVzdDIzJywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcbmUuYWRkSXRlbSgndGVzdDI0JywgJ3Rlc3QgZGlzYycsICcxMS8xOC8yMDIyJywgJ3Rlc3Qgbm90ZXMnKTtcblxuY29uc3QgcyA9IG5ldyBQcm9qZWN0KCdUZXN0ZXIzJyk7XG5zLmFkZEl0ZW0oJ3Rlc3QzMScsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5zLmFkZEl0ZW0oJ3Rlc3QzMicsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5zLmFkZEl0ZW0oJ3Rlc3QzMycsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5zLmFkZEl0ZW0oJ3Rlc3QzNCcsICd0ZXN0IGRpc2MnLCAnMTEvMTgvMjAyMicsICd0ZXN0IG5vdGVzJyk7XG5cbmNvbnN0IGsgPSBuZXcgUHJvamVjdCgnVGVzdGVyNCcpO1xuay5hZGRJdGVtKCd0ZXN0NDEnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuay5hZGRJdGVtKCd0ZXN0NDInLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuay5hZGRJdGVtKCd0ZXN0NDMnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuay5hZGRJdGVtKCd0ZXN0NDQnLCAndGVzdCBkaXNjJywgJzExLzE4LzIwMjInLCAndGVzdCBub3RlcycpO1xuXG5jb25zdCBwcm9qZWN0cyA9IFt0LCBlLCBzLCBrXTtcbmxldCBjdXJyZW50UHJvamVjdDtcblxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIHByb2plY3RzLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3Byb2plY3QnO1xuICAgIGRpdi5pZCA9IGk7XG4gICAgZGl2LmlubmVySFRNTCA9IGA8aDI+JHtwLnRpdGxlfTwvaDI+PHNwYW4+cmVtb3ZlPC9zcGFuPmA7XG5cbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICAgIGRpc3BsYXlJdGVtcyhjdXJyZW50UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCBzcGFuJyk7XG4gIGRlbFByb2plY3RCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcHJvamVjdHMuc3BsaWNlKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQsIDEpO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkaXNwbGF5SXRlbXMgPSBmdW5jdGlvbiAocCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdJdGVtQnRuLmNsYXNzTmFtZSA9ICduZXdJdGVtQnRuJztcbiAgbmV3SXRlbUJ0bi50ZXh0Q29udGVudCA9ICdBZGQgbmV3IGl0ZW0nO1xuICBtYWluLmFwcGVuZChuZXdJdGVtQnRuKTtcblxuICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctaXRlbS1mb3JtJyk7XG5cbiAgbmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpdGVtRm9ybS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfSk7XG5cbiAgcC5pdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkl0ZW0uY2xhc3NOYW1lID0gJ2l0ZW0nO1xuICAgIGRpdkl0ZW0uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm1hcmtcIi8+PGgzIGlkPVwidGl0bGVcIj4ke2l0ZW0udGl0bGV9PC9oMz5cbiAgPHAgaWQ9XCJkaXNjXCI+JHtpdGVtLmRpc2NyaXB0aW9ufTwvcD5cbiAgPHAgaWQ9XCJkdWUtZGF0ZVwiPiR7aXRlbS5kdWV9PC9wPlxuICA8YnV0dG9uIGNsYXNzPVwiaXRlbS1kZWxcIiBpZD1cIiR7aX1cIj5kZWxldGU8L2J1dHRvbj5gO1xuXG4gICAgbWFpbi5hcHBlbmQoZGl2SXRlbSk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlbGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1kZWwnKTtcbiAgZGVsYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcbiAgICAgIHAucmVtb3ZlSXRlbShpZCk7XG4gICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgICAgZGlzcGxheUl0ZW1zKHApO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1pdGVtLWZvcm0nKTtcbmNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zdWJtaXQnKTtcbmNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLXRpdGxlJyk7XG5jb25zdCBpdGVtRGlzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWRpc2MnKTtcbmNvbnN0IGl0ZW1EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZHVlLWRhdGUnKTtcbmNvbnN0IGl0ZW1Ob3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbmZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjdXJyZW50UHJvamVjdC5hZGRJdGVtKFxuICAgIGl0ZW1UaXRsZS52YWx1ZSxcbiAgICBpdGVtRGlzYy52YWx1ZSxcbiAgICBpdGVtRHVlRGF0ZS52YWx1ZSxcbiAgICBpdGVtTm90ZXMudmFsdWVcbiAgKTtcbiAgaXRlbUZvcm0uc3R5bGUub3BhY2l0eSA9IDA7XG4gIGl0ZW1UaXRsZS52YWx1ZSA9IGl0ZW1EaXNjLnZhbHVlID0gaXRlbUR1ZURhdGUudmFsdWUgPSBpdGVtTm90ZXMudmFsdWUgPSAnJztcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgZGlzcGxheUl0ZW1zKGN1cnJlbnRQcm9qZWN0KTtcbn0pO1xuXG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWJ1dHRvbicpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWUtY29udGFpbmVyXCIpO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmRpc3BsYXlQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9