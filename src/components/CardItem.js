import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ path, label, src, text }) => {
  return (
    <>
      <li className='cards-item'>
        <div className='cards-item-link' to={path}>
          <figure className='cards-item-pic-wrap' data-category={label}>
            <img src={src} alt='Corgi' className='cards-item-img' />
          </figure>
          <div className='cards-item-info'>
            <h5 className='cards-item-text'>{text}</h5>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardItem;
