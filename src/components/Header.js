import React from 'react'
import {Container,Nav,Navbar,} from 'react-bootstrap'
import './Header.css';
function Header() {

    
    return (

        
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">COVID19</Navbar.Brand>
                <Nav e="me-auto"classNam>
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
               
               
            </Container>
        </Navbar>
        
      
        

    )
  
}

export default Header
