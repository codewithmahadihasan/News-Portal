import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hock/useTitle";
import SingleNews from "./SingleNews";

const HomePage = () => {
  const datas = useLoaderData();
  useTitle("Home");

  return (
    <div>
      {datas.map((data) => (
        <SingleNews key={data._id} data={data}></SingleNews>
      ))}
    </div>
  );
};

export default HomePage;
