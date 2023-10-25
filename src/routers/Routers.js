import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AddProduct from '../admin/AddProducts';
import EditProduct from '../admin/EditProduct';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';
import EditUser from '../admin/EditUser';
import NotFound from '../pages/NotFound';

const getLoggedInUser = () => {
  // Simula la obtención del usuario autenticado (ajusta esto según tu sistema de autenticación).
  return {
    uid: '057HUOBaLQUyBJitLzRD01EgtiJ3',
    email: 'admin_principal@gmail.com',
  };
};

const ProtectedRoute = ({ element, requiredUID }) => {
  const user = getLoggedInUser();

  return user && user.uid === requiredUID ? (
    element
  ) : (
    <Navigate to="/home" replace />
  );
};


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup/>} />
      <Route
        path="checkout"
        element={<ProtectedRoute element={<Checkout />} />}
      />
      <Route
        path="dashboard"
        element={<ProtectedRoute element={<Dashboard />} requiredUID="057HUOBaLQUyBJitLzRD01EgtiJ3" />}
      />
      <Route
        path="dashboard/all-products"
        element={<ProtectedRoute element={<AllProducts />} requiredUID="057HUOBaLQUyBJitLzRD01EgtiJ3" />}
      />
      <Route
        path="dashboard/add-product"
        element={<ProtectedRoute element={<AddProduct />} requiredUID="057HUOBaLQUyBJitLzRD01EgtiJ3" />}
      />
      <Route
        path="dashboard/edit-product/:id"
        element={<ProtectedRoute element={<EditProduct />} requiredUID="057HUOBaLQUyBJitLzRD01EgtiJ3" />}
      />
      <Route
        path="dashboard/users"
        element={<ProtectedRoute element={<Users />} requiredUID="057HUOBaLQUyBJitLzRD01EgtiJ3" />}
      />
      <Route
        path="dashboard/users/edit-user/:uid"
        element={<ProtectedRoute element={<EditUser />} requiredUID="057HUOBaLQUyBJitLzRD01EgtiJ3" />}
      />
       <Route path="404" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
