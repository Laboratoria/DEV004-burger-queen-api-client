export async function signIn(item) {
  let result = await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      "content-type": "application/json"/* ,
    "accept": "application/json" */
    },
    body: JSON.stringify(item)
  })
  // console.log(result)
  result = await result.json()
  // console.log("typeof result:", typeof result)
  // console.log("result:", result)
  // console.log("JSON.stringify(item):", JSON.stringify(item))
  localStorage.setItem("accessToken", result['accessToken'])
  localStorage.setItem("user-info", JSON.stringify(result))
  // navigate("/menu")
  // console.log("typeof localStorage.getItem('user-info'): ", typeof localStorage.getItem('user-info'))
  // console.log("localStorage.getItem('user-info'):", localStorage.getItem('user-info'))
  return result
}