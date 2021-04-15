import React from 'react'
import './Timer.css'




const FULL_DASH_ARRAY = 283;
const TIME_LIMIT = 40;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;



function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("top-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}

function onTimesUp() {
    clearInterval(timerInterval);
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("top-timer-label").innerHTML = formatTime(
            timeLeft
        );
        setCircleDasharray();

        if (timeLeft === 0) {
            onTimesUp();
        }
    }, 1000);
}



const TotTimer = () => {
    return (
        <div className="top-timer">
            <svg className="top-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="top-timer__circle">
                    <circle className="top-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                    <path id="top-timer-path-remaining" strokeDasharray="283"
                        className="top-timer__path-remaining" d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "></path>
                </g>
            </svg>
            <div id="top-timer-label" className="top-timer__label">{formatTime(timeLeft)}
            </div>
        </div>
    )
}

startTimer();

export default TotTimer
