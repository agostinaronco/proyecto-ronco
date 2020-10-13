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
import { NavLink } from "react-router-dom";
import { getFirestore } from "../../firebase";

const Categories = (props) => {
  const [loading, setLoading] = useState(false);
  const [categoria, setCategoria] = useState();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("categories");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay resultados");
        }
        setCategoria(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  if (categoria) {
    return categoria.map((cat) => (
    <DropdownItem>
        <NavLink to={`${cat.id}`} key={cat.key}>{cat.nombre}</NavLink>
    </DropdownItem>
    ));
  } else {
    return (
      <div>
        <p className="loading">Loading</p>
      </div>
    );
  }
};

export default Categories;
