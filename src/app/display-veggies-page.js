import image1VeggiesPage from "../assets/IMG_20200503_161134.jpg";
import image2VeggiesPage from "../assets/IMG_20200502_152305.jpg";
import imageHollie from "../assets/Hollie-2.png";

export const displayVeggiesPage = () => {
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("veggiesContainer")
    content.appendChild(main);

    const imageSection = document.createElement("section");
    const textSection = document.createElement("section");
    const image1 = document.createElement("img");
    const image2 = document.createElement("img");
    const hollie = document.createElement("img");
    const sentence = document.createElement("p");

    main.appendChild(imageSection);
    main.appendChild(textSection);

    image1.src = image1VeggiesPage;
    image2.src = image2VeggiesPage;
    image1.classList.add("main-image");
    image2.classList.add("main-image");
    hollie.src = imageHollie;
    hollie.classList.add("emoji");
    sentence.textContent = "Eat me while you can!"

    imageSection.appendChild(image1);
    imageSection.appendChild(image2);
    imageSection.appendChild(hollie);

    textSection.appendChild(sentence);
}