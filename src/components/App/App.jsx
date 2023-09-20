import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import { getCategories } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";

import UserForm from "../User/UserForm";


const AppRoutes = lazy(() => import('../Routes/Routes'))

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="app">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
    </Suspense>
    
  );
};

export default App;
