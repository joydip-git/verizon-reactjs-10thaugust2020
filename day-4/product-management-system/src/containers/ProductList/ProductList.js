import React, { Component } from "react";
import ProductTable from "../../components/Products/ProductTable/ProductTable";
import { connect } from "react-redux";
import * as mapper from "./productList_mapStateandDispatchToProps";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { loading, error, products } = { ...this.props };
    let design = null;
    if (loading) {
      design = <h1>Loading...</h1>;
    } else if (error) {
      design = <h1>Error: {error}</h1>;
    } else {
      design = (
        <div className="panel panel-primary">
          <ProductTable products={products} />
        </div>
      );
    }
    return <div>{design}</div>;
  }
}

export default connect(
  mapper.mapStateToProps,
  mapper.mapDispatchToProps
)(ProductList);
