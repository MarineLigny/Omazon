//import { useState } from 'react'

import Categories from "./components/Categories"
import NewProducts from "./components/NewProducts"
import Products from "./components/Products"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <main>
        <Categories />
        <NewProducts />
        <Products />
        
      </main>
    </div>
  )
}

export default App
