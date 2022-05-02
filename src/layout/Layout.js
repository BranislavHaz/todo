import React, { Suspense } from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

import { Main } from "./Layout.styled";

const Layout = () => {
  return (
    <Main>
      <Navbar />
      <Suspense fallback={<p>loading...</p>}>
        <Dashboard />
      </Suspense>
    </Main>
  );
};

export default Layout;
