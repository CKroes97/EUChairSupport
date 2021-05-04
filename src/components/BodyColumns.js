import './BodyColumns.css';
import SpeakerList from './BodyColumns/SpeakerList.js'
import FullList from './BodyColumns/FullList.js'
import ButtonList from './BodyColumns/ButtonList.js'
import InputSpeaker from './BodyColumns/InputSpeaker.js'
import InputTotal from './BodyColumns/InputTotal.js'
import SpeakerSelector from './BodyColumns/SpeakerSelector.js'
import Timer from './BodyColumns/Timer.js'
import Navbar from './BodyColumns/Navbar'
import { useState, React } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

const BodyColumns = ({ members, chamber, setChamber }) => {

    //Initialise speakers list
    const [speakers, setSpeakers] = useState([])
    //add a speaker to the speaker's list
    const addSpeaker = (pers) => {
        setSpeakers([...speakers, pers])
    }
    //Skip speakers on double click
    const fastForward = (id) => {
        var index = speakers.map(function (el) {
            return el.id;
        }).indexOf(id);
        setActiveSpeaker(speakers[index].name)
        setSpeakers(speakers.filter((speaker) => speakers.indexOf(speaker) > (index - 1)))
    }

    const [activeSpeaker, setActiveSpeaker] = useState('')
    const nextSpeaker = () => {
        if (speakers.length > 1) {
            setActiveSpeaker(speakers[1].name)
            setSpeakers(speakers.filter((speaker) => speakers.indexOf(speaker) !== (0)))
            resetSpeaker()
        }
    }




    //initialise times
    const [speakerTime, setSpeakerTime] = useState(20)
    const [totalTime, setTotalTime] = useState(40)
    //initialise isrunning tag
    const [isRunning, setIsRunning] = useState(false)
    // to reset the sucky timers pass a new key
    const [speakerResetCounter, setSpeakerResetCounter] = useState(0)
    const [totalResetCounter, setTotalResetCounter] = useState(0)

    //reset functions pass new keys, see docs in ReadME for why
    const resetTimers = () => {
        setSpeakerResetCounter(speakerResetCounter + 1)
        setTotalResetCounter(totalResetCounter + 1)
    }
    const resetSpeaker = () => {
        setSpeakerResetCounter(speakerResetCounter + 1)
    }

    const RenderSpeakerList = () => {
        return(
        <div className="hero" id="BodyColumns">
            <div className="columns">
                <div className="column is-one-fifth">
                    <div>
                        <p>Speakers</p>
                        <SpeakerSelector addSpeaker={addSpeaker} members={members} />
                        <SpeakerList speakers={speakers} fastForward={fastForward} setIsRunning={setIsRunning} />
                    </div>
                </div>
                <div className="column">
                    <Timer key={speakerResetCounter} time={speakerTime} isRunning={isRunning} />
                </div>
                <div className="column is-small-width">
                    Control
                    <InputSpeaker setSpeakerTime={setSpeakerTime} />
                    <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers} nextSpeaker={nextSpeaker} />
                </div>
            </div>
            <h1>{activeSpeaker}</h1>
        </div>
        )
    }

    const RenderCTE = () => {
        return(
        <div className="hero" id="BodyColumns">
            <div className="columns">
                <div className="column is-one-fifth">
                    <div>
                        <p>Speakers</p>
                        <FullList members={members} setIsRunning={setIsRunning} setActiveSpeaker={setActiveSpeaker} resetSpeaker={resetSpeaker}></FullList>
                    </div>
                </div>
                <div className="column is-one-third">
                    <Timer key={totalResetCounter} time={totalTime} isRunning={isRunning} />
                </div>
                <div className="column">
                    <Timer key={speakerResetCounter} time={speakerTime} isRunning={isRunning} />
                </div>
                <div className="column is-small-width">
                    Control
                        <InputTotal setTotalTime={setTotalTime} />
                    <InputSpeaker setSpeakerTime={setSpeakerTime} />
                    <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers} nextSpeaker={nextSpeaker} />
                </div>
            </div>
            <h1>{activeSpeaker}</h1>
        </div>
        )
    }

    const RenderOS = () =>{
        return(
        <div className="hero" id="BodyColumns">
                <div className="columns">
                    <div className="column is-one-fifth">
                            <div>
                                <p>Speakers</p>
                                <FullList members={members} setIsRunning={setIsRunning} setActiveSpeaker={setActiveSpeaker} resetSpeaker={resetSpeaker}></FullList>
                            </div>
                    </div>
                    <div className="column">
                        <Timer key={speakerResetCounter} time={speakerTime} isRunning={isRunning} />
                    </div>
                    <div className="column is-small-width">
                        Control
                        <InputSpeaker setSpeakerTime={setSpeakerTime} />
                        <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers} nextSpeaker={nextSpeaker} />
                    </div>
                </div>
                <h1>{activeSpeaker}</h1>
            </div>
        )
    }

    const RenderID = () =>{
        return(
            <div className="hero" id="BodyColumns">
                <div className="columns">
                    <div className="column is-one-fifth">
                    </div>
                    <div className="column">
                        <Timer key={speakerResetCounter} time={speakerTime} isRunning={isRunning} />
                    </div>
                    <div className="column is-small-width">
                        Control
                        <InputSpeaker setSpeakerTime={setSpeakerTime} />
                        <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers} nextSpeaker={nextSpeaker} />
                    </div>
                </div>
                <h1>{activeSpeaker}</h1>
            </div>
        )
    }

    return (
        <section>
            <Navbar chamber={chamber} setChamber={setChamber} />
            <Routes>
            <Route path="sl" element={<RenderSpeakerList />} />
            <Route path="cte" element={<RenderCTE />} />
            <Route path="os" element={<RenderOS />} />
            <Route path="id" element={<RenderID />} />
            </Routes>
        </section>

    )
}

export default BodyColumns
