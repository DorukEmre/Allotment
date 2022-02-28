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

/***/ "./src/app/display-flowers-page.js":
/*!*****************************************!*\
  !*** ./src/app/display-flowers-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayFlowersPage\": () => (/* binding */ displayFlowersPage)\n/* harmony export */ });\nconst displayFlowersPage = () => {\n    console.log('You clicked on \"Flowers\"')\n    \n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    main.classList.add(\"flowersContainer\")\n    content.appendChild(main);\n\n    const imageSection = document.createElement(\"section\");\n    const textSection = document.createElement(\"section\");\n    const image1 = document.createElement(\"img\");\n    const image2 = document.createElement(\"img\");\n    const image3 = document.createElement(\"img\");\n    const sentence = document.createElement(\"p\");\n\n    main.appendChild(imageSection);\n    main.appendChild(textSection);\n\n    image1.src = \"./assets/IMG_20200516_164906.jpg\";\n    image2.src = \"./assets/IMG_20200502_194444.jpg\";\n    image3.src = \"./assets/IMG_20200716_182020.jpg\";\n    sentence.textContent = \"Don't forget to water me :/\"\n    imageSection.appendChild(image1);\n    imageSection.appendChild(image2);\n    imageSection.appendChild(image3);\n    imageSection.appendChild(sentence);\n}\n\n//# sourceURL=webpack://allotment/./src/app/display-flowers-page.js?");

/***/ }),

/***/ "./src/app/display-header.js":
/*!***********************************!*\
  !*** ./src/app/display-header.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHeader\": () => (/* binding */ displayHeader)\n/* harmony export */ });\n/* harmony import */ var _listen_to_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listen-to-tabs */ \"./src/app/listen-to-tabs.js\");\n\n\nconst displayHeader = (toSetToCurrent) => {\n\n    const content = document.querySelector(\"#content\");\n\n    const header = document.createElement(\"header\");\n    const h1 = document.createElement(\"h1\");\n    const ul = document.createElement(\"ul\");\n    const homeLi = document.createElement(\"li\");\n    const flowersLi = document.createElement(\"li\");\n    const veggiesLi = document.createElement(\"li\");\n\n    h1.textContent = \"Hollie's allotment\";\n    homeLi.classList.add(\"home\");\n    homeLi.textContent = \"Home\";\n    flowersLi.classList.add(\"flowers\");\n    flowersLi.textContent = \"Flowers\";\n    veggiesLi.classList.add(\"veggies\");\n    veggiesLi.textContent = \"Veggies\";\n\n    content.appendChild(header)\n    header.appendChild(h1);\n    header.appendChild(ul);\n    ul.appendChild(homeLi);\n    ul.appendChild(flowersLi);\n    ul.appendChild(veggiesLi);\n\n    document.querySelector(toSetToCurrent).classList.add(\"current\");\n\n    (0,_listen_to_tabs__WEBPACK_IMPORTED_MODULE_0__.listenToTabs)();\n}\n\n//# sourceURL=webpack://allotment/./src/app/display-header.js?");

/***/ }),

/***/ "./src/app/display-home-page.js":
/*!**************************************!*\
  !*** ./src/app/display-home-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHomePage\": () => (/* binding */ displayHomePage)\n/* harmony export */ });\nconst displayHomePage = () => {\n    console.log('You clicked on \"Home\"')\n\n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    main.classList.add(\"homeContainer\")\n    content.appendChild(main);\n    \n    const imageSection = document.createElement(\"section\");\n    const textSection = document.createElement(\"section\");\n    const image = document.createElement(\"img\");\n    const quote = document.createElement(\"q\");\n\n    main.appendChild(imageSection);\n    main.appendChild(textSection);\n\n    image.src = \"./assets/IMG_20200423_140626.jpg\";\n    imageSection.appendChild(image);\n\n    quote.textContent = \"In the spring, at the end of the day, you should smell like dirt.\"\n    textSection.appendChild(quote);\n}\n\n//# sourceURL=webpack://allotment/./src/app/display-home-page.js?");

/***/ }),

/***/ "./src/app/display-veggies-page.js":
/*!*****************************************!*\
  !*** ./src/app/display-veggies-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayVeggiesPage\": () => (/* binding */ displayVeggiesPage)\n/* harmony export */ });\nconst displayVeggiesPage = () => {\n    console.log('You clicked on \"Veggies\"')\n\n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    main.classList.add(\"veggiesContainer\")\n    content.appendChild(main);\n\n\n    const imageSection = document.createElement(\"section\");\n    const textSection = document.createElement(\"section\");\n    const image1 = document.createElement(\"img\");\n    const image2 = document.createElement(\"img\");\n    const sentence = document.createElement(\"p\");\n\n    main.appendChild(imageSection);\n    main.appendChild(textSection);\n\n    image1.src = \"./assets/IMG_20200503_161134.jpg\";\n    image2.src = \"./assets/IMG_20200502_152305.jpg\";\n    imageSection.appendChild(image1);\n    imageSection.appendChild(image2);\n\n    sentence.textContent = \"Eat me!\"\n    textSection.appendChild(sentence);\n}\n\n//# sourceURL=webpack://allotment/./src/app/display-veggies-page.js?");

/***/ }),

/***/ "./src/app/listen-to-tabs.js":
/*!***********************************!*\
  !*** ./src/app/listen-to-tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listenToTabs\": () => (/* binding */ listenToTabs)\n/* harmony export */ });\n/* harmony import */ var _utils_remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/remove-all-child-nodes */ \"./src/utils/remove-all-child-nodes.js\");\n/* harmony import */ var _display_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-header */ \"./src/app/display-header.js\");\n/* harmony import */ var _display_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-home-page */ \"./src/app/display-home-page.js\");\n/* harmony import */ var _display_flowers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-flowers-page */ \"./src/app/display-flowers-page.js\");\n/* harmony import */ var _display_veggies_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-veggies-page */ \"./src/app/display-veggies-page.js\");\n\n\n\n\n\n\nconst listenToTabs = () => {\n    const content = document.querySelector(\"#content\");\n    const home = document.querySelector(\".home\")\n    const flowers = document.querySelector(\".flowers\")\n    const veggies = document.querySelector(\".veggies\")\n\n    home.addEventListener(\"click\", () => {\n        if (home.classList.contains(\"current\")) { return };\n        (0,_utils_remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(content);\n        (0,_display_header__WEBPACK_IMPORTED_MODULE_1__.displayHeader)(\".home\");\n        (0,_display_home_page__WEBPACK_IMPORTED_MODULE_2__.displayHomePage)();\n    })\n    flowers.addEventListener(\"click\", () => {\n        if (flowers.classList.contains(\"current\")) { return };\n        (0,_utils_remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(content);\n        (0,_display_header__WEBPACK_IMPORTED_MODULE_1__.displayHeader)(\".flowers\");\n        (0,_display_flowers_page__WEBPACK_IMPORTED_MODULE_3__.displayFlowersPage)();\n    })\n    veggies.addEventListener(\"click\", () => {\n        if (veggies.classList.contains(\"current\")) { return };\n        (0,_utils_remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(content);\n        (0,_display_header__WEBPACK_IMPORTED_MODULE_1__.displayHeader)(\".veggies\");\n        (0,_display_veggies_page__WEBPACK_IMPORTED_MODULE_4__.displayVeggiesPage)();\n    })\n}\n\n//# sourceURL=webpack://allotment/./src/app/listen-to-tabs.js?");

/***/ }),

/***/ "./src/app/start.js":
/*!**************************!*\
  !*** ./src/app/start.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _display_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-header */ \"./src/app/display-header.js\");\n/* harmony import */ var _display_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-home-page */ \"./src/app/display-home-page.js\");\n\n\n\nconst start = () => {\n    (0,_display_header__WEBPACK_IMPORTED_MODULE_0__.displayHeader)(\".home\");\n\n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    content.appendChild(main);\n\n    (0,_display_home_page__WEBPACK_IMPORTED_MODULE_1__.displayHomePage)();\n};\n\n//# sourceURL=webpack://allotment/./src/app/start.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/start */ \"./src/app/start.js\");\n\n\n(0,_app_start__WEBPACK_IMPORTED_MODULE_0__.start)();\n\n//# sourceURL=webpack://allotment/./src/index.js?");

/***/ }),

/***/ "./src/utils/remove-all-child-nodes.js":
/*!*********************************************!*\
  !*** ./src/utils/remove-all-child-nodes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}  \n\n//# sourceURL=webpack://allotment/./src/utils/remove-all-child-nodes.js?");

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