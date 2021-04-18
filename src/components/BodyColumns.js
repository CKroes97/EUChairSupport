import './BodyColumns.css';
import SpeakerList from './BodyColumns/SpeakerList.js'
import SpeakerTimer from './BodyColumns/SpeakerTimer.js'
import TotTimer from './BodyColumns/TotTimer.js'
import ButtonList from './BodyColumns/ButtonList.js'
import InputFields from './BodyColumns/InputFields.js'
import SpeakerSelector from './BodyColumns/SpeakerSelector.js'

    //Initialise speakers list
    const [speakers, setSpeakers] = useState([
        {
            id: 1,
            name: 'Netherlands',
        },
        {
            id: 2,
            name: 'Belgium',
        },
        {
            id: 3,
            name: 'Germany',
        }
    ]
    )

    
    //Delete Speaker
    const deleteSpeaker = (id) => {
        setSpeakers(speakers.filter((speaker) => speaker.id !== id))
    }

const BodyColumns = ({onDelete}) => {
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
