// MenuItem.jsx
import React from 'react';

function MenuItem({ item, addToCart }) {
  const { title, description, price } = item;

  const handleAddToCart = () => {
    addToCart(item.id);
  };

  return (
    <div className="menu-item">
      <h3 style={{ color: 'black' }}>{title}</h3>
      <p className="desc">{description}</p>
      <p className="price">${typeof price === 'number' ? price.toFixed(2) : price}</p>
      <button className="items" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem; 
