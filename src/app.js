import Navbar from './components/Navbar'
import BodyColumns from './components/BodyColumns'
import { useState, useEffect } from 'react'
import $ from 'jquery';


const App = () => {

    //Initialise speakers list
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

    
    //Delete Speaker
    const deleteSpeaker = (id) => {
        setSpeakers(speakers.filter((speaker) => speaker.id !== id))
    }

    return(
    <section>
        <Navbar />
        <BodyColumns speakers={speakers} onDelete={deleteSpeaker}/>
    </section>
    )
}

export default App