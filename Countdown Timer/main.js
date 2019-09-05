const displayTime = document.querySelector('.display__time-left');
const displayEnd = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
const custom = document.querySelector('#custom');
let countdown;

function timer(seconds) {
  clearInterval(countdown);
  displayCountdown(seconds);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft <= 0) {
      clearInterval(countdown);
    }
    displayCountdown(secondsLeft);
  }, 1000);
}

function displayCountdown(secondsLeft) {
  let seconds = secondsLeft;
  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  displayTime.innerHTML = `<span>${hours}:${
    minutes <= 10 ? '0' + minutes : minutes
  }:${seconds < 10 ? '0' + seconds : seconds}</span>`;
}

function displayEndTime(timeStamp) {
  const time = new Date(timeStamp);
  const html = `Be back @ ${
    time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
  }:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}`;
  displayEnd.innerHTML = html;
}

function buttonTimer() {
  timer(this.dataset.time);
}

function customTimer(e) {
  e.preventDefault();
  timer(this.minutes.value * 60);
}

buttons.forEach(button => button.addEventListener('click', buttonTimer));
custom.addEventListener('submit', customTimer);
