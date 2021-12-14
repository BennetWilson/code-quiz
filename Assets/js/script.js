var gameTimer = document.querySelector("#timer");
var startButton = document.querySelector("#startQuiz");
var clearScoresButton = document.querySelector("#clearScores");
var backButton = document.querySelector("#goBack");
var timeGiven = 5;
var timeElapsed = 0;
var welcomeEl = document.querySelector("#welcome");
var questionEl = document.querySelector("#questions");
var quizEl = document.querySelector("#quiz");
var answersEl = document.querySelector("#answers");

// questions
var questions = [
    {
        title: "Three common data types do NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "Which of the following choices defines a variable that won't change?",
        choices: ["var", "const", "let"],
        answer: "const"
    },
    {
        title: "Which built-in method returns a sting in all uppercase?",
        choices: ["toUpperCase", "changeCase(Upper)", "toUpper", "None of the Above"],
        answer: "toUpperCase"
    },
    {
        title: "Which of the following functions of an array removes the last item?",
        choices: ["pop()", "remove()", "concat()", "append()"],
        answer: "pop()"
    }
];
// questions

var interval;
var highScore = 0;
var score = 0;
var currentQ = 0;
// end of vars
// Start timer
function startTimer() {
  var interval = setInterval(function () {
    timeGiven--;
    gameTimer.textContent = timeGiven;
    if (timeGiven === 0) {
      clearInterval(interval);
      nextQuestion;
    }
  }, 1000);
}

// Stop Timer
function stopTimer() {
  clearInterval(interval);
}

// Clear current question and call for display of next question
// calls for input score display if last question
function nextQuestion() {}

// checks answer and updates user score
function checkAnswer(answer) {}

// displays a message for 3 seconds
function displayMessage(m) {}
// hide element
function hide(element) {
  welcomeEl.hidden = true;
}

// displays element
function display(element) {
  welcomeEl.display = true;
}

// reset local variables/storage
function reset() {}

// ====================== Making questions show up ====================

// renders question
function renderQuestion() {
  questionEl.textContent = questions[currentQ].title;
  for (i = 0; i < answersEl.children.length; i++) {
    answersEl.children[i].children[0].textContent = `${i + 1}; ${
      questions[currentQ.choices[i]]
    }`;
  }
}

// highscores
function renderHighscores() {}

// ==================== event listeners ===================

// display scores

// start
startButton.addEventListener("click", function () {
  hide(welcomeEl);
  startTimer();
  renderQuestion();
  display(quizEl);
});
