//Quiz!
//When the User Selects an answer, a function assigns a point value to each answer
//The points are associated with a character and results are displayed
$(function () {
  localStorage.setItem("marvel-match-name", "Thor");

  startQuiz();
  endQuiz();

  var question1Value = 1;
  var question2Value = 1;
  var question3Value = 1;

  var pointTotal = [0, 0, 0]

  var ThorIndex = 0;
  var HulkIndex = 1;
  var IronmanIndex = 2;

  //Question 1
  $("#a1").on("click", function () {
    question1Value = 1;
  })
  $("#a2").on("click", function () {
    question1Value = 2;
  })
  $("#a3").on("click", function () {
    question1Value = 3;
  });
  //Question 2
  $("#b1").on("click", function () {
    question2Value = 1;
  })
  $("#b2").on("click", function () {
    question2Value = 2;
  })
  $("#b3").on("click", function () {
    question2Value = 3;
  });
  //Question 3
  $("#c1").on("click", function () {
    question3Value = 1;
  })
  $("#c2").on("click", function () {
    question3Value = 2;
  })
  $("#c3").on("click", function () {
    question3Value = 3;
  });


  //When the User Presses Play, a Function displays the questions
  function startQuiz() {
    // This hides the start screen
    $(".start-button").on("click", function () {
      $(".main-info").addClass("hide");
      $(".question1").removeClass("hide");
    })
  }

  //When the user clicks on the results button, they are redirected to the results html page
  function endQuiz() {
    $(".show-results").on("click", function () {
      if (question1Value === 1) {
        pointTotal[IronmanIndex] += 1;
      } else if (question1Value === 2) {
        pointTotal[HulkIndex] += 1;
      } else if (question1Value === 3) {
        pointTotal[ThorIndex] += 1;
      }

      if (question2Value === 1) {
        pointTotal[ThorIndex] += 1;
      } else if (question2Value === 2) {
        pointTotal[IronmanIndex] += 1;
      } else if (question2Value === 3) {
        pointTotal[HulkIndex] += 1;
      }

      if (question3Value === 1) {
        pointTotal[IronmanIndex] += 1;
      } else if (question3Value === 2) {
        pointTotal[ThorIndex] += 1;
      } else if (question3Value === 3) {
        pointTotal[HulkIndex] += 1;
      }

      if (pointTotal[IronmanIndex] > pointTotal[ThorIndex]) {
        if (pointTotal[IronmanIndex] > pointTotal[HulkIndex]) {
          localStorage.setItem("marvel-match-name", "Iron man");
        }
        else {
          localStorage.setItem("marvel-match-name", "Hulk");
        }
      }
      else if (pointTotal[ThorIndex] > pointTotal[HulkIndex]) {
        localStorage.setItem("marvel-match-name", "Thor");
      }
      else {
        localStorage.setItem("marvel-match-name", "Hulk");
      }

      window.location.replace("results.html");
    })
  }

})
