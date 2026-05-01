
let countdown;
function setAlarm() {
clearInterval(countdown);
const inputField = document.getElementById("alarmSet");
const timeRemainingHeading = document.getElementById("timeRemaining");
let totalSeconds = parseInt(inputField.value);
if (isNaN(totalSeconds)) return;
function updateDisplay(secondsLeft) {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    
    timeRemainingHeading.innerText = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
    updateDisplay(totalSeconds);
  }
   countdown = setInterval(() => {
    totalSeconds--;
    
    if (totalSeconds > 0) {
      updateDisplay(totalSeconds);
    }

    if (totalSeconds === 0) {
      playAlarm();
      clearInterval(countdown);
      updateDisplay(totalSeconds);
    }
  }, 1000);
}
window.setAlarm = setAlarm; 

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
