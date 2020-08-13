import React from "react";

export default function ProductTable({ products }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Code</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((p) => {
            return <ProductRow person={p} key={p.productId} />;
          })} */}
        </tbody>
      </table>
    </div>
  );
}
