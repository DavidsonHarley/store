import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

const Home = lazy(() => import('../Home/Home'))
const SingleProduct = lazy(() => import('../Products/SingleProduct'))
const Profile = lazy(() => import('../Profile/Profile'))
const SingleCategory = lazy(() => import('../Categories/SingleCategory'))
const Cart = lazy(() => import('../Cart/Cart'))

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
  </Suspense>
);

export default AppRoutes;
