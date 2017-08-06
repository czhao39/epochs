import React from "react";
import PropTypes from "prop-types";

import { secsToDuration, durationToString } from "../helpers";


const TotalInfoBox = ({ tasksArray, finishedTasks }) => {
    let totalSecsRemaining = tasksArray.reduce((partialSum, task) => partialSum + task.secsRemaining, 0);
    return (
        <div className="total-info-box">
            <div className="total-time-remaining">
                Total time remaining:&ensp;<strong>{durationToString(secsToDuration(totalSecsRemaining))}</strong>
            </div>
            {
                finishedTasks.length > 0 ?
                    <div className="finished-tasks-count">
                        You've finished <strong>{finishedTasks.length}</strong> epochs!
                    </div>
                :
                    <div></div>
            }
        </div>
    );
}

TotalInfoBox.propTypes = {
    tasksArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    finishedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TotalInfoBox;
