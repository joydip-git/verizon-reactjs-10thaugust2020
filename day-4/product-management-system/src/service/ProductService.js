import axios from "axios";
const url = "http://127.0.0.1:8081/productservice";
const getProducts = () => {
  return axios.get(url);
};
const getProductById = (id) => {};
const addProduct = (product) => {};
const removeProduct = (pid) => {};
const updateProduct = (product) => {};
export {
  getProductById,
  getProducts,
  addProduct,
  updateProduct,
  removeProduct,
};
/*
export default class ProductService {
  url = "http://127.0.0.1:8081/productservice";
  static getProducts() {
    return axios.get(this.url);
  }
  getProductById(id) {}
  addProduct(product) {}
  removeProduct(pid) {}
  updateProduct(product) {}
}
*/
