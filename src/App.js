import React from "react";
import "./App.css";
import Navegacion from "./components/NavBar";
import Home from "./components/Home";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navegacion />
      </header>
      <section>
        <Home greeting="Bienvenidos" />
        <Counter initial={1} min={1} max={5} />
      </section>
    </div>
  );
}

export default App;
