import React from "react";
import PropTypes from "prop-types";

import "../styles/TotalInfoBox.scss";
import { secsToDuration, durationToString } from "../helpers";


const TotalInfoBox = ({ tasksArray }) => {
    let totalSecsRemaining = tasksArray.reduce((partialSum, task) => partialSum + task.secsRemaining, 0);
    return (
        <div className="total-info-box">
            <div className="total-time-remaining">
                Total time remaining:&ensp;{durationToString(secsToDuration(totalSecsRemaining))}
            </div>
        </div>
    );
}

TotalInfoBox.propTypes = {
    tasksArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TotalInfoBox;
