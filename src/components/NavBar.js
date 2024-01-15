import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import logo from '../static/Logo.png'
import { Link as ScrollLink } from 'react-scroll';


function NavBar() {

    const [activeLink,setActiveLink] = useState('home')
    const [scrolled,setScrolled] = useState(false)

    useEffect(()=>{

        const onScroll=()=>{
            setScrolled(window.scrollY > 50?true:false)
        }

        window.addEventListener('scroll',onScroll)

        return () => window.removeEventListener('scroll',onScroll)
    },[])

    const [currentSection, setCurrentSection] = useState(null);

    const navigateToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(sectionId);
      }
    };
  

  return (
    <Navbar expand="lg" className={scrolled?'scrolled':''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className={`navbar-link ${activeLink === 'home' && 'active'}`} onClick={()=>setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={`navbar-link ${activeLink === 'skills' && 'active'}`} onClick={()=>setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={`navbar-link ${activeLink === 'projects' && 'active'}`} onClick={()=>setActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#achievements" className={`navbar-link ${activeLink === 'achievements' && 'active'}`} onClick={()=>setActiveLink('achievements')}>Achievements</Nav.Link>
          </Nav>
          <span className="navbar-text">
                <button className="vvd" onClick={() => navigateToSection('connect')}><span>Let’s Connect</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;