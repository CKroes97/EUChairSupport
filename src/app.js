import Navbar from './components/Navbar'
import BodyColumns from './components/BodyColumns'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
    return (
        <Router>
            <section>
                <Navbar />
                <BodyColumns />
            </section>
        </Router>
    )
}

export default App