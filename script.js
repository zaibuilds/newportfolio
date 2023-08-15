
const dynamicText = document.querySelector("h1 span");

const words = ["Product Designer", "Creative Technologist", "Software Engineer"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
 const currentWord = words[wordIndex];
 const currentChar = currentWord.substring(0, charIndex);
 dynamicText.textContent = currentChar;

 if(!isDeleting && charIndex < currentWord.length) {
    // If condition is true type the next character
    charIndex++;
    setTimeout(typeEffect, 200 );
 } else if (isDeleting && charIndex > 0) {
    // If condition is false remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100 );

 } else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, 1200);
 }
}

typeEffect();