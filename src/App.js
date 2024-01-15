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
import Cursor from '../src/Cursor/Cursor.js';

function App() {
  return (
    <div className='App'>
      <Cursor>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Archievement/>
      <Contact/>
      <Footer/>
      </Cursor>
   </div>
  );
}

export default App;
