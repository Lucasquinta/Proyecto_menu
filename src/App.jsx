import React, { useState, useEffect } from 'react';
import './App.css';

const menuItems = [
  {
    id: 1,
    title: 'Pizza',
    description: 'Delicious pizza with various toppings',
    price: 10.99,
  },
  {
    id: 2,
    title: 'Burger',
    description: 'Juicy burger with cheese and veggies',
    price: 8.99,
  },
  {
    id: 3,
    title: 'Salad',
    description: 'Fresh salad with mixed greens and dressing',
    price: 6.99,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
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
  const addToCart = (id) => {
    const ids = id;
    const item = menuItems.find(m=>m.id===ids);
    const newItem = item.title ;
    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  useEffect (()=>{
    const carrito = localStorage.getItem("carItem");
    console.log(carrito);
  })

  return (
    <div className="App">
      <h1>Restaurant Menu</h1>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;