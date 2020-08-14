import { fetchProductsAsync } from "../../redux/productActions";

//will be passed to the store
// then this call back function will be used by the store to configure the properties
//that you want to be present in your component and map the properties to the properties
//of the state
//so that component can receive the values from the state

export const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading,
    error: state.error,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProductsAsync),
  };
};

// const connector = connect(mapStateToProps);
// const enhancedComp = connector(ProductList);
// export default enhancedComp;
/**
 * return(
 * <PLC products={store.state.products} loading = {store.state.loading} error={error}/>
 * )
 */
