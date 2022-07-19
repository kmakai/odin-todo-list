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
const t = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Tester1");
t.addItem("test11", "test disc", "11/18/2022", "test notes");
t.addItem("test12", "test disc", "11/18/2022", "test notes");
t.addItem("test13", "test disc", "11/18/2022", "test notes");
t.addItem("test14", "test disc", "11/18/2022", "test notes");

const e = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Tester2");
e.addItem("test21", "test disc", "11/18/2022", "test notes");
e.addItem("test22", "test disc", "11/18/2022", "test notes");
e.addItem("test23", "test disc", "11/18/2022", "test notes");
e.addItem("test24", "test disc", "11/18/2022", "test notes");

const s = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Tester3");
s.addItem("test31", "test disc", "11/18/2022", "test notes");
s.addItem("test32", "test disc", "11/18/2022", "test notes");
s.addItem("test33", "test disc", "11/18/2022", "test notes");
s.addItem("test34", "test disc", "11/18/2022", "test notes");

const k = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Tester4");
k.addItem("test41", "test disc", "11/18/2022", "test notes");
k.addItem("test42", "test disc", "11/18/2022", "test notes");
k.addItem("test43", "test disc", "11/18/2022", "test notes");
k.addItem("test44", "test disc", "11/18/2022", "test notes");

const projects = [t, e, s, k];
let currentProject;

const projectsContainer = document.querySelector(".projects-container");

const displayProjects = function () {
  const main = document.querySelector(".main");
  projects.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "project";
    div.id = i;
    div.innerHTML = `<h2>${p.title}</h2><span>remove</span>`;

    div.addEventListener("click", () => {
      main.innerHTML = "";
      currentProject = projects[i];
      displayItems(currentProject);
    });

    projectsContainer.append(div);
  });

  const delProjectBtns = document.querySelectorAll(".project span");
  delProjectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      projects.splice(e.target.parentNode.id, 1);
      projectsContainer.innerHTML = "";
      displayProjects();
    });
  });
};

const displayItems = function (p) {
  const main = document.querySelector(".main");
  const newItemBtn = document.createElement("button");
  newItemBtn.className = "newItemBtn";
  newItemBtn.textContent = "Add new item";
  main.append(newItemBtn);

  p.items.forEach((item, i) => {
    const divItem = document.createElement("div");
    divItem.className = "item";
    divItem.innerHTML = `<input type="checkbox" id="mark"/><h3 id="title">${item.title}</h3>
  <p id="disc">${item.discription}</p>
  <p id="due-date">${item.due}</p>
  <button class="item-del" id="${i}">delete</button>`;

    main.append(divItem);
  });

  const delbtns = document.querySelectorAll(".item-del");
  delbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.id;
      p.removeItem(id);
      main.innerHTML = "";
      displayItems(p);
    });
  });
};

displayProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDQTtBQUNyQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQztBQUNBLGNBQWMsbURBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtREFBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1EQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsbURBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxXQUFXO0FBQ3ZGLGlCQUFpQixpQkFBaUI7QUFDbEMscUJBQXFCLFNBQVM7QUFDOUIsaUNBQWlDLEVBQUU7O0FBRW5DO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9pdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvRG9JdGVtIGZyb20gJy4vdG9kb2l0ZW0uanMnO1xyXG5pbXBvcnQgVG9Eb0l0ZW0gZnJvbSAnLi90b2RvaXRlbS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbSh0aXRsZSwgZGlzY3JpcHRpb24sIGR1ZSwgbm90ZXMpIHtcclxuICAgIHRoaXMuaXRlbXMucHVzaChuZXcgdG9Eb0l0ZW0odGl0bGUsIGRpc2NyaXB0aW9uLCBkdWUsIG5vdGVzKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGluZGV4KSB7XHJcbiAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvRG9JdGVtIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGlzY3JpcHRpb24sIGR1ZSwgbm90ZXMpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlID0gZHVlO1xyXG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuLy8gZmlsbGVyIHByb2plY3RzIGFuZCBpdGVtcyBmb3IgdGVzdGluZ1xuY29uc3QgdCA9IG5ldyBQcm9qZWN0KFwiVGVzdGVyMVwiKTtcbnQuYWRkSXRlbShcInRlc3QxMVwiLCBcInRlc3QgZGlzY1wiLCBcIjExLzE4LzIwMjJcIiwgXCJ0ZXN0IG5vdGVzXCIpO1xudC5hZGRJdGVtKFwidGVzdDEyXCIsIFwidGVzdCBkaXNjXCIsIFwiMTEvMTgvMjAyMlwiLCBcInRlc3Qgbm90ZXNcIik7XG50LmFkZEl0ZW0oXCJ0ZXN0MTNcIiwgXCJ0ZXN0IGRpc2NcIiwgXCIxMS8xOC8yMDIyXCIsIFwidGVzdCBub3Rlc1wiKTtcbnQuYWRkSXRlbShcInRlc3QxNFwiLCBcInRlc3QgZGlzY1wiLCBcIjExLzE4LzIwMjJcIiwgXCJ0ZXN0IG5vdGVzXCIpO1xuXG5jb25zdCBlID0gbmV3IFByb2plY3QoXCJUZXN0ZXIyXCIpO1xuZS5hZGRJdGVtKFwidGVzdDIxXCIsIFwidGVzdCBkaXNjXCIsIFwiMTEvMTgvMjAyMlwiLCBcInRlc3Qgbm90ZXNcIik7XG5lLmFkZEl0ZW0oXCJ0ZXN0MjJcIiwgXCJ0ZXN0IGRpc2NcIiwgXCIxMS8xOC8yMDIyXCIsIFwidGVzdCBub3Rlc1wiKTtcbmUuYWRkSXRlbShcInRlc3QyM1wiLCBcInRlc3QgZGlzY1wiLCBcIjExLzE4LzIwMjJcIiwgXCJ0ZXN0IG5vdGVzXCIpO1xuZS5hZGRJdGVtKFwidGVzdDI0XCIsIFwidGVzdCBkaXNjXCIsIFwiMTEvMTgvMjAyMlwiLCBcInRlc3Qgbm90ZXNcIik7XG5cbmNvbnN0IHMgPSBuZXcgUHJvamVjdChcIlRlc3RlcjNcIik7XG5zLmFkZEl0ZW0oXCJ0ZXN0MzFcIiwgXCJ0ZXN0IGRpc2NcIiwgXCIxMS8xOC8yMDIyXCIsIFwidGVzdCBub3Rlc1wiKTtcbnMuYWRkSXRlbShcInRlc3QzMlwiLCBcInRlc3QgZGlzY1wiLCBcIjExLzE4LzIwMjJcIiwgXCJ0ZXN0IG5vdGVzXCIpO1xucy5hZGRJdGVtKFwidGVzdDMzXCIsIFwidGVzdCBkaXNjXCIsIFwiMTEvMTgvMjAyMlwiLCBcInRlc3Qgbm90ZXNcIik7XG5zLmFkZEl0ZW0oXCJ0ZXN0MzRcIiwgXCJ0ZXN0IGRpc2NcIiwgXCIxMS8xOC8yMDIyXCIsIFwidGVzdCBub3Rlc1wiKTtcblxuY29uc3QgayA9IG5ldyBQcm9qZWN0KFwiVGVzdGVyNFwiKTtcbmsuYWRkSXRlbShcInRlc3Q0MVwiLCBcInRlc3QgZGlzY1wiLCBcIjExLzE4LzIwMjJcIiwgXCJ0ZXN0IG5vdGVzXCIpO1xuay5hZGRJdGVtKFwidGVzdDQyXCIsIFwidGVzdCBkaXNjXCIsIFwiMTEvMTgvMjAyMlwiLCBcInRlc3Qgbm90ZXNcIik7XG5rLmFkZEl0ZW0oXCJ0ZXN0NDNcIiwgXCJ0ZXN0IGRpc2NcIiwgXCIxMS8xOC8yMDIyXCIsIFwidGVzdCBub3Rlc1wiKTtcbmsuYWRkSXRlbShcInRlc3Q0NFwiLCBcInRlc3QgZGlzY1wiLCBcIjExLzE4LzIwMjJcIiwgXCJ0ZXN0IG5vdGVzXCIpO1xuXG5jb25zdCBwcm9qZWN0cyA9IFt0LCBlLCBzLCBrXTtcbmxldCBjdXJyZW50UHJvamVjdDtcblxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwLCBpKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgZGl2LmlkID0gaTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxoMj4ke3AudGl0bGV9PC9oMj48c3Bhbj5yZW1vdmU8L3NwYW4+YDtcblxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICAgIGRpc3BsYXlJdGVtcyhjdXJyZW50UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qgc3BhblwiKTtcbiAgZGVsUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHByb2plY3RzLnNwbGljZShlLnRhcmdldC5wYXJlbnROb2RlLmlkLCAxKTtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkaXNwbGF5SXRlbXMgPSBmdW5jdGlvbiAocCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3SXRlbUJ0bi5jbGFzc05hbWUgPSBcIm5ld0l0ZW1CdG5cIjtcbiAgbmV3SXRlbUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyBpdGVtXCI7XG4gIG1haW4uYXBwZW5kKG5ld0l0ZW1CdG4pO1xuXG4gIHAuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGNvbnN0IGRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkl0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XG4gICAgZGl2SXRlbS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibWFya1wiLz48aDMgaWQ9XCJ0aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxuICA8cCBpZD1cImRpc2NcIj4ke2l0ZW0uZGlzY3JpcHRpb259PC9wPlxuICA8cCBpZD1cImR1ZS1kYXRlXCI+JHtpdGVtLmR1ZX08L3A+XG4gIDxidXR0b24gY2xhc3M9XCJpdGVtLWRlbFwiIGlkPVwiJHtpfVwiPmRlbGV0ZTwvYnV0dG9uPmA7XG5cbiAgICBtYWluLmFwcGVuZChkaXZJdGVtKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1kZWxcIik7XG4gIGRlbGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcbiAgICAgIHAucmVtb3ZlSXRlbShpZCk7XG4gICAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkaXNwbGF5SXRlbXMocCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZGlzcGxheVByb2plY3RzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=