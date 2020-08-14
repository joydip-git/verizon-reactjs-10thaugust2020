import React from "react";
import "./App.css";
import ProductList from "../ProductList/ProductList";
import AddProduct from "../../components/Products/AddProduct/AddProduct";
//import ProductListWithHook from "../ProductList/ProductListWithHook";

function App() {
  return (
    <div className="App">
      {/* <ProductList /> */}
      {/* <ProductListWithHook /> */}
      <AddProduct />
    </div>
  );
}

export default App;
