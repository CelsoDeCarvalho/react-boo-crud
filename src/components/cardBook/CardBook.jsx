import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './CardBook.css';

const CardBook = (props) => {
    return (
        <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={2}>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title style={{fontSize:'12px'}}><i style={{marginRight:'2px',color:'#4709AE'}} class='bx bxs-book'></i>{props.titulo}</Card.Title>
                    <Card.Text style={{fontSize:'11px'}}>
                        <p className="m-0"><i style={{marginRight:'2px',color:'#4709AE'}} class='bx bxs-user'></i>Autor: {props.autor}</p>
                        <p><i style={{marginRight:'2px',color:'#4709AE'}} class='bx bxs-time-five'></i>Data: {props.data}</p>
                    </Card.Text>
                    <Button variant="info" style={{marginRight:'5px',color:'white'}}>read</Button>
                    <Button variant="success" style={{marginRight:'5px'}}>update</Button>
                    <Button variant="danger">delete</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardBook;
