import { render, screen/* , queryByAttribute */ } from '@testing-library/react';
import React from 'react'
// import userEvent from '@testing-library/user-event'
import { fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BrowserRouter/* , MemoryRouter *//* , Router */ } from "react-router-dom"
// import { /* Link,  */Route, Routes, Router/* , useNavigate */ } from 'react-router-dom'
// import App from './App';
// import Login from './components/login.js';
import App from './App.js';
// import { signIn } from './scripts/signIn';
// import { postOrder } from './scripts/postOrder.js';
import { database } from './scripts/database.js';
// import { render, queryByAttribute } from 'react-testing-library';

/* describe('render routes', () => {
  test('login', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const linkElement = screen.getByPlaceholderText(/E-mail/i);
    // console.log(linkElement)
    expect(linkElement).toBeInTheDocument();
  });
}) */

describe('Login', () => {
  /* test('Successful login', async () => {
    const email = "grace.hopper@systers.xyz"
    const password = "123456"
    const body = { email, password }
    const result = await database('login', 'POST', null, body)
    // console.log('result[0]: '+result[0])
    // console.log('result["accessToken"]: '+result['accessToken'].length)
    // expect(result.length > '200').toBe(true)
    expect(result['accessToken'].length > '150').toBe(true)
  }) */

  test('Successful login', async () => {
    // const getById = queryByAttribute.bind(null, 'id');
    /* const result = render(
      <Router>
        <Login />
      </Router>
      ); */
    // const linkElement = screen.getByPlaceholderText(/E-mail/i);
    // const emailInput = screen.getElementById('emailInput')/* .value = 'grace.hopper@systers.xyz' */
    // console.log(getById)
    /* render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    ); */
    /* render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    ) */
    /* render( <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Menu />} path="/menu" exact />
          <Route element={<Menu />} path="/" exact />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Kitchen />} path="/kitchen" />
      </Routes>
    </>) */
    localStorage.setItem("user-info", '')
    render(<App />, { wrapper: BrowserRouter })
    
    // const user = userEvent.setup()
    // const linkElement = screen.getByPlaceholderText(/E-mail/i);
    // console.log(linkElement)
    // expect(linkElement).toBeInTheDocument();
    const emailInput = screen.getByPlaceholderText(/E-mail/i)/* .value = 'grace.hopper@systers.xyz' */
    fireEvent.change(emailInput, { target: { value: 'grace.hopper@systers.xyz' } })
    const passwordInput = screen.getByPlaceholderText(/Contraseña/i)/* .value = '123456' */
    fireEvent.change(passwordInput, { target: { value: '123456' } })
    // console.log(element)
    // screen.getByTestId('signInButton').dispatchEvent(new Event('click'));
    // await user.click(screen.getByText(/Ingresar/i))
    const button = screen.getByText(/Ingresar/i)
    // console.log(button)
    fireEvent.click(button)
    await screen.findByText('Enviar a cocina')
    // console.log(dom)
    // const table = getById(dom.container, 'directory-table');
    // console.log(table)
    // expect(router.navigateTo).toHaveBeenCalledWith('/home');
    expect(screen.getByText(/Enviar a cocina/i)).toBeInTheDocument()
  })

  // localStorage.setItem("user-info", '')

  test('Error', async () => {
    localStorage.setItem("user-info", '')
    render(<App />, { wrapper: BrowserRouter })

    // const emailInput = screen.getByPlaceholderText(/E-mail/i)/* .value = 'grace.hopper@systers.xyz' */
    // fireEvent.change(emailInput, { target: { value: 'hopper@systers.xyz' } })
    // const passwordInput = screen.getByPlaceholderText(/Contraseña/i)/* .value = '123456' */
    // fireEvent.change(passwordInput, { target: { value: '123456' } })

    const button = screen.getByText(/Ingresar/i)
    fireEvent.click(button)

    await screen.findByText('Email and password are required')

    expect(screen.getByText(/Email and password are required/i)).toBeInTheDocument()
  })

  /* test('Password is too short', async () => {
    const email = "grace.hopper@systers.xyz"
    const password = "123"
    const body = { email, password }
    const result = await database('login', 'POST', null, body)
    expect(result === 'Password is too short').toBe(true)
  })

  test('Email format is invalid', async () => {
    const email = "hopper"
    const password = "123456"
    const body = { email, password }
    const result = await database('login', 'POST', null, body)
    expect(result === 'Email format is invalid').toBe(true)
  })

  test('Email and password are required', async () => {
    const email = ""
    const password = ""
    const body = { email, password }
    const result = await database('login', 'POST', null, body)

    expect(result === 'Email and password are required').toBe(true)
  }) */
})

describe('Post Order', () => {
  test('Successful Order', async () => {
    const email = "grace.hopper@systers.xyz"
    const password = "123456"
    const body1 = { email, password }
    const result1 = await database('login', 'POST', null, body1)
    // console.log(result)
    const body2 = {
      "client": "UNIT TEST",
      "products": [
        [
          {
            "id": 2,
            "name": "Café americano",
            "price": 500,
            "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/coffee.png",
            "type": "Desayuno",
            "dateEntry": "2022-03-05 15:14:10"
          }
        ]
      ],
      "status": "pending",
      "dataEntry": new Date().toLocaleString()
    }
    // console.log(result['accessToken'])
    // console.log(localStorage.getItem("accessToken"))
    const accessToken = result1['accessToken']
    const result2 = await database('orders', 'POST', accessToken, body2)
    // console.log(result)
    // Object.keys(exampleObject).length
    expect(Object.keys(result2).length).toBe(5)
  })
})