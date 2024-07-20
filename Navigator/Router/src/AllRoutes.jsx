import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import Addcart from './Components/Addcart';
import Product from './Components/Product';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addcart" element={<Addcart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
