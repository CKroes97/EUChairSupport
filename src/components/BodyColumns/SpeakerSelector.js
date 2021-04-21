import AvailableSpeaker from './AvailableSpeaker'
import './SpeakerSelector.css'
import { useState, useEffect } from 'react'


const SpeakerSelector = ({addSpeaker}) => {
    const [memberStates, setMemberStates] = useState([])

    const getMemberStates = () => {
        fetch('MemberStates.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setMemberStates(myJson.memberStates)
            });
    }
    useEffect(() => {
        getMemberStates()
    }, [])

    return (
        <div id="SpeakerSelector">
            <div className="dropdown is-info is-hoverable">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Select Speaker</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            {memberStates.map((member) => (<AvailableSpeaker key={member.id} member={member} addSpeaker={addSpeaker}/>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerSelector
