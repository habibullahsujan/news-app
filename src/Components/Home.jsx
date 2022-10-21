import React from "react";
import { useLoaderData } from "react-router-dom";
import AllNews from "./AllNews";

const Home = () => {
    const allNews=useLoaderData();

  return (
    <div>
        {
            allNews.map(news=><AllNews key={news._id} news={news}></AllNews>)
        }
    </div>
  );
};

export default Home;
