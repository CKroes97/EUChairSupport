import Navbar from './components/Navbar'
import BodyColumns from './components/BodyColumns'
import ChamberSelector from './components/ChamberSelector'
import PresenceList from './components/PresenceList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'


const App = () => {
    const [chamber, setChamber] = useState("")
    //initialise array of present speakers
    const [members, setMembers] = useState([])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <ChamberSelector setChamber={setChamber}  />
                </Route>
                <Route path="/presence">
                    <PresenceList members={members} setMembers={setMembers} chamber={chamber}/>
                </Route>
                <Route>
                    <Navbar chamber={chamber} setChamber={setChamber} />
                    <BodyColumns members={members} />
                </Route>
            </Switch>
        </Router>
    )
}

export default App