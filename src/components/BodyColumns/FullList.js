import React from 'react'
import Speaker from './Speaker.js'

const FullList = ({members, setIsRunning, setActiveSpeaker, resetSpeaker}) => {
    return (
        <div id="SpeakerList">
            {members.map((entry) => (<Speaker key={entry.id} speaker={entry} setIsRunning={setIsRunning} setActiveSpeaker={setActiveSpeaker} resetSpeaker={resetSpeaker}/>))}
        </div>
    )
}

export default FullList
