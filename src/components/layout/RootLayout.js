import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AttastHeader from "./AttastHeader";

const RootLayout = () => {
  return (
    <>
      <AttastHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
