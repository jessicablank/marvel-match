//Quiz!
//When the User Presses Play, a Function displays the questions
//When the User Selects an answer, a function assigns a point value to each answer
//The points are associated with a character and results are displayed

function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  
    // un-hide questions section
    questionsEl.removeAttribute("class");
    getQuestion();
}

function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
  
    // update title with current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
  
    // clear out any old question choices
    choicesEl.innerHTML = "";
  
    // loop over choices
    currentQuestion.choices.forEach(function (choice, i) {
      // create new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      choiceNode.onclick = questionClick;
  
      // display on the page
      choicesEl.appendChild(choiceNode);
    });
  }
  
  




var questions = [
    {
      title: "How much do you value monetary wealth?:",
      choices: ["A lot", "Some", "Not at all"],
      answers: 
    },
    {
        title: "Where would you ideally like to live?:",
        choices: ["City", "Jungle", "Outer Space"],
        answers: 
      },
      {
        title: "How much do you value status in society?:",
        choices: ["A lot", "Some", "Not at all"],
        answers: 
      }
    ];