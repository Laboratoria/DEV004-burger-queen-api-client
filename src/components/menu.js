import React, { useState, useEffect } from 'react'
// import logo from '../logo.svg';
// import { onNavigate } from './lib/onNavigate.js';
import './styles.css'

function Menu() {

  const [client, setClient] = useState('')
  const [item, addCart] = useState(0)
  const [resulText, setResultText] = useState("Result:");
  const [results, setResults] = useState()


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

  // let results = []

  // results = async () => {
  // async function get() {
  //   let result = await fetch('http://localhost:8080/products', {
  //     method: 'GET',
  //     headers: {
  //       "content-type": "application/json",
  //       "authorization": "Bearer " + localStorage.getItem("accessToken")
  //     }/* ,
  //     body: JSON.stringify(body) */
  //   })
  //   let results = await result.json()
  //   console.log("results", results)
  //   // return results
  //   results.map(e =>
  //   (<section className="cajaInicio">
  //     <img src={e['image']} alt="Imagen de libro"></img>
  //     <button onClick={() => { addCart(); setResultText() }} className="botonInicio">GET</button>
  //     <p id="textoCorreoInvalido" className="textoCorreoInvalido">{resulText}</p>
  //   </section>)
  //   )
  // }

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
      console.log("results", results)

      // set state when the data received
      setResults(results);
    };

    resultsFetch();
  }, []);

  // return result 
  // console.log(localStorage.getItem("accessToken"))
  // localStorage.setItem(`Order ${result["id"]}`, JSON.stringify(result))
  // let resultTextLoop = ''
  // console.log("results: ", results)
  // let resultComponents = []
  // await results.forEach((e, index) => {
  //   // console.log(e['image'])
  //   // console.log(`${element['name']}\n`)
  //   resultComponents.push
  //     (<section key={index} className="cajaInicio">
  //       <p id="textoCorreoInvalido" className="textoCorreoInvalido">{e['name']}</p>
  //       {/* <img src={require(`${e['image']}`)} alt="Imagen de libro"></img> */}
  //       {/* <p id="textoCorreoInvalido" className="textoCorreoInvalido">Pantalla de menu</p> */}
  //       {/* <input type="password" placeholder=" Pantalla de menu" className="inputPassword"></input> */}
  //       <button onClick={() => { addCart();/*  get() */; setResultText() }} className="botonInicio">GET</button>
  //       <p id="textoCorreoInvalido" className="textoCorreoInvalido">{resulText}</p>
  //     </section>)
  // });
  // console.log(resultComponents)
  // setResultText("Result: " + resultTextLoop)
  // }

  // get()

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
        <button onClick={() => { addCart();/*  get(); */ setResultText() }} className="botonInicio">GET</button>
        {/* <button onClick={() => {setResult(true)}} className="botonInicio">setResult</button> */}
        <p id="textoCorreoInvalido" className="textoCorreoInvalido">{resulText}</p>
      </section>

      {results.map(e =>
      (<section className="cajaInicio">
        <img src={e['image']} alt="Imagen de libro"></img>
        <button onClick={() => { addCart(); setResultText() }} className="botonInicio">GET</button>
        <p id="textoCorreoInvalido" className="textoCorreoInvalido">{resulText}</p>
      </section>)
      )}

    </main>
  )
}

export default Menu
