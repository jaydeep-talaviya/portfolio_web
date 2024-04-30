import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from '../static/Logo.png'
import linkedin from '../static/linkedin.png';
import email from '../static/email.png';
import ig from '../static/ig.png';
import telegram from '../static/telegram.png';
import wa from '../static/wa.png';
import github from '../static/github.png';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={4} className="d-flex justify-content-center">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4} className="d-flex justify-content-center">
            <div className="github_section pt-4 text-center">
                  <h4>Visit to My Github</h4>
                  <div className="social-icon_github">
                    <a href="https://github.com/jayedeep"><img src={github} alt="github" /></a>
                    </div>
                </div>
          </Col>

          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
            <a target="_blank" href="mailto:jaydeeptalaviya8@gmail.com"><img src={email} alt="Icon" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/jaydeep-talaviya-540901195"><img src={linkedin} alt="Icon" /></a>
            <a target="_blank" href="https://t.me/Jay_talaviya"><img src={telegram} alt="Icon" /></a>
              <a target="_blank" href="https://www.instagram.com/jay_talaviya_99?igsh=MWN6dG4zdzBrMDhrMA=="><img src={ig} alt="Icon" /></a>
              <a target="_blank" href="https://wa.me/916353701592"><img src={wa} alt="Icon" /></a>
            </div>
          </Col>
          
        </Row>
        <div>
            <p class="footer__copy">Copyright @ 2024 Jaydeep Talaviya. All rights reserved.</p>

            </div>
      </Container>
    </footer>
  )
}