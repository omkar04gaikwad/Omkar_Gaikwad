import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ details }) => {
  const handleDemoUrl = (url) => {
    window.open(url, '_blank')
}
  return (
    <div className='project-card'>
        <h6>{details.title}</h6>
        <span>{details.location}</span>
        <br></br>
        <div className='project-duration'>{details.date}</div>
        <div>
          <img src={details.image} alt ='' title={details.link} onClick={() => handleDemoUrl(details.link)}/>
        </div>
        <ul>
            {details.responsibilites.map((item) =>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>

  )
}

export default ProjectCard