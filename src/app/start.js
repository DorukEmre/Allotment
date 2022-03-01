import { displayHeader } from "./display-header";
import { displayHomePage } from "./display-home-page";

export const start = () => {
    displayHeader(".home");
    displayHomePage();
};