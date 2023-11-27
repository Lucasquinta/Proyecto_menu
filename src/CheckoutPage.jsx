import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

function CheckoutPage({ clearCart }) {
  const [address, setAddress] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleConfirm = () => {
    if (selectedPayment && address.trim() !== '') {
      // Ejecutar la función de limpiar el carrito antes de redirigir
      clearCart();
      setConfirmed(true);
      // Redirigir a la página de agradecimiento
      navigate('/Thanks.jsx');
    } else {
      alert('Por favor, completa la dirección y selecciona un método de pago.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="checkout-container">
        <h2>Checkout</h2>
        <div>
          <label htmlFor="address">Dirección de Envío:</label>
          <input type="text" id="address" value={address} onChange={handleAddressChange} />
        </div>
        <div>
          <label>Método de Pago:</label>
          <select value={selectedPayment} onChange={handlePaymentChange}>
           <option value="defecto" style={{backgroundColor: '#633803', color: '#ffd7a6'}}>Selecciona metodo de pago</option>
           <option value="efectivo">Efectivo</option>
           {/* Al repartidor recibira la plata en efectivo al momento de entregar el pedido */}
           <option value="tarjeta">Tarjeta</option>
           {/* El repartidor usara un lector de tarjetas para efectuar el pago al momento de entregar el pedido */}
           <option value="mercadopago">MercadoPago</option>
           {/* El repartidor dara el alias al cliete para que realice el pago al momento de entregar el pedido, una vez comprobado, se ira */}
           </select>
        </div>

        <button onClick={handleConfirm}>Confirmar Compra</button>
      </div>

      <hr style={{ margin: '50px 0 20px' }} />
      <Link to="/" style={{ display: 'inline', alignItems: 'center', padding: '0' }}>
        Back to Menu
      </Link>
    </div>
  );
}

export default CheckoutPage;