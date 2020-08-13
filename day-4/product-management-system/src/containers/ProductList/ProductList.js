import React, { Component } from "react";
//import axios from "axios";
//import ProductService from "../../service/ProductService";
import { getProducts } from "../../service/ProductService";
import ProductTable from "../../components/ProductTable/ProductTable";

export default class ProductList extends Component {
  //rconst
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    //code to get all products
    //Promise<AxiosResponse<any>>
    //new ProductService().
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
