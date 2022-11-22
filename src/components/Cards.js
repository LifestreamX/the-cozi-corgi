import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Meet our Amazing Corgis!</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-item'>
            <CardItem
              src='assets/images/willow1.jpg'
              text='Willow will make sure you wake up even if you want to sleep in'
              label='Willow'
              path='/corgis'
            />
            <CardItem
              src='assets/images/wollie1.jpg'
              text='Wollie will keep you company at anytime day or night'
              label='Wollie'
              path='/corgis'
            />
          </ul>
          <ul className='cards-item'>
            <CardItem
              src='assets/images/room1.jpg'
              text='wake up next to our beautiful corgis that will not bark'
              label='Rooms'
              path='/estate'
            />
            <CardItem
              src='assets/images/wollie2.jpg'
              text='Pick a outfit for our corgis to wear anytime!'
              label='Fashion'
              path='/corgis'
            />
            <CardItem
              src='assets/images/house1.jpg'
              text='Stay in our beautiful estate looking over the ocean'
              label='Luxury'
              path='/estate'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
