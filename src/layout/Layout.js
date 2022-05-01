import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const Layout = () => {
  const { modalError } = useSelector((state) => state.todo);

  console.log(modalError);

  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Layout;
