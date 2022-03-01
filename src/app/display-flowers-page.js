import image1FlowersPage from "../assets/IMG_20200516_164906.jpg";
import image2FlowersPage from "../assets/IMG_20200502_194444.jpg";
import image3FlowersPage from "../assets/IMG_20200716_182020.jpg";

export const displayFlowersPage = () => {
    console.log('You clicked on "Flowers"')
    
    const content = document.querySelector("#content");
    const main = document.createElement("main");
    main.classList.add("flowersContainer")
    content.appendChild(main);

    const imageSection = document.createElement("section");
    const textSection = document.createElement("section");
    const image1 = document.createElement("img");
    const image2 = document.createElement("img");
    const image3 = document.createElement("img");
    const sentence = document.createElement("p");

    main.appendChild(imageSection);
    main.appendChild(textSection);

    image1.src = image1FlowersPage;
    image2.src = image2FlowersPage;
    image3.src = image3FlowersPage;
    sentence.textContent = "Don't forget to water me :/"
    imageSection.appendChild(image1);
    imageSection.appendChild(image2);
    imageSection.appendChild(image3);
    imageSection.appendChild(sentence);
}