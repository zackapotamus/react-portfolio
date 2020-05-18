import React from "react";

const Project = (props) => {
  return (
    <div className="col-12 col-md-6">
      <div className="portfolio-content-box lighten shadow">
        <img className="portfolio-image" src={props.image} alt={props.altText} />
        <div className="portfolio-banner">
          <a
            className="portfolio-link"
            href={props.hostedLink}
            target="_blank" rel="noopener noreferrer"
          >
            {props.projectName}
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
