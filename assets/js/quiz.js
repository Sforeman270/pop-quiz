timerInterval = setInterval(startTime(), 1000);
let question_count = 0;
let points = 50;

let time = 60;
const quiz = document.querySelector(".quiz");
const reward = document.querySelector(".reward")

const user_name = document.getElementById("userName", name);
const user_time = localStorage.setItem("time",time);
const user_points = localStorage.setItem("points",points)

const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");
finalScore.innerText = mostRecentScore;
const MAX_HIGH_SCORES = 50;

window.onload = function () {
  show(0);

}


let questions = [
  {
    id: 1,
    question: "What is the event called when it is used to trigger a function when an element is clicked on?",
    options: ["a.the enter event", "b.the onclick event", "c.the beep event", "d.the button event"],
    answer: "b",
  },
  {
    id: 2,
    question: "A callback function is passed as a parameter to another JavaScript function.  Where is the passed function ran?",
    options: ["a.inside the first function", "b.after the closing curly braces", "c.inside of the function it was passed into", "d.all of the above"],
    answer: "c",
  },
  {
    id: 3,
    question: "When an event bubbles, does it?",
    options: ["a.triggers the event handler if one is set", "b.bubbles up to the object's parent", "c.bubbles up from parent to parent until it is handled", "d. all of the above"],
    answer: "d",
  },
  {
    id: 4,
    question: "What information does console.dir() display?",
    options: ["a.HTML", "b.console.log", "c.values of a key", "d.the DOM"],
    answer: "c",
  },

  {
    id: 5,
    question: "The time in setInterval is ran in what interval of time?",
    options: ["a.miliseconds", "b.minutes", "c.hours", "d.months"],
    answer: "a",
  }];




function submitForm(event) {

  event.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;

  document.querySelector(".name").innerHTML = name;
  const welcomeForm = document.querySelector(".welcome_text");
  welcomeForm.style.display = "none";
  
  startTime();
  quiz.style.display = "grid";

quiz.style.display = "block";

  


};


function showQuestion() {

}


function next() {

  let user_answer = document.querySelector('li.option.active').innerHTML;


  if (user_answer === questions[question_count].answer) {

    points = points + 10;
    document.querySelector(".point").innerHTML = points;

  } else {
    time -= 10;
    localStorage.setItem("points", points);

    ;

    if (question_count === questions.length - 1) {
      endGame();
      clearInterval(timerInterval);
    };


  }
  if (question_count < 4) {
    show(question_count);
    question_count++;
  }


};

function show(count) {
  let question = document.getElementById("questions");
  let [a, b, c, d] = questions[count].options;



  if (question !== null) {
    question.innerHTML = `
  <h2>Q${count + 1}.${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${a}</li>
  <li class="option">${b}</li>
  <li class="option">${c}</li>
  <li class="option">${d}</li>
</ul> 
  `;
  };
  console.log(question)
  toggleActive();
};


function toggleActive() {
  let option = document.querySelectorAll("li.option");


  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {

      for (let j = 0; j < option.length; j++) {

        if (option[i].classList.contains("active")) {
          endGame();
          option[j].classList.remove("active");


        };
      };

      option[i].classList.add("active");
    };

  };

};

function startTime() {
  let timeLeft = document.getElementById("timeLeft");
  if (timeLeft === null) {
    clearInterval(timerInterval);
    return;
  }
  var timerInterval = setInterval(function () {
    time--;
    timeLeft.innerHTML = time;
    console.log(time);

    document.querySelector(".time").innerHTML = time;

    if (time <= 0) {
      clearInterval(timerInterval)
      endGame();

    }

  }, 1000);


}


function endGame() {
  
 quiz.style.display = "none";
  reward.style.display = "block";
  localStorage.setItem('time', time);
  localStorage.setItem('points', points);


  
};

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);



saveHighScore = event => {
  event.preventDefault();

const score = {

  score: Math.floor(Math.random() * 100),
  name: userName.value
};
highScores.push(score);

highScores.sort( (a,b) => b.score - a.score);

highScores.splice(3);
console.log(highScores);
};





