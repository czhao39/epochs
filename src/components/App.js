import React from "react";
import PropTypes from "prop-types";
import { Navbar, Grid, Row, Col } from "react-bootstrap";

import "../styles/App.scss";
import TotalInfoBox from "./TotalInfoBox";
import CurTaskBox from "../containers/CurTaskBox";
import TaskListControlsBox from "../containers/TaskListControlsBox";
import TaskListContainer from "../containers/TaskListContainer";
import FinishedTaskListContainer from "../containers/FinishedTaskListContainer";

const App = ({ tasksArray, finishedTasks, editIndex, showEditTaskModal, toggleEditTaskModal }) => {
    return (
        <div>
            <Navbar
                fluid
                staticTop
                className={tasksArray.length > 0 ? tasksArray[0].color : "black"}
            >
                <Navbar.Header>
                    <Navbar.Brand>
                        Epochs
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
            <Grid fluid>
                <div className="total-info-box-wrapper">
                    <TotalInfoBox
                        tasksArray={tasksArray}
                        finishedTasks={finishedTasks}
                    />
                </div>
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
                {
                    finishedTasks.length > 0 ?
                        <div>
                            <hr />
                            <div className="finished-title">Finished Epochs</div>
                            <Row>
                                <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
                                    <FinishedTaskListContainer />
                                </Col>
                            </Row>
                        </div>
                    :
                        <div></div>
                }
            </Grid>
        </div>
    );
};

App.propTypes = {
    tasksArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    finishedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    editIndex: PropTypes.number,
    showEditTaskModal: PropTypes.bool.isRequired,
    toggleEditTaskModal: PropTypes.func.isRequired,
};

export default App;
