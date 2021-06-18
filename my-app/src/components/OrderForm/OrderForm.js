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
            {/* {cart.products.map((elem) => (
                <TableRow key={elem.item.id}>
                    <TableCell>
                        <img style={{ width: "50px" }} src={elem.item.images[0]} alt="" />{" "}
                    </TableCell>
                    <TableCell align="right">{elem.item.title}</TableCell>
                    <TableCell align="right">{elem.item.price}</TableCell>
                    <TableCell align="right">
                        <input
                            type="number"
                            value={elem.count}
                            onChange={(e) => changeProductCount(e.target.value, elem.item.id)}
                        />
                    </TableCell>
                    <TableCell align="right">{elem.subPrice}</TableCell>
                </TableRow>
            ))} */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="xxx-xxx-xxx-xxx-xxx-xxx" />
                <input type="text" placeholder="ФИО" />
                <input type="text" placeholder="Пароль" />
                <div>
                    <input type="text" placeholder="CVC" />
                    <input type="text" placeholder="ГГ/МГ" />
                </div>
                <button>Оплатить</button>
            </form>
        </div>
    );
}