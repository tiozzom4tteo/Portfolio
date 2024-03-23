import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, detailInfo, id }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} id={id}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a href={detailInfo} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </Col>
  );
};
