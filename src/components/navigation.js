import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navigation.css';

const Navigation = () =>{
return (
<Navbar  fixed="top" bg="f4f4f4" variant="#C0B283">
    <Navbar.Brand className="color-navbar" href="#home">JG</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link className="color-navbar"  href="#about">Acerca de</Nav.Link>
            <Nav.Link className="color-navbar"  href="#projects">Proyectos</Nav.Link>
            <Nav.Link className="color-navbar" href="#contact">Contacto</Nav.Link>
        </Nav>
</Navbar>
)
}

export default Navigation;