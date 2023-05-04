import React, { useState, useEffect } from 'react'
// import logo from '../logo.svg';
// import { onNavigate } from './lib/onNavigate.js';
import './styles.css'

function Menu() {

  const [client, setClient] = useState('')
  const [item, addCart] = useState(0)
  const [resulText, setResultText] = useState("Result:");
  

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
        "authorization": "Bearer "+localStorage.getItem("accessToken")
      },
      body: JSON.stringify(body)
    })
    result = await result.json()
    // console.log(localStorage.getItem("accessToken"))
    // console.log(result)
    localStorage.setItem(`Order ${result["id"]}`, JSON.stringify(result))
    setResultText("Result: " + new Date().toLocaleString())
  }

  async function get() {
    let result = await fetch('http://localhost:8080/products', {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        "authorization": "Bearer "+localStorage.getItem("accessToken")
      }/* ,
      body: JSON.stringify(body) */
    })
    console.log(result)
    result = await result.json()
    // console.log(localStorage.getItem("accessToken"))
    // console.log(result)
    // localStorage.setItem(`Order ${result["id"]}`, JSON.stringify(result))
    setResultText("Result: " + result)
  }

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
        <button onClick={() => { addCart(); get(); setResultText() }} className="botonInicio">GET</button>
        <p id="textoCorreoInvalido" className="textoCorreoInvalido">{resulText}</p>
      </section>
    </main>
  )
}

export default Menu



/* export const login = () => {
  const root = document.getElementById('pantallaMostrada');
  root.innerHTML = `
  <div id="publicacion">
    <header class="cabecera">
      <div class="lateral"></div>
      <section class="miLogo">
        <img src="./img/img_libro_rojo.png" alt="imagen libro">
        <h1>LEEME</h1>
      </section>
      <img class="lateral" src="./img/imgPerfil.png" alt="imagen perfil">
    </header>
    <main class="mainPublicacion" id="miPublicacion">
      <button class="botonPublicacion" id="nuevaPublicacion">NUEVA PUBLICACION</button>
      <section id="publicaciones">
        <img src="./img/cargando.gif" alt="imagen cargando">
      </section>
    </main>
  `;
};
*/
