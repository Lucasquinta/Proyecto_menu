import React from 'react';
import { Link } from 'react-router-dom';

function Thanks() {
  return (
    <div className="thanks" style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ color: '#6c757d' }}>¡Gracias por tu compra!</h2>
      <p style={{ fontSize: '20px', color: '#6c757d' }}>Tu pedido está en camino. Esperamos que disfrutes de tu comida.</p>
      <h5 style={{ color: '#6c757d' }}>El pago se le será otorgado al repartidor una vez entregado el pedido.</h5>
      <Link to="/" style={{ display: 'inline-block', padding: '10px 20px', textDecoration: 'none', backgroundColor: '#b36300', color: '#fff', borderRadius: '5px' }}>Volver al Menú</Link>
    </div>
  );
}

export default Thanks;












