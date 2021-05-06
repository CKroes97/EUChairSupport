import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'
import './Controls.css'

const Controls = ({ addMember, removeMember, selectedFaction, selectedCountry, selectedMember, chamber, addAllCountries }) => {
    let navigate = useNavigate()
    const finishPicking = () => {
        navigate('/body/sl')
    }

    const renderAddAll = () =>{
        if(chamber === "council"){
            return(
                <button className="button" onClick={addAllCountries}>Add all</button>
            )
        }
    }

    return (
        <div id="Controls">
            <button className="button" onClick={() => addMember({ id: uuidv4(), name: selectedFaction + " " + selectedCountry })}>
                Add
            </button>
            <button className="button" onClick={() => removeMember()}>
                Remove
            </button>
            {renderAddAll()}
            <button className="button" onClick={finishPicking}>
                Done
            </button>
        </div>
    )
}

export default Controls
