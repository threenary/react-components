import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const clubClass = location.pathname === "/" ? "active" : "";
    const playersClass = location.pathname.match(/^\/plantel/) ? "active" : "";
    const fixtureClass = location.pathname.match(/^\/fixture/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={clubClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Club</IndexLink>
              </li>
              <li class={playersClass}>
                <Link to="plantel" onClick={this.toggleCollapse.bind(this)}>Plantel</Link>
              </li>
              <li class={fixtureClass}>
                <Link to="fixture" onClick={this.toggleCollapse.bind(this)}>Fixture</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
