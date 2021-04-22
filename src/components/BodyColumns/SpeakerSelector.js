import AvailableSpeaker from './AvailableSpeaker'
import './SpeakerSelector.css'
import { useState, useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa";


const SpeakerSelector = ({addSpeaker, members}) => {
    return (
        <div id="SpeakerSelector">
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Select Speaker</span>
                        <span className="icon is-small">
                            <FaAngleDown />
                        </span>
                    </button>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            {members.map((member) => (<AvailableSpeaker key={member.id} member={member} addSpeaker={addSpeaker}/>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerSelector
