startQuiz();

var question1Value = 1;

$("#a1").on("click", function() {
  question1Value = 1;
});
$("#a2").on("click", function() {
  question1Value = 2;
});
$("#a3").on("click", function() {
  question1Value = 3;
});

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