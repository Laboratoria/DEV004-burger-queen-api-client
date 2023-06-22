import { useState } from 'react';
import axios from 'axios';
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import RouteDeny from "../error/error";

const NewProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('token');

    axios.post('http://localhost:8080/products', {
      name: name,
      price: price,
      image: image,
      type:type
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(() => {
        alert('El producto ha sido guardado con éxito');
        navigate('/AdmiProduct');
      })
      .catch(() => {
        alert('Hubo un error al guardar los cambios. Por favor, inténtalo nuevamente.');
      });
  };

  let role = localStorage.getItem('userRole')
  if(role !== "admin"){
    return <RouteDeny />
  }
  
  return (
    <ProductForm
      name= {name}
      price= {price}
      image= {image}
      type={type}
      textButton={'Registrar'}
      titleText={'Crear producto'}
      handleButtonClick={handleButtonClick}
      handleNameChange={(value) => setName(value)}
      handlePriceChange={(value) => setPrice(value)}
      handleImageChange={(value) => setImage(value)}
      handleTypeChange={handleTypeChange}
    />
  );
};

export default NewProduct;
