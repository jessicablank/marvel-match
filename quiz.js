//Quiz!
alert("quiz connected!");
//When the User Selects an answer, a function assigns a point value to each answer
//The points are associated with a character and results are displayed
//Answers

startQuiz();

//When the User Presses Play, a Function displays the questions
function startQuiz() {
    // This hides the start screen
    $(".start-button").on("click",function(){
      $(".main-info").addClass("hide");
    }
    
    
    //var startScreenEl = document.getElementById("start-screen");
   // startScreenEl.setAttribute("class", "hide");
    
    )
    // un-hide questions section
    questionsEl.removeAttribute("class");
    getQuestion();
}

//When the start screen is hidden, a Function displays the first question
function getQuestion() {
      var question1 = {
        title: "How much do you value monetary wealth?:",
        answer1: "A lot",
        answer2: "Some",
        answer3: "Not at all",
        value1: 2,
        value2: 1,
        value3: 0,
      }
    }
    