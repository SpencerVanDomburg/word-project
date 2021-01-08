const questionField = document.getElementById("question-field");
let answerField = document.getElementById("answer-field");
const checkAnswerButton = document.getElementById("check-answer-btn");

const wordArray = [
  { Question: "Aap", Answer: "Monkey" },
  { Question: "Noot", Answer: "Nut" },
  { Question: "Molen", Answer: "Mill" },
  { Question: "Boom", Answer: "Tree" },
];

function getRandomWord() {
  let randomWordFromArray =
    wordArray[Math.floor(Math.random() * wordArray.length)].Question;
  document.getElementById("question-field").value = randomWordFromArray;
}

function saveAnswer() {
  console.log("called saveAnswer()");
  answerField = document.getElementById("answer-field").value;
}

getRandomWord();

checkAnswerButton.addEventListener("click", () => {
  if (document.getElementById("answer-field") === null) {
    alert("enter something");
  } else {
    answerField = document.getElementById("answer-field").value;
    if (questionField === answerField) {
      alert("correct!");
      console.log("correct");
    } else {
      alert("not correct");
      console.log("incorrect");
    }
  }
});
