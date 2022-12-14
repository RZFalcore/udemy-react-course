import React from "react";
import MainNavigation from "./MainNavigation";

import { main } from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={main}>{children}</main>
    </>
  );
};

export default Layout;
