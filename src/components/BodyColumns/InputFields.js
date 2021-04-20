import { useState, useEffect } from 'react'
import './InputFields.css'

const InputFields = ({ setSpeakerTime, setTotalTime }) => {
    //set up variables associated with input fields
    const [speakerMinutes, setSpeakerMinutes] = useState(0)
    const [speakerSeconds, setSpeakerSeconds] = useState(20)
    const [totalMinutes, setTotalMinutes] = useState(0)
    const [totalSeconds, setTotalSeconds] = useState(40)
    //set up update to synchronously update local states and total states
    useEffect(() =>{        
        setSpeakerTime(parseInt(speakerMinutes * 60) + parseInt(speakerSeconds * 1))
        setTotalTime( parseInt(totalMinutes) * 60 + parseInt(totalSeconds))
    }, [speakerMinutes,speakerSeconds,totalMinutes,totalSeconds])


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
            <h1>Speaker Time</h1>
            <div className="columns">
                <div className="column">
                    <h4>Minutes</h4>
                    <input type="number" value={speakerMinutes} onChange={(e) => setSpeakerMinutes(e.target.value)} ></input>
                </div>
                <div className="column">
                    <h4>Seconds</h4>
                    <input type="number" value={speakerSeconds} onChange={(e) => setSpeakerSeconds(e.target.value)}></input>
                </div>
            </div>
        </div>
    )
}

export default InputFields
