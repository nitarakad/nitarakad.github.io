import React from "react";
import introPic from './assets/intro_pic.jpeg';
import Image from 'react-bootstrap/Image';
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from 'react-fade-in';
import { Container, Row} from 'reactstrap';
import './Intro.css';

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

function Intro() {
  return (
    <div className="parallax-intro">
    <div className="parent-container d-flex padding-60" id="intro">
        <Container className="container-center-text">
            <Row className="align-self-center">
                <FadeIn delay={450}>
                    <div className="name-text-font" align="center">
                        Nitya Tarakad
                    </div>
                    <div className="intro-text-font padding-sides" align="center">
                        MSCS Student at Georgia Institute of Technology
                    </div>
                    <div className="intro-text-font-typewriter padding-sides padding-20" align="center">
                        <span
                            className="txt-rotate"
                            data-period="2000"
                            data-rotate='[ "Ambitious.", "Curious.", "Determined."]'></span>
                    </div>
                </FadeIn>
            </Row>
        </Container>
        <Container>
            <Row className="justify-content-md-center">
                    <FadeIn delay={450}>
                        <Image src={introPic} width='80%' height='80%' className="border-10-white"/>
                    </FadeIn>
            </Row>
        </Container>
        <div className="parallax"></div>
    </div>
    </div>
  );
}

export default Intro;
