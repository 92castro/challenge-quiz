//questions on the quiz
var questions = [
  {
    question: "Who is SpongeBob's best-friend?",
    answers: [
      { text: "Gary" },
      { text: "Patrick" },
      { text: "Squidward" },
      { text: "Plankton" },
    ],
    correct: "Patrick",
  },
  {
    question: "What instrument does Squidward play?",
    answers: [
      { text: "is mayonnaise an instrument?" },
      { text: "stylophone" },
      { text: "violin" },
      { text: "clarinet" },
    ],
    correct: "clarinet",
  },
  {
    question:
      "SpongeBob doesn't know how to drive a boat car, but he can drive a...",
    answers: [
      { text: "rock" },
      { text: "pizza" },
      { text: "Dr. Kelp" },
      { text: "Chocolate" },
    ],
    correct: "rock",
  },
  {
    question:
      "What did BubbleBass say to SpongeBob after eating a Krabby Patty?",
    answers: [
      { text: "You forgot the KETCHUP!" },
      { text: "You forgot the PICKLES!" },
      { text: "MY LEG!" },
      { text: "I'm ugly and I'm proud!" },
    ],
    correct: "You forgot the PICKLES!",
  },
  {
    question: "Why did Mrs. Puff remove a gold star from SpongeBob's name?",
    answers: [
      { text: "Mrs.Puff didn't think 25 is funnier than 24" },
      { text: "SpongeBob crashed a boat car" },
      { text: "SpongeBob was a bad noodle" },
      {
        text: "SpongeBob didn't give here the Krabby Patty formula",
      },
    ],
    correct: "SpongeBob was a bad noodle",
  },
];

//Global variables
var timerEl = document.getElementById("timer");
var resultEl = document.getElementById("results");
var pEl = document.getElementById("intro");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");

var questionIndex = 0;
var secondsLeft = 45;

//begin quiz
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  startButton.classList.add("hide");
  pEl.style.display = "none";
  questionContainerEl.classList.remove("hide");
  startTime();
  showQuestion();
}

//display questions on screen
function showQuestion() {
  questionEl.textContent = questions[questionIndex].question;
  btn1.textContent = questions[questionIndex].answers[0].text;
  btn2.textContent = questions[questionIndex].answers[1].text;
  btn3.textContent = questions[questionIndex].answers[2].text;
  btn4.textContent = questions[questionIndex].answers[3].text;
}

//booleans
function validateAnswer(e) {
  var selectedButton = e.target.textContent;
  if (selectedButton === questions[questionIndex].correct) {
  } else {
    wrongAnswerSub();
  }
}

//answer buttons selector
btn1.addEventListener("click", function (event) {
  validateAnswer(event);
  nextQuestion();
});

btn2.addEventListener("click", function (event) {
  validateAnswer(event);
  nextQuestion();
});

btn3.addEventListener("click", function (event) {
  validateAnswer(event);
  nextQuestion();
});

btn4.addEventListener("click", function (event) {
  validateAnswer(event);
  nextQuestion();
});

function nextQuestion() {
  questionIndex++;
  if (questions[questionIndex] !== undefined) {
    showQuestion();
  } else {
    gameOver();
  }
}

//timer
function startTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function wrongAnswerSub() {
  secondsLeft -= 10;
  if (secondsLeft < 0) {
    timer = 0;
  }
  timerEl.textContent = secondsLeft;
  if (secondsLeft === 0) {
    gameOver();
  }
}

//when quiz ends
function gameOver() {
  alert("GAME-OVER");
  questionContainerEl.classList.add("hide");
  resultEl.classList.remove("hide");
}
