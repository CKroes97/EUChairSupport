import './SpeakerList.css'
import Speaker from './Speaker'


const CountryList = ({speakers, onDelete}) => {
    return (
        <div>
            {speakers.map((entry) => (<Speaker key={entry.id} speaker={entry} onDelete={onDelete}/>))}
        </div>
    )
}

export default CountryList
