import { displayHeader } from "./display-header";
import { displayHomePage } from "./display-home-page";

export const start = () => {
    displayHeader(".home");

    const content = document.querySelector("#content");
    const main = document.createElement("main");
    content.appendChild(main);

    displayHomePage();
};