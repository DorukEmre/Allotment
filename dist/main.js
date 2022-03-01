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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    color: antiquewhite;\\n    font-family: 'Noto Sans', sans-serif;\\n    margin: 0;\\n    background: #230D28;\\n}\\ngreens {\\n    background: #628256;\\n    background: #394C32;\\n    background: #28431E;\\n    background: #1A3410;\\n    background: #0D2205;\\n}\\nbrowns {\\n    background: #988065;\\n    background: #594B3A;\\n    background: #4E3A23;\\n    background: #3D2913;\\n    background: #281805;\\n}\\npurple-and-pink {\\n    background: #5E4464;\\n    background: #37273B;\\n    background: #2E1834;\\n    background: #230D28;\\n    background: #16041A;\\n\\n    background: #905F67;\\n    background: #54373C;\\n    background: #4A2128;\\n    background: #3A1218;\\n    background: #26050A;\\n}\\n\\nheader {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background: #28431E;\\n    padding: 0 20px;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n}\\nheader ul {\\n    display: flex;\\n    justify-content: center;\\n    gap: 10px;\\n    padding-right: 40px;\\n}\\nheader li {\\n    list-style-type: none;\\n    background: #628256;\\n    padding: 10px 20px;\\n}\\nheader li.current {\\n    background: #230D28;\\n}\\nheader li:hover:not(.current) {\\n    background: #905F67;\\n    transition-duration: 0.15s;\\n}\\n\\nmain {\\n    margin-top: 107px;\\n}\\n\\n.homeContainer {\\n    display: flex;\\n    justify-content: center;\\n    gap: 40px;\\n}\\n.homeContainer > section {\\n    width: 40%;\\n    display: flex;\\n}\\n.homeContainer img {\\n    object-fit: contain;\\n    width: 100%;\\n    max-width: 400px;\\n}\\n.homeContainer q {\\n    width: 90%;\\n    align-self: center;\\n    font-style: italic;\\n    font-size: 2rem;\\n}\\n\\n.flowersContainer > section:first-of-type {\\n    display: grid;\\n    width: fit-content;\\n    width: 80%;\\n    max-width: 920px;\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\n    grid-template-rows: 40% 1fr;\\n    margin: 0 auto;\\n    gap: 20px;\\n}\\n.flowersContainer img:first-of-type {\\n    grid-column: 1 / span 3;    \\n    grid-row: 1;   \\n}\\n.flowersContainer img:nth-of-type(2) {\\n    grid-column: 1 / span 2;   \\n    grid-row: 2; \\n}\\n.flowersContainer img:last-of-type {\\n    grid-column: 3 / span 2;  \\n    grid-row: 2;   \\n}\\n.flowersContainer img {\\n    max-width: 100%; \\n}\\n.flowersContainer p {\\n    grid-column: 4;  \\n    grid-row: 1;   \\n    text-align: left;\\n    font-style: italic;\\n    font-size: 2rem;\\n    margin: 2rem 0 0;\\n}\\n\\n.veggiesContainer > section:first-of-type {\\n    display: flex;\\n    justify-content: center;\\n    width: 80%;\\n    margin: 0 auto;\\n    gap: 40px;\\n}\\n.veggiesContainer img {\\n    object-fit: contain;\\n    width: 100%;\\n    max-width: 300px;\\n}\\n.veggiesContainer p {\\n    text-align: center;\\n    font-style: italic;\\n    font-size: 2rem;    \\n}\\n\\n@media screen and (max-width: 670px) {\\n    header {\\n        flex-direction: column;\\n        align-items: center;\\n    }\\n    h1 {\\n        margin: 10px 0 0;\\n    }\\n    ul {\\n        margin-top: 10px;\\n    }\\n    main {\\n        margin-top: 144px;\\n    }\\n    .flowersContainer > section:first-of-type {\\n        width: 90%;\\n    }\\n    .flowersContainer p {\\n        margin: 0;\\n    }\\n    .veggiesContainer > section:first-of-type {\\n        width: 90%;\\n        gap: 20px;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://allotment/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://allotment/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://allotment/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://allotment/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://allotment/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://allotment/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://allotment/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://allotment/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://allotment/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://allotment/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/display-flowers-page.js":
/*!*****************************************!*\
  !*** ./src/app/display-flowers-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayFlowersPage\": () => (/* binding */ displayFlowersPage)\n/* harmony export */ });\n/* harmony import */ var _assets_IMG_20200516_164906_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/IMG_20200516_164906.jpg */ \"./src/assets/IMG_20200516_164906.jpg\");\n/* harmony import */ var _assets_IMG_20200502_194444_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/IMG_20200502_194444.jpg */ \"./src/assets/IMG_20200502_194444.jpg\");\n/* harmony import */ var _assets_IMG_20200716_182020_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/IMG_20200716_182020.jpg */ \"./src/assets/IMG_20200716_182020.jpg\");\n\n\n\n\nconst displayFlowersPage = () => {\n    console.log('You clicked on \"Flowers\"')\n    \n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    main.classList.add(\"flowersContainer\")\n    content.appendChild(main);\n\n    const imageSection = document.createElement(\"section\");\n    const textSection = document.createElement(\"section\");\n    const image1 = document.createElement(\"img\");\n    const image2 = document.createElement(\"img\");\n    const image3 = document.createElement(\"img\");\n    const sentence = document.createElement(\"p\");\n\n    main.appendChild(imageSection);\n    main.appendChild(textSection);\n\n    image1.src = _assets_IMG_20200516_164906_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image2.src = _assets_IMG_20200502_194444_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    image3.src = _assets_IMG_20200716_182020_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    sentence.textContent = \"Don't forget to water me :/\"\n    imageSection.appendChild(image1);\n    imageSection.appendChild(image2);\n    imageSection.appendChild(image3);\n    imageSection.appendChild(sentence);\n}\n\n//# sourceURL=webpack://allotment/./src/app/display-flowers-page.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHomePage\": () => (/* binding */ displayHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_IMG_20200423_140626_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/IMG_20200423_140626.jpg */ \"./src/assets/IMG_20200423_140626.jpg\");\n\n\nconst displayHomePage = () => {\n    console.log('You clicked on \"Home\"')\n\n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    main.classList.add(\"homeContainer\")\n    content.appendChild(main);\n    \n    const imageSection = document.createElement(\"section\");\n    const textSection = document.createElement(\"section\");\n    const image = document.createElement(\"img\");\n    const quote = document.createElement(\"q\");\n\n    main.appendChild(imageSection);\n    main.appendChild(textSection);\n\n    image.src = _assets_IMG_20200423_140626_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    imageSection.appendChild(image);\n\n    quote.textContent = \"In the spring, at the end of the day, you should smell like dirt.\"\n    textSection.appendChild(quote);\n}\n\n//# sourceURL=webpack://allotment/./src/app/display-home-page.js?");

/***/ }),

/***/ "./src/app/display-veggies-page.js":
/*!*****************************************!*\
  !*** ./src/app/display-veggies-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayVeggiesPage\": () => (/* binding */ displayVeggiesPage)\n/* harmony export */ });\n/* harmony import */ var _assets_IMG_20200503_161134_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/IMG_20200503_161134.jpg */ \"./src/assets/IMG_20200503_161134.jpg\");\n/* harmony import */ var _assets_IMG_20200502_152305_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/IMG_20200502_152305.jpg */ \"./src/assets/IMG_20200502_152305.jpg\");\n\n\n\nconst displayVeggiesPage = () => {\n    console.log('You clicked on \"Veggies\"')\n\n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    main.classList.add(\"veggiesContainer\")\n    content.appendChild(main);\n\n\n    const imageSection = document.createElement(\"section\");\n    const textSection = document.createElement(\"section\");\n    const image1 = document.createElement(\"img\");\n    const image2 = document.createElement(\"img\");\n    const sentence = document.createElement(\"p\");\n\n    main.appendChild(imageSection);\n    main.appendChild(textSection);\n\n    image1.src = _assets_IMG_20200503_161134_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image2.src = _assets_IMG_20200502_152305_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    imageSection.appendChild(image1);\n    imageSection.appendChild(image2);\n\n    sentence.textContent = \"Eat me!\"\n    textSection.appendChild(sentence);\n}\n\n//# sourceURL=webpack://allotment/./src/app/display-veggies-page.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/start */ \"./src/app/start.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_app_start__WEBPACK_IMPORTED_MODULE_0__.start)();\n\n//# sourceURL=webpack://allotment/./src/index.js?");

/***/ }),

/***/ "./src/utils/remove-all-child-nodes.js":
/*!*********************************************!*\
  !*** ./src/utils/remove-all-child-nodes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}  \n\n//# sourceURL=webpack://allotment/./src/utils/remove-all-child-nodes.js?");

/***/ }),

/***/ "./src/assets/IMG_20200423_140626.jpg":
/*!********************************************!*\
  !*** ./src/assets/IMG_20200423_140626.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a39306f791e55fe3703a.jpg\";\n\n//# sourceURL=webpack://allotment/./src/assets/IMG_20200423_140626.jpg?");

/***/ }),

/***/ "./src/assets/IMG_20200502_152305.jpg":
/*!********************************************!*\
  !*** ./src/assets/IMG_20200502_152305.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd5b16144096155cd28f.jpg\";\n\n//# sourceURL=webpack://allotment/./src/assets/IMG_20200502_152305.jpg?");

/***/ }),

/***/ "./src/assets/IMG_20200502_194444.jpg":
/*!********************************************!*\
  !*** ./src/assets/IMG_20200502_194444.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c4e4c1a485318d901fc3.jpg\";\n\n//# sourceURL=webpack://allotment/./src/assets/IMG_20200502_194444.jpg?");

/***/ }),

/***/ "./src/assets/IMG_20200503_161134.jpg":
/*!********************************************!*\
  !*** ./src/assets/IMG_20200503_161134.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d383a46f9123e3186feb.jpg\";\n\n//# sourceURL=webpack://allotment/./src/assets/IMG_20200503_161134.jpg?");

/***/ }),

/***/ "./src/assets/IMG_20200516_164906.jpg":
/*!********************************************!*\
  !*** ./src/assets/IMG_20200516_164906.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ee79cb7f5d9993b488d9.jpg\";\n\n//# sourceURL=webpack://allotment/./src/assets/IMG_20200516_164906.jpg?");

/***/ }),

/***/ "./src/assets/IMG_20200716_182020.jpg":
/*!********************************************!*\
  !*** ./src/assets/IMG_20200716_182020.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"487dcc5f3aefbb374e3c.jpg\";\n\n//# sourceURL=webpack://allotment/./src/assets/IMG_20200716_182020.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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