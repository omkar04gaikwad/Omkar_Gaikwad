import React from 'react';
import './SkillsInfoCard.css';


const SkillsInfoCard = ({ skills }) => {
  return (
      <div className='AppContainer'>
        <div className='Wrapper'>
          <div className='Marquee'>
            <div className='MarqueeGroup'>
              {skills.map((skill, index) => (
                <div className='ImageGroup' key={index}>
                  <img className='Image' src={skill.slink} title={skill.skill} />
                  <p className='skill-p'>{skill.skill}</p>
                </div>
              ))}
            </div>
            <div className='MarqueeGroup'>
              {skills.map((skill, index) => (
                <div className='ImageGroup' key={index + skills.length}>
                  <img className='Image' src={skill.slink} title={skill.skill} />
                  <p className='skill-p'>{skill.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
          
  )
}

export default SkillsInfoCard