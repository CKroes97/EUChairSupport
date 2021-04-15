import './SpeakerList.css'
import Speaker from './Speaker'


const CountryList = ({speakers}) => {
    return (
        <div>
            {speakers.map((entry) => (<Speaker key={entry.id} speaker={entry}/>))}
        </div>
    )
}

export default CountryList
