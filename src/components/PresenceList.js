import CountryPicker from './PresenceList/CountryPicker'
import FactionPicker from './PresenceList/FactionPicker'
import PickedList from './PresenceList/PickedList'

const PresenceList = () => {
    return (
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
    )
}

export default PresenceList
