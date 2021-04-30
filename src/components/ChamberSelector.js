import React from 'react'
import './ChamberSelector.css'


const ChamberSelector = ({setChamber}) => {
    const setParl = () => {
        setChamber("parl")
    }
    const setCouncil = () => {
        setChamber("council")
    }
    return (
        <div className="hero" id="ChamberSelector">
            <div>
                <button className="button"  onClick={setParl}>
                    Parliament
                </button>
                <button className="button"  onClick={setCouncil}>
                    Council
                </button>
                </div>
        </div>
    )
}

export default ChamberSelector
