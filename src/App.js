import React from "react";
import "./App.css";
import Navegacion from "./components/NavBar";
import Home from "./components/Home";

import ItemList from "./components/itemList/ItemList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navegacion />
      </header>
      <section>
        <div className="container">
          <Home greeting="Bienvenidos" />
          <div className="row">
            <ItemList />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
