import {removeAllChildNodes} from "../utils/remove-all-child-nodes";
import {displayHeader} from "./display-header";
import {displayHomePage} from "./display-home-page";
import {displayFlowersPage} from "./display-flowers-page";
import {displayVeggiesPage} from "./display-veggies-page";

export const listenToTabs = () => {
    const content = document.querySelector("#content");
    const home = document.querySelector(".home")
    const flowers = document.querySelector(".flowers")
    const veggies = document.querySelector(".veggies")

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