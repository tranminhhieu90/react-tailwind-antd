import { BrowserRouter, Routes , Route} from 'react-router-dom';
import { BaseRoute } from ".";
import React, { Suspense, lazy } from 'react';
import Loading from '../components/loading/Loading';

const App = lazy(() => import('../App'));
const Login = lazy(() => import('../containers/auth/Login'));

export const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      <Routes>
          <Route exact path="/" element={<BaseRoute redirectTo="/login"><App/></BaseRoute>} />
          <Route exact path="/login" element={<Login/>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);