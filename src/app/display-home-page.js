import imageHomePage from "../assets/IMG_20200423_140626.jpg";

export const displayHomePage = () => {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("homeContainer")
    content.appendChild(main);
    
    const imageSection = document.createElement("section");
    const textSection = document.createElement("section");
    const image = document.createElement("img");
    const quote = document.createElement("q");

    main.appendChild(imageSection);
    main.appendChild(textSection);

    image.src = imageHomePage;
    imageSection.appendChild(image);

    quote.textContent = "In the spring, at the end of the day, you should smell like dirt."
    textSection.appendChild(quote);
}