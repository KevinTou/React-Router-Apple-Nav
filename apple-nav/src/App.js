import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Mac from "./components/Products/Mac/Mac";
import Ipad from "./components/Products/Ipad/Ipad";
import Iphone from "./components/Products/Iphone/Iphone";
import Watch from "./components/Products/Watch/Watch";
import TV from "./components/Products/TV/TV";
import Music from "./components/Products/Music/Music";
import Support from "./components/Support/Support";
import NoMatch from "./components/NoMatch/NoMatch";

import appleData from "./data/appleData";

const App = () => {
  return (
    <>
      <header>
        <div className="container">
          <NavBar />
        </div>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/mac"
          render={props => {
            return <Mac {...props} appleData={appleData} />;
          }}
        />
        <Route
          path="/ipad"
          render={props => {
            return <Ipad {...props} appleData={appleData} />;
          }}
        />
        <Route
          path="/iphone"
          render={props => {
            return <Iphone {...props} appleData={appleData} />;
          }}
        />
        <Route
          path="/watch"
          render={props => {
            return <Watch {...props} appleData={appleData} />;
          }}
        />
        <Route
          path="/tv"
          render={props => {
            return <TV {...props} appleData={appleData} />;
          }}
        />
        <Route
          path="/music"
          render={props => {
            return <Music {...props} appleData={appleData} />;
          }}
        />
        <Route path="/support" component={Support} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default App;
