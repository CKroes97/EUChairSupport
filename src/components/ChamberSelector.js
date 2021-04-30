import './ChamberSelector.css'
import {useHistory} from 'react-router-dom'


const ChamberSelector = ({ setChamber }) => {
    const history = useHistory()
    const setParl = () => {
        setChamber("parl")
        history.push('/presence')
    }
    const setCouncil = () => {
        setChamber("council")
        history.push('/presence')
    }
    return (
        <div className="hero" id="ChamberSelector">
            <div>
                <button className="button" onClick={setParl}>
                    Parliament
                </button>
                <button className="button" onClick={setCouncil}>
                    Council
                </button>
            </div>
        </div>
    )
}

export default ChamberSelector
