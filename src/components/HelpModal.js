import React from "react";
import PropTypes from "prop-types";
import { Modal, PageHeader, Table } from "react-bootstrap";


const HelpModal = ({ showHelpModal, toggleHelpModal }) => (
    <Modal
        show={showHelpModal}
        onHide={() => toggleHelpModal(false)}
        dialogClassName="help-modal"
    >
        <Modal.Header closeButton>
            <Modal.Title>Help</Modal.Title>
            <Modal.Body>
                <PageHeader>Keyboard Shortcuts</PageHeader>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Shortcut</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><kbd>&lt;space&gt;</kbd></td>
                            <td>Play/pause timer</td>
                        </tr>
                        <tr>
                            <td><kbd>n</kbd></td>
                            <td>Create new epoch</td>
                        </tr>
                        <tr>
                            <td><kbd>c</kbd></td>
                            <td>Complete current task</td>
                        </tr>
                        <tr>
                            <td><kbd>e</kbd></td>
                            <td>Edit current epoch</td>
                        </tr>
                        <tr>
                            <td><kbd>p</kbd></td>
                            <td>Postpone current task</td>
                        </tr>
                        <tr>
                            <td><kbd>h</kbd></td>
                            <td>Display this help</td>
                        </tr>
                    </tbody>
                </Table>
                <a href="https://icons8.com/icon/15850/Hourglass">Hourglass icon credits</a>
            </Modal.Body>
        </Modal.Header>
    </Modal>
);

HelpModal.propTypes = {
    showHelpModal: PropTypes.bool.isRequired,
    toggleHelpModal: PropTypes.func.isRequired,
};

export default HelpModal;
