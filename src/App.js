import React from "react";
import "./App.css";
import Navegacion from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navegacion />
      </header>
      <section>
        <Home greeting="Bienvenidos" />
      </section>
    </div>
  );
}

export default App;
