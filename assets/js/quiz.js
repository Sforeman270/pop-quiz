let name = sessionStorage.getItem("name");
// let time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = name;
// document.querySelector(".time").innerHTML = time;


window.onload = function() {
  show(question_count);
};


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

  let user_answer = document.querySelector("li.option.active").innerHTML;

  if(question_count === questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(user_time);
    location.href = "./3index.html";
    return;
  };
  

  if(user_answer == questions[question_count].answer) {
    user_time = time--;
  } else {
    user_time = time-- -15;
    sessionStorage.setItem("time", time);


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
        }
      }
       option[i].classList.add("active");
    };
  };
};

let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time % (100 * 60 ))/ 1000);

let timex = 0;
setInterval(function() {
  if(seconds <59) {
    seconds--;
  }
 time--;
 console.log(seconds)
 document.querySelector(".time").innerHTML = `$(seconds)`;
}, 1000)

 









