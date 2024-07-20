import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import ProductDetail from './Components/ProductDetail';
import Product from './Components/Product';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
