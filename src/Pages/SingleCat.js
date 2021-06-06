import React from "react";

import { useParams } from "react-router-dom";

const SingleCat = () => {
  const { name } = useParams();
  return <div className="page_container">this is single cat page {name}</div>;
};

export default SingleCat;
