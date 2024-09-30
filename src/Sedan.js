import React from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import AudiA3 from "./imagenes/Audi-Sedan.jpeg"
import BMWSerie3 from "./imagenes/BMW-Serie3.jpg"
import MercedesBenzClaseC from "./imagenes/Mercedez-Benz-Clase-C.jpg"
import ToyotaCorolla from "./imagenes/Toyota-Corolla.webp"
import HondaCivic from "./imagenes/Honda-Civic.avif"
import NissanAltima from "./imagenes/Nissan-Altima.png"
import KiaK5 from "./imagenes/KIA-K5.png"
import HyundaiElantra from "./imagenes/Hyundai-Elantra.jpg"
import ChevroletMalibu from "./imagenes/Chevrolet-Malibu.avif"
import Mazda6 from "./imagenes/Mazda-6.jpg"
import VolkswagenJetta from "./imagenes/Volkswagen-Jetta.png"
import LexusEs from "./imagenes/Lexus-ES.jpg"

const sedans = [
    {
      id: 1,
      marca: "Audi",
      modelo: "A3 Sedán 2024",
      imagen: AudiA3,
    },
    {
      id: 2,
      marca: "BMW",
      modelo: "Serie 3 2024",
      imagen: BMWSerie3,
    },
    {
      id: 3,
      marca: "Mercedes-Benz",
      modelo: "Clase C 2024",
      imagen: MercedesBenzClaseC,
    },
    {
      id: 4,
      marca: "Toyota",
      modelo: "Corolla 2024",
      imagen: ToyotaCorolla,
    },
    {
      id: 5,
      marca: "Honda",
      modelo: "Civic 2024",
      imagen: HondaCivic,
    },
    {
      id: 6,
      marca: "Nissan",
      modelo: "Altima 2024",
      imagen: NissanAltima,
    },
    {
      id: 7,
      marca: "Kia",
      modelo: "K5 2024",
      imagen: KiaK5,
    },
    {
      id: 8,
      marca: "Hyundai",
      modelo: "Elantra 2024",
      imagen: HyundaiElantra,
    },
    {
      id: 9,
      marca: "Chevrolet",
      modelo: "Malibu 2024",
      imagen: ChevroletMalibu,
    },
    {
      id: 10,
      marca: "Mazda",
      modelo: "Mazda 6 2024",
      imagen: Mazda6,
    },
    {
      id: 11,
      marca: "Volkswagen",
      modelo: "Jetta 2024",
      imagen: VolkswagenJetta,
    },
    {
      id: 12,
      marca: "Lexus",
      modelo: "ES 2024",
      imagen: LexusEs,
    },
  ];

function Sedans() {
    return (
      <div className="screen">
        <BarraSuperior/>
        <div className="text-tittle">Sedans</div>
        <div className="div-principal">
          <div className="grid-container">
            {sedans.map((sedan) => (
              <div key={sedan.id} className="pickup-card">
                <img src={sedan.imagen} alt={`${sedan.marca} ${sedan.modelo}`} className="pickup-image" />
                <div className="pickup-info">
                  <h3>{sedan.marca}</h3>
                  <p>{sedan.modelo}</p>
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

export default Sedans;
