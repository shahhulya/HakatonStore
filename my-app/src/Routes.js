import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Cart from "./components/Cart/Cart";
import OrderForm from "./components/OrderForm/OrderForm";
import BrandPage from "./Views/BrandPage/BrandPage";
import MainPage from "./Views/MainPage/MainPage";
import ProductCreatePage from "./Views/ProductCreatePage/ProductCreatePage";
import ProductDetailPage from "./Views/ProductDetailPage/ProductDetailPage";
import ProductUpdatePage from "./Views/ProductUpdatePage/ProductUpdatePage";
import SearchResultPage from "./Views/SearchResultPage/SearchResultPage";
// import PaymentForm from "./components/Payment/Peyment";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/products/create" component={ProductCreatePage} exact />
        <Route
          path="/products/search/:searchValue"
          component={SearchResultPage}
          exact
        />
        <Route path="/products/:id" component={ProductDetailPage} exact />
        <Route
          path="/products/:id/update/"
          component={ProductUpdatePage}
          exact
        />
        <Route path="/brand/:id" component={BrandPage} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/orderform" component={OrderForm} />
      </Switch>
    </Router>
  );
}
