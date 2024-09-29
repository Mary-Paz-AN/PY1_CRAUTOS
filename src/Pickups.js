import React from "react";
import "./Pickups.css";
import FordF150 from "./imagenes/Ford-F150.jpg"
import ChevroletSilverado from "./imagenes/Chevrolet-Silverado-1500.jpg"
import RAM1500 from "./imagenes/RAM-1500.png"
import ToyotaTundra from "./imagenes/Toyota-Tundra.jpeg"
import NissanFrontier from "./imagenes/Nissan-frontier.jpg"
import GMCSierra1500 from "./imagenes/GMC-Sierra-1500.avif"
import HondaRidgeline from "./imagenes/Honda-Ridgeline.png"
import JeepGladiator from "./imagenes/Jeep-Gladiator.png"
import FordRanger from "./imagenes/Ford-Ranger.avif"
import ChevroletColorado from "./imagenes/Chevrolet-Colorado.jpg"
import ToyotaHilux from "./imagenes/Toyota-Hilux.png"
import RAM2500 from "./imagenes/RAM-2500.png"
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";

const pickups = [
  { id: 1, marca: "Ford", modelo: "F-150 2024", imagen: FordF150 },
  { id: 2, marca: "Chevrolet", modelo: "Silverado 1500 2024", imagen: ChevroletSilverado },
  { id: 3, marca: "Ram", modelo: "1500 2024", imagen: RAM1500 },
  { id: 4, marca: "Toyota", modelo: "Tundra 2024", imagen: ToyotaTundra },
  { id: 5, marca: "Nissan", modelo: "Frontier 2024", imagen: NissanFrontier },
  { id: 6, marca: "GMC", modelo: "Sierra 1500 2024", imagen: GMCSierra1500 },
  { id: 7, marca: "Honda", modelo: "Ridgeline 2024", imagen: HondaRidgeline },
  { id: 8, marca: "Jeep", modelo: "Gladiator 2024", imagen: JeepGladiator },
  { id: 9, marca: "Ford", modelo: "Ranger 2024", imagen: FordRanger },
  { id: 10, marca: "Chevrolet", modelo: "Colorado 2024", imagen: ChevroletColorado },
  { id: 11, marca: "Toyota", modelo: "Hilux 2024", imagen: ToyotaHilux },
  { id: 12, marca: "Ram", modelo: "2500 2024", imagen: RAM2500 },
];

function Pickups() {
  return (
    <div className="screen">
      <BarraSuperior/>
      <div className="text-tittle">Pick-Up</div>
      <div className="div-principal">
        <div className="grid-container">
          {pickups.map((pickup) => (
            <div key={pickup.id} className="pickup-card">
              <img src={pickup.imagen} alt={`${pickup.marca} ${pickup.modelo}`} className="pickup-image" />
              <div className="pickup-info">
                <h3>{pickup.marca}</h3>
                <p>{pickup.modelo}</p>
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

export default Pickups;
