import React, { memo } from "react";
import "./App.css";
import ProductList from "../ProductList/ProductList";
import AddProduct from "../../components/Products/AddProduct/AddProduct";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../components/Home/Home";
import ProductDetail from "../../components/Products/ProductDetail/ProductDetail";
//import ProductListWithHook from "../ProductList/ProductListWithHook";

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/add" component={AddProduct} />
          <Route path="/products/:id" exact component={memo(ProductDetail)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
/**
 * /products
 * /add
 */
