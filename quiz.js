//Quiz!
//When the User Selects an answer, a function assigns a point value to each answer
//The points are associated with a character and results are displayed



startQuiz();

var question1Value = 1;

$("#a1").on("click", function() {
  question1Value = 1;
})
$("#a2").on("click", function() {
  question1Value = 2;
})
$("#a3").on("click", function() {
  question1Value = 3;
})

//When the User Presses Play, a Function displays the questions
function startQuiz() {
  // This hides the start screen
  $(".start-button").on("click", function () {
    $(".main-info").addClass("hide");
    $(".question1").removeClass("hide");
  }
  )
}

//When the start screen is hidden, a Function displays the first question
function getQuestion() {

}

