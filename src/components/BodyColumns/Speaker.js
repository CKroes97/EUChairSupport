import React from 'react'
import './Speaker.css'

const speaker = ({speaker, onDelete}) => {
    return (
        <div className='speaker' id='speaker'>
            <h3 onClick={() => onDelete(speaker.id)}>{speaker.name}</h3>
        </div>
    )
}

export default speaker
