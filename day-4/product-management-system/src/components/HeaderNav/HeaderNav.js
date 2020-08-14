import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <>
      <h1>PMS APP</h1>
      <nav>
        {/* <Link to="/home" render={() => <h1>Hello</h1>}>
          Test
        </Link> */}
        <Link to="/home">
          <button type="button" className="btn btn-group">
            Home
          </button>
        </Link>
        <Link
          to={{
            hash: "#data",
            pathname: "/products",
          }}
        >
          <button type="button" className="btn btn-group">
            Products
          </button>
        </Link>
        <Link to="/add">
          <button type="button" className="btn btn-group">
            Add
          </button>
        </Link>
      </nav>
    </>
  );
}
