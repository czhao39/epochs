import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

import TotalInfoBox from "./TotalInfoBox";
import FinishedTaskListContainer from "../containers/FinishedTaskListContainer";

const FinishedTasksPage = ({ tasks, finishedTasks }) => (
        <Grid fluid>
            <div className="total-info-box-wrapper">
                <TotalInfoBox
                    tasks={tasks}
                    finishedTasks={finishedTasks}
                />
                <div className="return-to-timer"><Link to="/"><i className="fa fa-fw fa-long-arrow-left" />Return to the timer!</Link></div>
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
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    finishedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FinishedTasksPage;
