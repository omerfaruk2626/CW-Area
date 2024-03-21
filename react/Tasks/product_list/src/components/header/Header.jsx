import React from 'react';
import "./header.scss";
const Header = () => {
    return (
        <header>
            <div className="logo">
            <h1>Product List</h1>
            </div>
            <div className="menu"><ul>
                <li>ALL</li>
                <li>ELECTRONICS</li>
                <li>JEWELERY</li>
                <li>MEN'S CLOTHING</li>
                <li>WOMEN'S CLOTHING</li>
            </ul></div>
        </header>
    );
}

export default Header;