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

  const handleIncrement = (itemId) => handleQuantityChange(itemId, (itemQuantities[itemId] || 0) + 1);

  const handleDecrement = (itemId) => handleQuantityChange(itemId, Math.max((itemQuantities[itemId] || 0) - 1, 0));

  const calculateTotal = () => cartItems.reduce((total, item) => total + item.price * (itemQuantities[item.id] || 1), 0).toFixed(2);

  return (
    <div style={{width: '80%', margin: '0 auto', fontFamily: 'Arial, sans-serif'}}>
      <h2 style={{textAlign: 'center', color: '#333'}}>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1em', padding: '1em', border: '1px solid #ddd', borderRadius: '4px'}}>
              <p style={{margin: 0}}>{item.title}</p>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <button onClick={() => handleDecrement(item.id)} style={{marginRight: '0.5em'}}> - </button>
                <span>{itemQuantities[item.id] || 1}</span>
                <button onClick={() => handleIncrement(item.id)} style={{marginLeft: '0.5em'}}> + </button>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)} style={{backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', padding: '0.5em', cursor: 'pointer'}}>
                X
              </button>
            </div>
          ))}
          <div style={{textAlign: 'right', fontSize: '1.2em', fontWeight: 'bold'}}>
            <p>Total: ${calculateTotal()}</p>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
      <button onClick={clearCart} style={{width: '100%', padding: '1em', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '1em'}}>
        Clear Cart
      </button>
      <Link to="/CheckoutPage">
        <button disabled={cartItems.length === 0} style={{width: '100%', padding: '1em', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '1em'}}>Comprar!</button>
      </Link>
      <Link to="/" style={{display: 'block', textAlign: 'center'}}>Back to Menu</Link>
    </div>
  );
}

export default CartPage;