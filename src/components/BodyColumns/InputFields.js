import React from 'react'
import './InputFields.css'

const InputFields = () => {
    return (
        <div id="InputFields">
            <h1>Total Time</h1>
            <div className="columns">
                <div className="column">
                    <h4>Minutes</h4>
                    <input type ="text"></input>
                </div>
                <div className="column">
                    <h4>Seconds</h4>
                    <input type ="text"></input>
                </div>
            </div>
            <h1>Speaker Time</h1>
            <div className="columns">
                <div className="column">
                    <h4>Minutes</h4>
                    <input type ="text"></input>
                </div>
                <div className="column">
                    <h4>Seconds</h4>
                    <input type ="text"></input>
                </div>
            </div>
        </div>
    )
}

export default InputFields
