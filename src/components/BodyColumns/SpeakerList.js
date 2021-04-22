import './SpeakerList.css'
import Speaker from './Speaker'


const CountryList = ({speakers, fastForward, setIsRunning}) => {
    return (
        <div id="SpeakerList">
            {speakers.map((entry) => (<Speaker key={entry.id} speaker={entry} fastForward={fastForward} setIsRunning={setIsRunning}/>))}
        </div>
    )
}

export default CountryList
