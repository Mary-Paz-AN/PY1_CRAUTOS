import React from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import VolkswagenGolf from "./imagenes/Volkswage-Golf.jpg"
import FordFocus from "./imagenes/Ford-Focus.webp"
import HondaCivicHatchback from "./imagenes/Honda-Civic-Hatchback.jpg"
import ToyotaCorollaHatchback from "./imagenes/Toyota-Corolla-Hatchback.png"
import Mazda3Hatchback from "./imagenes/Mazda-3-Hatchback.webp"
import Hyundaii30 from "./imagenes/Hyundai-i30.jpg"
import KiaCeed from "./imagenes/Kia-Ceed.webp"
import RenaultClio from "./imagenes/Renault-Clio.jpg"
import Peugeot308 from "./imagenes/Peugeot-308.jpg"
import BMWSerie1 from "./imagenes/BMW-Serie-1.png"
import MercedesBenzClaseA from "./imagenes/Mercedez-Benz-Clase-A.jpg"
import AudiA3Sportback from "./imagenes/Audi-A3-Sportback.jpeg"

const hatchbacks = [
  { id: 1, marca: "Volkswagen", modelo: "Golf 2024", imagen: VolkswagenGolf },
  { id: 2, marca: "Ford", modelo: "Focus 2024", imagen: FordFocus },
  { id: 3, marca: "Honda", modelo: "Civic Hatchback 2024", imagen: HondaCivicHatchback },
  { id: 4, marca: "Toyota", modelo: "Corolla Hatchback 2024", imagen: ToyotaCorollaHatchback },
  { id: 5, marca: "Mazda", modelo: "Mazda3 Hatchback 2024", imagen: Mazda3Hatchback },
  { id: 6, marca: "Hyundai", modelo: "i30 2024", imagen: Hyundaii30 },
  { id: 7, marca: "Kia", modelo: "Ceed 2024", imagen: KiaCeed },
  { id: 8, marca: "Renault", modelo: "Clio 2024", imagen: RenaultClio },
  { id: 9, marca: "Peugeot", modelo: "308 2024", imagen: Peugeot308 },
  { id: 10, marca: "BMW", modelo: "Serie 1 2024", imagen: BMWSerie1 },
  { id: 11, marca: "Mercedes-Benz", modelo: "Clase A 2024", imagen: MercedesBenzClaseA },
  { id: 12, marca: "Audi", modelo: "A3 Sportback 2024", imagen: AudiA3Sportback }
];

function Hatchbacks() {
    return (
      <div className="screen">
        <BarraSuperior/>
        <div className="text-tittle">Hatchbacks</div>
        <div className="div-principal">
          <div className="grid-container">
            {hatchbacks.map((hatchback) => (
              <div key={hatchback.id} className="pickup-card">
                <img src={hatchback.imagen} alt={`${hatchback.marca} ${hatchback.modelo}`} className="pickup-image" />
                <div className="pickup-info">
                  <h3>{hatchback.marca}</h3>
                  <p>{hatchback.modelo}</p>
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

export default Hatchbacks;
