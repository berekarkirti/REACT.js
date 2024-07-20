//Purpose: Defines application routes and integrates private routing.
//-Uses react-router-dom for client-side routing.
//-Implements PrivateRoute to protect the Products and ProductDetail pages.
//-Ensures users must be authenticated to access protected routes.
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import ProductDetail from './Components/ProductDetail';
import Product from './Components/Product';
import PrivateRoute from './Components/PrivateRoute';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/product"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
      <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        }
      />
    </Routes>

  );
};

export default AllRoutes;
