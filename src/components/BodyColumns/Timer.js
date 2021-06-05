import React, { Component } from "react"
import './Timer.css'
import 'jquery'

export class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            fullDashArray: 283,
            timeLimit: this.props.timings,
            name: this.props.name,
            timerInterval: 0,
        }
        //Bind methods
        this.startTimer = this.startTimer.bind(this)
        this.formatTime = this.formatTime.bind(this)
        this.setCircleDasharray = this.setCircleDasharray.bind(this)
        this.calculateTimeFraction = this.calculateTimeFraction.bind(this)
        this.startTimer()
    }

    //Used timer sucks terribly, above a workaround for scaling

    updateDimensions() {
        let update_width = window.innerWidth / 4;
        this.setState({ width: update_width });

    }

    /**
    * Add event listener
    */
    componentDidMount() {
        this.updateDimensions()
        this.label = (this.state.name) + '-timer-label'
        window.addEventListener("resize", this.updateDimensions.bind(this))
        // document.getElementById(this.label).innerHTML = this.formatTime(
        // )
        // console.log(this.state.timeLimit)
    }


    /**
     * Remove event listener
     */
    componentWillUnmount() {
        clearInterval(this.state.timerInterval)
        window.removeEventListener("resize", this.updateDimensions.bind(this))
    }



    //Add timer methods
    formatTime(timingToFormat) {
        let minutes = Math.floor(timingToFormat / 60);
        let seconds = timingToFormat % 60;

        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        return minutes + ':' + seconds.toString();
    }

    calculateTimeFraction() {
        const rawTimeFraction = this.state.timeLeft / this.state.timeLimit;
        return rawTimeFraction - (1 / this.state.timeLimit) * (1 - rawTimeFraction);
    }

    setCircleDasharray() {
        const pathRemaining = (this.state.name) + '-timer-path-remaining'
        if (document.getElementById(pathRemaining)) {
            this.circleDasharray = (
                this.calculateTimeFraction() * this.state.fullDashArray
            ).toFixed(0).toString() + ' 283';
            document
                .getElementById(pathRemaining)
                .setAttribute("stroke-dasharray", this.circleDasharray);
        }
    }



    startTimer() {
        console.log(this.props.isRunning)
            let timePassed = 0
            this.timerInterval = setInterval(() => {
                if (this.props.isRunning === true) {
                timePassed = timePassed + 1
                this.setState(() => ({
                    timeLeft: this.state.timeLimit - timePassed,
                    timerInterval: this.timerInterval
                }))}
            }, 1000);
        }
    

    componentDidUpdate() {
        this.label = (this.state.name) + '-timer-label'
        if (document.getElementById(this.label) && this.state.timeLeft) {
            document.getElementById(this.label).innerHTML = this.formatTime(
                this.state.timeLeft
            );
        } else if ((document.getElementById(this.label) && this.state.timeLimit)) {
            document.getElementById(this.label).innerHTML = this.formatTime(
                this.state.timeLimit)
        }
        this.setCircleDasharray();
        if (this.state.timeLeft === 0) {
            clearInterval(this.timerInterval)
        }
    }

    render() {
        let width = this.state.width
        return (
            <div id={this.state.name}>
                <div className={this.state.name + "-timer base-timer"} style={{ width: width }}>
                    <svg className={this.state.name + "-timer__svg base-timer__svg"} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={width}
                        height={width}>
                        <g className={this.state.name + "-timer__circle base-timer__circle"}>
                            <circle className={this.state.name + "-timer__path-elapsed base-timer__path-elapsed"} cx="50" cy="50" r="45"></circle>
                            <path
                                id={this.state.name + "-timer-path-remaining"}
                                strokeDasharray="283"
                                className={this.state.name + "-timer__path-remaining base-timer__path-remaining"}
                                d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
                            ></path>
                        </g>
                    </svg>
                    <div id={this.state.name + "-timer-label"} className={this.state.name + "-timer__label base-timer__label"} style={{ width: width, height: width }}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer
