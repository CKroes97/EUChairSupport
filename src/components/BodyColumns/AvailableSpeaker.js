import React from 'react'

const AvailableSpeaker = ({member}) => {
    console.log(member)
    return (
        <a href="#" className="dropdown-item">
            {member.country}
        </a>
    )
}

export default AvailableSpeaker
