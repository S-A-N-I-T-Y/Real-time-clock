"use strict";

//Get the time elements
let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
let timeBtn = document.getElementById("time-btn");

// To get time and update it
let getTime = () => {
  let currentHour = new Date().getHours();
  console.log(currentHour);
  let currentMinute = new Date().getMinutes();
  console.log(currentMinute);
  let currentSeconds = new Date().getSeconds();
  console.log(currentSeconds);

  hours.innerHTML = currentHour;
  minutes.innerHTML = currentMinute;
  seconds.innerHTML = currentSeconds;
};

timeBtn.addEventListener("click", getTime);
