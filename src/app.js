import Navbar from './components/Navbar'
import BodyColumns from './components/BodyColumns'
import ChamberSelector from './components/ChamberSelector'
import PresenceList from './components/PresenceList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'


const App = () => {
    const [chamber, setChamber] = useState("")
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <ChamberSelector setChamber={setChamber}  />
                </Route>
                <Route path="/presence">
                    <PresenceList />
                </Route>
                <Route>
                    <Navbar chamber={chamber} setChamber={setChamber} />
                    <BodyColumns />
                </Route>
            </Switch>
        </Router>
    )
}

export default App