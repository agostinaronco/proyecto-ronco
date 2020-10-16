import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navegacion from "./components/navBar/NavBar";
import Home from "./components/Home";
import ItemList from "./components/itemList/ItemList";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <header className="App-header">
            <Navegacion />
          </header>
          <Switch>
          <Route exact path="/" >
              <section>
                <div className="container">
                  <div className="row text-center">
                    <Home greeting="Bienvenidos" />
                  </div>
                </div>
              </section>
              <section>
                <div className="container">
                  <div className="row">
                    <ItemList />
                  </div>
                </div>
              </section>
            </Route>
            <Route path="/cart">
              <section>
                <h5>CART</h5>
                <div className="container">
                  <Cart />
                </div>
              </section>
            </Route>
            <Route path="/detail/:id">
              <section>
                <div className="container">
                  <ItemDetailContainer />
                </div>
              </section>
            </Route>
            <Route path="/categories/:idCategory" >
              <section>
                <div className="container">
                  <div className="row">
                    <ItemList />
                  </div>
                </div>
              </section>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
