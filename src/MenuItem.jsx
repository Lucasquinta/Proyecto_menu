import React from 'react';

function MenuItem({ title, description, price }) {
  return (
    <div className="menu-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">${price.toFixed(2)}</p>
    </div>
  );
}

export default MenuItem;