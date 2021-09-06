import React from "react";
import { Container} from "react-bootstrap";
import './App.css';
import Routes from "../routes/Routes";

const App = () => {
  return (
    <Container className="py-3 h-100 app">
      <Routes />
    </Container>
  );
}
export default App;


