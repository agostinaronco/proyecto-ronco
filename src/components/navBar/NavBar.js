import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import CartIcon from "./CartIcon";
import { NavLink } from "react-router-dom";
import Categories from "./categories"

const Navegacion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavLink to="/" className="logo">E-commerce</NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Categorias
                </DropdownToggle>
                <DropdownMenu right>
                <Categories/>
                </DropdownMenu>
              </UncontrolledDropdown>
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
