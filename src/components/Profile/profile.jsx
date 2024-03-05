import React from 'react'
import './profile.css'
const Hero = () => {
  return (
    <section id='profilediv' className='hero-container'>
        <div className='hero-content'>
        <h2>Omkar Rajendra Gaikwad</h2>
            <h3>I'm a Electrical and Computer Engineer</h3>
            <p>
                Passionate Computer Engineer | Transforming Ideas into Seamless and
                Stunning Solutions
            </p>
        </div>

        <div className='hero-img'>
            <div>
                    <img src = './assets/images/hero.jpg' alt=""/>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src = './assets/images/algo.png' alt=""/>
                </div>
                <div className='tech-icon'>
                    <img src = './assets/images/osci.png' alt=""/>
                </div>
                <div className='tech-icon'>
                    <img src = './assets/images/cv.png' alt=""/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero