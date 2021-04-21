import './BodyColumns.css';
import SpeakerList from './BodyColumns/SpeakerList.js'
import ButtonList from './BodyColumns/ButtonList.js'
import InputFields from './BodyColumns/InputFields.js'
import SpeakerSelector from './BodyColumns/SpeakerSelector.js'
import Timer from './BodyColumns/Timer.js'
import { useState, useEffect, React } from 'react'




const BodyColumns = () => {


    //Initialise speakers list
    const [speakers, setSpeakers] = useState([])
    //add a speaker to the speaker's list
    const addSpeaker = (pers) =>{
        setSpeakers([...speakers, pers])
    }
    //Delete Speaker
    const deleteSpeaker = (id) => {
        setSpeakers(speakers.filter((speaker) => speaker.id !== id))
    }

    const [activeSpeaker, setActiveSpeaker] = useState('')
    const nextSpeaker = () =>{
        if (speakers.length >=1){
        setActiveSpeaker(speakers.pop(0).country)
        resetSpeaker()
        }
    }

    //initialise times
   const [speakerTime, setSpeakerTime] = useState(20)
   const [totalTime, setTotalTime] = useState(40)
   //initialise isrunning tag
   const [isRunning, setIsRunning] = useState(false)
   // to reset the sucky timers pass a new key
   const [speakerResetCounter, setSpeakerResetCounter] = useState(0)
   const [totalResetCounter, setTotalResetCounter] = useState(0)
   const resetTimers = () =>{
      setSpeakerResetCounter(speakerResetCounter+1)
      setTotalResetCounter(totalResetCounter+1)
   }
   const resetSpeaker = () =>{
    setSpeakerResetCounter(speakerResetCounter+1)
   }

    return (
        <div className="hero" id="BodyColumns">
            <div className="columns">
                <div className="column is-one-fifth">
                    <p>Speakers</p>
                    <SpeakerSelector addSpeaker={addSpeaker} />
                    <SpeakerList speakers={speakers} onDelete={deleteSpeaker} />
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
                    <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers} nextSpeaker={nextSpeaker}/>
                </div>
            </div>
            <h1>{activeSpeaker}</h1>
        </div>
    )
}

export default BodyColumns
