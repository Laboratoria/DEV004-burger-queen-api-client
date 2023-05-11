import React, { useState/* , useEffect */ } from 'react'
// import { postOrder } from '../scripts/postOrder';
// import { database } from '../scripts/database';
import Products from './products';
import Cart from './cart';

function Menu() {

  const [cart, addToCart] = useState([])

  return (
    <main className="PantallaInicio">

      <Products cart={cart} addToCart={addToCart}/* menuToProducts={results}  */ />
      <Cart cart={cart} addToCart={addToCart} />

    </main>
  )
}

export default Menu
