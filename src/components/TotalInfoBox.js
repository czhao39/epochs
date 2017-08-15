import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { secsToDuration, durationToString } from "../helpers";


const TotalInfoBox = ({ tasks, finishedTasks }) => {
    let totalSecsRemaining = tasks.reduce((partialSum, task) => partialSum + task.secsRemaining, 0);
    return (
        <div className="total-info-box">
            <div className="total-time-remaining">
                <i className="fa fa-fw fa-clock-o" />Total time remaining:&ensp;<strong>{durationToString(secsToDuration(totalSecsRemaining))}</strong>
            </div>
            {
                finishedTasks.length > 0 ?
                    <div className="finished-tasks-count">
                        <Link to="/finished"><i className="fa fa-fw fa-check" />You've finished <strong>{finishedTasks.length}</strong> epoch{finishedTasks.length > 1 ? "s" : ""}!</Link>
                    </div>
                :
                    <div></div>
            }
        </div>
    );
}

TotalInfoBox.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    finishedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TotalInfoBox;
