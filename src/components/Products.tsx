import ProductCard from "./ProductCard";

function Products() {

    return(
        <section className="products">
          <h2>Tous nos produits</h2>
          <ul className="products-list">
            <li><ProductCard /></li>
            <li><ProductCard /></li>
            <li><ProductCard /></li>
            <li><ProductCard /></li>
            <li><ProductCard /></li>
          </ul> 
        </section>
    )
}
export default Products;