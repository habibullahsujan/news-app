import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LeftSideNav from "../Components/LeftSideNav";
import RightSideNav from "../Components/RightSideNav";

const Main = () => {
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-3">
          <LeftSideNav />
        </div>
        <div className="col-span-6">
          <Outlet />
        </div>
        <div className="col-span-3">
          <RightSideNav />
        </div>
      </div>
    </>
  );
};

export default Main;
