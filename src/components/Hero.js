import React from 'react';
import { Button } from './Button';
import '../App.css';
import './Hero.css';
import BasicModal from '../components/Modal';

const Hero = () => {
  return (
    <div className='hero-container'>
      <video src='assets/videos/corgihero4.mp4' autoPlay loop muted />
      <h1>Bed and Breakfast</h1>
      <p>Are you ready to relax?</p>
      <div className='hero-btns'>
        <Button
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      
          <BasicModal className='modal button2' />
        
      </div>
    </div>
  );
};

export default Hero;
