import image1VeggiesPage from "../assets/IMG_20200503_161134.jpg";
import image2VeggiesPage from "../assets/IMG_20200502_152305.jpg";

export const displayVeggiesPage = () => {
    console.log('You clicked on "Veggies"')

    const content = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("veggiesContainer")
    content.appendChild(main);


    const imageSection = document.createElement("section");
    const textSection = document.createElement("section");
    const image1 = document.createElement("img");
    const image2 = document.createElement("img");
    const sentence = document.createElement("p");

    main.appendChild(imageSection);
    main.appendChild(textSection);

    image1.src = image1VeggiesPage;
    image2.src = image2VeggiesPage;
    imageSection.appendChild(image1);
    imageSection.appendChild(image2);

    sentence.textContent = "Eat me!"
    textSection.appendChild(sentence);
}