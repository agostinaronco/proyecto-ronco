import React from "react";
import "./App.css";
import Navegacion from "./components/NavBar";
import Home from "./components/Home";

import ItemList from "./components/itemList/ItemList";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navegacion />
      </header>
      <section>
        <div className="container">
          <div className="row text-center">
            <Home greeting="Bienvenidos" />
          </div>
        </div>
      </section>
      <section>
        <h5>ITEM DETAIL</h5>
        <div className="container">
          <ItemDetailContainer />
        </div>
      </section>
      <section>
        <h5>ITEM LIST</h5>
        <div className="container">
          <div className="row">
            <ItemList />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
