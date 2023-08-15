const words = ["Product Designer", "Creative Technologist", "Software Engineer"];

let wordIndex = 0;
let charIndex = 0;

const typeEffect = () => {
 const currentWord = words[wordIndex];
 const currentChar = currentWord.substring(0, charIndex);
 console.log(currentWord, currentChar);
}

typeEffect();