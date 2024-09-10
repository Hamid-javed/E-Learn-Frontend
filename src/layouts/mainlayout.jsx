import React from "react";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import CheckLogin from "../components/CheckLogin";

const mainlayout = () => {
  return (
    <>
      <CheckLogin>
        <Header />
        <Outlet />
        <Footer />
      </CheckLogin>
    </>
  );
};

export default mainlayout;
