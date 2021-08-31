import React, { Component } from "react"
import './Timer.css'
import 'jquery'
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format";
import TimerMachine from 'react-timer-machine'

momentDurationFormatSetup(moment)

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            seconds: 20,
            started: this.props.isRunning,
            paused: false
        }
        this.name = this.props.name
        this.fullDashArray = 283
        //Bind methods
        this.startTimer = this.startTimer.bind(this)
        this.pauseTimer = this.pauseTimer.bind(this)
        this.resumeTimer = this.resumeTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.tick = this.tick.bind(this)
        this.onTick = this.tick.bind(this)
        this.setCircleDasharray = this.setCircleDasharray.bind(this)
        this.calculateTimeFraction = this.calculateTimeFraction.bind(this)
        console.log(this.props)
    }

    componentDidMount() {
        this.updateDimensions()
        this.forceUpdate()
        this.label = (this.name) + '-timer-label'
        window.addEventListener("resize", this.updateDimensions.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this))
    }

    shouldComponentUpdate(nextProps) {
        console.log(nextProps)
        if (nextProps === this.props) {
            return false
        }
        else { return true }
    }

    componentDidUpdate() {
        const { isRunning, shouldReset } = this.props
        console.log(this.state)
        if (shouldReset === true) {
            this.stopTimer()
            this.props.setReset(false)
        }
        else if (shouldReset === false) {
            if (isRunning === false) {
                this.pauseTimer()
            }
            else if (isRunning === true) {
                this.startTimer()
            }
        }
    }

    // SVG scaling workaround:
    updateDimensions() {
        let update_width = window.innerWidth / 4;
        this.setState({ width: update_width });

    }

    //Add timer methods
    startTimer() {
        this.setState({started: true, paused:false})
        console.log("startTimer")
        console.log(this.state)
    }

    stopTimer() {
        this.setState({started: false, paused: false})
    }

    pauseTimer() {
        this.setState({started: true, paused: true})
    }

    resumeTimer() {
        if (this.internalState !== 2) return;
        window.setTimeout(this.timeoutCallback, this.remaining);
        this.internalState = 3;
    }

    resetTimer() {
        const { seconds } = this.props;
        this.setState({
            seconds: seconds
        });
    }


    tick(time) {
        //Set state so a re-render happens.
        const { seconds } = this.state;

        const sRemaining = time;
        this.setState({
            seconds: sRemaining
        });
        this.onTick();
        console.log(sRemaining)

        //Check if timer completed.
        if
            (sRemaining <= 0) {
            this.stopTimer();
        }
    }

    formatTime(timingToFormat) {
        let minutes = Math.floor(timingToFormat / 60);
        let seconds = timingToFormat % 60;

        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        return minutes + ':' + seconds.toString();
    }

    calculateTimeFraction() {
        const rawTimeFraction = this.remaining / this.seconds;
        return rawTimeFraction - (1 / this.seconds) * (1 - rawTimeFraction);
    }

    setCircleDasharray() {
        const pathRemaining = (this.name) + '-timer-path-remaining'
        if (document.getElementById(pathRemaining)) {
            this.circleDasharray = (
                this.calculateTimeFraction() * this.fullDashArray
            ).toFixed(0).toString() + ' 283';
            document
                .getElementById(pathRemaining)
                .setAttribute("stroke-dasharray", this.circleDasharray);
        }
    }


    onTick(time) {
        if (document.getElementById(this.label) && this.remaining) {
            document.getElementById(this.label).innerHTML = this.formatTime(
                this.remaining
            );
        } else if ((document.getElementById(this.label) && this.seconds)) {
            document.getElementById(this.label).innerHTML = this.formatTime(
                this.state.seconds)
        }
        this.setCircleDasharray();
    }



    render() {
        let width = this.state.width
        const {started, paused, seconds} = this.state
        return (
            <div id={this.name}>
                <span>
                <TimerMachine
            timeStart={seconds * 1000}
            started= {started}
            paused={paused}
            countdown={true}
            interval={1000}
            formatTimer={(time, ms) =>
              moment.duration(ms, "milliseconds").format("h:mm:ss")
            }
            onTick={time =>
              console.info(`time: ${JSON.stringify(time)}`)
            }
            onPause={time =>
              console.info(`Timer paused: ${JSON.stringify(time)}`)
            }
            onResume={time =>
              console.info(`Timer resumed: ${JSON.stringify(time)}`)
            }
            onComplete={time =>
              console.info(`Timer completed: ${JSON.stringify(time)}`)
            }
          />
                </span>
                <div className={this.name + "-timer base-timer"} style={{ width: width }}>
                    <svg className={this.name + "-timer__svg base-timer__svg"} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={width}
                        height={width}>
                        <g className={this.name + "-timer__circle base-timer__circle"}>
                            <circle className={this.name + "-timer__path-elapsed base-timer__path-elapsed"} cx="50" cy="50" r="45"></circle>
                            <path
                                id={this.name + "-timer-path-remaining"}
                                strokeDasharray="283"
                                className={this.name + "-timer__path-remaining base-timer__path-remaining"}
                                d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
                            ></path>
                        </g>
                    </svg>
                    <div id={this.name + "-timer-label"} className={this.name + "-timer__label base-timer__label"} style={{ width: width, height: width }}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer
