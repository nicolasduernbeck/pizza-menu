import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>The best pizza in the world. Choose one from our 6 Dishes.</p>
          <ul className="pizzas">
            {pizzas.map(pizza => {
              return (
                <Pizza
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  photo={pizza.photoName}
                  key={pizza.name}
                  soldOut={pizza.soldOut}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <h2>We are still working on our menu</h2>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.soldOut ? 'sold-out' : ''}`}>
      <img src={props.photo} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
        <span>{props.soldOut ? 'SOLD OUT' : props.price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer(props) {
  console.log(props);
  const openHour = 12;
  const closeHour = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;
  return <footer className="footer">{isOpen && <Order />}</footer>;
}

function Order() {
  return (
    <div className="oder">
      <p>We are open</p>
      <button className="btn">Order now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
