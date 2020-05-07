import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Component/Greet";
import Welcome from "./Component/Welcome";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
