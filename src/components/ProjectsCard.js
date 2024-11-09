import React from 'react';
// import './ProjectCard.css'; // Optional for styles

function ProjectsCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <button className="read-more-button">Read More</button>
    </div>
  );
}

export default ProjectsCard;
