import { TableCell, TableRow } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { storeContext } from "../../contexts/StoreContext";
import classes from "./Order.module.css";

export default function OrderForm() {
  const { cart, changeProductCount } = useContext(storeContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/payment");
  };
  return (
    <div className={classes.order_form}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="xxx-xxx-xxx-xxx-xxx-xxx" required />
        <input type="text" placeholder="ФИО" required />
        <input type="text" placeholder="Пароль" required />
        <div>
          <input type="text" placeholder="CVC" required />
          <input type="text" placeholder="ГГ/МГ" required />
        </div>
        <button>Оплатить</button>
      </form>
    </div>
  );
}
