import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Col, Row } from "react-bootstrap";
import {Fade} from 'react-awesome-reveal';
import resume from '../../pdfs/Jasmine-Ulloa-Resume.pdf'

export default function Resume() {
    const styles = {
        marginTop:"-50px",
        marginLeft: "100px",
        padding: "40px",
    };
  return (
    <div style={styles}>
      <h1 className="page-title" id="resume-text">Resume</h1>
      <a href={resume} download="Jasmine-Ulloa-Resume.pdf" className="resume-link">
        <p>Download my resume</p>
      </a>

      <Container>
        <Row id="resume-list">
          <Col lg={6} sm={12}>
            <h2><FontAwesomeIcon icon="fa-solid fa-laptop-code" />Front-end proficiencies</h2>
            <Fade delay={100} cascade triggerOnce>
            <ul>
              <li>HTML</li>
              <li>Cascading Style Sheets (CSS)</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>Javascript</li>
              <li>ES6</li>
              <li>jQuery</li>
              <li>Developer Tools (Elements, Console, Network, Sources, Application, etc)</li>
              <li>GitHub</li>
              <li>Dayjs</li>
              <li>Insomnia / Postman</li>
              <li>Fetch</li>
              <li>AJAX</li>
            </ul>              
            </Fade>

          </Col>
          <Col lg={6} sm={12}>
            <h2><FontAwesomeIcon icon="fa-solid fa-server" /> Back-end proficiencies</h2>
            <Fade delay={100} triggerOnce cascade>
            <ul>
              <li>Unit Testing w/ JEST</li>
              <li>Object-oriented Programming (OOP)</li>
              <li>Third Party API</li>
              <li>Database management (SQL and NoSQL databases)</li>
              <li>Performance optimization and scalability</li>
              <li>Authentication and Authorization (OAuth, JWT)</li>
              <li>Session management and cookies</li>
              <li>Caching (in-memory, distributed)</li>
              <li>Heroku</li>
              <li>Rest API</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Graphql</li>
              <li>Apollo Server</li>
            </ul></Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
