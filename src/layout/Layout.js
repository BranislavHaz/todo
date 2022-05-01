import React from "react";
import { useSelector } from "react-redux";

const Layout = () => {
  const { modalError } = useSelector((state) => state.todo);

  console.log(modalError);

  return <div>Layout</div>;
};

export default Layout;
