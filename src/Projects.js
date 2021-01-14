import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import filler from './assets/marble_bkgd.jpg';
import spectroSamPic from './assets/spectrosam_pic.png';
import ktPic from './assets/kt_pic.png';
import listifyPic from './assets/listify_pic.png';
import povPic from './assets/pov_pic.png';
import hpePic from './assets/hpe_pic.png';
import './Projects.css';

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
            SpectroSam: Mobile Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="left">Co-Founder</span>​
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Founded <a href='http://spectrosam.org'>SpectroSam</a>, a mobile application aiming to offer supplemental speech
                                            therapy for children
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li>
                                <span className="left">Frontend</span>​
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
                                <span className="left">Backend</span>​
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

function HumanPoseModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            Human Pose Estimation: Research Extension
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="left">Researcher</span>​
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                           Developed and assessed <a href='https://github.com/jpyneni3/MTL-AQA'>modified model architectures</a> that assess the quality of actions through human pose estimation
                                        </li>
                                        <li>
                                            Built off of <a href='https://arxiv.org/pdf/1904.04346.pdf'>Multi Task Learning</a> and <a href='https://arxiv.org/pdf/1904.04346.pdf'>Assessing Quality of Actions</a> research
                                        </li>
                                        <li>
                                            Completed as part of the final project for CS 7643, Deep Learning
                                        </li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </p>
          <div className='cite-div' align='left'>
                Panel image from <a href='https://arxiv.org/pdf/1904.04346.pdf'>MTL AQA dataset</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function KannadaModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            Kannada Translator: Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="left">Developer</span>​
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                           Developed an <a href='https://ast0414.github.io/semit/'>image-to-image 
                                           translation model</a> for written Arabic and Kannada numbers with MNIST
                                        </li>
                                        <li>
                                            Completed as part of the final project for CS 7641, Machine Learning
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

function POVModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            POV Machine: Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="left">Developer</span>​
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Built and programmed a Persistence of Vision machine utilizing Arduino parts and LED lights to display the English alphabet
                                        </li>
                                        <li>
                                            Completed as a final project for CS 3651: Prototyping Intelligent Appliances
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

function ListifyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-text-font">
            Listify: iOS Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='modal-body-text-font'>
            <Container className="mt-2 mb-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <ul className="timeline">
                            <li>
                                <span className="left">Developer</span>​
                                <br></br>
                                <p className="panel-location-font">Atlanta, Georgia</p>
                                <p>
                                    <ul className="bullets">
                                        <li>
                                            Developed an <a href='https://devpost.com/software/listify?ref_content=user-portfolio&ref_feature=in_progress'>iOS application</a> that digitizes shopping lists, allowing users to keep track of what they need to buy 
                                        </li>
                                        <li>
                                            Completed as a submission to HACKGT 7
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

function Projects() {
    const [showSS, setShowSS] = useState(false);
    const [showHPE, setShowHPE] = useState(false);
    const [showKM, setShowKM] = useState(false);
    const [showL, setShowL] = useState(false);
    const [showPOV, setShowPOV] = useState(false);
    return (
    <div className="parallax-projects">
        <div id="projects">
            <div className="title-text-font padding-top-title" align="center">
                My Projects
            </div>
            <Container className="padding-top-60">
                <Row>
                    <Col>
                        <div class="hovereffect">
                            <img class="img-responsive" src={spectroSamPic} width="350px" height="200px" alt=""/>
                                <div class="overlay">
                                    <h2></h2>
                                    <p className='panel-text-font'>
                                        <a onClick={() => setShowSS(true)}>SPECTROSAM</a>
                                        <SpectroModal
                                            show={showSS}
                                            onHide={() => setShowSS(false)}
                                        />
                                    </p>
                                </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="hovereffect">
                            <img className="img-responsive" src={hpePic} width="350px" height="200px" alt=""/>
                                <div class="overlay">
                                    <h2></h2>
                                    <p className='panel-text-font'>
                                    <a onClick={() => setShowHPE(true)}>HUMAN POSE ESTIMATION</a>
                                        <HumanPoseModal
                                            show={showHPE}
                                            onHide={() => setShowHPE(false)}
                                        />
                                    </p>
                                </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="hovereffect">
                            <img className="img-responsive" src={ktPic} width="350px" height="200px" alt=""/>
                                <div class="overlay">
                                    <h2></h2>
                                    <p className='panel-text-font'>
                                    <a onClick={() => setShowKM(true)}>KANNADA TRANSLATOR</a>
                                        <KannadaModal
                                            show={showKM}
                                            onHide={() => setShowKM(false)}
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
                    <div className="hovereffect">
                            <img className="img-responsive" src={povPic} width="350px" height="200px" alt=""/>
                                <div class="overlay">
                                    <h2></h2>
                                    <p className='panel-text-font'>
                                        <a onClick={() => setShowPOV(true)}>POV MACHINE</a>
                                        <POVModal
                                            show={showPOV}
                                            onHide={() => setShowPOV(false)}
                                        />
                                    </p>
                                </div>
                        </div>
                    </Col>
                    <Col className="col-md-auto">
                        <div className="hovereffect">
                            <img className="img-responsive" src={listifyPic} width="350px" height="200px" alt=""/>
                                <div class="overlay">
                                    <h2></h2>
                                    <p className='panel-text-font'>
                                        <a onClick={() => setShowL(true)}>LISTIFY</a>
                                        <ListifyModal
                                            show={showL}
                                            onHide={() => setShowL(false)}
                                        />
                                    </p>
                                </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    </div>
    );
}

export default Projects;
