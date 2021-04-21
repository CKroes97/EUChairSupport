import React from 'react'
import './ButtonList.css'

const ButtonList = ({setIsRunning, resetTimers, nextSpeaker}) => {
    return (
        <div id="ButtonList">
            <button className="button" onClick={(e) => setIsRunning(true)}>Start</button>
            <button className="button" onClick={(e) => setIsRunning(false)}>Stop</button>
            <button className="button" onClick={(e) => {resetTimers();setIsRunning(false)}}>Reset</button>
            <button className="button" onClick={(e) => nextSpeaker()}>Next</button>
            <button className="button">Delete</button>
        </div>
    )
}

export default ButtonList
