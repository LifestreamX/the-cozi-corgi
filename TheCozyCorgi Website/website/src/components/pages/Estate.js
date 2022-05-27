import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import outside1 from '../../estateimages/outside1.jpg';
import outside2 from '../../estateimages/outside2.jpg';
import outside3 from '../../estateimages/outside3.jpg';
import outside4 from '../../estateimages/outside4.jpg';
import inside1 from '../../estateimages/inside1.jpg';
import inside2 from '../../estateimages/inside2.jpg';
import inside3 from '../../estateimages/inside3.jpg';
import inside4 from '../../estateimages/inside4.jpg';

export default function Estate() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='estate-wrapper'>
      <Slider {...settings}>
        <div>
          <img src={outside1} alt='outside1' className='estate-images' />
        </div>
        <div>
          <img src={outside2} alt='outside2' className='estate-images' />
        </div>
        <div>
          <img src={outside3} alt='outside3' className='estate-images' />
        </div>
        <div>
          <img src={outside4} alt='outside4' className='estate-images' />
        </div>
        <div>
          <img src={inside1} alt='inside1' className='estate-images' />
        </div>
        <div>
          <img src={inside2} alt='inside2' className='estate-images' />
        </div>
        <div>
          <img src={inside3} alt='inside3' className='estate-images' />
        </div>
        <div>
          <img src={inside4} alt='inside4' className='estate-images' />
        </div>
      </Slider>
    </div>
  );
}
