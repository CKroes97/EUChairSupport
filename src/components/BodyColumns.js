import './BodyColumns.css';
import SpeakerList from './SpeakerList.js'

const BodyColumns = ({speakers}) => {
    return (
        <div className="hero" id="BodyColumns">
            <div className="columns">
                <div className="column">
                    <p>Speakers</p>
                    <SpeakerList speakers={speakers} />
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
