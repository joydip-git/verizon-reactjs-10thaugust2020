import React, { Component } from "react";
import { getProducts } from "../../service/ProductService";
import ProductTable from "../../components/Products/ProductTable/ProductTable";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    getProducts()
      .then((response) => {
        this.setState({
          products: response.data,
        });
      })
      .catch((err) => console.log(err.message));
  }
  render() {
    return (
      <div>
        {this.state.products ? (
          <ProductTable products={this.state.products} />
        ) : (
          "loading..."
        )}
      </div>
    );
  }
}
