import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import educationPic from './assets/gatech_logo.png';
import taPic from './assets/ta_pic.png';
import researchPic from './assets/research_pic.png';
import spectroSamPic from './assets/spectrosam_pic.png';
import facebookLogo from './assets/facebook_logo.png';
import pgeLogo from './assets/pge_logo.png';
import './Experience.css';

function EducationModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            Education
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="right">Jan 2021-Present</span><span className="left">Georgia Institute of Technology</span>​
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Currently pursuing M.S. in Computer Science
                                        </li>
                                        <li>
                                            Specialization: Machine Learning
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li>
                                <span className="right">Aug 2017-Dec 2020</span><span className="left">Georgia Institute of Technology</span>
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            B.S. in Computer Science
                                        </li>
                                        <li>
                                            Threads: Intelligence and Devices
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li>
                                <span className="right">Aug 2013-May 2017</span><span className="left">Menlo School</span>
                                <br></br>
                                <p className="panel-location-font">Atherton, California</p>
                                <p>
                                <ul className="bullets">
                                        <li>
                                            High School Diploma
                                        </li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function TAModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            Teaching Assistant
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="right">Jan 2021-Present</span><span className="left">Graduate TA</span>​
                                <br></br>
                                <p className="panel-location-font">Georgia Tech - College of Computing</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Currently a GTA for CS 3600, Georgia Tech's Intro to Artificial Intelligence course
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li>
                                <span className="right">Aug 2018-Dec 2020</span><span className="left">Undergraduate TA</span>​
                                <br></br>
                                <p className="panel-location-font">Georgia Tech - College of Computing</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            UTA for CS 3600, Georgia Tech's Intro to Artificial Intelligence course
                                        </li>
                                        <li>
                                            Held office hours and review sessions to go over assignments covering the basics of AI
                                        </li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function ResearchModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            Research
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="right">Dec 2020-Present</span><span className="left">Graduate Researcher</span>​
                                <br></br>
                                <p className="panel-location-font">Entertainment Intelligence Lab</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Research Advisor: Dr. Mark Riedl
                                        </li>
                                        <li>
                                            Currently researching language model techniques for story generation
                                        </li>
                                        <li>
                                            Finetuned backward story generation models and experimenting with info retrieval concepts
                                        </li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function FacebookModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            Facebook
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="right">May 2020-Aug 2020</span><span className="left">Software Engineer Intern</span>​
                                <br></br>
                                <p className="panel-location-font">Menlo Park, California</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Within Feed and Stories Org (iOS)
                                        </li>
                                        <li>
                                            Manager: Victor Wong
                                        </li>
                                        <li>
                                            Developed core features for Facebook's Stories Composer
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li>
                                <span className="right">May 2019-Aug 2019</span><span className="left">Software Engineer Intern</span>​
                                <br></br>
                                <p className="panel-location-font">Menlo Park, California</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Within WhatsApp
                                        </li>
                                        <li>
                                            Manager: David Peña
                                        </li>
                                        <li>
                                            Implemented media infra performance algorithms for better user experience on WhatsApp Statuses
                                        </li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function SpectroModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            SpectroSam
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="right">May 2019-Present</span><span className="left">Frontend Engineer</span>​
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Implemented features for both educational and game portions of application
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li>
                                <span className="right">Aug 2018-May 2019</span><span className="left">Backend Engineer</span>​
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Developed scripts to convert, parse, and analyze audio files to text 
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li>
                                <span className="right">Aug 2018-Present</span><span className="left">Co-Founder</span>​
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Founded SpectroSam, a mobile application aiming to offer supplemental speech
                                            therapy for children
                                        </li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function PGEModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            Pacific Gas and Electric
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="right">May 2018-Aug 2018</span><span className="left">Software Engineer Intern</span>​
                                <br></br>
                                <p className="panel-location-font">San Francisco, California</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Within Digital Catalyst Org
                                        </li>
                                        <li>
                                            Manager: Pranav Jhumkhawala
                                        </li>
                                        <li>
                                            Implemented a mobile chat bot using IBM Watson for better information lookup
                                        </li>
                                        <li>
                                            Developed detection software for field workers to optimize company's inspection process
                                            of products
                                        </li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function Experience() {
    const [showEducation, setShowEducation] = useState(false);
    const [showTA, setShowTA] = useState(false);
    const [showResearch, setShowResearch] = useState(false);
    const [showFB, setShowFB] = useState(false);
    const [showSS, setShowSS] = useState(false);
    const [showPGE, setShowPGE] = useState(false);
    return (
    <div id="experience">
        <div className="title-text-font padding-top-title" align="center">
            My Experience
        </div>
        <Container className="padding-top-60">
            <Row>
                <Col>
                    <div class="hovereffect">
                        <img class="img-responsive" src={educationPic} width="350px" height="200px" alt=""/>
                            <div class="overlay">
                                <h2></h2>
                                <p className='panel-text-font'>
                                    <a onClick={() => setShowEducation(true)}>EDUCATION</a>
                                    <EducationModal
                                        show={showEducation}
                                        onHide={() => setShowEducation(false)}
                                    />
                                </p>
                            </div>
                    </div>
                </Col>
                <Col>
                    <div class="hovereffect">
                        <img class="img-responsive" src={taPic} width="350px" height="200px" alt=""/>
                            <div class="overlay">
                                <h2></h2>
                                <p className='panel-text-font'>
                                    <a onClick={() => setShowTA(true)}>TEACHING ASSISTANT</a>
                                    <TAModal
                                        show={showTA}
                                        onHide={() => setShowTA(false)}
                                    />
                                </p>
                            </div>
                    </div>
                </Col>
                <Col>
                    <div class="hovereffect">
                        <img class="img-responsive" src={researchPic} width="350px" height="200px" alt=""/>
                            <div class="overlay">
                                <h2></h2>
                                <p className='panel-text-font'>
                                    <a onClick={() => setShowResearch(true)}>RESEARCH</a>
                                    <ResearchModal
                                        show={showResearch}
                                        onHide={() => setShowResearch(false)}
                                    />
                                </p>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="padding-top-60 padding-bottom-60">
            <Row className="justify-content-md-center">
                <Col className="col-md-auto">
                    <div class="hovereffect">
                        <img class="img-responsive" src={facebookLogo} width="350px" height="200px" alt=""/>
                            <div class="overlay">
                                <h2></h2>
                                <p className='panel-text-font'>
                                    <a onClick={() => setShowFB(true)}>FACEBOOK</a>
                                    <FacebookModal
                                        show={showFB}
                                        onHide={() => setShowFB(false)}
                                    />
                                </p>
                            </div>
                    </div>
                </Col>
                <Col className="col-md-auto">
                    <div class="hovereffect">
                        <img class="img-responsive" src={pgeLogo} width="350px" height="200px" alt=""/>
                            <div class="overlay">
                                <h2></h2>
                                <p className='panel-text-font'>
                                    <a onClick={() => setShowPGE(true)}>PACIFIC GAS AND ELECTRIC</a>
                                    <PGEModal
                                        show={showPGE}
                                        onHide={() => setShowPGE(false)}
                                    />
                                </p>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>

    </div>
    );
}

export default Experience;
