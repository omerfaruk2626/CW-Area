import React from 'react';
import { products } from "../../helper/data";
import "./ProductCard.scss";

const ProductCard = () => {
    return (
        <main>
            {products.map((product) => (
                <div key={product.id} className="images">
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </main>
    );
}

export default ProductCard;
