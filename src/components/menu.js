import React, { useState/* , useEffect */ } from 'react'
// import { postOrder } from '../scripts/postOrder';
// import { database } from '../scripts/database';
import Products from './products';
import Cart from './cart';

function Menu() {

  // let [counter, setCounter] = useState(0)
  // const addCart = () => setCounter(counter + 1)
  // let removeCart = () => setCounter(counter - 1)
  // const [client, setClient] = useState('')
  // const [results, setResults] = useState()
  const [cart, addToCart] = useState([])
  
  /* const body = { // body will be used by postOrder
    "client": client,
    "products": [cart],
    "status": "pending",
    "dataEntry": new Date().toLocaleString()
  } */
  
  /* useEffect(() => {  // getting info from database
    // fetch data
    const resultsFetch = async () => {
      const results = await database('products', 'GET', localStorage.getItem("accessToken"))
      setResults(results);
    }
    resultsFetch()
    menuToProducts()
    // console.log("results", results)
  });
  // console.log("results", results) */

  /* const menuToProducts = () => {
    setResults(results)
  } */



  return (
    <main className="PantallaInicio">

      <Products cart={cart} addToCart={addToCart}/* menuToProducts={results}  *//>
      <Cart cart={cart} addToCart={addToCart}/>

    </main>
  )
}

export default Menu
