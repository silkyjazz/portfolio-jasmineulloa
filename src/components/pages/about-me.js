import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../images/profile-pic.png";
import {Fade, Zoom} from 'react-awesome-reveal'




export default function About() {

  const styles = {
    margin: "20px"
  };
  const sectionStyle = {
    justifyContent: "center",
    padding: "10px",
    fontSize:"20px"
  };

  return (
    <div style={styles}>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <Zoom delay={100} cascade triggerOnce direction="in">
            <img src={profilePic} alt="Jasmine Ulloa" className="profile-img" />        
            </Zoom>
          </Col>
          <Col sm={12} md={12} lg={6} className="about-me-container">  
          <Fade delay={100} cascade triggerOnce direction="up">
            <h1 className="page-title" style={{ display: "flex", justifyContent: "center" }} id="about-me-title">About Me</h1>
              <p className="about-me-section" style={sectionStyle}>
                Hello and welcome! My name is Jasmine Ulloa, and I'm a full stack
                developer. I have a strong passion for technology and I'm
                constantly striving to expand my knowledge and skills in the
                field. My expertise includes JavaScript, CSS, HTML, React, Node.js, RESTful APIs, database management, and Git workflow. I
                enjoy solving complex problems, creating innovative solutions,
                and collaborating with others to bring ideas to life. Whether
                it's building dynamic web applications or developing efficient
                backend systems, I'm always up for a new challenge. Thanks for
                taking the time to learn a little bit about me, and I'm excited
                to see what we can achieve together!
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
