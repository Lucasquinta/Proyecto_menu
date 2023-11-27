import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './cart.css';
import MenuItem from './MenuItem';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import Thanks from './Thanks'

const menuItems = [
  {
    id: 1,
    title: 'Hamburguesa',
    description: 'Una hamburguesa típica.',
    price: 12.99,
  },
  {
    id: 2,
    title: 'Papas fritas',
    description: 'Unas ricas papas fritas en aceite de girasol.',
    price: 15.99,
  },
  {
    id: 3,
    title: 'Pizza',
    description: 'Tomate y queso.',
    price: 19.99,
  },
  {
    id: 4,
    title: 'Coca-Cola',
    description: 'Gaseosa típica.',
    price: 14.99,
  },
  {
    id: 5,
    title: 'Fanta',
    description: 'Gaseosa comun.',
    price: 14.99,
  },
  {
    id: 6,
    title: 'Sprite',
    description: 'Gaseosa normal.',
    price: 14.99,
  },
  {
    id: 7,
    title: 'Helado',
    description: 'Limon, dulce de leche, tramontana.',
    price: 24.99,
  },
  {
    id: 8,
    title: 'Yogurt',
    description: 'Vainilla, frutilla.',
    price: 18.99,
  },
  {
    id: 9,
    title: 'Fruta',
    description: 'Manzana, naranja, mandarina.',
    price: 8.99,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [addedToCartMessage, setAddedToCartMessage] = useState('');

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (id) => {
    const item = menuItems.find((m) => m.id === id);
  
    // Verificar si el elemento ya está en el carrito
    if (cartItems.some((cartItem) => cartItem.id === id)) {
      setAddedToCartMessage(
        <div className="added-to-cart-message">
          <strong>{item.title}</strong> ya está en el carrito
        </div>
      );
    } else {
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setAddedToCartMessage(
        <div className="added-to-cart-message">
          <strong>{item.title}</strong> se ha añadido al carrito
        </div>
      );
    }
  
    // Limpiar el mensaje después de unos segundos
    setTimeout(() => {
      setAddedToCartMessage('');
    }, 2000);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const removeFromCart = (itemId) => {
    const index = cartItems.findIndex((item) => item.id === itemId);
  
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  
  return (
    <Router>
      <div>
        <div className="header">
          <h1 className="App">Tito Calderon Burgas</h1>
          <div className="cart-icon">
          <Link to="/cart"><img src="/carrito.png" alt='Carrito' style={{ width: '100px', height: '100px' }} /></Link>
          </div>
        </div>
        <div className="message-container">
          {addedToCartMessage && <div className="added-to-cart-message">{addedToCartMessage}</div>}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="menu">
                  {menuItems.map((item) => (
                    <MenuItem key={item.id} item={item} addToCart={addToCart} />
                  ))}
                </div>
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage cartItems={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} />
            }
          />
          <Route path="/CheckoutPage" 
            element={<CheckoutPage />}
          />
          <Route path="/Thanks.jsx"
            element={<Thanks />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
