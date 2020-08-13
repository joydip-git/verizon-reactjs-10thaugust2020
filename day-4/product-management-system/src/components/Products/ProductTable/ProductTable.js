import React from "react";
import ProductRow from "../ProductRow/ProductRow";

export default function ProductTable({ products }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead style={{ backgroundColor: "burlywood" }}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Code</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            return <ProductRow product={p} key={p.productId} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
