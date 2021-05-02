import CountryPicker from './PresenceList/CountryPicker'
import FactionPicker from './PresenceList/FactionPicker'
import PickedList from './PresenceList/PickedList'
import Controls from './PresenceList/Controls'
import { useState } from 'react'
import './PresenceList.css'

const PresenceList = ({ members, setMembers, chamber }) => {
    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedFaction, setSelectedFaction] = useState("")
    const [selectedMember, setSelectedMember] = useState("")

    const renderFactionPicker = () => {
        if (chamber === "parl") {
            return <div className="column">
                <FactionPicker setSelected={setSelectedFaction} />
            </div>
        }
    }

    const addMember = (newMember) =>{
        var array = [...members, newMember]
        array = array.sort((a,b) =>{
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
        }
        )
        setMembers(array)
    }

    return (
        <div id="PresenceList">
            <div className="columns">
            	{renderFactionPicker()}
                <div className="column">
                    <CountryPicker setSelected={setSelectedCountry} />
                </div>
                <div className="column is-one-fifth">
                    <Controls addMember={addMember} selectedFaction={selectedFaction} selectedCountry={selectedCountry} />
                </div>
                <div className="column">
                    <PickedList members={members} setSelectedMember={setSelectedMember} />
                </div>
            </div>
        </div>
    )
}

export default PresenceList
