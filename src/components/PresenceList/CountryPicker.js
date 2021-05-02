import PickerItem from './PickerItem'
import { useState, useEffect } from 'react'
import './Picker.css'

const CountryPicker = ({setSelected}) => {
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

    const changeSelect = () =>{
        var selectCountry = document.getElementById("selectCountry");
        setSelected(selectCountry.options[selectCountry.selectedIndex].value)
    }

    return (
        <div className= "picker" id="CountryPicker">
            <h1>Country</h1>
            <select size="18" id="selectCountry" onChange={changeSelect}>
                    {countries.map((entry) => (<PickerItem key={entry.id} name={entry.country} />))}
                </select>
            </div>
    )
}

export default CountryPicker
