import iconAddedCart from '@icons/bt_added_to_cart.svg';
import iconAddCart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, state } = useContext(AppContext);

  const handleClick = item => {
    itsProductAdded() ? removeFromCart(item) : addToCart(item);
  };

  const itsProductAdded = () =>
    state.cart.some(item => item.id === product.id) ? true : false;

  return (
    <div className='ProductItem'>
      <img src={product.images[0]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          {itsProductAdded() ? (
            <img className='pointer' src={iconAddedCart} alt='' />
          ) : (
            <img className='pointer' src={iconAddCart} alt='' />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
