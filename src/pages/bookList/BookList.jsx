import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ButtonCreate from '../../components/button/ButtonCreate';
import CardBook from '../../components/cardBook/CardBook';

const BookList = () => {

    const getAllBooks = () => {
        if(JSON.parse(localStorage.getItem('books')))
            return JSON.parse(localStorage.getItem('books'));
        else
        return [];

    }

    useEffect(() => {
        getAllBooks();
    }, []);

    return (
        <Container fluid className="py-3 h-100 bookList">
            <ButtonCreate />
            <hr />
            <Row className="book-container px-0 pb-1">
                {
                    getAllBooks().map(book => {
                        return (
                            <CardBook titulo={book.title} autor={book.author} data={book.date} />
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default BookList;
