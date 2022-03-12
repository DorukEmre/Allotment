import imageHomePage from "../assets/IMG_20200423_140626.jpg";
import imageHollie from "../assets/Hollie-1.png";

export const displayHomePage = () => {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("homeContainer")
    content.appendChild(main);
    
    const imageSection = document.createElement("section");
    const textSection = document.createElement("section");
    const mainImage = document.createElement("img");
    const hollie = document.createElement("img");
    const quote = document.createElement("q");

    main.appendChild(imageSection);
    main.appendChild(textSection);

    mainImage.src = imageHomePage;
    mainImage.classList.add("main-image");
    hollie.src = imageHollie;
    hollie.classList.add("emoji");
    imageSection.appendChild(mainImage);
    imageSection.appendChild(hollie);

    quote.textContent = "In the spring, at the end of the day, you should smell like dirt."
    textSection.appendChild(quote);
}