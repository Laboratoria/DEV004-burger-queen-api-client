import React, { useState, useEffect } from 'react'
// import { postOrder } from '../scripts/postOrder';
import { database } from '../scripts/database';

function Product() {

  // let [counter, setCounter] = useState(0)
  // const addCart = () => setCounter(counter + 1)
  // let removeCart = () => setCounter(counter - 1)
  const [client, setClient] = useState('')
  const [results, setResults] = useState()
  const [cart, addToCart] = useState([]);

  const body = { // body will be used by postOrder
    "client": client,
    "products": [cart],
    "status": "pending",
    "dataEntry": new Date().toLocaleString()
  }

  useEffect(() => {  // getting info from database
    // fetch data
    const resultsFetch = async () => {
      const results = await database('products', 'GET', localStorage.getItem("accessToken"))
      setResults(results);
    }
    resultsFetch()
    // console.log("results", results)
  }, []);
  // console.log("results", results)

  return (
    <main className="PantallaInicio">

      {results && results.map((e, index) => { // renders products
        return (
          // results && results.map((e, index) => (
          <section className="cajaInicio">
            <img src={e['image']} alt={e['name']}></img>
            <p id="textoCorreoInvalido" className="textoCorreoInvalido">{e['name']}</p>
            <p id="textoCorreoInvalido" className="textoCorreoInvalido">Precio: {e['price']}</p>
            <div className="amountBox">
              {/* <p id={index} onClick={() => { setCounter(counter - 1); console.log(index) }}>{'<'}</p>
              <p id={`counter${index}`}>{counter}</p> */}

              <button
                onClick={() => { addToCart([...cart, e]); console.log(index) }}
                className="checkoutBoxButtons"
              >Agrega al carrito</button>

            </div>
          </section>
        )
      })}

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
            onClick={() => { database('orders', 'POST', localStorage.getItem("accessToken"), body) }}
          >Enviar a cocina</button>

        </div>
      </section>
    </main>
  )
}

export default Product
