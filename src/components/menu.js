import React, { useState, useEffect } from 'react'
import { postOrder } from '../scripts/postOrder';

function Product() {

  // let [counter, setCounter] = useState(0)
  // const addCart = () => setCounter(counter + 1)
  // let removeCart = () => setCounter(counter - 1)
  const [client, setClient] = useState('')
  const [results, setResults] = useState()
  const [cart, addToCart] = useState([]);

  const body = {
    "client": client,
    "products": [cart],
    "status": "pending",
    "dataEntry": new Date().toLocaleString()
  }

  /* async function postOrder() {
    let result = await fetch('http://localhost:8080/orders', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "authorization": "Bearer " + localStorage.getItem("accessToken")
      },
      body: JSON.stringify(body)
    })
    result = await result.json()
    // console.log(localStorage.getItem("accessToken"))
    // console.log(result)
    localStorage.setItem(`Order ${result["id"]}`, JSON.stringify(result))
    // setResultText("Result: " + new Date().toLocaleString())
  } */

  useEffect(() => {
    // fetch data
    const resultsFetch = async () => {
      let result = await (fetch('http://localhost:8080/products', {
        method: 'GET',
        headers: {
          "content-type": "application/json",
          "authorization": "Bearer " + localStorage.getItem("accessToken")
        }/* ,
      body: JSON.stringify(body) */
      }))
      let results = await result.json()
      // console.log("results", results)
      // set state when the data received
      setResults(results);
    }
    resultsFetch()
    // console.log("results", results)
  }, []);
  // console.log("results", results)

  return (
    <main className="PantallaInicio">

      {results && results.map((e, index) => {
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
                className="botonInicio"
              >Agrega al carrito</button>

            </div>
          </section>
        )
      })}

      <section className="cartBox">
        <div className="cart-list">

          <h1>Cliente:</h1>
          <input
            type="text"
            placeholder=" Nombre"
            onChange={(e) => setClient(e.target.value)}
          ></input>
          <br></br><br></br>

          <h1>Carrito:</h1><br></br>
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
                    let x = cart;
                    addToCart([...x]);
                  }}
                >Quitar del carrito</button>
                <br></br><br></br>
              </div>
            );
          })}
          <br></br>

          <h1>Total: {cart.reduce((a, b) => a + b.price, 0)}</h1><br></br>
          {/* <p>{cart.reduce((a, b) => a + b.price, 0)}$</p> */}
          <button
            className="checkoutBoxButtons"
            onClick={() => {postOrder(body, localStorage.getItem("accessToken"))}}
          >Enviar a cocina</button>

        </div>
      </section>
    </main>
  )


}


export default Product