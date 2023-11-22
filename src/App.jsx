import React from 'react';
import MenuItem from './MenuItem.jsx';
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
  return (
    <div className="App">
      <h1>Restaurant Menu</h1>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;