import { useState, useEffect } from 'react'
import PickerItem from './PickerItem'
import './Picker.css'

const FactionPicker = ({setSelected}) => {
    const [factions, setFactions] = useState([])
    const getFactions = () => {
        fetch('EPFactions.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setFactions(myJson.factions)
            });
    }
    useEffect(() => {
        getFactions()
    }, [])

    const changeSelect = () =>{
        var selectFaction = document.getElementById("selectFaction");
        setSelected(selectFaction.options[selectFaction.selectedIndex].value)
    }

    return (
        <div class="picker" id="FactionPicker">
            <h1>Faction</h1>
            <select id="selectFaction" size="18" onChange={changeSelect}>
                {factions.map((entry) => (<PickerItem key={entry.id} name={entry.faction} />))}
            </select>
        </div>
    )
}

export default FactionPicker
