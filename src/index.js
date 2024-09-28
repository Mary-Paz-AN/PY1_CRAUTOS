import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AutosNuevos from "./autosNuevos"
import AutosPremium from "./autosPremium"
import Inicio from './Inicio';
import Contactenos from './Contactenos';
import Registrarse from './Registrarse';
import Ingresar from './Ingresar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Envuelve tu aplicación en BrowserRouter */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/AutosNuevos" element={<AutosNuevos />} />
        <Route path="/AutosPremium" element={<AutosPremium />} />
        <Route path="/Contactenos" element={<Contactenos />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/Ingresar" element={<Ingresar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
