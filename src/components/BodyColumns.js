import './BodyColumns.css';
import SpeakerList from './BodyColumns/SpeakerList.js'
import ButtonList from './BodyColumns/ButtonList.js'
import InputFields from './BodyColumns/InputFields.js'
import SpeakerSelector from './BodyColumns/SpeakerSelector.js'
import Timer from './BodyColumns/Timer.js'
import { useState, useEffect, React } from 'react'




const BodyColumns = () => {


    //Initialise speakers list
    const [speakers, setSpeakers] = useState([
        {
            id: 1,
            name: 'Netherlands',
        },
        {
            id: 2,
            name: 'Belgium',
        },
        {
            id: 3,
            name: 'Germany',
        }
    ]
    )
    //Delete Speaker
    const deleteSpeaker = (id) => {
        setSpeakers(speakers.filter((speaker) => speaker.id !== id))
    }

   const [speakerTime, setSpeakerTime] = useState(20)
   const [totalTime, setTotalTime] = useState(40)
   const [isRunning, setIsRunning] = useState(false)
   // to reset the sucky timers pass a new key
   const [speakerResetCounter, setSpeakerResetCounter] = useState(0)
   const [totalResetCounter, setTotalResetCounter] = useState(0)
   const resetTimers = () =>{
      setSpeakerResetCounter(speakerResetCounter+1)
      setTotalResetCounter(totalResetCounter+1)
   }

    return (
        <div className="hero" id="BodyColumns">
            <div className="columns">
                <div className="column is-one-fifth">
                    <p>Speakers</p>
                    <SpeakerSelector />
                    {speakers.length > 0 ? <SpeakerList speakers={speakers} onDelete={deleteSpeaker} /> : <h3>"No speakers left"</h3>}
                </div>
                <div className="column is-one-third">
                    <Timer key={totalResetCounter} time={totalTime} isRunning={isRunning} />
                </div>
                <div className="column is-one-third">
                    <Timer key={speakerResetCounter} time={speakerTime} isRunning={isRunning} />
                </div>
                <div className="column">
                    Control
                    <InputFields setSpeakerTime={setSpeakerTime} setTotalTime={setTotalTime} />
                    <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers}/>
                </div>
            </div>
        </div>
    )
}

export default BodyColumns
