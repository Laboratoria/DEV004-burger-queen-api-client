// import logo from '../logo.svg';
// import { onNavigate } from './lib/onNavigate.js';
import /* React,  */{ useState, useEffect } from 'react'
import { /* Navigate,  */useNavigate } from "react-router-dom"
import './styles.css';

function Login() {
  // onNavigate('/');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  /* useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/menu')
    }
  }, []) */
  async function login() {
    let item = {email, password}
    console.log(item)
    let result = await fetch('http://localhost:8080/login', {
      method: 'POST', 
      headers: {
        "content-type": "application/json"/* ,
        "accept": "application/json" */
      },
      body: JSON.stringify(item)
    })
    result = await result.json()
    // console.log("typeof result:", typeof result)
    // console.log("result:", result)
    // console.log("JSON.stringify(item):", JSON.stringify(item))
    localStorage.setItem("user-info", JSON.stringify(result))
    // navigate("/menu")
    // console.log("typeof localStorage.getItem('user-info'): ", typeof localStorage.getItem('user-info'))
    // console.log("localStorage.getItem('user-info'):", localStorage.getItem('user-info'))
    if (typeof result === 'object') {
      navigate('/menu')
    }
  }
  return (
    <main className="PantallaInicio">
      <section className="cajaInicio">
        <img src={require('./img/img_libro_rojo.png')} alt="Imagen de libro"></img>
        <input
          type="text"
          placeholder=" E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p id="textoCorreoInvalido" className="textoCorreoInvalido">Escribe un correo valido</p>
        <input
          type="password"
          placeholder=" Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={login} className="botonInicio">Log-in</button>
      </section>
    </main>
  )
}

export default Login;



/* export const login = () => {
  const root = document.getElementById('pantallaMostrada');
  root.innerHTML = `
    <main class="PantallaInicio">
      <section class="cajaInicio">
        <img src="img/img_libro_rojo.png" alt="Imagen de libro">
        <input type="text" placeholder=" Correo Electronico" id="inputEmail">
        <p id="textoCorreoInvalido" class="textoCorreoInvalido">Escribe un correo valido</p>
        <input type="password" placeholder=" Contraseña" id="inputPassword">
        <button id="botonInicio">Ingresar</button>
        <hr style="width:100%;text-align:center">
        <button id="botonInicioGoogleLogin"><img src="./img/btn_google_signin.png" alt="boton de google" class="imgButton"></button>
        <p class="textoCrearCuenta">¿No tienes una cuenta?
        <a id="botonRegistrar" href="#" onclick="console.log('hola mundo')"> Registrate</a></p>
      </section>
    </main>
  `;
};
 */