import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/App.jsx";
import { Menu } from './components/menu/menu.jsx';


export const Router = () => {
return (
<div className ="router">
<Routes>
<Route path="/" element ={<Login></Login>}/>
<Route path="/menu" element ={<Menu></Menu>}/>

</Routes>
</div>
);

}