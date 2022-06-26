import './App.css';
// eslint-disable-next-line
import Logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import HeroImage from './Components/HeroImage/HeroImage';

function App () {
  return (
    <div className="App">
      <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
            Alicea Halsted
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HeroImage />
      </header>
    </div>
  );
}

export default App
