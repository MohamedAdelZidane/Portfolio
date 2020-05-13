
import React, { Component } from "react";
import { NavDropdown,Nav,Form,FormControl,Button,Navbar,NavItem } from 'react-bootstrap';


class NavigationBar extends Component {
    render() {
        return (
          <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Adel's Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contacts">Contacts</Nav.Link>
    
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

        );}
}

export default NavigationBar;