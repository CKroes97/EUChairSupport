import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const AvailableSpeaker = ({member, addSpeaker}) => {
    return (
        <a href="#" className="dropdown-item" onClick={(e) => addSpeaker({id:uuidv4() , country: member.country})}>
            {member.country}
        </a>
    )
}

export default AvailableSpeaker
