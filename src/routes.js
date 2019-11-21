import React from "react";
import { Route, Switch } from "react-router-dom";
import AnimationRoute from "./components/AnimationRoute";
import Home from "./pages/Home";
import About from "./pages/About";
export default function Routes() {
  return (
    <AnimationRoute>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </AnimationRoute>
  );
}
