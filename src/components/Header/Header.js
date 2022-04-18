import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar,} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  
  const logout = () => {
    signOut(auth);
  };
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Motorcycle-Repair</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link as={Link} to='blog'>Blog</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
          
               {
                  user ? <button onClick={logout} className="btn btn-link text-decoration-none ">Sign out</button>
                  :
                  <Nav.Link as={Link} to='/login'  >Login </Nav.Link>
               }
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
  );
};

export default Header;
