import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Component/Greet";
import Welcome from "./Component/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Abrar" play="Cricket">
        <p>This is children paragraph.</p>
      </Greet>
      <Greet name="Akash" play="Football">
        <button>Click Me</button>
      </Greet>
      <Greet name="Arham" play="Badminton">
        <p>I am new</p>
      </Greet>
      <Greet name="Adnan" play="Volleyball">
        <h2>just wow!</h2>
      </Greet>
      <Greet name="Azhar" play="Carrom">
        <h3>learning so many things , ALHAMDULILLAH!</h3>
      </Greet>

      <Welcome name="Abrar" play="Cricket" />
      <Welcome name="Akash" play="Football" />
      <Welcome name="Arham" play="Badminton" />
      <Welcome name="Adnan" play="Volleyball" />
      <Welcome name="Azhar" play="Carrom" />
    </div>
  );
}

export default App;
