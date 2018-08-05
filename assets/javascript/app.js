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

var number = 10;
var intervalId;
//----Timer Functions--------------
function run() {
  intervalId = setInterval(decrement, 1000);
};
function decrement() {
  number--;
  $("#timer").html("<h2>Time Remaining: " + number + "</h2>");
  if (number === 0) {
    stop();
  }
};
function stop() {
  clearInterval(intervalId);
}
run();
//----------------------------------
$("#done").on("click",function(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;

    if (question1 === "true"){
        correct++;
    console.log("correct");
} else if (question1 === "false") {
    wrong++;
    console.log("wrong");
} else {
    unanswered++;
    console.log("unanswered")
}
if (question2 === "true"){
    correct++;
    console.log("correct");
} else if (question2 === "false") {
    wrong++;
    console.log("wrong");
} else {
    unanswered++;
    console.log("unanswered")
}

if (question3 === "true"){
    correct++;
    console.log("correct");
} else if (question3 === "false") {
    wrong++;
    console.log("wrong");
} else {
    unanswered++;
    console.log("unanswered")
}
$("#score").append("Correct: " + correct);
$("#score").append(" Wrong: " + wrong);
$("#score").append(" Unanswered: " + unanswered);
});

