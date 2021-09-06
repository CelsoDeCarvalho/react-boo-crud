import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ButtonCreate from '../../components/button/ButtonCreate';
import CardBook from '../../components/cardBook/CardBook';

const BookList = () => {
    return (
        <Container fluid className="py-3 h-100 bookList">
            <ButtonCreate />
            <hr />
            <Row className="book-container px-0 pb-1">
                <CardBook />
                <CardBook />
                <CardBook />
            </Row>
        </Container>
    );
}

export default BookList;
