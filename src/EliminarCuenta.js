import React, { useState } from "react";
import "./EliminarCuenta.css"; 
function EliminarCuenta() {
  const [confirmacion, setConfirmacion] = useState(false);
  const [eliminado, setEliminado] = useState(false);

  const manejarConfirmacion = () => {
    setConfirmacion(true);
  };

  const manejarEliminacion = () => {
    // Lógica para eliminar la cuenta (puedes agregar tu lógica aquí)
    setEliminado(true);
  };

  return (
    <div className="eliminar-cuenta-container">
      {eliminado ? (
        <div className="eliminado-mensaje">
          <h2>Tu cuenta ha sido eliminada con éxito.</h2>
        </div>
      ) : (
        <>
          <h1 className="eliminar-cuenta-title">Eliminar Cuenta</h1>
          <p className="eliminar-cuenta-aviso">
            ¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible y se perderán todos tus datos.
          </p>
          {confirmacion ? (
            <div className="eliminar-cuenta-confirmacion">
              <p>Por favor, escribe "ELIMINAR" para confirmar:</p>
              <input
                type="text"
                onChange={(e) => setConfirmacion(e.target.value === "ELIMINAR")}
                className="eliminar-cuenta-input"
              />
              <button
                onClick={manejarEliminacion}
                className="eliminar-cuenta-boton"
                disabled={!confirmacion}
              >
                Confirmar Eliminación
              </button>
            </div>
          ) : (
            <button onClick={manejarConfirmacion} className="eliminar-cuenta-boton">
              Eliminar Cuenta
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default EliminarCuenta;
