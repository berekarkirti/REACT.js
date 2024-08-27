import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import Product from './Components/Product';
import PrivateRoute from './Components/PrivateRoute';
import Addproduct from './Components/Addproduct';
import Editpage from './Components/Editpage';

const AllRoutes = () => {
  return (
    <Routes>

          {/* Renders the Home,About,Login,Product,Addproduct,Editpage,NotFound component. */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route path="/product" element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          } />

          <Route path="/addproduct" element={
            <PrivateRoute>
              <Addproduct />
            </PrivateRoute>
          } />

          <Route path="/edit/:id" element={<Editpage />} />
          <Route path="*" element={<NotFound />} />

    </Routes>

  );
};

export default AllRoutes;