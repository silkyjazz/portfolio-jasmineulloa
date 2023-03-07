import React from "react";
import { useState } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
import { Zoom } from "react-awesome-reveal";

function NavTabs({ handlePageChange }) {
  const [expanded, setExpanded] = useState('');
  return (
    <Navbar className="navigation" expand="md">
      <Container className="navigation">
        <Zoom delay={100} cascade triggerOnce className="navigation">
          <Navbar.Brand href="#about">
            <h1
              className="name-title "
              style={{ display: "flex", justifyContent: "center" }}
            >
              Jasmine Ulloa
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle id="nav-toggle"
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
           <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="navigation me-auto" id="links">
            <Nav.Link 
            className="navigation-link"
            href="#about"  onClick={() => {
              handlePageChange("About");
              setExpanded(false);
            }}
            >
              About
            </Nav.Link>
            <Nav.Link
            className="navigation"
              href="#portfolio"
              onClick={() => {
                handlePageChange("Portfolio");
                setExpanded(false);
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
            className="navigation"
              href="#contact"
              onClick={() => {
                handlePageChange("Contact");
                setExpanded(false);
              }}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
            className="navigation"
            href="#resume" onClick={() => {
              handlePageChange("Resume");
              setExpanded(false);
            }}
            >
              Resume
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Zoom>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
