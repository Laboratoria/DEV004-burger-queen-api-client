import React, { useState, useEffect } from 'react'
// import { postOrder } from '../scripts/postOrder';
import { database } from '../scripts/database';

function Kitchen() {

  const [results, setResults] = useState()
  // const [order, orderReady] = useState([])

  const body = { // body will be used by postOrder
    "status": "delivered",
    "dateProcessed": new Date().toLocaleString()
  }

  useEffect(() => {  // getting info from database
    // fetch data
    const resultsFetch = async () => {
      const results = await database('orders', 'GET', localStorage.getItem("accessToken"))
      setResults(results);
      // console.log(results[0])
    }
    resultsFetch()
    // console.log("results", results)
  }, []);

  return (
    <main className="PantallaInicio">
      {results && results.map((e, index) => { // renders products
        
        // console.log(e.id)
        return (
          // results && results.map((e, index) => (
          <section className="cartBox">
            {e['products'].map((products, index) => {
            console.log(products['product']['name'])
            return (
              <>
                <img src={products['product']['image']} alt={products['product']['name']}></img>
                <p id="textoCorreoInvalido" className="textoCorreoInvalido">{products['product']['name']}</p><br></br>
              </>
            )
          })
        }
            {/* <img src={e['image']} alt={e['name']}></img> */}
            <p
              id="textoCorreoInvalido"
              className="textoCorreoInvalido">
              ID: {e.id}<br></br>
              STATUS: {e['status']}<br></br>
              LOGGED: {e['dataEntry']}<br></br>
              READY: {e['dateProcessed']}</p><br></br>
            {/* <p id="textoCorreoInvalido" className="textoCorreoInvalido">STATUS: {e['status']}</p> */}
            <div className="amountBox">
              {/* <p id={index} onClick={() => { setCounter(counter - 1); console.log(index) }}>{'<'}</p>
            <p id={`counter${index}`}>{counter}</p> */}

              <button
                onClick={() => {
                  database(`orders/${e.id}`, 'PATCH', localStorage.getItem("accessToken"), body)
                  // remove item from cart
                  // console.log(results)
                  // results.splice(index, 1);
                  // orderReady([...results]);
                  console.log(results)
                }}
                className="checkoutBoxButtons"
              >Listo</button>

            </div>
          </section>
        )
      })}
    </main>
  )
}

export default Kitchen
