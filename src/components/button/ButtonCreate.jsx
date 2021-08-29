import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './ButtonCreate.css';

function ButtonCreate() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button onClick={handleShow}>
                + Book
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>ADD A NEW BOOK</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Book author</Form.Label>
                            <Form.Control type="text" placeholder="author" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Book title</Form.Label>
                            <Form.Control type="text" placeholder="title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Write date</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            done
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default ButtonCreate;
