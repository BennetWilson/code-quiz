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
var userScore = document.querySelector("#score");
var inputScoreEl = document.querySelector("#inputScore");
var highScoresButton = document.querySelector("#viewScores");
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
function nextQuestion() {
  currentQ ++;
  if (currentQ < questions.length) {
    renderQuestion();
  } else {
    stopTimer();
    if ((timeGiven - timeElapsed) > 0)
    score += (timeGiven - timeElapsed);
  userScore.textContent = score;
  hide(quizEl);
  display(inputScoreEl);
  gameTimer.textContent = 0;
  }
}

// checks answer and updates user score
function checkAnswer(answer) {
if (questions[currentQ].answer == questions[currentQ].choices[answer.id]) {
  score += 5;
  displayMessage("Correct!");
} else {
  timeElapsed =+10;
  displayMessage("Incorrect :(");
}
}

// displays a message for 5 seconds
function displayMessage(m) {
  let messageHr = document.createElement("hr");
  let messageEl = document.createElement("div")
  messageEl.textContent = m;
  document.querySelector(".jumbotron").appendChild(messageHr);
  document.querySelector(".jumbotron").appendChild(messageEl);
  setTimeout(function() {
    messageHr.remove();
    messageEl.remove();
  }, 5000);
}
// hide element
function hide(element) {
  element.style.display = "none";
}

// displays element
function display(element) {
  element.style.display = "block";
}

// reset local variables/storage
function reset() {
  score = 0;
  currentQ = 0;
  timeElapsed = 0;
  gameTimer.textContent = 0;
}

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
highScoresButton.addEventListener("click", function() {
  hide(welcomeEl);
  hide(quizEl);
  hide(inputScoreEl);
  renderHighscores();
  stopTimer();
  reset();
});

// start
startButton.addEventListener("click", function () {
  hide(welcomeEl);
  startTimer();
  renderQuestion();
  display(quizEl);
});
