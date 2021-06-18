// import { TableCell, TableRow } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input"
import Form from "@material-ui/core/FormControl"
import React, { useContext } from "react";
// import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { storeContext } from "../../contexts/StoreContext";
import classes from "./Order.module.css";
import { Link } from "react-router-dom";

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
                <Input type="text" placeholder="ФИО" required />
                <Input type="text" placeholder="Город" required />
                <Input type="text" placeholder="Адрес доставки" required />
                <div>
                    <Input type="text" placeholder="Телефон" required />
                    <Input type="text" placeholder="Email" required />
                </div>
                <Link to="/payment">
                    <Button variant="contained" color="primary">Оплатить</Button>
                </Link>


            </form>

        </div>
        <button>Оплатить</button>
      </form>
    </div>
  );
}
