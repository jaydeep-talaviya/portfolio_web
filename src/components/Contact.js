import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../static/contact-img.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css'
import email from '../static/email.png';
import linkedin from '../static/linkedin.png';
import ig from '../static/ig.png';
import telegram from '../static/telegram.png';
import wa from '../static/wa.png';
import github from '../static/github.png';


export const Contact = () => {


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
             
                <img  src={contactImg} alt="Contact Us"/>
            
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn text-center" : "text-center"}>
                <h2>Get In Touch</h2>
                <span >
                  <div className="social-icon">
                  <a target="_blank" href="mailto:jaydeeptalaviya8@gmail.com"><img src={email} alt="email" /></a>
                  <a target="_blank" href="https://www.linkedin.com/in/jaydeep-talaviya-540901195"><img src={linkedin} alt="linkedin" /></a>
                  <a target="_blank" href="https://t.me/Jay_talaviya"><img src={telegram} alt="tele" /></a>
                    <a target="_blank" href="https://www.instagram.com/jay_talaviya_99?igsh=MWN6dG4zdzBrMDhrMA=="><img src={ig} alt="ig" /></a>
                    <a target="_blank" href="https://wa.me/916353701592"><img src={wa} alt="wa" /></a>

                  </div>
                </span>
                
              </div>}
            </TrackVisibility>
            <div className="github_section pt-4 text-center">
                <h4>Visit to My Github</h4>
                <div className="social-icon_github">
                  <a href="https://github.com/jayedeep"><img src={github} alt="github" /></a>
                  </div>
              </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}