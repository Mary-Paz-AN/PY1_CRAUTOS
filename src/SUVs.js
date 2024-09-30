import React from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import AudiQ5 from "./imagenes/Audi-Q5.jpg"
import BMWX5 from "./imagenes/BMW-X5.png"
import MercedesBenzGLC from "./imagenes/Mercedez-Benz-GLC.jpg"
import ToyotaRav4 from "./imagenes/Toyota-RAV4.png"
import HondaCRV from "./imagenes/Honda-CR-V.jpg"
import NissanRogue from "./imagenes/Nissan-Rogue.jpg"
import KiaSorento from "./imagenes/Kia-Sorento.png"
import HyundaiTucson from "./imagenes/Hyundai-Tucson.jpg"
import ChevroletEquinox from "./imagenes/Chevrolet-Equinox.avif"
import MazdaCX5 from "./imagenes/Mazda-CX-5.png"
import VolkswagenTiguan from "./imagenes/Volkswage-Tiguan.jpg"
import LexusRX from "./imagenes/Lexus-RX.png"

const suvs = [
  { id: 1, marca: "Audi", modelo: "Q5 2024", imagen: AudiQ5 },
  { id: 2, marca: "BMW", modelo: "X5 2024", imagen: BMWX5 },
  { id: 3, marca: "Mercedes-Benz", modelo: "GLC 2024", imagen: MercedesBenzGLC },
  { id: 4, marca: "Toyota", modelo: "RAV4 2024", imagen: ToyotaRav4 },
  { id: 5, marca: "Honda", modelo: "CR-V 2024", imagen: HondaCRV },
  { id: 6, marca: "Nissan", modelo: "Rogue 2024", imagen: NissanRogue },
  { id: 7, marca: "Kia", modelo: "Sorento 2024", imagen: KiaSorento },
  { id: 8, marca: "Hyundai", modelo: "Tucson 2024", imagen: HyundaiTucson },
  { id: 9, marca: "Chevrolet", modelo: "Equinox 2024", imagen: ChevroletEquinox },
  { id: 10, marca: "Mazda", modelo: "CX-5 2024", imagen: MazdaCX5 },
  { id: 11, marca: "Volkswagen", modelo: "Tiguan 2024", imagen: VolkswagenTiguan },
  { id: 12, marca: "Lexus", modelo: "RX 2024", imagen: LexusRX }
];
  
  

function SUVs() {
    return (
      <div className="screen">
        <BarraSuperior/>
        <div className="text-tittle">SUVs</div>
        <div className="div-principal">
          <div className="grid-container">
            {suvs.map((suv) => (
              <div key={suv.id} className="pickup-card">
                <img src={suv.imagen} alt={`${suv.marca} ${suv.modelo}`} className="pickup-image" />
                <div className="pickup-info">
                  <h3>{suv.marca}</h3>
                  <p>{suv.modelo}</p>
                  <button className="view-button">Ver</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BarraInferior/>
      </div>
    );
  }

export default SUVs;
