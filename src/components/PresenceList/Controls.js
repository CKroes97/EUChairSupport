import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Controls = ({addMember, selectedFaction, selectedCountry}) => {


    return (
        <div id="Controls">
            <button className="button" onClick={() => addMember({id:uuidv4() , name: selectedFaction + " " + selectedCountry})}>
                Add
            </button>
        </div>
    )
}

export default Controls
