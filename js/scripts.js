$(document).ready(function() {
var myQuestions = [
  {
    question: "What is your favorite color?",
    answer: {
      'green',
      'red',
      'blue',
      'yellow',
      'purple',
  }
]  
}
start.addEventListener("click",startQuiz);

// shows progress of quiz and number of questions left

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};