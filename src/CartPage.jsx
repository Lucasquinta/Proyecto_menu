// CartPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutPage from './CheckoutPage'; 

const CartPage = ({ cartItems, clearCart, removeFromCart }) => {
  const [itemQuantities, setItemQuantities] = useState({});

  const handleRemoveFromCart = (itemId) => removeFromCart(itemId);

  const handleQuantityChange = (itemId, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const handleIncrement = (itemId) => handleQuantityChange(itemId, (itemQuantities[itemId] || 1) + 1);

  const handleDecrement = (itemId) => {
    const currentQuantity = itemQuantities[itemId] || 1;
    if (currentQuantity > 0) {
      handleQuantityChange(itemId, currentQuantity - 1);
    }
  };
  

  const calculateTotal = () => cartItems.reduce((total, item) => total + item.price * (itemQuantities[item.id] || 1), 0).toFixed(2);

  const handleBuyClick = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items before proceeding to checkout.');
    } else {
      // Redirect to checkout
      window.location.href = '/CheckoutPage';
    }
  };

  return (
    <div style={{width: '80%', margin: '0 auto', fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>
      <h2 style={{textAlign: 'center', color: '#333'}}>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1em', padding: '1em', border: '1px solid #ddd', borderRadius: '4px'}}>
              <p style={{margin: 0}}>{item.title}</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => handleDecrement(item.id)} style={{ marginRight: '0.5em' }}> - </button>
                <span>{itemQuantities[item.id] || 1}</span>
                <button onClick={() => handleIncrement(item.id)} style={{ marginLeft: '0.5em', marginRight: '50px' }}> + </button>
                <button onClick={() => handleRemoveFromCart(item.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', padding: '0.5em', cursor: 'pointer', display: 'flex'}}>
                  X
                </button>
              </div>
            </div>
          ))}
          <div style={{textAlign: 'right', fontSize: '1.2em', fontWeight: 'bold'}}>
            <p>Total: ${calculateTotal()}</p>
          </div>
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>Your cart is empty</p>
      )}
      <button onClick={clearCart} style={{width: '100%', padding: '1em', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '1em'}}>
        Clear Cart
      </button>
      <button onClick={handleBuyClick} style={{width: '100%', padding: '1em', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '1em'}}>Comprar!</button>
      <hr style={{ margin: '11px 0 14px' }} />
      <Link to="/" style={{display: 'inline', alignItems: 'center', padding: '0'}}>Back to Menu</Link>
    </div>
  );
}

export default CartPage;
