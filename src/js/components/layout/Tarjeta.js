import React from "react";
import {Link} from "react-router"

import Player from "../../pages/Player";

export default class Tarjeta extends React.Component {
  render() {
    return (
      <div class="col-md-4">
        <h2>{this.props.name.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</h2>
        <h3>{this.props.position}</h3>
        <Link to={"player/"+this.props.name}>Ver más</Link>
      </div>
    );
  }
}
