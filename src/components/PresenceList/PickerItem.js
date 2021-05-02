import React from 'react'
import './PickerItem.css'

const PickerItem = ({name}) => {
    return (
        <option id="PickerItem">
            {name}
        </option>
    )
}

export default PickerItem
