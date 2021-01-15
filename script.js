const checkAnswerButton = document.getElementById("check-answer-btn");
const submitEntryButton = document.getElementById("submit-entry-btn");
const changeButton = document.getElementById("change-btn");
const submitForm = document.getElementById("submit-form");
const quizForm = document.getElementById("quiz-form");
const displayQuizForm = document.getElementById("quiz-form").style.display;
const list = document.getElementById("list");

const wordArray = [
  { question: "Aap", answer: "Monkey" },
  { question: "Noot", answer: "Nut" },
  { question: "Molen", answer: "Mill" },
  { question: "Boom", answer: "Tree" },
];

let answer = getRandomWord();

// .getElementsByClassName("form-group");
// .getElementById("answer-field").innerText;

function getRandomWord() {
  let randomNumber = Math.floor(Math.random() * wordArray.length);
  let randomWordFromArray = wordArray[randomNumber].question;
  // wordArray[Math.floor(Math.random() * wordArray.length)].Question;
  document.getElementById("question-field").value = randomWordFromArray;
  return wordArray[randomNumber].answer;
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

submitEntryButton.addEventListener("click", submitEntry);

function submitEntry(e) {
  e.preventDefault();

  const questionField = document.getElementById("submit-question-field").value;
  const answerField = document.getElementById("submit-answer-field").value;

  if (answerField === "" || questionField === "") {
    alert("enter question and answer");
  } else {
    const entry = {
      question: questionField,
      answer: answerField,
    };
    wordArray.push(entry);
    addEntryToDOM(entry);
  }
}

function addEntryToDOM(entry) {
  const newEntry = document.createElement("p");

  newEntry.innerHTML = entry.question;

  console.log(list);
  list.appendChild(newEntry);
}
