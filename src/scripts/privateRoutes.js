import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = () => {
  // let result = await fetch('http://localhost:3000', {
  //     method: 'GET',/* ,
  //     headers: {
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     },
  //     body: JSON.stringify(item) */
  //   })
  //   // console.log(result)
  //   // result = await result.json()
  //   // console.log("typeof result:", typeof result)
  //   console.log("result:", result)
  //   // console.log("JSON.stringify(item):", JSON.stringify(item))
  // localStorage.setItem("user-info", JSON.stringify(result))
  console.log(localStorage.getItem("user-info"))
  // let auth = (localStorage.getItem("user-info").length < '200') ? true : false
  let auth = false
  if (localStorage.getItem("user-info") != null) {
    if (localStorage.getItem("user-info").length > '200') {
      auth = true
    }
  }
    // auth = (localStorage.getItem("user-info").length < '200') ? true : false
  /* if (localStorage.getItem("user-info").length === null) {
    return false
  } else if (localStorage.getItem("user-info").length < '200')
  return false */
// auth = true
  console.log(auth)
  return (
    auth ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes