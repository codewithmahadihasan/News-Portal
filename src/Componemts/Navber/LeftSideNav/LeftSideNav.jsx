import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hock/useTitle";

const LeftSideNav = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://news-server-gamma.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="lg:sticky top-28">
      {datas.map((data) => (
        <div className="flex flex-row p-4 ">
          <Link
            to={`/category/${data.id}`}
            className="font-medium text-xl tracking-wide pl-6 text-white transition-colors duration-200 text-start hover:text-purple-700"
            // key={data.id}
          >
            {data.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
