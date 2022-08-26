import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom'
import './index.css'

function Menu() {
  return (
    <>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><strong className='brand-name'>Abhay Tech</strong></Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink  className="anchor" to="/">Home</NavLink>
            <NavLink  className="anchor" to="/service">Services</NavLink>
            <NavLink  className="anchor" to="/contact">Contact</NavLink>
            <NavLink  className="anchor" to="/about">About</NavLink>

          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Menu;