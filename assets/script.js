//questions on the quiz
var questions = [
  {
    question: "Who is SpongeBob's best-friend?",
    answers: [
      { text: "Gary", correct: false },
      { text: "Patrick", correct: true },
      { text: "Squidward", correct: false },
      { text: "Plankton", correct: false },
    ],
  },
  {
    question: "What instrument does Squidward play?",
    answers: [
      { text: "is mayonnaise an instrument?", correct: false },
      { text: "stylophone", correct: false },
      { text: "violin", correct: false },
      { text: "clarinet", correct: true },
    ],
  },
  {
    question:
      "SpongeBob doesn't know how to drive a boat car, but he can drive a...",
    answers: [
      { text: "rock", correct: true },
      { text: "pizza", correct: false },
      { text: "Dr. Kelp", correct: false },
      { text: "Chocolate", correct: false },
    ],
  },
  {
    question:
      "What did BubbleBass say to SpongeBob after eating a Krabby Patty?",
    answers: [
      { text: "You forgot the KETCHUP!", correct: false },
      { text: "You forgot the PICKLES!", correct: true },
      { text: "MY LEG!", correct: false },
      { text: "I'm ugly and I'm proud!", correct: false },
    ],
  },
  {
    question: "Why did Mrs. Puff remove a gold star from SpongeBob's name?",
    answers: [
      { text: "Mrs.Puff didn't think 25 is funnier than 24", correct: false },
      { text: "SpongeBob crashed a boat car", correct: false },
      { text: "SpongeBob was a bad noodle", correct: true },
      {
        text: "SpongeBob didn't give here the Krabby Patty formula",
        correct: false,
      },
    ],
  },
];
var currentQuestion;
var questionIndex = 0;
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");

startButton.addEventListener("click", startGame);
function startGame() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  // currentQuestion;
  // questionIndex = 0;
  nextQuestion();

  console.log("Started");
}

function showQuestion(question) {
  questionEl.textContent = question.questions;
  console.log(questions);
}

function nextQuestion() {
  showQuestion(currentQuestion[questionIndex]);
}
