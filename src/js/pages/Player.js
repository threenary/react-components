import React from "react";

export default class Player extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.params.player}</h1>
      Ficha Técnica...
      <br></br>
      <br></br>
      </div>
    );
  }
}
