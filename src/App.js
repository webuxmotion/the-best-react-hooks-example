import React, { useContext } from "react";
import { Amount } from './Amount';
import { Controls } from './Controls';
import { AppContext } from './context/AppContext';
import "./App.css";

function App() {
  const { amount, deposit, withdraw } = useContext(AppContext);

  return (
    <div className="app app-container">
      <Amount />
      <div className="separator" />
      <Controls />
    </div>
  )
}

export default App;