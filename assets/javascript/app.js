const questions = 
   ["What do you call a time span of one thousand years?",
    "How many colors are there in a rainbow?",
    "Name the historical prince whose name was used by</p><p>Bram Stoker in his famous novel",
    "Name the Movie:</p><p>A depressed office worker joins a cult</p><p>and destabilizes the government",
    "Who wrote a series of novels about</p><p>orcs, hobbits, goblins and elves?",
    "Which traditional Scottish musical instrument</p><p>was once banned under English law?",
    "Name the Chinese game played with small tiles",
    "What Archimedean solid has 20 regular triangular faces,</p><p>30 square faces, 12 regular pentagonal faces,</p><p>60 vertices, and 120 edges?"];

const answers = [["A: Decade", "B: Century", "C: Millennium", "D: Millennial"],
["A: Eight", "B: Seven", "C: Eleven", "D: Five"],
["A: Aladin", "B: Dracula", "C: Harry Potter", "D: William"],
["A: Matrix", "B: Taken", "C: Wanted", "D: Harold and Kumar go to White Castle"],
["A: Steven King", "B: JK Rolling", "C: Voldemort", "D: JRR Tolkien"],
["A: Fiddle", "B: Border Pipes", "C: Bag Pipes", "D: Dulcitone"],
["A: Mah-jong", "B: Xiangqi", "C: Dou Dizhu", "D: Pai Gow"],
["A: Truncated Tetrahedron", "B: Cuboctahedron", "C: Truncated Icosidodecahedron", "D: Rhombicosidodecahedron"]];

const ansCorrect = ["C: Millennium",
    "B: Seven",
    "B: Dracula",
    "A: Matrix",
    "D: JRR Tolkien",
    "C: Bag Pipes",
    "A: Mah-jong",
    "D: Rhombicosidodecahedron"]

const awesomeImages = ["<img src='assets/images/millennium.gif'>",
    "<img src='assets/images/rainbow.gif'>",
    "<img src='assets/images/dracula.gif'>",
    "<img src='assets/images/matrix.gif'>",
    "<img src='assets/images/lordoftherings.gif'>",
    "<img src='assets/images/bagpipe.gif'>",
    "<img src='assets/images/mahjong.gif'>",
    "<img src='assets/images/object.gif'>",
    "<img src='assets/images/yayyy.gif'>",
    "<img src='assets/images/youcandoit.gif'>",
    "<img src='assets/images/thor-dis.gif'>",
    "<img src='assets/images/hurry.gif'>",
    "<img src='assets/images/disappointed.gif'>"];
const gameDiv = $("#gameDiv");
var correct = 0;
var wrong = 0;
var unanswered = 0;
var quizClock = 20;
var quizInt;
var qTraker = 0;
var awesomeText;
var scoreBoardText;
var resetDiv;
var reset;

const song = new Audio("assets/audio/Joakim-Karud.wav");

//Player will need to click the start button to begin
function startButton() {
    var startButton = $("<button id='startButton'>").html("Start the Quiz");
    awesomeText = "<p>This is a Quiz that covers an Array of topics.</p><p>You only have 20 seconds to click on an answer.</P><p>How many questions can you answer correctly?</p>"
    gameDiv.append(awesomeText);
    gameDiv.append(startButton);
}
//The start button will show the first question and start the clock
startButton();
$(document).on("click", "#startButton", function () {
    song.play();
    timer();
    awesomeQuiz();
});
//Only use one function to show all questions and answer options
function awesomeQuiz() {
    gameDiv.empty();
    awesomeText = "<p class='awesomeQuestion'>" + questions[qTraker] +
        "</p> <p class='awesomeAnswer'>" + answers[qTraker][0] + "</p> <p class='awesomeAnswer'>" + answers[qTraker][1] +
        "</p> <p class='awesomeAnswer'>" + answers[qTraker][2] + "</p> <p class='awesomeAnswer'>" + answers[qTraker][3] + "</p>"
    gameDiv.html(awesomeText);
};
//Clicking on an answer will count as eather right or wrong
$(document).on("click", ".awesomeAnswer", function () {
    if ($(this).text() === ansCorrect[qTraker]) {
        clearInterval(quizInt);
        nailedIt();
    } else {
        clearInterval(quizInt);
        blewIt();
    }

});
//A correct answer will state that it is, show an image, wait a few seconds, then show the next question
function nailedIt() {
    correct++;
    gameDiv.empty();
    awesomeText = "<p>That is correct. The answer is " + ansCorrect[qTraker] + ". Good Job</p>" + awesomeImages[qTraker];
    gameDiv.append(awesomeText);
    setTimeout(awesomeTransition, 5000);
};
//A wrong answer will state that it is, show an image, wait a few seconds, then show the next question
function blewIt() {
    wrong++;
    gameDiv.empty();
    awesomeText = "<p>That is incorrect. The answer is " + ansCorrect[qTraker] + "</p>" + awesomeImages[10];
    gameDiv.append(awesomeText);
    setTimeout(awesomeTransition, 5000);
};

function noAnswer() {
    unanswered++;
    gameDiv.empty();
    awesomeText = "<p>Time ran out.</p><p>The answer was " + ansCorrect[qTraker] + "</p><p>Better luck on the next one</p>" + awesomeImages[11];
    gameDiv.append(awesomeText);
    setTimeout(awesomeTransition, 5000);
};
//The final screen will show the scores and the message will be different depending on how well the player did
function scoreBoard() {
    gameDiv.empty();
    awesomeText = "<p>Total Correct: " + correct + " | Total Wrong: " + wrong + " | Unanswered: " + unanswered + "</p>"
    gameDiv.append(awesomeText);
    if (correct === 8) {
        scoreBoardText = "<p>Thats Amazing! You answered all of the questions correctly</p>" + awesomeImages[8];
        gameDiv.append(scoreBoardText);
        resetButton();
    } else if ((correct < 8) && (correct !== 0)) {
        scoreBoardText = "<p>That's a good start. Try the Quiz again to get them all</p>" + awesomeImages[9];
        gameDiv.append(scoreBoardText);
        resetButton();
    } else if (correct === 0) {
        scoreBoardText = "<p>Not one correct answer, but that's OK.</p><p> Take the Quiz again to get a better score</p>" + awesomeImages[12];
        gameDiv.append(scoreBoardText);
        resetButton();
    }
};

function resetButton() {
    resetDiv = $("<div id='resetDiv'>")
    reset = $("<button id='reset'>").html("Take the Quiz Again");
    resetDiv.append(reset);
    gameDiv.append(resetDiv);
};
//The reset button only resets the game and does not reload the page
$(document).on("click", "#reset", function () {
    correct = 0;
    wrong = 0;
    unanswered = 0;
    qTraker = 0;
    quizClock = 20;
    awesomeQuiz();
    timer();
});


function awesomeTransition() {
    if (qTraker < 7) {
        qTraker++;
        quizClock = 20;
        awesomeQuiz();
        timer();
    } else {
        scoreBoard();
    }
};

//----Timer Functions--------------
function timer() {
    quizInt = setInterval(decrement, 1000);
    function decrement() {
        quizClock--;
        $("#timer").html("<h2>Time Remaining: " + quizClock + "</h2>");
        if (quizClock === 0) {
            clearInterval(quizInt);
            noAnswer();
        }
    }
};
//----------------------------------