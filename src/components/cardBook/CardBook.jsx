import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './CardBook.css';

const CardBook = () => {
    return (
        <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={2}>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardBook;
