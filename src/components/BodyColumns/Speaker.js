import React from 'react'
import './Speaker.css'

const speaker = ({speaker, fastForward, setIsRunning, setActiveSpeaker, resetSpeaker}) => {
    return (
        <div className='speaker' id='speaker'>
            {/* fugly way of checking whether it is in FullList or SpeakerList, organise later */}
            <h3 onDoubleClick={fastForward ? () => {fastForward(speaker.id);setIsRunning(true)} : () => {setActiveSpeaker(speaker.name);setIsRunning(true);resetSpeaker()} }>{speaker.name}</h3>
        </div>
    )
}

export default speaker
