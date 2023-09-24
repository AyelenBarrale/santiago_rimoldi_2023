import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/scss/style.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

import Home from "./Views/Home/Home";
import Works from "./Views/Works/Works";
import Wip from "./Views/Wip/Wip";
import Contact from "./Views/Contact/Contact";
import About from "./Views/About/About";
import Portfolio from "./Views/Portfolio/Portfolio";
import { Forest } from "./Views/Works/Forest";
import { Mut } from "./Views/Works/Mut";
import { Sunsrace } from "./Views/Works/Sunsrace";
import { Planv } from "./Views/Works/Planv";
import { Lighthouse } from "./Views/Works/Lighthouse";
import { Logos } from "./Views/Works/Logos";
import { Utah } from "./Views/Works/Utah";
import { Vineyard } from "./Views/Works/Vineyard";
import { Shark } from "./Views/Works/Shark";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
      </div>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Works' component={Works} />
        <Route path='/WIP' component={Wip} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/forest' component={Forest} />
        <Route path='/mut' component={Mut} />
        <Route path='/sunsrace' component={Sunsrace} />
        <Route path='/planv' component={Planv} />
        <Route path='/lighthouse' component={Lighthouse} />
        <Route path='/logos' component={Logos} />
        <Route path='/utah' component={Utah} />
        <Route path='/vineyard' component={Vineyard} />
        <Route path='/shark' component={Shark} />
        <Route path='*'>
          <h1>404 - Page not found</h1>
        </Route>
      </Switch>

      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
