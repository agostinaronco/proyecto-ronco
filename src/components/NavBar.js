import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import CartIcon from "./CartIcon";
import { CartProvider } from "./../context/cartContext";
import { NavLink, Link } from "react-router-dom";

const Navegacion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavLink to="/">E-commerce</NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/">Productos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/components/">Contacto</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <CartIcon />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navegacion;
