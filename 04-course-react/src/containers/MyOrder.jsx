import OrderItem from '@components/OrderItem';
import iconFlechita from '@icons/flechita.svg';
import '@styles/MyOrder.scss';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img className='pointer' src={iconFlechita} alt='arrow' />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        <div className='cart-product-list'>
          {state.cart.map(product => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className='primary-button'>Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
