import React from 'react'
import PickerItem from './PickerItem'
import './Picker.css'

const PickedList = ({ members, setSelectedMember }) => {
    const changeSelect = () => {
        var selectMember = document.getElementById("selectMember");
        setSelectedMember(selectMember.options[selectMember.selectedIndex].value)
    }
    return (
        <div className="picker" id="MemberPicker">
            <h1>Members Present</h1>
            <select size="18" id="selectMember" onChange={changeSelect}>
                {members.map((entry) => (<PickerItem key={entry.id} name={entry.name} />))}
            </select>
        </div>
    )
}

export default PickedList
