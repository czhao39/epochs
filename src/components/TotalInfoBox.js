import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../assets/css/TotalInfoBox.scss";
import { secsToDuration, durationToString } from "../helpers";


const TotalInfoBox = ({ tasks, completedTasks, toggleHelpModal }) => {
    let totalSecsRemaining = tasks.reduce((partialSum, task) => partialSum + task.secsRemaining, 0);
    return (
        <div className="total-info-box">
            <div className="first-col">
                <div className="total-time-remaining">
                    <i className="fa fa-fw fa-clock-o" />Total time remaining:&ensp;<strong>{durationToString(secsToDuration(totalSecsRemaining))}</strong>
                </div>
                {
                    completedTasks.length > 0 ?
                        <div className="completed-tasks-count">
                            <Link to="/completed"><i className="fa fa-fw fa-check" />You've completed <strong>{completedTasks.length}</strong> epoch{completedTasks.length > 1 ? "s" : ""}!</Link>
                        </div>
                    :
                        <div></div>
                }
            </div>
            <div className="second-col">
                <div
                    className="help"
                    onClick={() => toggleHelpModal(true)}
                >
                    <i className="fa fa-fw fa-info-circle" />Help
                </div>
            </div>
        </div>
    );
};

TotalInfoBox.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    completedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleHelpModal: PropTypes.func.isRequired,
};

export default TotalInfoBox;
