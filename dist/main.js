/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst t = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Tester\");\nt.addItem(\"test\", \"test disc\", \"11/18/2022\", \"test notes\");\nt.addItem(\"test2\", \"test disc\", \"11/18/2022\", \"test notes\");\nt.addItem(\"test3\", \"test disc\", \"11/18/2022\", \"test notes\");\nt.addItem(\"test4\", \"test disc\", \"11/18/2022\", \"test notes\");\nconsole.log(t);\n\nconst projects = [t, t, t, t];\nconsole.log(projects);\n\nconst pcont = document.querySelector(\".projects-container\");\n\nconst displayProjects = function () {\n  projects.forEach((p, i) => {\n    const div = document.createElement(\"div\");\n    div.className = \"project\";\n    div.id = i;\n    div.innerHTML = `<h2>${p.title}</h2><span>remove</span>`;\n\n    div.addEventListener(\"click\", () => {\n      document.querySelector(\".main\").innerHTML = \"\";\n\n      p.items.forEach((item) => {\n        const divItem = document.createElement(\"div\");\n        divItem.className = \"item\";\n        divItem.innerHTML = `<input type=\"checkbox\" id=\"mark\"/><h3 id=\"title\">${item.title}</h3>\n      <p id=\"disc\">${item.discription}</p>\n      <p id=\"due-date\">${item.due}</p>`;\n\n        document.querySelector(\".main\").append(divItem);\n      });\n    });\n\n    pcont.append(div);\n  });\n};\n\ndisplayProjects();\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todoitem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoitem.js */ \"./src/todoitem.js\");\n\r\n\r\n\r\nclass Project {\r\n  constructor(title) {\r\n    this.title = title;\r\n    this.items = [];\r\n  }\r\n\r\n  addItem(title, discription, due, notes) {\r\n    this.items.push(new _todoitem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, discription, due, notes));\r\n  }\r\n\r\n  removeItem(index) {\r\n    this.items.splice(index, 1);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todoitem.js":
/*!*************************!*\
  !*** ./src/todoitem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDoItem)\n/* harmony export */ });\nclass toDoItem {\r\n  constructor(title, discription, due, notes) {\r\n    this.title = title;\r\n    this.discription = discription;\r\n    this.due = due;\r\n    this.notes = notes;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/todoitem.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;