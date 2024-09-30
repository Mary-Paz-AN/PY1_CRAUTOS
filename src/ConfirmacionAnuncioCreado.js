import './ConfirmacionAnuncioCreado.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const ConfirmationPage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Iniciar temporizador para mostrar el botón después de 2 segundos
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    // Limpiar el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez cuando el componente se monta

  const navigate = useNavigate();

  const irGestiones = () => {
    navigate('/MiCuenta');
  };

  return (
    <div className="confirmation-container">
      <div className="checkmark-container">
        <div className="checkmark"></div>
      </div>
      <p className="confirmation-message">¡Tu anuncio ha sido enviado exitosamente!</p>
      {showButton && (
        <button onClick={irGestiones} className='button-confirmation'>
          Volver a las gestiones
        </button>
      )}
    </div>
  );
};

export default ConfirmationPage;

