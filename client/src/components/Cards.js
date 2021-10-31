import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bigstock-Fake-News-Or-Fact-Scanning-Wit-237556897.jpg'
              text='Explore the latest trusted news and post your news'
              label='News'
              path='/news'
            />
            <CardItem
              src='images/45530DEE-60D9-418D-84055976F0ECCD35_source.jpg'
              text='You can learn how to spot a fake news'
              label='News'
              path='/articles'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
