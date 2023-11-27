// MenuItem.jsx
import React from 'react';


function MenuItem({ item, addToCart }) {
  const { id, title, description, price } = item;

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="menu-item">
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <p className="price">${typeof price === 'number' ? price.toFixed(2) : price}</p>
      <button className="items" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default MenuItem;
