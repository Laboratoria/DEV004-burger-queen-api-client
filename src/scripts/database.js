export async function database(route, method, accessToken, body) {
  let result = await fetch(`http://localhost:8080/${route}`, { 
    method: method,
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer " + accessToken/* ,
      'Accept': 'application/json' */
    },
    body: JSON.stringify(body)
  })
  // console.log(result)
  // console.log(await result.json())
  result = await result.json()
  // console.log(localStorage.getItem("accessToken"))
  // console.log(result)
  // localStorage.setItem(`Order ${result["id"]}`, JSON.stringify(result))
  // console.log(localStorage.getItem(`Order ${result["id"]}`))
  return result
  // setResultText("Result: " + new Date().toLocaleString())
}

// const resultsFetch = async () => {
//   let result = await (fetch('http://localhost:8080/products', {
//     method: 'GET',
//     headers: {
//       "content-type": "application/json",
//       "authorization": "Bearer " + localStorage.getItem("accessToken") // cambiar esto a su propia funcion
//     }/* ,
//   body: JSON.stringify(body) */
//   }))
//   let results = await result.json()
//   // console.log("results", results)
//   // set state when the data received
//   setResults(results);
// }