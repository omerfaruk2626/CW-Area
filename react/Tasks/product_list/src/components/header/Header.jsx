// Header.jsx

import React from 'react';
import "./header.scss";
import { categories } from '../../helper/data';

const Header = ({ onCategoryChange }) => {
    const handleCategoryChange = (category) => {
        onCategoryChange(category);
    };

    return (
        <header>
            <div className="logo">
                <h1>Product List</h1>
            </div>
            <div className="menu">
                <ul>
                    {categories.map((category, index) => (
                        <li onClick={() => handleCategoryChange(category)} key={index}>{category}</li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;
