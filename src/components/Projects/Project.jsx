import React, { useRef } from 'react';
import './Project.css';
import { PROJECT } from '../../utils/data';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard/ProjectCard';

const Project = () => {
  const slideRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };

  const slideleft = () => {
    slideRef.current.slickPrev();
  };

  return (
    <section id='project' className='project-container'>
      <h5>Projects and Publications</h5>
      <div className='project-content'>
        <div className='arrow-right' onClick={slideRight}>
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>
        <div className='arrow-left' onClick={slideleft}>
          <span className='material-symbols-outlined'>chevron_left</span>
        </div>
        <Slider ref={slideRef} {...settings}>
          {PROJECT.map((item) => (
            <ProjectCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
