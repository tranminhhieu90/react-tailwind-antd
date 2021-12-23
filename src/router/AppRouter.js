import Loading from 'components/Loading/Loading';
import Login from 'containers/Auth/Login';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';


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