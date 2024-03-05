import React from 'react'
import './SkillsCard.css'

const SkillsCard = ({title, iconUrl, onMouseEnter}) => {
  return (
    <div >
       <ul className='skill-ul'
       onMouseEnter={onMouseEnter}
       >
        <li className='menu-item'>
          <div className='skill-container'>
          <img src={iconUrl} alt={title} className='skill-img'/>
          <p>{title}</p>
          </div>
        </li>
       </ul>
    </div>
  )
}

export default SkillsCard