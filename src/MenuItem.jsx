import React from 'react';

function MenuItem({ item, addToCart }) {
  const { title, description, price } = item;

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="menu-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">${price.toFixed(2)}</p>
      <button onClick={()=>handleAddToCart(id)}>Add to Cart</button>
    </div>
  );
}

export default MenuItem;