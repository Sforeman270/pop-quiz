var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var counter = document.getElementById("counter");
var scoreContainer = document.getElementById("scoreContainer");
var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;













var quizQuestions = [
    {
        question: "What is the event called when it is used to trigger a function when an element is clicked on?",
        choices: ["a.the enter event", "b.the onclick event", "c.the beep event", "d.the button event"],
        answer: "b",
    },
    {
        question: "A callback function is passed as a parameter to another JavaScript function.  Where is the passed function ran?",
        choices: ["a.inside the first function", "b.after the closing curly braces", "c.inside of the function it was passed into", "d.all of the above"],
        answer: "c",
    },
    {
        question: "When an event bubbles, does it?",
        choices: ["a.triggers the event handler if one is set", "b.bubbles up to the object's parent", "c.bubbles up from parent to parent until it is handled", "d. all of the above"],
        answer: "d",
    },
    {
    question: "What information does console.dir() display?",
    choices: ["a.HTML", "b.console.log", "c.values of a key", "d.the DOM"],
    answer: "d",
    },

    {
        question: "The time in setInterval is ran in what interval of time?",
        choices: ["a.miliseconds", "b.minutes", "c.hours", "d.months"],
        answer: "a",
    },

        


function renderQuestion(questionArray) {
  for (var i = 0; i< questionArray.length; i++) {
   
    quizQuestions[i].question);
    
    quizQuestions[i].choices);
  };
},

renderQuestion(quizQuestions)]


function answerIsCorrect() {

}

function answerIsWrong (){

}

function CounterRender() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        count --;

    }else 
     count = 0;
     answerIsWrong();
     if(runningQuestionIndex < lastQuestionIndex) {
         runningQuestionIndex++;
         renderQuestion;
     }else {
         clearInterval(Timer);
         scoreRender();
     }
        
    
}