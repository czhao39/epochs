import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "../styles/Timer.css";


class Timer extends PureComponent {
    render() {
        return (
            <div className="timer">
                {this.props.timeRemaining}
            </div>
        );
    }
}

Timer.propTypes = {
    timeRemaining: PropTypes.number.isRequired,
};

export default Timer;
