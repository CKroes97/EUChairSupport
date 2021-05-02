import React from 'react'
import PickerItem from './PickerItem'
import './Picker.css'

const PickedList = ({ members }) => {
    return (
        <div>
            <div className="picker" id="FactionPicker">
                <h1>Members Present</h1>
                <select size="18">
                    {members.map((entry) => (<PickerItem key={entry.id} name={entry.name} />))}
                </select>
            </div>
        </div>
    )
}

export default PickedList
