//import { useState } from 'react'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <main>
        <article className="product-card">
          <div className="product-card-img">
            <img 
              src="/products/litiere.webp" 
              alt="un frisbee jaune" 
              className="product-card_image"
            />
          </div>
          
          
            <a href="/#" className="product-card_title" rel="stylesheet">
              Trixie Frisbee Caoutchouc Naturel 22 cm pour Chien, Coloris aléatoire
            </a>
            <div className="product-card_price">
              <p className="product-card_price-euros">8</p>
              <p className="product-card_price-cents">99 €</p>
            </div>
          
          <button 
            className='btn-add'
            type='button'
          >
            Ajouter au panier
          </button>
        </article>
      </main>
    </div>
  )
}

export default App
