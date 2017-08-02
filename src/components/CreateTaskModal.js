import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Modal, Grid, Row, Col, FormControl, Button } from "react-bootstrap";

import "../styles/CreateTaskModal.scss";


class CreateTaskModal extends PureComponent {
    state = {
        hours: "",
        mins: "",
        taskName: "",
    };

    submit() {
        this.props.createTask({ hours: Number(this.state.hours), mins: Number(this.state.mins), secs: 0 }, this.state.taskName);
        this.props.hideCreateTaskModal();
    }

    isInputValid() {
        return this.state.hours.length > 0 && this.state.mins.length > 0 && this.state.taskName.length > 0 && isFinite(this.state.hours) && Number(this.state.hours) >= 0 && isFinite(this.state.mins) && Number(this.state.mins) >= 0;
    }

    processKey(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            if (this.isInputValid()) {
                this.submit();
            }
        }
    }

    render() {
        return (
            <Modal
                show={this.props.showCreateTaskModal}
                onHide={this.props.hideCreateTaskModal}
                dialogClassName="create-task-modal"
                onKeyDown={(event) => this.processKey(event)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create a task</Modal.Title>
                    <Modal.Body>
                        <Grid fluid>
                            <Row>
                                <Col xs={12} sm={3}>
                                    <FormControl
                                        inputRef={(ref) => this.hoursInput = ref}
                                        type="number"
                                        autoComplete="off"
                                        value={this.state.hours}
                                        onChange={(event) => this.setState({ hours: event.target.value })}
                                        placeholder="Hours"
                                        autoFocus
                                    />
                                </Col>
                                <Col xs={12} sm={3}>
                                    <FormControl
                                        inputRef={(ref) => this.minsInput = ref}
                                        type="number"
                                        autoComplete="off"
                                        value={this.state.mins}
                                        onChange={(event) => this.setState({ mins: event.target.value })}
                                        placeholder="Mins"
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormControl
                                        inputRef={(ref) => this.taskNameInput = ref}
                                        type="text"
                                        autoComplete="off"
                                        value={this.state.taskName}
                                        onChange={(event) => this.setState({ taskName: event.target.value })}
                                        placeholder="Task"
                                    />
                                </Col>
                            </Row>
                            <div className="submit-button-div">
                                <Button
                                    className="submit-button"
                                    onClick={() => this.submit()}
                                    disabled={!this.isInputValid()}
                                >
                                    Create
                                </Button>
                            </div>
                        </Grid>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        );
    }
}

CreateTaskModal.propTypes = {
    showCreateTaskModal: PropTypes.bool.isRequired,
    hideCreateTaskModal: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
};

export default CreateTaskModal;
