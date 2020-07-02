
let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime
let time = dt.getTime();
let seconds = Math.floor((time % (100 * 60 ))/ 1000);

let timex = 0;


let user_time = setInterval(function() {
  if(seconds <59) {
    seconds--;
  } else {
    seconds = 0;
    return;;
  };
 console.log(seconds)
 let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
 document.querySelector("span.time").innerHTML = `$(formatted_sec)`;
}, 1000)




