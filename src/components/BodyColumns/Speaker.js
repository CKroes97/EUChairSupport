import React from 'react'
import './Speaker.css'

const speaker = ({speaker, fastForward, setIsRunning, setActiveSpeaker, resetSpeaker}) => {
    return (
        <div className='speaker' id='speaker'>
            <h3 onDoubleClick={fastForward ? () => {fastForward(speaker.id);setIsRunning(true)} : () => {setActiveSpeaker(speaker.country);setIsRunning(true);resetSpeaker()} }>{speaker.country}</h3>
        </div>
    )
}

export default speaker
