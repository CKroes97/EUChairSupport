import React, { useRef, useState, Component } from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import reactDom from "react-dom";
import './Timer.css'

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          width:  800,
        }
      }

      getDerivedStateFromProps

      updateDimensions() {
          let update_width  = window.innerWidth/4;
          this.setState({ width: update_width });

      }

/**
* Add event listener
*/
componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
}

/**
 * Remove event listener
 */
componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
}



render() {
    const time = this.props.time
    const isRunning = this.props.isRunning


    const RenderTime = ({ remainingTime }) => {
        const currentTime = useRef(remainingTime);
        const prevTime = useRef(null);
        const isNewTimeFirstTick = useRef(false);
        const [, setOneLastRerender] = useState(0);

        if (currentTime.current !== remainingTime) {
            isNewTimeFirstTick.current = true;
            prevTime.current = currentTime.current;
            currentTime.current = remainingTime;
        } else {
            isNewTimeFirstTick.current = false;
        }

        // force one last re-render when the time is over to tirgger the last animation
        if (remainingTime === 0) {
            setTimeout(() => {
                setOneLastRerender(val => val + 1);
            }, 20);
        }

        const isTimeUp = isNewTimeFirstTick.current;

        return (
            <div className="time-wrapper">
                <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
                    {remainingTime}
                </div>
                {prevTime.current !== null && (
                    <div
                        key={prevTime.current}
                        className={`time ${!isTimeUp ? "down" : ""}`}
                    >
                        {prevTime.current}
                    </div>
                )}
            </div>
        );
    };

    console.log(time)
    return (
        <div id="Timer">
            <CountdownCircleTimer
                isPlaying = {isRunning}
                size={this.state.width}
                duration={time}
                colors={[['#fdd002', 1]]}>
                {RenderTime}
            </CountdownCircleTimer>
        </div>
    )
}
}

export default Timer
