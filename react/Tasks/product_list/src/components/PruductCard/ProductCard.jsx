// ProductCard.jsx

import React from 'react';
import { products } from "../../helper/data";
import "./ProductCard.scss";

const ProductCard = ({ selectedCategory }) => {
    const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

    return (
        <div className='main'>
            {filteredProducts.map((product) => (
                <div key={product.id} className="images">
                    <img src={product.image} alt={product.title} />
                    <h4 className="title">{product.title}</h4>
                    <p className="price">{product.price} $</p>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;
