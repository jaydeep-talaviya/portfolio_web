import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../static/contact-img.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css'

import emailjs from '@emailjs/browser';


export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_29d0odk', 'template_zbn4err', form.current, {
        publicKey: 'TAxGREOMdC-riFrHZ',
      })
      .then(
        () => {
          form.current.reset();
          alert("Successfully Sent message! Thanks for Contacting...")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
             
                <img  src={contactImg} alt="Contact Us"/>
            
          </Col>
          <Col size={12} md={6} className="p-3">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn text-center" : "text-center"}>
                <div class="container">
                <h2>Get In Touch</h2>

                <form  method="post" ref={form} onSubmit={sendEmail}>
                  <div class="form-group">
                          <input type="hidden" id="to_name" name="to_name" required/>
                      </div>
                      <div class="form-group">
                          <label for="user_name">Name:</label>
                          <input type="text" id="user_name" name="user_name" required/>
                      </div>
                      <div class="form-group">
                          <label for="user_email">Email:</label>
                          <input type="email" id="user_email" name="user_email" required/>
                      </div>
                      <div class="form-group">
                          <label for="message">Message:</label>
                          <textarea id="message" name="message" required></textarea>
                      </div>
                      <div class="form-group">
                          <button className="vvd" type="submit">Submit</button>
                      </div>
                </form>
              </div>
              </div>}
            </TrackVisibility>
            

          </Col>
        </Row>
      </Container>
    </section>
  )
}