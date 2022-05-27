import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          subscribe to receive latest discounts and more!
        </p>
        <p className='footer-subscription-text'>
          you can cancel subscription at any time.
        </p>
        <div className='input-areas'>
          <form action=''>
            <input
              type='email'
              name='email'
              placeholder='Enter your email...'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About us</h2>
            <Link to='/'>Corgis</Link>
            <Link to='/'>Estate</Link>
            <Link to='/'> Staff</Link>
            <Link to='/'>Policy</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
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
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
