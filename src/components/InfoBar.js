import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../assets/css/InfoBar.scss";
import { secsToDuration, durationToString } from "../helpers";


const InfoBar = ({ tasks, completedTasks, toggleHelpModal, showReturn, showHelp }) => {
    let totalSecsRemaining = tasks.reduce((partialSum, task) => partialSum + task.secsRemaining, 0);
    return (
        <div className="info-bar">
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
                {
                    showReturn ?
                        <div className="return-to-timer">
                            <Link to="/"><i className="fa fa-fw fa-long-arrow-left" />Return to the timer!</Link>
                        </div>
                    :
                        <div></div>
                }
            </div>
            <div className="second-col">
                {
                    showHelp ?
                        <div
                            className="help"
                            onClick={() => toggleHelpModal(true)}
                        >
                            <i className="fa fa-fw fa-info-circle" />Help
                        </div>
                    :
                        <div></div>
                }
            </div>
        </div>
    );
};

InfoBar.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    completedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleHelpModal: PropTypes.func,
    showReturn: PropTypes.bool,
    showHelp: PropTypes.bool,
};

export default InfoBar;
