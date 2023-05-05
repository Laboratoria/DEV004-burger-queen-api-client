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
    /* .then(response => {
      return response.json()
    })
    .then(response => {
      console.log(response)
      this.setState({pokemon: response})
    }) */    
    result = await result.json()
    // console.log(localStorage.getItem("accessToken"))
    /* console.log(result[0])
    console.log(result[1])
    console.log(result[2]) */
    // localStorage.setItem(`Order ${result["id"]}`, JSON.stringify(result))
    let resultTextLoop = ''
    result.forEach(element => {
      console.log(element)
      // console.log(`${element['name']}\n`)
      resultTextLoop += `
      <li class = "${pokemonDB[i].type[0]}" id= poketype>
        <img class = "card-image" src ="${pokemonDB[i].img}"/>
        <h2 class = "card-title">${pokemonDB[i].num}
        <br>${pokemonDB[i].name}</h2>
          <p class = "card-subtitle">
            <div class="${pokemonDB[i].type[0]}Text">${pokemonDB[i].type[0]}</div><br><br>
            <div class="${pokemonDB[i].type[1]}Text">${pokemonDB[i].type[1]}</div>
          </p>
      </li>
      `
    });
    console.log(resultTextLoop)
    setResultText("Result: " + resultTextLoop)
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
