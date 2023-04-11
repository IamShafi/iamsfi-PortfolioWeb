import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import austImg from "../assets/img/aust.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
  
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Education</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={austImg} alt="Contact Us"/>
                      
                    </Col>
                    <div class="education-card-right">
                      <h4 class="education-text-school" >Ahsanullah University of Science and Technology</h4>
                    </div>
                    <h5 class="education-text-subHeader">Bachelor of Science in Computer Science and Engineering</h5>
                    <p class=" education-text-duration">July 2019 - December 2023</p>
                    <p class="education-text-desc">Dhaka, Bangladesh</p>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
/*
<div class="education-section" id="education">
<h1 class="education-heading">Education</h1>
<div class="education-card-container">
<div>
<div class="react-reveal education-card" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-668878502918721-2;">
<div class="education-card-left">
<img crossorigin="anonymous" class="education-roundedimg" src="/static/media/sust logo.f28ffd1a.png" alt="Shahjalal University of Science and Technology">
</div>
<div class="education-card-right">
<h5 class="education-text-school">Shahjalal University of Science and Technology</h5>
<div class="education-text-details">
<h5 class="education-text-subHeader">Bachelor of Science in Computer Science and Engineering</h5>
<p class=" education-text-duration">February 2017 - February 2022</p><p class="education-text-desc">Sylhet, Bangladesh</p>
<div class="education-text-bullets"><ul></ul></div></div></div></div><div class="react-reveal education-card-border" style="animation-fill-mode: both; animation-duration: 2000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-668878502918721-4;"></div>
</div><div><div class="react-reveal education-card" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-668878502918721-2;">
<div class="education-card-left"><img crossorigin="anonymous" class="education-roundedimg" src="/static/media/Logo_of_DRMC.14e5d4df.png" alt="Dhaka Residential Model College"></div>
<div class="education-card-right"><h5 class="education-text-school">Dhaka Residential Model College</h5>
<div class="education-text-details"><h5 class="education-text-subHeader">Higher Secondary</h5>
<p class=" education-text-duration">July 2014 - July 2016</p><p class="education-text-desc">Dhaka, Bangladesh</p>
<div class="education-text-bullets"><ul></ul></div></div></div></div>
<div class="react-reveal education-card-border" style="animation-fill-mode: both; animation-duration: 2000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-668878502918721-4;">
</div>
</div>
</div>
</div>
*/
