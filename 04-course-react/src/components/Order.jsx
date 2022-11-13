import iconFlechita from '@icons/flechita.svg';
import '@styles/Order.scss';
import React from 'react';

const Order = () => {
  return (
    <div className='Order'>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={iconFlechita} alt='arrow' />
    </div>
  );
};

export default Order;
