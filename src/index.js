import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importar BrowserRouter
import './index.css';
import AutosNuevos from './autosNuevos'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>  {/* Envuelve tu aplicación en BrowserRouter */}
      <App />
    </BrowserRouter>
=======
    <AutosNuevos />
>>>>>>> 62f0973c86268a36f2a8f6265dc30c474388579e
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
