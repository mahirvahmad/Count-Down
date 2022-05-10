//DOM Elements
let countDownBox = document.querySelector("#countDown");
let welcomeBox = document.querySelector("#welcome");

let daysBox = document.querySelector(".days > h2");
let hoursBox = document.querySelector(".hours > h2");
let minutesBox = document.querySelector(".minutes > h2");
let secondsBox = document.querySelector(".seconds > h2");

//Constatns values
const TARGET = new Date("May 7, 2022 ");

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

//function
function countDown() {
  //console.log("counting");
  let now = new Date();
  let difference = TARGET - now;
  let days = Math.floor(difference / DAY);
  let hours = Math.floor((difference % DAY) / HOUR);
  let minutes = Math.floor((difference % HOUR) / MINUTE);
  let seconds = Math.floor((difference % MINUTE) / SECOND);

  if (difference > 0) {
    handleTimer(days, hours, minutes, seconds);
  } else {
    clearInterval(handleCounter);
    countDownBox.remove();
    welcomeBox.classList.add("fadeInUp");
  }

  console.log(days, hours, minutes, seconds);
}

function handleTimer(days, hours, minutes, seconds) {
  daysBox.innerHTML = String(days).padStart(3, 0);
  hoursBox.innerHTML = String(hours).padStart(3, 0);
  minutesBox.innerHTML = String(minutes).padStart(3, 0);
  secondsBox.innerHTML = String(seconds).padStart(3, 0);
}
let handleCounter = setInterval(countDown, 1000);
countDown();
