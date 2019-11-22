import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import AnimationRoute from "./components/AnimationRoute";
import Animation from './components/AnimationRoute/Animation';
// import { CSSTransition } from "react-transition-group";
import TransitionGroup from './components/TransitionGroup';
import CSSTransition from './components/CSSTransition';
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function Routes({ location }) {
  return (
    // <TransitionGroup className="transition-group">
    //   <CSSTransition
    //     key={location.key}
    //     timeout={{ enter: 1000, exit: 1000 }}
    //     classNames="fade"
    //   >
    //     <section className="route-section">
    //     <Switch location={location}>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/about" component={About} />
    //     </Switch>
    //     </section>
    //   </CSSTransition>
    // </TransitionGroup>
    <AnimationRoute>
      <Animation key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Animation>
    </AnimationRoute>
  );
}

export default withRouter(Routes);
