import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AnimationRoute from "./components/AnimationRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Other from "./pages/Other";
import "./App.css";

function Routes() {
  return (
    <AnimationRoute timeout={500} slideToLeft>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user" component={User} />
        <Route exact path="/other" component={Other} />

    </AnimationRoute>
  );
}

export default Routes;
