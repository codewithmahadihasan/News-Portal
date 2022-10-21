import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";

const HomePage = () => {
  const datas = useLoaderData();

  return (
    <div className="text-white text-2xl">
      {datas.map((data) => (
        <SingleNews key={data._id} data={data}></SingleNews>
      ))}
    </div>
  );
};

export default HomePage;
