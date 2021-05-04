import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const AvailableSpeaker = ({member, addSpeaker}) => {
    return (
        <a href="#" className="dropdown-item" onClick={(e) => addSpeaker({id:uuidv4() , name: member.name})}>
            {member.name}
        </a>
    )
}

export default AvailableSpeaker
