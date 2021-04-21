import './SpeakerList.css'
import Speaker from './Speaker'


const CountryList = ({speakers, fastForward}) => {
    return (
        <div id="SpeakerList">
            {speakers.map((entry) => (<Speaker key={entry.id} speaker={entry} fastForward={fastForward}/>))}
        </div>
    )
}

export default CountryList
