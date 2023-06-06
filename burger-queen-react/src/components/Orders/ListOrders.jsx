import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';

function ListOrders() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const accessToken = localStorage.getItem('token');

    axios.get('http://localhost:8080/orders', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Error al obtener los datos');
        setIsLoading(false);
      });
  }, []);


  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleButtonClick = (orderId) => {
    const accessToken = localStorage.getItem('token');

    axios.patch(`http://localhost:8080/orders/${orderId}`, {
      status: 'delivered',
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`
      }
    }
  )
  .then(response => {
    // Mensaje de éxito al entregar el pedido
    alert('El pedido ha sido entregado con éxito');
        // setData(response.data);
        // setIsLoading(false);
        // console.log(response);
      })
      .catch(error => {
        console.error(error);
        setError('Error al entregar el pedido');
        setIsLoading(false);
        // Mensaje de error al entregar el pedido
        alert('Hubo un error al entregar el pedido. Por favor, inténtalo nuevamente.');
      });
  };

  const filterOrder = data.filter(order => order.status === "pending");

  return (
    <div>
      <img src={logo} alt="Logo" />
      <h1>Estado del Pedido</h1>
      <div>
        {filterOrder.map(order => (
          <div key={order.id}>
            <h3>{order.id}</h3>
            {order.products.map(item => (
              <div key={item.product.id}>
                <p>cantidad: {item.qty}</p>
                <p>nombre: {item.product.name}</p>
              </div>
            ))}
            <button onClick={() => handleButtonClick(order.id)}>Listo</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOrders;

// import  { useEffect, useState } from 'react';
// import axios from 'axios';
// import logo from '../../assets/logo.png';

// function ListOrders(){ 
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [orders, setOrders] = useState(filterOrder);



//   useEffect(()=>{

//       const filterOrder = data.filter(order => order.status === "pending");
//       setOrders(filterOrder);
//     },[data]);
//     const accessToken = localStorage.getItem('token');

//     axios.get('http://localhost:8080/orders', {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     })
//       .then(response => {
//         setData(response.data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setError('Error al obtener los datos');
//         setIsLoading(false);
//       });
//       // los [] son una lista de dependencias, osea que cada ves que algo dentro de la lista cambie, se ejecuta el useEffect
 
//   if (isLoading) {
//     return <div>Cargando...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }
//   console.log(data)

//   const handleButtonClick = () => {
//     const updatedOrders = orders.filter(order => order.status !== "pending");
//     setOrders(updatedOrders);
//   };

//   return(
//     <div>
//       <img src={logo} alt="Logo" />
//       <h1>Estado del Pedido</h1>
//       <div>
//       {orders.map(order => (
//         <div key={order.id}>
//           <h3>{order.id}</h3>
//           {order.products.map(item => (
//             <div key={item.product.id}>
//               <p>cantidad: {item.qty}</p>
//               <p>nombre: {item.product.name}</p>
//             </div>
//           ))}
//          <button onClick={handleButtonClick}>Listo</button>
//         </div>
//       ))}
//       </div>
//     </div>
//   )

// }

// export default ListOrders;
