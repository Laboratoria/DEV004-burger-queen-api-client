import React, { useState/* , useEffect */ } from 'react'
// import { /* Navigate,  */useNavigate } from "react-router-dom"
import './styles.css';
// import { signIn } from '../scripts/signIn';
import { database } from '../scripts/database';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"

function Cart({ cart, addToCart }/* { menuToProducts } */) {

  const [client, setClient] = useState('')
  // const [results, setResults] = useState()
  // const [cart, addToCart] = useState([])

  const body = { // body will be used by postOrder
    "client": client,
    "products": [cart],
    "status": "pending",
    "dataEntry": new Date().toLocaleString()
  }
  function postOrder() {
    if (client === '') {
      alert('Ingresa un nombre para el cliente')
    } else if (cart.length === 0) {
      alert('Añade productos al carrito antes de continuar')
    } else {
      database('orders', 'POST', localStorage.getItem("accessToken"), body)
    }
  }

  return (
    <>
      <section className="cartBox">  {/* checkout cart box */}
        <div className="cart-list">

          <h1>Cliente:</h1> {/* getting client name */}
          <input
            type="text"
            placeholder="Nombre"
            className="inputBox"
            onChange={(e) => setClient(e.target.value)}
          ></input>
          <br></br><br></br>

          <h1>Carrito:</h1><br></br>  {/* rendering products inside the cart */}
          {/* cart items */}
          {cart.map((item, index) => {
            return (
              <div className="cart">
                <h3>{item.name}</h3>
                <p>Precio: {item.price}</p>
                <button
                  className="checkoutBoxButtons"
                  onClick={(e) => {
                    // remove item from cart
                    cart.splice(index, 1);
                    /* let x = cart; */
                    addToCart([...cart]);
                  }}
                >Quitar del carrito</button>
                <br></br><br></br>
              </div>
            );
          })}
          <br></br>

          <h1>Total: {cart.reduce((a, b) => a + b.price, 0)}</h1><br></br>  {/* price total */}
          {/* <p>{cart.reduce((a, b) => a + b.price, 0)}$</p> */}
          <button
            className="checkoutBoxButtons"
            onClick={() => { postOrder()/* database('orders', 'POST', localStorage.getItem("accessToken"), body) */ }}
          >Enviar a cocina</button>

        </div>
      </section>
    </>
  )
}

export default Cart;