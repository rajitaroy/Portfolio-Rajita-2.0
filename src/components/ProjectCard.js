import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, techstack, gitUrl, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/><br/>
          <span><b>TechStack: </b>{techstack}</span><br/><br/>
          <a href={gitUrl}>
            <h5>Code</h5><Github></Github></a>
        </div>
      </div>
    </Col>
  )
}
