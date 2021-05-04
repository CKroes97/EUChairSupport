import BodyColumns from './components/BodyColumns'
import ChamberSelector from './components/ChamberSelector'
import PresenceList from './components/PresenceList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'


const App = () => {
    const [chamber, setChamber] = useState("")
    //initialise array of present speakers
    const [members, setMembers] = useState([])

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <ChamberSelector setChamber={setChamber}/>}>
                </Route>
                <Route path="presence" element={
                    <PresenceList members={members} setMembers={setMembers} chamber={chamber}/>}>
                </Route>
                <Route path="body/*" element={
                     <BodyColumns members={members} chamber={chamber} setChamber={setChamber}/>
                }>
                </Route>
            </Routes>
        </Router>
    )
}

export default App