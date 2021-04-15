import React from 'react'
import './Speaker.css'

const speaker = ({speaker}) => {
    return (
        <div className='speaker'>
            <h3>{speaker.name}</h3>
        </div>
    )
}

export default speaker
