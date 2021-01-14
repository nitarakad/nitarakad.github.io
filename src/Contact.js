import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from 'reactstrap';
import './Contact.css';
import ResumePDF from './assets/Nitya Tarakad Resume.pdf';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
    <div id="contact">
        <div className="title-text-font" align="center">
            Say Hi!
        </div>
        <br></br>
        <div className="message-text-font" align="center">
            If you want to chat, please don't hesitate to contact me. I'll get back to you as soon as I can!
        </div>
        <br></br>
        <div align="center">
            <Button className="message-text-font not-rounded" variant="info" align="center" href={ResumePDF}>
                Download My Resume
            </Button>{''}
        </div>
        <br></br>
        <div>
            <p className="text-font" align="center">📍 Belmont, California</p>
        </div>
        <div align="center">
            <a href="http://www.github.com/nitarakad">
                <img src="https://img.icons8.com/carbon-copy/100/000000/github.png" width='3%' height='3%'/>
            </a>
            <a href="http://www.linkedin.com/in/nitya-tarakad/">
                <img src="https://img.icons8.com/carbon-copy/100/000000/linkedin.png" width='3%' height='3%'/>
            </a>
            <a href="mailto:nitarakad@gmail.com">
                <img src="https://img.icons8.com/carbon-copy/100/000000/email.png" width='3%' height='3%'/>
            </a>
            <a href="http://www.instagram.com/nitarakad">
                <img src="https://img.icons8.com/carbon-copy/100/000000/instagram-new.png" width='3%' height='3%'/>
            </a>
            <a href="http://www.facebook.com/nitarakad">
                <img src="https://img.icons8.com/carbon-copy/100/000000/facebook-new.png" width='3%' height='3%'/>
            </a>
            
        </div>
    </div>
    );
}

export default Contact;
