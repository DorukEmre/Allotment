function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}        

const header = (toSetToCurrent) => {

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

const homePage = () => {
    console.log('You clicked on "Home"')

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

    image.src = "./assets/IMG_20200423_140626.jpg";
    imageSection.appendChild(image);

    quote.textContent = "In the spring, at the end of the day, you should smell like dirt."
    textSection.appendChild(quote);
}

const flowersPage = () => {
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

const veggiesPage = () => {
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

    image1.src = "./assets/IMG_20200503_161134.jpg";
    image2.src = "./assets/IMG_20200502_152305.jpg";
    imageSection.appendChild(image1);
    imageSection.appendChild(image2);

    sentence.textContent = "Eat me!"
    textSection.appendChild(sentence);
}

const listenToTabs = () => {
    const content = document.querySelector("#content");
    const home = document.querySelector(".home")
    const flowers = document.querySelector(".flowers")
    const veggies = document.querySelector(".veggies")

    home.addEventListener("click", () => {
        if (home.classList.contains("current")) { return };
        removeAllChildNodes(content);
        header(".home");
        homePage();
    })
    flowers.addEventListener("click", () => {
        if (flowers.classList.contains("current")) { return };
        removeAllChildNodes(content);
        header(".flowers");
        flowersPage();
    })
    veggies.addEventListener("click", () => {
        if (veggies.classList.contains("current")) { return };
        removeAllChildNodes(content);
        header(".veggies");
        veggiesPage();
    })
}

const start = (() => {
    header(".home");

    const content = document.querySelector("#content");
    const main = document.createElement("main");
    content.appendChild(main);

    homePage();
})();