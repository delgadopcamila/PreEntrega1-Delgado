import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import '../styles/CartWidget.css';
const CartWidget = () => {
  const itemCount = 5; 

  return (
    <div className="cart-widget">
      <FaShoppingCart className="gamer-cart-icon" />
      {itemCount > 0 && (
        <span className="gamer-cart-badge">{itemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;