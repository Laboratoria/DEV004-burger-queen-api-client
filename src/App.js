// import logo from './logo.svg';
import React/* , { useState, useEffect } */ from 'react'
import { /* Link,  */Route, Routes/* , useNavigate */ } from 'react-router-dom'
import Login from './components/login.js';
import Menu from './components/menu.js';
// import { onNavigate } from './lib/onNavigate.js';
import './App.css';

function App() {
  /* const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/menu')
    }
  }, []) */
  return (
    <>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  )
  // onNavigate('/');
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React today!
        </a>
      </header>
    </div>
  ); */
}

export default App;
