import React, { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddBook() {
    const [books, setBooks] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [data, setData] = useState("");

    const allBooks = () => JSON.parse(localStorage.getItem('books'));

    const postBook = (event) => {
        event.preventDefault();

        setBooks([...books, {
            title: titulo,
            author: autor,
            date: data
        }]);

        setTitulo('');
        setAutor('');
        setData('');
    };

    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        let items = books;

        if(allBooks()){
           items = allBooks().concat(books);
        }

        localStorage.removeItem('books');

        localStorage.setItem('books',JSON.stringify(items));

    }, [books]);

    return (
        <>
            <Form onSubmit={(e) => postBook(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Iitulo</Form.Label>
                    <Form.Control
                        name="item"
                        type="text"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        placeholder='titulo'
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                        name="item"
                        type="text"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                        placeholder='autor'
                        required
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Data Escrita</Form.Label>
                    <Form.Control
                        name="item"
                        type="date"
                        value={data}
                        onChange={e => setData(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit">submit</Button>
            </Form>
        </>
    );
}

export default AddBook;
