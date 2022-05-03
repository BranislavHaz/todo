import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

import * as $ from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <$.Main>
        <Navbar />
        <Dashboard />
      </$.Main>
      <Footer />
    </>
  );
};

export default Layout;
