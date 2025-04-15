import ProductCard from "./ProductCard";

function NewProducts() {
    return (
        <section className="products-new">
          <h2>Nouveautés</h2>
          <ul className="products-new-list">
            <li><ProductCard /></li>
            <li><ProductCard /></li>
            <li><ProductCard /></li>
            <li><ProductCard /></li>
          </ul> 
        </section>
    )
}
export default NewProducts;