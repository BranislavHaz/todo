import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

import { Main } from "./Layout.styled";

const Layout = () => {
  return (
    <Main>
      <Navbar />
      <Dashboard />
    </Main>
  );
};

export default Layout;
