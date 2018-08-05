// Starting with the basic quiz
//When the page loads the player will see the Title, countdown timer, and questions
// all of the questions will have multiple choice options for answers.
//only one answer is alowed to be selected.
//each answer block will track if it is right, wrong, or unanswered
//When the timer reaches 0:00 the game ends and the page will be replaced to
//show right, wrong, unanswered
//Hitting reset will restart the quiz not reload the page.
var correct = 0;
var wrong = 0;
var unanswered = 0;
var quizClock = 5;
var quizInt;
const gameDiv = $("#gameDiv");
const questions = ["Question 1?","Question 2", "Question 3?"];
const answers = [["1 Ans A","1 Ans B","1 Ans C","1 Ans D"],["2 Ans A","2 Ans B","2 Ans C","2 Ans D"],
               ["3 Ans A","3 Ans B","3 Ans C","3 Ans D"]];
const ansCorrect = ["1 Ans A","2 Ans B","3 Ans C"]
const awesomeImages = ["<img src='assets/images/yayyy.gif'>", "<img src='https://fakeimg.pl/300/'>","<img src='https://fakeimg.pl/300/'>","<img src='assets/images/thor-dis.gif'>","<img src='assets/images/youcandoit.gif'>"];
var qTraker = 0;
var awesomeText;

//Player will need to click the start button to begin
function startButton(){
   var startButton = $("<button id='startButton'>").html("Start the Quiz");
    gameDiv.append(startButton);
}
//The start button will show the first question and start the clock
startButton();
$(document).on("click", "#startButton", function(){
    timer();
    awesomeQuiz();
});
//Only use one function to show all questions and answer options
function awesomeQuiz(){
    gameDiv.empty();
    awesomeText = "<p class='awesomeQuestion'>" + questions[qTraker] + 
    "</p> <p class='awesomeAnswer'>" + answers[qTraker][0] + "</p> <p class='awesomeAnswer'>" + answers[qTraker][1] + 
    "</p> <p class='awesomeAnswer'>" + answers[qTraker][2] + "</p> <p class='awesomeAnswer'>" + answers[qTraker][3] + "</p>"
    gameDiv.html(awesomeText);
};
//Clicking on an answer will count as eather right or wrong
$(document).on("click",".awesomeAnswer", function(){
    if ( $(this).text() === ansCorrect[qTraker] ){
        clearInterval(quizInt);
        nailedIt();
    } else {
        clearInterval(quizInt);
        blewIt();
    }

});
//A correct answer will state that it is, show an image, wait a few seconds, then show the next question
function nailedIt(){
    correct++;
    gameDiv.empty();
    awesomeText = "<p>That is correct. The answer is " + ansCorrect[qTraker] + ". Good Job</p>" + awesomeImages[qTraker];
    gameDiv.append(awesomeText);
    setTimeout(awesomeTransition,2000);
};
//A wrong answer will state that it is, show an image, wait a few seconds, then show the next question
function blewIt(){
    wrong++;
    gameDiv.empty();
    awesomeText = "<p>That is incorrect. The answer is " + ansCorrect[qTraker] + "</p>" + awesomeImages[3];
    gameDiv.append(awesomeText);
    setTimeout(awesomeTransition,2000);
}

function noAnswer(){
    unanswered++;
    gameDiv.empty();
    awesomeText = "<p>Time ran out. Better luck on the next one</p>" + awesomeImages[4];
    gameDiv.append(awesomeText);
    setTimeout(awesomeTransition,2000);
} 

function awesomeTransition (){
    qTraker++;
    quizClock = 5;
    awesomeQuiz();
    timer();

}

//----Timer Functions--------------
function timer() {
  quizInt = setInterval(decrement, 1000);
    function decrement() {
        quizClock--;
        $("#timer").html("<h2>Time Remaining: " + quizClock + "</h2>");
        if (quizClock === 0) {
        clearInterval(quizInt);
        noAnswer();
}}};
//----------------------------------










// $("#done").on("click",function(){
//     var question1 = document.quiz.question1.value;
//     var question2 = document.quiz.question2.value;
//     var question3 = document.quiz.question3.value;

//     if (question1 === "true"){
//         correct++;
//     console.log("correct");
// } else if (question1 === "false") {
//     wrong++;
//     console.log("wrong");
// } else {
//     unanswered++;
//     console.log("unanswered")
// }
// if (question2 === "true"){
//     correct++;
//     console.log("correct");
// } else if (question2 === "false") {
//     wrong++;
//     console.log("wrong");
// } else {
//     unanswered++;
//     console.log("unanswered")
// }

// if (question3 === "true"){
//     correct++;
//     console.log("correct");
// } else if (question3 === "false") {
//     wrong++;
//     console.log("wrong");
// } else {
//     unanswered++;
//     console.log("unanswered")
// }
// $("#score").append("Correct: " + correct);
// $("#score").append(" Wrong: " + wrong);
// $("#score").append(" Unanswered: " + unanswered);
// });

