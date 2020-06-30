
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
    answer: "d",
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

  sessionStorage.setItem("name", name);

  location.href = "./2index.html";

};


let question_count = 0;

function next() {
  if (question_count === question.length - 1) {
    location.href = "../3index.html";
    return;
  }
  let user_answer = document.querySelector("li.option.active").innerHTML;

  if (user_answer === questions[question_count].answer) {
    timeLeft++;
  } else {
    timeLeft = timeLeft - 15;
    sessionStorage.setItem("time-left", time - left);
  }
  question_count++;
  show(question_count);

};

function show(count) {
  let question = document.getElementById("questions");
  let [a, b, c, d] = questions[count].options;

  // question.innerHTML = "<h2>" + questions[count].question + "</h2>";

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${a}</li>
  <li class="option">${b}</li>
  <li class="option">${c}</li>
  <li class="option">${d}</li>
</ul> 
  `;
  toggleActive();
};


function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        };
      };
      option[i].classList.add("active");
    };
  };
};

startBtn.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left');
  const startBtn = document.querySelector('#start-button');
  timeLeft = 60;

})

function countDown() {
  setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timeLeft = 0)
    }
    timeLeftDisplay.innerHTML = timeLeft
    timeLeft -= 1
  }, 1000)

};
 
let user_name = sessionStorage.getItem("name");
let time = sessionStorage.getItem("time");
document.querySelector("name").innerHTML = 'name';
document.querySelector("time").innerHTML = 'time';




startBtn.addEventListener("submit", countDown)
















