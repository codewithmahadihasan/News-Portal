import React from "react";
import { useLoaderData } from "react-router-dom";

const Catagory = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1>This is Category : {data.length} </h1>
    </div>
  );
};

export default Catagory;
