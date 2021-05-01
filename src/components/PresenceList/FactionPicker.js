import { useState, useEffect } from 'react'
import PickerItem from './PickerItem'
import './Picker.css'

const FactionPicker = () => {
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

    return (
        <div class= "picker" id="FactionPicker">
            <div className="menu">
                <p className="menu-label">Faction</p>
                <ul className="menu-list">
                    {factions.map((entry) => (<PickerItem key={entry.id} name={entry.faction} />))}
                </ul>
            </div>
        </div>
    )
}

export default FactionPicker
