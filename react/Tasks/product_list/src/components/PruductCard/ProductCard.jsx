import ( products ) from "../../helper/data"
import "./ProductCard.scss";

const PruductCard = () => {

    return (
        <main>
            {products.map((product) => (
                <div key={pruduct.id} className="images">
                    <img src={product.image} alt={product.title} />
                    <p> {product.title}</p>
                    <p> {product.price}</p>
                    <p> {product.description}</p>
                </div>
            ))}
        </main>
}