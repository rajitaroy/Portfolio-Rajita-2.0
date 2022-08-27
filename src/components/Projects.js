import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-sign.png";
import projImg2 from "../assets/img/project-memory.png";
import projImg3 from "../assets/img/project-intranet.png";
import projImg4 from "../assets/img/project-chatbot.png";
import projImg5 from "../assets/img/project-movie.png";
import projImg6 from "../assets/img/project-emp.png";
import projImg7 from "../assets/img/project-mask.png";
import projImg8 from "../assets/img/project-netflix.png";
import projImg9 from "../assets/img/project-diabetes.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Sign Language Interpreter",
      description: "Converts sign language gestures through a webcam into text in real-time and converts audio/text to sign language gifs.",
      techstack: "Python, Reactjs, Django, Tensorflow, Algorithm: RCNN, OpenCV",
      gitUrl : "https://github.com/rajitaroy/Sign-Language-Interpreter",
      imgUrl: projImg1,
    },
    {
      title: "Entertainment Hub",
      description: "An application to view trending movies and tv shows or search for them, with ratings, casts and trailers.",
      techstack: "Reactjs, APIs",
      gitUrl: "https://github.com/rajitaroy/Movie-App",
      imgUrl: projImg5,
    },
    {
      title: "Memories Keeper",
      description: "Allows one to upload pictures and comment on the pictures uploaded by peers, much like social media, includes GoogleAuth Sign-in feature.",
      techstack: "MongoDB, Expressjs, Reactjs, Nodejs",
      gitUrl: "https://github.com/rajitaroy/Memories-Keeper",
      imgUrl: projImg2,
    },
  ];

  const projects2 = [
    {
      title: "Keya-Chatbot",
      description: "A simple chatbot application using Flask and Deep learning. It is trained to give information about India, but can be used for more learning as per need.",
      techstack: "Python, Flask, Technique: NLP, Keras",
      gitUrl : "https://github.com/rajitaroy/Keya-Chat-bot",
      imgUrl: projImg4,
    },
    {
      title: "Intranet Mailing System",
      description: "A mailing system to exchange information within an organization, without the use of internet.",
      techstack: "Java servlets, MongoDB, hosting: Apache Tomcat, Bootstrap",
      gitUrl: "https://github.com/rajitaroy/Intranet-Mailing-System",
      imgUrl: projImg3,
    },
    {
      title: "Event Management Portal",
      description: "An event registration portal for any organization or institute to host and manage various events, including their payments and receiving participation lists.",
      techstack: "PHP, HTML, CSS, MySQL",
      gitUrl: "https://github.com/rajitaroy/Event-Management-Portal",
      imgUrl: projImg6,
    },
  ];

  const projects3 = [
    {
      title: "Mask Detection App",
      description: "An application to detect if one's wearing a mask in real-time.",
      techstack: "Python, OpenCV, Keras",
      gitUrl : "https://github.com/rajitaroy/Mask-Detection",
      imgUrl: projImg7,
    },
    {
      title: "Netflix Stats",
      description: "A streamlit dashboard to visualize various Netflix TV Shows and Movies based on ratings, age-groups, etc.",
      techstack: "Python, Streamlit, APIs",
      gitUrl: "https://github.com/rajitaroy/Netflix_App",
      imgUrl: projImg8,
    },
    {
      title: "Diabetes Prediction App",
      description: "Predicts if one is suffering from diabetes based on certain medical records.",
      techstack: "Python, Django, Classification algorithms from scikit-learn module",
      gitUrl: "https://github.com/rajitaroy/Diabetes-Predict",
      imgUrl: projImg9,
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of my favorites</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((projects1, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((projects2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((projects3, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects3}
                                />
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
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
