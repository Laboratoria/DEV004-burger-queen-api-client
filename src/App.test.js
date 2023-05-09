import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"
// import App from './App';
import Login from './components/login.js';
import { signIn } from './scripts/signIn';
import { postOrder } from './scripts/postOrder.js';

describe('render routes', () => {
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
})

describe('Login', () => {
  test('Successful login', async () => {
    const email = "grace.hopper@systers.xyz"
    const password = "123456"
    const item = { email, password }
    const result = await signIn(item)
    // console.log('result[0]: '+result[0])
    // console.log('result["accessToken"]: '+result['accessToken'].length)
    // expect(result.length > '200').toBe(true)
    expect(result['accessToken'].length > '150').toBe(true)
  })

  test('Cannot find user', async () => {
    const email = "hopper@systers.xyz"
    const password = "123456"
    const item = { email, password }
    const result = await signIn(item)
    expect(result === 'Cannot find user').toBe(true)
  })

  test('Password is too short', async () => {
    const email = "grace.hopper@systers.xyz"
    const password = "123"
    const item = { email, password }
    const result = await signIn(item)
    expect(result === 'Password is too short').toBe(true)
  })

  test('Email format is invalid', async () => {
    const email = "hopper"
    const password = "123456"
    const item = { email, password }
    const result = await signIn(item)
    expect(result === 'Email format is invalid').toBe(true)
  })

  test('Email and password are required', async () => {
    const email = ""
    const password = ""
    const item = { email, password }
    const result = await signIn(item)
    // console.log('result[0]: '+result[0])
    // console.log('result["accessToken"]: '+result['accessToken'].length)
    // expect(result.length > '200').toBe(true)
    console.log("result: "+result)
    // console.log("result['accessToken']: "+result['accessToken'])
    expect(result === 'Email and password are required').toBe(true)
  })
})

describe('Post Order', () => {
  test('Successful Order', async () => {
    const email = "grace.hopper@systers.xyz"
    const password = "123456"
    const item = { email, password }
    let result = await signIn(item)
    // console.log(result)
    const body = {
      "client": "Jean",
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
    const accessToken = result['accessToken']
    // console.log(accessToken)
    // console.log('result[0]: '+result[0])
    // console.log('result["accessToken"]: '+result['accessToken'].length)
    // expect(result.length > '200').toBe(true)
    // console.log(body)
    // console.log(accessToken)
    result = await postOrder(body, accessToken)
    // console.log(result)
    // Object.keys(exampleObject).length
    expect(Object.keys(result).length).toBe(5)
  })
})