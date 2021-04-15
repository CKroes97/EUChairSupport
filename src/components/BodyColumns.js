import './BodyColumns.css';
import SpeakerList from './SpeakerList.js'

const BodyColumns = ({speakers, onDelete}) => {
    return (
        <div className="hero" id="BodyColumns">
            <div className="columns">
                <div className="column"> 
                    <p>Speakers</p>
                    {speakers.length > 0 ? <SpeakerList speakers={speakers} onDelete={onDelete}/> : <h3>"No speakers left"</h3>}
                </div>
                <div className="column is-one-third">
                    Timer one
                </div>
                <div className="column is-one-third">
                    Timer two
                </div>
                <div className="column">
                    Control
                </div>
            </div>
        </div>
    )
}

export default BodyColumns
