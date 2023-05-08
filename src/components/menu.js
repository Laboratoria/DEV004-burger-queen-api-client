import React, { useState, useEffect } from 'react'
// import logo from '../logo.svg';
// import { onNavigate } from './lib/onNavigate.js';
import './styles.css'
import { click } from '@testing-library/user-event/dist/click';

function Menu() {

  const [client, setClient] = useState('')
  const [resulText, setResultText] = useState("Result:");

  const [results, setResults] = useState()

  let [counter, setCounter] = useState(0)
  // const addCart = () => setCounter(counter + 1)
  // let removeCart = () => setCounter(counter - 1)

  if (counter < 0) {
    setCounter(0);
  }

  /* document.getElementById(`counter${index}`).addEventListener('click', setCounter)

  function setCounter(index) {
    
  } */

  let body = {
    "client": client,
    "products": [
      {
        "qty": 1,
        "product": {
          "id": 1,
          "name": "Sandwich de jamón y queso",
          "price": 1000,
          "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
          "type": "Desayuno",
          "dateEntry": "2022-03-05 15:14:10"
        }
      },
      {
        "qty": 1,
        "product": {
          "id": 2,
          "name": "Café americano",
          "price": 500,
          "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
          "type": "Desayuno",
          "dateEntry": "2022-03-05 15:14:10"
        }
      }
    ],
    "status": "pending",
    "dataEntry": new Date().toLocaleString()
  }

  async function postOrder() {
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
    setResultText("Result: " + new Date().toLocaleString())
  }

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
      <section className="cajaInicio">
        <img src={require('./img/img_libro_rojo.png')} alt="Imagen de libro"></img>

        <input
          type="text"
          placeholder=" Client"
          onChange={(e) => setClient(e.target.value)}
        ></input>

        {/* <p id="textoCorreoInvalido" className="textoCorreoInvalido">Pantalla de menu</p> */}
        {/* <input type="password" placeholder=" Pantalla de menu" className="inputPassword"></input> */}
        <button onClick={() => setResultText()} className="botonInicio">setResultText</button>
        {/* <button onClick={() => {setResult(true)}} className="botonInicio">setResult</button> */}
        <p id="textoCorreoInvalido" className="textoCorreoInvalido">{resulText}</p>
      </section>

      {results && results.map((e, index) =>
      (<section className="cajaInicio">
        <img src={e['image']} alt={e['name']}></img>
        <p id="textoCorreoInvalido" className="textoCorreoInvalido">{e['name']}</p>
        <p id="textoCorreoInvalido" className="textoCorreoInvalido">{e['price']}</p>
        <div className="amountBox">
          <p id={index} onClick={() => {setCounter(counter - 1); console.log(index)}}>{'<'}</p>
          <p id={`counter${index}`}>{counter}</p>
          <p id={index} onClick={() => {setCounter(counter + 1); console.log(index)}}>{'>'}</p>
        </div>
        {/* <button onClick={setResultText()} className="botonInicio">setResultText</button> */}
      </section>)
      )}

    </main>
  )
}

export default Menu
