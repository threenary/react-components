import React from "react";
import {IndexLink, Link} from "react-router";

import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const buttonStyle = {
        padding: "30px 150px"
    };
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="text-center">Club Deportivo Español</h1>
              <div>
                  <IndexLink to="/" style={buttonStyle}><button class="btn">Club</button></IndexLink>
                  <Link to="plantel" style={buttonStyle}><button class="btn">Plantel</button></Link>
                  <Link to="fixture" style={buttonStyle}><button class="btn">Fixture</button></Link>
              </div>
              <hr></hr>
              {this.props.children}
              <hr></hr>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
