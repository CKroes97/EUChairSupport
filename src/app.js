import Navbar from './components/Navbar'
import BodyColumns from './components/BodyColumns'
import { useState } from 'react'

const App = () => {
    const [speakers, setSpeakers] = useState([
        {
            id: 1,
            name: 'Netherlands',
        },
        {
            id: 2,
            name: 'Belgium',
        },
        {
            id: 3,
            name: 'Germany',
        }
    ]
    )
    return(
    <section>
        <Navbar />
        <BodyColumns speakers={speakers} />
    </section>
    )
}

export default App