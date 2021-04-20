import React from 'react'

const AvailableSpeaker = ({member}) => {
    return (
        <a href="#" className="dropdown-item">
            {member.country}
        </a>
    )
}

export default AvailableSpeaker
