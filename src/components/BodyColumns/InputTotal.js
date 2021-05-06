import { useState, useEffect } from 'react'
import './InputFields.css'


const InputTotal = ({setTotalTime}) => {
    //set up variables associated with input fields
    const [totalMinutes, setTotalMinutes] = useState(0)
    const [totalSeconds, setTotalSeconds] = useState(40)
    //set up update to update local states and total states    
    useEffect(() => {
        setTotalTime(parseInt(totalMinutes) * 60 + parseInt(totalSeconds))
    }, [ totalMinutes, totalSeconds, setTotalTime])

    return (
        <div id="InputFields">
            <h1>Total Time</h1>
            <div className="columns">
                <div className="column">
                    <h4>Minutes</h4>
                    <input type="number" value={totalMinutes} onChange={(e) => setTotalMinutes(e.target.value)}></input>
                </div>
                <div className="column">
                    <h4>Seconds</h4>
                    <input type="number" value={totalSeconds} onChange={(e) => setTotalSeconds(e.target.value)}></input>
                </div>
            </div>
        </div>
    )
}

export default InputTotal
