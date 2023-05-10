// import logo from '../logo.svg';
// import { onNavigate } from './lib/onNavigate.js';
import React, { useState, useEffect } from 'react'
import { /* Navigate,  */useNavigate } from "react-router-dom"
import './styles.css';
import { signIn } from '../scripts/signIn';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"

function Login() {
  // onNavigate('/');
  // const showError = React.useState(false)
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorText, setErrorText] = useState("Error");
  // console.log(localStorage.getItem("user-info").length)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user-info') > '200') {
      navigate('/menu')
    }
  })

  async function login() {
    let item = { email, password }
    const result = await signIn(item)
    // console.log(result)
    // console.log('accessToken: ', result['accessToken'])

    if (typeof result === 'object') {
      navigate('/menu')
    } else {
      setErrorText(result)
      // this.setState({ text: 'result' });
    }
  }

  return (
    <main className="PantallaInicio">
      <section className="cajaInicio">
        <img src={require('./img/img_libro_rojo.png')} alt="Imagen de libro"></img>

        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        {error && <p
          id="textoCorreoInvalido"
          className="textoCorreoInvalido"
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >{errorText}</p>}

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button onClick={() => { setError(true); setErrorText(); login() }} className="checkoutBoxButtons">Ingresar</button>
      </section>
    </main>
  )
}

export default Login;
