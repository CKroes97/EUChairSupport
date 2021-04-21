import React from 'react'
import './ButtonList.css'

const ButtonList = ({setIsRunning, resetTimers}) => {
    return (
        <div id="ButtonList">
            <button className="button" onClick={(e) => setIsRunning(true)}>Start</button>
            <button className="button" onClick={(e) => setIsRunning(false)}>Stop</button>
            <button className="button" onClick={(e) => {resetTimers();setIsRunning(false)}}>Reset</button>
            <button className="button">Next</button>
            <button className="button">Delete</button>
        </div>
    )
}

export default ButtonList
