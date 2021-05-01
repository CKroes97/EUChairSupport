import CountryPicker from './PresenceList/CountryPicker'
import FactionPicker from './PresenceList/FactionPicker'
import PickedList from './PresenceList/PickedList'
import './PresenceList.css'

const PresenceList = () => {
    return (
        <div id="PresenceList">
            <div className="columns">
                <div className="column">
                    <CountryPicker />
                </div>
                <div className="column">
                    <FactionPicker />
                </div>
                <div className="column">
                    <PickedList />
                </div>
            </div>
        </div>
    )
}

export default PresenceList
