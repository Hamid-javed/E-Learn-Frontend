import React from "react";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
