import React from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import AudiA5 from "./imagenes/Audi-A5-Coupé.avif"
import BMWSerie4 from "./imagenes/BMW-Serie4-Coupé.png"
import MercedesBenzClaseCCoupe from "./imagenes/Mercedez-Benz-Clase-C-Coupé.jpg"
import ToyotaGRSupra from "./imagenes/Toyota-GR-Supra.png"
import HondaCivicCoupe from "./imagenes/Honda-Civic-Coupé.png"
import Nissan370Z from "./imagenes/Nissan-370Z.jpg"
import InfinitiQ60 from "./imagenes/Infini-Q60.avif"
import HyundaiVelosterN from "./imagenes/Hyundai-Veloster-N.jpg"
import ChevroletCamaro from "./imagenes/Chevrolet-Camaro.jpg"
import MazdaMX5Miata from "./imagenes/Mazda-MX5-Miata.jpg"
import VolkswagenArteon from "./imagenes/Volkswage-Artion.jpg"
import LexusRC from "./imagenes/Lexus-RC.png"

const coupes = [
    { id: 1, marca: "Audi", modelo: "A5 Coupé 2024", imagen: AudiA5 },
    { id: 2, marca: "BMW", modelo: "Serie 4 Coupé 2024", imagen: BMWSerie4 },
    { id: 3, marca: "Mercedes-Benz", modelo: "Clase C Coupé 2024", imagen: MercedesBenzClaseCCoupe },
    { id: 4, marca: "Toyota", modelo: "GR Supra 2024", imagen: ToyotaGRSupra },
    { id: 5, marca: "Honda", modelo: "Civic Coupé 2017", imagen: HondaCivicCoupe },
    { id: 6, marca: "Nissan", modelo: "370Z 2024", imagen: Nissan370Z },
    { id: 7, marca: "Infiniti", modelo: "Q60 2024", imagen: InfinitiQ60 },
    { id: 8, marca: "Hyundai", modelo: "Veloster N 2024", imagen: HyundaiVelosterN },
    { id: 9, marca: "Chevrolet", modelo: "Camaro 2024", imagen: ChevroletCamaro },
    { id: 10, marca: "Mazda", modelo: "MX-5 Miata 2024", imagen: MazdaMX5Miata },
    { id: 11, marca: "Volkswagen", modelo: "Arteon 2024", imagen: VolkswagenArteon },
    { id: 12, marca: "Lexus", modelo: "RC 2024", imagen: LexusRC }
  ];

function Coupes() {
    return (
      <div className="screen">
        <BarraSuperior/>
        <div className="text-tittle">Coupés</div>
        <div className="div-principal">
          <div className="grid-container">
            {coupes.map((coupe) => (
              <div key={coupe.id} className="pickup-card">
                <img src={coupe.imagen} alt={`${coupe.marca} ${coupe.modelo}`} className="pickup-image" />
                <div className="pickup-info">
                  <h3>{coupe.marca}</h3>
                  <p>{coupe.modelo}</p>
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

export default Coupes;
