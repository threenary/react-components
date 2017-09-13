import React from "react";
import {Link} from "react-router"

import Ficha from "../components/layout/Ficha";

export default class Fixture extends React.Component {
  render() {
    let jornadas = [
      {rival: "Colegiales",condicion: "V",resultado:{local:1,visitante:3}},
      {rival: "Atlanta",condicion: "L",resultado:{local:0,visitante:2}},
      {rival: "Platense",condicion: "V",resultado:{local:'-',visitante:'-'}},
      {rival: "San Miguel",condicion: "L",resultado:{local:'-',visitante:'-'}},
      {rival: "Sacachispas",condicion: "V",resultado:{local:'-',visitante:'-'}},
      {rival: "San Carlos",condicion: "L",resultado:{local:'-',visitante:'-'}}
    ]

    let partidos = []
    let fecha = 1
    for (let jornada of jornadas) {
      partidos.push(new Partido(fecha,jornada));
      fecha++;
    }

    const Partidos = partidos.map((partido, i) =>
        <Ficha key={i} partido={partido}/>
    );

    return (
      <div class="row">
        {Partidos}
      </div>
    );
  }
}


class Partido {
  constructor(fecha, {rival: rival, condicion: condicion, resultado: resultado}) {
    this.fecha = fecha;
    this.rival = rival;
    this.condicion = condicion;
    this.golesLocal = resultado.local;
    this.golesVisita = resultado.visitante;
  }
}
