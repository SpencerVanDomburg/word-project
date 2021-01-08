const checkAnswerButton = document.getElementById("check-answer-btn");

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
