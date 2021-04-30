import Navbar from './components/Navbar'
import BodyColumns from './components/BodyColumns'
import ChamberSelector from './components/ChamberSelector'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {useState} from 'react'


const App = () => {
    const [chamber, setChamber] = useState("")
    const renderBody = () => {
        if (chamber === ""){ 
            return <ChamberSelector setChamber={setChamber} />
        } else if (chamber === "parl" || chamber === "council") {
            return <section><Navbar chamber={chamber} setChamber={setChamber}/>
            <BodyColumns /></section>
        }
    }
    return (
        <Router>
            <section>
                {renderBody()}
            </section>
        </Router>
    )
}

export default App