import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AutosNuevos from "./autosNuevos";
import AutosNuevosModelos from "./autosNuevosModelos";
import AutosUsados from "./autosUsados";
import AutosPremium from "./autosPremium";
import Inicio from './Inicio';
import GestionAnuncios from './GestionAnuncios';
import Contactenos from './Contactenos';
import Registrarse from './Registrarse';
import Ingresar from './Ingresar';
import CrearAnuncioParteUno from './CrearAnuncioParteUno';
import CrearAnuncioParteDos from './CrearAnuncioParteDos';
import CrearAnuncioParteTres from './CrearAnuncioParteTres';
import ConfirmacionEnvio from './ConfirmacionAnuncioCreado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Envuelve la aplicación en BrowserRouter */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/AutosNuevos" element={<AutosNuevos />} />
        <Route path="/AutosNuevosModelos" element={<AutosNuevosModelos />} />
        <Route path="/AutosUsados" element={<AutosUsados />} />
        <Route path="/AutosPremium" element={<AutosPremium />} />
        <Route path="/GestionAnuncios" element={<GestionAnuncios />} />
        <Route path="/Contactenos" element={<Contactenos />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/Ingresar" element={<Ingresar />} />
        <Route path="/CrearAnuncioParteUno" element={<CrearAnuncioParteUno />} />
        <Route path="/CrearAnuncioParteDos" element={<CrearAnuncioParteDos />} />
        <Route path="/CrearAnuncioParteTres" element={<CrearAnuncioParteTres />} />
        <Route path="/ConfirmacionEnvio" element={<ConfirmacionEnvio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
