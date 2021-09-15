import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = ({setisAuth, isAuth}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home" className="wlcm">Welcom</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to="/" className="nav">Home</Link>
      <Link to="/users" className="nav">Users</Link>
      <Link to="/admin" className="nav">Admin</Link>
    </Nav>
    <Nav>
      <Button onClick={() => setisAuth(!isAuth)} eventKey={2} className="btn">
        {isAuth? "Logout":"Login"}
      </Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar
