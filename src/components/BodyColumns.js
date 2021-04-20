import './BodyColumns.css';
import SpeakerList from './BodyColumns/SpeakerList.js'
import SpeakerTimer from './BodyColumns/SpeakerTimer.js'
import TotTimer from './BodyColumns/TotTimer.js'
import ButtonList from './BodyColumns/ButtonList.js'
import InputFields from './BodyColumns/InputFields.js'
import SpeakerSelector from './BodyColumns/SpeakerSelector.js'
import { useState, React } from 'react'




const BodyColumns = () => {


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

   const [speakerTime, setSpeakerTime] = useState(20)
   const [totalTime, setTotalTime] = useState(20)


    return (
        <div className="hero" id="BodyColumns">
            <div className="columns">
                <div className="column is-one-fifth">
                    <p>Speakers</p>
                    <SpeakerSelector />
                    {speakers.length > 0 ? <SpeakerList speakers={speakers} onDelete={deleteSpeaker} /> : <h3>"No speakers left"</h3>}
                </div>
                <div className="column is-one-third">
                    <TotTimer totalTime={totalTime} />
                </div>
                <div className="column is-one-third">
                    <SpeakerTimer speakerTime={speakerTime} />
                </div>
                <div className="column">
                    Control
                    <InputFields setSpeakerTime={setSpeakerTime} setTotalTime={setTotalTime} />
                    <h1>{totalTime}</h1>
                    <ButtonList />
                </div>
            </div>
        </div>
    )
}

export default BodyColumns
