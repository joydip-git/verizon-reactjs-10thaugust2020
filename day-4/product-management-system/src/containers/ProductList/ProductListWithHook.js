import React, { useEffect } from "react";
import ProductTable from "../../components/Products/ProductTable/ProductTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsAsync } from "../../redux/productActions";

const ProductListWithHook = () => {
  const products = useSelector((state) => state.productState.products);
  const loading = useSelector((state) => state.productState.loading);
  const error = useSelector((state) => state.productState.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsAsync());
    return () => {
      console.log("clean up ..wil be called when comp dismounted");
    };
  }, []);

  const createDesign = () => {
    let design = null;
    if (loading) {
      design = <h1>Loading...</h1>;
    } else if (error) {
      design = <h1>Error: {error}</h1>;
    } else {
      design = <ProductTable products={products} />;
    }
    return design;
  };
  return <div>{createDesign()}</div>;
};

export default ProductListWithHook;
