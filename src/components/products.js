import React, { useState, useEffect } from 'react'
// import { /* Navigate,  */useNavigate } from "react-router-dom"
import './styles.css';
// import { signIn } from '../scripts/signIn';
import { database } from '../scripts/database';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"

function Products({ cart, addToCart }) {

  const [results, setResults] = useState()
  // const [cart, addToCart] = useState([]);

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
    <>
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
    </>
  )
}

export default Products;