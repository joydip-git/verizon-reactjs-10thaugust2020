import React, { Component } from "react";
import { addProductsAsync } from "../../../redux/productActions";
import { connect } from "react-redux";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: null,
      productName: null,
      productCode: null,
      description: null,
      releaseDate: null,
      price: null,
      starRating: null,
      imageUrl: null,
    };
  }
  submitData = (event) => {
    this.props.addProduct(this.state, (message) => window.alert(message));
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <form className="form-horizontal" onSubmit={this.submitData}>
          <div className="form-group">
            <label htmlFor="productId" className="col-sm-2 control-label">
              Id:
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                value={this.state.productId}
                onChange={(e) =>
                  this.setState({ productId: parseInt(e.target.value) })
                }
                name="productId"
                placeholder="enter product id"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="productName" className="col-sm-2 control-label">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={this.state.productName}
                onChange={(e) => this.setState({ productName: e.target.value })}
                name="productName"
                placeholder="enter product name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="productCode" className="col-sm-2 control-label">
              Code:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={this.state.productCode}
                onChange={(e) => this.setState({ productCode: e.target.value })}
                name="productCode"
                placeholder="enter product code"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="price" className="col-sm-2 control-label">
              Price:
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                value={this.state.price}
                onChange={(e) =>
                  this.setState({ price: parseFloat(e.target.value) })
                }
                name="price"
                placeholder="enter product price"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description" className="col-sm-2 control-label">
              Description:
            </label>
            <div className="col-sm-10">
              <input
                type="textarea"
                className="form-control"
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
                name="description"
                placeholder="enter product description"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="releaseDate" className="col-sm-2 control-label">
              Date:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={this.state.releaseDate}
                name="releaseDate"
                onChange={(e) => this.setState({ releaseDate: e.target.value })}
                placeholder="enter product release Date"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="starRating" className="col-sm-2 control-label">
              Rating:
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                value={this.state.starRating}
                onChange={(e) =>
                  this.setState({ starRating: parseFloat(e.target.value) })
                }
                name="starRating"
                placeholder="enter product rtaing"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl" className="col-sm-2 control-label">
              Image Url:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={this.state.imageUrl}
                onChange={(e) => this.setState({ imageUrl: e.target.value })}
                name="imageUrl"
                placeholder="enter product image url"
              />
            </div>
          </div>
          <div className="container-fluid" style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.addProductState.loading,
    error: state.addProductState.error,
    message: state.addProductState.responseMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product, callback) =>
      dispatch(addProductsAsync(product, callback)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
