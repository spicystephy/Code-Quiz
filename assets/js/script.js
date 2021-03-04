var startBtn = document.querySelector("#startTimerBtn");
var startTimer = document.querySelector("#timer");
var secondsLeft = 60;
var questionEl = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var currentIndex = 0
var questionTitle = document.querySelector("#question-title");

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    startTimer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
startBtn.addEventListener("click", function(e){

  });


//generate a start button
//add event listener click
//presented with question 1 and options
//add event listener click

//functin=on that recalls makeQuestion
//if user answer === true, display message "Correct", move on to next question
//carousel?
//if user answer === false, display message "Try Again"
//prevent default?
//subtract 10 seconds

function makeQuestion(){
    //start showing question starting at 0
    var currentQuestion = questionList[currentIndex];
    //display the actual question from the questionList
    questionTitle.innerText = currentQuestion.question;
    //displays options for question being accessed
    for(var option of currentQuestion.options){
        //for each option, a button element is created, accepts the option element to be the option, appends the btn to choices div
        var optionBtn = document.createElement("button")
        //make innertext be the string value of the option array
        optionBtn.innerText = option;
        //button is placed with the text from options being referenced at current index for user to see
        choices.append(optionBtn);
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
    options: ["A. Strings", "B. Numbers", "Elements", "D. ALl of the above"],
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


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
// ```
