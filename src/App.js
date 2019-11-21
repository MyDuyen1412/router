import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Routes from './routes'
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Other from "./pages/Other";

function App() {
  return (
    <BrowserRouter>
      <Header />
    {/* <Route  path="/home" component={About} /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
