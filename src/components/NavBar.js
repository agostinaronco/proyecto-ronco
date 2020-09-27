import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartIcon from "./CartIcon";
import { CartProvider } from "./../context/cartContext";

const Navegacion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">E-commerce</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Productos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contacto</NavLink>
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
