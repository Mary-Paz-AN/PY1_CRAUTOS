import React, { useState } from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import "./CrearAnuncioParteTres.css"
import { useNavigate } from 'react-router-dom';

function CrearAnuncioParteTres() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debe aceptar los términos y condiciones antes de enviar.");
      return;
    }
    navigate('/ConfirmacionEnvio');
  };

  return (
    <div className="screen">
      <BarraSuperior />
      <div className="div-p3">
        <form onSubmit={handleSubmit} className="form-anuncio">
          <h2 className="form-title">Opciones adicionales</h2>

          {/* Opción 1 */}
          <div className="opcion">
            <h3>Opción 1:</h3>
            <p>
              Confirmación automática de anuncio. Precio ¢ 2,260. Seleccione esta
              opción si desea que su anuncio aparezca inmediatamente en línea sin
              tener que esperar a nuestra confirmación telefónica. Esta opción NO
              es necesaria si escoge cualquiera de las siguientes 3 opciones.
            </p>
            <label>
              <input type="radio" name="opcion1" value="no" className="checkbox-form-p3"/> NO deseo esta
              opción - ¢ 0
            </label>
            <br />
            <label>
              <input type="radio" name="opcion1" value="si" className="checkbox-form-p3"/> SI deseo esta
              opción - ¢ 2,260
            </label>
          </div>

          <hr className="linea-divisoria" />

          {/* Opción 2 */}
          <div className="opcion">
            <h3>Opción 2:</h3>
            <p>
              Destacado/Súper Destacado y confirmación automática de anuncio.
              Precio ¢ 9,040. Aparecerá "Destacado" en la página que le
              corresponda. "Súper Destacado" incluye un "Post" en Facebook por un
              costo adicional de ¢ 3000+IVA.
            </p>
            <label>
              <input type="radio" name="opcion2" value="no" className="checkbox-form-p3"/> NO deseo esta
              opción - ¢ 0
            </label>
            <br />
            <label>
              <input type="radio" name="opcion2" value="destacado" className="checkbox-form-p3"/> SI deseo la
              opción de DESTACADO - ¢ 9,040
            </label>
            <br />
            <label>
              <input type="radio" name="opcion2" value="superdestacado" className="checkbox-form-p3"/> SI
              deseo la opción de SÚPER DESTACADO - ¢ 12,430
            </label>
          </div>

          <hr className="linea-divisoria" />

          {/* Opción 3 */}
          <div className="opcion">
            <h3>Opción 3:</h3>
            <p>
              Mensaje de "Nuevo" y confirmación automática de anuncio. Precio ¢
              2,825. Su anuncio aparecerá con el mensaje de "Nuevo" durante los
              primeros 4 días de publicación.
            </p>
            <label>
              <input type="radio" name="opcion3" value="no" className="checkbox-form-p3"/> NO deseo esta
              opción - ¢ 0
            </label>
            <br />
            <label>
              <input type="radio" name="opcion3" value="si" className="checkbox-form-p3"/> SI deseo esta
              opción - ¢ 2,825
            </label>
          </div>

          <hr className="linea-divisoria" />

          {/* Términos y condiciones */}
          <div className="terms">
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />{" "}
              Acepto los términos y condiciones
            </label>
          </div>

          {/* Botón de enviar */}
          <button type="submit" className="btn-enviar">
            Enviar
          </button>
        </form>
      </div>
      <BarraInferior />
    </div>
  );
}

export default CrearAnuncioParteTres;
