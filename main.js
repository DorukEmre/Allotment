/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}        \n\nconst header = (toSetToCurrent) => {\n\n    const content = document.querySelector(\"#content\");\n\n    const header = document.createElement(\"header\");\n    const h1 = document.createElement(\"h1\");\n    const ul = document.createElement(\"ul\");\n    const homeLi = document.createElement(\"li\");\n    const flowersLi = document.createElement(\"li\");\n    const veggiesLi = document.createElement(\"li\");\n\n    h1.textContent = \"Hollie's allotment\";\n    homeLi.classList.add(\"home\");\n    homeLi.textContent = \"Home\";\n    flowersLi.classList.add(\"flowers\");\n    flowersLi.textContent = \"Flowers\";\n    veggiesLi.classList.add(\"veggies\");\n    veggiesLi.textContent = \"Veggies\";\n\n    content.appendChild(header)\n    header.appendChild(h1);\n    header.appendChild(ul);\n    ul.appendChild(homeLi);\n    ul.appendChild(flowersLi);\n    ul.appendChild(veggiesLi);\n\n    document.querySelector(toSetToCurrent).classList.add(\"current\");\n\n    listenToTabs();\n}\n\nconst homePage = () => {\n    console.log('You clicked on \"Home\"')\n\n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    main.classList.add(\"homeContainer\")\n    content.appendChild(main);\n    \n    const imageSection = document.createElement(\"section\");\n    const textSection = document.createElement(\"section\");\n    const image = document.createElement(\"img\");\n    const quote = document.createElement(\"q\");\n\n    main.appendChild(imageSection);\n    main.appendChild(textSection);\n\n    image.src = \"../assets/IMG_20200423_140626.jpg\";\n    imageSection.appendChild(image);\n\n    quote.textContent = \"In the spring, at the end of the day, you should smell like dirt.\"\n    textSection.appendChild(quote);\n}\n\nconst flowersPage = () => {\n    console.log('You clicked on \"Flowers\"')\n    \n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    main.classList.add(\"flowersContainer\")\n    content.appendChild(main);\n\n    const imageSection = document.createElement(\"section\");\n    const textSection = document.createElement(\"section\");\n    const image1 = document.createElement(\"img\");\n    const image2 = document.createElement(\"img\");\n    const image3 = document.createElement(\"img\");\n    const sentence = document.createElement(\"p\");\n\n    main.appendChild(imageSection);\n    main.appendChild(textSection);\n\n    image1.src = \"../assets/IMG_20200516_164906.jpg\";\n    image2.src = \"../assets/IMG_20200502_194444.jpg\";\n    image3.src = \"../assets/IMG_20200716_182020.jpg\";\n    sentence.textContent = \"Don't forget to water me :/\"\n    imageSection.appendChild(image1);\n    imageSection.appendChild(image2);\n    imageSection.appendChild(image3);\n    imageSection.appendChild(sentence);\n}\n\nconst veggiesPage = () => {\n    console.log('You clicked on \"Veggies\"')\n\n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    main.classList.add(\"veggiesContainer\")\n    content.appendChild(main);\n\n\n    const imageSection = document.createElement(\"section\");\n    const textSection = document.createElement(\"section\");\n    const image1 = document.createElement(\"img\");\n    const image2 = document.createElement(\"img\");\n    const sentence = document.createElement(\"p\");\n\n    main.appendChild(imageSection);\n    main.appendChild(textSection);\n\n    image1.src = \"../assets/IMG_20200503_161134.jpg\";\n    image2.src = \"../assets/IMG_20200502_152305.jpg\";\n    imageSection.appendChild(image1);\n    imageSection.appendChild(image2);\n\n    sentence.textContent = \"Eat me!\"\n    textSection.appendChild(sentence);\n}\n\nconst listenToTabs = () => {\n    const content = document.querySelector(\"#content\");\n    const home = document.querySelector(\".home\")\n    const flowers = document.querySelector(\".flowers\")\n    const veggies = document.querySelector(\".veggies\")\n\n    home.addEventListener(\"click\", () => {\n        if (home.classList.contains(\"current\")) { return };\n        removeAllChildNodes(content);\n        header(\".home\");\n        homePage();\n    })\n    flowers.addEventListener(\"click\", () => {\n        if (flowers.classList.contains(\"current\")) { return };\n        removeAllChildNodes(content);\n        header(\".flowers\");\n        flowersPage();\n    })\n    veggies.addEventListener(\"click\", () => {\n        if (veggies.classList.contains(\"current\")) { return };\n        removeAllChildNodes(content);\n        header(\".veggies\");\n        veggiesPage();\n    })\n}\n\nconst start = (() => {\n    header(\".home\");\n\n    const content = document.querySelector(\"#content\");\n    const main = document.createElement(\"main\");\n    content.appendChild(main);\n\n    homePage();\n})();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;