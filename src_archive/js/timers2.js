console.log("👋 This message is being logged by 'timers2.js', included via webpack"); // Just to make sure when I start the app that the file has been correctly handled by Webpack;

// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;


const COLOR_CODES = {
  info: {
    color: "green"
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;


startTimer();
setTimeout(function(){
  setTransition();
},10);

function setTransition(){
  document.getElementById("base-timer2-path-remaining")
  .setAttribute("style", "transition: 1s linear all" )
}

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer2-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}


function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer2-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
