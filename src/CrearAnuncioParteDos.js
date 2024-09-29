import React from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import "./CrearAnuncioParteDos.css";
import { useNavigate } from 'react-router-dom';

function CrearAnuncioParteDos() {
  const navigate = useNavigate();

  const irSiguientePaginaCrearAnuncio = () => {
    navigate('/CrearAnuncioParteTres');
  };
  return (
    <div className="screen">
      <BarraSuperior />
      <div className="div-anuncio-p2">
        <div className="anuncio-p2-container-checkbox">
          <h2 className="anuncio-p2-title">Crear Anuncio - Equipamiento</h2>
          <form className="anuncio-p2-form">
            <div className="anuncio-p2-checkbox-group">
              <div className="anuncio-p2-column">
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Dirección Hidráulica
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Cierre Central
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Asientos Eléctricos
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Vidrios Tintados
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Bolsa(s) de Aire
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Vidrios Eléctricos
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Espejos Eléctricos
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Alarma
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Frenos ABS
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Aire Acondicionado
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Desempañador Trasero
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Sunroof/Techo Panorámico
                </label>
              </div>

              <div className="anuncio-p2-column">
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Aros de Lujo
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Turbo
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Tapicería de Cuero
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Halógenos
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Cruise Control
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Radio con USB/AUX
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Revisión Técnica al día
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Cámara de Retroceso
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Sensores de Retroceso
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Volante Multifuncional
                </label>
                <label className="anuncio-p2-label">
                  <input type="checkbox" className="anuncio-p2-checkbox" />
                  Bluetooth
                </label>
              </div>
            </div>

            <button onClick={irSiguientePaginaCrearAnuncio} className="anuncio-p2-btn-enviar">Continuar</button>
          </form>
        </div>
      </div>

      <BarraInferior />
    </div>
  );
}

export default CrearAnuncioParteDos;
