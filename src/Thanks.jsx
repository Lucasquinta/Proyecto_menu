import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Thanks() {
  const [isHovered, setHovered] = useState(false);

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    backgroundColor: isHovered ? '#e56121' : '#cb4c08', // Cambia el color cuando se pasa el mouse
    color: '#fff',
  };

  return (
    <div className="thanks" style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ color: '#000000' }}>¡Gracias por tu compra!</h2>
      <p style={{ fontSize: '20px', color: '#000000' }}>Tu pedido está en camino. Esperamos que disfrutes de tu comida.</p>
      <Link
        to="/"
        style={buttonStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        back to menu
      </Link>
    </div>
  );
}

export default Thanks;



