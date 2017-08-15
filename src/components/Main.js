import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

import TotalInfoBox from "./TotalInfoBox";
import CurTaskBox from "../containers/CurTaskBox";
import TaskListControlsBox from "../containers/TaskListControlsBox";
import TaskListContainer from "../containers/TaskListContainer";

const Main = ({ tasks, completedTasks, editIndex, toggleEditTaskModal }) => (
    <Grid fluid>
        <div className="total-info-box-wrapper">
            <TotalInfoBox
                tasks={tasks}
                completedTasks={completedTasks}
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
    editIndex: PropTypes.number,
    toggleEditTaskModal: PropTypes.func.isRequired,
};

export default Main;
