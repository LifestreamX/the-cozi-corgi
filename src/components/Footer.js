import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TheCozyCorgi<i className='fas fa-paw'></i>
            </Link>
          </div>
          <small className='website-rights'>TheCozyCorgi © 2022</small>
          <div className='social-icons'>
            {/* <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/willow_and_wollie/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-instagram'></i>
              
            </a> */}
            <a
              class='social-icon-link facebook'
              href='https://facebook.com'
              rel='noreferrer'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://instagram.com'
              rel='noreferrer'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://youtube.com'
              rel='noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com'
              rel='noreferrer'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
