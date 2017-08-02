import React from "react";
import PropTypes from "prop-types";

import "../styles/Timer.scss";


const Timer = ({ timeRemaining, togglePaused }) => {
    return (
        <div 
            className="timer"
            onClick={() => togglePaused()}
        >
            {timeRemaining}
        </div>
    );
};

Timer.propTypes = {
    timeRemaining: PropTypes.number.isRequired,
    togglePaused: PropTypes.func.isRequired,
};

export default Timer;
