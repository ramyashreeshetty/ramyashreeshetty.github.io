import React from 'react'
import { Button, Navbar , Nav, Form, Formcontrol } from 'react-bootstrap';

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Projects</Nav.Link>
                     <Nav.Link href="#pricing">Contact</Nav.Link>
                     <Nav.Link href="#pricing">Resume</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation;
