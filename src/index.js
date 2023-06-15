import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./Pages/Home"
import Layout from "./Pages/Layout" 
import NoPage from "./Pages/NoPage"
import Login from "./Pages/Login"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Paginare from "./Pages/Paginare"
import Register from "./Pages/Register"
import AddProduct from './Pages/AddProduct';
import AddCategory from './Pages/AddCategory';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Paginare />} />
          <Route path='/products' element={<Paginare/>}>
            <Route path=':id' element={<Paginare/>}/>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="*" element={<NoPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="addCategory" element={<AddCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
