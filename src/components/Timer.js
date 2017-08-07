import React from "react";
import PropTypes from "prop-types";

import "../assets/css/Timer.scss";
import { secsToDuration, durationToString } from "../helpers";


const Timer = ({ paused, secsRemaining, color, togglePaused }) => {
    return (
        <div
            className={`${color} timer${paused ? " paused" : ""}`}
            onClick={() => togglePaused()}
        >
            {durationToString(secsToDuration(secsRemaining))}
            <div className={`pause-overlay${paused ? " paused" : ""}`}><i className="fa fa-fw fa-pause" /></div>
        </div>
    );
};

Timer.propTypes = {
    paused: PropTypes.bool.isRequired,
    secsRemaining: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    togglePaused: PropTypes.func.isRequired,
};

export default Timer;
