import React from "react";

export default class Ficha extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    }
  }
  onClick() {
    this.setState({showDetails: !this.state.showDetails})
  }
  render() {
    const {fecha, rival} = this.props.partido
    return (
      <div class="col-md-4" onClick={() => this.onClick()}>
        <h2 class="text-center">Fecha {fecha}</h2>
        {
         this.state.showDetails
           ? <Details partido={this.props.partido}/>
           : null
         }
      </div>
    );
  }
}

class Details extends React.Component {
  render() {
    const {condicion, golesLocal, golesVisita, rival} = this.props.partido

    if (condicion === 'L'){
      const espanyol = <p style={{color: 'red', display: 'inline'}}>Español {golesLocal}</p>
      return (
        <div class="text-center"><h3> {espanyol} <p style={{display:'block'}}> vs {rival} {golesVisita}</p></h3></div>)
    }
    else {
      const espanyol = <p style={{color: 'red'}}>Español {golesVisita}</p>
      return (
        <div class="text-center"><h3><p style={{display:'inline'}}> {rival} {golesLocal} vs</p> {espanyol}</h3></div>)
    }
  }
}
