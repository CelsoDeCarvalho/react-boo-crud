import React from "react";
import { Container, Row } from "react-bootstrap";
import ButtonCreate from "../components/button/ButtonCreate";
import './App.css';
import CardBook from '../components/cardBook/CardBook';

const App = () => {
  return (
    <Container fluid className="py-3 h-100 app">
      <ButtonCreate />
      <hr />

      {/*<Container fluid className="p-0 h-100 d-flex align-items-center justify-content-center">
        <h6 className="text-muted">No books</h6>
      </Container>*/}

      <Row fluid className="book-container px-0 pb-1">
        <CardBook />
        <CardBook />
        <CardBook />
      </Row>

    </Container>
  );
}

export default App;


