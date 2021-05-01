import PickerItem from './PickerItem'
import { useState, useEffect } from 'react'
import './Picker.css'

const CountryPicker = () => {
    const [countries, setCountries] = useState([])
    const getCountries = () => {
        fetch('MemberStates.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setCountries(myJson.memberStates)
            });
    }
    useEffect(() => {
        getCountries()
    }, [])

    return (
        <div class= "picker" id="CountryPicker">
            <div className="menu">
                <p className="menu-label">Country</p>
                <ul className="menu-list">
                    {countries.map((entry) => (<PickerItem key={entry.id} name={entry.country} />))}
                </ul>
            </div>
        </div >
    )
}

export default CountryPicker
