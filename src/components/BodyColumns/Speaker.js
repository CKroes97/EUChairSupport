import React from 'react'
import './Speaker.css'

const speaker = ({speaker, fastForward}) => {
    return (
        <div className='speaker' id='speaker'>
            <h3 onDoubleClick={() => fastForward(speaker.id)}>{speaker.country}</h3>
        </div>
    )
}

export default speaker
