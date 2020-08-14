import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductRow({ product }) {
  return (
    <tr>
      <ProductRowData product={product} />
    </tr>
  );
}
ProductRow.propTypes = {
  product: PropTypes.any.isRequired,
};
// ProductRow.propTypes = {
//   product: PropTypes.any.isRequired,
//   change: PropTypes.func,
//   counter: PropTypes.number.isRequired,
// };

function ProductRowData({ product }) {
  const style = {
    width: "50px",
    margin: "2px",
  };
  return (
    <>
      <td>
        <Link
          to={{
            pathname: `/products/${product.productId}`,
          }}
        >
          <div className="img-responsive">
            <img
              src={product.imageUrl}
              alt="NA"
              title={product.productName}
              style={style}
            />
          </div>
        </Link>
      </td>
      <td>{product.productName}</td>
      <td>{product.productCode}</td>
      <td>{product.price}</td>
    </>
  );
}
