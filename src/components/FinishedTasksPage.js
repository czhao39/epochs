import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

import TotalInfoBox from "./TotalInfoBox";
import FinishedTaskListContainer from "../containers/FinishedTaskListContainer";

const FinishedTasksPage = ({ tasksArray, finishedTasks }) => (
        <Grid fluid>
            <div className="total-info-box-wrapper">
                <TotalInfoBox
                    tasksArray={tasksArray}
                    finishedTasks={finishedTasks}
                />
            </div>
            <div className="finished-title">Finished Epochs</div>
            <Row>
                <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
                    <FinishedTaskListContainer />
                </Col>
            </Row>
        </Grid>
);

FinishedTasksPage.propTypes = {
    tasksArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    finishedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FinishedTasksPage;
