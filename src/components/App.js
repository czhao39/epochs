import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

import "../styles/App.scss";
import TotalInfoBox from "./TotalInfoBox";
import CurTaskBox from "../containers/CurTaskBox";
import TaskListControlsBox from "../containers/TaskListControlsBox";
import TaskListContainer from "../containers/TaskListContainer";
import FinishedTaskList from "./FinishedTaskList";

const App = ({ tasksArray, finishedTasks, editIndex, showEditTaskModal, toggleEditTaskModal }) => {
    return (
        <Grid fluid>
            <div className="total-info-box-wrapper">
                <TotalInfoBox
                    tasksArray={tasksArray}
                    finishedTasks={finishedTasks}
                />
            </div>
            <div className="app-title">Epochs</div>
            <div className="cur-task-box-wrapper">
                <CurTaskBox
                    toggleEditTaskModal={(show, index) => toggleEditTaskModal(show, index)}
                />
            </div>
            <div className="task-list-controls-box-wrapper">
                <TaskListControlsBox />
            </div>
            <Row>
                <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
                    <div className="task-list-wrapper">
                        <TaskListContainer
                            editIndex={editIndex}
                            showEditTaskModal={showEditTaskModal}
                            toggleEditTaskModal={(show, index) => toggleEditTaskModal(show, index)}
                        />
                    </div>
                </Col>
            </Row>
            <hr />
            <div className="finished-title">Finished Epochs</div>
            <Row>
                <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
                    <FinishedTaskList
                        finishedTasks={finishedTasks}
                    />
                </Col>
            </Row>
        </Grid>
    );
};

App.propTypes = {
    tasksArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    finishedTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    editIndex: PropTypes.number,
    showEditTaskModal: PropTypes.bool.isRequired,
    toggleEditTaskModal: PropTypes.func.isRequired,
};

export default App;
