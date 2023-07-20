import "./styles.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";

function BasicExample() {
  return (
    <Navbar className="text-bg-light" expand="lg" bg="success" color="light">
      <Container>
        <Navbar.Brand href="#home" className="text-light">Ecommerce React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">Inicio</Nav.Link>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item className="drop" href="#action/3.1">Sección 1</NavDropdown.Item>
              <NavDropdown.Item className="drop" href="#action/3.2">
                Sección 2
              </NavDropdown.Item>
              <NavDropdown.Item className="drop" href="#action/3.3">Sección 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;



// function Navbar(){
//     return <nav className="nav">Hola Mundo</nav>;
    
// }

// export default Navbar;