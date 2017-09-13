import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, IndexRoute, hashHistory} from "react-router"

import Club from "./pages/Club";
import Fixture from "./pages/Fixture";
import Layout from "./pages/Layout";
import Plantel from "./pages/Plantel";
import Player from "./pages/Player";
import Ficha from "./components/layout/Ficha";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Club}></IndexRoute>
      <Route path="plantel" component={Plantel}></Route>
      <Route path="fixture" component={Fixture}></Route>
      <Route path="player/:player" component={Player}></Route>
      <Route path="ficha/:fecha" component={Ficha}></Route>
    </Route>
  </Router>,
app);
