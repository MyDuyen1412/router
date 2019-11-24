import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AnimationRoute from "./components/AnimationRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function Routes() {
  return (
    <AnimationRoute>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </AnimationRoute>
  );
}

export default Routes;
