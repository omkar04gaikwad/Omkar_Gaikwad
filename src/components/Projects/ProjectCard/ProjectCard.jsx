import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ details }) => {
  const handleDemoUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='project-card'>
      <h6>{details.title}</h6>
      <span>{details.location}</span>
      <br />
      <div className='project-duration'>{details.date}</div>
      <div>
        <img src={details.image} alt='Project' title={details.link} onClick={() => handleDemoUrl(details.link)} />
      </div>
      <p>{details.summary}</p>
      <ul>
        {details.responsibilities.map((item, index) => (
          <li key={index}><strong>{item.title}:</strong> {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
