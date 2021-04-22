import React from 'react'
import './Speaker.css'

const speaker = ({speaker, fastForward, setIsRunning}) => {
    return (
        <div className='speaker' id='speaker'>
            <h3 onDoubleClick={() => {fastForward(speaker.id);setIsRunning(true)}}>{speaker.country}</h3>
        </div>
    )
}

export default speaker
