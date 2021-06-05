import { useState, useEffect } from 'react'
import './InputFields.css'

const InputFields = ({ setSpeakerTime }) => {
    //set up variables associated with input fields
    const [speakerMinutes, setSpeakerMinutes] = useState(0)
    const [speakerSeconds, setSpeakerSeconds] = useState(20)
    //set up update to synchronously update local states and total states
    useEffect(() => {
       setSpeakerTime(parseInt(speakerMinutes * 60) + parseInt(speakerSeconds))
    }, [speakerMinutes, speakerSeconds])


    return (
        <div id="InputFields">
            <h1>Speaker Time</h1>
            <div className="columns">
                    <div className="column">
                        <h4>Minutes</h4>
                        <input type="number" value={speakerMinutes} onChange={e => setSpeakerMinutes(parseInt(e.target.value))} ></input>
                    </div>
                    <div className="column">
                        <h4>Seconds</h4>
                        <input type="number" value={speakerSeconds} onChange={e => setSpeakerSeconds(parseInt(e.target.value))}></input>
                </div>
            </div>
        </div>
    )
}

export default InputFields
