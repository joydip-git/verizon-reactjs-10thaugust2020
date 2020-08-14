import React, { useEffect, useState, useMemo } from "react";
import Axios from "axios";

export default function ProductDetail(props) {
  const id = props.match.params.id;
  //   useMemo(() => {}, [id]);
  console.log(id);
  const [state, setstate] = useState({});
  useEffect(() => {
    Axios.get("http://127.0.0.1:8081/productservice/" + id).then((r) =>
      setstate(r.data)
    );
  }, [id]);
  return <div>{state.productName}</div>;
}
