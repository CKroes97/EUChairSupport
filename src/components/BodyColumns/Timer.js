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
            seconds: 20
        }
        this.name = this.props.name
        this.fullDashArray = 283
        this.internalState = 0 //  0 = idle, 1 = running, 2 = paused
        this.remaining = 0
        this.startTime = 0
        this.timer = 0
        //Bind methods
        this.startTimer = this.startTimer.bind(this)
        this.pauseTimer = this.pauseTimer.bind(this)
        this.resumeTimer = this.resumeTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.tick = this.tick.bind(this)
        this.onTick = this.tick.bind(this)
        this.formatTime = this.formatTime.bind(this)
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
        this.stopTimer()
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
        if (shouldReset === true) {
            this.stopTimer()
            this.props.setReset(false)
        }
        else if (shouldReset === false) {
            if (this.internalState === 0) {
                this.resetTimer();
                this.startTimer();
            }
            else if (isRunning === false) {
                this.pauseTimer()
            }
            else if (isRunning === true) {
                this.resumeTimer()
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
        this.startTime = new Date();
        // if (this.timer === 0) {
        //     this.timer = setInterval(this.tick, 1000)
        //     console.log("interval triggered")
        // }
        this.internalState = 1;
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = 0;
        this.internalState = 0;
    }

    pauseTimer() {
        if (this.internalState !== 1) return;
        this.remaining = (1000 - (new Date() - this.startTime)) / 1000;
        clearInterval(this.timer);
        this.internalState = 2;
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


    tick() {
        //Set state so a re-render happens.
        const { seconds } = this.state;

        const sRemaining = seconds - 1;
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


    onTick() {
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
        return (
            <div id={this.name}>
                <span>
                <TimerMachine
            timeStart={60 * 1000}
            started={true}
            paused={false}
            countdown={true}
            interval={1000}
            formatTimer={(time, ms) =>
              moment.duration(ms, "milliseconds").format("h:mm:ss")
            }
            onStart={time =>
              console.info(`Timer started: ${JSON.stringify(time)}`)
            }
            onStop={time =>
              console.info(`Timer stopped: ${JSON.stringify(time)}`)
            }
            onTick={time =>
              console.info(`Timer ticked: ${JSON.stringify(time)}`)
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
