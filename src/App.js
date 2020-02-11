import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { DepositApp } from './DepositApp';
import { Header } from './Header';

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/deposit">
            <DepositApp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function NoMatch() {
  return <h2>404 page</h2>;
}

export default App;