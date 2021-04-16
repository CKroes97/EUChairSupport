import './BodyColumns.css';
import SpeakerList from './SpeakerList.js'
import SpeakerTimer from './SpeakerTimer.js'
import TotTimer from './TotTimer.js'
import ButtonList from './ButtonList.js'
import InputFields from './InputFields.js'
import SpeakerSelector from './SpeakerSelector.js'

const BodyColumns = ({speakers, onDelete}) => {
    return (
        <div className="hero" id="BodyColumns">
            <div className="columns">
                <div className="column is-one-fifth"> 
                    <p>Speakers</p>
                    <SpeakerSelector />
                    {speakers.length > 0 ? <SpeakerList speakers={speakers} onDelete={onDelete}/> : <h3>"No speakers left"</h3>}
                </div>
                <div className="column is-one-third">
                    <TotTimer />
                </div>
                <div className="column is-one-third">
                    <SpeakerTimer />
                </div>
                <div className="column">
                    Control
                    <InputFields />
                    <ButtonList />
                </div>
            </div>
        </div>
    )
}

export default BodyColumns
