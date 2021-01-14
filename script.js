const checkAnswerButton = document.getElementById("check-answer-btn");
const submitAnswerButton = document.getElementById("submit-answer-btn");
const changeButton = document.getElementById("change-btn");
const submitForm = document.getElementById("submit-form");
const quizForm = document.getElementById("quiz-form");
const displayQuizForm = document.getElementById("quiz-form").style.display;

const wordArray = [
  { Question: "Aap", Answer: "Monkey" },
  { Question: "Noot", Answer: "Nut" },
  { Question: "Molen", Answer: "Mill" },
  { Question: "Boom", Answer: "Tree" },
];

let answer = getRandomWord();

// .getElementsByClassName("form-group");
// .getElementById("answer-field").innerText;

function getRandomWord() {
  let randomNumber = Math.floor(Math.random() * wordArray.length);
  let randomWordFromArray = wordArray[randomNumber].Question;
  // wordArray[Math.floor(Math.random() * wordArray.length)].Question;
  document.getElementById("question-field").value = randomWordFromArray;
  return wordArray[randomNumber].Answer;
}

checkAnswerButton.addEventListener("click", () => {
  // const questionField = document.getElementById("question-field").value;
  const answerField = document.getElementById("answer-field").value;
  console.log(answerField);
  if (answerField === null || answerField === "") {
    alert("enter something");
  } else if (answer === answerField) {
    alert("correct!");
    console.log("correct");
  } else {
    alert("not correct");
    console.log("incorrect");
  }
});

changeButton.addEventListener("click", () => {
  if (quizForm.classList.contains("no-display")) {
    quizForm.classList.remove("no-display");
    submitForm.classList.add("no-display");
  } else {
    quizForm.classList.add("no-display");
    submitForm.classList.remove("no-display");
  }
});
