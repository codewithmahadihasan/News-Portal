import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import LeftSideNav from "../Navber/LeftSideNav/LeftSideNav";
import RightSideNav from "../Navber/RightSideNav/RightSideNav";
import TopNav from "../Navber/Top Nav/TopNav";

const Main = () => {
  return (
    <div>
      <TopNav></TopNav>
      <div className="grid lg:grid-cols-12">
        <div className="bg-[#0f0b3d] lg:col-span-2 hidden lg:block  ">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-7 bg-[#090A27]">
          <Outlet></Outlet>
        </div>
        <div className="bg-[#0f0b3d] lg:col-span-3">
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
