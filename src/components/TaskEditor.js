import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

import "../assets/css/TaskEditor.scss";
import { secsToDuration, durationToSecs } from "../helpers";


const COLORS = ["grey", "red", "green", "blue", "purple"];

class TaskEditor extends PureComponent {
    constructor(props) {
        super(props);

        if (this.props.task === undefined) {
            this.state = {
                hours: "",
                mins: "",
                taskName: "",
                color: "",
            };
        } else {
            let duration = secsToDuration(this.props.task.secsRemaining);
            this.state = {
                hours: duration.hours.toString(),
                mins: duration.mins.toString(),
                taskName: this.props.task.name,
                color: this.props.task.color,
            };
        }
    }

    submit() {
        let duration = { hours: Number(this.state.hours), mins: Number(this.state.mins), secs: 0 }
        let task = { secsRemaining: durationToSecs(duration), name: this.state.taskName, color: this.state.color };
        this.props.submitTask(task);
    }
    submit = this.submit.bind(this);

    isInputValid() {
        return this.state.hours.length > 0 && this.state.mins.length > 0 && this.state.taskName.length > 0 && this.state.color.length > 0 && isFinite(this.state.hours) && Number(this.state.hours) >= 0 && isFinite(this.state.mins) && Number(this.state.mins) >= 0;
    }

    processKey(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            if (this.isInputValid()) {
                let task = { duration: { hours: Number(this.state.hours), mins: Number(this.state.mins), secs: 0 }, taskName: this.state.taskName };
                this.submit(task);
            }
        }
    }
    processKey = this.processKey.bind(this);

    render() {
        return (
            <Grid
                fluid
                tabIndex="-1"
                onKeyDown={this.processKey}
            >
                <Row>
                    <Col xs={12} sm={3}>
                        <FormGroup controlId="hoursGroup">
                            <ControlLabel>Hours</ControlLabel>
                            <FormControl
                                inputRef={(ref) => this.hoursInput = ref}
                                type="number"
                                autoComplete="off"
                                value={this.state.hours}
                                onChange={(event) => this.setState({ hours: event.target.value })}
                                autoFocus
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={3}>
                        <FormGroup controlId="minsGroup">
                            <ControlLabel>Mins</ControlLabel>
                            <FormControl
                                inputRef={(ref) => this.minsInput = ref}
                                type="number"
                                autoComplete="off"
                                value={this.state.mins}
                                onChange={(event) => this.setState({ mins: event.target.value })}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                        <FormGroup controlId="nameGroup">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl
                                inputRef={(ref) => this.taskNameInput = ref}
                                type="text"
                                autoComplete="off"
                                value={this.state.taskName}
                                onChange={(event) => this.setState({ taskName: event.target.value })}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} smOffset={3}>
                        <ControlLabel className="color-picker-label">Color</ControlLabel>
                        <div className="color-picker">
                            {
                                COLORS.map((color, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${color}${color === this.state.color ? " selected" : ""}`}
                                            onClick={() => this.setState({ color })}
                                        />
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
                <div className="submit-button-div">
                    <Button
                        className="submit-button"
                        onClick={this.submit}
                        disabled={!this.isInputValid()}
                    >
                        Submit
                    </Button>
                </div>
            </Grid>
        );
    }
}

TaskEditor.propTypes = {
    task: PropTypes.object,
    submitTask: PropTypes.func.isRequired,
};

export default TaskEditor;
