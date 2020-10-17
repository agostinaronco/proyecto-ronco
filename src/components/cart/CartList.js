import React, {setState, useState} from "react";
import { Form, Input, FormGroup } from "reactstrap";
const CartList = ({ data, total, updateBuyer, value,onClick }) => {
  const [repeatEmailValidation, setRepeatEmailValidation] = useState(false);

  return (
    <>
      <ul className="cartList_list">
        <li className="cartList_list--title">
          <p>Modelo</p>
          <p>Cantidad</p>
          <p>Subtotal</p>
        </li>
        {data.map((data) => (
          <li>
            <p>{data.title}</p>
            <p>{data.count}</p>
            <p>${data.precio * data.count}</p>
          </li>
        ))}
      </ul>
      <div className="cart_total">
        <p>
          TOTAL: <span>${total}</span>
        </p>
      </div>

      <div className="checkout_form" id="checkout_form">
        <p>
          Por favor, completá los campos a continuación para poder realizar tu
          pedido
        </p>
        <Form>
          <FormGroup className=" mb-3">
            <Input type="text" name="nombre" id="nombre" placeholder="Nombre y apellido" value={value.nombre} onChange={(e) => updateBuyer("nombre", e.target.value)} />
          </FormGroup>
          <FormGroup className=" mb-3">
            <Input type="number" name="telefono" id="telefono" placeholder="Teléfono"  value={value.phone} onChange={(e) => updateBuyer("phone", e.target.value)} />
          </FormGroup>
          <FormGroup className=" mb-3">
            <Input type="email" name="email" id="email" placeholder="Email"  value={value.email} onChange={(e) => updateBuyer("email", e.target.value)} />
          </FormGroup>
          <FormGroup className=" mb-3">
            <Input type="email" name="repeat_email" id="email" placeholder="Repetir Email"  
            disabled={!value.email} 
            onChange={(e) => value.email === e.target.value ? setRepeatEmailValidation(true) : setRepeatEmailValidation(false) }
            className={!repeatEmailValidation ? "inputError" : "inputOk" } />
          </FormGroup>
        </Form>
          <div className="text-right">
            <button type="button" className="button" onClick={onClick} disabled={!value.nombre || !value.email || !value.phone || !repeatEmailValidation} >Finalizar pedido</button>
          </div>
      </div>
    </>
  );
};

export default CartList;
