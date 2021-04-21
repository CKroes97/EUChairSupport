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
    //Skip speakers on double click
    const fastForward = (id) => {
        var index = speakers.map(function(el) {
            return el.id;
          }).indexOf(id);
        setActiveSpeaker(speakers[index].country)
        setSpeakers(speakers.filter((speaker) => speakers.indexOf(speaker) > (index-1)))       
    }

    const [activeSpeaker, setActiveSpeaker] = useState('')
    const nextSpeaker = () =>{
        if (speakers.length > 1){
        setActiveSpeaker(speakers[1].country)
        setSpeakers(speakers.filter((speaker) => speakers.indexOf(speaker) !== (0) ))
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

   //reset functions pass new keys, see docs in ReadME for why
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
                    <SpeakerList speakers={speakers} fastForward={fastForward} />
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
