import { listenToTabs } from "./listen-to-tabs";

export const displayHeader = (toSetToCurrent) => {

    const content = document.querySelector("#content");

    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const homeLi = document.createElement("li");
    const flowersLi = document.createElement("li");
    const veggiesLi = document.createElement("li");

    h1.textContent = "Hollie's allotment";
    homeLi.classList.add("home");
    homeLi.textContent = "Home";
    flowersLi.classList.add("flowers");
    flowersLi.textContent = "Flowers";
    veggiesLi.classList.add("veggies");
    veggiesLi.textContent = "Veggies";

    content.appendChild(header)
    header.appendChild(h1);
    header.appendChild(ul);
    ul.appendChild(homeLi);
    ul.appendChild(flowersLi);
    ul.appendChild(veggiesLi);

    document.querySelector(toSetToCurrent).classList.add("current");

    listenToTabs();
}