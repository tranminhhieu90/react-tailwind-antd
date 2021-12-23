import About from 'About';
import App from 'App';
import Contact from 'Contact';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseRoute } from 'router';

const UserRoutes = () => {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<BaseRoute redirectTo="/login"><App/></BaseRoute>} />
          <Route exact path="/about" element={<BaseRoute redirectTo="/login"><About/></BaseRoute>} />
          <Route exact path="/contact" element={<BaseRoute redirectTo="/login"><Contact/></BaseRoute>} />
      </Routes>
    </div>
  );
};

export default UserRoutes;