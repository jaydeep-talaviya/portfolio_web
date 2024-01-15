import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Archievement from './components/Archievement';
import Experience from './components/Experience';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Archievement/>
      <Contact/>
      <Footer/>
   </div>
  );
}

export default App;
