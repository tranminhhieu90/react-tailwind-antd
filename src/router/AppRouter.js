import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';

const Login = lazy(() => import('containers/auth/Login'));
const Loading = lazy(() => import("components/loading/Loading"));

export const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      <Routes>
          <Route exact path="/*" element={<UserRoutes/>} />
          <Route exact path="/admin/*" element={<AdminRoutes/>} />
          <Route exact path="/login" element={<Login/>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);