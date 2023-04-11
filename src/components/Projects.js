import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import githubimg from "../assets/img/icons8-github-500.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pizzabites",
      description: "A web application for ordering pizza Online",
      imgUrl: githubimg,
      source_code_link: "https://github.com/IamShafi/Pizzabites-AUST-CSE-3100-Software-Development-IV",
    },
    {
      title: "AniChan",
      description: "Ani-Chan is an Anime Streaming Website where user can enjoy watching anime",
      imgUrl: githubimg,
      source_code_link: "https://github.com/IamShafi/AniChan--AUST-CSE-3200-Software-Development-V",
    },
    {
      title: "Maveryth",
      description: "music player app",
      imgUrl: githubimg,
      source_code_link: "https://github.com/IamShafi/Maveryth-AUST-CSE-2200-Software-Development-III",
    },
    
    
  ];

  const petprojecs = [
    {
      title: "Javascript Snake Game",
      description: "JS pc game",
      imgUrl: githubimg,
      source_code_link: "https://github.com/IamShafi/Javascript-Snake-PC-Game",
    },
    
    
  ];

  const miscs = [
    {
      title: "ConcertMania",
      description: "A database management system to manage all upcoming concerts",
      imgUrl: githubimg,
      source_code_link: "https://github.com/IamShafi/ConcertMania--AUST-CSE-3104-DATABASE-MANAGEMENT-SYSTEM",
    },
    
    
  ];


 
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">DEV</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Petproject</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">MISC</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp " : ""}>

                    <Tab.Pane eventKey="first" >
                   
                      <Row  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                      
                        {
                          projects.map((project, index) => {
                            
                            return (
                              <a href={project.source_code_link} target="_blank" style={{ display:"flex", justifyContent:"center", color: "white", textDecoration: "none"  }}>
                                
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />

                                </a>
                                
                            )
                          })
                        }
                        
                      </Row>
                   
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        {
                          petprojecs.map((pet, index) => {
                            return (

                              <a href={petprojecs.source_code_link} target="_blank" style={{ display:"flex", justifyContent:"center", color: "white", textDecoration: "none"  }}>

                              <ProjectCard
                                key={index}
                                {...pet}
                                />

                                </a>
                            )
                          })
                        }
                        
                      </Row>
                      
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        {
                          miscs.map((misc, index) => {
                            return (
                              <a href={misc.source_code_link} target="_blank" style={{ display:"flex", justifyContent:"center", color: "white", textDecoration: "none"  }}>

                              <ProjectCard
                                key={index}
                                {...misc}
                               
                                />

                                </a>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
