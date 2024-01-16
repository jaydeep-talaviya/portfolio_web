import React, { useState,useEffect } from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import { ArrowRightCircle,Download } from 'react-bootstrap-icons';
import headerImg from '../static/bg/header-img.svg';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import resume from '../static/resume/jaydee_talaviya_cv.pdf'

function Banner() {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false)
    const toRotate = ["Web Developer","Backend Developer","Fullstack Developer"]
    const [text,setText] = useState("")
    const period = 500;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);

    const handleDownload = () => {
      // Replace 'your_resume.pdf' with the actual path to your resume file
      const resumePath = resume;
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Jaydeep_Python_Dev_3y.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    
      const [currentSection, setCurrentSection] = useState(null);

      const navigateToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setCurrentSection(sectionId);
        }
      };
    

  return (
    <section className="banner" id="home">
    <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
       
            {
            ({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm Jaydeep`} <span className="txt-rotate" dataPeriod="500" data-rotate='["Web Developer","Backend Developer","Fullstack Developer"]'><span className="wrap">{text}</span></span></h1>
                <p>Hello! I'm a Python software developer with three years of hands-on 
                    experience, proficient in various Python technologies. My expertise 
                    spans backend development using different frameworks and libraries, 
                    complemented by a solid grasp of frontend technologies like ReactJS 
                    and JavaScript. My commitment to delivering high-quality solutions 
                    is underlined by a passion for innovation and problem-solving. 
                    Explore my portfolio to see how I've translated this dedication into 
                    impactful software experiences.
                    </p>
                  
            </div>
              
            }
          

          </TrackVisibility>
          
        </Col>
        <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={headerImg} alt="Header Img"/>
              </div>}
          </TrackVisibility>
        </Col>
        
      </Row>
      <Row className='d-flex justify-content-around'>
              <Col md={6} className='col-md-6 d-flex justify-content-around'>
              <button onClick={() => navigateToSection('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </Col>
              <Col md={6} className='col-md-6 d-flex justify-content-around' >
              <Button variant="primary" onClick={handleDownload}>
                Resume <Download size={18} className="ml-2" />
              </Button>
              </Col>
           </Row>
    </Container>
  </section>
  )
}

export default Banner