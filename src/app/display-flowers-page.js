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

    image1.src = "./assets/IMG_20200516_164906.jpg";
    image2.src = "./assets/IMG_20200502_194444.jpg";
    image3.src = "./assets/IMG_20200716_182020.jpg";
    sentence.textContent = "Don't forget to water me :/"
    imageSection.appendChild(image1);
    imageSection.appendChild(image2);
    imageSection.appendChild(image3);
    imageSection.appendChild(sentence);
}