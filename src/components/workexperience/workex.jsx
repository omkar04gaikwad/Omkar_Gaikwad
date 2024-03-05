import React from 'react'
import './workex.css'
import { WORK_EXPERIENCE } from '../../utils/data';
const workex = () => {

  return (
    <div id='workexperience'>
      <h5>Work Experience</h5>
      <div className='ExpContainer'>
        <div className='ExpWrappper'>
          <div className='ExpMarquee'>
            <div className='ExpMarqueeGroup'>
              {
                WORK_EXPERIENCE.map((item) => (
                  <div className='work-experience-card'>
                    <h6>{item.title}</h6>
                    <img src={item.logo} alt='' title= {item.location} className='work-img' />
                    <br/>
                     <p>{item.location}</p>
                    <br/>
                    <div className='workex-duration'>{item.date}</div>
                    <ul>
                        {item.responsibilites.map((item) =>(
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default workex