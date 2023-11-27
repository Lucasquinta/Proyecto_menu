// CheckoutPage.jsx
import React, { useState } from 'react';

import './CheckoutPage.css'; // Asegúrate de tener el estilo para la página de checkout

function CheckoutPage(){
  const [address, setAddress] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(''); // Estado para el método de pago

  const [confirmed, setConfirmed] = useState(false);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleConfirm = () => {
    // Verifica que se haya seleccionado un método de pago y que la dirección no esté vacía
    if (selectedPayment && address.trim() !== '') {
    
    function onConfirm(){({ address, paymentMethod: selectedPayment })};
    window.location="/Thanks.jsx"
    setConfirmed(true); 
   
    } else {
      // Muestra un mensaje de error o realiza otra lógica según tus necesidades
      alert('Por favor, completa la dirección y selecciona un método de pago.');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div>
        <label htmlFor="address">Dirección de Envío:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} />
      </div>
      <div>
        <label>Método de Pago:</label>
        <select value={selectedPayment} onChange={handlePaymentChange}>
          <option value="">Selecciona un método de pago</option>
          <option value="efectivo">Efectivo</option>
          <option value="tarjeta">Tarjeta</option>
          <option value="mercadopago">MercadoPago</option>
        </select>
      </div>

      <button onClick={handleConfirm}>Confirmar Compra</button>
       
    </div>
  );
}

export default CheckoutPage;
