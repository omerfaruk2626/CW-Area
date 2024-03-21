import React from 'react';
import './App.scss';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import Header from './components/header/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      <ProductCard />
    </div>
  );
}

export default App;

