import { useState, useEffect } from 'react'
import './InputFields.css'

const InputFields = ({ setSpeakerTime }) => {
    //set up variables associated with input fields
    const [speakerMinutes, setSpeakerMinutes] = useState(0)
    const [speakerSeconds, setSpeakerSeconds] = useState(20)
    //set up update to synchronously update local states and total states
    useEffect(() => {
        setSpeakerTime(parseInt(speakerMinutes * 60) + parseInt(speakerSeconds * 1))
    }, [speakerMinutes, speakerSeconds, setSpeakerTime])


    return (
        <div id="InputFields">
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
