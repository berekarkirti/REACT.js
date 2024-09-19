import { Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Dashboard from "../Routes/Dashboard";
import SingleProductPage from "../Routes/SingleProductPage";
import PrivateRoute from "../Components/PrivateRoute";


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/products/:id" element={<SingleProductPage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
