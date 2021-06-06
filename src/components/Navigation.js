import React from 'react';
import './styles.css';

import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand className='brand' href='#home'>
          OBIBIO<span>TEK</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Nav.Link className='active' href='#productos'>
              Productos
            </Nav.Link>
            <Nav.Link className='active' href='#nosotros'>
              Nosotros
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
