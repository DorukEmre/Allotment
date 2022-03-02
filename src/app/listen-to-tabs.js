import {removeAllChildNodes} from "../utils/remove-all-child-nodes";
import {displayHeader} from "./display-header";
import {displayHomePage} from "./display-home-page";
import {displayFlowersPage} from "./display-flowers-page";
import {displayVeggiesPage} from "./display-veggies-page";

export const listenToTabs = () => {
    const content = document.querySelector("#content");
    const h1 = document.querySelector("h1")
    const home = document.querySelector(".home")
    const flowers = document.querySelector(".flowers")
    const veggies = document.querySelector(".veggies")

    h1.addEventListener("click", () => {
        if (home.classList.contains("current")) { return };
        removeAllChildNodes(content);
        displayHeader(".home");
        displayHomePage();
    })
    home.addEventListener("click", () => {
        if (home.classList.contains("current")) { return };
        removeAllChildNodes(content);
        displayHeader(".home");
        displayHomePage();
    })
    flowers.addEventListener("click", () => {
        if (flowers.classList.contains("current")) { return };
        removeAllChildNodes(content);
        displayHeader(".flowers");
        displayFlowersPage();
    })
    veggies.addEventListener("click", () => {
        if (veggies.classList.contains("current")) { return };
        removeAllChildNodes(content);
        displayHeader(".veggies");
        displayVeggiesPage();
    })
}