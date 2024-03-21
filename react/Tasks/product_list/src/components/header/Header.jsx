import React from 'react';
import "./header.scss";
const Header = () => {
    return (
        <header>
            <h1>Product List</h1>
            <ul>
                <li>ALL</li>
                <li>ELECTRONICS</li>
                <li>JEWELERY</li>
                <li>MEN'S CLOTHING</li>
                <li>WOMEN'S CLOTHING</li>
            </ul>
        </header>
    );
}

export default Header;