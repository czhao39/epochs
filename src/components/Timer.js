import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Motion, spring } from "react-motion";

import "../assets/css/Timer.scss";
import { secsToDuration, durationToString } from "../helpers";


class Timer extends PureComponent {
    render() {
        return (
            <div
                className="timer"
                onClick={() => this.props.togglePaused()}
            >
                <Motion
                    defaultStyle={{ theta: 0 }}
                    style={{ theta: spring(302, { stiffness: 10, damping: 6 }) }}
                >
                    {(interpolatingStyle) => (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            className={`timer-circle ${this.props.paused ? " paused" : ""}`}
                        >
                            <circle
                                ref={(ref) => this.circle = ref}
                                className={this.props.color}
                                cx="50" cy="50" r="48"
                                fill="none"
                                strokeWidth="4"
                                strokeDasharray="302"
                                strokeDashoffset={302 - interpolatingStyle.theta}
                                transform="rotate(-90, 50, 50)"/>
                            />
                            <text
                                textAnchor="middle"
                                x="50" y="57"
                            >
                                {durationToString(secsToDuration(this.props.secsRemaining))}
                            </text>
                        </svg>
                    )}
                </Motion>
                <div className={`pause-overlay${this.props.paused ? " paused" : ""}`}><i className="fa fa-fw fa-pause" /></div>
            </div>
        );
    }
}

Timer.propTypes = {
    paused: PropTypes.bool.isRequired,
    secsRemaining: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    togglePaused: PropTypes.func.isRequired,
};

export default Timer;
