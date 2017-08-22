import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

import InfoBar from "./InfoBar";
import CurTaskBox from "../containers/CurTaskBox";
import TaskListControls from "./TaskListControls";
import TaskListContainer from "../containers/TaskListContainer";

const Main = ({ tasks, completedTasks, toggleCreateTaskModal, toggleEditTaskModal, toggleHelpModal }) => (
    <Grid fluid>
        <div className="info-bar-wrapper">
            <InfoBar
                tasks={tasks}
                completedTasks={completedTasks}
                toggleHelpModal={(show) => toggleHelpModal(show)}
                showHelp
            />
        </div>
        <div className="cur-task-box-wrapper">
            <CurTaskBox
                toggleEditTaskModal={(show, index) => toggleEditTaskModal(show, index)}
            />
        </div>
        <div className="task-list-controls-box-wrapper">
            <TaskListControls
                toggleCreateTaskModal={(show) => toggleCreateTaskModal(show)}
            />
        </div>
        <Row>
            <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
                <div className="task-list-wrapper">
                    <TaskListContainer
                        toggleEditTaskModal={(show, index) => toggleEditTaskModal(show, index)}
                    />
                </div>
            </Col>
        </Row>
    </Grid>
);

Main.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    completedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleCreateTaskModal: PropTypes.func.isRequired,
    toggleEditTaskModal: PropTypes.func.isRequired,
};

export default Main;
