// Add your code here

//fetch main element
const main = document.querySelector("main");

//create section element as child node for main
const sectionElement = document.createElement("div");
sectionElement.className = "container";

//create image element as child node for section element
const createImgElement = document.createElement("img");
createImgElement.className = "img";
createImgElement.src = "../images/shivraj.png";
createImgElement.alt = "Shivraj Khose standing in front of car";
createImgElement.width = "200";
sectionElement.appendChild(createImgElement);

//create a para element
const createParaElement = document.createElement("p");

//create a span element to separate first sentence with the rest
const firstSentence = document.createElement("span");
const restSentence = document.createElement("span");

firstSentence.textContent = `My name is Shivraj and I am`;
restSentence.textContent = ` currently pursuing my Master's in Computer Science
 starting from Fall 2023. I am really excited to learn web development.
I am excited about creating responsive web pages. I like to play Chess and Cricket. Thank you!
`;

createParaElement.className = "bio";

//add style to the first sentence
firstSentence.style.fontWeight = 600;

//append the span elements to the p element
createParaElement.appendChild(firstSentence);
createParaElement.appendChild(restSentence);

//append the p element to the section element
sectionElement.appendChild(createParaElement);

//append the section element to the main element;
main.appendChild(sectionElement);
