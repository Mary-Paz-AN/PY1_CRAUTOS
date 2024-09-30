import React from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import AudiA5Cabriolet from "./imagenes/Audi-A5-Cabriolet.avif"
import BMWZ4Roadster from "./imagenes/BMW-Z4-Roadster.webp"
import MercedesBenzSLRoadster from "./imagenes/Mercedez-Benz-SL-Roadster.jpg.png"
import Porsche718Boxster from "./imagenes/Porsche-718-Boxster.webp"
import MiniCooperSConvertible from "./imagenes/Mini-Cooper-S-Convertible.png"
import LamborghiniHuracanEVOSpyder from "./imagenes/Lamborghini-Huracan-EVO.avif"
import ChevroletCorvetteStingrayConvertible from "./imagenes/Chevrolet-Corvette.avif"
import JaguarFTypeConvertible from "./imagenes/Jaguar-F-Type.avif"
import FordMustangConvertible from "./imagenes/Ford-Mustang-Convertible.jpeg"
import McLaren720SSpider from "./imagenes/McLaren-720S-Spider.jpg"
import Ferrari488Spider from "./imagenes/Ferrari-488-Spider.png"
import BentleyContinentalGTConvertible from "./imagenes/Bentley-Continental-GT-Convertible.jpg"

const convertibles = [
  { id: 1, marca: "Audi", modelo: "A5 Cabriolet 2024", imagen: AudiA5Cabriolet },
  { id: 2, marca: "BMW", modelo: "Z4 Roadster 2024", imagen: BMWZ4Roadster },
  { id: 3, marca: "Mercedes-Benz", modelo: "SL Roadster 2024", imagen: MercedesBenzSLRoadster },
  { id: 4, marca: "Porsche", modelo: "718 Boxster 2024", imagen: Porsche718Boxster },
  { id: 5, marca: "Mini", modelo: "Cooper S Convertible 2024", imagen: MiniCooperSConvertible },
  { id: 6, marca: "Lamborghini", modelo: "Huracán EVO Spyder 2024", imagen: LamborghiniHuracanEVOSpyder },
  { id: 7, marca: "Chevrolet", modelo: "Corvette Stingray Convertible 2024", imagen: ChevroletCorvetteStingrayConvertible },
  { id: 8, marca: "Jaguar", modelo: "F-Type Convertible 2024", imagen: JaguarFTypeConvertible },
  { id: 9, marca: "Ford", modelo: "Mustang Convertible 2024", imagen: FordMustangConvertible },
  { id: 10, marca: "McLaren", modelo: "720S Spider 2024", imagen: McLaren720SSpider },
  { id: 11, marca: "Ferrari", modelo: "488 Spider 2024", imagen: Ferrari488Spider },
  { id: 12, marca: "Bentley", modelo: "Continental GT Convertible 2024", imagen: BentleyContinentalGTConvertible }
];

function Convertibles() {
    return (
      <div className="screen">
        <BarraSuperior/>
        <div className="text-tittle">Convertibles</div>
        <div className="div-principal">
          <div className="grid-container">
            {convertibles.map((convertible) => (
              <div key={convertible.id} className="pickup-card">
                <img src={convertible.imagen} alt={`${convertible.marca} ${convertible.modelo}`} className="pickup-image" />
                <div className="pickup-info">
                  <h3>{convertible.marca}</h3>
                  <p>{convertible.modelo}</p>
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

export default Convertibles;
