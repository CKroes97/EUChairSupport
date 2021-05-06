import './ChamberSelector.css'
import {useNavigate} from 'react-router-dom'


const ChamberSelector = ({ setChamber }) => {
    let navigate = useNavigate()
    const setParl = () => {
        setChamber("parl")
        navigate('/presence')
    }
    const setCouncil = () => {
        setChamber("council")
        navigate('/presence')
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
