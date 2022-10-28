import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";

const HomePage = () => {
  const datas = useLoaderData();

  return (
    <div>
      {datas.map((data) => (
        <SingleNews key={data._id} data={data}></SingleNews>
      ))}
    </div>
  );
};

export default HomePage;
