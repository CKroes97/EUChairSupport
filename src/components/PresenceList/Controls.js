import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'

const Controls = ({ addMember, selectedFaction, selectedCountry }) => {
    let navigate = useNavigate()
    const finishPicking = () => {
        navigate('/body/sl')
    }

    return (
        <div id="Controls">
            <button className="button" onClick={() => addMember({ id: uuidv4(), name: selectedFaction + " " + selectedCountry })}>
                Add
            </button>
            <button className="button" onClick={finishPicking}>
                Done
            </button>
        </div>
    )
}

export default Controls
