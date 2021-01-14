import './App.css';
import Intro from './Intro.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-scroll';

function App() {
  return (
    <div id="start">
      <Navbar fixed='top' bg="light">
        <Link to="intro" spy={true} smooth={true} offset={-50} duration={500}>
          <Navbar.Brand>
            NT
          </Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
            <Link to="experience" spy={true} smooth={true} offset={-50} duration={500}>
              <Nav.Link>
                Experience
              </Nav.Link>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
              <Nav.Link>
                Projects
              </Nav.Link>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
              <Nav.Link>
                Contact
              </Nav.Link>
            </Link>
        </Nav>
      </Navbar>
      <Intro/>
      <Experience />
      <Projects />
      <Contact/>
      <div align="right">
        <a href="https://icons8.com/icon/BfmLaUCOh7CM/github" className="icon8-link">GitHub icon by Icons8</a>
        <a className="icon8-link">||</a>
        <a href="https://icons8.com/icon/67673/linkedin" className="icon8-link">LinkedIn icon by Icons8</a>
        <a className="icon8-link">||</a>
        <a href="https://icons8.com/icon/67668/instagram" className="icon8-link">Instagram icon by Icons8</a>
        <a className="icon8-link">||</a>
        <a href="https://icons8.com/icon/118567/facebook" className="icon8-link">Facebook icon by Icons8</a>
        <a className="icon8-link">||</a>
        <a href="https://icons8.com/icon/103129/email" className="icon8-link">Email icon by Icons8</a>
      </div>
      
    </div>
  );
}

export default App;
