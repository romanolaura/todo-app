import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import classes from "./Header.module.css"

const Header = () => {
  return (
    <Container fluid>
      <Navbar bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="#" className={classes.header}>To-Do List</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
