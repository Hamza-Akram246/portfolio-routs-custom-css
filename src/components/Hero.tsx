import React from 'react'
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div id="hero" className='hero-container'
    >
        
        <div className='hero-content'>
          <div className='hidden lg:block'></div>

          <div className='hero-text'>
            <div className='hero-msin'>
              <p data-aos="zoom-in-up">Hamza</p>
              <p data-aos="zoom-in-up">Akram</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero