//import { useState } from 'react'

import ProductCard from "./components/ProductCard"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <main>
        <section className="products">
          <h2>Tous nos produits</h2>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
        
      </main>
    </div>
  )
}

export default App
