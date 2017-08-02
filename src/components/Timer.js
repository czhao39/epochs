import React from "react";
import PropTypes from "prop-types";

import "../styles/Timer.scss";
import { secsToDuration, durationToString } from "../helpers";


const Timer = ({ secsRemaining, togglePaused }) => {
    return (
        <div 
            className="timer"
            onClick={() => togglePaused()}
        >
            {durationToString(secsToDuration(secsRemaining))}
        </div>
    );
};

Timer.propTypes = {
    secsRemaining: PropTypes.number.isRequired,
    togglePaused: PropTypes.func.isRequired,
};

export default Timer;
