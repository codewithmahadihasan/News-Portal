import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar, FaEye } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  // console.log(news);
  return (
    <div className="text-white">
      <div className="flex justify-center">
        <div className="flex flex-col m-4 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
          <div className="flex items-center space-x-4">
            <img
              alt=""
              className="w-10 h-10 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800"
              src={news.author.img}
            />

            <div className="flex flex-col space-y-1">
              <h1 className="text-lg font-bold">{news.author.name}</h1>
              <span className="text-xs text-gray-400">
                {news.author.published_date}
              </span>
            </div>
          </div>
          <div>
            <img
              src={news.thumbnail_url}
              alt=""
              className="object-cover w-full mb-4 h-60 rounded sm:h-96 bg-gray-500"
            />
            <h2 className="mb-1 text-xl font-semibold">{news.title}</h2>
            <p className="text-sm text-gray-400">{news.details}</p>
          </div>
          <div>
            <Link
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              to={`/category/${news.category_id}`}
            >
              Go to Category
            </Link>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="space-x-2">
              <button
                aria-label="Share this post"
                type="button"
                className="p-2 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current text-violet-400"
                >
                  <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                </svg>
              </button>
              <button
                aria-label="Bookmark this post"
                type="button"
                className="p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current text-violet-400"
                >
                  <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                </svg>
              </button>
            </div>
            <div className="flex space-x-2 text-sm text-gray-400">
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
                <FaStar className="text-yellow-400"></FaStar>
                <span>{news.rating.number}</span>
              </button>
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
                <FaEye className="text-yellow-400"></FaEye>
                <span>{news.total_view}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
