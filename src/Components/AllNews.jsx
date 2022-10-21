import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaStar } from "react-icons/fa";

const AllNews = ({ news }) => {
  const {_id, image_url, title, author, details, total_view, rating } = news;
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col max-w-lg   rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex mb-3 bg-gray-100 p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5 justify-between">
              <div className="flex gap-2">
                <img
                  alt=""
                  src={author?.img}
                  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="text-sm font-semibold"
                  >
                    {author?.name}
                  </Link>
                  <span className="text-gray-400">{author.published_date}</span>
                </div>
              </div>

              <div className="space-x-2">
                <button
                  aria-label="Share this post"
                  type="button"
                  className="p-2 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current dark:text-violet-400"
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
                    className="w-4 h-4 fill-current dark:text-violet-400"
                  >
                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <h2 className="mb-1 text-xl font-semibold">{title}</h2>
          </div>
        </div>
        <div className="p-2">
          <img src={image_url} alt="" className="object-cover w-full" />
          {details.length > 150 ? (
            <p>
              {details.slice(0, 150) + "..."}
              <Link className="text-blue-700 font-bold" to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>

        <div className="flex justify-between dark:text-gray-400  bg-gray-100">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <FaStar className="text-orange-400" />

            <span>{rating?.number}</span>
          </button>
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <FaEye />

            <span>{total_view}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
