var startBtn = document.querySelector("#startTimerBtn");
var timerEl = document.querySelector("#timer");
var secondsLeft = 60;
var questionEl = document.querySelector("#questions");
//or queryselectorall?
var choices = document.querySelector("#choices");
var currentIndex = 0;
var questionTitle = document.querySelector("#question-title");
var message = document.querySelector("#message");
var winsEl = document.querySelector("#wins");
var lossesEl = document.querySelector("#losses");

//function for setting the timer
function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//generate a start button, add event listener click
startBtn.addEventListener("click", makeQuestion);

function makeQuestion() {
  setTimer();
  //start showing question starting at [0]
  var currentQuestion = questionList[currentIndex];
  //display the actual question from the questionList
  questionTitle.innerText = currentQuestion.question;
  //displays options for question being accessed
  for (var option of currentQuestion.options) {
    //for each option, a button element is created, accepts the option element to be the option, appends the btn to choices div
    var optionBtn = document.createElement("button");
    //make innertext be the string value of the option array
    optionBtn.innerText = option;
    optionBtn.onclick = giveAnswer;
    //button is placed with the text from options being referenced at current index for user to see
    choices.append(optionBtn);
  }
}

//function that recalls makeQuestion
//prevent default?
function giveAnswer() {
  var correctAnswer = questionList[currentIndex].answer;
  console.log(this.innerText);
  console.log(correctAnswer);
  if (correctAnswer && this) {
    //moves on to the next question
    // document.getElementById("#message").innerHTML = "Correct!";
    currentIndex++;
  } else {
    // document.getElementById("#message").innerHTML = "Wrong :(";
    setTimer - 10;
    currentIndex++;
    //moves on to next question
  }
}

//array of objects for questions and answers
var questionList = [
  {
    question: "1. A true/false statement is called what?",
    answer: "B. Boolean",
    options: ["A. Array", "B. Boolean", "C. Cheese", "D. Dog"],
  },
  {
    question: "2. An object includes what kinds of properties?",
    answer: "A. Key:Value",
    options: [
      "A. Key:Value",
      "B. Key:Lock",
      "C. Cost:Value",
      "D. Words:Numbers",
    ],
  },
  {
    question: "3. What can arrays contain?",
    answer: "D. All of the above",
    options: ["A. Strings", "B. Numbers", "Objects", "D. ALl of the above"],
  },
  {
    question: "4. Which one is not an operator?",
    answer: "C. Array.isArray",
    options: ["A. +", "B. -", "C. Array.isArray", "D. typeof"],
  },
  {
    question: "5. Hello world!",
    answer: "C. Hi!",
    options: ["A. No", "B. Ugh", "C. Hi!", "D. Ew"],
  },
];

//make form to local storage for wins, loses, initials
function initWins() {
  document.getElementById("#initials-form");
  var storedWins = JSON.parse(localStorage.getItem("wins"));
  if (storedWins !== null) {
    wins = storedWins;
  }
}
function initLosses() {
  var storedLosses = JSON.parse(localStorage.getItem("losses"));
  if (storedLosses !== null) {
    losses = storedLosses;
  }
}
