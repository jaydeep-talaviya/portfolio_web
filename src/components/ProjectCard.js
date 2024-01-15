import { Col } from "react-bootstrap";

export const ProjectCard = ({ project_name, project_description, technologies_used }) => {
  return (
    <Col size={12} sm={6} md={4} className="child">
      <div className="card border-secondary project_card h-100">
        <div class="card-body">
          
        <h4 className="card-title pb-2 text-center">{project_name}</h4>
          <div>
          <h5 className=" pb-2">Introduction </h5>
            <span className="card-text">{project_description}</span>
            <h5 className=" py-2">Tools/Technologies </h5>
            <span className="card-subtitle mb-2 text-body-secondary">{technologies_used}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}