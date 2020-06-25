//Quiz!
//When the User Selects an answer, a function assigns a point value to each answer
//The points are associated with a character and results are displayed
$(function(){
localStorage.setItem("marvel-match-name", "Thor");

startQuiz();
endQuiz();

var question1Value = 1;

$("#a1").on("click", function() {
  question1Value = 1;
})
$("#a2").on("click", function() {
  question1Value = 2;
})
$("#a3").on("click", function() {
  question1Value = 3;
});



//When the User Presses Play, a Function displays the questions
function startQuiz() {
  // This hides the start screen
  $(".start-button").on("click", function () {
    $(".main-info").addClass("hide");
    $(".question1").removeClass("hide");
  }
  )
}
<<<<<<< HEAD

//When the user clicks on the results button, they are redirected to the results html page
function endQuiz() {
  $(".show-results").on("click", function () {
    window.location.replace("results.html");
  }
  )
=======
//When the start screen is hidden, a Function displays the first question
function getQuestion() {

>>>>>>> 8e86ea2d82eb52384b378e21f2daa26bd5c73989
}

})
