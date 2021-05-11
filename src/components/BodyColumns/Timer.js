import React, { Component } from "react"
import './Timer.css'
import 'jquery'

export class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            isOn: false,
            fullDashArray: 283,
            timeLimit: this.props.time,
            timePassed: 0,
            timeLeft: this.props.time,
            name: this.props.name,
            timerInterval: 0
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
        window.addEventListener("resize", this.updateDimensions.bind(this))
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        clearInterval(this.state.timerInterval)
        window.removeEventListener("resize", this.updateDimensions.bind(this))
    }



    //Add timer methods
    formatTime(timeToFormat) {
        const minutes = Math.floor(timeToFormat / 60);
        let seconds = timeToFormat % 60;

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
        this.setState({
            isOn: true
        })
        this.label = (this.state.name) + '-timer-label'
        this.timerInterval = setInterval(() => {
            this.setState(() => ({
                timeLeft: this.state.timeLeft - 1,
                timerInterval: this.timerInterval
            }))
            console.log(this.state.timeLeft)
            if (document.getElementById(this.label)) {
                document.getElementById(this.label).innerHTML = this.formatTime(
                    this.state.timeLeft
                );
            }
            this.setCircleDasharray();

            if (this.state.timeLeft === 0) {
                clearInterval(this.timerInterval)
            }
        }, 1000);
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
                                stroke-dasharray="283"
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
