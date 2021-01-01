const questionField = document.getElementById("question-field");
const checkAnswerButton = document.getElementById("check-answer-btn");

const wordArray = ["Aap", "Noot", "Mies", "Kees"];

function getRandomWord() {
  let randomWordFromArray =
    wordArray[Math.floor(Math.random() * wordArray.length)];
  document.getElementById("question-field").value = randomWordFromArray;
}

getRandomWord();

// checkAnswerButton.addEventListener("click")
