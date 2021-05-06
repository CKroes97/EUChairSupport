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
import { Routes, Route } from 'react-router-dom'



const BodyColumns = ({ members, chamber, setChamber }) => {
    /*doc contains a lot of duplicated code, needs to be fixed */ 
    /* should also be split over multiple files */

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
    // to reset the sucky timers pass a new passedKey
    const [speakerResetCounter, setSpeakerResetCounter] = useState(1)
    const [totalResetCounter, setTotalResetCounter] = useState(1)

    //reset functions pass new passedKeys, see docs in ReadME for why
    const resetTimers = () => {
        setSpeakerResetCounter(speakerResetCounter + 1)
        setTotalResetCounter(totalResetCounter + 1)
    }
    const resetSpeaker = () => {
        setSpeakerResetCounter(speakerResetCounter + 1)
        console.log(speakerResetCounter)
    }

    //Generate different version based on current debate mode
    const RenderSpeakerList = () => {
        return (
            <div className="columns">
                <div className="column is-one-fifth">
                        <p>Speakers</p>
                        <SpeakerSelector addSpeaker={addSpeaker} members={members} />
                        <SpeakerList speakers={speakers} fastForward={fastForward} setIsRunning={setIsRunning} />
                </div>
                <div className="column">
                    <Timer passedKey={speakerResetCounter} time={speakerTime} isRunning={isRunning} />
                </div>
                <div className="column is-small-width">
                    Control
                    <InputSpeaker setSpeakerTime={setSpeakerTime} />
                    <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers} nextSpeaker={nextSpeaker} />
                </div>
            </div>
        )
    }

    const RenderCTE = () => {
        return (
            <div className="columns">
                <div className="column is-one-fifth">
                    <p>Speakers</p>
                    <FullList members={members} setIsRunning={setIsRunning} setActiveSpeaker={setActiveSpeaker} resetSpeaker={resetSpeaker}></FullList>
                </div>
                <div className="column is-one-third">
                    <Timer passedKey={totalResetCounter} time={totalTime} isRunning={isRunning} />
                </div>
                <div className="column">
                    <Timer passedKey={speakerResetCounter} time={speakerTime} isRunning={isRunning} />
                </div>
                <div className="column is-small-width">
                    Control
                        <InputTotal setTotalTime={setTotalTime} />
                    <InputSpeaker setSpeakerTime={setSpeakerTime} />
                    <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers} nextSpeaker={nextSpeaker} />
                </div>
            </div>
        )
    }

    const RenderOS = () => {
        return (
            <div className="columns">
                <div className="column is-one-fifth">
                    <div>
                        <p>Speakers</p>
                        <FullList members={members} setIsRunning={setIsRunning} setActiveSpeaker={setActiveSpeaker} resetSpeaker={resetSpeaker}></FullList>
                    </div>
                </div>
                <div className="column">
                    <Timer passedKey={speakerResetCounter} time={speakerTime} isRunning={isRunning} />
                </div>
                <div className="column is-small-width">
                    Control
                        <InputSpeaker setSpeakerTime={setSpeakerTime} />
                    <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers} nextSpeaker={nextSpeaker} />
                </div>
            </div>
        )
    }

    const RenderID = () => {
        return (
            <div className="columns">
                <div className="column is-one-fifth" />             
                <div className="column">
                    <Timer passedKey={speakerResetCounter} time={speakerTime} isRunning={isRunning} />
                </div>
                <div className="column is-small-width">
                    Control
                        <InputSpeaker setSpeakerTime={setSpeakerTime} />
                    <ButtonList setIsRunning={setIsRunning} resetTimers={resetTimers} nextSpeaker={nextSpeaker} />
                </div>
            </div>
        )
    }

    return (
        <section>
            <Navbar chamber={chamber} setChamber={setChamber} />
            <div className="hero" id="BodyColumns">
                <Routes>
                    <Route path="/sl" element={<RenderSpeakerList />} />
                    <Route path="/cte" element={<RenderCTE />} />
                    <Route path="/os" element={<RenderOS />} />
                    <Route path="/id" element={<RenderID />} />
                </Routes>
                <h1>{activeSpeaker}</h1>
            </div>
        </section >

    )
}

export default BodyColumns
