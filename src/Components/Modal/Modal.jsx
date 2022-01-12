import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

const ModalFunc = (props) => {
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dependency Tracker</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Email" />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalFunc;
