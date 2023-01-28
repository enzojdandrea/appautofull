import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg bg-dark">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img className="logo" src="../images/default-logo.png" alt="logo-AutoFull" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/category/autos'><button className="btn btn-outline-primary fs-5 m-1">Autos</button></Link>
                        <Link to='/category/camionetas'><button className="btn btn-outline-primary fs-5 m-1">Camionetas</button></Link>
                        <Link to='/category/motos'><button className="btn btn-outline-primary fs-5 m-1">Motos</button></Link>
                    </Nav>
                    <Link to='/cart'><CartWidget /></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;