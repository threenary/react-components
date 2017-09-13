import React from "react";

import Tarjeta from "../components/layout/Tarjeta";

export default class Plantel extends React.Component {
  render() {
    const Jugadores = [
      ["Pedro Catalano","Arquero"],
      ["Jose Batista","Defensor"],
      ["Daniel Ergo","Mediocampo"],
      ["Hugo Castillo","Delantero"],
      ["Rafael Luongo","Defensor"],
      ["Wilson Núñez","Delantero"],
    ].map((player, i) => <Tarjeta key={i} name={player[0]} position={player[1]}/> );
    return (
        <div class="row">{Jugadores}</div>
    );
  }
}
