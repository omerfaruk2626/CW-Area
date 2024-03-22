// App.jsx

import React, { useState } from 'react';
import './App.scss';
import ProductCard from './components/PruductCard/ProductCard.jsx';
import Header from './components/header/Header.jsx';
import { products } from './helper/data';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Header onCategoryChange={handleCategoryChange} />
            <ProductCard selectedCategory={selectedCategory} />
        </div>
    );
}

export default App;
