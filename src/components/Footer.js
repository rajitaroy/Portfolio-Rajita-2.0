import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <br/><br/><br/>
            <h1>That's all folks!</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br/><br/>
            <div className="social-icon">
              <a href="https://linkedin.com/in/rajita-roy"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/rajitaroy1"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/rajita._roy"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.github.com/rajitaroy"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Hoping to connect with you and creating something new together!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
