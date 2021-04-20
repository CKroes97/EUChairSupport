import React from 'react'
import './ButtonList.css'

const ButtonList = () => {
    return (
        <div id="ButtonList">
            <button className="button" >Start</button>
            <button className="button">Stop</button>
            <button className="button">Reset</button>
            <button className="button">Next</button>
            <button className="button">Delete</button>
        </div>
    )
}

export default ButtonList
