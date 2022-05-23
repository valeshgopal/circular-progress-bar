"use strict";
const progress = document.querySelector(".progress");
const number = document.querySelector(".number");
const text = document.querySelector("p");

let count = 0;
let endValue = 100;

setInterval(() => {
  if (count == endValue) {
    clearInterval();
    text.textContent = "Upload Complete!";
  } else {
    count += 1;
    number.innerHTML = `${count}%`;
    progress.style.background = `conic-gradient(
            #4d5bf9 ${count * 3.6}deg,
            #cadcff ${count * 3.6}deg)`;
  }
}, 50);
