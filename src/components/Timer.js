import React from "react";
import PropTypes from "prop-types";

import "../styles/Timer.scss";
import { secsToDuration, durationToString } from "../helpers";


const Timer = ({ paused, secsRemaining, togglePaused }) => {
    return (
        <div
            className={`timer${paused ? " paused" : ""}`}
            onClick={() => togglePaused()}
        >
            {durationToString(secsToDuration(secsRemaining))}
            <div className={`pause-overlay${paused ? " paused" : ""}`}><div><i className="fa fa-fw fa-pause" /></div></div>
        </div>
    );
};

Timer.propTypes = {
    paused: PropTypes.bool.isRequired,
    secsRemaining: PropTypes.number.isRequired,
    togglePaused: PropTypes.func.isRequired,
};

export default Timer;
