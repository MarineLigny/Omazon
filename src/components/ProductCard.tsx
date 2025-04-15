import { Link } from "react-router";

function ProductCard() {

    return(
        <article className="product-card">

          <Link className="product-card-img" to="/productCard">
            <img 
              src="/products/litiere.webp" 
              alt="un frisbee jaune" 
              className="product-card-img_image"
            />
          </Link>
          
          <Link to="/productCard" className="product-card_title" rel="stylesheet">
              Trixie Frisbee Caoutchouc Naturel 22 cm pour Chien, Coloris aléatoire
          </Link>

          <div className="product-card_price">
            <p className="product-card_price-euros">8</p>
            <p className="product-card_price-cents">99 €</p>
          </div>
          
          <button 
            className='btn-add'
            type='button'
            onClick={() => console.log("Ajout au panier :")}
          >
            Ajouter au panier
          </button>
        </article>
    )
}

export default ProductCard;